
import * as THREE from "three";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Planet3D = {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  destroy: () => void;
};

const initPlanet3D = (): Planet3D => {
  // --------------------------------
  // CANVAS
  // --------------------------------

  const canvas = document.querySelector(
    "canvas.planet-3D"
  ) as HTMLCanvasElement | null;

  if (!canvas) {
    throw new Error(
      "Canvas with class 'planet-3D' was not found."
    );
  }

  // --------------------------------
  // SCENE
  // --------------------------------

  const scene = new THREE.Scene();

  // --------------------------------
  // SIZE
  // --------------------------------

  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2),
  };

  // --------------------------------
  // CAMERA
  // --------------------------------

  const camera = new THREE.PerspectiveCamera(
    15,
    size.width / size.height,
    0.1,
    100
  );

  camera.position.set(0, 0, 7);

  scene.add(camera);

  // --------------------------------
  // RENDERER
  // --------------------------------

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.setSize(size.width, size.height);

  renderer.setPixelRatio(size.pixelRatio);

  renderer.setClearColor(0x000000, 0);

  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // --------------------------------
  // MOLECULAR PARTICLES
  // --------------------------------

  const particleCount = 1800;

  const radius = 2;

  const positions = new Float32Array(
    particleCount * 3
  );

  const originalPositions = new Float32Array(
    particleCount * 3
  );

  const spreadPositions = new Float32Array(
    particleCount * 3
  );

  // --------------------------------
  // CREATE SPHERE POSITIONS
  // --------------------------------

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;

    const phi = Math.acos(
      2 * Math.random() - 1
    );

    const theta =
      Math.random() * Math.PI * 2;

    // Keep particles slightly inside
    // the sphere so it doesn't look
    // like a perfect wireframe ball.

    const r =
      radius *
      (0.82 + Math.random() * 0.18);

    const x =
      r *
      Math.sin(phi) *
      Math.cos(theta);

    const y =
      r *
      Math.sin(phi) *
      Math.sin(theta);

    const z =
      r *
      Math.cos(phi);

    // Initial position

    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = z;

    // Save original position

    originalPositions[i3] = x;
    originalPositions[i3 + 1] = y;
    originalPositions[i3 + 2] = z;

    // --------------------------------
    // SPREAD POSITION
    // --------------------------------

    const direction = new THREE.Vector3(
      x,
      y,
      z
    ).normalize();

    const spreadDistance =
      3 + Math.random() * 5;

    spreadPositions[i3] =
      x + direction.x * spreadDistance;

    spreadPositions[i3 + 1] =
      y + direction.y * spreadDistance;

    spreadPositions[i3 + 2] =
      z + direction.z * spreadDistance;
  }

  // --------------------------------
  // GEOMETRY
  // --------------------------------

  const geometry =
    new THREE.BufferGeometry();

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      positions,
      3
    )
  );

  // --------------------------------
  // MATERIAL
  // --------------------------------

  const material =
    new THREE.PointsMaterial({
      size: 0.035,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
    });

  // --------------------------------
  // MOLECULAR SPHERE
  // --------------------------------

  const molecules = new THREE.Points(
    geometry,
    material
  );

  scene.add(molecules);

  // --------------------------------
  // SCROLL PROGRESS
  // --------------------------------

  const scrollState = {
    progress: 0,
  };

  // --------------------------------
  // SCROLL TRIGGER
  // --------------------------------

  const scrollTrigger =
    ScrollTrigger.create({
      trigger: ".hero_main",

      start: "top top",

      end: "bottom top",

      scrub: 3,

      pin: true,

      onUpdate: (self) => {
        scrollState.progress =
          self.progress;
      },
    });

  // --------------------------------
  // ANIMATION LOOP
  // --------------------------------

  const animate = (time: number) => {
    // Rotate molecular sphere

    molecules.rotation.y =
      time * 0.08;

    molecules.rotation.x =
      Math.sin(time * 0.2) * 0.05;

    // Current scroll progress

    const progress =
      scrollState.progress;

    // Particle positions

    const positionAttribute =
      geometry.attributes.position;

    for (
      let i = 0;
      i < particleCount;
      i++
    ) {
      const i3 = i * 3;

      const x =
        THREE.MathUtils.lerp(
          originalPositions[i3],
          spreadPositions[i3],
          progress
        );

      const y =
        THREE.MathUtils.lerp(
          originalPositions[i3 + 1],
          spreadPositions[i3 + 1],
          progress
        );

      const z =
        THREE.MathUtils.lerp(
          originalPositions[i3 + 2],
          spreadPositions[i3 + 2],
          progress
        );

      positionAttribute.setXYZ(
        i,
        x,
        y,
        z
      );
    }

    positionAttribute.needsUpdate = true;

    // Render

    renderer.render(
      scene,
      camera
    );
  };

  gsap.ticker.add(animate);

  gsap.ticker.lagSmoothing(0);

  // --------------------------------
  // RESIZE
  // --------------------------------

  const handleResize = () => {
    size.width =
      window.innerWidth;

    size.height =
      window.innerHeight;

    size.pixelRatio =
      Math.min(
        window.devicePixelRatio,
        2
      );

    camera.aspect =
      size.width /
      size.height;

    camera.updateProjectionMatrix();

    renderer.setSize(
      size.width,
      size.height
    );

    renderer.setPixelRatio(
      size.pixelRatio
    );
  };

  window.addEventListener(
    "resize",
    handleResize
  );

  // --------------------------------
  // CLEANUP
  // --------------------------------

  const destroy = () => {
    // Remove GSAP animation

    gsap.ticker.remove(animate);

    // Remove ScrollTrigger

    scrollTrigger.kill();

    // Remove resize listener

    window.removeEventListener(
      "resize",
      handleResize
    );

    // Dispose Three.js resources

    geometry.dispose();

    material.dispose();

    scene.remove(molecules);
  };

  // --------------------------------
  // RETURN
  // --------------------------------

  return {
    scene,
    renderer,
    destroy,
  };
};

export default initPlanet3D;
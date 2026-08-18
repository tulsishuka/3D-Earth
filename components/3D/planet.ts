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

  const canvas = document.querySelector(
    "canvas.planet-3D"
  ) as HTMLCanvasElement | null;

  if (!canvas) {
    throw new Error(
      "Canvas with class 'planet-3D' was not found."
    );
  }


  const scene = new THREE.Scene();

  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(
      window.devicePixelRatio,
      2
    ),
  };


  const camera =
    new THREE.PerspectiveCamera(
      35,
      size.width / size.height,
      0.1,
      100
    );

  camera.position.set(
    0,
    0,
    10
  );

  scene.add(camera);

 
  const renderer =
    new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

  renderer.setSize(
    size.width,
    size.height
  );

  renderer.setPixelRatio(
    size.pixelRatio
  );

  renderer.setClearColor(
    0x000000,
    0
  );

  renderer.outputColorSpace =
    THREE.SRGBColorSpace;

  const particleCount = 1400;


  const fieldWidth = 13;

  const fieldHeight = 8;

  const fieldDepth = 6;


  const positions =
    new Float32Array(
      particleCount * 3
    );

  const initialPositions =
    new Float32Array(
      particleCount * 3
    );

  const molecularPositions =
    new Float32Array(
      particleCount * 3
    );

  const finalPositions =
    new Float32Array(
      particleCount * 3
    );


  const colors =
    new Float32Array(
      particleCount * 3
    );

  const cyan =
    new THREE.Color(
      0x45e9ff
    );

  const blue =
    new THREE.Color(
      0x4b8dff
    );

  const purple =
    new THREE.Color(
      0xa855f7
    );

  const particleColor =
    new THREE.Color();

 
  for (
    let i = 0;
    i < particleCount;
    i++
  ) {
    const i3 = i * 3;

    const x =
      (Math.random() - 0.5) *
      fieldWidth;

    const y =
      (Math.random() - 0.5) *
      fieldHeight;

    const z =
      (Math.random() - 0.5) *
      fieldDepth;

    positions[i3] = x;

    positions[i3 + 1] = y;

    positions[i3 + 2] = z;

    initialPositions[i3] =
      x;

    initialPositions[i3 + 1] =
      y;

    initialPositions[i3 + 2] =
      z;

  
    const phi =
      Math.acos(
        2 * Math.random() - 1
      );

    const theta =
      Math.random() *
      Math.PI *
      2;

    const radius =
      1.8 +
      Math.random() *
      0.3;

    const mx =
      radius *
      Math.sin(phi) *
      Math.cos(theta);

    const my =
      radius *
      Math.sin(phi) *
      Math.sin(theta);

    const mz =
      radius *
      Math.cos(phi);

    molecularPositions[i3] =
      mx;

    molecularPositions[i3 + 1] =
      my;

    molecularPositions[i3 + 2] =
      mz;


    const direction =
      new THREE.Vector3(
        x,
        y,
        z
      ).normalize();

    const finalDistance =
      1 +
      Math.random() *
      3;

    finalPositions[i3] =
      x +
      direction.x *
      finalDistance;

    finalPositions[i3 + 1] =
      y +
      direction.y *
      finalDistance;

    finalPositions[i3 + 2] =
      z +
      direction.z *
      finalDistance;

    const random =
      Math.random();

    if (random < 0.55) {
      particleColor.copy(
        cyan
      );
    } else if (
      random < 0.85
    ) {
      particleColor.copy(
        blue
      );
    } else {
      particleColor.copy(
        purple
      );
    }

    colors[i3] =
      particleColor.r;

    colors[i3 + 1] =
      particleColor.g;

    colors[i3 + 2] =
      particleColor.b;
  }

  const geometry =
    new THREE.BufferGeometry();

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
      positions,
      3
    )
  );

  geometry.setAttribute(
    "color",
    new THREE.BufferAttribute(
      colors,
      3
    )
  );

  const material =
    new THREE.PointsMaterial({
      size: 0.055,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      blending:
        THREE.AdditiveBlending,
      depthWrite: false,
    });

  const particles =
    new THREE.Points(
      geometry,
      material
    );

  scene.add(
    particles
  );

  const connectionDistance =
    0.55;

  const connectionPositions: number[] =
    [];

  for (
    let i = 0;
    i < particleCount;
    i++
  ) {
    const i3 = i * 3;

    const x1 =
      molecularPositions[i3];

    const y1 =
      molecularPositions[i3 + 1];

    const z1 =
      molecularPositions[i3 + 2];

    for (
      let j = i + 1;
      j < particleCount;
      j++
    ) {
      const j3 = j * 3;

      const x2 =
        molecularPositions[j3];

      const y2 =
        molecularPositions[j3 + 1];

      const z2 =
        molecularPositions[j3 + 2];

      const dx =
        x1 - x2;

      const dy =
        y1 - y2;

      const dz =
        z1 - z2;

      const distance =
        Math.sqrt(
          dx * dx +
          dy * dy +
          dz * dz
        );

      if (
        distance <
        connectionDistance
      ) {
        connectionPositions.push(
          x1,
          y1,
          z1,
          x2,
          y2,
          z2
        );
      }
    }
  }

 
  const connectionGeometry =
    new THREE.BufferGeometry();

  connectionGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(
      connectionPositions,
      3
    )
  );

 
  const connectionMaterial =
    new THREE.LineBasicMaterial({
      color: 0x4ccfff,
      transparent: true,
      opacity: 0,
      blending:
        THREE.AdditiveBlending,
      depthWrite: false,
    });

 
  const connections =
    new THREE.LineSegments(
      connectionGeometry,
      connectionMaterial
    );

  scene.add(
    connections
  );

  const molecularGroup =
    new THREE.Group();

  molecularGroup.add(
    particles
  );

  molecularGroup.add(
    connections
  );

  scene.add(
    molecularGroup
  );

 
  const scrollState = {
    progress: 0,
  };

 
  const scrollTrigger =
    ScrollTrigger.create({
      trigger:
        ".hero_main",

      start:
        "top top",

      end:
        "+=3000",

      scrub: 2,

      pin: true,

      onUpdate: (
        self
      ) => {
        scrollState.progress =
          self.progress;
      },
    });

  
  const animate = (
    time: number
  ) => {
    const progress =
      scrollState.progress;

   
    molecularGroup.rotation.y =
      time * 0.05;

    molecularGroup.rotation.x =
      Math.sin(
        time * 0.15
      ) * 0.03;

    const positionAttribute =
      geometry.attributes
        .position;

    for (
      let i = 0;
      i < particleCount;
      i++
    ) {
      const i3 = i * 3;

      let x: number;
      let y: number;
      let z: number;

      
      if (
        progress < 0.45
      ) {
        const phase =
          progress /
          0.45;

        const eased =
          THREE.MathUtils.smoothstep(
            phase,
            0,
            1
          );

        x =
          THREE.MathUtils.lerp(
            initialPositions[i3],
            molecularPositions[i3],
            eased
          );

        y =
          THREE.MathUtils.lerp(
            initialPositions[i3 + 1],
            molecularPositions[i3 + 1],
            eased
          );

        z =
          THREE.MathUtils.lerp(
            initialPositions[i3 + 2],
            molecularPositions[i3 + 2],
            eased
          );
      }

     
      else if (
        progress < 0.7
      ) {
        x =
          molecularPositions[i3];

        y =
          molecularPositions[i3 + 1];

        z =
          molecularPositions[i3 + 2];
      }

     
      else {
        const phase =
          (progress - 0.7) /
          0.3;

        const eased =
          THREE.MathUtils.smoothstep(
            phase,
            0,
            1
          );

        x =
          THREE.MathUtils.lerp(
            molecularPositions[i3],
            finalPositions[i3],
            eased
          );

        y =
          THREE.MathUtils.lerp(
            molecularPositions[i3 + 1],
            finalPositions[i3 + 1],
            eased
          );

        z =
          THREE.MathUtils.lerp(
            molecularPositions[i3 + 2],
            finalPositions[i3 + 2],
            eased
          );
      }

      positionAttribute.setXYZ(
        i,
        x,
        y,
        z
      );
    }

    positionAttribute.needsUpdate =
      true;

  
    if (
      progress < 0.45
    ) {
      connectionMaterial.opacity =
        0;
    } else if (
      progress < 0.7
    ) {
      const phase =
        (progress - 0.45) /
        0.25;

      connectionMaterial.opacity =
        THREE.MathUtils.smoothstep(
          phase,
          0,
          1
        ) * 0.25;
    } else {
      const phase =
        (progress - 0.7) /
        0.3;

      connectionMaterial.opacity =
        0.25 *
        (1 - phase);
    }

   

    material.opacity =
      THREE.MathUtils.lerp(
        0.85,
        0.95,
        progress
      );

    renderer.render(
      scene,
      camera
    );
  };

  gsap.ticker.add(
    animate
  );

  gsap.ticker.lagSmoothing(
    0
  );

  const handleResize =
    () => {
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

  
  const destroy = () => {
    gsap.ticker.remove(
      animate
    );

    scrollTrigger.kill();

    window.removeEventListener(
      "resize",
      handleResize
    );

    geometry.dispose();

    material.dispose();

    connectionGeometry.dispose();

    connectionMaterial.dispose();

    scene.remove(
      molecularGroup
    );
  };

  return {
    scene,
    renderer,
    destroy,
  };
};

export default initPlanet3D;

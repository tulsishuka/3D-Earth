

"use client";

import { useEffect } from "react";
import initPlanet3D from "@/components/3D/planet";

export default function Home() {
  useEffect(() => {
    const { renderer, destroy } = initPlanet3D();

    return () => {
      destroy();

      const gl = renderer.getContext();

      gl.getExtension("WEBGL_lose_context")?.loseContext();

      renderer.dispose();
    };
  }, []);

  return (
    <main className="page">
      <section className="hero_main">
        <div className="content">
          <h1>The Future Is Biological</h1>

          <p>
            Where biotechnology, intelligence, and innovation converge to shape a healthier, smarter future.
          </p>

          <button className="cta_btn">
            Get started.
          </button>
        </div>

        <canvas className="planet-3D" />
      </section>
    </main>
  );
}
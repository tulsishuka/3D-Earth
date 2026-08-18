

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
          <h1>Welcome To The New World</h1>

          <p>
            AI agents that actually bring value to businesses
            and elevate workers productivity.
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
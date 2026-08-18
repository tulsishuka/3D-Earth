
"use client";

import { useEffect } from "react";
import initPlanet3D from "@/components/3D/planet";

export default function Hero() {
  useEffect(() => {
    const planet = initPlanet3D();

    return () => {
      planet.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="hero_main relative flex h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      {/* 3D Canvas */}
      <canvas className="planet-3D absolute inset-0 z-0 h-full w-full" />

      {/* Hero Content */}
      <div className="content relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Tag */}
        <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-md">
          Initiating Sequence
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          The Future Is{" "}
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Biological
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-slate-400 md:text-lg">
          Where biotechnology, intelligence, and innovation converge to shape
          a healthier, smarter future.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#about"
            className="rounded-lg bg-[#64CCC5] px-7 py-3 text-sm font-semibold text-black transition-all hover:bg-[#50b2ac] hover:shadow-[0_0_20px_rgba(100,204,197,0.4)]"
          >
            Explore Innovation
          </a>

          <a
            href="#technology"
            className="rounded-lg border border-cyan-500/30 bg-transparent px-7 py-3 text-sm font-medium text-cyan-200 backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            Discover Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
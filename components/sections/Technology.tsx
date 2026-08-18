"use client";

import React from "react";
import { Play } from "lucide-react";

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6 py-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col items-start text-left">

          {/* Top Tag */}
          <div className="mb-6 inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            Core Architecture
          </div>

          {/* Heading */}
          <h2 className="max-w-3xl text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl">
            Technology That{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Thinks
            </span>{" "}
            in Molecules.
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-slate-400 md:text-lg">
            Advanced computational systems designed to understand, model, and
            accelerate biological innovation. We merge high-performance
            computing with atomic-level precision.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">

            {/* Primary Button — SAME AS HERO */}
            <a
              href="#platform"
              className="rounded-lg bg-[#64CCC5] px-7 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#50b2ac] hover:shadow-[0_0_20px_rgba(100,204,197,0.4)]"
            >
              Explore Platform
            </a>

            {/* Secondary Button — SAME STYLE AS HERO */}
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-transparent px-7 py-3 text-sm font-medium text-cyan-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <Play className="h-3.5 w-3.5 fill-current text-cyan-300" />

              View Demo
            </a>
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="relative flex w-full justify-center lg:justify-end">

          {/* Glow behind visual */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

          <div className="relative w-full max-w-xl">

            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-cyan-500/10 bg-cyan-950/5">

              <img
                src="/unnamed (1).jpg"
                alt="Molecular technology visualization"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Cyan glow */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(100,204,197,0.08)]" />

              {/* Telemetry */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-cyan-400/80">
                <span>MOLECULAR_ENGINE // 01</span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#64CCC5] shadow-[0_0_8px_rgba(100,204,197,0.8)]" />
                  SYS_ONLINE
                </span>
              </div>
            </div>

            {/* Small floating data label */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-cyan-500/20 bg-black/80 px-4 py-3 font-mono text-[9px] uppercase tracking-widest text-cyan-400 backdrop-blur-md sm:block">
              ATOMIC PRECISION
              <div className="mt-1 text-slate-500">
                COMPUTATIONAL BIOLOGY
              </div>
            </div>

            {/* Small floating coordinate */}
            <div className="absolute -right-4 -top-5 hidden rounded-lg border border-cyan-500/20 bg-black/80 px-4 py-3 font-mono text-[9px] uppercase tracking-widest text-slate-500 backdrop-blur-md sm:block">
              43.129
              <br />
              <span className="text-cyan-400/70">BIO-X / 01</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
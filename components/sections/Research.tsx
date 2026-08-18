"use client";

import {
  Database,
  BarChart3,
  Box,
  Microscope,
  CheckCircle2,
} from "lucide-react";

export default function Research() {
  const steps = [
    {
      icon: <Database className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />,
      title: "DATA",
      description: "Ingestion &\nStructuring",
    },
    {
      icon: <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />,
      title: "ANALYSIS",
      description: "Pattern Recognition",
    },
    {
      icon: <Box className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />,
      title: "MODELING",
      description: "3D Structure\nPrediction",
    },
    {
      icon: <Microscope className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />,
      title: "DISCOVERY",
      description: "Novel Target\nGeneration",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-300" />,
      title: "VALIDATION",
      description: "In-silico Verification",
    },
  ];

  return (
    <section
      id="research"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-4 py-20 text-white sm:px-6 sm:py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl text-center">
        {/* Heading */}
        <h3 className="mx-auto max-w-6xl text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
          From Data to{" "}
          <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Discovery.
          </span>
        </h3>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl px-2 text-sm font-light leading-relaxed text-slate-400 sm:mt-7 sm:text-base md:text-lg">
          Our research pipeline transforms complex biological data into
          intelligent models, measurable insights, and new possibilities.
        </p>

        {/* Pipeline */}
        <div className="relative mx-auto mt-14 flex w-full flex-col items-center gap-6 sm:mt-20 sm:gap-8 md:grid md:grid-cols-2 md:gap-6 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          {/* Desktop connecting line */}
          <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-cyan-500/10 via-cyan-400/70 to-cyan-500/10 lg:block" />

          {/* Mobile / Tablet connecting line */}
          <div className="absolute bottom-10 left-1/2 top-10 block w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/10 via-cyan-400/70 to-cyan-500/10 md:hidden" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative z-10 flex h-52 w-[88%] max-w-[280px] flex-col items-center justify-center rounded-2xl border border-cyan-500/10 bg-[#05090a] px-5 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-[#071113] hover:shadow-[0_0_35px_rgba(100,204,197,0.1)] sm:h-56 sm:w-full sm:max-w-[300px] md:h-60 md:max-w-none lg:h-64 lg:max-w-[200px]"
            >
              {/* Number */}
              <span className="absolute right-4 top-4 font-mono text-[8px] tracking-widest text-cyan-500/30 sm:text-[9px]">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-950/20 shadow-[0_0_20px_rgba(100,204,197,0.1)] transition-all duration-500 group-hover:border-cyan-400/60 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_30px_rgba(100,204,197,0.25)] sm:mb-6 sm:h-16 sm:w-16">
                {step.icon}
              </div>

              {/* Title */}
              <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white sm:text-xs sm:tracking-widest">
                {step.title}
              </h4>

              {/* Description */}
              <p className="mt-2 whitespace-pre-line px-2 text-center text-[11px] font-light leading-relaxed text-slate-400 sm:text-xs">
                {step.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-cyan-400 transition-all duration-500 group-hover:w-1/2" />
            </div>
          ))}
        </div>

        {/* Technical status */}
        <div className="mx-auto mt-12 flex max-w-full items-center justify-center gap-2 overflow-hidden px-2 font-mono text-[7px] uppercase tracking-[0.15em] text-cyan-500/50 sm:mt-16 sm:gap-3 sm:text-[9px] sm:tracking-[0.25em]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#64CCC5] shadow-[0_0_8px_rgba(100,204,197,0.8)]" />
          <span className="truncate">
            BIOLOGICAL INFERENCE SYSTEM // ONLINE
          </span>
        </div>
      </div>
    </section>
  );
}
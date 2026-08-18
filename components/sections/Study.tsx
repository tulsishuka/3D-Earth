
"use client";

import React from "react";

const Study = () => {
  const technologies = [
    {
      number: "01",
      title: "Computational Biology",
      description:
        "Leveraging advanced computing to simulate complex biological systems at unprecedented resolutions. Our algorithms process genomic sequences and biological data to accelerate scientific discovery.",
      tags: ["GENOMICS", "SIMULATIONS"],
      bgImage: "/k.jpg",
    },
    {
      number: "02",
      title: "AI & Machine Learning",
      description:
        "Deep neural networks trained on biological datasets predict molecular interactions, toxicity, and efficacy, helping reduce discovery timelines and reveal new possibilities.",
      tags: ["DEEP LEARNING", "PREDICTIVE MODELS"],
      bgImage: "/m.png",
    },
    {
      number: "03",
      title: "Molecular Modeling",
      description:
        "Advanced physics-based systems allow us to visualize and analyze molecular structures, helping researchers understand interactions at the smallest scales.",
      tags: ["3D STRUCTURING", "MOLECULAR PHYSICS"],
      bgImage: "/m2.png",
    },
    {
      number: "04",
      title: "Data Intelligence",
      description:
        "Our knowledge systems integrate scientific literature, experiments, and biological datasets to uncover hidden relationships and generate actionable insights.",
      tags: ["KNOWLEDGE GRAPH", "BIG DATA"],
      bgImage: "/m3.png",
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-24 text-white"
    >
     
    

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================= HEADER ================= */}

        <div className="mb-16 max-w-4xl">
         
          {/* Heading */}
          <h2 className="text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl">
            The Systems Behind{" "}
            <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Discovery.
            </span>
          </h2>

        
        </div>

        {/* ================= TECHNOLOGY GRID ================= */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {technologies.map((tech) => (
            <div
              key={tech.number}
              className="group relative min-h-[480px] overflow-hidden rounded-2xl border border-cyan-500/10 bg-[#05090a] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(100,204,197,0.08)]"
            >
              {/* Background image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={tech.bgImage}
                  alt={tech.title}
                  className="h-full w-full object-cover object-center opacity-60 grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 group-hover:grayscale-0"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

                {/* Cyan atmospheric glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Number */}
              <div className="relative z-10 flex items-start justify-between p-7">
                <span className="font-mono text-5xl font-bold tracking-tight text-cyan-300/80 transition-all duration-500 group-hover:text-cyan-300">
                  {tech.number}
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-400/50">
                  BIO-X
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                <div className="rounded-xl border border-cyan-500/10 bg-black/70 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/30 group-hover:bg-black/80">
                  {/* Title */}
                  <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 max-w-xl text-sm font-light leading-relaxed text-slate-400">
                    {tech.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {tech.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-sm transition-colors duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom technical line */}
                  <div className="mt-6 flex items-center justify-between border-t border-cyan-500/10 pt-4">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
                      SYSTEM ACTIVE
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#64CCC5] shadow-[0_0_10px_rgba(100,204,197,0.8)]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <div className="mt-12 flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-500/40">
          <span className="h-px w-10 bg-cyan-500/20" />
          BIOLOGICAL TECHNOLOGY STACK
          <span className="h-px w-10 bg-cyan-500/20" />
        </div>
      </div>
    </section>
  );
};

export default Study;
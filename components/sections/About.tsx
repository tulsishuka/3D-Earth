import React from 'react';
import { Cpu, Microscope, Stethoscope } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Cpu className="w-5 h-5 text-[#64CCC5]" />,
      title: 'AI + Biology',
      description:
        'Integrating advanced neural networks with biological datasets to accelerate discovery and synthesis.',
    },
    {
      icon: <Microscope className="w-5 h-5 text-[#64CCC5]" />,
      title: 'Molecular Intelligence',
      description:
        'Mapping the complex interactions of cellular structures to engineer bespoke biological solutions.',
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-[#64CCC5]" />,
      title: 'Future Therapeutics',
      description:
        'Developing targeted, high-efficacy treatments through predictive modeling and precision engineering.',
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black px-6 py-24 text-white flex flex-col justify-center items-center overflow-hidden"
    >
    

      <div className="relative z-10 mx-auto max-w-6xl w-full text-center">
        {/* Title Section */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl text-white">
            Reimagining What <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">Biology</span> Can Do
          </h2>
          {/* Accent Underline */}
          <div className="mt-4 h-[3px] w-12 bg-blue-900 rounded-full" />
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 text-left">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-800/80 bg-[#101420] p-8 shadow-xl transition-all duration-300 hover:border-slate-700 hover:bg-black"
            >
              {/* Icon Container */}
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#111a24] border border-[#1d2d3a]">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-xl font-bold text-white tracking-wide">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="mt-3 text-sm leading-relaxed text-slate-400 font-light">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Footer() {
  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Technology", href: "#technology" },
    { label: "Solutions", href: "#solutions" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
  ];

  return (
    <footer className="border-t border-slate-800/60 bg-[#0a0a0c]/90 px-8 py-10 text-white font-sans">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        
        {/* Left Section: Logo & Copyright Info */}
        <div className="flex flex-col gap-2">
          {/* Logo */}
          <div className="text-2xl font-black tracking-wider text-[#64CCC5]">
            BIO<span className="font-light">//</span>
          </div>

          {/* Copyright & Subtitle */}
          <div className="text-xs text-slate-400 font-light leading-relaxed">
            <p>© 2026 BIO// Research Group.</p>
            <p>Engineering the future of life.</p>
          </div>
        </div>

        {/* Right Section: Navigation Links */}
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </footer>
  );
}
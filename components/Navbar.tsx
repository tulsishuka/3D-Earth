"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Technology", href: "#technology" },
    { name: "Solutions", href: "#solutions" },
    { name: "Research", href: "#research" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-[100] w-full border-b border-white/5 bg-[#0a0a0c]/90 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-wider text-[#64CCC5]"
        >
          BIO<span className="font-light">//</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                activeTab === link.name
                  ? "text-[#64CCC5]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
              {activeTab === link.name && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#64CCC5]" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded bg-[#64CCC5] px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#52b1ab]"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-300 hover:text-white md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full flex w-full flex-col gap-4 border-b border-white/10 bg-[#0a0a0c] p-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setIsOpen(false);
              }}
              className={`text-base font-medium transition-colors ${
                activeTab === link.name ? "text-[#64CCC5]" : "text-slate-300"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full rounded bg-[#64CCC5] py-2.5 text-center text-sm font-semibold text-black"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
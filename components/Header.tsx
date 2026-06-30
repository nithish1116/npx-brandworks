"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink-950/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display flex items-center gap-1 text-xl font-semibold tracking-tight">
          <span className="text-paper">NP</span>
          <span className="text-blue-400 text-3xl">X</span>
         <span className="ml-2 hidden bg-gradient-to-r from-slate-500 via-sky-100 to-blue-500 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent sm:inline">
  BRANDWORKS
</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper-dim transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-blue-500/20"
        >
          Book an Appointment
        </a>
      </div>
    </motion.header>
  );
}

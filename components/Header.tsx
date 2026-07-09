"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center whitespace-nowrap font-display"
        >
          <span className="text-xl font-semibold text-paper">NP</span>

          <span className="ml-0.5 text-3xl font-bold text-blue-400">X</span>
           <span className="ml-2 bg-gradient-to-r from-slate-500 via-sky-100 to-blue-500 bg-clip-text text-[10px] font-semibold tracking-[0.22em] text-transparent sm:text-xs sm:tracking-[0.3em]">
            BRANDWORKS
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-paper-dim transition hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-blue-500/20 md:inline-flex"
        >
          Book an Appointment
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-paper md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="border-t border-white/10 bg-ink-950/95 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col px-6 py-5">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 text-paper-dim transition hover:text-paper"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full border border-blue-500/40 bg-blue-500/10 px-5 py-3 text-center font-medium text-paper transition hover:bg-blue-500/20"
            >
              Book an Appointment
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
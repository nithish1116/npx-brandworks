"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springConf = { stiffness: 120, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [16, -16]), springConf);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), springConf);
  const gridX = useSpring(useTransform(mx, [-0.5, 0.5], [18, -18]), springConf);
  const gridY = useSpring(useTransform(my, [-0.5, 0.5], [18, -18]), springConf);
  const blade1Shift = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), springConf);
  const blade2Shift = useSpring(useTransform(mx, [-0.5, 0.5], [14, -14]), springConf);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 noise-veil"
    >
      {/* parallax grid backdrop */}
      <motion.div
        aria-hidden
        style={{ x: gridX, y: gridY }}
        className="bg-grid pointer-events-none absolute -inset-24 opacity-[0.35]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pt-28 pb-20 md:grid-cols-2 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-slate">
            <span className="h-px w-8 bg-line" />
            DESIGN. DEVELOP. ELEVATE.
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            We forge brands
            <br />
            that cut <span className="text-gradient">through.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
            NPX Brandworks is a small studio building identities, websites and
            digital products for teams who refuse to look like everyone else.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03] hover:bg-blue-400"
            >
              Book an Appointment
            </a>
            <a
              href="#work"
              className="rounded-full border border-line px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-blue-400/60 hover:text-blue-300"
            >
              See our work
            </a>
          </div>
        </motion.div>

        {/* Signature element: cursor-tracked 3D crossing blade, echoing the NPX mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{ perspective: 1200 }}
          className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center sm:h-[420px] sm:w-[420px]"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative h-full w-full"
          >
            <motion.svg
              style={{ x: blade1Shift }}
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full drop-shadow-[0_0_40px_rgba(79,127,255,0.35)]"
            >
              <defs>
                <linearGradient id="bladeA" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#eef1f8" />
                  <stop offset="100%" stopColor="#2150d8" />
                </linearGradient>
              </defs>
              <polygon points="20,20 70,20 180,180 130,180" fill="url(#bladeA)" />
            </motion.svg>
            <motion.svg
              style={{ x: blade2Shift }}
              viewBox="0 0 200 200"
              className="absolute inset-0 h-full w-full drop-shadow-[0_0_40px_rgba(79,127,255,0.25)]"
            >
              <defs>
                <linearGradient id="bladeB" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5b8def" />
                  <stop offset="100%" stopColor="#0a0e1a" />
                </linearGradient>
              </defs>
              <polygon points="180,20 130,20 20,180 70,180" fill="url(#bladeB)" />
            </motion.svg>
          </motion.div>
          <div
            aria-hidden
            className="absolute -bottom-6 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-full bg-blue-500/20 blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

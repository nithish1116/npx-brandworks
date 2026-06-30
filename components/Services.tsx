"use client";

import { PenTool, Code2, MonitorSmartphone } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const SERVICES = [
  {
    icon: PenTool,
    title: "Logo & Branding",
    copy: "Marks, type systems and visual language built to stay legible at one inch and one hundred feet.",
  },
  {
    icon: Code2,
    title: "Web Development",
    copy: "Fast, accessible Next.js builds with motion and interaction designed in from the first sketch.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Solutions",
    copy: "Product UI, dashboards and tools that make a brand usable, not just visible.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-ink-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-16 flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-slate">
            <span className="h-px w-8 bg-line" />
            WHAT WE DO
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <TiltCard className="group h-full rounded-2xl border border-line bg-ink-900/60 p-8">
                <div className="relative z-10">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display mb-3 text-xl font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-paper-dim">{copy}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { title } from "process";
import Reveal from "./Reveal";

const STATS = [
  { value: "5+", label: "Brands launched" },
  { value: "98%", label: "Client retention" },
  { value: "3", label: "Years in practice" },
];
const AboutData = [
{
  about_title: "ABOUT THE STUDIO",
  about_content: "We are a team of passionate designers and developers dedicated to creating unique brand identities.",
  about_brief: ` NPX Brandworks was started by designers and engineers tired of
                 shipping the same templated identity twice. We pair brand
                 strategy with hands-on development, so the mark you approve in a
                 deck is the same one that ships in production — pixel for pixel,
                 interaction for interaction.`
}
]

export default function About() {
  return (
    <section id="about" className="relative border-y border-line bg-ink-900/40 py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-[1.1fr_0.9fr]">
        {AboutData.map((data) => (
          <Reveal key={data.about_title}>
            <div className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-slate">
              <span className="h-px w-8 bg-line" />
              {data.about_title}
            </div>
            <h2 className="font-display max-w-lg text-3xl font-semibold leading-tight sm:text-4xl">
              {data.about_content}
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-paper-dim">
            {data.about_brief}
          </p>
        </Reveal>
        ))}

        <Reveal delay={0.15} className="grid grid-cols-3 gap-6 self-end md:grid-cols-1 md:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-l border-line pl-5">
              <div className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate">{stat.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

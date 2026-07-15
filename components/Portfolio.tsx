"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Sparkles, X } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

type Project = {
  name: string;
  type: string;
  image: string;
  live: string;
  github: string;
  description: string;
  summary: string;
  stack: string[];
  highlights: string[];
};

const WORK: Project[] = [
  {
    name: "E-Commerce Store",
    type: "React • Node.js • MongoDB",
    image: "/assets/lafournee-bakery.png",
    live: "https://lafournee-bakery.vercel.app/",
    github: "https://github.com/nithish1116/lafournee-bakery.git",
    description:
      "A polished bakery storefront built for smooth shopping and strong brand storytelling.",
    summary:
      "The platform blends product showcasing, elegant visuals, and a fast checkout flow so visitors can browse and purchase with confidence.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Responsive storefront experience across desktop and mobile",
      "Clean product presentation with a premium visual feel",
      "Optimized UX for quick browsing and conversion",
    ],
  },
  {
    name: "Music Tutor",
    type: "React • TypeScript • Tailwind CSS • lucide-icons",
    image: "/assets/mr-rythms-img.png",
    live: "https://mr-rythms.vercel.app",
    github: "https://github.com/nithish1116/mr-rythms.git",
    description:
      "A vivid, modern landing experience for a music education brand with clear calls to action.",
    summary:
      "The website highlights lesson offerings, introduces the tutor's personality, and makes it easy for potential students to connect.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Immersive hero section with strong brand personality",
      "Smooth animated transitions for a premium feel",
      "Focused call-to-action flow for student enquiries",
    ],
  },
  {
    name: "Women's fashion store",
    type: "React • Next.js • TypeScript • Tailwind CSS",
    image: "/assets/women-fashions-store.png",
    live: "https://womens-fashion-store.vercel.app",
    github: "https://github.com/nithish1116/womens-fashion-store.git",
    description:
      "A stylish online platform for women's fashion, featuring curated collections and a seamless shopping experience.",
    summary:
      "The site offers an intuitive interface for browsing and purchasing fashion items, with a focus on style and user satisfaction.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Modern design with a focus on aesthetics and usability",
      "Intuitive navigation for effortless browsing",
      "Responsive layout optimized for all devices",
    ],
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="relative bg-ink-950 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="mb-16 flex items-end justify-between">
              <div>
                <div className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.8em] text-slate">
                  <span className="h-px w-8 bg-line" />
                  MY PROJECTS
                </div>

                <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                  Some of my recent work.
                </h2>

                <p className="mt-4 max-w-2xl text-paper-dim">
                  {`Here are a few projects I have designed and developed with a strong focus on
                  clarity, conversion, and a polished user experience.`}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {WORK.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.1}>
                <TiltCard
                  intensity={8}
                  className="group overflow-hidden rounded-2xl border border-line bg-ink-900"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-paper">
                        {project.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-paper-dim">
                        {project.type}
                      </p>

                      <p className="mt-3 text-sm leading-6 text-paper-dim">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(59,130,246,0.25)]"
                      >
                        View Live
                      </a>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-ink-900 p-6 shadow-2xl shadow-cyan-500/10 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-paper transition hover:bg-white/10"
            >
              <X size={18} />
            </button>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  <Sparkles size={14} /> Featured project
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold text-paper">
                  {selectedProject.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-paper-dim">
                  {selectedProject.description}
                </p>

                <p className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-paper-dim">
                  {selectedProject.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Open Live <ExternalLink size={16} />
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/10"
                  >
                    View Code
                  </a>
                </div>
              </div>

              <div>
                <div className="rounded-2xl border border-line bg-ink-950/70 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate">
                    Built with
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-line bg-ink-950/70 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate">
                    Key highlights
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-paper-dim">
                    {selectedProject.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
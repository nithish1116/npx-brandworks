"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const WORK = [
  {
    name: "Personal Portfolio",
    type: "Next.js • TypeScript • Tailwind CSS",
    image:"/assets/portfolio-img1.png",
    live: "https://nithish-portfolio-three.vercel.app/",
    github: "https://github.com/nithish1116/Nithish-Portfolio",
  },
  // {
  //   name: "NPX BrandWorks",
  //   type: "Portfolio Website",
  //   image: "/projects/portfolio.jpg",
  //   live: "https://yourportfolio.com",
  //   github: "https://github.com/yourusername/npx-brandworks",
  // },
  {
    name: "E-Commerce Store",
    type: "React • Node.js • MongoDB",
    image: "/assets/lafournee-bakery.png",
    live: "https://lafournee-bakery.vercel.app/",
    github: "https://github.com/nithish1116/lafournee-bakery.git",
  },
  // {
  //   name: "Admin Dashboard",
  //   type: "React • TypeScript • AG Grid",
  //   image: "/projects/dashboard.jpg",
  //   live: "https://your-dashboard-demo.com",
  //   github: "https://github.com/yourusername/admin-dashboard",
  // },
];

const Portfolio = () => {
  return (
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
                {`Here are a few projects I've designed and developed using modern
                technologies such as Next.js, React, TypeScript, Tailwind CSS,
                Node.js, and more.`}
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
                {/* Project Image */}
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

                {/* Content */}
                <div className="space-y-5 p-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-paper">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-paper-dim">
                      {project.type}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(59,130,246,0.25)]"
                    >
                      View Live
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
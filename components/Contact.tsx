"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import React from 'react'

const Contact = () => {
  const whatsappNumber = "+919573114609";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappText = `New Project Enquiry

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "--"}
Project Requirement: ${formData.message}


Submitted from:
NPX BrandWorks Portfolio Website`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappText
    )}`;

    window.open(url, "_blank");

    setFormData({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  };


return  (
 <section
      id="contact"
      className="relative overflow-hidden bg-ink-900/40 py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-line"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-[0.9fr_1.1fr]">
        {/* Left Side */}
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-slate">
            <span className="h-px w-8 bg-line" />
            GET IN TOUCH
          </div>

          <h2 className="font-display max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">
           {"Tell us what you're building."}
          </h2>

          <p className="mt-6 max-w-sm leading-relaxed text-paper-dim">
          {` Share a few details about your project and let's discuss how we can
            turn your idea into reality.`}
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate">
                Email
              </p>

              <a
                href="mailto:hello@npxbrandworks.com"
                className="mt-2 block text-paper transition hover:text-blue-400"
              >
                hello@npxbrandworks.com 
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate">
                WhatsApp
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-paper transition hover:text-green-400"
              >
                +91 95731 14609
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right Side */}
        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="rounded-lg border border-line bg-ink-950 px-4 py-3 text-sm text-paper placeholder:text-slate focus:border-blue-500 focus:outline-none"
            />

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="rounded-lg border border-line bg-ink-950 px-4 py-3 text-sm text-paper placeholder:text-slate focus:border-blue-500 focus:outline-none"
            />

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company (Optional)"
              className="rounded-lg border border-line bg-ink-950 px-4 py-3 text-sm text-paper placeholder:text-slate focus:border-blue-500 focus:outline-none sm:col-span-2"
            />

            <textarea
              required
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="resize-none rounded-lg border border-line bg-ink-950 px-4 py-3 text-sm text-paper placeholder:text-slate focus:border-blue-500 focus:outline-none sm:col-span-2"
            />

            <button
              type="submit"
              className="w-fit rounded-full bg-green-500 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-600 sm:col-span-2"
            >
              Send via WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );

}

export default Contact;

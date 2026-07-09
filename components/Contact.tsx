"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Clock3, Mail, MapPin, MessageCircle, Send, Sparkles, X } from "lucide-react";
import Reveal from "./Reveal";

const Contact = () => {
  const whatsappNumber = "+919573114609";
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    setIsContactOpen(false);
  };

  const quickContactOptions = [
    {
      label: "Email",
      value: "hello@npxbrandworks.com",
      href: "mailto:hello@npxbrandworks.com",
      icon: Mail,
      accent: "from-blue-500 to-cyan-500",
    },
    {
      label: "WhatsApp",
      value: "+91 95731 14609",
      href: `https://wa.me/${whatsappNumber}`,
      icon: MessageCircle,
      accent: "from-emerald-500 to-green-500",
    },
  ];

  return (
    <>
      <section id="contact" className="relative overflow-hidden bg-ink-900/40 py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-line"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="mb-6 flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-slate">
              <span className="h-px w-8 bg-line" />
              GET IN TOUCH
            </div>

            <h2 className="font-display max-w-sm text-3xl font-semibold leading-tight sm:text-4xl">
              Let&apos;s build something memorable.
            </h2>

            <p className="mt-6 max-w-sm leading-relaxed text-paper-dim">
              Share a few details about your idea and I&apos;ll help shape it into a modern,
              user-friendly experience.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-line bg-ink-950/70 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-paper">
                  <Clock3 size={16} className="text-cyan-400" />
                  Response time
                </div>
                <p className="mt-2 text-sm text-paper-dim">
                  Usually within 24 hours for new enquiries.
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-ink-950/70 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-paper">
                  <MapPin size={16} className="text-cyan-400" />
                  Based in India
                </div>
                <p className="mt-2 text-sm text-paper-dim">
                  Available for remote projects, startups, and brand-led websites.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              <Sparkles size={16} /> Get In Touch
            </button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-ink-950/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate">
                    Quick contact
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-paper">
                    Choose your preferred way to connect.
                  </h3>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {quickContactOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <a
                      key={option.label}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                    >
                      <div className={`inline-flex rounded-full bg-gradient-to-r ${option.accent} p-2 text-white`}>
                        <Icon size={16} />
                      </div>
                      <p className="mt-3 text-sm font-semibold text-paper">{option.label}</p>
                      <p className="mt-1 text-sm text-paper-dim">{option.value}</p>
                    </a>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setIsContactOpen(true)}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
              >
                <Send size={16} /> Start a project conversation
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {isContactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-ink-900 p-6 shadow-2xl shadow-cyan-500/10 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsContactOpen(false)}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-paper transition hover:bg-white/10"
            >
              <X size={18} />
            </button>

            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  <Sparkles size={14} /> Contact me
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold text-paper">
                  Tell me about your idea.
                </h3>

                <p className="mt-4 text-sm leading-7 text-paper-dim">
                  I&apos;ll help you turn your concept into a polished website or product experience.
                </p>

                <div className="mt-6 space-y-3">
                  {quickContactOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <a
                        key={option.label}
                        href={option.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-paper transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                      >
                        <span className="flex items-center gap-2">
                          <span className={`rounded-full bg-gradient-to-r ${option.accent} p-2 text-white`}>
                            <Icon size={14} />
                          </span>
                          {option.label}
                        </span>
                        <span className="text-paper-dim">{option.value}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  placeholder="Tell me about your project..."
                  className="resize-none rounded-lg border border-line bg-ink-950 px-4 py-3 text-sm text-paper placeholder:text-slate focus:border-blue-500 focus:outline-none sm:col-span-2"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-green-600 sm:col-span-2"
                >
                  <Send size={16} /> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;

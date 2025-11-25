"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section overall entrance
      gsap.fromTo(
        sectionRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Support cards stagger animation
      gsap.fromTo(
        cardsRef.current,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="bg-[#101828] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <div
            ref={formRef}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_25px_60px_rgba(16,185,129,0.15)]"
          >
            <SectionHeading
              kicker="Contact"
              title="Book a private tour"
              description="Tell us about your team, expansion plans, or one-off events. We'll curate a workspace plan and schedule an on-site walkthrough."
              align="left"
            />
            <form className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-200">
                  Full name
                  <input
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-rose focus:outline-none focus:shadow-[0_0_15px_rgba(224,49,130,0.5)] transition"
                    placeholder="Ayesha Rahman"
                    required
                  />
                </label>
                <label className="text-sm text-slate-200">
                  Company email
                  <input
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-rose focus:outline-none focus:shadow-[0_0_15px_rgba(224,49,130,0.5)] transition"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-200">
                  Team size
                  <input
                    type="number"
                    min={1}
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-rose focus:outline-none focus:shadow-[0_0_15px_rgba(224,49,130,0.5)] transition"
                    placeholder="25"
                  />
                </label>
                <label className="text-sm text-slate-200">
                  Preferred location
                  <select
                    className="mt-2 w-full rounded-2xl border cursor-pointer border-white/15 px-4 py-3 text-white focus:border-brand-rose focus:outline-none focus:shadow-[0_0_15px_rgba(224,49,130,0.5)] transition"
                  >
                    <option className="bg-[#050b14] text-white">I-10 Markaz</option>
                    <option className="bg-[#050b14] text-white">Gulberg Greens</option>
                    <option className="bg-[#050b14] text-white">Blue Area</option>
                  </select>
                </label>
              </div>
              <label className="text-sm text-slate-200">
                Message
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-slate-500 focus:border-brand-rose focus:outline-none focus:shadow-[0_0_15px_rgba(224,49,130,0.5)] transition"
                  placeholder="Share your move-in timeline, special requirements, or event details."
                  required
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-[#E03182] mt-4 cursor-pointer px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-rose/30 transition-all hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(224,49,130,0.5)] sm:w-auto"
              >
                Send request
              </button>
            </form>
          </div>

          {/* Support Cards */}
          <div className="space-y-6">
            {[
              { icon: Phone, label: "Phone", value: "+92 300 1234567" },
              { icon: Mail, label: "Email", value: "hello@cowork24.pk" },
              { icon: MapPin, label: "Head office", value: "I-10 Markaz, Islamabad" },
            ].map((item, i) => (
              <div
                key={item.label}
                ref={(el: HTMLDivElement | null) => void (cardsRef.current[i] = el)}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_20px_50px_rgba(16,185,129,0.15)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(16,185,129,0.4)]"
              >
                <item.icon className="h-5 w-5 text-brand-emerald" />
                <div>
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="text-sm text-slate-200">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

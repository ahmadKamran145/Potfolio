"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Building2, Clock, Wifi } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Locations", value: "3+" },
  { label: "24/7 Access", value: "Yes" },
  { label: "Fiber Speed", value: "1 Gbps" },
];

const highlights = [
  "Premium private offices & dedicated desks",
  "Flexible memberships for teams of any size",
  "Enterprise-grade security & concierge support",
];

export function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        leftRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        statsRef.current,
        { y: 20, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_55%),linear-gradient(135deg,#104539,#1111)] text-white overflow-hidden"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div ref={leftRef} className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1 text-sm text-slate-200">
            <Building2 className="h-4 w-4" />
            Premium workspace solutions
          </span>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Premium coworking designed for modern teams in Islamabad
            </h1>
            <p className="text-lg text-slate-300">
              From private offices to managed suites, CoWork24 provides the
              tech-enabled spaces that founders, creatives, and enterprise teams
              need to focus and grow.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#E03182] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-rose/30 transition-all hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(224,49,130,0.4)]"
            >
              Book a tour
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white/5 hover:-translate-y-0.5"
            >
              View plans
            </a>
          </div>
          <ul className="space-y-3 text-slate-200">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-6 rounded-full bg-brand-emerald"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div ref={rightRef} className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <p>Average occupancy</p>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-200">
                Real-time
              </span>
            </div>
            <p className="mt-4 text-5xl font-semibold">92%</p>
            <p className="mt-2 text-sm text-slate-400">
              Teams stay an average of 18 months
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                ref={(el: HTMLDivElement | null) => void (statsRef.current[i] = el)}
                className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center"
              >
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="flex items-center gap-3 text-slate-200">
              <Wifi className="h-5 w-5 text-brand-emerald" />
              <Clock className="h-5 w-5 text-brand-emerald" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              24/7 secure access
            </h3>
            <p className="text-sm text-slate-400">
              Members enjoy biometric entry, uninterrupted power, and concierge
              support around the clock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

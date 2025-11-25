"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Users, Video, Calendar } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Briefcase,
    title: "Dedicated desks",
    description:
      "Personal workstations with lockable storage, ergonomic seating, and enterprise-grade connectivity.",
    perks: ["Mail handling", "Unlimited meeting credits", "Personal lockers"],
  },
  {
    icon: Users,
    title: "Private offices",
    description:
      "Sound-treated suites for teams of 2-30 with branded entries, acoustic ceilings, and climate control.",
    perks: ["Custom layouts", "Executive meeting rooms", "On-site parking"],
  },
  {
    icon: Video,
    title: "Conference studios",
    description:
      "Immersive AV experiences equipped with LED displays, broadcast cameras, and concierge support.",
    perks: ["4K conferencing", "Recording tools", "Refreshment service"],
  },
  {
    icon: Calendar,
    title: "Flexible passes",
    description:
      "Daily and weekly passes for hybrid teams who need on-demand workspace and lounge access.",
    perks: ["Credit rollover", "Guest hours", "Community programming"],
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: "power4.out",
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
    <section ref={sectionRef} id="services" className="bg-[#101828] overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Offerings"
          title={
            <>
              Everything from hot desks to <span className="text-brand-rose">managed suites</span>
            </>
          }
          description="Choose the membership that matches your rhythm. Scale up or down without long-term lock-ins."
          align="left"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              ref={(el: HTMLDivElement | null) => void (cardsRef.current[index] = el)}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl 
                         transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-rose/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <service.icon className="h-10 w-10 text-brand-rose" />

              <h3 className="mt-5 text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">{service.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {service.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-emerald shadow-[0_0_10px_#10b981]" />
                    {perk}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

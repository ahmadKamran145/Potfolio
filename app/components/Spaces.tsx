"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building, Coffee, ShieldCheck, Zap, Wifi, CarFront, Headphones, Clock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  { icon: Wifi, title: "1 Gbps fiber", detail: "Redundant network with private VLAN options." },
  { icon: ShieldCheck, title: "Secure access", detail: "Biometric entry, CCTV, and visitor management." },
  { icon: Zap, title: "Power assured", detail: "UPS & generator failover for 100% uptime." },
  { icon: Coffee, title: "Hospitality bar", detail: "Artisan coffee, infused water, and healthy snacks." },
  { icon: CarFront, title: "On-site parking", detail: "Reserved & visitor slots with valet support." },
  { icon: Headphones, title: "Concierge support", detail: "Admin assistance, printing, and courier handling." },
  { icon: Clock, title: "24/7 access", detail: "Flexible scheduling for founders and global teams." },
  { icon: Building, title: "Branch network", detail: "I-10, Gulberg Greens, and Blue Area locations." },
];

export function Spaces() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        sectionRef.current,
        { y: -200, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.15,
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
    <section ref={sectionRef} id="spaces" className="bg-[#101828]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-emerald/10 via-transparent to-brand-rose/20 p-10 shadow-[0_0_60px_rgba(16,185,129,0.15)]">
          <SectionHeading
            kicker="Spaces"
            title="World-class amenities curated for deep work"
            description="Every branch is purpose-built with acoustic zoning, biophilic design, and a hospitality-forward team."
            align="left"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {amenities.map((amenity, index) => (
              <article
                key={amenity.title}
                ref={(el: HTMLDivElement | null) => void (cardsRef.current[index] = el)}
                className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-4 hover:scale-[1.03] transition-transform duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-emerald">
                  <amenity.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{amenity.title}</h3>
                  <p className="text-sm text-slate-300">{amenity.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

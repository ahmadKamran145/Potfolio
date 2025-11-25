"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "./SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const locations = [
  { name: "CoWork I-10", area: "I-10 Markaz, Islamabad", capacity: "150+ members" },
  { name: "CoWork Gulberg", area: "Gulberg Greens, Islamabad", capacity: "Premium suites" },
  { name: "CoWork Executive", area: "Blue Area, Islamabad", capacity: "Enterprise HQ" },
  { name: "CoWork Premium", area: "F-7 Markaz, Islamabad", capacity: "Creative studios" },
];

export function GallerySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: -150, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="bg-[#101828]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Network"
          title="Strategic neighborhoods across the capital"
          description="Every location is within five minutes of major transit corridors, dining, and banking."
          align="left"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <article
              key={location.name}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6"
            >
              <div className="aspect-[4/2] rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.3),_transparent_70%)]" />
              <div className="mt-5 space-y-2">
                <h3 className="text-2xl font-semibold text-white">{location.name}</h3>
                <p className="text-sm text-slate-300">{location.area}</p>
                <p className="text-sm font-medium text-brand-emerald">{location.capacity}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

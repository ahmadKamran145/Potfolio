"use client";

import { ReactNode, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionHeadingProps = {
  kicker?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  slideFrom?: "left" | "right"; // new prop
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  slideFrom = "left",
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isCenter = align === "center";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        x: slideFrom === "left" ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [slideFrom]);

  return (
    <div
      ref={containerRef}
      className={`space-y-4 ${isCenter ? "text-center mx-auto max-w-3xl" : "text-left"}`}
    >
      {kicker && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--light-green)]">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {description && <p className="text-base md:text-lg text-slate-300">{description}</p>}
    </div>
  );
}

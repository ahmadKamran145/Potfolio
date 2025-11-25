"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const brandRef = useRef<HTMLParagraphElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const copyrightRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([brandRef.current, textRef.current, copyrightRef.current], {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="border-t border-white/10 bg-[#101828] overflow-hidden"
    >
      <div className="mx-auto flex flex-col gap-6 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1">
          <p
            ref={brandRef}
            className="text-base font-semibold text-white transition-all hover:text-[#E03182] cursor-pointer"
          >
            CoWork<span className="text-[color:var(--primary-pink)]">24</span>
          </p>
          <p ref={textRef}>Flexible workspaces for ambitious teams in Islamabad.</p>
        </div>
        <p ref={copyrightRef}>© {new Date().getFullYear()} CoWork24. All rights reserved.</p>
      </div>
    </footer>
  );
}

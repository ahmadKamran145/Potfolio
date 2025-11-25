"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#spaces", label: "Spaces" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#101828)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-xl font-semibold text-white">
          CoWork<span className="text-[color:var(--primary-pink)]">24</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm transition hover:text-[#E03182]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[color:var(--primary-pink)] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[color:rgba(236,72,153,0.35)] transition hover:translate-y-0.5"
          >
            Book a Tour
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full border border-white/20 p-2 text-white md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/5 bg-[rgba(5,12,20,0.95)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-xl bg-[color:var(--primary-pink)] px-3 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[color:rgba(236,72,153,0.35)]"
              onClick={() => setOpen(false)}
            >
              Book a Tour
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}


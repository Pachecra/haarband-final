// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Scissors } from "lucide-react";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";

function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export function Header() {
  const scrolled = useScrolled(10);

  const nav = useMemo(
    () => [
      { label: "Start", href: "/" },
      { label: "Leistungen", href: "/#leistungen" },
      { label: "Über uns", href: "/#ueber-uns" },
      { label: "Öffnungszeiten", href: "/#oeffnungszeiten" },
      { label: "Kontakt", href: "/#kontakt" },
    ],
    []
  );

  return (
    <motion.header
      initial={{ y: -14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "sticky top-0 z-50 w-full border-b",
        scrolled
          ? "border-black/10 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70"
          : "border-transparent bg-white/35 backdrop-blur supports-[backdrop-filter]:bg-white/20",
      ].join(" ")}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-sm transition group-hover:bg-white">
            <Scissors className="h-4 w-4 text-black" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-black">
              {site.brand.label}
            </div>
            <div className="text-xs text-black/60">{site.brand.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition hover:text-black"
            >
              <span className="after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-black/60 after:transition-all hover:after:w-full">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.contact.phoneTel}`}
            className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-black/80 shadow-sm transition hover:bg-white hover:text-black lg:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {site.contact.phoneDisplay}
          </a>

          <a
            href={site.links.route}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-black/80 shadow-sm transition hover:bg-white hover:text-black sm:inline-flex"
          >
            <MapPin className="h-4 w-4" />
            Route
          </a>

          <Link
            href={site.links.booking}
            className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-black/90"
          >
            Termin buchen
          </Link>
        </div>
      </Container>
    </motion.header>
  );
}

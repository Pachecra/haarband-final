// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ef]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />

      <Container className="relative py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full border border-black/10 bg-white/70 px-4 py-1 text-sm text-black/70 backdrop-blur">
              {site.brand.label} · {site.contact.city}
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl">
              Haarband – Ihr Friseursalon in Heidelberg
            </h1>

            <p className="mt-6 max-w-xl text-lg text-black/70">
              Moderner Damen- & Herrenfriseur mit Fokus auf individuelle Beratung,
              präzise Schnitte und hochwertige Farben.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:translate-y-[-1px] hover:bg-black/90"
              >
                Termin buchen
              </Link>

              <a
                href={`tel:${site.contact.phoneTel}`}
                className="inline-flex items-center justify-center rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black transition hover:translate-y-[-1px] hover:bg-white/80"
              >
                {site.contact.phoneDisplay}
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-black/5 shadow-xl">
              <img
                src="/images/hero-salon.jpg"
                alt="Haarband Friseursalon Heidelberg"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-black/10 bg-white/90 px-5 py-4 shadow-lg backdrop-blur">
              <p className="text-sm font-medium text-black">Adresse</p>
              <p className="text-sm text-black/70">
                {site.contact.addressLine}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

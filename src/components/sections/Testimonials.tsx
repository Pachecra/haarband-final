// src/components/sections/Testimonials.tsx
"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  meta: string;
  text: string;
  stars?: number;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Phillip Schmitz",
    meta: "⭐️⭐️⭐️⭐️⭐️ · vor 2 Monaten",
    text: "Wirklich guter Service. Man wird schnell drangenommen – auch ohne Termin. Faire Preise, und der Chef macht einen hervorragenden Job!",
    stars: 5,
  },
  {
    name: "Daniel Kreckel",
    meta: "⭐️⭐️⭐️⭐️⭐️ · vor 4 Monaten",
    text: "Toller Friseur: Der Chef nimmt sich Zeit, arbeitet exzellent und die Atmosphäre ist angenehm. Preise fair – Schnitt top!",
    stars: 5,
  },
  {
    name: "Manuel Zimmer",
    meta: "⭐️⭐️⭐️⭐️⭐️ · vor 6 Monaten",
    text: "Für mich der beste Friseur in Heidelberg. Nimmt sich Zeit und liefert jedes Mal ab.",
    stars: 5,
  },
  {
    name: "Michelle Günther",
    meta: "⭐️⭐️⭐️⭐️⭐️ · vor 2 Jahren",
    text: "Selten jemanden erlebt, der so viel Zeit investiert und wirklich auf Wünsche eingeht – und das zu einem starken Preis. Absolute Empfehlung.",
    stars: 5,
  },
  {
    name: "Simon Wa",
    meta: "⭐️⭐️⭐️⭐️⭐️ · vor 9 Monaten",
    text: "Großes Verständnis für Haare, sehr angenehm – und das Ergebnis ist jedes Mal ein Meisterwerk zu überraschend fairen Preisen.",
    stars: 5,
  },
  {
    name: "Nicole Brenner",
    meta: "⭐️⭐️⭐️⭐️⭐️ · vor 4 Monaten",
    text: "Konnte spontan kommen und bin super zufrieden mit dem Ergebnis. Vielen Dank!",
    stars: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < count ? "text-black" : "text-black/20"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  const items = useMemo(() => TESTIMONIALS, []);

  return (
    <section id="bewertungen" className="relative py-16 md:py-24">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(0,0,0,0.05),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(0,0,0,0.04),transparent_60%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-sm text-black/70 backdrop-blur">
            <span className="font-medium text-black">Kundenstimmen</span>
            <span className="text-black/30">•</span>
            <span>Aus Google-Rezensionen</span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black md:text-4xl">
            5-Sterne-Erlebnisse, die Vertrauen schaffen
          </h2>

          <p className="mt-3 text-base leading-relaxed text-black/70">
            Unsere Kundinnen und Kunden loben besonders die ruhige, präzise Arbeit,
            faire Preise und die persönliche Beratung.
          </p>
        </motion.div>

        {/* marquee rows */}
        <div className="mt-10 space-y-4">
          <MarqueeRow items={items.slice(0, 3)} direction="left" />
          <MarqueeRow items={items.slice(3)} direction="right" />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur md:flex-row md:items-center"
        >
          <div>
            <p className="text-sm font-medium text-black">Bereit für Ihren Termin?</p>
            <p className="mt-1 text-sm text-black/70">
              Kurz anrufen oder direkt einen Termin vereinbaren.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              href="#kontakt"
            >
              Termin buchen
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-black/5"
              href="tel:+4915204759945"
            >
              +49 1520 4759945
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "left" | "right";
}) {
  // duplicate for seamless loop
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent" />

      <motion.div
        className="flex w-max gap-4"
        initial={{ x: direction === "left" ? 0 : -600 }}
        animate={{ x: direction === "left" ? -600 : 0 }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ willChange: "transform" }}
      >
        {loop.map((t, idx) => (
          <TestimonialCard key={`${t.name}-${idx}`} t={t} />
        ))}
      </motion.div>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-[320px] shrink-0 rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-black">{t.name}</p>
          <p className="mt-0.5 text-xs text-black/60">{t.meta}</p>
        </div>
        <Stars count={t.stars ?? 5} />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-black/75">{t.text}</p>

      <div className="mt-4 h-px w-full bg-black/10" />
      <p className="mt-3 text-xs text-black/50">Quelle: Google Bewertungen</p>
    </div>
  );
}

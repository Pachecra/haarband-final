import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      {/* Hero Bereich (Logo, Titel, Termin-Button) */}
      <Hero />

      {/* NEU: Testimonials / Google Rezensionen */}
      <Testimonials />

      {/* Leistungen */}
      <section id="leistungen" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-black">
            Leistungen
          </h2>
          <p className="mt-3 max-w-2xl text-black/70">
            Damen- & Herrenhaarschnitt, Farbe & Highlights, Styling und Pflege –
            klar strukturiert, verständlich und hochwertig präsentiert.
          </p>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="bg-[#fbfaf8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-black">
            Über uns
          </h2>
          <p className="mt-3 max-w-2xl text-black/70">
            Keine erfundene Geschichte – Fokus auf Beratung, Qualität, Service
            und ein Ergebnis, das zu Ihnen passt.
          </p>
        </div>
      </section>

      {/* Öffnungszeiten */}
      <section id="oeffnungszeiten" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-black">
            Öffnungszeiten
          </h2>
          <p className="mt-3 max-w-2xl text-black/70">
            Die Öffnungszeiten finden Sie oben im Hero-Bereich und im Footer –
            klar und sofort sichtbar.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-[#fbfaf8]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-black">
            Kontakt
          </h2>
          <p className="mt-3 max-w-2xl text-black/70">
            Poststraße 42, 69115 Heidelberg · {`+49 1520 4759945`}
          </p>
        </div>
      </section>
    </>
  );
}
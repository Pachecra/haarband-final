import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      {/* Hero Bereich (Logo, Titel, Termin-Button) */}
      <Hero />

      {/* Testimonials / Google Rezensionen */}
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

      {/* Google Maps Karte */}
      <section id="anfahrt" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-black mb-8">
            So finden Sie uns
          </h2>
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-md border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.132711311054!2d8.68612147688537!3d49.406431961298455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c112524101cd%3A0x2e3f6f7247c26741!2sPoststra%C3%9Fe%2042%2C%2069115%20Heidelberg!5e0!3m2!1sde!2sde!4v1704038400000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Öffnungszeiten */}
      <section id="oeffnungszeiten" className="bg-[#fbfaf8]">
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
      <section id="kontakt" className="bg-white">
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
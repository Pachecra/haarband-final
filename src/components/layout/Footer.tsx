// src/components/layout/Footer.tsx
import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold tracking-tight text-black">
              {site.brand.label}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-black/70">
              Moderner, hochwertiger Friseursalon für Damen und Herren in{" "}
              {site.contact.city}. Präzise Schnitte, Farbe & Styling – mit
              individueller Beratung.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <div className="text-black/70">{site.contact.addressLine}</div>
              <a
                className="inline-block font-medium text-black underline-offset-4 hover:underline"
                href={`tel:${site.contact.phoneTel}`}
              >
                {site.contact.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="text-sm text-black/70">
            <div className="font-semibold text-black">Navigation</div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link className="hover:text-black" href="/#leistungen">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/#ueber-uns">
                  Über uns
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/#oeffnungszeiten">
                  Öffnungszeiten
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/#kontakt">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm text-black/70">
            <div className="font-semibold text-black">Öffnungszeiten</div>
            <ul className="mt-3 space-y-2">
              {site.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between">
                  <span>{h.day}</span>
                  <span className="font-medium text-black">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-6 text-xs text-black/60 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {site.brand.name}. Alle Rechte
            vorbehalten.
          </div>
          <div className="flex gap-4">
            <Link className="hover:text-black" href="/imprint">
              Impressum
            </Link>
            <Link className="hover:text-black" href="/privacy">
              Datenschutz
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

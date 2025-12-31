// src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <Testimonials />
      {/* TODO: Leistungen, Über uns, Öffnungszeiten, Kontakt, Galerie */}
    </>
  );
}

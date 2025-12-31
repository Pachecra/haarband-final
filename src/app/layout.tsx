// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";

export const metadata: Metadata = {
  title: "Haarband | Friseur in Heidelberg",
  description:
    "Haarband – moderner Friseursalon in Heidelberg. Damen- & Herrenhaarschnitt, Farbe & Styling. Jetzt Termin vereinbaren.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-white text-black antialiased">
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

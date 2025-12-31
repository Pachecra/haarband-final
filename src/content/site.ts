// src/content/site.ts
export const site = {
  brand: {
    name: "Haarband",
    label: "Haarband | Friseur",
    tagline: "Friseur in Heidelberg",
    subtagline:
      "Damen- & Herrenfriseur · Individuelle Beratung · Moderne Schnitte · Farbe & Styling",
  },
  contact: {
    city: "Heidelberg",
    addressLine: "Poststraße 42, 69115 Heidelberg",
    phoneDisplay: "+49 1520 4759945",
    phoneTel: "+4915204759945",
  },
  links: {
    booking: "/#kontakt",
    route:
      "https://www.google.com/maps/search/?api=1&query=Poststra%C3%9Fe%2042%2C%2069115%20Heidelberg",
  },
  hours: [
    { day: "Montag", time: "10:00 – 19:00" },
    { day: "Dienstag", time: "10:00 – 18:00" },
    { day: "Mittwoch", time: "Geschlossen" },
    { day: "Donnerstag", time: "10:00 – 19:00" },
    { day: "Freitag", time: "10:00 – 19:00" },
    { day: "Samstag", time: "10:00 – 19:00" },
    { day: "Sonntag", time: "10:00 – 19:00" },
  ],
  usp: [
    {
      title: "Individuelle Beratung",
      text: "Wir nehmen uns Zeit, um Schnitt, Farbe und Styling perfekt auf Sie abzustimmen.",
    },
    {
      title: "Präzision & Qualität",
      text: "Saubere Techniken, hochwertige Produkte und ein Ergebnis, das langfristig funktioniert.",
    },
    {
      title: "Modern & entspannt",
      text: "Ruhige, hochwertige Atmosphäre – damit Sie sich vom ersten Moment an wohlfühlen.",
    },
  ],
} as const;

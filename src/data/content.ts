// ============================================================
// EDITABLE CONTENT
// Edit this file to update everything on the page.
// ============================================================

// --- Types ---

export type ReasonVariant = "cyan" | "navy" | "dark";

export interface Reason {
  eyebrow: string;
  heading: string;
  body: string;
  footer: string;
  variant: ReasonVariant;
}

export interface StatItem {
  value: string;
  label: string;
  footnote?: string;
}

// --- Hero ---

export const hero = {
  title: "Kom nu, PostNord.",
  subtitle: "En kampagne for bedre postservice i Danmark.",
  intro:
    "Skriv din introduktionstekst her. Beskriv kampagnens formål, hvem der står bag, og hvad du vil opnå.",
};

// --- Three reasons ---

export const reasons: Reason[] = [
  {
    eyebrow: "Årsag 01",
    heading: "Skriv din første årsag her",
    body: "Uddybende forklaring. Brug fakta og konkrete eksempler som understøtter dit argument.",
    footer: "Konklusion",
    variant: "cyan",
  },
  {
    eyebrow: "Årsag 02",
    heading: "Skriv din anden årsag her",
    body: "Uddybende forklaring. Brug fakta og konkrete eksempler som understøtter dit argument.",
    footer: "Konklusion",
    variant: "navy",
  },
  {
    eyebrow: "Årsag 03",
    heading: "Skriv din tredje årsag her",
    body: "Uddybende forklaring. Brug fakta og konkrete eksempler som understøtter dit argument.",
    footer: "Konklusion",
    variant: "dark",
  },
];

// --- Statistics ---
// Replace imageSrc with the path to your image in /public/, e.g. "/stats-photo.jpg"
// Set imageAlt to a meaningful description.

export const statsSection = {
  heading: "[Statistik overskrift]",
  imageSrc: "",          // e.g. "/stats-photo.jpg"
  imageAlt: "[Billedtekst]",
  note: "[Kildehenvisning og noter]",
  items: [
    { value: "XX",  label: "[Label 1]" },
    { value: "XX",  label: "[Label 2]" },
    { value: "XX",  label: "[Label 3]" },
    { value: "XX%", label: "[Label 4]" },
    { value: "XX%", label: "[Label 5]" },
    { value: "XX",  label: "[Label 6]" },
  ] as StatItem[],
};

// --- Contact / About ---

export const contactSection = {
  heading: "[Din overskrift]",
  aboutLabel: "Om kampagnen",
  about:
    "[Skriv om kampagnen og hvem der står bag. Hvad er din baggrund og motivation?]",
  email: "[din@email.dk]",
  website: "[website.dk]",
};

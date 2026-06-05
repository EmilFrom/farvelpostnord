// ============================================================
// EDITABLE CONTENT
// ============================================================

export interface Reason {
  variant: "cyan" | "blue" | "navy";
  anchor: "top" | "bottom";
  heading: string;
  body: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface CaseScreenshot {
  src: string;
  alt: string;
}

export const hero = {
  title: "Kom Nu PostNord!",
  body: (
    'Facebook-gruppen "Kom Nu PostNord" vidner om et PostNord, der er ude af stand til at ' +
    'levere pakker eller kommunikere med sine kunder. PostNord modtog ifbm. brevforretningen ' +
    '600 millioner kroner som kompensation. Jeg synes, danskerne skal kunne mærke det ' +
    'afsindigt store beløb. Men det kan man bare ikke lige nu, hvor pakker ofte er forsinkede, ' +
    'beskadigede eller aldrig dukker op. Og kundeservice er aldrig til at komme i kontakt med, ' +
    'hvor man skal tvinges gennem en ChatBot for at vente flere timer på et menneske, ' +
    'der aldrig kan hjælpe. Den danske stat ejer 40% af PostNord gennem transportministeriet. ' +
    'Enten skal PostNord strammes op og blive den bedste pakkeservice i Danmark eller også ' +
    'skal det sælges så hurtigt som muligt.'
  ),
};

export const reasons: Reason[] = [
  {
    variant: "cyan",
    anchor: "bottom",
    heading: "Utilregnelig levering",
    body: "Uddyb hvorfor det her er vigtigt. Brug konkrete eksempler og fakta, som du vil fremhæve.",
  },
  {
    variant: "blue",
    anchor: "top",
    heading: "Elendig kundeservice",
    body: "Den midterste søjle vokser opad — god til det, der skal føles som hovedbudskabet.",
  },
  {
    variant: "navy",
    anchor: "bottom",
    heading: "Dyrt",
    body: "Uddybende tekst til den tredje søjle. Hold det kort og læsbart i pillen.",
  },
];

export const casesSection = {
  heading: "Virkelige oplevelser",
  /** How many stories to show at once (first N in items). */
  visibleCount: 3,
  items: [
  {
    src: "/Screenshot_20260605_084710.png",
    alt: "Opslag om at chauffoeren ikke ringede paa doeren",
  },
  {
    src: "/Screenshot_20260605_085432.png",
    alt: "Opslag om lang leveringstid mellem Braendby og Amager",
  },
  {
    src: "/Screenshot_20260605_084808.png",
    alt: "Opslag om manglende kontaktmuligheder hos PostNord",
  },
  {
    src: "/Screenshot_20260605_085602.png",
    alt: "Lang historik om pakke sendt rundt i flere byer",
  },
  {
    src: "/Screenshot_20260605_085650.png",
    alt: "Eksempel paa ekstra dokumentation fra brugeroplevelse",
  },
  ] as CaseScreenshot[],
};

export const mediaSection = {
  heading: "PostNord i medierne",
  items: [
    {
      src: "/Tvsyd.png",
      alt: "TV SYD: Flere kritiserer PostNord – må hente pakker langt fra bopælen",
    },
    {
      src: "/kosmopol.png",
      alt: "TV2 Kosmopol: Jens' pakke endte 47 km fra målet",
    },
    {
      src: "/mediawatch.png",
      alt: "Mediawatch: Flertal af danskerne vil sælge PostNord",
    },
  ] as CaseScreenshot[],
};

export const statsSection = {
  heading: "Nøgletal",
  imageSrc: "/pakkebud.jpg",
  imageAlt: "Pakkebud",
  items: [
    { value: "XX", label: "Eksempel 1" },
    { value: "XX%", label: "Eksempel 2" },
    { value: "XX", label: "Eksempel 3" },
  ] as StatItem[],
};

export const contactSection = {
  heading: "Tak!",
  aboutLabel: "Om kampagnen",
  lines: [
    "Skriv hvem der står bag kampagnen.",
    "Kontaktadresse eller by.",
    "din@email.dk",
    "website.dk",
  ],
  website: "website.dk",
};

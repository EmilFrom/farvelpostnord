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
  title: "Farvel PostNord!",
  body: (
    'Facebook-gruppen "Kom Nu PostNord" vidner om et PostNord, der er ude af stand til at ' +
    'levere pakker eller kommunikere med sine kunder. Den danske stat ejer 40% af PostNord gennem transportministeriet. ' +
    'Enten skal PostNord strammes op og blive den bedste pakkeservice i Danmark eller også ' +
    'skal det sælges så hurtigt som muligt.'
  ),
};

export const reasons: Reason[] = [
  {
    variant: "cyan",
    anchor: "bottom",
    heading: "Utilregnelig levering",
    body: "I den nuværende data fra spørgeskemaet indeholder 80% af svarene klager over forkert levering, forsinket levering eller ødelagte pakker.",
  },
  {
    variant: "blue",
    anchor: "top",
    heading: "Elendig kundeservice",
    body: "Folk i gruppen beskriver alle, at når der opstår problemer, så kan kundeservice ikke hjælpe med noget som helst. Sammenlignet med GLS, der altid er nemme at få fat i og faktisk kan hjælpe.",
  },
  {
    variant: "navy",
    anchor: "bottom",
    heading: "Dyrt",
    body: "PostNord koster 25% mere end konkurrenterne for almindelig pakkepost. Det er flere penge for en ringere service.",
  },
];

export const casesSection = {
  heading: "Virkelige oplevelser fra FB-gruppen",
  /** How many stories to show at once (first N in items). */
  visibleCount: 6,
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

export interface TallyForm {
  label: string;
  /** Tally embed URL, e.g. https://tally.so/embed/abc123 */
  embedUrl: string;
}

export const organizationSection = {
  heading: "Om foreningen og hjemmesiden og spørgeskemaet",
  body: `
    Jeg startede dette projekt, fordi PostNord aldrig en eneste gang har kunnet
    levere en pakke til min fritidsbolig, men GLS lykkes med det perfekt og meget
    hurtigt hver eneste gang.

    Da jeg så bestilte en pakke fra Tyskland, så brugte DPD ikke mere end 31 timer
    på at få pakken på 21kg fra Hagen til Brøndby. En distance på næsten 700km.

    Men det ser ud til at det vil tage PostNord 8 dage (192 timer) at transportere
    den de sidste 25 kilometer. Jeg skriver "ser ud til", fordi de har allerede
    lovet at levere den tre gange uden jeg har set så meget som en flig af pakketape, så det er meget sandsynligt at leveringstiden
    bliver længere. Og kundeservice havde intet at sige om sagen efter,
    jeg havde ventet i kø i 4 timer for at høre noget.

    Fortæl mig igen hvorfor PostNord er 25% dyrere end konkurrenterne?.

    Jeg har lavet et spørgeskema, hvor jeg samler empiri og data på folks oplevelser med PostNord.
    Jeg kan ikke sige præcist, hvad det bliver til, men jeg tror på videnskaben i at billedet viser sig, når man først har samlet dataen.

    Nedenunder det kan du melde dig ind som gratismedlem af foreningen.
    
  `.trim(),
  forms: [
    {
      label: "Spørgeskema",
      embedUrl: "https://tally.so/embed/MeV120?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    },
    {
      label: "Rekruttering",
      embedUrl: "https://tally.so/embed/eqzRDk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
    },
  ] as TallyForm[],
};

export const statsSection = {
  enabled: false,
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
  heading: "Tak for din interesse!",
  lines: [
    "Emil Halkjær From",
    "emil@emilfrom.com",
  ],
  website: "emilfrom.com",
};

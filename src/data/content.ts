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

export const hero = {
  title: "Kom Nu PostNord!",
  body: `Der er alvorlige problemer med leveringen af breve og pakker hos PostNord.
Det lader til at omfanget af problemet ikke er gået op for vores medier og politikere. Da medierne stort set ikke graver i det og politikerne hælder milliarder i PostNord, for at det blot skal overleve midlertidigt.
Derfor er formålet med denne gruppe at blive så mange, at vi bliver umulige at overse. Dertil vil vi med jævne mellemrum henvende os til medierne, for at få bragt fokus på emnet. `,
};

export const reasons: Reason[] = [
  {
    variant: "cyan",
    anchor: "bottom",
    heading: "Din første årsag",
    body: "Uddyb hvorfor det her er vigtigt. Brug konkrete eksempler og fakta, som du vil fremhæve.",
  },
  {
    variant: "blue",
    anchor: "top",
    heading: "Din anden årsag",
    body: "Den midterste søjle vokser opad — god til det, der skal føles som hovedbudskabet.",
  },
  {
    variant: "navy",
    anchor: "bottom",
    heading: "Din tredje årsag",
    body: "Uddybende tekst til den tredje søjle. Hold det kort og læsbart i pillen.",
  },
];

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

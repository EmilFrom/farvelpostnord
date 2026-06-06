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

export interface ReportChartDataPoint {
  year: number;
  value: number;
}

export interface ReportChartSeries {
  label: string;
  data: ReportChartDataPoint[];
  yAxis?: "left" | "right";
}

export interface ReportChart {
  heading: string;
  yAxisLabel: string;
  yAxisLabelRight?: string;
  valueSuffix: string;
  beginAtZero?: boolean;
  chartType?: "line" | "bar";
  series: ReportChartSeries[];
}

export const hero = {
  title: "Farvel PostNord!",
  body: (
    'Facebook-gruppen "Kom Nu PostNord" vidner om et PostNord, der er ude af stand til at ' +
    'levere pakker eller kommunikere med sine kunder. Den danske stat ejer 40% af PostNord gennem transportministeriet. ' +
    'Enten skal PostNord strammes op og blive den bedste pakkeservice i Danmark eller også ' +
    'skal det sælges så hurtigt som muligt.' +
    'Den danske stat solgte Dong og Statens Serum Institut (og langt flere i det sidste årtusind) så fortsætter vi kursen og sælger PostNord.'
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

export const reportSection = {
  heading: "2025: Året hvor PostNord mistede sin eksistensberettigelse",
  charts: [
    {
      heading: "En gigant der svinder ind",
      yAxisLabel: "Gennemsnitligt antal heltidsbeskæftigede",
      valueSuffix: "ansatte",
      beginAtZero: false,
      series: [
        {
          label: "Heltidsbeskæftigede",
          data: [
            { year: 2013, value: 12_180 },
            { year: 2014, value: 11_780 },
            { year: 2015, value: 10_911 },
            { year: 2016, value: 10_046 },
            { year: 2017, value: 8_480 },
            { year: 2018, value: 7_157 },
            { year: 2019, value: 6_315 },
            { year: 2020, value: 6_246 },
            { year: 2021, value: 6_388 },
            { year: 2022, value: 5_792 },
            { year: 2023, value: 5_198 },
            { year: 2024, value: 3_033 },
            { year: 2025, value: 2_886 },
          ],
        },
      ],
    },
    {
      heading: "Gældsudvikling",
      yAxisLabel: "mio. kr.",
      valueSuffix: "mio. kr.",
      series: [
        {
          label: "Anden langfristet gæld i alt",
          data: [
            { year: 2012, value: 89 },
            { year: 2013, value: 89 },
            { year: 2014, value: 93 },
            { year: 2015, value: 198 },
            { year: 2016, value: 167 },
            { year: 2017, value: 338 },
            { year: 2018, value: 1_391 },
            { year: 2019, value: 927 },
            { year: 2020, value: 364 },
            { year: 2021, value: 81 },
            { year: 2022, value: 38 },
            { year: 2023, value: 19 },
            { year: 2024, value: 11 },
            { year: 2025, value: 304 },
          ],
        },
        {
          label: "Anden gæld i alt",
          data: [
            { year: 2012, value: 1_371 },
            { year: 2013, value: 1_334 },
            { year: 2014, value: 1_212 },
            { year: 2015, value: 1_155 },
            { year: 2016, value: 1_129 },
            { year: 2017, value: 1_025 },
            { year: 2018, value: 1_178 },
            { year: 2019, value: 1_090 },
            { year: 2020, value: 1_398 },
            { year: 2021, value: 869 },
            { year: 2022, value: 430 },
            { year: 2023, value: 427 },
            { year: 2024, value: 394 },
            { year: 2025, value: 525 },
          ],
        },
      ],
    },
    {
      heading: "Likvider ultimo per år",
      yAxisLabel: "mio. kr.",
      valueSuffix: "mio. kr.",
      chartType: "bar",
      series: [
        {
          label: "Likvider ultimo",
          data: [
            { year: 2012, value: 103 },
            { year: 2013, value: 126 },
            { year: 2014, value: 64 },
            { year: 2015, value: 28 },
            { year: 2016, value: 35 },
            { year: 2017, value: 29 },
            { year: 2018, value: 12 },
            { year: 2019, value: 24 },
            { year: 2020, value: 27 },
            { year: 2021, value: 10 },
            { year: 2022, value: 12 },
            { year: 2023, value: 5 },
            { year: 2024, value: 39 },
            { year: 2025, value: 4 },
          ],
        },
      ],
    },
    {
      heading: "Omsætning",
      yAxisLabel: "mio. kr.",
      valueSuffix: "mio. kr.",
      chartType: "bar",
      series: [
        {
          label: "Omsætning",
          data: [
            { year: 2013, value: 8_068 },
            { year: 2014, value: 7_571 },
            { year: 2015, value: 7_204 },
            { year: 2016, value: 6_641 },
            { year: 2017, value: 5_699 },
            { year: 2018, value: 4_936 },
            { year: 2019, value: 4_734 },
            { year: 2020, value: 4_863 },
            { year: 2021, value: 5_290 },
            { year: 2022, value: 4_965 },
            { year: 2023, value: 4_838 },
            { year: 2024, value: 3_448 },
            { year: 2025, value: 3_659 },
          ],
        },
      ],
    },
    {
      heading: "Årets resultat",
      yAxisLabel: "mio. kr.",
      valueSuffix: "mio. kr.",
      chartType: "bar",
      series: [
        {
          label: "Årets resultat",
          data: [
            { year: 2013, value: -60 },
            { year: 2014, value: -183 },
            { year: 2015, value: -230 },
            { year: 2016, value: -1_372 },
            { year: 2017, value: -747 },
            { year: 2018, value: -1_092 },
            { year: 2019, value: -253 },
            { year: 2020, value: -27 },
            { year: 2021, value: 165 },
            { year: 2022, value: -121 },
            { year: 2023, value: -426 },
            { year: 2024, value: 10 },
            { year: 2025, value: -15 },
          ],
        },
      ],
    },
  ] as ReportChart[],
};

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

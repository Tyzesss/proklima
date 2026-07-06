import type { SitePreset } from "./types";

const BASE = "https://www.proklimajeleniagora.pl";

export const jeleniaGoraPreset: SitePreset = {
  id: "jelenia-gora",
  label: "Jelenia Góra",
  siteName: "PROKLIMA",
  companyLegalName: "Proklima Instalacje – Robert Mieszała",
  siteCity: "Jelenia Góra i okolice",
  cityLocative: "w Jeleniej Górze",
  siteDefaultUrl: "https://www.proklimajeleniagora.pl",
  email: "mieszala5@wp.pl",
  phoneDisplay: "601 392 339",
  phoneE164: "+48601392339",
  address: "ul. Wincentego Pola 6, 58-500 Jelenia Góra",
  addressStreet: "ul. Wincentego Pola 6",
  addressCity: "Jelenia Góra",
  addressPostal: "58-500",
  mapsQuery: "ul. Wincentego Pola 6, Jelenia Góra",
  mapsUrl: "https://maps.app.goo.gl/FCkWBWZR9rQ1LzXX9",
  hours: "Pn–Pt: 8:00–17:00",
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  nip: "611-215-60-93",
  regon: "971295213",
  siteTitle: "Klimatyzacja Jelenia Góra – montaż i serwis | PROKLIMA",
  siteKeywords:
    "klimatyzacja Jelenia Góra, montaż klimatyzacji, serwis klimatyzacji, pompy ciepła Jelenia Góra, rekuperacja",
  logoUrl: `${BASE}/uploads/2020-03-13/logo-proklima1.png`,
  faviconUrl: `${BASE}/uploads/2020-03-13/logo-proklima1.png`,
  heroImage: "/gallery/mieszkanie-mokotow.jpg",
  ogImage: `${BASE}/uploads/2020-02-28/img-20200227-wa0027.jpg`,
  googleRating: 4.5,
  googleReviewCount: 37,
  googleReviewsUrl: "https://maps.app.goo.gl/FCkWBWZR9rQ1LzXX9",
  services: [
    {
      icon: "Snowflake",
      title: "Montaż klimatyzacji",
      desc: "Split i multi-split w domach, mieszkaniach oraz lokalach usługowych.",
    },
    {
      icon: "Wrench",
      title: "Serwis i przeglądy",
      desc: "Cykliczne przeglądy, czyszczenie i naprawy utrzymujące wydajność urządzeń.",
    },
    {
      icon: "Wind",
      title: "Rekuperacja i wentylacja",
      desc: "Montaż systemów wentylacji mechanicznej z odzyskiem ciepła.",
    },
    {
      icon: "Zap",
      title: "Pompy ciepła",
      desc: "Dobór i instalacja pomp powietrze-woda dla domów jednorodzinnych.",
    },
    {
      icon: "Refrigerator",
      title: "Komory chłodnicze",
      desc: "Budowa komór chłodniczych i mroźniczych z płyt warstwowych.",
    },
    {
      icon: "Building2",
      title: "Klimatyzacja dla firm",
      desc: "Instalacje w biurach, gabinetach i obiektach komercyjnych.",
    },
  ],
  gallery: [
    {
      image: `${BASE}/uploads/2020-02-28/img-20200227-wa0027.jpg`,
      alt: "Klimatyzator ścienny Samsung Wind-Free po montażu",
      caption: "Mieszkanie · split ścienny",
      objectPosition: "50% 18%",
    },
    {
      image: `${BASE}/uploads/2020-02-28/img-20200227-wa0029.jpg`,
      alt: "Montaż klimatyzacji Samsung nad drzwiami",
      caption: "Dom · montaż split",
      objectPosition: "50% 16%",
    },
    {
      image: `${BASE}/uploads/2020-02-28/img-20200227-wa0030.jpg`,
      alt: "Klimatyzator GREE w pomieszczeniu pod skosem",
      caption: "Poddasze · klimatyzator GREE",
      objectPosition: "50% 14%",
    },
    {
      image: `${BASE}/uploads/2020-02-28/img-20200227-wa0026.jpg`,
      alt: "Klimatyzator kasetonowy Samsung w suficie",
      caption: "Lokal · kaseton",
      objectPosition: "50% 42%",
    },
    {
      image: `${BASE}/uploads/2020-02-28/img-20200227-wa0033.jpg`,
      alt: "Jednostka zewnętrzna Samsung na elewacji domu",
      caption: "Dom · jednostka zewnętrzna",
      objectPosition: "42% 48%",
    },
    {
      image: `${BASE}/uploads/2020-02-28/img-20200227-wa0024.jpg`,
      alt: "Klimatyzacja kasetonowa w lokalu gastronomicznym",
      caption: "Lokal · instalacja kasetonowa",
      objectPosition: "28% 12%",
    },
  ],
  reviews: [
    {
      source: "google",
      rating: 5,
      text: "Jesteśmy bardzo zadowoleni z usług tej firmy. Wysoka kultura osobista monterów i profesjonalizm. Panowie zabezpieczyli podłogi, posprzątali po sobie. Udzielili wyczerpujących informacji. Polecam.",
      relativeTime: "rok temu",
    },
    {
      source: "google",
      rating: 5,
      text: "Z usług firmy Proklima korzystałam dwa razy — w gabinecie lekarskim i w mieszkaniu. Obie klimatyzacje wykonane sprawnie, dokładne posprzątanie po montażu. Sprzęt działa bez zarzutu. Bardzo rozsądne ceny. Polecam.",
      relativeTime: "2 lata temu",
    },
    {
      source: "google",
      rating: 5,
      text: "Świetna obsługa. Profesjonalne doradztwo. Polecam 100%.",
      relativeTime: "3 lata temu",
    },
    {
      source: "google",
      rating: 5,
      text: "Profesjonalnie, szybko, wszelkie kwestie do ustalenia. Wymarzyłeś sobie klime tak jak ja — dzwon! Załatwione od ręki. Gorąco polecam.",
      relativeTime: "4 lata temu",
    },
    {
      source: "google",
      rating: 5,
      text: "Panowie przyjechali i zamontowali mi system klimatyzacji stacjonarnej. Działa prawidłowo.",
      relativeTime: "5 lat temu",
    },
  ],
};

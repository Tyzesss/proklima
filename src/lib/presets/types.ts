export type GalleryItem = {
  image: string;
  alt: string;
  caption?: string;
  /** CSS object-position / background-position do kadrowania (np. "50% 20%") */
  objectPosition?: string;
};

export type ReviewItem = {
  name?: string;
  text: string;
  source?: "google";
  rating?: number;
  publishedAt?: string;
  relativeTime?: string;
  postedAt?: string;
};

export type ServiceIconName =
  | "Snowflake"
  | "Wrench"
  | "Wind"
  | "Zap"
  | "Fan"
  | "Home"
  | "ShieldCheck"
  | "Building2"
  | "Refrigerator"
  | "Sparkles";

export type ServiceItem = {
  icon: ServiceIconName;
  title: string;
  desc: string;
};

export type OpeningHoursSpec = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type SitePreset = {
  id: string;
  label: string;
  siteName: string;
  companyLegalName: string;
  siteCity: string;
  cityLocative: string;
  siteDefaultUrl: string;
  email: string;
  phoneDisplay: string;
  phoneE164: string;
  address: string;
  addressStreet: string;
  addressCity: string;
  addressPostal: string;
  mapsQuery: string;
  mapsUrl: string;
  hours: string;
  openingHours?: OpeningHoursSpec[];
  nip: string;
  regon: string;
  siteTitle: string;
  siteKeywords: string;
  ogImage: string;
  heroImage: string;
  heroImagePosition?: string;
  logoUrl?: string;
  faviconUrl?: string;
  googleRating: number;
  googleReviewCount: number;
  googlePlaceId?: string;
  googleReviewsUrl?: string;
  googleWriteReviewUrl?: string;
  services?: ServiceItem[];
  gallery: GalleryItem[];
  reviews: ReviewItem[];
};

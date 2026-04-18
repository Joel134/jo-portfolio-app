export type MetaSection = {
  siteName: string;
  liveStatus: string;
};

export type KVItem = {
  label: string;
  value: string;
};

export type HeroSection = {
  label: string;
  headline: string[];
  headlineEmphasis: string[];
  ledeOpener: string;
  lede: string;
  ledeEmphasis: string[];
  kv: KVItem[];
};

export type TimelineMarker = "now" | "current" | "past";

export type TimelineNode = {
  year: string;
  marker: TimelineMarker;
  title: string;
  role: string;
  body: string;
  bodyEmphasis: string[];
  stack: string[];
  promptOnClick?: string;
};

export type TimelineSection = {
  sectionNumber: string;
  sectionTitle: string;
  sectionSub: string;
  nodes: TimelineNode[];
};

export type AboutParagraph = {
  text: string;
  tone: "primary" | "quiet";
  dropCap: boolean;
  emphasis: string[];
};

export type AboutSection = {
  sectionNumber: string;
  sectionTitle: string;
  sectionSub: string;
  paragraphs: AboutParagraph[];
  signature: {
    place: string;
    note: string;
  };
};

export type FacetItem = {
  heading: string;
  body: string;
  emphasis: string[];
};

export type FacetsSection = {
  items: FacetItem[];
};

export type WhatsNextSection = {
  sectionNumber: string;
  sectionTitle: string;
  sectionSub: string;
  spotlight: {
    label: string;
    text: string;
    highlight: string;
  };
};

export type StackSection = {
  stack: {
    heading: string;
    tokens: string[];
  };
  tongues: {
    heading: string;
    items: string[];
  };
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSection = {
  name: string;
  tagline: string;
  role: string;
  status: string;
  links: FooterLink[];
};

export type Content = {
  meta: MetaSection;
  hero: HeroSection;
  timeline: TimelineSection;
  about: AboutSection;
  facets: FacetsSection;
  whatsNext: WhatsNextSection;
  stack: StackSection;
  footer: FooterSection;
};

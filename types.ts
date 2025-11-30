export type Language = 'en' | 'de';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudyItem {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
}

export interface Certificate {
  title: string;
  subtitle: string;
  issuer: string;
  date: string;
  url: string;
  id: string;
}

export interface Content {
  nav: {
    services: string;
    process: string;
    caseStudies: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    location: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  process: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
  };
  toolPreview: {
    title: string;
    subtitle: string;
    gtmTitle: string;
    ga4Title: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  caseStudies: {
    title: string;
    subtitle: string;
    items: CaseStudyItem[];
  };
  about: {
    title: string;
    text: string;
    stats: { label: string; value: string }[];
    certificates: Certificate[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
  };
  footer: {
    rights: string;
  };
}
import { Content, Language } from './types';
import { Activity, BarChart3, Target, Layers, Globe, Zap } from 'lucide-react';
import React from 'react';

export const CONTENT: Record<Language, Content> = {
  en: {
    nav: {
      services: "Services",
      process: "How it Works",
      caseStudies: "Proven Results",
      about: "About Me",
      contact: "Contact",
    },
    hero: {
      title: "Stop Guessing. Start Tracking.",
      subtitle: "I turn invisible web traffic into actionable sales data using Google Tag Manager and GA4.",
      location: "Currently based in Vienna, Austria",
      ctaPrimary: "Audit My Tracking",
      ctaSecondary: "View Services",
    },
    process: {
      title: "From Clicks to Measures",
      subtitle: "Visualizing the journey from raw user behavior to measurable ROI.",
      step1: "User Action",
      step2: "GTM Capture",
      step3: "Growth Insights",
    },
    toolPreview: {
      title: "Inside the Engine",
      subtitle: "Professional configuration of your analytics infrastructure.",
      gtmTitle: "Tag Management",
      ga4Title: "Analytics Dashboard"
    },
    services: {
      title: "My Expertise",
      subtitle: "Holistic tracking solutions for the DACH region.",
      items: [
        {
          title: "Google Tag Manager Setup",
          description: "Advanced event tracking, datalayer implementation, and server-side tagging.",
          icon: "layers"
        },
        {
          title: "GA4 Migration & Audit",
          description: "Clean data collection, custom reports, and exploration setup for deep insights.",
          icon: "chart"
        },
        {
          title: "Conversion Optimization",
          description: "Connecting offline conversions and enhancing signal quality for Ads.",
          icon: "target"
        },
        {
          title: "Meta & Google Ads",
          description: "Pixel perfection and CAPI integration to lower your CPA.",
          icon: "zap"
        }
      ]
    },
    caseStudies: {
      title: "Proven Results",
      subtitle: "Track records of scaling businesses through data-driven marketing.",
      items: [
        {
          client: "Dreamway Holdings Ltd.",
          industry: "Real Estate",
          challenge: "Needed to scale brand presence and sales revenue aggressively over a 2-year period.",
          solution: "Implemented comprehensive digital marketing consistency and data-driven ad analysis to optimize sales funnels.",
          results: [
            "100% Sales Increase within 2 years",
            "72% Social Media Follower Growth",
            "Optimized Cross-Platform Brand Presence"
          ],
          tags: ["Sales Growth", "Ad Analysis", "Scaling"]
        },
        {
          client: "RS Confidence Holdings Ltd",
          industry: "Real Estate",
          challenge: "Required rapid growth in social engagement and sales volume within a short 6-month timeframe.",
          solution: "Collaborated with sales teams to align marketing consistency and utilized granular ad reporting.",
          results: [
            "65% Sales Increase within 6 months",
            "49% Follower Growth within 6 months",
            "Enhanced Reporting Accuracy"
          ],
          tags: ["Rapid Growth", "Reporting", "Alignment"]
        },
        {
          client: "Leisfita.com",
          industry: "E-Commerce",
          challenge: "Complex e-commerce environment requiring precise ad campaign management and analysis.",
          solution: "Managed end-to-end social media ad campaigns with a focus on KPI maintenance and inquiry handling.",
          results: [
            "Streamlined Ad Campaign Management",
            "Data-Driven Ad Analysis",
            "Improved Customer Inquiry Handling"
          ],
          tags: ["E-Commerce", "Campaign Mgmt", "KPIs"]
        }
      ]
    },
    about: {
      title: "Meta Certified Digital Marketing Associate",
      text: "I have over five years of experience in driving impactful marketing strategies. I specialize in Meta ads, Google Ads, remarketing, advanced e-commerce tracking, and optimizing sales funnels to enhance customer journeys. My expertise spans across Google Tag Manager and web analytics tools, including Google Analytics 4. With a data-driven approach, I leverage these tools to ensure a substantial return on investment.",
      stats: [
        { label: "Years Experience", value: "5+" },
        { label: "Sales Growth Delivered", value: "100%" },
        { label: "Follower Growth", value: "72%" }
      ],
      certificates: [
        {
          title: "Meta Social Media Marketing",
          subtitle: "Professional Certificate",
          issuer: "Coursera & Meta",
          date: "June 12, 2024",
          url: "https://coursera.org/verify/professional-cert/JANWAWYKQFW6",
          id: "JANWAWYKQFW6"
        },
        {
          title: "Google Analytics Certification",
          subtitle: "Professional Certificate",
          issuer: "Google Skillshop",
          date: "2024",
          url: "https://skillshop.credential.net/8b768b6c-b735-4a7d-8458-06476df1fa19#acc.LUKmD1Gy",
          id: "8b768b6c"
        }
      ]
    },
    contact: {
      title: "Ready to Scale?",
      subtitle: "Let's discuss your tracking and marketing setup.",
      name: "Md Kamrul Arefin",
      email: "mdkamrularefin@gmail.com",
      phone: "(+43) 6766815591",
      message: "Tell me about your project",
      submit: "Send Request"
    },
    footer: {
      rights: "All rights reserved."
    }
  },
  de: {
    nav: {
      services: "Leistungen",
      process: "Prozess",
      caseStudies: "Erfolge",
      about: "Über Mich",
      contact: "Kontakt",
    },
    hero: {
      title: "Kein Raten mehr. Daten nutzen.",
      subtitle: "Ich verwandle unsichtbaren Web-Traffic in messbare Umsätze mit Google Tag Manager und GA4.",
      location: "Zurzeit wohnhaft in Wien, Österreich",
      ctaPrimary: "Tracking Audit Anfragen",
      ctaSecondary: "Leistungen ansehen",
    },
    process: {
      title: "Von Klicks zu Messwerten",
      subtitle: "So schließe ich die Lücke zwischen Nutzerverhalten und Ihrem ROI.",
      step1: "Nutzeraktion",
      step2: "GTM Erfassung",
      step3: "Wachstums-Insights",
    },
    toolPreview: {
      title: "Hinter den Kulissen",
      subtitle: "Ein Blick auf die professionelle Konfiguration Ihrer Analytics-Infrastruktur.",
      gtmTitle: "Tag Management",
      ga4Title: "Analytics Dashboard"
    },
    services: {
      title: "Meine Expertise",
      subtitle: "Ganzheitliche Tracking-Lösungen für die DACH-Region.",
      items: [
        {
          title: "Google Tag Manager Setup",
          description: "Erweitertes Event-Tracking, DataLayer-Implementierung und Server-Side Tagging.",
          icon: "layers"
        },
        {
          title: "GA4 Migration & Audit",
          description: "Saubere Datenerfassung, benutzerdefinierte Berichte und tiefe Einblicke.",
          icon: "chart"
        },
        {
          title: "Conversion Optimierung",
          description: "Verknüpfung von Offline-Conversions und Verbesserung der Signalqualität.",
          icon: "target"
        },
        {
          title: "Meta & Google Ads",
          description: "Pixel-Perfektion und CAPI-Integration zur Senkung Ihres CPA.",
          icon: "zap"
        }
      ]
    },
    caseStudies: {
      title: "Nachgewiesene Erfolge",
      subtitle: "Erfolgsbilanz bei der Skalierung von Unternehmen durch datengesteuertes Marketing.",
      items: [
        {
          client: "Dreamway Holdings Ltd.",
          industry: "Immobilien",
          challenge: "Skalierung der Markenpräsenz und aggressive Umsatzsteigerung über einen Zeitraum von 2 Jahren.",
          solution: "Implementierung einer konsistenten digitalen Marketingstrategie und datengestützte Anzeigenanalyse.",
          results: [
            "100% Umsatzsteigerung in 2 Jahren",
            "72% Wachstum der Follower",
            "Optimierte Markenpräsenz"
          ],
          tags: ["Umsatzwachstum", "Analyse", "Skalierung"]
        },
        {
          client: "RS Confidence Holdings Ltd",
          industry: "Immobilien",
          challenge: "Schnelles Wachstum von sozialem Engagement und Umsatzvolumen innerhalb von 6 Monaten erforderlich.",
          solution: "Zusammenarbeit mit Vertriebsteams zur Abstimmung der Marketingkonsistenz und Nutzung detaillierter Reportings.",
          results: [
            "65% Umsatzsteigerung in 6 Monaten",
            "49% Follower-Wachstum in 6 Monaten",
            "Verbesserte Reporting-Genauigkeit"
          ],
          tags: ["Schnelles Wachstum", "Reporting", "Vertrieb"]
        },
        {
          client: "Leisfita.com",
          industry: "E-Commerce",
          challenge: "Komplexes E-Commerce-Umfeld, das präzises Kampagnenmanagement und Analysen erfordert.",
          solution: "Management von Social-Media-Kampagnen mit Fokus auf KPI-Einhaltung und Kundenanfragen.",
          results: [
            "Optimiertes Kampagnenmanagement",
            "Datengestützte Ad-Analyse",
            "Verbessertes Kundenmanagement"
          ],
          tags: ["E-Commerce", "Kampagnen", "KPIs"]
        }
      ]
    },
    about: {
      title: "Meta Zertifizierter Experte",
      text: "Ich bin Meta Certified Digital Marketing Associate mit über fünf Jahren Erfahrung in der Entwicklung wirkungsvoller Marketingstrategien. Ich spezialisiere mich auf Meta Ads, Google Ads, Remarketing, erweitertes E-Commerce-Tracking und die Optimierung von Sales Funnels. Meine Expertise umfasst Google Tag Manager und Webanalyse-Tools, einschließlich Google Analytics 4. Mit einem datengesteuerten Ansatz sorge ich für einen signifikanten Return on Investment.",
      stats: [
        { label: "Jahre Erfahrung", value: "5+" },
        { label: "Umsatzsteigerung", value: "100%" },
        { label: "Follower Wachstum", value: "72%" }
      ],
      certificates: [
        {
          title: "Meta Social Media Marketing",
          subtitle: "Professional Certificate",
          issuer: "Coursera & Meta",
          date: "12. Juni 2024",
          url: "https://coursera.org/verify/professional-cert/JANWAWYKQFW6",
          id: "JANWAWYKQFW6"
        },
        {
          title: "Google Analytics Certification",
          subtitle: "Professional Certificate",
          issuer: "Google Skillshop",
          date: "2024",
          url: "https://skillshop.credential.net/8b768b6c-b735-4a7d-8458-06476df1fa19#acc.LUKmD1Gy",
          id: "8b768b6c"
        }
      ]
    },
    contact: {
      title: "Bereit zu Skalieren?",
      subtitle: "Lassen Sie uns über Ihr aktuelles Setup sprechen.",
      name: "Md Kamrul Arefin",
      email: "mdkamrularefin@gmail.com",
      phone: "(+43) 6766815591",
      message: "Erzählen Sie mir von Ihrem Projekt",
      submit: "Anfrage Senden"
    },
    footer: {
      rights: "Alle Rechte vorbehalten."
    }
  }
};

export const Icons: Record<string, React.ElementType> = {
  layers: Layers,
  chart: BarChart3,
  target: Target,
  zap: Zap,
  globe: Globe,
  activity: Activity
};
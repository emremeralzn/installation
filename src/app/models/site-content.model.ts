export interface ServiceItem {
  title: string;
  description: string;
  icon: 'drop' | 'search' | 'drain' | 'tools' | 'heat' | 'urgent';
}

export interface AdvantageItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BusinessInfo {
  name: string;
  shortName: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  serviceArea: string;
  hours: string;
  siteUrl: string;
}

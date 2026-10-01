import { AdvantageItem, BusinessInfo, ProcessStep, ServiceItem } from '../models/site-content.model';

// Placeholder alanlar yayına almadan önce gerçek işletme bilgileriyle değiştirilmelidir.
export const BUSINESS: BusinessInfo = {
  name: 'İdris Erisoylu Tesisat Hizmetleri',
  shortName: 'İdris Erisoylu',
  phoneDisplay: '+90 5XX XXX XX XX',
  phoneHref: 'tel:+905XXXXXXXXX',
  whatsappHref: 'https://wa.me/905XXXXXXXXX',
  serviceArea: 'İstanbul Avrupa Yakası ve çevre ilçeler',
  hours: 'Pazartesi – Cumartesi, 08.00 – 20.00',
  siteUrl: 'https://www.ornekalanadi.com',
};

export const SERVICES: ServiceItem[] = [
  {
    title: 'Su Tesisatı',
    description: 'Yeni tesisat uygulamaları, bakım ve kullanıma bağlı arızalar için pratik çözümler.',
    icon: 'drop',
  },
  {
    title: 'Su Kaçağı Tespiti',
    description: 'Sorunun kaynağını gereksiz kırma işlemlerinden kaçınarak belirlemeye yönelik inceleme.',
    icon: 'search',
  },
  {
    title: 'Gider Açma',
    description: 'Mutfak, banyo, lavabo ve gider hatlarındaki tıkanıklıklara yerinde müdahale.',
    icon: 'drain',
  },
  {
    title: 'Tesisat Tamiri',
    description: 'Musluk, vana, boru ve bağlantı noktalarındaki arızaların onarımı.',
    icon: 'tools',
  },
  {
    title: 'Isıtma Tesisatı',
    description: 'Kombi ve petek bağlantılarında kontrol, bakım ve tesisat desteği.',
    icon: 'heat',
  },
  {
    title: 'Acil Tesisat Desteği',
    description: 'Beklemeye uygun olmayan tesisat sorunlarında hızlı iletişim ve yönlendirme.',
    icon: 'urgent',
  },
];

export const ADVANTAGES: AdvantageItem[] = [
  { title: 'Hızlı iletişim', description: 'Talebinizi dinler, uygun servis zamanı için kısa sürede dönüş yaparız.' },
  { title: 'Temiz çalışma', description: 'Çalışma alanını korur, iş sonrası düzeni önemseriz.' },
  { title: 'Şeffaf süreç', description: 'Yapılacak işlemi ve olası seçenekleri uygulama öncesinde açıklarız.' },
  { title: 'Yerinde çözüm', description: 'Sorunu yerinde inceleyerek ihtiyaca uygun ve kalıcı bir yol belirleriz.' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'İletişime geçin', description: 'Telefon veya WhatsApp üzerinden bize ulaşın.' },
  { number: '02', title: 'Sorunu dinleyelim', description: 'İhtiyacınızı anlayıp ilk bilgileri birlikte netleştirelim.' },
  { number: '03', title: 'Yerinde inceleyelim', description: 'Uygun zamanda adresinize gelip tesisatı kontrol edelim.' },
  { number: '04', title: 'Çözümü uygulayalım', description: 'Onayınızın ardından gerekli işlemi temizce tamamlayalım.' },
];

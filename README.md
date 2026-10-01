# İstanbul Tesisat Hizmetleri

Angular 20, Angular SSR ve Tailwind CSS 4 ile hazırlanmış tek sayfalık tesisat hizmetleri sitesi.

## Kurulum ve geliştirme

```bash
npm install
npm start
```

Geliştirme sunucusu varsayılan olarak `http://localhost:4200` adresinde açılır.

## Production build ve SSR

```bash
npm run build
npm run serve:ssr:tesisat-site
```

SSR sunucusu varsayılan olarak `http://localhost:4000` adresinde çalışır.

## Yayına almadan önce

- `src/app/data/site-content.ts` içindeki işletme adı, telefon, WhatsApp, hizmet bölgesi ve çalışma saatlerini güncelleyin.
- `src/index.html` içindeki `ornekalanadi.com` canonical, Open Graph ve JSON-LD URL'lerini gerçek alan adıyla değiştirin.
- `angular.json` içindeki `security.allowedHosts` listesine gerçek alan adını ekleyin ve örnek alan adını kaldırın.
- Hero görselinin optimize edilmiş sürümü `public/assets/images/idris.webp`, kaynak dosyası `idris.png` altındadır.

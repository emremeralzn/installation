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

## Netlify pipeline

`main` branch'ine yapılan her push, GitHub Actions üzerinden production ortamına deploy edilir. Pipeline manuel olarak da **Actions > Netlify Deploy > Run workflow** yoluyla çalıştırılabilir.

İlk deploy öncesinde:

1. Netlify'da yeni bir site oluşturun.
2. Netlify **Project configuration > General > Project information** bölümündeki Project ID değerini GitHub repository secret'ı olarak `NETLIFY_SITE_ID` adıyla ekleyin.
3. Netlify **User settings > Applications > Personal access tokens** bölümünde bir token oluşturup GitHub repository secret'ı olarak `NETLIFY_AUTH_TOKEN` adıyla ekleyin.
4. Değişiklikleri `main` branch'ine gönderin veya workflow'u manuel çalıştırın.

GitHub secret'ları **Settings > Secrets and variables > Actions** bölümünden eklenir. Build ve yayın dizini ayarları `netlify.toml` içinde tutulur; Angular SSR desteği Netlify tarafından otomatik olarak Edge Function şeklinde yapılandırılır.

## Yayına almadan önce

- `src/app/data/site-content.ts` içindeki işletme adı, telefon, WhatsApp, hizmet bölgesi ve çalışma saatlerini güncelleyin.
- `src/index.html` içindeki `ornekalanadi.com` canonical, Open Graph ve JSON-LD URL'lerini gerçek alan adıyla değiştirin.
- `angular.json` içindeki `security.allowedHosts` listesine gerçek alan adını ekleyin ve örnek alan adını kaldırın.
- Hero görselinin optimize edilmiş sürümü `public/assets/images/idris.webp`, kaynak dosyası `idris.png` altındadır.

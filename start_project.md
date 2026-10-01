Projeye Angular + Tailwind CSS tabanlı, SSR destekli, SEO odaklı tek sayfalık profesyonel bir tesisat hizmetleri web sitesi oluştur.

## 1. Genel Amaç

Bu proje İstanbul'da hizmet veren bireysel bir tesisat ustası / tesisat hizmetleri işletmesi için hazırlanacak.

Amaç:

* Profesyonel
* Güven veren
* Sade
* Modern ama abartısız
* Gerçek bir işletmenin yaptırdığı hissini veren
* Mobil uyumlu
* SEO açısından düzgün
* Hızlı
* Kullanıcıyı doğrudan iletişime yönlendiren

tek sayfalık bir landing page oluşturmak.

Tasarım kesinlikle "AI tarafından oluşturulmuş template" gibi görünmemeli.

Aşırı gradient, aşırı border-radius, gereksiz glassmorphism, fazla shadow, neon renkler, gereksiz animasyonlar ve aşırı dekoratif CSS kullanma.

Gerçek bir tesisat firmasının web sitesine bakıldığında görülebilecek kadar doğal ve kurumsal bir tasarım oluştur.

---

# 2. Teknoloji

Projede:

* Angular
* Angular SSR
* Tailwind CSS

kullan.

Angular'ın güncel ve stabil standalone component yaklaşımını kullan.

Gereksiz kütüphaneler ekleme.

Swiper gibi bir kütüphane ancak gerçekten ihtiyaç varsa kullanılabilir. Sadece "kullanmış olmak için" dependency ekleme.

Projede mevcut Angular sürümünü kontrol et ve ona uygun şekilde ilerle.

SSR'ın gerçekten çalıştığından emin ol.

Browser-only API kullanan kodlarda SSR uyumluluğuna dikkat et.

Örneğin:

* window
* document
* localStorage
* sessionStorage

gibi API'leri doğrudan component initialization sırasında kullanma.

Gerekirse Angular'ın SSR uyumlu yöntemlerini kullan.

---

# 3. Tasarım Dili

Ana font:

```css
font-family: 'Proxima Nova', "Proxima Nova", sans-serif;
```

Bunu mümkün olduğunca global typography yaklaşımıyla kullan.

Ancak Proxima Nova'nın projede fiziksel font dosyaları yoksa fontu base64 olarak gömme.

Font dosyası kullanmak gerekiyorsa bunun yerine uygun bir web font fallback stratejisi oluştur.

Tipografi:

* Başlıklar güçlü
* Metinler rahat okunabilir
* Çok büyük heading kullanma
* Hero bölümünde ekranın tamamını kaplayan devasa yazılar kullanma
* Desktop ve mobil typography dengeli olsun

Örnek yaklaşım:

```text
H1:
Profesyonel Tesisat Hizmetleri

Alt açıklama:
Su tesisatı, kaçak tespiti, gider açma ve diğer tesisat ihtiyaçlarınız için hızlı ve güvenilir hizmet.

CTA:
Hemen Ara
WhatsApp'tan Ulaş
```

Metinleri doğal Türkçe yaz.

SEO için keyword stuffing yapma.

---

# 4. Renk Paleti

Tesisat sektörü için güven veren sade bir renk paleti kullan.

Ana renk olarak mavi tonları tercih edilebilir.

Örneğin:

* Koyu lacivert / koyu mavi
* Orta mavi
* Açık gri
* Beyaz
* Çok sınırlı miktarda vurgu rengi

Ancak renkleri abartma.

Her section farklı renkte olmasın.

Site genelinde tutarlı bir visual hierarchy oluştur.

---

# 5. Sayfa Yapısı

Tek bir landing page olacak.

Routing ile ayrı ayrı:

/hizmetler
/hakkimizda
/iletisim

gibi sayfalar oluşturma.

Navbar'daki linkler aynı sayfa içerisindeki section'lara scroll etsin.

Örneğin:

```text
Ana Sayfa
Hizmetler
Hakkımızda
Neden Biz?
İletişim
```

Navbar'daki her item ilgili section'a smooth scroll yapsın.

Anchor yapısını SEO açısından düzgün kur.

Örneğin:

```html
<section id="hizmetler">
```

gibi semantic ID'ler kullanılabilir.

Smooth scrolling için mümkün olduğunca Tailwind / native CSS kullan.

Gereksiz JavaScript yazma.

---

# 6. Navbar

Navbar:

* Desktop
* Tablet
* Mobile

uyumlu olsun.

Desktop'ta:

Logo / işletme adı
Ana Sayfa
Hizmetler
Hakkımızda
Neden Biz?
İletişim
Telefon CTA

gibi yapı olabilir.

Mobile'da hamburger menu kullanılabilir.

Navbar çok yüksek olmasın.

Sticky veya fixed kullanılabilir ancak içeriğin üstünü kapatmadığından emin ol.

Navbar'ın ilk açılışta gereksiz büyük animasyonları olmasın.

Gerçek bir firma sitesi gibi sade görünmeli.

---

# 7. Hero Section

Hero sayfanın en önemli bölümü.

Amaç ilk 3-5 saniyede:

1. Ne iş yaptığını
2. Nerede hizmet verdiğini
3. Kullanıcının nasıl iletişime geçeceğini

anlatmak.

Örnek:

```text
Profesyonel Tesisat Hizmetleri

İstanbul'da su tesisatı, kaçak tespiti, gider açma ve bakım ihtiyaçlarınız için hızlı ve güvenilir çözümler.

[ Hemen Ara ] [ WhatsApp'tan Ulaş ]
```

Hero'da tesisatla ilgili gerçekçi bir görsel kullanılabilir.

Ancak görseli base64 olarak HTML içine gömme.

SEO ve performans açısından:

* Görselleri `public/assets` altında tut.
* PNG/JPG/WebP kullanılabilir.
* Fotoğraf için mümkünse WebP kullan.
* SVG ikonlar için kullanılabilir.
* Büyük görselleri optimize et.
* Gereksiz büyük dosyalar kullanma.

Eğer gerçek görsel mevcut değilse, önce placeholder/stock görsel yapısını oluştur ve hangi dosyanın nereye konulacağını açıkça belirt.

Base64 kullanma.

---

# 8. Hero Görseli

Hero görselini:

```text
/public/assets/
```

altında tut.

Örneğin:

```text
public/
└── assets/
    ├── images/
    │   ├── hero.webp
    │   ├── service-leak.webp
    │   ├── service-drain.webp
    │   └── service-installation.webp
    └── logo.svg
```

şeklinde organize edebilirsin.

Görselleri HTML içine base64 olarak gömme.

Her `<img>` elementinde:

* meaningful `alt`
* `width`
* `height`
* gerektiğinde `loading="lazy"`

kullan.

Hero gibi above-the-fold ana görsel için lazy loading kullanma.

---

# 9. Hizmetler Section

Tesisat hizmetlerini kartlar halinde göster.

Örneğin:

### Su Tesisatı

Yeni su tesisatı, bakım ve onarım işlemleri.

### Su Kaçağı Tespiti

Duvar kırmadan veya minimum müdahaleyle kaçak tespiti.

### Gider Açma

Mutfak, banyo, lavabo ve gider tıkanıklıklarının açılması.

### Tesisat Tamiri

Arızalı musluk, vana, boru ve bağlantıların onarımı.

### Kombi / Petek Tesisatı

Gerekliyse bu hizmet için uygun bir alan.

### Acil Tesisat

Acil durumlarda hızlı müdahale.

Ancak gerçek hizmetler kesin olarak bilinmediği için hizmet isimlerini aşırı spesifik hale getirme.

Kod içerisinde kolay değiştirilebilir bir data array kullanabilirsin:

```ts
services = [
  {
    title: 'Su Tesisatı',
    description: '...',
    icon: '...'
  }
]
```

Angular template içerisinde `@for` kullan.

`*ngFor` kullanma.

---

# 10. Hakkımızda

Kısa ve samimi bir section oluştur.

Kurumsal şirket dili kullanma.

Örneğin:

```text
Yılların tecrübesiyle tesisat işlerinizde yanınızdayız.

İstanbul'da bireysel ve işletmelere yönelik tesisat hizmetleri sunuyoruz. 
İşimizin merkezinde hızlı müdahale, temiz çalışma ve güvenilir hizmet anlayışı bulunuyor.
```

Ancak tamamen örnek metin olarak düşün.

Gerçek bilgiler sonradan kolayca değiştirilebilecek şekilde component/data yapısında tut.

Abartılı:

"Türkiye'nin lider tesisat firması"

"1 numaralı tesisat hizmeti"

gibi doğrulanamayacak iddialar yazma.

---

# 11. Neden Biz?

Kullanıcıya güven vermek için kısa avantajlar.

Örneğin:

* Hızlı iletişim
* Zamanında müdahale
* Temiz çalışma
* Şeffaf fiyatlandırma
* Deneyimli hizmet
* İstanbul içi servis

Bunları büyük animasyonlu kartlara dönüştürme.

Sade icon + heading + açıklama yapısı yeterli.

---

# 12. Nasıl Çalışıyoruz?

İsteğe bağlı olarak 3 veya 4 adımlı basit bir section oluştur:

```text
01
İletişime Geçin

02
Sorununuzu Dinleyelim

03
Yerinde İnceleme

04
Çözüm
```

Bu section kullanıcıya sürecin nasıl ilerlediğini anlatmalı.

---

# 13. CTA

Sayfanın birkaç yerinde kullanıcıyı iletişime yönlendir.

Özellikle:

Hero
Hizmetlerden sonra
Sayfanın sonunda

CTA olabilir.

Örneğin:

```text
Tesisat sorununuz mu var?

Bize ulaşın, ihtiyacınızı birlikte değerlendirelim.

[ Hemen Ara ]
[ WhatsApp ]
```

Telefon numarası gerçek bilgi olmadığı için placeholder kullan:

```text
+90 5XX XXX XX XX
```

WhatsApp URL'sini de gerçek numara olmadığı için placeholder olarak bırak.

---

# 14. İletişim Section

İletişim section'ında:

* Telefon
* WhatsApp
* Adres / Hizmet bölgesi
* Çalışma saatleri

gibi bilgiler bulunabilir.

Google Maps iframe eklemek zorunda değilsin.

Gerçek adres bilinmediği için placeholder kullan.

Örneğin:

```text
İstanbul
Avrupa Yakası ve çevre ilçeler
```

gibi sonradan değiştirilebilir alanlar oluştur.

Telefon linki:

```html
<a href="tel:+905XXXXXXXXX">
```

WhatsApp:

```html
<a href="https://wa.me/905XXXXXXXXX">
```

şeklinde olabilir.

Gerçek numara verilmediği için placeholder bırak.

---

# 15. Footer

Footer çok büyük olmasın.

İçerik:

* İşletme adı
* Kısa açıklama
* Telefon
* WhatsApp
* Copyright

yeterli.

Örneğin:

```text
© 2026 [İşletme Adı]. Tüm hakları saklıdır.
```

---

# 16. SEO

Bu proje SEO odaklı olacak.

Angular SSR gerçekten kullanılmalı.

HTML'in server tarafında render edildiğini kontrol et.

`index.html` / Angular document title / meta yapılarını düzgün kur.

Ana sayfa için:

```html
<title>İstanbul Tesisatçı | Su Tesisatı ve Tesisat Hizmetleri</title>
<meta
  name="description"
  content="İstanbul'da su tesisatı, su kaçağı tespiti, gider açma ve tesisat onarım hizmetleri."
>
```

gibi doğal bir SEO yapısı oluştur.

Ancak keyword stuffing yapma.

Semantic HTML kullan:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

gerektiği yerde kullan.

H1 yalnızca bir tane olsun.

Section başlıklarında H2 kullan.

Kart başlıklarında uygun heading hierarchy kullan.

Görsellere anlamlı `alt` değerleri ver.

Örneğin:

```html
alt="İstanbul su tesisatı hizmeti"
```

ama her görsele aynı keywordü koyma.

---

# 17. Structured Data

SEO için uygun olduğu yerde JSON-LD ekle.

Özellikle `LocalBusiness` / `Plumber` schema kullanılabilir.

Ancak gerçek bilgiler bilinmediği için:

* gerçek olmayan telefon
* gerçek olmayan adres
* gerçek olmayan rating
* gerçek olmayan review
* gerçek olmayan fiyat

uydurma.

Placeholder kullan veya bilinmeyen alanları schema'ya hiç ekleme.

Örneğin işletme adı ve hizmet türü sonradan kolayca değiştirilebilir.

SSR sırasında JSON-LD'ın HTML'e düzgün şekilde dahil olduğundan emin ol.

---

# 18. Open Graph / Social SEO

Uygun meta tag'leri oluştur:

* og:title
* og:description
* og:type
* og:url
* og:image

Ancak gerçek URL bilinmediği için config/data üzerinden değiştirilebilir yapı oluştur.

---

# 19. Performance

Performans önemli.

Gereksiz:

* animation library
* UI library
* component library
* icon library
* büyük JS dependency

ekleme.

CSS mümkün olduğunca Tailwind üzerinden yaz.

Custom CSS minimum olsun.

Şu tarz büyük SCSS/CSS dosyaları oluşturma:

```css
.hero {
   ...
}

.hero-title {
   ...
}

.hero-description {
   ...
}
```

Bunun yerine Tailwind kullan:

```html
<section class="...">
```

Özel CSS gerçekten gerekiyorsa küçük ve anlamlı bir global style oluştur.

---

# 20. Tailwind Kullanımı

Styling'in ana kaynağı Tailwind olacak.

Öncelik:

```text
Tailwind utility classes
```

Sonra:

```text
semantic HTML
```

En son gerçekten ihtiyaç varsa:

```text
custom CSS
```

Karmaşık CSS yazma.

Özellikle:

* margin
* padding
* flex
* grid
* typography
* colors
* border
* radius
* responsive
* hover
* focus

gibi şeylerde Tailwind kullan.

---

# 21. Responsive

Mobile-first geliştir.

En az:

```text
mobile
sm
md
lg
xl
```

breakpoint'lerini gerektiği yerde kullan.

Özellikle:

* Navbar
* Hero
* Hizmet kartları
* CTA
* Contact
* Footer

mobilde düzgün çalışmalı.

Mobilde yatay scroll oluşmamalı.

---

# 22. Animasyon

Animasyon çok sınırlı kullanılmalı.

Örneğin:

* navbar hover
* button hover
* section transition

gibi küçük hareketler olabilir.

Sayfa açılırken her elementin farklı yerden uçtuğu animasyonlar yapma.

Scroll animation library ekleme.

CSS transition yeterli.

---

# 23. Icon Kullanımı

Icon gerekiyorsa hafif bir çözüm kullan.

Her kart için devasa icon kullanma.

İkonlar:

* tesisat
* su
* telefon
* WhatsApp
* location
* clock

gibi içerikle ilişkili olsun.

Iconları mümkünse SVG olarak kullan.

---

# 24. Component Yapısı

Tek component içerisinde 500-1000 satır HTML oluşturma.

Mantıklı componentlere ayır.

Örneğin:

```text
src/app/
├── components/
│   ├── navbar/
│   ├── hero/
│   ├── services/
│   ├── about/
│   ├── why-us/
│   ├── process/
│   ├── cta/
│   ├── contact/
│   └── footer/
│
├── pages/
│   └── home/
│
├── models/
│
└── app.config.ts
```

Ancak gereksiz component fragmentation da yapma.

Her küçük text için component oluşturma.

---

# 25. Angular Kodlama Standartları

Modern Angular yaklaşımını kullan.

Özellikle template'lerde:

```angular
@if
@for
```

kullan.

`*ngIf` / `*ngFor` kullanma.

Mümkün olduğunda:

* signals
* computed
* modern Angular control flow
* standalone components

kullan.

Ancak sırf signals kullanmış olmak için gereksiz reactive state oluşturma.

---

# 26. İçerik Yönetilebilirliği

Şimdilik CMS yapma.

Ancak içerikleri component içine dağınık şekilde yazmak yerine mümkün olduğunca data olarak organize et.

Örneğin:

```ts
services = [...]
advantages = [...]
processSteps = [...]
```

gibi.

Böylece işletme sahibi daha sonra:

* hizmet adını
* açıklamasını
* telefon numarasını
* çalışma saatini
* bölge bilgisini

kolayca değiştirebilsin.

---

# 27. Görsel Stratejisi

Görseller için kesinlikle base64 kullanma.

Tercih sırası:

1. WebP
2. Optimize edilmiş JPG
3. SVG (ikon/logo için)
4. PNG sadece gerçekten gerekiyorsa

Görseller:

```text
public/assets/images/
```

altında tutulabilir.

Hero görseli için yaklaşık 1200-1600px genişliğinde optimize edilmiş WebP tercih et.

Kartlardaki görseller gerekiyorsa daha küçük boyutlu kullan.

Decorative image'larda `alt=""` kullanılabilir.

Anlamlı görsellerde descriptive alt kullan.

---

# 28. Tasarımda Özellikle KAÇIN

Şunları kesinlikle kullanma veya minimumda tut:

* Fazla gradient
* Mor/mavi AI gradientleri
* Glassmorphism
* Büyük glowing effects
* Her yerde shadow
* Çok yuvarlak kartlar
* `rounded-[32px]` gibi aşırı radius
* Aşırı büyük hero
* 10 farklı animasyon
* Gereksiz floating elements
* Aşırı ikon kullanımı
* "AI startup landing page" görünümü
* Stock-template hissi
* Gereksiz badge'ler
* Sahte müşteri yorumları
* Sahte 5 yıldızlar
* Sahte Google rating
* Sahte istatistikler
* "10.000+ müşteri" gibi uydurma veriler

Site gerçek bir yerel tesisat ustasının web sitesi gibi görünmeli.

---

# 29. Güven Unsurları

Gerçek veri elimizde olmadığı için sahte referans/review oluşturma.

Bunun yerine güveni tasarımla ve gerçekçi içerikle oluştur.

Örneğin:

```text
Hızlı İletişim
Temiz İşçilik
Şeffaf Süreç
Yerinde Çözüm
```

gibi doğrulanabilirliği daha kolay olan hizmet prensipleri kullanılabilir.

---

# 30. Kod Kalitesi

Kod:

* okunabilir
* maintainable
* component bazlı
* responsive
* SSR-safe

olmalı.

Gereksiz abstraction yapma.

Örneğin sırf "Clean Architecture" olsun diye frontend'de 20 klasör oluşturma.

Landing page için pratik ve sade bir Angular mimarisi kullan.

---

# 31. İlk Yapılacaklar

Önce mevcut projeyi incele.

Şunları kontrol et:

* Angular version
* package.json
* mevcut Tailwind kurulumu
* SSR kurulumu
* mevcut app.config
* mevcut routing
* mevcut styles
* mevcut assets

Mevcut çalışan yapıyı gereksiz yere bozma.

Eksik olanları ekle.

Eğer proje henüz boşsa gerekli Angular SSR + Tailwind altyapısını kur.

---

# 32. Son Kontroller

İş bittikten sonra aşağıdakileri kontrol et:

### Build

```bash
npm run build
```

hatasız çalışmalı.

### SSR

Production/server build gerçekten çalışmalı.

### Responsive

Kontrol et:

* 375px
* 390px
* 768px
* 1024px
* 1440px

ekran genişliklerinde düzgün görünmeli.

### SEO

Kontrol et:

* H1
* title
* meta description
* semantic HTML
* alt attributes
* canonical
* Open Graph
* JSON-LD
* SSR rendered HTML

### Accessibility

Kontrol et:

* button vs anchor kullanımı
* keyboard navigation
* focus state
* aria-label gerektiği yerler
* image alt
* renk kontrastı

### Performance

Gereksiz dependency veya büyük asset bırakma.

---

# 33. Önemli

Ben şu aşamada senden sadece bir tasarım mockup'ı istemiyorum.

Projeyi gerçekten çalışır şekilde oluştur.

Kodları yaz.

Dosyaları oluştur.

Gerekli dependency'leri kur.

SSR + Tailwind entegrasyonunu yap.

Landing page'i tamamla.

Sonrasında bana:

1. Hangi dosyaları oluşturduğunu
2. Hangi dependency'leri eklediğini
3. SEO için neler yaptığını
4. Görselleri nereye koyduğunu
5. Hangi gerçek bilgilerin placeholder olduğunu
6. Projeyi nasıl çalıştıracağımı

kısa şekilde özetle.

Özellikle görsel dosyaları için base64 kullanma.

Gerçek görsel dosyaları yoksa placeholder asset yapısını oluştur ve sonradan hangi görselin değiştirileceğini açıkça belirt.

Sonuç, "AI'ın yaptığı gösterişli landing page" değil, gerçek bir tesisat ustasının müşteriye gösterebileceği **sade, güvenilir, hızlı ve SEO odaklı bir işletme sitesi** olmalı.

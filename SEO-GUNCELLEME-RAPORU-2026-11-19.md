# SEO Güncelleme Raporu — MK Digital Systems (2026-11-19)

## Amaç
Üç siteli marka ayrımının (MK OPS = şantiye/saha, MK Digital = ticari merkez, MustafaÖner.net = kişisel site) **hedef sayfa hazırlık** aşaması. MustafaÖner.net'ten gelecek demo/proje/ürün içeriklerinin MK Digital'de karşılığını hazırlamak. Bu aşamada yönlendirme, silme veya canlıya alma yoktur.

## Dal ve commitler
- Dal: `seo/hedef-sayfalar` (`main` üstünde)
- Önceki taban: `main` — `56ad279e`
- `640f2ece` — mevcut kullanıcı değişikliklerini (ürün verisi ve test) koruyan ayrı commit
- `006ec0f2` — demo bölümü, MK Pati / MK TraceOps, MK Resepsiyon birleşimi, ürün adı birliği
- `a8978989` — en/de/fr proje görsel alt metinleri ve amiral gemisi proje çevirileri (son uygulama commiti)

## Eklenen / değiştirilen sayfalar
- **Yeni:** `/tr/demolar` ve `/en/demos` (dizin) + 12 ayrıntı sayfası × 2 dil: Musty Music, Mavi İletişim, Hukuk Bürosu, Mavi Danışmanlık, Güzellik Salonu, Mavi Şarkılar, ARIA, Mavi Kadraj Otel, Mavi Gayrimenkul, Mavi Kafe & Restaurant (demo/konsept çalışma) ile Gönül Pusulası, Şiir Dünyası (proje çalışması). Her sayfada "müşteri referansı değildir" notu. `/de` ve `/fr` bilinçli olarak 404.
- **Yeni ürün sayfaları:** `/tr/mk-pati`, `/tr/mk-traceops` (TraceOps "geliştirme aşamasında", canlı bağlantı yok).
- **Değişen:** MK Resepsiyon (Mavi Resepsiyon içeriği birleştirildi), "Mavi Kadrajla Öğreniyorum" görünen adı (slug `mavi-kadraj-ile-ogreniyorum` değişmedi), Çalışmalar sayfasındaki dış portföy bağlantısı iç demo bölümüne çevrildi, en/de/fr proje metinleri.
- **Çözüm sayfalarında** yalnızca ürün adı güncellendi.

## SEO ve canonical düzenlemeleri
- Demo sayfalarında self-canonical (`www.mk-digitalsystems.com`), `hreflang` tr/en + `x-default`, WebPage/BreadcrumbList/CreativeWork şeması, sitemap'e eklendi (tr/en). Mevcut girdiler çıkarılmadı.
- MK Pati/TraceOps mevcut ürün şablonunu kullanır (canonical, SoftwareApplication şeması); boş konu bölümü gizlendi.
- Sitemap: 131 URL → 131 + 26 (demolar) + 2 (yeni ürün hub'ları).
- Şehir sayfalarında İzmit (Kocaeli) ve Adapazarı (Sakarya) zaten başlık/açıklamada açıkça geçiyor; değişiklik gerekmedi.

## Build ve test
- `SITE_URL=http://localhost:3000 npm run build` başarılı; `tsc --noEmit` ve ESLint temiz.
- Playwright: **115 test geçti, 0 başarısız** (yeni `tests/demos.spec.ts` dahil).
- `portfolio.spec.ts` önceden başarısızdı: test geçerliydi; 7 projenin görsel alt metni 3 dilde (21 kayıt) ve 4 amiral gemisi projenin çevirileri eksikti. Testi değiştirmedik, eksik veriyi tamamladık. Çeviriler ana dili konuşan biri tarafından gözden geçirilmeli.

## Mobil kontrol
Production sunucuda 390 px ve 1280 px: `/tr/demolar`, `/en/demos`, demo ayrıntı sayfaları, `/tr/mk-pati`, `/tr/mk-traceops`, `/tr/mk-resepsiyon`, `/en/work` — hepsi 200, yatay taşma yok, bozuk görsel yok, tek H1.

## Yasal sayfalar
**Değiştirilmedi.** `legal/privacy` ve `legal/terms` (4 dil), footer, ortak layout ve navigasyon dosyalarına dokunulmadı; `main`'e göre diff'te yasal içerikli dosya yok.

## Yapılmayanlar
Eski URL yönlendirmesi eklenmedi, hiçbir sayfa veya dosya silinmedi, sitemap'ten URL çıkarılmadı, production deployment yapılmadı. `CLAUDE-TO-CODEX-HANDOFF.md` takipsiz kaldı, commit edilmedi.

## Bekleyen işler
1. Balıkesir, Karabük, Kırklareli şehir sayfaları (kaynaklı, özgün içerikle yazılmalı; kopya şablon üretilmeyecek).
2. Bolu/Osmaniye için otel, fotoğrafçı, kafe sektör bölümleri.
3. İngilizce karşılıklar: MK Pati, MK TraceOps, MK Resepsiyon, Mavi Kadrajla Öğreniyorum ve diğer ürün sayfaları yalnız Türkçe.
4. Footer/navigasyondan demo bölümüne bağlantı (yasal bağlantıları da içerdiği için ayrı değerlendirilecek).
5. Hedefler canlıda doğrulandıktan sonra MustafaÖner.net eski URL yönlendirmeleri (ayrı onay gerekir).

## Canlıya alma öncesi kontrol listesi
- [ ] Vercel ortamında `SITE_URL` production https değerine ayarlı (bu raporda değer yer almaz).
- [ ] Preview'da: demo ve ürün sayfaları 200, self-canonical, hreflang, sitemap'te, 390 px görünüm.
- [ ] en/de/fr çevirileri gözden geçirildi.
- [ ] Yasal URL'ler dağıtım öncesi/sonrası aynı kod döndürüyor.
- [ ] `main`'e merge ve production deployment için ayrı onay alındı.

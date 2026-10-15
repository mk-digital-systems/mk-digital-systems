# MK Digital Systems — Yeniden Yapılandırma ve SEO Teslimat Raporu

Tarih: 15 Ekim 2026  
Kapsam: Yalnızca `mk-digitalsystems.com` kurumsal web sitesi  
Yayın durumu: Production dağıtımı yapılmadı; kullanıcı onayı bekleniyor.

## 1. Uygulanan yapı

- Mevcut Next.js 16 App Router, React 18, TypeScript, Tailwind CSS ve `next-intl` altyapısı korundu.
- Ana sayfa Hero bileşeninin yerleşimi, görsel dili, animasyonları ve responsive davranışı değiştirilmedi.
- Footer'ın renk, sütun, tipografi ve responsive tasarımı korundu; yalnızca mevcut düzene Google Play geliştirici bağlantısı eklendi.
- Kurumsal vitrin yalnızca belirlenen 10 ürüne indirildi ve MK OPS ilk sıraya taşındı.
- 10 merkezi ürün sayfası ve 50 özgün Türkçe SEO açılış sayfası oluşturuldu.
- Ürün sayfaları için ortak, sürdürülebilir bileşen mimarisi kuruldu; 50 kopya bileşen üretilmedi.
- Breadcrumb, canonical, Open Graph, Twitter kartı, Organization, WebSite, SoftwareApplication/WebApplication ve FAQPage JSON-LD yapıları eklendi.
- Sitemap ürün merkezleri ve 50 SEO sayfasıyla güncellendi. Türkçe ürün sayfaları için `tr` ve `x-default` hreflang kullanıldı.
- Önceden hazırlanmış 18 şehir SEO sayfası, özgün içerikleri, route'ları ve sitemap kayıtlarıyla korundu; yalnızca eski proje referansları güncel ürün vitriniyle uyumlu hale getirildi.
- Google Play, ürün sitesi ve portföy CTA'ları güncellendi; doğrulanamayan veya 404 dönen MK OPS demo bağlantısı kaldırıldı.

## 2. Kurumsal vitrindeki ürünler

1. MK OPS
2. MK Adisyon
3. MK Farm
4. MK Resepsiyon
5. Aura Günlük
6. Mavi Kadraj ile Öğreniyorum
7. Bebeğimin İlk Yılı
8. Namehub
9. Mavi Kadraj
10. Kadraj Rotam

MK Adisyon mobil uygulama ve web paneli olarak ayrı yüzeylerle tanıtıldı. Bebeğimin İlk Yılı geliştirme aşamasında gösterildi ve indirme CTA'sı eklenmedi.

## 3. Portföy temizliği

Aktif kurumsal vitrinden çıkarılan eski çalışma grupları arasında Gönül Pusulası, Aria, Aira, Musty, Mavi Şarkılar, Mavi Kadraj Otel, Adalet Hukuk, Günlük İmalat, İş Takip, Mavi Danışmanlık, Mavi Gayrimenkul, Mavi Güzellik, Mavi İletişim, Mavi Kafe, Mavi Yapı, MK Kargo, MK Pati ve Şiir Dünyası bulunuyor. Bu ürünlere ait kartlar, detay verileri, iç bağlantılar ve sitemap kayıtları kaldırıldı.

Eski projelere veya eski MK OPS sunumuna ait olduğu doğrulanan toplam 33 kullanılmayan görsel silindi. Halen kullanılan 10 ürün görsellerine, kurumsal/marka varlıklarına ve ileride kullanılabilecek yeni MK OPS kaynak PNG'lerine dokunulmadı. Git tarafından takip edilen silinmiş dosyalar commit öncesinde geri alınabilir.

Eşdeğerliği doğrulanan eski URL'ler 301 ile taşındı:

| Eski URL | Yeni URL |
|---|---|
| `/tr/calismalar/santiye-yonetim` | `/tr/mk-ops` |
| `/tr/calismalar/proje-asama-takip` | `/tr/mk-ops/proje-yonetim-yazilimi` |
| `/tr/calismalar/onayli-proje-takip` | `/tr/mk-ops/proje-yonetim-yazilimi` |
| `/tr/work/santiye-yonetim` | `/tr/mk-ops` |
| `/tr/work/proje-asama-takip` | `/tr/mk-ops/proje-yonetim-yazilimi` |
| `/tr/work/onayli-proje-takip` | `/tr/mk-ops/proje-yonetim-yazilimi` |

Gerçek eşdeğeri olmayan kaldırılmış detay yolları ana sayfaya yönlendirilmedi; route bulunmadığı için standart 404 yanıtı verir. Ayrıca çalışma alanına şartnamedeki metinle `https://mustafaoner.net` portföy bağlantısı eklendi.

## 4. MK OPS ekran görselleri

`public/work/mk-ops` içindeki yedi gerçek ekran incelendi, özgün PNG dosyaları korundu ve performans için WebP türevleri üretildi:

| Görsel | Kullanım |
|---|---|
| `mk-ops1.webp` | Ana ürün vitrini / genel ürün görünümü |
| `mk-ops2.webp` | Ürün kimliği ve değer önerisi |
| `mk-ops3.webp` | Dashboard ve operasyon raporlama |
| `mk-ops4.webp` | Proje, ilerleme ve hakediş içeriği |
| `mk-ops5.webp` | Günlük iş planı ve saha yönetimi |
| `mk-ops6.webp` | Personel ve puantaj içeriği |
| `mk-ops7.webp` | Depo, malzeme ve ekipman içeriği |

Eski MK OPS görselleri (`mkops-management`, `santiye-dashboard`, `santiye-projects`, `santiye-projects-mobile`, `mkops.jpeg`, `ops-approvals`, `saha-santiye-phone`, `saha-santiye`) kaldırıldı.

## 5. Google Play ve dış bağlantılar

- MK Adisyon: `https://play.google.com/store/apps/details?id=com.mkdigitalsystems.adisyon`
- Aura Günlük: `https://play.google.com/store/apps/details?id=com.mkdigitalsystems.aura`
- Mavi Kadraj ile Öğreniyorum: `https://play.google.com/store/apps/details?id=com.mavikadaj.learn`
- Resmi geliştirici sayfası: `https://play.google.com/store/apps/developer?id=MK+DIGITAL+SYSTEMS`
- Tüm geçmiş portföy: `https://mustafaoner.net`
- MK OPS: `https://mk-ops.tr`

`https://mkops-demo.vercel.app` 404 döndürdüğü için “Demoyu İncele” CTA'sı kaldırıldı. Çalışan yeni bir demo adresi sağlanırsa yeniden eklenebilir.

## 6. SEO sayfaları

Title kalıbı her satırda gösterildiği gibidir. Canonical, tablodaki tam URL ile aynıdır. Tüm sayfalar tamamlandı ve sitemap'e eklendi.

### MK OPS — 15 sayfa

| URL / canonical | Hedef arama niyeti | Title | Durum |
|---|---|---|---|
| `https://www.mk-digitalsystems.com/tr/mk-ops/santiye-yonetim-programi` | Şantiye süreçlerini tek merkezde yönetmek | Şantiye Yönetim Programı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/puantaj-takip-programi` | Personelin aylık çalışma durumunu izlemek | Puantaj Takip Programı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/proje-yonetim-yazilimi` | Operasyon projelerini aşama ve ilerlemeyle takip etmek | Proje Yönetim Yazılımı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/personel-takip-programi` | Saha personelini ekip ve puantajla birlikte yönetmek | Personel Takip Programı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/malzeme-stok-takibi` | Depo ve saha stok hareketlerini izlemek | Malzeme ve Stok Takip Programı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/arac-yonetimi` | Saha araçlarını, belgelerini ve ekipmanlarını takip etmek | Araç Yönetim Programı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/gunluk-is-takibi` | Saha ekiplerinin günlük planını ve gerçekleşen işini izlemek | Günlük İş Takip Programı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/saha-yonetimi` | Saha ile ofis arasındaki operasyon bilgisini birleştirmek | Saha Yönetim Yazılımı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/insaat-proje-takibi` | İnşaat ve altyapı işlerini aşama bazında takip etmek | İnşaat Proje Takip Programı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/telekom-altyapi-yonetimi` | Fiber ve telekom saha projelerini yönetmek | Telekom Altyapı Proje Yönetimi \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/taseron-yonetimi` | Taşeron firma ve ekiplerinin iş kayıtlarını ayrıştırmak | Taşeron Yönetim Programı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/ekip-yonetimi` | Saha ekiplerini günlük işe ve kaynaklara bağlamak | Ekip Yönetim Programı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/hakedis-takibi` | Gerçekleşen iş miktarını dönem hakedişiyle ilişkilendirmek | Hakediş Takip Programı \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/depo-yonetimi` | Birden fazla depoda malzeme dağılımını yönetmek | Depo ve Malzeme Yönetimi \| MK OPS \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-ops/operasyon-raporlama` | Saha operasyonunun güncel durumunu raporlamak | Operasyon ve Raporlama Yazılımı \| MK OPS \| MK Digital Systems | Tamamlandı |

### MK Adisyon — 8 sayfa

| URL / canonical | Hedef arama niyeti | Title | Durum |
|---|---|---|---|
| `https://www.mk-digitalsystems.com/tr/mk-adisyon/restoran-adisyon-programi` | Restoran sipariş akışını uçtan uca yönetmek | Restoran Adisyon Programı \| MK Adisyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-adisyon/kafe-adisyon-sistemi` | Kafe masalarını ve hızlı sipariş akışını yönetmek | Kafe Adisyon Sistemi \| MK Adisyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-adisyon/garson-siparis-uygulamasi` | Garsonun masada sipariş girmesini kolaylaştırmak | Garson Sipariş Uygulaması \| MK Adisyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-adisyon/mutfak-siparis-ekrani` | Mutfağa gelen siparişleri sırayla görmek | Mutfak Sipariş Ekranı \| MK Adisyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-adisyon/restoran-kasa-sistemi` | Açık adisyonları ve tahsilatı kasadan yönetmek | Restoran Kasa Sistemi \| MK Adisyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-adisyon/masa-siparis-yonetimi` | Masaların sipariş ve hesap durumunu izlemek | Masa ve Sipariş Yönetimi \| MK Adisyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-adisyon/mobil-adisyon-uygulamasi` | Adisyon işlemlerini Android cihazdan yürütmek | Mobil Adisyon Uygulaması \| MK Adisyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-adisyon/web-restoran-yonetim-paneli` | Restoran operasyonunu geniş ekran web panelinden yönetmek | Web Restoran Yönetim Paneli \| MK Adisyon \| MK Digital Systems | Tamamlandı |

### MK Farm — 6 sayfa

| URL / canonical | Hedef arama niyeti | Title | Durum |
|---|---|---|---|
| `https://www.mk-digitalsystems.com/tr/mk-farm/ciftlik-yonetim-programi` | Hayvan ve çiftlik kayıtlarını tek sistemde toplamak | Çiftlik Yönetim Programı \| MK Farm \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-farm/tarim-isletmesi-yonetimi` | Birden fazla işletme ve rolü yönetmek | Tarım İşletmesi Yönetimi \| MK Farm \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-farm/tarimsal-uretim-takibi` | Süt ve hayvansal üretim kayıtlarını izlemek | Tarımsal Üretim Takibi \| MK Farm \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-farm/tarim-gider-takip-programi` | Çiftlik giderlerini operasyon kayıtlarıyla değerlendirmek | Tarım Gider Takip Programı \| MK Farm \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-farm/ciftlik-kayit-sistemi` | Defter kayıtlarını aranabilir dijital geçmişe taşımak | Çiftlik Kayıt Sistemi \| MK Farm \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-farm/tarimsal-operasyon-yonetimi` | Çiftlikte günlük saha işlerini kayıt ve rapora bağlamak | Tarımsal Operasyon Yönetimi \| MK Farm \| MK Digital Systems | Tamamlandı |

### MK Resepsiyon — 6 sayfa

| URL / canonical | Hedef arama niyeti | Title | Durum |
|---|---|---|---|
| `https://www.mk-digitalsystems.com/tr/mk-resepsiyon/pansiyon-yonetim-programi` | Küçük konaklama işletmesinde oda ve misafiri yönetmek | Pansiyon Yönetim Programı \| MK Resepsiyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-resepsiyon/butik-otel-yonetim-yazilimi` | Butik otelde oda, misafir ve kasa akışını birleştirmek | Butik Otel Yönetim Yazılımı \| MK Resepsiyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-resepsiyon/resepsiyon-takip-sistemi` | Resepsiyon masasındaki günlük işlemleri takip etmek | Resepsiyon Takip Sistemi \| MK Resepsiyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-resepsiyon/oda-doluluk-takip-programi` | Müsait, dolu ve işlemdeki odaları görmek | Oda Doluluk Takip Programı \| MK Resepsiyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-resepsiyon/misafir-giris-cikis-yonetimi` | Check-in ve check-out kayıtlarını düzenlemek | Misafir Giriş Çıkış Yönetimi \| MK Resepsiyon \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mk-resepsiyon/konaklama-isletmesi-yonetimi` | Resepsiyon, oda ve kasa süreçlerini birlikte yönetmek | Konaklama İşletmesi Yönetimi \| MK Resepsiyon \| MK Digital Systems | Tamamlandı |

### Aura Günlük — 5 sayfa

| URL / canonical | Hedef arama niyeti | Title | Durum |
|---|---|---|---|
| `https://www.mk-digitalsystems.com/tr/aura-gunluk/dijital-gunluk-uygulamasi` | Android'de kişisel günlük tutmak | Dijital Günlük Uygulaması \| Aura Günlük \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/aura-gunluk/kisisel-gunluk-tutma` | Düşünce ve anıları düzenli kaydetmek | Kişisel Günlük Tutma \| Aura Günlük \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/aura-gunluk/duygu-gunlugu` | Ruh hâlini günlük kayıtlarla izlemek | Duygu Günlüğü \| Aura Günlük \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/aura-gunluk/ozel-gunluk-uygulamasi` | Kişisel kayıtların paylaşımını kontrol etmek | Özel Günlük Uygulaması \| Aura Günlük \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/aura-gunluk/gunluk-yazma-aliskanligi` | Düzenli günlük yazma rutini oluşturmak | Günlük Yazma Alışkanlığı \| Aura Günlük \| MK Digital Systems | Tamamlandı |

### Diğer ürünler — 10 sayfa

| URL / canonical | Hedef arama niyeti | Title | Durum |
|---|---|---|---|
| `https://www.mk-digitalsystems.com/tr/mavi-kadraj-ile-ogreniyorum/uygulama-tanitimi` | Çocuklar için yayınlanan eğitim uygulamasını incelemek | Mavi Kadraj ile Öğreniyorum \| Mavi Kadraj ile Öğreniyorum \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mavi-kadraj-ile-ogreniyorum/mobil-egitim-ogrenme-uygulamasi` | Okul öncesi renk ve sayı öğrenimini mobilde desteklemek | Mobil Eğitim ve Öğrenme Uygulaması \| Mavi Kadraj ile Öğreniyorum \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/bebegimin-ilk-yili/uygulama-tanitimi` | Geliştirilmekte olan bebek hatıra uygulamasını tanımak | Bebeğimin İlk Yılı \| Bebeğimin İlk Yılı \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/bebegimin-ilk-yili/bebek-anilari-dijital-hatira` | Bebeğin ilklerini ve aile anılarını dijital olarak düzenlemek | Bebek Anıları ve Dijital Hatıra Uygulaması \| Bebeğimin İlk Yılı \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/namehub/platform-tanitimi` | Namehub isim keşif platformunu tanımak | Namehub Platformu \| Namehub \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/namehub/isim-anlamlari-isim-kesfi` | İsimlerin anlamını ve kullanım bağlamını araştırmak | İsim Anlamları ve İsim Keşfi \| Namehub \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mavi-kadraj/fotografcilik-platformu` | Mavi Kadraj'ın fotoğraf ve görsel anlatı dünyasını keşfetmek | Mavi Kadraj Fotoğrafçılık Platformu \| Mavi Kadraj \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/mavi-kadraj/doga-fotografciligi` | Doğa fotoğraflarını seçkiler ve hikâyelerle keşfetmek | Doğa Fotoğrafçılığı ve Görsel İçerikler \| Mavi Kadraj \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/kadraj-rotam/platform-tanitimi` | Fotoğraf odaklı rota keşif platformunu tanımak | Kadraj Rotam Platformu \| Kadraj Rotam \| MK Digital Systems | Tamamlandı |
| `https://www.mk-digitalsystems.com/tr/kadraj-rotam/fotografcilik-kesif-rotalari` | Fotoğraf çekimi için rota ve saha notu araştırmak | Fotoğrafçılık ve Keşif Rotaları \| Kadraj Rotam \| MK Digital Systems | Tamamlandı |

## 7. Doğrulanan ve sınırlandırılan özellikler

- MK OPS için proje/aşama, günlük plan/onay, personel, aylık puantaj, ekip, araç/ekipman ilişkisi, depo/stok, gerçekleşen iş, hakediş dönemi ve denetim günlüğü doğrulandı.
- GPS/canlı araç konumu, ayrı bir taşeron modülü, banka ödemesi, gelişmiş BI ve tam otomatik hakediş hesaplaması doğrulanmadığı için aktif özellik olarak vaat edilmedi.
- MK Adisyon için masa, sipariş, garson, mutfak, kasa, web paneli ve Android uygulaması doğrulandı. Fiziksel POS, yazıcı, reçete/maliyet ve kapsamlı stok entegrasyonu vaat edilmedi.
- MK Farm için hayvan, QR, kilo, süt, sağlık, ilaç, tohumlama, rol, çoklu çiftlik ve PWA kapsamı kullanıldı; tam ön muhasebe ve kapsamlı gider modülü vaat edilmedi.
- MK Resepsiyon için oda planı, misafir, tahsilat/kasa ve yönetici görünümü kullanıldı; kanal yöneticisi, resmi kimlik bildirimi ve geniş PMS entegrasyonları vaat edilmedi.
- Bebeğimin İlk Yılı özellikleri “planlanan/geliştirilmekte olan” olarak ayrıldı.

## 8. Eksik görseller ve kullanıcıdan beklenenler

- Mavi Kadraj ile Öğreniyorum için kurumsal repository'de özel ekran görüntüsü bulunmadığından sahte görsel üretilmedi.
- Bebeğimin İlk Yılı geliştirme aşamasında olduğundan doğrulanmış ürün ekranı kullanılmadı.
- Yeni, çalışan bir MK OPS demo adresi varsa paylaşılmalıdır; mevcut 404 adres kaldırılmıştır.
- Production yayınından önce `SITE_URL` değerinin tercih edilen kesin alan adına (`www` veya apex) göre son kez onaylanması önerilir. Mevcut yapı `https://www.mk-digitalsystems.com` kullanır.
- Production deploy için kullanıcı onayı beklenmektedir.

## 9. Test özeti

- TypeScript: başarılı.
- ESLint: başarılı.
- Next.js production build: başarılı; 141 statik sayfa üretildi.
- Ürün/SEO Playwright testleri: 60 ürün ve konu URL'si, tek H1, canonical ve schema kontrolleri başarılı.
- Ana sayfa, Hero ve ürün testleri: 15/15 başarılı.
- Footer/sosyal bağlantı testleri: 4/4 başarılı.
- Sitemap ve azaltılmış hareket kontrolleri: 2/2 başarılı.
- Şehir, çözüm, portföy, fiyat ve üretim hedef testleri: başarılı.
- Şehir sayfaları: içerik benzersizliği, doğruluk, yayın route'ları, canonical/schema ve sitemap kapsamı dahil 7/7 başarılı.
- Eski MK OPS eşdeğer URL'leri: 301 hedefleri doğrulandı; eşdeğeri olmayan örnek eski proje URL'si 404 verdi.
- Son bağlantı ve yönlendirme değişikliklerinden sonra lint, typecheck ve production build yeniden çalıştırıldı; tamamı başarılı.

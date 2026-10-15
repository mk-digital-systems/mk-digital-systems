import type { Locale } from "@/config/i18n";
import type { ProjectId } from "@/content/projects";

export type ProjectCopy = {
  name?: string;
  industry: string;
  summary: string;
  description?: string;
  headline?: string;
  problem?: string;
  solution?: string;
  modules?: string[];
  alt?: string;
  parts?: Record<string, { name: string; description: string }>;
};

export type ProjectCopyBook = Record<ProjectId, ProjectCopy>;

const tr: ProjectCopyBook = {
  "saha-santiye": {
    industry: "TELEKOM & SAHA OPERASYONLARI",
    summary: "Proje, ekip, personel, araç, depo, hakediş ve saha kayıtlarını aynı çalışma alanında birleştiren operasyon sistemi.",
    headline: "Sahadaki iş, ofiste aynı anda görünsün.",
    problem: "Günlük işler, ekipler, malzeme hareketleri ve hakediş kayıtları ayrı tablolara dağıldığında güncel durum geç görünür.",
    solution: "MK OPS; proje, ekip, personel, günlük plan, araç, depo ve hakediş kayıtlarını rol bazlı bir web panelinde bir araya getirir.",
    modules: ["Proje ve ekip yönetimi", "Personel ve puantaj", "Araç ve depo kayıtları", "Hakediş ve işlem geçmişi"],
    alt: "MK OPS panelinde örnek verilerle operasyon genel bakış ekranı",
  },
  "mk-adisyon": {
    industry: "RESTORAN & KAFE",
    summary: "Garson, mutfak ve kasa için mobil uygulama ile işletme yönetimi için web panelini birleştiren adisyon ürünü.",
    headline: "İlk siparişten hesabın kapanışına.",
    problem: "Garson, mutfak ve kasa aynı siparişin hangi aşamada olduğunu görebilmelidir.",
    solution: "MK Adisyon, mobil sipariş akışını mutfak ve kasa ekranlarıyla; işletme operasyonunu web yönetim paneliyle birleştirir.",
    modules: ["Garson", "Mutfak", "Kasa", "Web yönetim paneli", "Android uygulama"],
    alt: "MK Adisyon web yönetim panelinde örnek verilerle kasa ekranı",
    parts: {
      web: { name: "Web yönetim paneli", description: "İşletme, kasa ve operasyon yönetimi." },
      mobile: { name: "Mobil uygulama", description: "Garson, mutfak ve kasa akışları için Google Play uygulaması." },
    },
  },
  "mk-farm": {
    industry: "TARIM & HAYVANCILIK",
    summary: "Çiftlik kayıtlarını, hayvan geçmişini ve günlük tarımsal operasyonları bir araya getiren yönetim ürünü.",
    headline: "Çiftlik kayıtları tek yerde.",
    problem: "Bireysel hayvan kayıtları ve günlük işler farklı yerlerde tutulduğunda izlenebilirlik zorlaşır.",
    solution: "MK Farm, çiftlik kayıtlarını ve doğrulanmış operasyon bilgilerini sade bir yönetim akışında toplar.",
    modules: ["Çiftlik kayıtları", "Hayvan geçmişi", "Günlük operasyonlar"],
    alt: "MK Farm uygulamasının genel bakış ekranı",
  },
  "mk-resepsiyon": {
    industry: "KONAKLAMA",
    summary: "Otel ve pansiyonlarda oda planı, misafir giriş çıkışı ve resepsiyon işlemlerini bağlayan yönetim ürünü.",
    headline: "Resepsiyonda daha sakin bir gün.",
    problem: "Oda durumu, misafir kaydı ve tahsilat aynı operasyonun parçalarıdır.",
    solution: "MK Resepsiyon, doğrulanan oda ve misafir işlemlerini tek yönetim panelinde görünür kılar.",
    modules: ["Oda planı", "Misafir giriş çıkışı", "Resepsiyon paneli"],
    alt: "MK Resepsiyon panelinde örnek verilerle genel bakış ekranı",
  },
  aura: { industry: "MOBİL UYGULAMA", summary: "Kişisel günlük, anı ve duygu kayıtlarını bir araya getiren Android uygulaması.", alt: "Aura Günlük uygulamasında bugün, duygu ve takvim ekranları" },
  "mavi-kadraj-ile-ogreniyorum": { industry: "MOBİL EĞİTİM", summary: "Çocukların renkleri ve sayıları sade görsellerle öğrenmesine yardımcı olan Android uygulaması." },
  "bebegimin-ilk-yili": { industry: "DİJİTAL HATIRA", summary: "Bebek anılarını ve ilkleri bir zaman tünelinde toplamayı amaçlayan, geliştirme aşamasındaki uygulama." },
  namehub: { industry: "İSİM KEŞİF PLATFORMU", summary: "İsim anlamları ve farklı kullanım alanları için isim keşfi sunan kapsamlı web platformu.", alt: "Namehub ana sayfası" },
  "mavi-kadraj-arsiv": { industry: "FOTOĞRAF PLATFORMU", summary: "Doğa ve gezi fotoğraflarını konu ve kategori odaklı sunan görsel içerik platformu.", alt: "Mavi Kadraj fotoğraf platformunun ana sayfası" },
  "kadraj-rotam": { industry: "FOTOĞRAF ROTALARI", summary: "Fotoğraf rotaları, saha notları ve keşif rehberleri sunan web platformu.", alt: "Kadraj Rotam ana sayfası" },
};

const translations: Record<Exclude<Locale, "tr">, Record<ProjectId, Pick<ProjectCopy, "industry" | "summary">>> = {
  en: {
    "saha-santiye": { industry: "FIELD OPERATIONS", summary: "An operations system bringing project, team, staff, vehicle, warehouse and progress-payment records together." },
    "mk-adisyon": { industry: "RESTAURANT & CAFE", summary: "An order product combining a mobile app for waiter, kitchen and cashier flows with a web management panel." },
    "mk-farm": { industry: "AGRICULTURE", summary: "A management product for farm records, animal history and daily agricultural operations." },
    "mk-resepsiyon": { industry: "HOSPITALITY", summary: "A management product connecting room status, guest check-in and reception operations." },
    aura: { industry: "MOBILE APP", summary: "An Android app for personal journal, memory and mood entries." },
    "mavi-kadraj-ile-ogreniyorum": { industry: "MOBILE LEARNING", summary: "An Android app helping children learn colors and numbers through simple visuals." },
    "bebegimin-ilk-yili": { industry: "DIGITAL KEEPSAKES", summary: "An app in development for collecting a baby's memories and firsts in a timeline." },
    namehub: { industry: "NAME DISCOVERY", summary: "A broad web platform for name meanings and discovery across different uses." },
    "mavi-kadraj-arsiv": { industry: "PHOTOGRAPHY PLATFORM", summary: "A visual platform presenting nature and travel photography by topic and category." },
    "kadraj-rotam": { industry: "PHOTO ROUTES", summary: "A web platform for photography routes, field notes and discovery guides." },
  },
  de: {
    "saha-santiye": { industry: "AUSSENDIENST", summary: "Ein Betriebssystem für Projekt-, Team-, Personal-, Fahrzeug-, Lager- und Abschlagsdaten." },
    "mk-adisyon": { industry: "RESTAURANT & CAFE", summary: "Ein Bestellprodukt mit mobiler App für Service, Küche und Kasse sowie Web-Verwaltung." },
    "mk-farm": { industry: "LANDWIRTSCHAFT", summary: "Ein Verwaltungsprodukt für Betriebsdaten, Tierhistorie und tägliche Abläufe." },
    "mk-resepsiyon": { industry: "BEHERBERGUNG", summary: "Ein Produkt für Zimmerstatus, Gästedaten und Rezeption." },
    aura: { industry: "MOBILE APP", summary: "Eine Android-App für Tagebuch-, Erinnerungs- und Stimmungseinträge." },
    "mavi-kadraj-ile-ogreniyorum": { industry: "MOBILES LERNEN", summary: "Eine Android-App, mit der Kinder Farben und Zahlen anhand einfacher Bilder lernen." },
    "bebegimin-ilk-yili": { industry: "DIGITALE ERINNERUNGEN", summary: "Eine App in Entwicklung für Erinnerungen und erste Momente eines Babys." },
    namehub: { industry: "NAMENSENTDECKUNG", summary: "Eine Webplattform für Namensbedeutungen und die Suche nach Namen." },
    "mavi-kadraj-arsiv": { industry: "FOTOPLATTFORM", summary: "Eine visuelle Plattform für Natur- und Reisefotografie nach Themen und Kategorien." },
    "kadraj-rotam": { industry: "FOTOROUTEN", summary: "Eine Webplattform für Fotorouten, Feldnotizen und Entdeckungsführer." },
  },
  fr: {
    "saha-santiye": { industry: "OPÉRATIONS TERRAIN", summary: "Un système réunissant projets, équipes, personnel, véhicules, dépôt et situations de travaux." },
    "mk-adisyon": { industry: "RESTAURANT & CAFE", summary: "Un produit de commande associant une application mobile et un panneau de gestion web." },
    "mk-farm": { industry: "AGRICULTURE", summary: "Un produit de gestion pour les registres agricoles et les opérations quotidiennes." },
    "mk-resepsiyon": { industry: "HÉBERGEMENT", summary: "Un produit reliant l'état des chambres, les clients et les opérations de réception." },
    aura: { industry: "APPLICATION MOBILE", summary: "Une application Android pour le journal personnel, les souvenirs et les émotions." },
    "mavi-kadraj-ile-ogreniyorum": { industry: "APPRENTISSAGE MOBILE", summary: "Une application Android aidant les enfants à apprendre couleurs et nombres." },
    "bebegimin-ilk-yili": { industry: "SOUVENIRS NUMÉRIQUES", summary: "Une application en développement pour les souvenirs et premières fois d'un bébé." },
    namehub: { industry: "DÉCOUVERTE DE PRÉNOMS", summary: "Une plateforme web pour la signification et la découverte de noms." },
    "mavi-kadraj-arsiv": { industry: "PLATEFORME PHOTO", summary: "Une plateforme visuelle de photographie de nature et de voyage." },
    "kadraj-rotam": { industry: "ITINÉRAIRES PHOTO", summary: "Une plateforme web pour itinéraires photo, notes de terrain et guides." },
  },
};

const books: Record<Locale, ProjectCopyBook> = {
  tr,
  en: translations.en,
  de: translations.de,
  fr: translations.fr,
};

export function getProjectCopy(locale: Locale, id: ProjectId): ProjectCopy {
  return books[locale][id];
}

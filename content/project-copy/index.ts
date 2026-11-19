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
    alt: "MK Adisyon Android uygulamasında masa durumları ekranı",
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
  "bebegimin-ilk-yili": { industry: "DİJİTAL HATIRA", summary: "Bebek anılarını, ilkleri, fotoğraf ve videoları bir zaman tünelinde bir araya getiren Android uygulaması.", alt: "Bebeğimin İlk Yılı Android uygulamasının ana ekranı" },
  namehub: { industry: "İSİM KEŞİF PLATFORMU", summary: "İsim anlamları ve farklı kullanım alanları için isim keşfi sunan kapsamlı web platformu.", alt: "Namehub ana sayfası" },
  "mavi-kadraj-arsiv": { industry: "FOTOĞRAF PLATFORMU", summary: "Doğa ve gezi fotoğraflarını konu ve kategori odaklı sunan görsel içerik platformu.", alt: "Mavi Kadraj fotoğraf platformunun ana sayfası" },
  "kadraj-rotam": { industry: "FOTOĞRAF ROTALARI", summary: "Fotoğraf rotaları, saha notları ve keşif rehberleri sunan web platformu.", alt: "Kadraj Rotam ana sayfası" },
};

const translations: Record<Exclude<Locale, "tr">, Record<ProjectId, ProjectCopy>> = {
  en: {
    "saha-santiye": { industry: "FIELD OPERATIONS", summary: "An operations system bringing project, team, staff, vehicle, warehouse and progress-payment records together.", alt: "MK OPS dashboard with sample data showing the operations overview", headline: "Field work, visible in the office as it happens.", problem: "When daily jobs, crews, material movements and progress-payment records are scattered across separate sheets, the current status shows up late.", solution: "MK OPS brings projects, crews, staff, daily plans, vehicles, warehouse and progress-payment records together in one role-based web panel.", modules: ["Project and crew management","Staff and timesheets","Vehicle and warehouse records","Progress payments and audit history"] },
    "mk-adisyon": { industry: "RESTAURANT & CAFE", summary: "An order product combining a mobile app for waiter, kitchen and cashier flows with a web management panel.", alt: "Table status screen in the MK Adisyon Android application", headline: "From the first order to closing the bill.", problem: "Waiter, kitchen and cashier must all see which stage the same order is in.", solution: "MK Adisyon joins the mobile order flow with kitchen and cashier screens, and business operations with a web management panel.", modules: ["Waiter","Kitchen","Cashier","Web management panel","Android app"], parts: {"web":{"name":"Web management panel","description":"Business, cashier and operations management."},"mobile":{"name":"Mobile app","description":"Google Play app for waiter, kitchen and cashier flows."}} },
    "mk-farm": { industry: "AGRICULTURE", summary: "A management product for farm records, animal history and daily agricultural operations.", alt: "Overview screen of the MK Farm app", headline: "Farm records in one place.", problem: "When individual animal records and daily jobs are kept in different places, traceability suffers.", solution: "MK Farm gathers farm records and verified operational information in a simple management flow.", modules: ["Farm records","Animal history","Daily operations"] },
    "mk-resepsiyon": { industry: "HOSPITALITY", summary: "A management product connecting room status, guest check-in and reception operations.", alt: "MK Resepsiyon panel overview screen with sample data", headline: "A calmer day at reception.", problem: "Room status, guest records and payments are parts of the same operation.", solution: "MK Resepsiyon makes verified room and guest operations visible in a single management panel.", modules: ["Room plan","Guest check-in and check-out","Reception panel"] },
    aura: { industry: "MOBILE APP", summary: "An Android app for personal journal, memory and mood entries.", alt: "Aura Journal app showing today, mood and calendar screens" },
    "mavi-kadraj-ile-ogreniyorum": { industry: "MOBILE LEARNING", summary: "An Android app helping children learn colors and numbers through simple visuals." },
    "bebegimin-ilk-yili": { industry: "DIGITAL KEEPSAKES", summary: "An Android app that brings a baby's memories, firsts, photos and videos together in a timeline.", alt: "Home screen of the Bebeğimin İlk Yılı Android application" },
    namehub: { industry: "NAME DISCOVERY", summary: "A broad web platform for name meanings and discovery across different uses.", alt: "Namehub home page" },
    "mavi-kadraj-arsiv": { industry: "PHOTOGRAPHY PLATFORM", summary: "A visual platform presenting nature and travel photography by topic and category.", alt: "Home page of the Mavi Kadraj photography platform" },
    "kadraj-rotam": { industry: "PHOTO ROUTES", summary: "A web platform for photography routes, field notes and discovery guides.", alt: "Kadraj Rotam home page" },
  },
  de: {
    "saha-santiye": { industry: "AUSSENDIENST", summary: "Ein Betriebssystem für Projekt-, Team-, Personal-, Fahrzeug-, Lager- und Abschlagsdaten.", alt: "MK OPS-Dashboard mit Beispieldaten: Übersicht der Operationen", headline: "Die Arbeit im Feld – im Büro sofort sichtbar.", problem: "Wenn Tagesaufgaben, Teams, Materialbewegungen und Abschlagsdaten auf getrennte Tabellen verteilt sind, wird der aktuelle Stand zu spät sichtbar.", solution: "MK OPS führt Projekte, Teams, Personal, Tagesplanung, Fahrzeuge, Lager und Abschlagsdaten in einem rollenbasierten Web-Panel zusammen.", modules: ["Projekt- und Teamverwaltung","Personal und Zeiterfassung","Fahrzeug- und Lagerdaten","Abschläge und Änderungsprotokoll"] },
    "mk-adisyon": { industry: "RESTAURANT & CAFE", summary: "Ein Bestellprodukt mit mobiler App für Service, Küche und Kasse sowie Web-Verwaltung.", alt: "Tischstatusansicht in der Android-App MK Adisyon", headline: "Von der ersten Bestellung bis zur Abrechnung.", problem: "Service, Küche und Kasse müssen sehen können, in welcher Phase sich dieselbe Bestellung befindet.", solution: "MK Adisyon verbindet den mobilen Bestellablauf mit Küchen- und Kassenbildschirmen und den Betrieb mit einem Web-Verwaltungspanel.", modules: ["Service","Küche","Kasse","Web-Verwaltungspanel","Android-App"], parts: {"web":{"name":"Web-Verwaltungspanel","description":"Betriebs-, Kassen- und Ablaufverwaltung."},"mobile":{"name":"Mobile App","description":"Google-Play-App für Service-, Küchen- und Kassenabläufe."}} },
    "mk-farm": { industry: "LANDWIRTSCHAFT", summary: "Ein Verwaltungsprodukt für Betriebsdaten, Tierhistorie und tägliche Abläufe.", alt: "Übersichtsbildschirm der MK Farm App", headline: "Alle Hofdaten an einem Ort.", problem: "Werden Einzeltierdaten und tägliche Arbeiten an verschiedenen Orten geführt, leidet die Nachvollziehbarkeit.", solution: "MK Farm bündelt Hofdaten und geprüfte Betriebsinformationen in einem schlichten Verwaltungsablauf.", modules: ["Hofdaten","Tierhistorie","Tägliche Abläufe"] },
    "mk-resepsiyon": { industry: "BEHERBERGUNG", summary: "Ein Produkt für Zimmerstatus, Gästedaten und Rezeption.", alt: "Übersichtsbildschirm des MK Resepsiyon-Panels mit Beispieldaten", headline: "Ein ruhigerer Tag an der Rezeption.", problem: "Zimmerstatus, Gästedaten und Zahlung sind Teile desselben Betriebs.", solution: "MK Resepsiyon macht geprüfte Zimmer- und Gästevorgänge in einem Verwaltungspanel sichtbar.", modules: ["Zimmerplan","Gäste-An- und -Abreise","Rezeptionspanel"] },
    aura: { industry: "MOBILE APP", summary: "Eine Android-App für Tagebuch-, Erinnerungs- und Stimmungseinträge.", alt: "Aura Tagebuch App mit Heute-, Stimmungs- und Kalenderansicht" },
    "mavi-kadraj-ile-ogreniyorum": { industry: "MOBILES LERNEN", summary: "Eine Android-App, mit der Kinder Farben und Zahlen anhand einfacher Bilder lernen." },
    "bebegimin-ilk-yili": { industry: "DIGITALE ERINNERUNGEN", summary: "Eine Android-App, die Erinnerungen, erste Momente, Fotos und Videos eines Babys in einer Zeitleiste vereint.", alt: "Startbildschirm der Android-App Bebeğimin İlk Yılı" },
    namehub: { industry: "NAMENSENTDECKUNG", summary: "Eine Webplattform für Namensbedeutungen und die Suche nach Namen.", alt: "Startseite von Namehub" },
    "mavi-kadraj-arsiv": { industry: "FOTOPLATTFORM", summary: "Eine visuelle Plattform für Natur- und Reisefotografie nach Themen und Kategorien.", alt: "Startseite der Fotoplattform Mavi Kadraj" },
    "kadraj-rotam": { industry: "FOTOROUTEN", summary: "Eine Webplattform für Fotorouten, Feldnotizen und Entdeckungsführer.", alt: "Startseite von Kadraj Rotam" },
  },
  fr: {
    "saha-santiye": { industry: "OPÉRATIONS TERRAIN", summary: "Un système réunissant projets, équipes, personnel, véhicules, dépôt et situations de travaux.", alt: "Tableau de bord MK OPS avec données d'exemple : vue d'ensemble des opérations", headline: "Le travail sur le terrain, visible au bureau en temps réel.", problem: "Quand les tâches du jour, les équipes, les mouvements de matériaux et les situations de travaux sont dispersés dans des tableaux séparés, l’état actuel apparaît trop tard.", solution: "MK OPS réunit projets, équipes, personnel, plan du jour, véhicules, dépôt et situations de travaux dans un panneau web par rôles.", modules: ["Gestion des projets et des équipes","Personnel et pointage","Registres véhicules et dépôt","Situations de travaux et historique"] },
    "mk-adisyon": { industry: "RESTAURANT & CAFE", summary: "Un produit de commande associant une application mobile et un panneau de gestion web.", alt: "Écran d’état des tables dans l’application Android MK Adisyon", headline: "De la première commande à l’encaissement.", problem: "Le service, la cuisine et la caisse doivent voir à quelle étape se trouve la même commande.", solution: "MK Adisyon relie le flux de commande mobile aux écrans cuisine et caisse, et l’exploitation à un panneau de gestion web.", modules: ["Service","Cuisine","Caisse","Panneau de gestion web","Application Android"], parts: {"web":{"name":"Panneau de gestion web","description":"Gestion de l’établissement, de la caisse et de l’exploitation."},"mobile":{"name":"Application mobile","description":"Application Google Play pour les flux service, cuisine et caisse."}} },
    "mk-farm": { industry: "AGRICULTURE", summary: "Un produit de gestion pour les registres agricoles et les opérations quotidiennes.", alt: "Écran de vue d'ensemble de l'application MK Farm", headline: "Les registres de la ferme au même endroit.", problem: "Lorsque les fiches individuelles des animaux et les tâches du jour sont tenues à des endroits différents, la traçabilité en souffre.", solution: "MK Farm réunit les registres de la ferme et les informations d’exploitation vérifiées dans un flux de gestion simple.", modules: ["Registres de la ferme","Historique des animaux","Opérations quotidiennes"] },
    "mk-resepsiyon": { industry: "HÉBERGEMENT", summary: "Un produit reliant l'état des chambres, les clients et les opérations de réception.", alt: "Écran de vue d'ensemble du panneau MK Resepsiyon avec données d'exemple", headline: "Une journée plus sereine à la réception.", problem: "L’état des chambres, la fiche client et l’encaissement font partie de la même exploitation.", solution: "MK Resepsiyon rend visibles dans un seul panneau de gestion les opérations vérifiées de chambres et de clients.", modules: ["Plan des chambres","Arrivées et départs des clients","Panneau de réception"] },
    aura: { industry: "APPLICATION MOBILE", summary: "Une application Android pour le journal personnel, les souvenirs et les émotions.", alt: "Application Aura Journal : écrans aujourd'hui, humeur et calendrier" },
    "mavi-kadraj-ile-ogreniyorum": { industry: "APPRENTISSAGE MOBILE", summary: "Une application Android aidant les enfants à apprendre couleurs et nombres." },
    "bebegimin-ilk-yili": { industry: "SOUVENIRS NUMÉRIQUES", summary: "Une application Android qui réunit les souvenirs, premières fois, photos et vidéos d'un bébé dans une chronologie.", alt: "Écran d’accueil de l’application Android Bebeğimin İlk Yılı" },
    namehub: { industry: "DÉCOUVERTE DE PRÉNOMS", summary: "Une plateforme web pour la signification et la découverte de noms.", alt: "Page d'accueil de Namehub" },
    "mavi-kadraj-arsiv": { industry: "PLATEFORME PHOTO", summary: "Une plateforme visuelle de photographie de nature et de voyage.", alt: "Page d'accueil de la plateforme photo Mavi Kadraj" },
    "kadraj-rotam": { industry: "ITINÉRAIRES PHOTO", summary: "Une plateforme web pour itinéraires photo, notes de terrain et guides.", alt: "Page d'accueil de Kadraj Rotam" },
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

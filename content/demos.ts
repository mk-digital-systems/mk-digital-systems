/**
 * Demo and concept works (MK Digital Systems). Source: former MustafaÖner.net portfolio entries.
 * "demo": concept/portfolio website, never a customer reference.
 * "project": own content project (not a client job).
 * Turkish and English copy only; /de and /fr do not exist for this section.
 */
export type DemoKind = "demo" | "project";
export type DemoCopy = { title: string; subtitle: string; summary: string; description: string; features: string[] };
export type Demo = {
  slug: string;
  kind: DemoKind;
  liveUrl: string;
  image: { src: string; width: number; height: number } | null;
  tags: string[];
  tr: DemoCopy;
  en: DemoCopy;
};

export const demos: Demo[] = [
  {
    "slug": "musty-music",
    "kind": "demo",
    "liveUrl": "https://mk-music3.vercel.app/?lang=tr",
    "image": {
      "src": "/demos/musty-music.webp",
      "width": 1080,
      "height": 1984
    },
    "tags": [
      "Next.js",
      "UI Design",
      "Music",
      "Animation"
    ],
    "tr": {
      "title": "Musty Music",
      "subtitle": "",
      "summary": "Sanatçı portföyü ve müzik odaklı modern arayüz demosu.",
      "description": "Musty Music; müzik sanatçıları için tasarlanmış, portföy ve tanıtım amaçlı modern bir web sitesi demosudur. Minimalist tipografi, animasyonlu geçişler ve müzik odaklı içerik mimarisi öne çıkar.",
      "features": [
        "Sanatçı profil ve biyografi alanı",
        "Müzik ve albüm showcase",
        "Animasyonlu sayfa geçişleri",
        "Çoklu dil desteği (TR/EN)",
        "Mobil öncelikli tasarım",
        "Sosyal medya entegrasyonu"
      ]
    },
    "en": {
      "title": "Musty Music",
      "subtitle": "",
      "summary": "Modern artist portfolio and music-focused UI demo project.",
      "description": "Musty Music is a modern website demo designed for music artists for portfolio and promotion purposes. Minimalist typography, animated transitions and music-focused content architecture stand out.",
      "features": [
        "Artist profile and biography section",
        "Music and album showcase",
        "Animated page transitions",
        "Multi-language support (TR/EN)",
        "Mobile-first design",
        "Social media integration"
      ]
    }
  },
  {
    "slug": "mavi-iletisim",
    "kind": "demo",
    "liveUrl": "https://mavi-iletisim-demo.vercel.app/",
    "image": {
      "src": "/demos/mavi-iletisim.webp",
      "width": 1080,
      "height": 2010
    },
    "tags": [
      "Next.js",
      "Corporate",
      "Telecom",
      "UI Design"
    ],
    "tr": {
      "title": "Mavi İletişim",
      "subtitle": "",
      "summary": "Telekom ve teknik servis işletmeleri için kurumsal web sitesi demo projesi.",
      "description": "Mavi İletişim; telekom altyapısı ve teknik servis hizmetleri sunan işletmeler için tasarlanmış kurumsal bir web sitesi demosudur. Hizmet kategorileri, ürün alanları ve net iletişim yollarını yapılandırılmış bir düzende sunar.",
      "features": [
        "Kurumsal hizmet sayfaları",
        "Ürün ve hizmet kategorileri",
        "Ekip ve referans bölümü",
        "İletişim formu ve yönlendirme",
        "SEO uyumlu sayfa yapısı",
        "Hızlı yükleme ve performans"
      ]
    },
    "en": {
      "title": "Mavi İletişim",
      "subtitle": "",
      "summary": "Corporate website demo for telecom and technical service businesses.",
      "description": "Mavi İletişim is a corporate website demo designed for businesses offering telecom infrastructure and technical service. Service categories, product areas and clear contact paths are presented in a structured layout.",
      "features": [
        "Corporate service pages",
        "Product and service categories",
        "Team and references section",
        "Contact form and routing",
        "SEO-compatible page structure",
        "Fast loading and performance"
      ]
    }
  },
  {
    "slug": "hukuk-burosu",
    "kind": "demo",
    "liveUrl": "https://hukuk-demo.vercel.app/",
    "image": {
      "src": "/demos/hukuk-burosu.webp",
      "width": 1080,
      "height": 1911
    },
    "tags": [
      "Next.js",
      "Corporate",
      "Legal",
      "Professional"
    ],
    "tr": {
      "title": "Hukuk Bürosu",
      "subtitle": "",
      "summary": "Hukuk büroları için profesyonel kurumsal web sitesi demo projesi.",
      "description": "Hukuk Bürosu demo sitesi; avukatlık büroları ve hukuk firmalarının dijital varlıklarını profesyonel bir şekilde sergilemek için tasarlanmıştır. Hizmet alanları, avukat profilleri ve makaleler bölümü net bir hiyerarşiyle sunulur.",
      "features": [
        "Hukuk hizmetleri sayfaları",
        "Avukat ve ekip profilleri",
        "Hukuki makaleler ve blog",
        "Güven odaklı tipografi ve renk paleti",
        "Randevu talebi formu",
        "Mobil uyumlu profesyonel tasarım"
      ]
    },
    "en": {
      "title": "Law Firm",
      "subtitle": "",
      "summary": "Professional corporate website demo for law firms and attorneys.",
      "description": "The Law Firm demo site is designed to professionally showcase the digital presence of law firms and legal practices. Service areas, attorney profiles and articles section are presented with a clear hierarchy.",
      "features": [
        "Legal service pages",
        "Attorney and team profiles",
        "Legal articles and blog",
        "Trust-focused typography and color palette",
        "Appointment request form",
        "Mobile-responsive professional design"
      ]
    }
  },
  {
    "slug": "mavi-danismanlik",
    "kind": "demo",
    "liveUrl": "https://danismanlik-demo.vercel.app/",
    "image": {
      "src": "/demos/mavi-danismanlik.webp",
      "width": 1080,
      "height": 1988
    },
    "tags": [
      "Next.js",
      "Corporate",
      "Consulting",
      "UI Design"
    ],
    "tr": {
      "title": "Mavi Danışmanlık",
      "subtitle": "",
      "summary": "Danışmanlık ve koçluk hizmetleri için modern kurumsal web sitesi demo projesi.",
      "description": "Mavi Danışmanlık; bireysel ve kurumsal danışmanlık, koçluk ve gelişim hizmetleri sunan firmalar için tasarlanmış modern bir web sitesi demosudur. Güçlü CTA yapısı, hizmet tanıtımı ve randevu sistemi öne çıkar.",
      "features": [
        "Hizmet ve program tanıtım sayfaları",
        "Güçlü CTA bölümleri",
        "WhatsApp ve online randevu entegrasyonu",
        "Başarı hikâyeleri ve referanslar",
        "Sade ve profesyonel tipografi",
        "Hızlı iletişim yönlendirmeleri"
      ]
    },
    "en": {
      "title": "Mavi Danışmanlık",
      "subtitle": "",
      "summary": "Modern corporate website demo for consulting and coaching services.",
      "description": "Mavi Danışmanlık is a modern website demo designed for firms offering individual and corporate consulting, coaching and development services. Strong CTA structure, service presentation and appointment system stand out.",
      "features": [
        "Service and program presentation pages",
        "Strong CTA sections",
        "WhatsApp and online appointment integration",
        "Success stories and references",
        "Clean and professional typography",
        "Quick contact routing"
      ]
    }
  },
  {
    "slug": "guzellik-salonu",
    "kind": "demo",
    "liveUrl": "https://guzellik-salonu-demo-web.vercel.app/",
    "image": {
      "src": "/demos/guzellik-salonu.webp",
      "width": 1080,
      "height": 2006
    },
    "tags": [
      "Next.js",
      "Corporate",
      "Beauty",
      "Booking"
    ],
    "tr": {
      "title": "Güzellik Salonu",
      "subtitle": "",
      "summary": "Güzellik ve bakım salonları için kurumsal web sitesi ve online randevu demo projesi.",
      "description": "Güzellik Salonu demo sitesi; kuaför, güzellik merkezi ve bakım salonlarının müşterilerine profesyonel bir dijital deneyim sunmaları için hazırlanmıştır. Hizmet kataloğu, online randevu ve görsel galeri öne çıkar.",
      "features": [
        "Hizmet ve fiyat kataloğu",
        "Online randevu sistemi",
        "Fotoğraf galerisi ve portföy",
        "WhatsApp hızlı iletişim",
        "Kurumsal kimlik ve renk uyumu",
        "Mobil öncelikli tasarım"
      ]
    },
    "en": {
      "title": "Beauty Salon",
      "subtitle": "",
      "summary": "Corporate website and online booking demo for beauty and care salons.",
      "description": "The Beauty Salon demo site is prepared to provide a professional digital experience for hairdressers, beauty centers and care salons. Service catalog, online appointment and visual gallery stand out.",
      "features": [
        "Service and price catalog",
        "Online booking system",
        "Photo gallery and portfolio",
        "WhatsApp quick contact",
        "Corporate identity and color harmony",
        "Mobile-first design"
      ]
    }
  },
  {
    "slug": "mavi-sarkilar",
    "kind": "demo",
    "liveUrl": "https://spotify-demo-hazel.vercel.app/",
    "image": {
      "src": "/demos/mavi-sarkilar.webp",
      "width": 1080,
      "height": 1988
    },
    "tags": [
      "Next.js",
      "UI Design",
      "Music Platform",
      "Dark Mode"
    ],
    "tr": {
      "title": "Mavi Şarkılar",
      "subtitle": "",
      "summary": "Müzik akışı platformu için modern ve animasyonlu arayüz demo projesi.",
      "description": "Mavi Şarkılar; modern müzik akışı platformlarından ilham alınarak tasarlanmış bir arayüz demosudur. Çalma listesi yönetimi, sanatçı profilleri ve karanlık mod özellikli bir kullanıcı deneyimi sunar.",
      "features": [
        "Müzik akışı ve çalma listesi arayüzü",
        "Sanatçı ve albüm profil sayfaları",
        "Karanlık mod tasarımı",
        "Animasyonlu geçişler ve mikro etkileşimler",
        "Arama ve keşif arayüzü",
        "Mobil uyumlu tam ekran deneyim"
      ]
    },
    "en": {
      "title": "Mavi Şarkılar",
      "subtitle": "",
      "summary": "Modern and animated UI demo project for a music streaming platform.",
      "description": "Mavi Şarkılar is a UI demo inspired by modern music streaming platforms. It offers a user experience with playlist management, artist profiles and dark mode.",
      "features": [
        "Music streaming and playlist UI",
        "Artist and album profile pages",
        "Dark mode design",
        "Animated transitions and micro-interactions",
        "Search and discovery UI",
        "Mobile-responsive full-screen experience"
      ]
    }
  },
  {
    "slug": "aria",
    "kind": "demo",
    "liveUrl": "https://aria-demo-omega.vercel.app/",
    "image": {
      "src": "/demos/aria.webp",
      "width": 1076,
      "height": 2048
    },
    "tags": [
      "Next.js",
      "Social Media",
      "UI Design",
      "Feed"
    ],
    "tr": {
      "title": "ARIA",
      "subtitle": "",
      "summary": "Sosyal medya platformu için kullanıcı akışı ve arayüz tasarım demo projesi.",
      "description": "ARIA; sosyal medya platformları için tasarlanmış kapsamlı bir arayüz demosudur. Gönderi akışı, kullanıcı profilleri, içerik keşfi ve etkileşim sistemleri gerçekçi bir deneyimle sunar.",
      "features": [
        "Gönderi ve içerik akışı",
        "Kullanıcı profil ve biyografi sayfası",
        "Keşif ve arama arayüzü",
        "Etkileşim ve beğeni sistemi",
        "Bildirim akışı tasarımı",
        "Responsive ve erişilebilir arayüz"
      ]
    },
    "en": {
      "title": "ARIA",
      "subtitle": "",
      "summary": "User flow and UI design demo project for a social media platform.",
      "description": "ARIA is a comprehensive UI demo designed for social media platforms. Post feeds, user profiles, content discovery and interaction systems are presented with a realistic experience.",
      "features": [
        "Post and content feed",
        "User profile and biography page",
        "Discovery and search UI",
        "Interaction and like system",
        "Notification feed design",
        "Responsive and accessible interface"
      ]
    }
  },
  {
    "slug": "mavi-kadraj-otel",
    "kind": "demo",
    "liveUrl": "https://mk-otel.vercel.app/",
    "image": {
      "src": "/demos/mavi-kadraj-otel.webp",
      "width": 1536,
      "height": 1024
    },
    "tags": [
      "Next.js",
      "Hospitality",
      "Hotel",
      "UI Design"
    ],
    "tr": {
      "title": "Mavi Kadraj Otel",
      "subtitle": "Bolu Konaklama Web Sitesi",
      "summary": "Bolu Merkez’de doğa rotaları, oda seçimi ve rezervasyon akışını bir araya getiren otel web sitesi demosu.",
      "description": "Mavi Kadraj Otel; Bolu Merkez konumunu Abant, Yedigöller, Gölcük ve yayla rotalarıyla birlikte sunan bir konaklama sitesi demosudur. Odalar, galeri, keşif içerikleri ve adım adım rezervasyon arayüzü tek bir akışta toplanır. Portföy gösterimi için hazırlanmıştır.",
      "features": [
        "Oda kataloğu ve oda detay sayfaları",
        "Tarih ve misafir seçimli rezervasyon akışı",
        "Bolu doğa rota ve keşif içerikleri",
        "Galeri ve görsel anlatım",
        "Konum, iletişim ve WhatsApp yönlendirmesi",
        "Mobil uyumlu otel arayüzü"
      ]
    },
    "en": {
      "title": "Mavi Kadraj Otel",
      "subtitle": "Bolu Hospitality Website",
      "summary": "Hotel website demo for Bolu city center, combining nature routes, room selection and a booking flow.",
      "description": "Mavi Kadraj Otel is a hospitality website demo that presents a Bolu city-center stay together with routes to Abant, Yedigöller, Gölcük and nearby highlands. Rooms, gallery, discovery content and a step-by-step booking interface sit in one flow. It is prepared as a portfolio demonstration.",
      "features": [
        "Room catalog and room detail pages",
        "Booking flow with dates and guests",
        "Bolu nature route and discovery content",
        "Gallery and visual storytelling",
        "Location, contact and WhatsApp routing",
        "Mobile-responsive hotel interface"
      ]
    }
  },
  {
    "slug": "mavi-gayrimenkul",
    "kind": "demo",
    "liveUrl": "https://mk-emlak-swfa.vercel.app/",
    "image": null,
    "tags": [],
    "tr": {
      "title": "Mavi Gayrimenkul",
      "subtitle": "Gayrimenkul Web Sitesi / Dijital Satış Platformu",
      "summary": "Gayrimenkul danışmanları ve emlak ofisleri için ilan, bölge, filtreleme, portföy sunumu, randevu ve değerleme akışlarını bir araya getiren modern satış odaklı web deneyimi.",
      "description": "Mavi Gayrimenkul; emlak ofisleri için satılık ve kiralık ilanları, bölge sayfalarını, filtrelemeyi ve randevu/değerleme formlarını aynı sitede sunan bir portföy demosudur. Favoriler, karşılaştırma ve satış odaklı çağrı butonları dönüşüm akışını destekler. Gerçek ofis yayını değil, portföy çalışmasıdır.",
      "features": [
        "Satılık / kiralık ilanlar",
        "Akıllı filtreleme",
        "İlan detay sayfaları",
        "Görsel galeri",
        "Bölge sayfaları",
        "Gayrimenkul değerleme formu",
        "Portföy gönderme formu",
        "Randevu akışı",
        "Favoriler",
        "Karşılaştırma",
        "Mobil uyum",
        "Satış odaklı CTA yapısı"
      ]
    },
    "en": {
      "title": "Mavi Gayrimenkul",
      "subtitle": "Real Estate Website / Digital Sales Platform",
      "summary": "A sales-focused web experience for real-estate advisors and agencies, combining listings, areas, filtering, portfolio presentation, appointments and valuation flows.",
      "description": "Mavi Gayrimenkul is a portfolio demo that presents sale and rental listings, area pages, filtering and appointment/valuation forms in one site for real-estate offices. Favorites, comparison and sales-focused calls to action support the conversion flow. It is a portfolio study, not a live agency website.",
      "features": [
        "Sale / rental listings",
        "Smart filtering",
        "Listing detail pages",
        "Image gallery",
        "Area pages",
        "Property valuation form",
        "Portfolio submission form",
        "Appointment flow",
        "Favorites",
        "Comparison",
        "Mobile layout",
        "Sales-focused CTA structure"
      ]
    }
  },
  {
    "slug": "mavi-kafe",
    "kind": "demo",
    "liveUrl": "https://mk-kafe.vercel.app/",
    "image": null,
    "tags": [],
    "tr": {
      "title": "Mavi Kafe & Restaurant",
      "subtitle": "Kafe / Restoran Web Sitesi",
      "summary": "Kafe ve restoran işletmeleri için menü, ürün sunumu, galeri, rezervasyon ve marka deneyimini tek sayfada birleştiren modern hospitality web sitesi.",
      "description": "Mavi Kafe & Restaurant; kafe ve restoranlar için dijital menü, öne çıkan ürünler, galeri ve rezervasyon formunu aynı deneyimde toplayan bir portföy demosudur. Mekân hikâyesi, açılış saatleri, konum ve iletişim alanları marka sunumunu tamamlar. Gerçek işletme yayını değil, portföy çalışmasıdır.",
      "features": [
        "Dijital menü",
        "Menü kategorileri",
        "Öne çıkan ürünler",
        "Rezervasyon formu",
        "Galeri",
        "Mekân hikâyesi",
        "Açılış saatleri",
        "Mobil kullanım",
        "İletişim",
        "Konum",
        "Satış / rezervasyon CTA yapısı"
      ]
    },
    "en": {
      "title": "Mavi Kafe & Restaurant",
      "subtitle": "Cafe / Restaurant Website",
      "summary": "A modern hospitality website for cafes and restaurants, combining menu, product presentation, gallery, reservations and brand experience on one site.",
      "description": "Mavi Kafe & Restaurant is a portfolio demo that brings a digital menu, featured items, gallery and reservation form into one experience for cafes and restaurants. Venue story, opening hours, location and contact complete the brand presentation. It is a portfolio study, not a live venue website.",
      "features": [
        "Digital menu",
        "Menu categories",
        "Featured items",
        "Reservation form",
        "Gallery",
        "Venue story",
        "Opening hours",
        "Mobile use",
        "Contact",
        "Location",
        "Sales / reservation CTA structure"
      ]
    }
  },
  {
    "slug": "gonul-pusulasi",
    "kind": "project",
    "liveUrl": "https://gonulpusulasi.oner334480.workers.dev/",
    "image": {
      "src": "/demos/gonul-pusulasi.webp",
      "width": 1025,
      "height": 2048
    },
    "tags": [
      "HTML",
      "CSS",
      "Content",
      "Poetry",
      "Minimalist"
    ],
    "tr": {
      "title": "Gönül Pusulası",
      "subtitle": "",
      "summary": "Şiir, duygu ve anlatı üzerine kurulu sade bir dijital metin ve içerik platformu.",
      "description": "Gönül Pusulası; şiir, anlatı ve duygusal içeriklerin okuyucuya sakin ve dikkat dağıtmayan bir ortamda sunulduğu minimalist bir dijital platformdur. Sade tipografi, beyaz alan kullanımı ve odak odaklı okuma deneyimi tasarımın temelini oluşturur.",
      "features": [
        "Şiir ve anlatı yayınlama alanı",
        "Minimalist beyaz alan tasarımı",
        "Okuma odaklı tipografi",
        "Kategori ve etiket sistemi",
        "Sade navigasyon yapısı",
        "Hızlı ve erişilebilir arayüz"
      ]
    },
    "en": {
      "title": "Gönül Pusulası",
      "subtitle": "",
      "summary": "A minimal digital text and content platform built on poetry, emotion and narrative.",
      "description": "Gönül Pusulası is a minimalist digital platform where poetry, narrative and emotional content is presented to readers in a calm, distraction-free environment. Clean typography, white space usage and focus-oriented reading experience form the foundation.",
      "features": [
        "Poetry and narrative publishing area",
        "Minimalist white space design",
        "Reading-focused typography",
        "Category and tag system",
        "Clean navigation structure",
        "Fast and accessible interface"
      ]
    }
  },
  {
    "slug": "siir-dunyasi",
    "kind": "project",
    "liveUrl": "https://siir-dunyasi1.vercel.app/",
    "image": {
      "src": "/demos/siir-dunyasi.webp",
      "width": 1080,
      "height": 2013
    },
    "tags": [
      "HTML",
      "CSS",
      "Content",
      "Literary",
      "Frontend"
    ],
    "tr": {
      "title": "Şiir Dünyası",
      "subtitle": "",
      "summary": "Şiir ve edebi içeriklerin dijital ortamda paylaşımı için geliştirilmiş içerik platformu.",
      "description": "Şiir Dünyası; Türk ve dünya edebiyatından şiirlerin, kısa anlatıların ve edebi metinlerin düzenli ve kolay erişilebilir biçimde sunulduğu dijital bir içerik platformudur. Sade düzen ve okunabilir tasarım önceliklendirilmiştir.",
      "features": [
        "Şiir ve edebi metin arşivi",
        "Yazar ve eser kategorilendirmesi",
        "Kolay gezinme ve arama",
        "Okuma odaklı sade tasarım",
        "İçerik paylaşım sistemi",
        "Erişilebilir ve hızlı arayüz"
      ]
    },
    "en": {
      "title": "Şiir Dünyası",
      "subtitle": "",
      "summary": "Content platform developed for sharing poetry and literary content in digital environment.",
      "description": "Şiir Dünyası is a digital content platform where poems from Turkish and world literature, short narratives and literary texts are presented in an organized and easily accessible format. Clean layout and readable design are prioritized.",
      "features": [
        "Poetry and literary text archive",
        "Author and work categorization",
        "Easy navigation and search",
        "Reading-focused minimal design",
        "Content sharing system",
        "Accessible and fast interface"
      ]
    }
  }
];

export function getDemo(slug: string): Demo | undefined {
  return demos.find((demo) => demo.slug === slug);
}

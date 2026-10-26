import Image from "next/image";
import { Link } from "@/config/navigation";
import type { Product, SeoTopic } from "@/content/products";
import { GOOGLE_PLAY_DEVELOPER_URL, PORTFOLIO_URL, products } from "@/content/products";
import { Arrow } from "./Arrow";

function ProductLinkButton({ link, primary = false }: { link: Product["links"][number]; primary?: boolean }) {
  return (
    <a
      className={primary ? "button" : "text-link"}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.label}
      <Arrow diagonal />
    </a>
  );
}

function ProductBreadcrumb({ product, entry }: { product: Product; entry?: SeoTopic }) {
  return (
    <nav className="product-breadcrumb wrap" aria-label="Sayfa yolu">
      <Link href="/">Ana sayfa</Link>
      <span aria-hidden="true">/</span>
      <Link href="/work">Çalışmalar</Link>
      <span aria-hidden="true">/</span>
      {entry ? (
        <>
          <Link href={{ pathname: "/[area]", params: { area: product.id } }}>{product.name}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{entry.title}</span>
        </>
      ) : (
        <span aria-current="page">{product.name}</span>
      )}
    </nav>
  );
}

function ProductMedia({ product, image = 0, priority = false }: { product: Product; image?: number; priority?: boolean }) {
  const media = product.images[image] ?? product.images[0];
  if (!media) return null;
  return (
    <figure className={`product-media ${media.height > media.width ? "is-portrait" : "is-landscape"}`}>
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes={media.height > media.width ? "(max-width: 767px) 88vw, 520px" : "(max-width: 767px) 92vw, 1100px"}
        priority={priority}
      />
    </figure>
  );
}

export function ProductHubView({ product }: { product: Product }) {
  const isPlayProduct = product.links.some((link) => link.kind === "play");
  return (
    <main className="product-page">
      <ProductBreadcrumb product={product} />
      <header className="product-hero wrap">
        <div className="product-hero-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-lead">{product.summary}</p>
          <div className="product-actions">
            {product.links.map((link, index) => <ProductLinkButton key={link.url} link={link} primary={index === 0} />)}
          </div>
          <p className="product-status"><span>{product.status}</span>{product.audience}</p>
        </div>
        <ProductMedia product={product} priority />
      </header>

      <section className="section wrap product-overview" aria-labelledby="product-overview-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">ÜRÜNÜN KAPSAMI</p>
            <h2 id="product-overview-title">Doğrulanmış özelliklerle net bir ürün anlatımı.</h2>
          </div>
          <p className="section-description">{product.description}</p>
        </div>
        <ul className="product-feature-grid">
          {product.verifiedFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {product.limitations && <p className="product-limit"><strong>Doğrulama notu:</strong> {product.limitations}</p>}
      </section>

      {product.images.length > 1 && (
        <section className="section product-gallery" aria-labelledby="product-gallery-title">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">GERÇEK ÜRÜN EKRANLARI</p>
                <h2 id="product-gallery-title">Ürünü, kendi ekranları üzerinden inceleyin.</h2>
              </div>
              <p className="section-description">Kurumsal repository’de doğrulanan ürün ekranları kullanılır; sahte arayüz veya stok mockup gösterilmez.</p>
            </div>
            <div className="product-gallery-grid">
              {product.images.map((image) => (
                <figure key={image.src}>
                  <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) 90vw, (max-width: 1100px) 46vw, 420px" />
                  <figcaption>{image.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section wrap product-topics" aria-labelledby="product-topics-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">KULLANIM ALANLARI</p>
            <h2 id="product-topics-title">İhtiyacınıza en yakın başlıktan başlayın.</h2>
          </div>
          <p className="section-description">Her rehber ayrı bir arama niyetini ele alır; aynı metin farklı başlıklarla çoğaltılmaz.</p>
        </div>
        <div className="product-topic-grid">
          {product.topics.map((entry) => (
            <article key={entry.slug}>
              <p className="eyebrow">{entry.intent}</p>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
              <Link className="text-link" href={{ pathname: "/[area]/[topic]", params: { area: product.id, topic: entry.slug } }}>
                Rehberi okuyun <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="product-final-cta">
        <div className="wrap">
          <p className="eyebrow">SONRAKİ ADIM</p>
          <h2>{product.status === "Geliştirme aşamasında" ? `${product.name} geliştirme sürecini takip edin.` : `${product.name} ürününü kendi ihtiyacınızla değerlendirin.`}</h2>
          <p>{product.summary}</p>
          <div className="product-actions">
            {product.links.map((link, index) => <ProductLinkButton key={link.url} link={link} primary={index === 0} />)}
            {isPlayProduct && (
              <a className="text-link" href={GOOGLE_PLAY_DEVELOPER_URL} target="_blank" rel="noopener noreferrer">
                Google Play’deki Tüm Uygulamalarımızı Gör <Arrow diagonal />
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export function ProductTopicView({ product, entry }: { product: Product; entry: SeoTopic }) {
  const related = product.topics.filter((candidate) => candidate.slug !== entry.slug).slice(0, 3);
  return (
    <main className="product-page product-topic-page">
      <ProductBreadcrumb product={product} entry={entry} />
      <header className="topic-hero wrap">
        <div>
          <p className="eyebrow">{product.name} · {entry.intent}</p>
          <h1>{entry.title}</h1>
          <p className="product-lead">{entry.lead}</p>
          <div className="product-actions">
            <Link className="button" href={{ pathname: "/[area]", params: { area: product.id } }}>
              Ürünü İncele: {product.name} <Arrow />
            </Link>
            {product.links[0] && <ProductLinkButton link={product.links[0]} />}
          </div>
        </div>
        <ProductMedia product={product} image={entry.image} priority />
      </header>

      <article className="topic-content wrap">
        <div className="topic-main">
          {entry.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <section>
            <h2>Bu süreçte hangi kayıtlar önemlidir?</h2>
            <ul className="topic-points">
              {entry.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </section>
          <section>
            <h2>Somut kullanım senaryoları</h2>
            <div className="scenario-grid">
              {entry.scenarios.map((scenario) => (
                <div key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.text}</p></div>
              ))}
            </div>
          </section>
          <section>
            <h2>{product.name} bu ihtiyaca nasıl yaklaşır?</h2>
            <p>{product.description}</p>
            <ul className="topic-feature-list">
              {product.verifiedFeatures.slice(0, 6).map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            {product.limitations && <p className="product-limit"><strong>Doğrulama notu:</strong> {product.limitations}</p>}
          </section>
          <section className="topic-faq" aria-labelledby="topic-faq-title">
            <h2 id="topic-faq-title">Sık sorulan sorular</h2>
            {entry.faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>
        </div>
        <aside className="topic-aside" aria-label={`${product.name} bağlantıları`}>
          <p className="eyebrow">{product.name}</p>
          <p>{product.summary}</p>
          <Link className="button button-small" href={{ pathname: "/[area]", params: { area: product.id } }}>
            Ürün sayfasına gidin <Arrow />
          </Link>
          {product.links.map((link) => <ProductLinkButton key={link.url} link={link} />)}
        </aside>
      </article>

      <section className="section wrap related-topics" aria-labelledby="related-topics-title">
        <div className="section-head">
          <div><p className="eyebrow">İLGİLİ REHBERLER</p><h2 id="related-topics-title">Aynı ürünün diğer kullanım alanları.</h2></div>
        </div>
        <div className="product-topic-grid">
          {related.map((item) => (
            <article key={item.slug}>
              <p className="eyebrow">{item.intent}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link className="text-link" href={{ pathname: "/[area]/[topic]", params: { area: product.id, topic: item.slug } }}>
                Rehberi okuyun <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ProductPortfolioIntro() {
  return (
    <section className="section wrap portfolio-intro" aria-labelledby="portfolio-products-title">
      <div className="section-head">
        <div>
          <p className="eyebrow">10 ANA ÜRÜN</p>
          <h2 id="portfolio-products-title">Sahadan mobil deneyimlere, odaklı bir ürün portföyü.</h2>
        </div>
        <p className="section-description">MK OPS amiral gemimizdir. Diğer ürünler işletme yönetimi, mobil uygulamalar ve web platformları olarak sıralanır.</p>
      </div>
      <div className="portfolio-product-list">
        {products.map((product, index) => (
          <Link key={product.id} href={{ pathname: "/[area]", params: { area: product.id } }} className={index === 0 ? "is-flagship" : ""}>
            <div><p className="eyebrow">{product.category}</p><h3>{product.name}</h3><p>{product.summary}</p></div>
            <Arrow />
          </Link>
        ))}
      </div>
      <aside className="portfolio-external">
        <div>
          <p className="eyebrow">TÜM PORTFÖY</p>
          <h3>Diğer Projelerimizi Keşfedin</h3>
          <p>MK Digital Systems’ın öne çıkan yazılım ürünleri dışında geliştirdiğimiz diğer dijital projeleri ve geçmiş çalışmalarımızı kişisel portföyümüzde inceleyebilirsiniz.</p>
        </div>
        <a className="button" href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">
          Tüm Projeleri Gör <Arrow diagonal />
        </a>
      </aside>
    </section>
  );
}

export function ApplicationsShowcase() {
  const applicationIds = new Set(["mk-adisyon", "aura-gunluk", "mavi-kadraj-ile-ogreniyorum", "bebegimin-ilk-yili"]);
  const applications = products.filter((product) => applicationIds.has(product.id));
  return (
    <section className="section applications-showcase" aria-labelledby="applications-title">
      <div className="wrap">
        <div className="section-head">
          <div><p className="eyebrow">UYGULAMALARIMIZ</p><h2 id="applications-title">Google Play’de yayınlanan uygulamalarımız.</h2></div>
          <p className="section-description">MK Adisyon, Aura Günlük, Mavi Kadraj ile Öğreniyorum ve Bebeğimin İlk Yılı Google Play’de yayında.</p>
        </div>
        <div className="application-grid">
          {applications.map((product) => {
            const play = product.links.find((link) => link.kind === "play");
            return (
              <article key={product.id}>
                <p className="eyebrow">{product.status}</p>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <div>
                  <Link className="text-link" href={{ pathname: "/[area]", params: { area: product.id } }}>Uygulamayı İncele <Arrow /></Link>
                  {play && <ProductLinkButton link={{ ...play, label: "Google Play'de Gör" }} />}
                </div>
              </article>
            );
          })}
        </div>
        <a className="button applications-all" href={GOOGLE_PLAY_DEVELOPER_URL} target="_blank" rel="noopener noreferrer">
          Google Play’deki Tüm Uygulamalarımızı Gör <Arrow diagonal />
        </a>
      </div>
    </section>
  );
}

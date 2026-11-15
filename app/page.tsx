const products = [
  { brand: "APPLE", name: "iPhone 16 Pro", detail: "256 Go · Titane naturel", price: "À partir de 10 999 DH", tag: "BEST-SELLER", tone: "silver", symbol: "✦" },
  { brand: "SAMSUNG", name: "Galaxy S25 Ultra", detail: "256 Go · Titanium Gray", price: "À partir de 11 499 DH", tag: "NOUVEAUTÉ", tone: "graphite", symbol: "S" },
  { brand: "APPLE", name: "iPhone 16", detail: "128 Go · Ultramarine", price: "À partir de 7 999 DH", tag: "POPULAIRE", tone: "blue", symbol: "●" },
  { brand: "SAMSUNG", name: "Galaxy Z Flip6", detail: "256 Go · Silver Shadow", price: "À partir de 8 499 DH", tag: "DESIGN", tone: "lilac", symbol: "Z" },
];
const wa = "https://wa.me/212694600357?text=Salam%20ELECTRO%20LYOUSSER%2C%20bghit%20n3ref%20les%20produits%20disponibles.";
export default function Home() {
  return <main>
    <div className="topline">LIVRAISON PARTOUT AU MAROC <span>•</span> SERVICE CLIENT SUR WHATSAPP</div>
    <header className="nav wrap">
      <a className="brand" href="#"><span className="brand-mark">E<span>✦</span></span><span>ELECTRO <b>LYOUSSER</b><small>TECHNOLOGY & MORE</small></span></a>
      <nav><a href="#catalogue">Catalogue</a><a href="#apple">Apple</a><a href="#samsung">Samsung</a><a href="#contact">Contact</a></nav>
      <a className="nav-cta" href={wa} target="_blank">WhatsApp ↗</a>
    </header>
    <section className="hero wrap">
      <div className="hero-copy">
        <div className="eyebrow"><i/> THE NEXT LEVEL OF TECH</div>
        <h1>La technologie.<br/><em>Sans compromis.</em></h1>
        <p>Découvrez les dernières nouveautés Apple & Samsung. Une expérience premium, un accompagnement de confiance, partout au Maroc.</p>
        <div className="hero-actions"><a className="btn-red" href="#catalogue">Explorer le catalogue <span>↗</span></a><a className="btn-line" href={wa} target="_blank">Nous contacter</a></div>
        <div className="hero-proof"><span>✦</span> Votre destination tech au Maroc</div>
      </div>
      <div className="hero-art">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="device device-back"><div className="camera c1"/><div className="camera c2"/><div className="camera c3"/></div>
        <div className="device device-front"><div className="screen-glow"/><div className="dynamic-island"/></div>
        <div className="art-label"><b>01 / 02</b><span>INNOVATION<br/>IN YOUR HANDS</span></div>
        <div className="red-chip">NEW<br/>GENERATION</div>
      </div>
    </section>
    <section className="trust wrap"><div><b>01</b><span>Produits sélectionnés<br/><small>Apple & Samsung</small></span></div><div><b>02</b><span>Commande facile<br/><small>Directement sur WhatsApp</small></span></div><div><b>03</b><span>Service au Maroc<br/><small>À votre écoute</small></span></div></section>
    <section className="catalogue wrap" id="catalogue">
      <div className="section-head"><div><div className="eyebrow"><i/> COLLECTION</div><h2>Choisissez votre <em>univers.</em></h2></div><a href={wa} target="_blank" className="text-link">Voir les disponibilités ↗</a></div>
      <div className="filters"><a className="active" href="#catalogue">Tout voir</a><a id="apple" href="#catalogue">Apple</a><a id="samsung" href="#catalogue">Samsung</a><span>COLLECTION 2026</span></div>
      <div className="products">{products.map((p,i)=><article className="product" key={p.name}>
        <div className={"product-visual "+p.tone}><span className="product-tag">{p.tag}</span><div className="phone"><div className="phone-cam"/><div className="phone-cam second"/><div className="phone-cam third"/><div className="phone-logo">{p.symbol}</div></div><span className="visual-index">0{i+1}</span></div>
        <div className="product-info"><div className="product-brand">{p.brand}</div><h3>{p.name}</h3><p>{p.detail}</p><div className="product-bottom"><b>{p.price}</b><a href={wa} target="_blank" aria-label={"Commander "+p.name}>↗</a></div></div>
      </article>)}</div>
      <p className="disclaimer">Les modèles et prix affichés sont indicatifs. Contactez-nous pour confirmer le stock, les couleurs et le prix du jour.</p>
    </section>
    <section className="banner wrap"><div><div className="eyebrow"><i/> BESOIN D'UN CONSEIL ?</div><h2>Le bon produit.<br/><em>Le bon choix.</em></h2><p>Notre équipe vous accompagne pour trouver l'appareil qui vous correspond.</p><a className="btn-white" href={wa} target="_blank">Discuter sur WhatsApp ↗</a></div><div className="banner-symbol">E<span>✦</span></div></section>
    <footer id="contact"><div className="wrap footer-inner"><a className="brand" href="#"><span className="brand-mark">E<span>✦</span></span><span>ELECTRO <b>LYOUSSER</b><small>TECHNOLOGY & MORE</small></span></a><p>Apple & Samsung · Maroc</p><a href={wa} target="_blank">WhatsApp : 06 94 60 03 57 ↗</a></div><div className="wrap copyright">© 2026 ELECTRO LYOUSSER. Tous droits réservés.<span>MADE FOR THE NEXT GENERATION.</span></div></footer>
  </main>;
}
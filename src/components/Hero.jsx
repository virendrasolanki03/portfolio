import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <span className="eyebrow">Portfolio</span>
        <h1>Clean Shopify stores with fast launches and polished design.</h1>
        <p>
         I’m Virendra Solanki, a Shopify Developer who builds fast, scalable eCommerce stores and replaces costly third-party apps with custom solutions that improve performance and conversions.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            See Projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="button button-secondary">
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="Portfolio overview" />
      </div>
    </section>
  );
}

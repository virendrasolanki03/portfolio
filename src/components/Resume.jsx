export default function Resume() {
  return (
    <section className="section-section section-alt" id="resume">
      <div className="resume-card">
        <div>
          <span className="section-label">Resume</span>
          <h2>Download my resume for a complete Shopify product and project overview.</h2>
          <p>
            My resume contains a full summary of my Shopify experience, product
            detail work, brand launches, and the project stories behind each
            store. It also includes the Shopify overview for each product,
            launch highlights, and the impact metrics I track.
          </p>
          <div className="resume-highlights">
            <div>
              <strong>Product Focus</strong>
              <span>Catalog strategy, UX flows, merchandising, product detail pages</span>
            </div>
            <div>
              <strong>Shopify Execution</strong>
              <span>Shopify 2.0 themes, Liquid, speed, custom storefront development</span>
            </div>
            <div>
              <strong>Launch Impact</strong>
              <span>Performance tuning, responsive design, conversions, mobile UX</span>
            </div>
          </div>
        </div>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="button button-primary">
          Download Resume
        </a>
      </div>
    </section>
  );
}

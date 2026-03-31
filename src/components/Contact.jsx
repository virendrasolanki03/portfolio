export default function Contact() {
  return (
    <section className="section-section section-alt" id="contact">
      <div className="contact-card">
        <div>
          <span className="section-label">Contact</span>
          <h2>Let’s build your next Shopify product experience.</h2>
          <p>
            If you have a product launch, a brand redesign, or a store that needs
            better merchandising and performance, send your brief my way. I can
            help turn your Shopify goals into a polished storefront.
          </p>
        </div>
        <div className="contact-actions">
          <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=virendrasolanki6266@gmail.com"
            target="_blank"
           className="button button-primary"
           style={{ width: '100%' }}>
            Email Me
          </a>
            <a
            href="/resume.pdf"
            download="Virendra-Resume.pdf"
            className="button button-secondary flex items-center gap-2"
            style={{ width: '100%' }}
            >
            ⬇ Download Resume
            </a>
        </div>
      </div>
    </section>
  );
}

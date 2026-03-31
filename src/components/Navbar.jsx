export default function Navbar() {
  return (
    <nav className="site-nav">
      <div className="nav-brand">
        <span>Virendra Solanki </span>
        <small>Shopify Developer</small>
      </div>
      <div className="nav-links">
        <a href="#skills">Skills</a>
        <a href="#projects">Work</a>
        <a href="#resume">Resume</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <a  href="/resume.pdf"
            download="Virendra-Resume.pdf"rel="noreferrer" className="button button-secondary">
        Resume
      </a>
    </nav>
  );
}

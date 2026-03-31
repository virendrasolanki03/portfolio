import duncraft from "../assets/duncraft.png";
import harmony from "../assets/harmony.png";
import golf from "../assets/golf.png";
import gaui from "../assets/gaui.png";
import celvia from "../assets/celvia.png";
import heroImg from "../assets/hero.png";

export default function Projects() {
  const projects = [
    {
      title: "Duncraft",
      img: duncraft,
      link: "https://duncraft.com/",
      desc: "Shopify 2.0 migration with a stronger product catalog and streamlined checkout journey.",
      details: [
        "Reworked collection filters and navigation for faster browsing.",
        "Improved product detail templates with clear variant selection.",
        "Optimized storefront speed and shopping flow for large inventory.",
      ],
    },
    {
      title: "Harmony House",
      img: harmony,
      link: "https://www.harmonyhousefoods.com/",
      desc: "Bulk food storefront built for easy product discovery and fast ordering.",
      details: [
        "Designed category pages that simplify large product catalogs.",
        "Added strong product merchandising for subscriptions and bundles.",
        "Delivered a responsive experience for desktop and mobile users.",
      ],
    },
    {
      title: "Golf Guys",
      img: golf,
      link: "https://www.thegolfguys.com/",
      desc: "Premium golf e-commerce store with polished product storytelling.",
      details: [
        "Created custom product flows and category landing pages.",
        "Built fast-loading collection filters and polished visual design.",
        "Improved merchandising for golf equipment and apparel.",
      ],
    },
    {
      title: "Gaui",
      img: gaui,
      link: "https://shopgaui.com/",
      desc: "Fashion storefront designed with a clean product-first user experience.",
      details: [
        "Focused on strong hero imagery and quick product discovery.",
        "Implemented responsive product cards and simplified add-to-cart flows.",
        "Delivered brand-forward typography and refined UI polish.",
      ],
    },
    {
      title: "Celvia Beauté",
      img: celvia,
      link: "https://celviabeaute.com/",
      desc: "Beauty brand launch with responsive product pages and curated collections.",
      details: [
        "Developed informative product tabs and cross-sell recommendations.",
        "Built a cohesive brand experience across shopping and checkout.",
        "Optimized page speed for better conversion and search visibility.",
      ],
    },
  ];

  return (
    <section className="section-section" id="projects">
      <div className="section-inner">
        <span className="section-label">Projects</span>
        <h2>Selected Shopify launches</h2>
        <p className="section-subtitle">
          A sample of product-led Shopify stores with thoughtful merchandising,
          clean product detail pages, and launch-ready storefronts.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card animate-fade-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <img src={project.img} alt={project.title} />
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <ul className="project-bullets">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  View live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

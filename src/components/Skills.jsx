const skills = [
  "Shopify theme development",
  "Liquid, HTML, CSS, JavaScript , Shopify APIs , React , Node.js , jQuery",
  "Store setup and configuration",
  "Performance optimization",
  "Responsive UI / UX",
  "Custom app integrations",
];

export default function Skills() {
  return (
    <section className="section-section section-alt" id="skills">
      <div className="section-inner">
        <span className="section-label">Skills</span>
        <h2>What I build</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

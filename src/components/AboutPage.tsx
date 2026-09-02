function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-hero [age-hero--about">
        <div className="page-hero-text">
          <h1>About</h1>
          <p>Building skills. Leading teams. Staying close to the craft.</p>
        </div>
      </div>
      <h1>About</h1>
      <div className="quote-form">
        <h2>About This Project</h2>
        <p>
          Evergreen Insurance is a capstone project built by an Engineering Manager
          at Liberty Mutual Investments (LMI) with a passion for staying close to the
          craft of software engineering.
        </p>
        <p>
          With a background in leading engineering teams, I completed a MERN full-stack
          bootcamp a couple of years ago and have been looking for meaningful ways to
          keep those skills sharp and current. This project is part of that ongoing
          commitment — putting React, TypeScript, and modern front-end patterns to work
          on something real rather than just theoretical.
        </p>
        <p>
          My goal is to grow my understanding of the engineering job family from the
          inside out: not just managing engineers, but thinking and building like one.
          Staying technically grounded makes me a better partner to my teams and a
          stronger advocate for engineering craft within the organization.
        </p>
        <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginTop: "24px" }}>
          Built with React · TypeScript · Vite · Deployed on GitHub Pages
        </p>
      </div>
    </div>
  );
}

export default AboutPage;

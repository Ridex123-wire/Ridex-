import './App.css';

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          Devora<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </p>

            <h1>
              Hi, I'm a <span>Frontend</span>
              <br />
              Developer.
            </h1>

            <p className="hero-description">
              I build beautiful, responsive, and user-friendly
              digital experiences with modern web technologies.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>
              <a href="#about" className="secondary-button">
                More About Me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <h3>01</h3>
                <p>Creative mindset</p>
              </div>
              <div>
                <h3>Web</h3>
                <p>Development</p>
              </div>
              <div>
                <h3>∞</h3>
                <p>Always learning</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>

            <div className="profile-card">
              <div className="card-top">
                <span>DEVORA / PORTFOLIO</span>
                <span>✳</span>
              </div>

                <div className="avatar">
  <img src="/images/profile.jpg.jpeg" alt="My profile" />
</div>

              <h2>Creative Developer</h2>
              <p>Turning ideas into digital experiences.</p>

              <div className="code-window">
                <div className="code-dots">
                  <i></i><i></i><i></i>
                </div>
                <code>
                  <span>const</span> passion = "building";<br />
                  <span>const</span> future = "limitless";<br />
                  <span>return</span> passion + future;
                </code>
              </div>
            </div>

            <div className="floating-badge badge-one">
              <span>✦</span> Creative
            </div>
            <div className="floating-badge badge-two">
              &lt;/&gt; React
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <p className="section-label">01 — ABOUT ME</p>
          <h2>
            Building for the web,
            <br />
            <span>one idea at a time.</span>
          </h2>
          <p>
            I'm a frontend developer passionate about creating
            clean interfaces and useful digital products.
            I'm continuously learning and growing my skills
            to build better experiences for people.
          </p>
        </section>

        <section className="skills section" id="skills">
          <p className="section-label">02 — MY TOOLKIT</p>
          <h2>Technologies I work with.</h2>

          <div className="skills-grid">
            <div className="skill-card">HTML <span>01</span></div>
            <div className="skill-card">CSS <span>02</span></div>
            <div className="skill-card">JavaScript <span>03</span></div>
            <div className="skill-card">React <span>04</span></div>
            <div className="skill-card">Git & GitHub <span>05</span></div>
            <div className="skill-card">React Native <span>06</span></div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <p className="section-label">03 — SELECTED WORK</p>
          <h2>Projects with purpose.</h2>

          <div className="project-card">
            <div>
              <p className="project-type">PERSONAL FINANCE APP</p>
              <h3>BudgetWise</h3>
              <p>
                A project focused on helping people manage
                their money and build better financial habits.
              </p>
              <span className="project-tag">React Native · Learning in progress</span>
            </div>
            <span className="project-arrow">↗</span>
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="section-label">04 — GET IN TOUCH</p>
          <h2>Let's create something <span>great.</span></h2>
          <p>Have an idea or an opportunity? Let's connect.</p>
          
<a
  className="primary-button"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=adekunleridwan118@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Contact Me ↗
</a>

        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">Devora<span>.</span></a>
        <p>Designed with purpose. Built with passion.</p>
        
<div className="social-links">
  <a
    href="https://github.com/Ridex123-wire"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub ↗
  </a>
</div>

        <p>© {new Date().getFullYear()} Devora</p>
      </footer>
    </div>
  );
}

export default App;
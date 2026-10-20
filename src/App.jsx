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
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              OPEN TO JUNIOR ROLES & OPPORTUNITIES
            </p>

            <h1>
              Hi, I'm Ridwan.
              <br />
              A <span>Frontend</span>
              <br />
              Developer.
            </h1>

            <p className="hero-description">
              I build responsive, user-friendly digital
              experiences with modern web technologies.
              I'm also exploring mobile app development
              and building practical projects as I grow.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>

              <a href="#contact" className="secondary-button">
                Let's Connect
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <h3>Web</h3>
                <p>Development</p>
              </div>

              <div>
                <h3>Mobile</h3>
                <p>App Learning</p>
              </div>

              <div>
                <h3>∞</h3>
                <p>Always Learning</p>
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
                <img
                  src="/images/profile.jpg.jpeg"
                  alt="Ridwan, frontend developer"
                />
              </div>

              <h2>Ridwan Adekunle</h2>
              <p>Frontend Developer in Progress</p>

              <div className="code-window">
                <div className="code-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <code>
                  <span>const</span> goal = "build";<br />
                  <span>const</span> learn = "every day";<br />
                  <span>return</span> goal + learn;
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

        {/* ABOUT */}
        <section className="about section" id="about">
          <p className="section-label">01 — ABOUT ME</p>

          <h2>
            Building for the web,
            <br />
            <span>one idea at a time.</span>
          </h2>

          <p>
            I'm Ridwan, a developer growing my skills in
            frontend and mobile app development. I enjoy
            turning ideas into clear, useful interfaces
            and learning how technology can solve everyday
            problems. Through personal projects, I'm
            building practical experience with React,
            React Native, Firebase, and GitHub.
          </p>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <p className="section-label">02 — MY TOOLKIT</p>

          <h2>Technologies I'm learning and using.</h2>

          <div className="skills-grid">
            <div className="skill-card">
              HTML <span>01</span>
            </div>

            <div className="skill-card">
              CSS <span>02</span>
            </div>

            <div className="skill-card">
              JavaScript <span>03</span>
            </div>

            <div className="skill-card">
              React <span>04</span>
            </div>

            <div className="skill-card">
              Git & GitHub <span>05</span>
            </div>

            <div className="skill-card">
              React Native <span>06</span>
            </div>

            <div className="skill-card">
              Firebase <span>07</span>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects section" id="projects">
          <p className="section-label">03 — SELECTED WORK</p>

          <h2>Projects with purpose.</h2>

          <p className="project-intro">
            Personal projects where I practise my skills,
            solve problems, and turn ideas into working
            applications.
          </p>

          <div className="project-card">
            <div>
              <p className="project-type">
                PERSONAL FINANCE APPLICATION
              </p>

              <h3>BudgetWise</h3>

              <p>
                A money-management application designed to
                help users record income and expenses,
                monitor their finances, manage budgets,
                and work towards savings goals.
              </p>

              <p>
                Built with React Native, Expo, and Firebase
                as part of my ongoing mobile development
                learning journey.
              </p>

              <div className="project-tags">
                <span className="project-tag">
                  React Native
                </span>

                <span className="project-tag">
                  Expo
                </span>

                <span className="project-tag">
                  Firebase
                </span>
              </div>

              <p className="project-status">
                Currently in development
              </p>

              <a
                className="project-link"
                href="https://github.com/Ridex123-wire"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore my GitHub profile ↗
              </a>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
          <p className="section-label">04 — GET IN TOUCH</p>

          <h2>
            Let's create something <span>great.</span>
          </h2>

          <p>
            Looking for a junior developer, have an opportunity,
            or want to discuss a project? I'd love to hear from you.
          </p>

          <a
            className="primary-button"
            href="mailto:adekunleridwan118@gmail.com?subject=Developer%20Opportunity"
          >
            Contact Me ↗
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          Devora<span>.</span>
        </a>

        <p>Designed with purpose. Built with passion.</p>

        <div className="social-links">
          <a
            href="https://github.com/Ridex123-wire"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a href="mailto:adekunleridwan118@gmail.com">
            Email ↗
          </a>
        </div>

        <p>© {new Date().getFullYear()} Devora</p>
      </footer>
    </div>
  );
}

export default App;
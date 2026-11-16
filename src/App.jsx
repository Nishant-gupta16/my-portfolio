import { useEffect, useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01',
    name: 'KnowYourMedicine',
    kind: 'Full-stack pharmacy platform',
    description:
      'An online pharmacy experience that connects customers, stores, and administrators with medicine search, ordering, and nearby-shop discovery.',
    stack: ['Java', 'JSP & Servlets', 'JDBC', 'MySQL'],
    live: 'https://knowyourmedicine-main.onrender.com/',
    source: 'https://github.com/Nishant-gupta16/KnowYourMedicine',
    image: '/project-knowyourmedicine.png',
    imageAlt: 'Screenshot of the Know Your Medicine project',
  },
  {
    number: '02',
    name: 'Brahmastra AI',
    kind: 'AI chat application',
    description:
      'A conversational AI app with streamed responses and context memory, backed by an Express API with response caching.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express'],
    live: 'https://brahmastra-ai-nu.vercel.app',
    source: 'https://github.com/Nishant-gupta16/brahmastra-ai',
    image: '/project-brahmastra.png',
    imageAlt: 'Screenshot of the Brahmastra AI project',
    imageFit: 'contain',
  },
  {
    number: '03',
    name: 'TaskMasterPro',
    kind: 'Task management app',
    description:
      'A responsive daily task manager with create, edit, complete, and delete actions, plus filters, live stats, and local persistence.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Local storage'],
    live: 'https://nishant-gupta16.github.io/TaskMaster-Pro/',
    source: 'https://github.com/Nishant-gupta16/TaskMaster-Pro',
    image: '/project-taskmaster.png',
    imageAlt: 'Screenshot of the TaskMaster Pro project',
  },
]

const skillGroups = [
  {
    title: 'Programming',
    skills: ['C++', 'Java', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Web development',
    skills: ['React.js', 'Node.js', 'Express.js', 'JSP', 'Servlets'],
  },
  {
    title: 'Data & fundamentals',
    skills: ['MySQL', 'MongoDB', 'DSA', 'OOP', 'DBMS', 'SDLC'],
  },
  {
    title: 'Tools & systems',
    skills: ['Git', 'GitHub', 'Windows', 'Linux', 'macOS', 'Networking'],
  },
]

const internships = [
  {
    company: 'Unified Mentor Pvt. Ltd.',
    role: 'Full Stack Web Development Intern',
    period: 'Oct 2025 — Jan 2026',
    description:
      'Built responsive web pages and interactive UI components while working across HTML, CSS, JavaScript, and Java.',
    certificate:
      'https://drive.google.com/file/d/1juHtmdBo888PhOcQqUO09f2bjdrjABmu/view?usp=drivesdk',
  },
  {
    company: 'Ypsilon IT Solutions Pvt. Ltd.',
    role: 'Java Intern — Core & Advanced Java',
    period: 'Mar 2024 — Apr 2024',
    description:
      'Practised object-oriented programming, exception handling, collections, JDBC, and foundational Java application development.',
    certificate:
      'https://drive.google.com/file/d/1zWyrdUkwlcSiVFg8c1bnYbZ6ouexIV2D/view?usp=drivesdk',
  },
]

const certifications = [
  ['Junior Cybersecurity Analyst Career Path', 'Cisco Networking Academy'],
  ['ReactJS', 'Infosys Springboard'],
  ['Introduction to Generative AI', 'AWS Training & Certification'],
  ['JavaScript Essentials 1', 'Cisco Networking Academy'],
]

const whatsappUrl =
  'https://wa.me/917524044987?text=Hi%20Nishant%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.'
const emailComposeUrl =
  'https://mail.google.com/mail/?view=cm&fs=1&to=nishant100.g%40gmail.com'

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 16 16"
      fill="none"
    >
      {diagonal ? (
        <path d="M4 12 12 4M5 4h7v7" />
      ) : (
        <path d="M2.5 8h10m-4-4 4 4-4 4" />
      )}
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    )

    revealElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Nishant Gupta home">
          NG<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav
          className={`main-nav${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-resume" href="/Nishant-Gupta-Resume.pdf" download>
            Resume <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> OPEN TO SOFTWARE ENGINEER TRAINEE ROLES</p>
            <h1>Building thoughtful<br />things for the <span>web.</span></h1>
            <p className="hero-intro">
              I&apos;m Nishant Gupta, a computer science graduate who enjoys
              turning ideas into useful, dependable digital experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">Explore my work <ArrowIcon /></a>
              <a className="text-link" href="mailto:nishant100.g@gmail.com">Let&apos;s talk <ArrowIcon diagonal /></a>
            </div>
            <div className="hero-location"><span className="location-mark">⌖</span> Indore, Madhya Pradesh, India</div>
          </div>

          <div className="hero-art" aria-label="Introduction card for Nishant Gupta">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-stamp">DESIGN<br />&amp; CODE<br /><span>✳</span></div>
            <div className="hero-note note-top"><span>01 / 03</span><b>Curious by nature</b></div>
            <figure className="portrait-card">
              <img
                className="hero-portrait"
                src="/nishant-gupta.png"
                alt="Nishant Gupta"
                width="770"
                height="768"
                fetchPriority="high"
              />
              <figcaption className="portrait-caption">NISHANT GUPTA <span>·</span> INDORE, INDIA</figcaption>
            </figure>
            <div className="hero-note note-bottom"><span>BASED IN</span><b>Indore, IN ↗</b></div>
            <span className="art-cross cross-one">+</span>
            <span className="art-cross cross-two">+</span>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="about-section section-wrap section-pad reveal" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Good work starts<br />with <span>good questions.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m a Computer Science graduate from Sri Aurobindo Institute
              of Technology, Indore. My foundation spans data structures,
              object-oriented programming, databases, and computer networks.
            </p>
            <p>
              I build with JavaScript, React, Node.js, and Java, and like
              bringing the pieces together—from a clear interface to a
              dependable backend. Technology is the field I genuinely enjoy:
              I like exploring how things work, learning new tools, and turning
              that curiosity into practical projects.
            </p>
            <a className="text-link" href="/Nishant-Gupta-Resume.pdf" download>Download my resume <ArrowIcon diagonal /></a>
          </div>
          <div className="about-stats">
            <div><strong>03</strong><span>Personal projects</span></div>
            <div><strong>02</strong><span>Internship experiences</span></div>
            <div><strong>2026</strong><span>Computer Science graduate</span></div>
          </div>
        </section>

        <section className="personal-section section-wrap section-pad reveal" aria-labelledby="personal-title">
          <div className="personal-intro">
            <p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p>
            <h2 id="personal-title">Rooted in Deoria.<br /><span>Curious about what&apos;s next.</span></h2>
            <p className="personal-copy">
              My home village is Rawatpar (Rautpar) Amethia, in Lar block,
              Deoria, Uttar Pradesh. My technology journey keeps me curious:
              I enjoy learning how software works and using that knowledge to
              build useful things for people.
            </p>
            <div className="personal-location"><span aria-hidden="true">⌖</span> Rawatpar Amethia · Deoria, Uttar Pradesh</div>
          </div>
          <aside className="family-card" aria-label="A little about my family">
            <span className="family-label">A LITTLE ABOUT MY FAMILY</span>
            <h3>The people who<br />keep me grounded.</h3>
            <p>I&apos;m grateful for the support of my family as I learn, grow, and build my career in technology.</p>
            <div className="family-members">
              <div><span>FATHER</span><strong>Indrasen Gupta</strong></div>
              <div><span>MOTHER</span><strong>Poonum Gupta</strong></div>
              <div className="family-siblings"><span>AT HOME</span><strong>A younger brother and a younger sister</strong></div>
            </div>
            <span className="family-spark" aria-hidden="true">✳</span>
          </aside>
        </section>

        <section className="skills-section section-wrap section-pad reveal" aria-labelledby="skills-title">
          <div className="section-heading compact-heading">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2 id="skills-title">Skills I bring<br /><span>to the table.</span></h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section section-pad reveal" id="projects">
          <div className="section-wrap">
            <div className="section-topline">
              <div className="section-heading compact-heading">
                <p className="eyebrow">SELECTED WORK / 2024—2026</p>
                <h2>Ideas made <span>real.</span></h2>
              </div>
              <p className="section-aside">A few things I&apos;ve designed,<br />built, and learned from.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card reveal" key={project.number}>
                  <a
                    className={`project-visual${project.imageFit === 'contain' ? ' project-visual-contain' : ''}`}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name} live demo`}
                  >
                    <img
                      className={`project-photo${project.imageFit === 'contain' ? ' project-photo-contain' : ''}`}
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                    />
                    <span className="visual-open"><ArrowIcon diagonal /></span>
                  </a>
                  <div className="project-meta"><span>{project.kind}</span><span>{project.number} / 03</span></div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="tag-list" aria-label={`${project.name} technologies`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="project-links">
                    <a href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowIcon diagonal /></a>
                    <a href={project.source} target="_blank" rel="noreferrer">Source code <ArrowIcon diagonal /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap section-pad reveal" id="experience">
          <div className="section-heading compact-heading">
            <p className="eyebrow">WHERE I&apos;VE BEEN LEARNING</p>
            <h2>Experience &amp;<br /><span>education.</span></h2>
          </div>
          <div className="experience-content">
            <div className="timeline">
              <h3 className="list-heading">Internships</h3>
              {internships.map((item) => (
                <article className="timeline-item" key={item.company}>
                  <span className="timeline-dot" />
                  <div className="timeline-top"><h4>{item.company}</h4><span>{item.period}</span></div>
                  <p className="timeline-role">{item.role}</p>
                  <p className="timeline-description">{item.description}</p>
                  <a className="text-link small-link" href={item.certificate} target="_blank" rel="noreferrer">
                    View certificate <ArrowIcon diagonal />
                  </a>
                </article>
              ))}
            </div>
            <div className="education">
              <h3 className="list-heading">Education</h3>
              <article className="education-item">
                <span className="education-period">SEP 2022 — JUN 2026</span>
                <h4>Bachelor of Technology</h4>
                <p>Computer Science · CGPA 6.66 / 10</p>
                <span className="education-school">Sri Aurobindo Institute of Technology · Indore</span>
              </article>
              <article className="education-item">
                <span className="education-period">JUN 2022</span>
                <h4>Senior Secondary · Class XII</h4>
                <p>Physics, Chemistry &amp; Mathematics · 68.4%</p>
                <span className="education-school">OKM Inter College · Lar, Deoria</span>
              </article>
              <article className="education-item">
                <span className="education-period">JUN 2020</span>
                <h4>Secondary · Class X</h4>
                <p>81.16%</p>
                <span className="education-school">OKM Inter College · Lar, Deoria</span>
              </article>
            </div>
          </div>
        </section>

        <section className="cert-section section-wrap reveal">
          <div className="cert-heading">
            <p className="eyebrow">ALWAYS KEEP LEARNING</p>
            <h2>Certifications</h2>
          </div>
          <ul className="cert-list">
            {certifications.map(([name, issuer], index) => (
              <li key={name}><span className="cert-index">0{index + 1}</span><span>{name}</span><span className="cert-issuer">{issuer}</span></li>
            ))}
          </ul>
        </section>

        <section className="contact-section section-wrap reveal" id="contact">
          <div className="contact-orb" aria-hidden="true">✳</div>
          <p className="eyebrow"><span className="availability-dot" /> HAVE A ROLE OR PROJECT IN MIND?</p>
          <h2>Let&apos;s build something<br /><span>that matters.</span></h2>
          <p className="contact-copy">I&apos;m looking forward to the next chapter. If you think I could be a good fit, I&apos;d love to hear from you.</p>
          <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Get in touch <ArrowIcon diagonal /></a>
          <div className="contact-links">
            <a href={emailComposeUrl} target="_blank" rel="noreferrer">Email <ArrowIcon diagonal /></a>
            <a href="https://www.linkedin.com/in/nishant-gupta-2483b7334" target="_blank" rel="noreferrer">LinkedIn <ArrowIcon diagonal /></a>
            <a href="https://github.com/Nishant-gupta16" target="_blank" rel="noreferrer">GitHub <ArrowIcon diagonal /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">NG<span>.</span></a>
        <p>Designed &amp; built by Nishant Gupta · 2026</p>
        <a className="back-top" href="#home">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App

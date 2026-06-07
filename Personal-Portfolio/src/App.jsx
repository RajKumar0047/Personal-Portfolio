import { useState } from 'react'
import {
  SiClaude,
  SiCss,
  SiExpress,
  SiGit,
  SiGooglegemini,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPerplexity,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import formBuilderThumbnail from './assets/Form-Builder-Live-Project.jpeg'
import profileImage from './assets/Profile-Pic.png'
import resumePdf from './documents/Linmalayraj_Kumar_Resume.pdf'
import './App.css'

const contactDetails = {
  name: 'Linmalayraj Kumar',
  phone: '7853923669',
  email: '1509rajkumar@gmail.com',
  githubProfile: 'https://github.com/RajKumar0047',
  githubRepositories: 'https://github.com/RajKumar0047?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/linmalayraj-kumar62',
}

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
]

const projects = [
  {
    title: 'Medical Form-Builder',
    description:
      'A medical form builder for creating flexible, reusable forms with a clean React interface.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    thumbnail: formBuilderThumbnail,
    liveDemo: '',
    github: '',
  },
]

const skillGroups = [
  {
    title: 'Frontend',
    icon: MonitorIcon,
    skills: [
      { name: 'React', logo: SiReact, brandClass: 'brand-react' },
      { name: 'Next.js', logo: SiNextdotjs, brandClass: 'brand-next' },
      { name: 'HTML5', logo: SiHtml5, brandClass: 'brand-html' },
      { name: 'CSS3', logo: SiCss, brandClass: 'brand-css' },
      { name: 'Tailwind CSS', logo: SiTailwindcss, brandClass: 'brand-tailwind' },
      { name: 'JavaScript', logo: SiJavascript, brandClass: 'brand-js' },
    ],
  },
  {
    title: 'Backend',
    icon: ServerIcon,
    skills: [
      { name: 'Node.js', logo: SiNodedotjs, brandClass: 'brand-node' },
      { name: 'Express.js', logo: SiExpress, brandClass: 'brand-express' },
      { name: 'REST API', logo: TbApi, brandClass: 'brand-rest' },
      { name: 'JWT', logo: SiJsonwebtokens, brandClass: 'brand-jwt' },
    ],
  },
  {
    title: 'Database',
    icon: DatabaseIcon,
    skills: [
      { name: 'MongoDB', logo: SiMongodb, brandClass: 'brand-mongo' },
      { name: 'MySQL', logo: SiMysql, brandClass: 'brand-mysql' },
    ],
  },
  {
    title: 'Tools & Others',
    icon: ToolsIcon,
    skills: [
      { name: 'Git & GitHub', logo: GitGithubLogo, brandClass: 'brand-gitgroup' },
      { name: 'Postman', logo: SiPostman, brandClass: 'brand-postman' },
      { name: 'VS Code', logo: VscVscode, brandClass: 'brand-vscode' },
      { name: 'Vercel', logo: SiVercel, brandClass: 'brand-vercel' },
      { name: 'ChatGPT', logo: SiOpenai, brandClass: 'brand-chatgpt' },
      { name: 'Perplexity', logo: SiPerplexity, brandClass: 'brand-perplexity' },
      { name: 'Claude', logo: SiClaude, brandClass: 'brand-claude' },
      { name: 'Gemini', logo: SiGooglegemini, brandClass: 'brand-gemini' },
      { name: 'Anti-Gravity', logo: AntiGravityLogo, brandClass: 'brand-antigravity' },
    ],
  },
]

function App() {
  const [activeNav, setActiveNav] = useState('Home')

  const handleNavClick = (event, item) => {
    event.preventDefault()
    setActiveNav(item.label)
    document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="portfolio-shell">
      <section id="home" className="hero-section">
        <div className="hero-bg" />
        <div className="page-frame hero-frame">
          <header className="site-header">
            <a href="#home" className="brand">
              <span className="brand-icon">
                <CodeIcon />
              </span>
              <span>
                CodeWith<span>Raj</span>
              </span>
            </a>

            <nav className="nav-links">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.target}`}
                  onClick={(event) => handleNavClick(event, item)}
                  className={activeNav === item.label ? 'active' : ''}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hire-button"
              onClick={(event) => handleNavClick(event, { label: 'Contact', target: 'contact' })}
            >
              <PaperPlaneIcon />
              Hire Me
            </a>
          </header>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="intro-line">
                Hi, I'm
                <span />
              </p>
              <h1>
                Linmalayraj <strong>Kumar</strong>
              </h1>
              <h2>
                MERN Stack <strong>Developer</strong>
              </h2>
              <p className="hero-description">
                I build fast, scalable and user-friendly web applications using MongoDB,
                Express.js, React and Node.js.
              </p>

              <div className="hero-actions">
                <a
                  href="#projects"
                  className="primary-action"
                  onClick={(event) => handleNavClick(event, { label: 'Projects', target: 'projects' })}
                >
                  View My Work
                  <ArrowRightIcon />
                </a>
                <a href={resumePdf} className="secondary-action" download>
                  Download Resume
                  <DownloadIcon />
                </a>
              </div>

              <div className="social-area">
                <p>Connect with me</p>
                <div className="social-links">
                  <a href={contactDetails.githubProfile} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                    <GithubIcon />
                  </a>
                  <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-portrait">
              <div className="profile-glow" />
              <div className="profile-ring" />
              <div className="profile-flare" />
              <div className="profile-photo">
                <img src={profileImage} alt="Linmalayraj Kumar" />
              </div>
            </div>
          </div>

          <div className="scroll-cue">
            <span className="mouse">
              <span />
            </span>
            Scroll Down
            <i />
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="page-frame">
          <div className="about-content">
            <p className="about-kicker">
              About Me
              <span />
            </p>
            <h2>
              MERN Stack <strong>Developer.</strong>
            </h2>

            <div className="about-text">
              <p>
                I'm Linmalayraj Kumar, a passionate MERN Stack Developer who loves turning ideas
                into fast, scalable, and user-friendly web applications.
              </p>
              <p>
                I enjoy solving real-world problems with clean code and modern technologies.
              </p>
              <p>
                With a strong foundation in MongoDB, Express.js, React, and Node.js, I build
                full-stack applications that are efficient, secure, and performance-driven. I
                focus on writing maintainable code, creating intuitive user experiences, and
                delivering solutions that make an impact.
              </p>
              <p>
                I'm constantly learning, exploring new tools, and taking on challenging projects
                that help me grow and stay up to date in this ever-evolving tech world.
              </p>
            </div>

            <div className="about-actions">
              <a href={resumePdf} className="primary-action" download>
                Download Resume
                <DownloadIcon />
              </a>
              <a
                href="#contact"
                className="secondary-action"
                onClick={(event) => handleNavClick(event, { label: 'Contact', target: 'contact' })}
              >
                Let's Connect
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="content-section skills-section">
        <div className="page-frame">
          <div className="skills-heading">
            <p>
              <span />
              Skills
            </p>
            <h2>
              Skills & <strong>Technologies</strong>
            </h2>
            <div className="skills-intro">
              <p>I work with a modern tech stack to build fast, scalable, and secure web applications.</p>
              <p>Here are the technologies and tools I'm proficient in.</p>
            </div>
          </div>

          <div className="skills-card-grid">
            {skillGroups.map(({ title, icon: Icon, skills }) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <span className="skill-title-rule" />
                <ul>
                  {skills.map(({ name, logo: Logo, brandClass }) => (
                    <li key={name}>
                      <span className={`tech-logo ${brandClass}`}>
                        <Logo />
                      </span>
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="content-section project-section">
        <div className="page-frame">
          <div className="section-heading split-heading">
            <div>
              <p>
                <span />
                Featured Projects
              </p>
              <h2>Featured Projects</h2>
            </div>
            <a href={contactDetails.githubRepositories} className="text-link" target="_blank" rel="noreferrer">
              View All Projects
              <ArrowRightIcon />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-preview">
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
                  ) : (
                    <div className={`project-shot project-shot-${index + 1}`} />
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveDemo}>
                    Live Demo
                    <ExternalIcon />
                  </a>
                  <a href={project.github}>
                    <GithubIcon />
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <div className="page-frame">
          <div className="contact-layout">
            <div className="contact-info">
              <div className="contact-heading">
                <p>
                  <span />
                  Contact
                </p>
                <h2>
                  Contact <strong>Me</strong>
                </h2>
                <i />
              </div>

              <p className="contact-lead">
                Have a project in mind or want to collaborate?
                <br />
                I'd love to hear from you. Let's build something amazing together!
              </p>

              <div className="contact-card-list">
                <a href={contactDetails.linkedin} className="contact-card" target="_blank" rel="noreferrer">
                  <span className="contact-card-icon">
                    <LinkedinIcon />
                  </span>
                  <span>
                    <strong>LinkedIn</strong>
                    linkedin.com/in/linmalayraj-kumar62
                  </span>
                  <ExternalIcon />
                </a>
                <a href={contactDetails.githubProfile} className="contact-card" target="_blank" rel="noreferrer">
                  <span className="contact-card-icon">
                    <GithubIcon />
                  </span>
                  <span>
                    <strong>GitHub</strong>
                    github.com/RajKumar0047
                  </span>
                  <ExternalIcon />
                </a>
                <a href={`mailto:${contactDetails.email}`} className="contact-card contact-card-static">
                  <span className="contact-card-icon">
                    <MailIcon />
                  </span>
                  <span>
                    <strong>Email</strong>
                    {contactDetails.email}
                  </span>
                </a>
                <a href={`tel:${contactDetails.phone}`} className="contact-card contact-card-static">
                  <span className="contact-card-icon">
                    <PhoneIcon />
                  </span>
                  <span>
                    <strong>Phone</strong>
                    {contactDetails.phone}
                  </span>
                </a>
              </div>

              <div className="availability-card">
                <span className="contact-card-icon">
                  <PaperPlaneIcon />
                </span>
                <span>
                  <strong>
                    Let's create something <em>impactful.</em>
                  </strong>
                  I'm currently available for freelance projects and opportunities.
                </span>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-title">
                <span />
                <h3>Send a Message</h3>
              </div>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>

              <div className="form-row">
                <label>
                  <span className="label-text">
                    Your Name<strong>*</strong>
                  </span>
                  <input type="text" placeholder="Enter your name" />
                </label>
                <label>
                  <span className="label-text">
                    Your Email<strong>*</strong>
                  </span>
                  <input type="email" placeholder="Enter your email" />
                </label>
              </div>

              <label>
                <span className="label-text">Subject</span>
                <input type="text" placeholder="Enter subject" />
              </label>

              <label>
                <span className="label-text">
                  Your Message<strong>*</strong>
                </span>
                <textarea placeholder="Write your message..." rows="7" />
              </label>

              <button type="submit" className="primary-action send-message-button">
                Send Message
                <PaperPlaneIcon />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-frame footer-frame">
          <p>
            &copy; 2024 CodeWith<span>Raj</span>. All rights reserved.
          </p>
          <p>Built with React & Tailwind</p>
        </div>
      </footer>
    </main>
  )
}

function IconBase({ children, className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {children}
    </svg>
  )
}

function CodeIcon() {
  return (
    <IconBase>
      <path d="m9 18-6-6 6-6" />
      <path d="m15 6 6 6-6 6" />
      <path d="m14 4-4 20" />
    </IconBase>
  )
}

function PaperPlaneIcon() {
  return (
    <IconBase>
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    </IconBase>
  )
}

function ArrowRightIcon() {
  return (
    <IconBase>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  )
}

function DownloadIcon() {
  return (
    <IconBase>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </IconBase>
  )
}

function GithubIcon() {
  return (
    <IconBase>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-6.1a4.7 4.7 0 0 0-1.3-3.2 4.4 4.4 0 0 0-.1-3.2s-1 0-3.3 1.3a11.3 11.3 0 0 0-6 0C7 2 6 2 6 2a4.4 4.4 0 0 0-.1 3.2 4.7 4.7 0 0 0-1.3 3.2c0 4.1 3 6.1 6 6.1a4.8 4.8 0 0 0-1 3.5v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </IconBase>
  )
}

function LinkedinIcon() {
  return (
    <IconBase>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <path d="M4 4h.01" />
    </IconBase>
  )
}

function TwitterIcon() {
  return (
    <IconBase>
      <path d="M22 4.1c-.8.4-1.6.6-2.5.8a4.3 4.3 0 0 0-7.4 3v1A10.2 10.2 0 0 1 3 4.6s-4 9 5 13a11.4 11.4 0 0 1-7 2c9 5 20 0 20-11.7v-.5c.8-.6 1.5-1.3 2-2.2Z" />
    </IconBase>
  )
}

function MailIcon() {
  return (
    <IconBase>
      <path d="M4 4h16v16H4z" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  )
}

function PhoneIcon() {
  return (
    <IconBase>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </IconBase>
  )
}

function ExternalIcon() {
  return (
    <IconBase>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v7H3V3h7" />
    </IconBase>
  )
}

function MonitorIcon() {
  return (
    <IconBase>
      <path d="M3 4h18v12H3z" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="m9 10 2-2" />
      <path d="m13 8 2 2-2 2" />
    </IconBase>
  )
}

function ServerIcon() {
  return (
    <IconBase>
      <path d="M4 4h16v7H4z" />
      <path d="M4 13h16v7H4z" />
      <path d="M8 8h.01" />
      <path d="M8 17h.01" />
    </IconBase>
  )
}

function DatabaseIcon() {
  return (
    <IconBase>
      <path d="M5 6c0-2 3-4 7-4s7 2 7 4-3 4-7 4-7-2-7-4Z" />
      <path d="M5 6v6c0 2 3 4 7 4s7-2 7-4V6" />
      <path d="M5 12v6c0 2 3 4 7 4s7-2 7-4v-6" />
    </IconBase>
  )
}

function ToolsIcon() {
  return (
    <IconBase>
      <path d="m14.7 6.3 2-2a3 3 0 0 1 3.9 3.9l-2 2" />
      <path d="m9 15-6 6" />
      <path d="m14 7 3 3" />
      <path d="m5 5 4 4" />
      <path d="m2 2 6 2 2 6 9 9-2 2-9-9-6-2Z" />
    </IconBase>
  )
}

function ReactLogo() {
  return (
    <IconBase className="logo-react">
      <ellipse cx="12" cy="12" rx="9" ry="3.7" />
      <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.7" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </IconBase>
  )
}

function NextLogo() {
  return <span className="word-logo logo-next">NEXT<span>js</span></span>
}

function HtmlLogo() {
  return <span className="shield-logo logo-html">5</span>
}

function CssLogo() {
  return <span className="shield-logo logo-css">3</span>
}

function TailwindLogo() {
  return (
    <IconBase className="logo-tailwind">
      <path d="M3 12c2.2-4 5.1-5 8.6-3 1.9 1.1 3.3 1.1 4.4 0 .8-.8 1.8-1.2 3-1.2-2.2 4-5.1 5-8.6 3-1.9-1.1-3.3-1.1-4.4 0-.8.8-1.8 1.2-3 1.2Z" />
      <path d="M3 18c2.2-4 5.1-5 8.6-3 1.9 1.1 3.3 1.1 4.4 0 .8-.8 1.8-1.2 3-1.2-2.2 4-5.1 5-8.6 3-1.9-1.1-3.3-1.1-4.4 0-.8.8-1.8 1.2-3 1.2Z" />
    </IconBase>
  )
}

function JavaScriptLogo() {
  return <span className="square-logo logo-js">JS</span>
}

function NodeLogo() {
  return <span className="hex-logo logo-node">N</span>
}

function ExpressLogo() {
  return <span className="word-logo logo-express">ex</span>
}

function RestLogo() {
  return <span className="word-logo logo-rest">{'{...}'}</span>
}

function JwtLogo() {
  return <span className="burst-logo logo-jwt" />
}

function MongoLogo() {
  return (
    <IconBase className="logo-mongo">
      <path d="M12 2c5 4.2 5.2 9.8 0 17.5C6.8 11.8 7 6.2 12 2Z" fill="currentColor" stroke="none" />
      <path d="M12 7v14" />
    </IconBase>
  )
}

function MySqlLogo() {
  return <span className="word-logo logo-mysql">MySQL</span>
}

function GitGithubLogo() {
  return (
    <span className="dual-logo">
      <SiGit />
      <SiGithub />
    </span>
  )
}

function AntiGravityLogo() {
  return <span className="word-logo logo-antigravity">AG</span>
}

function PostmanLogo() {
  return <span className="circle-logo logo-postman">↗</span>
}

function VsCodeLogo() {
  return (
    <IconBase className="logo-vscode">
      <path d="m4 8 4-3 10-3v20L8 19l-4-3 5-4-5-4Z" fill="currentColor" stroke="none" />
      <path d="m9 12 9-7v14l-9-7Z" />
    </IconBase>
  )
}

function VercelLogo() {
  return <span className="triangle-logo logo-vercel" />
}

export default App

import React from 'react'
import Nav from './components/Nav.jsx'
import Link from './components/Link.jsx'
import ProficiencyList from './components/ProficiencyList.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ContactForm from './components/ContactForm.jsx'
import './App.css'
import ProfilePhoto from './components/ProfilePhoto.jsx'
const RESUME_URL = '/images/dasss.jpg'

const PROJECTS = [
  {
    image: '/images/workflow.png',
    title: 'Customer Shopping Behavior Analysis',
    description: 'End-to-end customer shopping behavior analysis using Python, SQL, and Power BI to uncover revenue drivers, customer segments, and loyalty trends for a retail business.',
    href: 'https://github.com/pundirharsh/Customer-Shopping-Behavior-Analysis.git',
  },
  {
    image: '/images/project_banner.png',
    title: 'OTT Customer Churn Analysis',
    description: ' End-to-end OTT customer churn analysis using SQL & Python — identifies high-risk subscribers, calculates revenue impact, and turns findings into business recommendations.',
    href: 'https://github.com/pundirharsh/OTT-Customer-Churn-Analysis.git',
  },
 /* {
    image: '/images/3.png',
    title: 'Consumer Goods Insights — Resume Challenge at Codebasics.io',
    description: 'Answered an ad-hoc management request with SQL queries, then presented findings through a Power BI dashboard for fast, data-informed decisions.',
    href: 'https://github.com/Abhilash17br/Project-Consumer-Goods-Ad-Hoc-Request',
  },
  {
    image: '/images/2.png',
    title: 'Revenue Insights — Hospitality Domain, Resume Challenge at Codebasics.io',
    description: 'Applied domain metrics (RevPAR, ADR, Occupancy %, RevPAR variants) to build a dynamic dashboard with drill-down analysis by region, property, and booking channel.',
    href: 'https://github.com/Abhilash17br/Project-Revenue-Insights-Hospitality-Domain',
  },
  {
    image: '/images/dasss.jpg',
    title: 'SQL — Data Exploration & Data Cleaning',
    description: 'A collection of SQL challenges spanning data loading, cleaning, and exploration, including an 8-week case study and a housing-data cleaning exercise.',
    href: 'https://github.com/Abhilash17br/SQL-Data-Exploration-Data-Cleaning',
  }, */
]

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand" href="#about">
            <span className="brand__name">Harshvardhan Pundir</span>
            <span className="brand__role">Data Analyst</span>
          </a>
          <Nav />
        </div>
      </header>

      <main id="main">
        <section id="about" className="section hero">
          <div className="container hero__grid">
            <ProfilePhoto
              src="/images/1000046037.png"
              alt="Portrait of Harshvardhan Pundir"
              initials="H"
            />
            <div>
              <p className="eyebrow">Hi, I'm HARSHVARDHAN PUNDIR</p>
              <h1>I turn raw data into decisions.</h1>
              <p className="hero__lede">
                I help organizations unleash the power of data to solve business problems. My project
                experience spans Business Intelligence, SQL, and Python, with a primary focus on data
                analytics — statistical analysis, programming, and visualization aimed at driving
                business outcomes.
              </p>
              <div className="hero__actions">
                <Link href={RESUME_URL} variant="cta" className="button button--primary">Résumé (PDF)</Link>
                <Link href="#projects" variant="cta" className="button button--ghost">View projects</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="proficiency" className="section">
          <div className="container">
            <h2>Proficiency</h2>
            <p>
              As a data analyst, I work across analytical tools, programming languages, and technical
              skills that turn raw data into decisions stakeholders can act on.
            </p>
            <ProficiencyList />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2>Project Experience</h2>
            <p>Selected work demonstrating technical skills, problem-solving, and business acumen.</p>
            <div className="card-grid">
              {PROJECTS.map(p => <ProjectCard key={p.href} {...p} />)}
            </div>
            <p className="more-projects">
              <Link href="https://github.com/pundirharsh?tab=repositories">See more projects on GitHub</Link>
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact__grid">
            <div>
              <h2>Contact me</h2>
              <p>Based in Noida, India 🌎</p>
              <ul className="social-list">
                <li><Link href="">LinkedIn</Link></li>
                <li><Link href="https://github.com/pundirharsh">GitHub</Link></li>
                <li><Link href="mailto:harshvardhanpundir332@gmail.com" external>Email</Link></li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© Harsh. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

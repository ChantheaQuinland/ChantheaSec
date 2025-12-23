import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Pertinent Spectacular Mouse</title>
        <meta property="og:title" content="Pertinent Spectacular Mouse" />
        <link
          rel="canonical"
          href="https://pertinent-spectacular-mouse-h17pet.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-section">
        <video
          src="https://videos.pexels.com/video-files/11584395/11584395-hd_1280_720_60fps.mp4"
          loop="true"
          muted="true"
          poster="https://images.pexels.com/videos/11584395/pictures/preview-0.jpeg"
          autoPlay="true"
          playsInline="true"
          className="hero-bg-video"
        ></video>
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">System Status: Operational</span>
            <h1 className="hero-title">
              <span>
                {' '}
                CipherFolio: Securing the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-thq-hero-accent-text-elm">
                Digital Frontier
              </span>
            </h1>
            <p className="hero-subtitle">
              Cybersecurity Student &amp; Ethical Hacker. Defending networks
              through offensive research and defensive engineering.
            </p>
            <div className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <div className="hero-stat-text">
                  <span className="hero-stat-value">Top 1%</span>
                  <span className="hero-stat-label">TryHackMe</span>
                </div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path>
                      <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path>
                    </g>
                  </svg>
                </div>
                <div className="hero-stat-text">
                  <span className="hero-stat-value">5+ Wins</span>
                  <span className="hero-stat-label">CTF Competitions</span>
                </div>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#projects">
                <div className="btn btn-primary btn-lg">
                  <span>View Projects</span>
                </div>
              </a>
              <a href="#skills">
                <div className="btn-outline btn btn-lg">
                  <span>Core Skills</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-terminal">
              <div className="hero-terminal-header">
                <span className="hero-dot"></span>
                <span className="hero-dot"></span>
                <span className="hero-dot"></span>
              </div>
              <div className="hero-terminal-body">
                <p className="hero-code-line">
                  <span className="home-thq-hero-code-prompt-elm1">$</span>
                  <span>
                    {' '}
                    whoami
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
                <p className="hero-code-output">cipher_student</p>
                <p className="hero-code-line">
                  <span className="home-thq-hero-code-prompt-elm2">$</span>
                  <span>
                    {' '}
                    cat accomplishments.txt
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
                <ul className="hero-code-list">
                  <li>
                    <span>&gt; HTB Pro Lab: Genesis Cleared</span>
                  </li>
                  <li>
                    <span>&gt; Internship @ CyberGuard Systems</span>
                  </li>
                  <li>
                    <span>
                      &gt; Tool: &apos;RavenScan&apos; Vulnerability Automator
                    </span>
                  </li>
                </ul>
                <p className="hero-code-line">
                  <span className="home-thq-hero-code-prompt-elm3">$</span>
                  <span>
                    {' '}
                    _
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="about-container">
          <div className="about-media">
            <div className="about-image-wrapper">
              <img
                alt="Cybersecurity Student Portrait"
                src="https://images.pexels.com/photos/5474035/pexels-photo-5474035.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="about-image"
              />
              <div className="about-image-overlay"></div>
            </div>
          </div>
          <div className="about-content">
            <h2 className="section-title">
              <span>
                {' '}
                The Mind Behind
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-thq-about-highlight-elm">The Code</span>
            </h2>
            <p className="section-content">
              Currently pursuing my B.S. in Cybersecurity at the Global
              Institute of Technology, I specialize in the intersection of Red
              Team operations and automated defense. My journey started with a
              fascination for how systems break, which evolved into a mission to
              make them unshakeable.
            </p>
            <div className="about-details">
              <div className="about-detail-card">
                <h3 className="about-detail-title">Focus Areas</h3>
                <p className="about-detail-text">
                  Penetration Testing, Network Security, Malware Analysis, and
                  Cloud Security (AWS/Azure).
                </p>
              </div>
              <div className="about-detail-card">
                <h3 className="about-detail-title">Current Goals</h3>
                <p className="about-detail-text">
                  Achieving OSCP certification and contributing to open-source
                  security frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="section-title">Key Milestones</h2>
            <p className="section-subtitle">
              Verified achievements and ongoing professional development.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path>
                </svg>
              </div>
              <h3 className="feature-title">CTF Podium Finishes</h3>
              <p className="section-content">
                Placed 2nd in the National Collegiate Cyber Defense Competition
                (NCCDC) Regional Qualifiers.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="feature-title">CompTIA Security+</h3>
              <p className="section-content">
                Certified professional with deep understanding of core security
                principles and implementation.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 19h8M4 17l6-6l-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="feature-title">Python for Security</h3>
              <p className="section-content">
                Expertise in developing custom exploits, scrapers, and network
                analysis tools using Python.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                      width="18"
                      height="11"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </g>
                </svg>
              </div>
              <h3 className="feature-title">OSCP in Progress</h3>
              <p className="section-content">
                Currently training for the Offensive Security Certified
                Professional exam, focusing on OSCP labs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
                    <rect x="4" y="4" rx="2" width="16" height="16"></rect>
                    <rect x="8" y="8" rx="1" width="8" height="8"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="feature-title">Cloud Sec Intern</h3>
              <p className="section-content">
                Completed a 6-month internship at CloudGuard, managing IAM
                policies and VPC security.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="feature-title">Tool Development</h3>
              <p className="section-content">
                Author of &apos;NetWatch&apos;, a lightweight Go-based intrusion
                detection script for home labs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="showcase-section">
        <div className="showcase-container">
          <div className="showcase-item">
            <div className="showcase-media">
              <img
                alt="Vulnerability Scanner Project"
                src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="showcase-img"
              />
              <div className="showcase-overlay">
                <h3 className="showcase-title">Project: AegisScan</h3>
                <p className="showcase-desc">
                  A custom vulnerability scanner utilizing Nmap scripts and
                  Python for automated reporting.
                </p>
                <a href="#">
                  <div className="btn btn-sm btn-secondary">
                    <span>Full Writeup</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="showcase-item">
            <div className="showcase-media">
              <img
                alt="Malware Analysis Project"
                src="https://images.pexels.com/photos/33158875/pexels-photo-33158875.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="showcase-img"
              />
              <div className="showcase-overlay">
                <h3 className="showcase-title">Project: Malware Sandbox</h3>
                <p className="showcase-desc">
                  Isolated lab environment for dynamic analysis of recent
                  ransomware strains.
                </p>
                <a href="#">
                  <div className="btn btn-sm btn-secondary">
                    <span>View Lab Docs</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="showcase-item">
            <div className="showcase-media">
              <img
                alt="Network Defenses Project"
                src="https://images.pexels.com/photos/9951077/pexels-photo-9951077.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="showcase-img"
              />
              <div className="showcase-overlay">
                <h3 className="showcase-title">Project: ZeroTrust Home</h3>
                <p className="showcase-desc">
                  Implementation of Zero Trust Architecture in a residential
                  network using pfSense.
                </p>
                <a href="#">
                  <div className="btn btn-sm btn-secondary">
                    <span>Architecture Map</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-header">
            <h2 className="section-title">Latest Intel</h2>
            <p className="section-subtitle">
              Technical writeups and CTF walkthroughs.
            </p>
          </div>
          <div className="blog-rail">
            <article className="blog-card">
              <div className="blog-card-content">
                <span className="blog-date">March 15, 2025</span>
                <h3 className="blog-card-title">Bypassing WAFs with Unicode</h3>
                <p className="section-content">
                  Exploring how non-standard character encoding can slip past
                  modern web application firewalls.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-card-content">
                <span className="blog-date">Feb 28, 2025</span>
                <h3 className="blog-card-title">
                  HTB: &apos;Stalker&apos; Writeup
                </h3>
                <p className="section-content">
                  A detailed walkthrough of gaining user and root access on the
                  Stalker machine using SQLi.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="blog-card">
              <div className="blog-card-content">
                <span className="blog-date">Jan 12, 2025</span>
                <h3 className="blog-card-title">Securing Docker Containers</h3>
                <p className="section-content">
                  Best practices for hardening containerized applications and
                  preventing lateral movement.
                </p>
                <a href="#">
                  <div className="btn-link">
                    <span>Read More</span>
                  </div>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <div className="gallery-rail">
          <div className="gallery-item">
            <img
              alt="Certification Badge 1"
              src="https://images.pexels.com/photos/14000470/pexels-photo-14000470.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-badge"
            />
          </div>
          <div className="gallery-item">
            <img
              alt="Certification Badge 2"
              src="https://images.pexels.com/photos/9783360/pexels-photo-9783360.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-badge"
            />
          </div>
          <div className="gallery-item">
            <img
              alt="Certification Badge 3"
              src="https://images.pexels.com/photos/14019734/pexels-photo-14019734.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-badge"
            />
          </div>
          <div className="gallery-item">
            <img
              alt="Certification Badge 4"
              src="https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-badge"
            />
          </div>
          <div className="gallery-item">
            <img
              alt="Certification Badge 5"
              src="https://images.pexels.com/photos/5473952/pexels-photo-5473952.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-badge"
            />
          </div>
          <div className="gallery-item">
            <img
              alt="Certification Badge 6"
              src="https://images.pexels.com/photos/16004754/pexels-photo-16004754.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="gallery-badge"
            />
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <div className="cta-content">
              <h2 className="section-title">
                <span>
                  {' '}
                  Ready to
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-thq-cta-accent-elm">Secure</span>
                <span>
                  {' '}
                  the Future?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h2>
              <p className="section-content">
                I&apos;m currently seeking internship and entry-level
                opportunities in Red Teaming and Security Engineering.
                Let&apos;s build something unhackable.
              </p>
              <div className="cta-actions">
                <a href="mailto:cipher@folio.com?subject=">
                  <div className="btn btn-primary btn-xl">
                    <span>Contact Now</span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn btn-secondary btn-xl">
                    <span>Download CV</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="cta-visual">
              <svg
                width="120"
                xmlns="http://www.w3.org/2000/svg"
                height="120"
                viewBox="0 0 24 24"
                className="cta-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12l2 2l4-4"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<script defer data-name="cipher-folio-interactivity">
(function(){
  // Parallax effect for hero content
  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset
    const heroContent = document.querySelector(".hero-content")
    const heroVisual = document.querySelector(".hero-visual")

    if (heroContent && heroVisual) {
      heroContent.style.transform = \`translateY(\${scroll * 0.2}px)\`
      heroVisual.style.transform = \`translateY(\${scroll * 0.1}px)\`
    }
  })

  // Staggered reveal for feature cards
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        entry.target.style.transitionDelay = \`\${index * 100}ms\`
      }
    })
  }, observerOptions)

  document.querySelectorAll(".feature-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    observer.observe(card)
  })

  // Horizontal scroll for blog and gallery on mouse wheel
  const rails = document.querySelectorAll(".blog-rail, .gallery-rail")
  rails.forEach((rail) => {
    rail.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        rail.scrollLeft += e.deltaY
      }
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon41"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text30">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home

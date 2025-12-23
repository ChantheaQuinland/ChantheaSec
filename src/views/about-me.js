import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './about-me.css'

const AboutMe = (props) => {
  return (
    <div className="about-me-container1">
      <Helmet>
        <title>About-Me - Pertinent Spectacular Mouse</title>
        <meta
          property="og:title"
          content="About-Me - Pertinent Spectacular Mouse"
        />
        <link
          rel="canonical"
          href="https://pertinent-spectacular-mouse-h17pet.teleporthq.app/about-me"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="about-me-hero-section">
        <div className="hero-media-wrapper">
          <img
            alt="Cybersecurity Student Portrait"
            src="https://images.pexels.com/photos/5474035/pexels-photo-5474035.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            className="hero-bg-media"
          />
          <div className="about-me-hero-overlay"></div>
        </div>
        <div className="hero-content-container">
          <div className="about-me-hero-content-block">
            <h1 className="about-me-hero-title hero-title">
              Chanthea Quinland
            </h1>
            <p className="hero-subtitle about-me-hero-subtitle">
              Cybersecurity Defensive Security Studen in Training
            </p>
            <div className="about-me-thq-hero-badges-elm hero-badges"></div>
            <p className="section-content hero-tagline">
              Defending the digital frontier, one packet at a time. Specializing
              in threat detection and vulnerability assessment.
            </p>
            <div className="about-me-hero-actions">
              <a href="#projects">
                <div className="btn btn-primary btn-lg">
                  <span>View My Lab</span>
                </div>
              </a>
              <a href="#contact">
                <div className="btn-outline btn btn-lg">
                  <span>Let&apos;s Connect</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="about-me-about-section">
        <div className="about-me-about-container">
          <div className="about-grid">
            <div className="about-visual">
              <img
                alt="Working on code"
                src="https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="about-me-about-image"
              />
              <div className="about-visual-accent"></div>
            </div>
            <div className="about-content">
              <h2 className="section-title">The Mind Behind the Mesh</h2>
              <p className="section-subtitle">
                Bridging curiosity with critical defense.
              </p>
              <div className="section-content about-text-stack">
                <p>
                  I am currently pursuing a B.S. in Cybersecurity, focusing on
                  digital forensics and network resilience. My journey began not
                  with a textbook, but with a curiosity about how a simple Wi-Fi
                  password could be the only thing standing between privacy and
                  exposure.
                </p>
                <p>
                  Relevant coursework includes Cryptography, Linux
                  Administration, and Ethical Hacking. I believe that security
                  is not just a technical challenge, but a human one.
                </p>
                <p>
                  When I&apos;m not in the terminal, you&apos;ll find me at
                  local CTF competitions or explaining to my grandmother why she
                  shouldn&apos;t click on &quot;urgent&quot; lottery emails.
                  That human element—protecting real people—is what drives my
                  passion every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="timeline-section">
        <div className="timeline-container">
          <div className="about-me-timeline-header">
            <h2 className="section-title">Mission Roadmap</h2>
            <p className="section-subtitle">
              Milestones and future objectives.
            </p>
          </div>
          <div className="timeline-vertical">
            <div className="about-me-timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <span className="about-me-timeline-date">2023 - Present</span>
                <h3 className="timeline-item-title">
                  B.S. Cybersecurity Major
                </h3>
                <p className="section-content">
                  Focusing on Infrastructure Security and Advanced Threat
                  Analysis. Maintaining a 3.8 GPA while leading the campus Cyber
                  Defense Club.
                </p>
              </div>
            </div>
            <div className="about-me-timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <span className="about-me-timeline-date">Q3 2024</span>
                <h3 className="timeline-item-title">
                  CompTIA Security+ Certification
                </h3>
                <p className="section-content">
                  Currently preparing for the SY0-701 exam to validate
                  foundational security knowledge and implementation skills.
                </p>
              </div>
            </div>
            <div className="about-me-timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <span className="about-me-timeline-date">2025 Goal</span>
                <h3 className="timeline-item-title">
                  Security Operations Intern
                </h3>
                <p className="section-content">
                  Seeking a summer internship in a SOC environment to apply
                  classroom theory to real-world incident response and
                  monitoring.
                </p>
              </div>
            </div>
            <div className="about-me-timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <span className="about-me-timeline-date">Long-term</span>
                <h3 className="timeline-item-title">OSCP Specialist</h3>
                <p className="section-content">
                  Aiming for the Offensive Security Certified Professional
                  designation to pivot into professional Red Teaming and
                  deep-dive pentesting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills-section">
        <div className="skills-container">
          <div className="skills-header">
            <h2 className="section-title">Technical Arsenal</h2>
            <p className="section-subtitle">
              Tools and methodologies I&apos;ve mastered.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19h8M4 17l6-6l-6-6"></path>
                </svg>
              </div>
              <h3 className="skill-title">Kali Linux</h3>
              <p className="section-content">
                Proficient in using the industry-standard OS for penetration
                testing, digital forensics, and security auditing.
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="16" y="16" rx="1" width="6" height="6"></rect>
                    <rect x="2" y="16" rx="1" width="6" height="6"></rect>
                    <rect x="9" y="2" rx="1" width="6" height="6"></rect>
                    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path>
                  </g>
                </svg>
              </div>
              <h3 className="skill-title">Wireshark</h3>
              <p className="section-content">
                Experienced in deep packet inspection, traffic analysis, and
                identifying anomalous network behavior patterns.
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 18l6-6l-6-6M8 6l-6 6l6 6"></path>
                </svg>
              </div>
              <h3 className="skill-title">Python Automation</h3>
              <p className="section-content">
                Developing custom scripts for automated scanning, log parsing,
                and simple exploit prototyping.
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
              <h3 className="skill-title">Metasploit</h3>
              <p className="section-content">
                Utilizing the framework for vulnerability validation and
                understanding exploitation lifecycles.
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
              <h3 className="skill-title">Nmap</h3>
              <p className="section-content">
                Advanced network mapping and service discovery techniques to map
                attack surfaces effectively.
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 10.5L8 13l2 2.5m4-5l2 2.5l-2 2.5"></path>
                    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"></path>
                  </g>
                </svg>
              </div>
              <h3 className="skill-title">Splunk</h3>
              <p className="section-content">
                Familiarity with SIEM concepts, log ingestion, and creating
                basic dashboards for monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="about-me-portfolio-section">
        <div className="portfolio-container">
          <div className="about-me-portfolio-header">
            <h2 className="section-title">Security Lab</h2>
            <p className="section-subtitle">
              Recent projects and technical deep-dives.
            </p>
          </div>
          <div className="about-me-portfolio-rail">
            <div className="portfolio-card">
              <div className="portfolio-card-media">
                <img
                  alt="Project 1"
                  src="https://images.pexels.com/photos/1181332/pexels-photo-1181332.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-item-title">Zero-Trust Network Lab</h3>
                <p className="section-content">
                  Designed and implemented a virtualized zero-trust environment
                  using pfSense and VLAN segmentation.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Read Case Study</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-card-media">
                <img
                  alt="Project 2"
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-item-title">
                  Malware Sandbox Analysis
                </h3>
                <p className="section-content">
                  Automated malware analysis environment using Cuckoo Sandbox to
                  observe behavioral changes in isolated VMs.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>View Documentation</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-card">
              <div className="portfolio-card-media">
                <img
                  alt="Project 3"
                  src="https://images.pexels.com/photos/6195663/pexels-photo-6195663.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
              </div>
              <div className="portfolio-card-content">
                <h3 className="portfolio-item-title">Custom Packet Sniffer</h3>
                <p className="section-content">
                  A Python-based packet sniffer developed to capture and
                  categorize HTTP/DNS traffic in real-time.
                </p>
                <a href="#">
                  <div className="btn btn-link">
                    <span>Explore Code</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="section-title">Establish Connection</h2>
            <p className="section-subtitle">
              Ready to collaborate or discuss cybersecurity trends.
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-col">
              <div className="contact-icon">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="contact-label">Email</h3>
              <p className="section-content">alex.rivera@cipherfolio.edu</p>
            </div>
            <div className="contact-col">
              <div className="contact-icon">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="12" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="contact-label">LinkedIn</h3>
              <p className="section-content">linkedin.com/in/arivera-sec</p>
            </div>
            <div className="contact-col">
              <div className="contact-icon">
                <svg
                  fill="none"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19h8M4 17l6-6l-6-6"></path>
                </svg>
              </div>
              <h3 className="contact-label">GitHub</h3>
              <p className="section-content">github.com/rivera-codes</p>
            </div>
          </div>
          <div className="contact-actions">
            <button id="openResume" className="btn btn-accent btn-xl">
              View Full Resume
            </button>
            <button id="openMessage" className="btn btn-primary btn-xl">
              Send Secure Message
            </button>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="section-title">Endorsements</h2>
            <p className="section-subtitle">
              What peers and mentors say about my work.
            </p>
          </div>
          <div className="testimonials-rail">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="section-content">
                  &quot;Alex&apos;s attention to detail during our network
                  auditing project was exceptional. They identified
                  vulnerabilities that senior students missed.&quot;
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Dr. Sarah Chen</span>
                  <span className="author-role">Cybersecurity Professor</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="section-content">
                  &quot;A reliable teammate who always takes the lead on
                  documentation and security hardening. Alex makes complex
                  topics easy to understand.&quot;
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">James Miller</span>
                  <span className="author-role">Project Teammate</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="section-content">
                  &quot;Alex has a natural instinct for threat hunting. Their
                  contribution to our campus CTF team was vital for our top-3
                  finish.&quot;
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">Leah Thompson</span>
                  <span className="author-role">Cyber Club Lead</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <dialog id="messageModal" className="secure-modal">
        <div className="modal-header">
          <h2 className="section-title">Secure Message</h2>
          <p className="section-subtitle">Encrypted communication channel</p>
        </div>
        <form
          action="#"
          method="dialog"
          data-form-id="cab46cd3-a1c4-47bc-a6dd-1f69f32be01e"
          className="modal-form"
        >
          <div className="form-group">
            <input
              type="text"
              id="thq_textinput_iS1E"
              name="textinput"
              required="true"
              placeholder="Subject"
              data-form-field-id="thq_textinput_iS1E"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              id="thq_textarea_hJgh"
              name="textarea"
              required="true"
              placeholder="Your message..."
              data-form-field-id="thq_textarea_hJgh"
              className="form-textarea"
            ></textarea>
          </div>
          <div className="modal-actions">
            <button
              id="closeMessage"
              name="button"
              type="button"
              data-form-field-id="closeMessage"
              className="btn-outline btn"
            >
              Cancel
            </button>
            <button
              id="thq_button_sfsa"
              name="button"
              type="submit"
              data-form-field-id="thq_button_sfsa"
              className="btn btn-primary"
            >
              Transmit
            </button>
          </div>
        </form>
      </dialog>
      <div className="about-me-container2">
        <div className="about-me-container3">
          <Script
            html={`<style>
section {
  position: relative;
  overflow: hidden;
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="about-me-container4">
        <div className="about-me-container5">
          <Script
            html={`<script defer data-name="cipherfolio-interactions">
(function(){
  const messageModal = document.getElementById("messageModal")
  const openMessageBtn = document.getElementById("openMessage")
  const closeMessageBtn = document.getElementById("closeMessage")
  const openResumeBtn = document.getElementById("openResume")

  if (openMessageBtn && messageModal) {
    openMessageBtn.addEventListener("click", () => {
      messageModal.showModal()
    })
  }

  if (closeMessageBtn && messageModal) {
    closeMessageBtn.addEventListener("click", () => {
      messageModal.close()
    })
  }

  if (openResumeBtn) {
    openResumeBtn.addEventListener("click", () => {
      alert("Accessing encrypted resume file... [Simulation Only]")
    })
  }

  // Close modal on backdrop click
  if (messageModal) {
    messageModal.addEventListener("click", (e) => {
      const dialogDimensions = messageModal.getBoundingClientRect()
      if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
        messageModal.close()
      }
    })
  }

  // Simple scroll reveal simulation
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".skill-card, .timeline-card, .portfolio-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="about-me-container6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="about-me-icon42"
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
          <span className="about-me-text9">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default AboutMe

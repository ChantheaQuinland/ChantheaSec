import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './projects.css'

const Projects = (props) => {
  return (
    <div className="projects-container1">
      <Helmet>
        <title>Projects - Pertinent Spectacular Mouse</title>
        <meta
          property="og:title"
          content="Projects - Pertinent Spectacular Mouse"
        />
        <link
          rel="canonical"
          href="https://pertinent-spectacular-mouse-h17pet.teleporthq.app/projects"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="projects-hero-section">
        <video
          src="https://videos.pexels.com/video-files/6963746/6963746-hd_1280_720_25fps.mp4"
          loop="true"
          muted="true"
          poster="https://images.pexels.com/videos/6963746/pictures/preview-0.jpg"
          autoPlay="true"
          playsInline="true"
          className="hero-video"
        ></video>
        <div className="projects-hero-overlay"></div>
        <div className="projects-hero-container">
          <div className="hero-content-block">
            <div className="projects-hero-badge">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <span className="section-subtitle">
                Student Portfolio &amp; Labs
              </span>
            </div>
            <h1 className="hero-title projects-hero-title">
              Securing the Digital Frontier
            </h1>
            <p className="hero-subtitle">
              Showcasing hands-on cybersecurity projects, penetration testing
              labs, and CTF write-ups. Explore the methodology behind the
              defense.
            </p>
            <div className="projects-hero-actions">
              <a href="#projects">
                <div className="btn btn-primary btn-lg">
                  <span>Explore Projects</span>
                </div>
              </a>
              <a href="#skills">
                <div className="btn-outline btn btn-lg">
                  <span>View Skills</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="case-studies-section">
        <div className="case-studies-header">
          <h2 className="section-title">Major Deep Dives</h2>
          <p className="section-content">
            Comprehensive analysis of complex security environments and
            remediation strategies.
          </p>
        </div>
        <div className="case-studies-rail">
          <article className="case-card">
            <div className="case-card-media">
              <img
                alt="Network Infiltration Lab"
                src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
            </div>
            <div className="case-card-content">
              <span className="case-tag">Network Security</span>
              <h3 className="section-subtitle">
                Enterprise AD Lab Infiltration
              </h3>
              <p className="section-content">
                Simulated a full-scale Active Directory compromise from initial
                foothold to Domain Admin using BloodHound and Mimikatz.
              </p>
              <ul className="case-details">
                <li className="section-content">
                  <strong>Tools:</strong>
                  <span>
                    {' '}
                    Impacket, Responder, Hashcat
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="section-content">
                  <strong>Outcome:</strong>
                  <span>
                    {' '}
                    100% compromise of target nodes
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <a href="#">
                <div className="btn btn-link">
                  <span>View Write-up</span>
                </div>
              </a>
            </div>
          </article>
          <article className="case-card">
            <div className="case-card-media">
              <img
                alt="Web Application Pentest"
                src="https://images.pexels.com/photos/5380589/pexels-photo-5380589.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
            </div>
            <div className="case-card-content">
              <span className="case-tag">Web Security</span>
              <h3 className="section-subtitle">Vulnerable E-Commerce Audit</h3>
              <p className="section-content">
                Identified critical SQL Injection and IDOR vulnerabilities in a
                custom PHP application, demonstrating data exfiltration risks.
              </p>
              <ul className="case-details">
                <li className="section-content">
                  <strong>Tools:</strong>
                  <span>
                    {' '}
                    Burp Suite, SQLmap, Python
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="section-content">
                  <strong>Outcome:</strong>
                  <span>
                    {' '}
                    patched 5 critical CVEs
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <a href="#">
                <div className="btn btn-link">
                  <span>View Write-up</span>
                </div>
              </a>
            </div>
          </article>
          <article className="case-card">
            <div className="case-card-media">
              <img
                alt="Malware Analysis"
                src="https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
            </div>
            <div className="case-card-content">
              <span className="case-tag">Forensics</span>
              <h3 className="section-subtitle">
                Ransomware Reverse Engineering
              </h3>
              <p className="section-content">
                Static and dynamic analysis of a WannaCry variant in a sandbox
                environment to identify kill-switch mechanisms.
              </p>
              <ul className="case-details">
                <li className="section-content">
                  <strong>Tools:</strong>
                  <span>
                    {' '}
                    Ghidra, x64dbg, Wireshark
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="section-content">
                  <strong>Outcome:</strong>
                  <span>
                    {' '}
                    Developed IOC detection rules
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <a href="#">
                <div className="btn btn-link">
                  <span>View Write-up</span>
                </div>
              </a>
            </div>
          </article>
          <article className="case-card">
            <div className="case-card-media">
              <img
                alt="Cloud Security"
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              />
            </div>
            <div className="case-card-content">
              <span className="case-tag">Cloud Security</span>
              <h3 className="section-subtitle">
                AWS S3 Misconfiguration Audit
              </h3>
              <p className="section-content">
                Automated scanning of cloud assets to identify public S3 buckets
                and IAM policy over-privileging.
              </p>
              <ul className="case-details">
                <li className="section-content">
                  <strong>Tools:</strong>
                  <span>
                    {' '}
                    ScoutSuite, Prowler, AWS CLI
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
                <li className="section-content">
                  <strong>Outcome:</strong>
                  <span>
                    {' '}
                    Hardened 12 cloud accounts
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </li>
              </ul>
              <a href="#">
                <div className="btn btn-link">
                  <span>View Write-up</span>
                </div>
              </a>
            </div>
          </article>
        </div>
      </section>
      <section className="portfolio-section">
        <div className="portfolio-header">
          <h2 className="section-title">Labs &amp; CTFs</h2>
          <p className="section-content">
            Rapid-fire technical demonstrations and specialized security
            challenges.
          </p>
        </div>
        <div className="portfolio-rail">
          <div className="mini-card">
            <div className="mini-icon">
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
            <h4 className="section-subtitle">Linux Privilege Escalation</h4>
            <p className="section-content">
              Exploiting SUID binaries and kernel vulnerabilities to gain root
              access.
            </p>
            <div className="mini-tags">
              <span className="tag">Linux</span>
              <span className="tag">Exploit</span>
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-icon">
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
                  <rect x="16" y="16" rx="1" width="6" height="6"></rect>
                  <rect x="2" y="16" rx="1" width="6" height="6"></rect>
                  <rect x="9" y="2" rx="1" width="6" height="6"></rect>
                  <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path>
                </g>
              </svg>
            </div>
            <h4 className="section-subtitle">Wireless Deauth Attack</h4>
            <p className="section-content">
              Demonstrating WPA2 handshake capture using Aircrack-ng suite.
            </p>
            <div className="mini-tags">
              <span className="tag">WiFi</span>
              <span className="tag">Network</span>
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-icon">
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
            <h4 className="section-subtitle">Steganography Challenge</h4>
            <p className="section-content">
              Extracting hidden payloads from digital media using LSB analysis.
            </p>
            <div className="mini-tags">
              <span className="tag">Forensics</span>
              <span className="tag">CTF</span>
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-icon">
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
                  <path d="m13 13.5l2-2.5l-2-2.5M21 21l-4.3-4.3M9 8.5L7 11l2 2.5"></path>
                  <circle r="8" cx="11" cy="11"></circle>
                </g>
              </svg>
            </div>
            <h4 className="section-subtitle">Buffer Overflow Lab</h4>
            <p className="section-content">
              Manual exploitation of a stack-based buffer overflow in C++.
            </p>
            <div className="mini-tags">
              <span className="tag">Exploit</span>
              <span className="tag">OSCP</span>
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-icon">
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
                  <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                </g>
              </svg>
            </div>
            <h4 className="section-subtitle">Phishing Simulation</h4>
            <p className="section-content">
              Setting up Gophish to test organizational security awareness.
            </p>
            <div className="mini-tags">
              <span className="tag">Social Eng.</span>
              <span className="tag">Red Team</span>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="projects-features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="section-title">Skill Mapping Matrix</h2>
            <p className="section-content">
              Cross-referencing projects with technical proficiencies and
              industry standards.
            </p>
          </div>
          <div className="skills-table-wrapper">
            <table className="skills-table">
              <thead>
                <tr>
                  <th className="section-subtitle">
                    <span>Project Category</span>
                  </th>
                  <th className="section-subtitle">
                    <span>Core Techniques</span>
                  </th>
                  <th className="section-subtitle">
                    <span>Primary Tools</span>
                  </th>
                  <th className="section-subtitle">
                    <span>Alignment</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="section-content">
                    <span>Network Pentesting</span>
                  </td>
                  <td className="section-content">
                    <span>Pivoting, Tunneling, AD Enumeration</span>
                  </td>
                  <td className="section-content">
                    <span>Metasploit, Nmap, BloodHound</span>
                  </td>
                  <td className="section-content">
                    <span>OSCP / eJPT</span>
                  </td>
                </tr>
                <tr>
                  <td className="section-content">
                    <span>Web Security</span>
                  </td>
                  <td className="section-content">
                    <span>XSS, CSRF, SQLi, JWT Bypass</span>
                  </td>
                  <td className="section-content">
                    <span>Burp Suite, OWASP ZAP</span>
                  </td>
                  <td className="section-content">
                    <span>OSWA / PortSwigger</span>
                  </td>
                </tr>
                <tr>
                  <td className="section-content">
                    <span>Digital Forensics</span>
                  </td>
                  <td className="section-content">
                    <span>Log Analysis, Memory Dumping</span>
                  </td>
                  <td className="section-content">
                    <span>Wireshark, Volatility, Autopsy</span>
                  </td>
                  <td className="section-content">
                    <span>CHFI / GCFE</span>
                  </td>
                </tr>
                <tr>
                  <td className="section-content">
                    <span>Cloud Security</span>
                  </td>
                  <td className="section-content">
                    <span>IAM Hardening, Bucket Policies</span>
                  </td>
                  <td className="section-content">
                    <span>ScoutSuite, AWS GuardDuty</span>
                  </td>
                  <td className="section-content">
                    <span>AWS Security Specialist</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className="process-container">
          <div className="process-header">
            <h2 className="section-title">Lab Methodology</h2>
            <p className="section-content">
              The systematic approach applied to every security demonstration
              and research project.
            </p>
          </div>
          <div className="steps-horizontal">
            <div className="step-item">
              <div className="step-number">
                <span>01</span>
              </div>
              <div className="step-content">
                <h5 className="section-subtitle">Reconnaissance</h5>
                <p className="section-content">
                  Passive and active information gathering to map the target
                  attack surface.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>02</span>
              </div>
              <div className="step-content">
                <h5 className="section-subtitle">Vulnerability Analysis</h5>
                <p className="section-content">
                  Scanning and identifying potential flaws using automated and
                  manual testing.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>03</span>
              </div>
              <div className="step-content">
                <h5 className="section-subtitle">Exploitation</h5>
                <p className="section-content">
                  Controlled execution of exploits to verify findings and assess
                  impact levels.
                </p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">
                <span>04</span>
              </div>
              <div className="step-content">
                <h5 className="section-subtitle">Documentation</h5>
                <p className="section-content">
                  Comprehensive reporting with remediation steps and executive
                  summaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="timeline-section">
        <div className="timeline-header">
          <h2 className="section-title">Growth Timeline</h2>
          <p className="section-content">
            Tracking the evolution of technical skills and project complexity
            over my academic journey.
          </p>
        </div>
        <div className="timeline-rail">
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <span className="timeline-date">Year 1: Foundations</span>
              <h4 className="section-subtitle">Network Basics &amp; Linux</h4>
              <p className="section-content">
                Mastered TCP/IP, subnetting, and command-line proficiency
                through CompTIA Network+ curriculum.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <span className="timeline-date">Year 2: Defensive</span>
              <h4 className="section-subtitle">SOC Analyst Training</h4>
              <p className="section-content">
                Focused on SIEM (Splunk), log analysis, and incident response
                during university hackathons.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <span className="timeline-date">Year 3: Offensive</span>
              <h4 className="section-subtitle">Penetration Testing</h4>
              <p className="section-content">
                Completed PWK course and began deep-diving into Active Directory
                and Web exploitation.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-point"></div>
            <div className="timeline-content">
              <span className="timeline-date">Year 4: Specialization</span>
              <h4 className="section-subtitle">
                Cloud &amp; Advanced Red Teaming
              </h4>
              <p className="section-content">
                Capstone project focusing on automated cloud security posture
                management (CSPM).
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-gallery-section">
        <div className="gallery-header">
          <h2 className="section-title">Live Demos</h2>
          <p className="section-content">
            Visual snapshots of exploits and tools in action within isolated lab
            environments.
          </p>
        </div>
        <div className="gallery-grid">
          <div className="projects-gallery-item">
            <img
              alt="Terminal Interaction"
              src="https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <h6 className="section-subtitle">Shell Access</h6>
              <span className="section-content">
                Reverse shell established via netcat
              </span>
            </div>
          </div>
          <div className="projects-gallery-item">
            <img
              alt="Security Monitoring"
              src="https://images.pexels.com/photos/5380594/pexels-photo-5380594.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <h6 className="section-subtitle">Traffic Analysis</h6>
              <span className="section-content">
                Wireshark packet capture analysis
              </span>
            </div>
          </div>
          <div className="projects-gallery-item">
            <img
              alt="Code Reflection"
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <h6 className="section-subtitle">Source Audit</h6>
              <span className="section-content">
                Manual code review for vulnerabilities
              </span>
            </div>
          </div>
          <div className="projects-gallery-item">
            <img
              alt="Mobile Security"
              src="https://images.pexels.com/photos/5475763/pexels-photo-5475763.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <h6 className="section-subtitle">Mobile Pentest</h6>
              <span className="section-content">
                Android application static analysis
              </span>
            </div>
          </div>
          <div className="projects-gallery-item">
            <img
              alt="Payload Generation"
              src="https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <h6 className="section-subtitle">Payload Crafting</h6>
              <span className="section-content">
                MSFVenom executable generation
              </span>
            </div>
          </div>
          <div className="projects-gallery-item">
            <img
              alt="Binary Stream"
              src="https://images.pexels.com/photos/9951077/pexels-photo-9951077.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            />
            <div className="gallery-overlay">
              <h6 className="section-subtitle">Data Exfiltration</h6>
              <span className="section-content">
                DNS Tunneling demonstration
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="projects-container2">
        <div className="projects-container3">
          <Script
            html={`<script defer data-name="projects-interactivity">
(function(){
  const rails = document.querySelectorAll(".case-studies-rail, .portfolio-rail, .timeline-rail")

  rails.forEach((rail) => {
    let isDown = false
    let startDate
    let scrollLeft

    rail.addEventListener("mousedown", (e) => {
      isDown = true
      rail.classList.add("active")
      startX = e.pageX - rail.offsetLeft
      scrollLeft = rail.scrollLeft
    })

    rail.addEventListener("mouseleave", () => {
      isDown = false
      rail.classList.remove("active")
    })

    rail.addEventListener("mouseup", () => {
      isDown = false
      rail.classList.remove("active")
    })

    rail.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - rail.offsetLeft
      const walk = (x - startX) * 2
      rail.scrollLeft = scrollLeft - walk
    })
  })

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

  document.querySelectorAll(".case-card, .mini-card, .step-item, .gallery-item").forEach((el) => {
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
        <div aria-label="Sign up to TeleportHQ" className="projects-container4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="projects-icon32"
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
          <span className="projects-text56">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Projects

import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-main-grid">
            <div className="footer-brand-col footer-column">
              <div className="footer-logo-group">
                <div className="footer-logo-icon">
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
                <span className="footer-brand-name">CipherFolio</span>
              </div>
              <p className="section-content footer-description">
                Securing the digital frontier. A showcase of offensive and
                defensive cybersecurity expertise, research, and technical
                proficiency.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div
                    aria-label="GitHub Profile"
                    className="footer-social-item"
                  >
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
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="LinkedIn Profile"
                    className="footer-social-item"
                  >
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
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle r="2" cx="4" cy="4"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Twitter Profile"
                    className="footer-social-item"
                  >
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-nav-col footer-column">
              <h2 className="section-subtitle footer-col-title">
                Quick Navigation
              </h2>
              <nav className="footer-nav-list">
                <a href="/">
                  <div className="footer-nav-link">
                    <span>Home Terminal</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Project Repository</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Security Research</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Technical Blog</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-nav-link">
                    <span>Certifications</span>
                  </div>
                </a>
              </nav>
            </div>
            <div className="footer-status-col footer-column">
              <h2 className="section-subtitle footer-col-title">
                System Contact
              </h2>
              <div className="footer-status-card">
                <div className="footer-status-header">
                  <div className="footer-status-indicator"></div>
                  <span className="footer-status-label">
                    Network Status: Secure
                  </span>
                </div>
                <p className="section-content footer-status-text">
                  Available for security auditing, penetration testing roles,
                  and collaborative research projects.
                </p>
                <a href="mailto:admin@cipherfolio.tech?subject=">
                  <div className="footer-contact-btn btn-outline btn btn-sm">
                    <svg
                      fill="none"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>
                      {' '}
                      Initialize Contact
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom-bar">
            <div className="footer-legal-group">
              <span className="footer-copyright">
                &amp;copy; 2025 CipherFolio // Encrypted Connection Established
              </span>
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Term of Service</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-terminal-status">
              <span className="footer-terminal-text">
                Last Updated: 2025.05.12_14:30:01_UTC
              </span>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes pulseIndicator {0% {opacity: 1;
transform: scale(1);}
50% {opacity: 0.5;
transform: scale(1.2);}
100% {opacity: 1;
transform: scale(1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-terminal-clock">
(function(){
  const updateTerminalTimestamp = () => {
    const terminalElement = document.querySelector(".footer-terminal-text")
    if (terminalElement) {
      const now = new Date()
      const year = now.getUTCFullYear()
      const month = String(now.getUTCMonth() + 1).padStart(2, "0")
      const day = String(now.getUTCDate()).padStart(2, "0")
      const hours = String(now.getUTCHours()).padStart(2, "0")
      const minutes = String(now.getUTCMinutes()).padStart(2, "0")
      const seconds = String(now.getUTCSeconds()).padStart(2, "0")

      terminalElement.textContent = \`Last Updated: \${year}.\${month}.\${day}_\${hours}:\${minutes}:\${seconds}_UTC\`
    }
  }

  setInterval(updateTerminalTimestamp, 1000)
  updateTerminalTimestamp()
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer

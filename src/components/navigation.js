import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-root">
        <div className="navigation-container">
          <a href="/">
            <div aria-label="CipherFolio Home" className="navigation-brand">
              <div className="navigation-logo-icon">
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
                    <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21A12 12 0 0 1 3.5 6A12 12 0 0 0 12 3"></path>
                    <path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0-2 0m1 1v2.5"></path>
                  </g>
                </svg>
              </div>
              <span className="section-title navigation-brand-name">
                ChantheaSec
              </span>
            </div>
          </a>
          <div className="navigation-links-desktop">
            <a href="/">
              <div className="navigation-link">
                <span>Resume</span>
              </div>
            </a>
            <a href="/">
              <div className="navigation-link">
                <span>Cybersecurity Labs</span>
              </div>
            </a>
            <a href="/">
              <div className="navigation-thq-navigation-link-elm3 navigation-link"></div>
            </a>
            <a href="/">
              <div className="navigation-thq-navigation-link-elm4 navigation-link"></div>
            </a>
            <a href="/">
              <div className="btn btn-primary btn-sm">
                <span>
                  Contact
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </a>
          </div>
          <button
            id="navToggle"
            aria-label="Toggle Menu"
            aria-controls="mobileOverlay"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobileOverlay" className="navigation-mobile-overlay">
        <div className="navigation-mobile-header">
          <a href="/">
            <div aria-label="CipherFolio Home" className="navigation-brand">
              <div className="navigation-logo-icon">
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
                    <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21A12 12 0 0 1 3.5 6A12 12 0 0 0 12 3"></path>
                    <path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0-2 0m1 1v2.5"></path>
                  </g>
                </svg>
              </div>
              <span className="section-title navigation-brand-name">
                CipherFolio
              </span>
            </div>
          </a>
          <button
            id="navClose"
            aria-label="Close Menu"
            className="navigation-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-content">
          <div className="navigation-links-mobile">
            <a href="/">
              <div className="navigation-mobile-link">
                <span>Portfolio</span>
              </div>
            </a>
            <a href="/">
              <div className="navigation-mobile-link">
                <span>Security Lab</span>
              </div>
            </a>
            <a href="/">
              <div className="navigation-mobile-link">
                <span>Research</span>
              </div>
            </a>
            <a href="/">
              <div className="navigation-mobile-link">
                <span>Certifications</span>
              </div>
            </a>
            <div className="navigation-mobile-cta">
              <a href="/">
                <div className="btn btn-primary btn-lg">
                  <span>Initialize Contact</span>
                </div>
              </a>
            </div>
          </div>
          <div className="navigation-status-panel">
            <div className="navigation-status-item">
              <span className="navigation-status-label">Access Level:</span>
              <span className="navigation-status-value">Root</span>
            </div>
            <div className="navigation-status-item">
              <span className="navigation-status-label">System Status:</span>
              <span className="navigation-status-value status-online">
                Operational
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const navToggle = document.getElementById("navToggle")
  const navClose = document.getElementById("navClose")
  const mobileOverlay = document.getElementById("mobileOverlay")

  const openMenu = () => {
    mobileOverlay.style.display = "flex"
    navToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    mobileOverlay.style.display = "none"
    navToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  navToggle.addEventListener("click", openMenu)
  navClose.addEventListener("click", closeMenu)

  // Close menu when clicking on a link
  const mobileLinks = mobileOverlay.querySelectorAll(".navigation-mobile-link, .btn")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Close menu on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.style.display === "flex") {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation

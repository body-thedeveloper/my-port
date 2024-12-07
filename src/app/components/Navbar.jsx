// components/Navbar.jsx
"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
         <nav className={styles.navbarWrapper}>
        <div className={styles.navbar}>
          <Link href="/" className={styles.brandWrapper}>
            <div className={styles.brandLogo}>
              jv
            </div>
            <div className={`${styles.brandLogo} ${styles.brandLogoHover}`}>
              jv
            </div>
            <span className={styles.textSpan}>.</span>
          </Link>
          <div className={styles.menuWrapper} onClick={toggleMenu}>
            <div className={styles.menuIcon}>
              {/* You'll need to replace this with the actual SVG or image for the menu icon */}
              <svg width="30" height="30" viewBox="0 0 100 100">
                <rect width="100" height="10" fill="#ffffff" />
                <rect y="30" width="100" height="10" fill="#ffffff" />
                <rect y="60" width="100" height="10" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
        
        
        <Link href="/" className={styles.logoWrapper}>
          <div className={styles.logo}>
            <span className={styles.letterJ}>j</span>
            <span className={styles.letterV}>v</span>
            <span className={styles.letterDot}>.</span>
          </div>
        </Link>
        <button onClick={toggleMenu} className={styles.menuButton}>
          <div className={styles.menuIcon}>
            <svg viewBox="0 0 70 70">
              <g>
                <g className={styles.topLine}>
                  <path d="M -0.088 -0.096 C -0.088 -0.096 29 -0.049 29 -0.049" />
                </g>
                <g className={styles.middleLine}>
                  <path d="M -29 -19.25 C -29 -19.25 29 -19.25 29 -19.25" />
                </g>
                <g className={styles.bottomLine}>
                  <path d="M -29 23.984 C -29 23.984 29 23.984 29 23.984" />
                </g>
              </g>
            </svg>
          </div>
        </button>

        </div>
      </nav>

      {isMenuOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuContent}>
            <div className={styles.menuLeft}>
              <div className={styles.menuLinks}>
                <div className={styles.menuItem}>
                  <Link href="/">Home</Link>
                </div>
                <div className={styles.menuItem}>
                  <Link href="/work">Work</Link>
                </div>
                <div className={styles.menuItem}>
                  <Link href="/about">About</Link>
                </div>
                <div className={styles.menuItem}>
                  <Link href="/blog">Blog</Link>
                </div>
                <div className={styles.menuItem}>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            </div>
            
            <div className={styles.menuRight}>
              <div className={styles.contactInfo}>
                <div className={styles.contactTitle}>
                  Let's find solutions<br />together?
                </div>
                <p className={styles.contactText}>
                  Use my contacts below if you need to put a project on the move, let's work on it!
                </p>
                <div className={styles.contactEmail}>
                  <a href="mailto:joaovdesign@gmail.com">joaovdesign(a)gmail.com</a>
                </div>
                <div className={styles.contactButton}>
                  <Link href="/contact">Contact Me</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.menuBackground}></div>
        </div>
      )}
    </>
  );
};

export default Navbar;

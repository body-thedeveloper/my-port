"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuFinal, setIsMenuFinal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      // Opening sequence
      setIsMenuOpen(true);
      setIsClosing(false);
      setTimeout(() => {
        setIsMenuFinal(true);
      }, 100);
    } else {
      // Closing sequence
      setIsClosing(true);
      setIsMenuFinal(false);
      // Keep menu open class until menu is almost closed
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 400); // Slightly before menu finishes closing
      setTimeout(() => {
        setIsClosing(false);
      }, 500); // When menu is fully closed
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsMenuFinal(false);
    }
  }, [isMenuOpen]);

  return (
    <>
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
            <div className={`${styles.menuIcon} ${isMenuOpen ? styles.menuOpen : ''}`}>
              <svg viewBox="0 0 70 70">
                <g>
                  <g className={styles.topLine}>
                    <path d="M -29 -19.25 L 29 -19.25" />
                  </g>
                  <g className={styles.middleLine}>
                    <path d="M -0.088 -0.096 L 29 -0.049" />
                  </g>
                  <g className={styles.bottomLine}>
                    <path d="M -29 23.984 L 29 23.984" />
                  </g>
                </g>
              </svg>
            </div>
          </button>
        </div>
      </nav>

      <div 
        className={`
          ${styles.menuOverlay} 
          ${isMenuOpen ? styles.menuOverlayOpen : ''} 
          ${isMenuFinal ? styles.menuOverlayFinal : ''}
          ${isClosing ? styles.menuOverlayClosing : ''}
        `}
      >
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
                Let&apos;s find solutions<br />together?
              </div>
              <p className={styles.contactText}>
                Use my contacts below if you need to put a project on the move, let&apos;s work on it!
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
    </>
  );
}

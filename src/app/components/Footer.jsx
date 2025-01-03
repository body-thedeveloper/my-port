// src/app/components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section-wrapper black-bg vertical">
      <div className="content-wrapper margin-bottom">
        <div className="_50-width align-left margin-right margin-bottom">
          <h2 className="heading2">Let's design something <span className="text-span">together?</span></h2>
          <Link href="/contact" className="button">
            Contact Me
          </Link>
        </div>
        <div className="_50-width align-left">
          <h2 className="heading2">You can find me on <span className="text-span-2">social media</span>:</h2>
          <SocialLink href="https://www.linkedin.com/in/joaoverissimodesign/" text="Linkedin" />
          <SocialLink href="https://dribbble.com/joaoverissimo" text="Dribbble" />
          <SocialLink href="https://www.instagram.com/joaoverissimo.tion/" text="Instagram" />
          <SocialLink href="https://www.facebook.com/joaoverissimodesign" text="Facebook" />
        </div>
      </div>
      <div className="copyright-text">
        Built in Webflow.<br/>Copyright © 2020 João Veríssimo. All rights reserved.
      </div>
    </footer>
  );
}

function SocialLink({ href, text }) {
  return (
    <a href={href} rel="noopener" target="_blank" className="heading6 white-text margin-bottom footer-link">
      {text}
    </a>
  );
}

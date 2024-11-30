// src/app/components/About.jsx
import Link from 'next/link';

export default function About() {
  return (
    <section className="section-wrapper yellow-bg">
      <div id="about-me" className="content-wrapper vertical">
        <h2 className="heading2 black-text bold">
          Hey, there! I'm a Motion & Interaction Designer based in Viseu, Portugal. I focus on animation and Webflow development.
        </h2>
        <Link href="/about" className="button-black">
          More About Me
        </Link>
      </div>
    </section>
  );
}

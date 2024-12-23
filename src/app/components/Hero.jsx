"use client"
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Motion & Interaction Reel.",
      category: "Motion Graphics",
      description: "A short video showcasing my selected work.",
      videoSrc: "https://cdn.prod.website-files.com/5e2dfeced2e067d6e5b68c94/5e655481098d4fe12e8676fb_JoaoVerissimoReel_02_webpreview_04-transcode.mp4"
    },
    // Add more slides here
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <header className={styles.heroSectionWrapper}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slide}>
          <div className={styles.contentWrapperSlider}>
            <div className={styles.leftContent}>
              <div className={`${styles.heading1Wrapper} ${styles.whiteText}`}>
                <div className={`${styles.heroHInteraction} ${styles.delay1}`}>
                  <h1 className={styles.heading1Hero}>{slides[currentSlide].title}</h1>
                </div>
              </div>
              <div className={styles.serviceWrapper}>
                <div className={`${styles.heroHInteraction} ${styles.delay2}`}>
                  <div className={styles.serviceLine}></div>
                </div>
                <div className={styles.heading6Wrapper}>
                  <div className={`${styles.heroHInteraction} ${styles.delay2}`}>
                    <h2 className={styles.heading6Hero}>{slides[currentSlide].category}</h2>
                  </div>
                </div>
              </div>
              <div className={styles.paragraphWrapper}>
                <div className={`${styles.heroHInteraction} ${styles.delay3}`}>
                  <p className={styles.paragraphHero}>{slides[currentSlide].description}</p>
                </div>
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.innerWrap}>
                <video 
                  className={styles.innerWrapVideo}
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={slides[currentSlide].videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sliderNav}>
        <button className={styles.arrow} onClick={prevSlide}>&#8249;</button>
        <button className={styles.arrow} onClick={nextSlide}>&#8250;</button>
      </div>
      <div className={styles.buttonWrapper}>
        <Link href="/work" className={styles.button}>
          See All Projects
          <div className={styles.buttonBg}></div>
        </Link>
      </div>
    </header>
  );
}

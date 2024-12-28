"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuFinal, setIsMenuFinal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  const slides = [
    {
      title: "Motion &\nInteraction\nReel.",
      category: "Motion Graphics",
      description: "A short video showcasing my selected work.",
      videoSrc: "https://cdn.prod.website-files.com/5e2dfeced2e067d6e5b68c94/5e655481098d4fe12e8676fb_JoaoVerissimoReel_02_webpreview_04-transcode.mp4",
      posterSrc: "https://cdn.prod.website-files.com/5e2dfeced2e067d6e5b68c94/5e655481098d4fe12e8676fb_JoaoVerissimoReel_02_webpreview_04-poster-00001.jpg"
    },
    {
      title: "Video Simulmedia.",
      category: "Motion Graphics",
      description: "A promotional video for Simulmedia's platform.",
      videoSrc: "https://cdn.prod.website-files.com/5e2dfeced2e067d6e5b68c94/5e66b80e763c75afe5655d2f_simulmedia-output-01-2-transcode.mp4",
      posterSrc: "https://cdn.prod.website-files.com/5e2dfeced2e067d6e5b68c94/5e66b80e763c75afe5655d2f_simulmedia-output-01-2-poster-00001.jpg"
    },
    {
      title: "Interactions Magicians.",
      category: "Animated Interactions",
      description: "Animation concepts for the Magicians microsite promoting the series.",
      videoSrc: "https://cdn.prod.website-files.com/5e2dfeced2e067d6e5b68c94/5e66b813f31cca827bf66d43_magicians_01-output-02-transcode.mp4",
      posterSrc: "https://cdn.prod.website-files.com/5e2dfeced2e067d6e5b68c94/5e66b813f31cca827bf66d43_magicians_01-output-02-poster-00001.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.sliderWrapper} role="region" aria-label="carousel">
      <div className={styles.sliderMask}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${currentSlide === index ? styles.activeSlide : ''}`}
            aria-hidden={currentSlide !== index}
            role="group"
            aria-label={`${index + 1} of ${slides.length}`}
          >
            <div className={styles.contentWrapperSlider}>
              <div className={styles.leftContent}>
                <Link href="#" className={styles.heading1Wrapper}>
                  <div className={`${styles.heroHInteraction} ${styles.delay1}`}>
                    <h1 className={styles.heading1Hero}>{slide.title}</h1>
                  </div>
                </Link>
                
                <div className={styles.serviceWrapper}>
                  <div className={`${styles.heroHInteraction} ${styles.delay2}`}>
                    <div className={`${styles.serviceLine} ${styles.colorYellow}`}></div>
                  </div>
                  <div className={styles.heading6Wrapper}>
                    <div className={`${styles.heroHInteraction} ${styles.delay2}`}>
                      <h2 className={styles.heading6Hero}>{slide.category}</h2>
                    </div>
                  </div>
                </div>

                <div className={styles.paragraphWrapper}>
                  <div className={`${styles.heroHInteraction} ${styles.delay3}`}>
                    <p className={styles.paragraphHero}>{slide.description}</p>
                  </div>
                </div>
              </div>

              <div className={styles.rightContent}>
                <Link href="#" className={styles.innerWrap} aria-label="watch reel">
                  <div className={styles.videoWrapper}>
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className={styles.innerWrapVideo}
                      poster={slide.posterSrc}
                    >
                      <source src={slide.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.sliderNav}>
        <button 
          id="left-arrow-slider"
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          <div className={styles.arrowIcon}></div>
        </button>
        <button 
          id="right-arrow-slider"
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          aria-label="Next slide"
        >
          <div className={styles.arrowIcon}></div>
        </button>
      </div>

      <div className={styles.slideNav}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.slideNavDot} ${currentSlide === index ? styles.slideNavDotActive : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <Link href="/work" className={styles.button}>
          See All Projects
          <div className={styles.buttonBg}></div>
        </Link>
      </div>
    </div>
  );
}

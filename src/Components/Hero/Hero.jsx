import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__overlay'></div>
      <div className='container'>
        <div className='hero__container'>
          <span className='hero__eyebrow'>Discover your place</span>
          <h1 className='hero__title'>
            Explore The Best <em>Beautiful Beaches</em>
          </h1>
          <button className='hero__btn'>
            <span>Explore</span>
          </button>

          <div className='hero__socials'>
            <a href='#' className='hero__social-link' aria-label='Twitter'>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 4.5c-.85.38-1.75.63-2.7.75a4.7 4.7 0 0 0 2.06-2.6 9.4 9.4 0 0 1-2.98 1.14 4.68 4.68 0 0 0-8 4.27A13.28 13.28 0 0 1 1.64 3.16a4.68 4.68 0 0 0 1.45 6.25 4.65 4.65 0 0 1-2.12-.59v.06a4.68 4.68 0 0 0 3.75 4.59 4.7 4.7 0 0 1-2.11.08 4.68 4.68 0 0 0 4.37 3.25A9.39 9.39 0 0 1 0 19.54a13.24 13.24 0 0 0 7.17 2.1c8.6 0 13.31-7.13 13.31-13.31 0-.2 0-.41-.02-.61A9.5 9.5 0 0 0 23 4.5z"/>
              </svg>
            </a>
            <a href='#' className='hero__social-link' aria-label='Facebook'>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
            <a href='#' className='hero__social-link' aria-label='Instagram'>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.28 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <svg className='hero__wave' viewBox="0 0 1440 90" preserveAspectRatio="none">
        <path d="M0,40 C280,90 480,0 720,30 C960,60 1160,10 1440,50 L1440,90 L0,90 Z" fill="#F7F4EE"/>
      </svg>
    </section>
  )
}

export default Hero
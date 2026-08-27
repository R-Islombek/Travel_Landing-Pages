import React, { useState, useEffect } from 'react';
import Logo from "./images/logo.png"
import "./Header.css"

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setOpen(!open);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

  return (
     <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
          <div className='container'>
               <div className="header__container">
                     <a href="#" className='header__logo'>Travel</a>
                      <ul className={`header__list ${open ? "show": ""}`}>
                           <li><a className='header__link' href="#">Home</a></li>
                           <li><a className='header__link' href="#">About</a></li>
                           <li><a className='header__link' href="#">Discover</a></li>
                           <li><a className='header__link' href="#">Place</a></li>
                      </ul>
                      <div className={`bars ${open ? "active" : ""}`} onClick={toggleMenu}>
                           <div className="bar"></div>
                           <div className="bar"></div>
                           <div className="bar"></div>
                      </div>
               </div>
          </div>
     </header>
  )
}

export default Header
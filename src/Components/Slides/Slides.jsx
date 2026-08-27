import React from 'react';
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import "./Slides.css";

const Slides = () => {
  return (
    <section className='slides'>
      <div className="container">
        <div className="slides__container">
          <h2 className='slides__title'>Discover The Most Attractive Places</h2>
          <ul className='slides__list'>
            <li className='slides__item'>
              <img src={card1} alt="Pakis Beach" className='slides__img' />
              <div className='slides__content'>
                <h3 className='slides__card-title'>Pakis Beach</h3>
                <p className='slides__card-text'>Karawang, Indonesian</p>
              </div>
            </li>
            <li className='slides__item'>
              <img src={card2} alt="Suluban Beach" className='slides__img' />
              <div className='slides__content'>
                <h3 className='slides__card-title'>Suluban Beach</h3>
                <p className='slides__card-text'>Bali, Indonesian</p>
              </div>
            </li>
            <li className='slides__item'>
              <img src={card3} alt="Karimun Java" className='slides__img' />
              <div className='slides__content'>
                <h3 className='slides__card-title'>Karimun Java</h3>
                <p className='slides__card-text'>Jawa Tengah, Indonesian</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Slides;
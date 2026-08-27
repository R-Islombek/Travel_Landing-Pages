import React from 'react';
import rasim1 from "./images/rasim1.png";
import rasim2 from "./images/rasim2.png";
import rasim3 from "./images/rasim3.png";
import "./Place.css";

const Place = () => {
  return (
    <section className='place'>
      <div className="container">
        <div className="place__container">
          <h2 className='place__title'>Explore Beautiful Place</h2>
          <ul className='place__list'>
            <li className='place__item'>
              <img src={rasim1} alt="Drini Beach" className='place__img' />
              <div className='place__card-content'>
                <h3 className='place__title-name'>Drini Beach</h3>
                <p className='place__text'>Yogyakarta, Indonesia</p>
              </div>
            </li>
            <li className='place__item'>
              <img src={rasim2} alt="Baron Beach" className='place__img' />
              <div className='place__card-content'>
                <h3 className='place__title-name'>Baron Beach</h3>
                <p className='place__text'>Yogyakarta, Indonesia</p>
              </div>
            </li>
            <li className='place__item'>
              <img src={rasim3} alt="Trisik Beach" className='place__img' />
              <div className='place__card-content'>
                <h3 className='place__title-name'>Trisik Beach</h3>
                <p className='place__text'>Yogyakarta, Indonesia</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Place;
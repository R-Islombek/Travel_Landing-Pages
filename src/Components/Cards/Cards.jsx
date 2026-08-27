import React from 'react';
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import "./Cards.css";

const Cards = () => {
  return (
      <section className='cards'>
             <div className="container">
                   <div className="section__container">
                        <div className='cards__span'>
                              <img className='cards-img1' src={card1} alt="Beach image 1" />
                              <img className='cards-img2' src={card2} alt="Beach image 2" />
                        </div>
                        <div className='cards-box'>
                              <h2 className='cards-title'>More information about the best beaches</h2>
                              <p className='cards-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, otestate. Quae omnia in nostra sententia, pursuit</p>
                              <button className='cards-btn'>Explore Now</button>
                        </div>
                   </div>
             </div>
      </section>
  )
}

export default Cards;
import React from 'react';
import "./App.css";
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Cards from './Components/Cards/Cards';
import Slides from './Components/Slides/Slides';
import Place from './Components/Place/Place';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
     <>
        <Header/>
        <Hero/>
        <Cards/>
        <Slides/>
        <Place/>
        <Form/>
        <Footer/>
     </>
  )
}

export default App

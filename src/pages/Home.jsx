// Libs
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Components
import Header from '../components/layouts/Header/Header';
import Navbar from '../components/layouts/Navbar/Navbar';
import Footer from '../components/layouts/Footer/Footer';
import Carousel from '../components/UI/Carousel/Carousel';
import OurProduction from '../components/UI/OurProduction/OurProduction';
import Ozavode from '../components/UI/Ozavode/Ozavode';


const Home = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Carousel/>
      <OurProduction/>
      <Ozavode/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>   
      <Footer/>
    </BrowserRouter>
    );
};

export default Home;

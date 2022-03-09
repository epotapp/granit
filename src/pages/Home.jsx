// Libs
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Components
import Header from '../components/layouts/Header/Header';
import Navbar from '../components/layouts/Navbar/Navbar';
import Footer from '../components/layouts/Footer/Footer';
import Carousel from '../components/Carousel/Carousel';
import OurProduction from '../components/OurProduction/OurProduction';
import Ozavode from '../components/Ozavode/Ozavode';
import Preimuschestva from '../components/Preimuschestva/Preimuschestva';
import SMIoNas from '../components/SMI/SMIoNas';
import FeedbackForm from '../components/UI/FeedbackForm/FeedbackForm';


const Home = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Carousel/>
      <OurProduction/>
      <Ozavode/>
      <Preimuschestva/>
      <SMIoNas/>
      <FeedbackForm/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>   
      <Footer/>
    </BrowserRouter>
    );
};

export default Home;
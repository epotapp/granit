// Libs
import React from 'react'
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

// Assets

import bg1 from '../../../assets/images/jpg/Carousel/bg1.jpg'
import bg2 from '../../../assets/images/jpg/Carousel/bg2.jpg'
import bg3 from '../../../assets/images/jpg/Carousel/bg3.jpg'

const Carousel = () => {

  const CarouselUI = ({ position, total, handleClick, children }) => (
  <div>
    <div className="carousel">{children}</div>
      <div className="carousel__title">
        Завод ЖБИ 
      </div>
      <div className="carousel__title_second">
        в Екатеринбурге 
      </div>
      <div className="carousel__text">
        Собственное производство и поставка железобетонных изделий различных категорий
      </div>
      <button className="carousel__button">
        Сделать заказ
      </button>
    <div className="carousel__dots">
      {Array(...Array(total)).map( (val, index) =>
        <div className="carousel__dot" key={index} onClick={handleClick} data-position={index}>
          {index === position ? '●●●● ' : '○○○○ ' }
        </div>
      )}
    </div>
  </div>
  );
  const Carousel = makeCarousel(CarouselUI);
  
  return (
    <Carousel defaultWait={3000} /*wait for 1000 milliseconds*/ >
      <Slide right>
        <div className="carousel__slide">
          <img src={bg1} alt="our features" />
        </div>
      </Slide>
      <Slide right>
        <img src={bg2} alt="our features" />
      </Slide>
      <Slide right>
        <img src={bg3} alt="our features" />
      </Slide>
      <Slide right>
        <div className="carousel__slide">
          <img src={bg1} alt="our features" />
        </div>
      </Slide>
      <Slide right>
        <img src={bg2} alt="our features" />
      </Slide>
      <Slide right>
        <img src={bg3} alt="our features" />
      </Slide>
    </Carousel>
    
  )
}

export default Carousel
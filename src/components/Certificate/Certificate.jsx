// Libraries
import React, { useState } from 'react'

// Assets
import certIcon from '../../assets/images/svg/certificate/certIcon.svg'
import cert1 from '../../assets/images/jpg/certificate/cert1.jpg'
import cert2 from '../../assets/images/jpg/certificate/cert2.jpg'

const Certificate = () => {

  const [state, setState] = useState(0)


  return (
    <section className="section-wrapper certificate">
      <div className="certificate__title">
        <img className="certificate__title_icon" src={certIcon} alt="" />
        <div className="certificate__title_text">Сертификаты</div>
        <div className="certificate__buttons">
          <button className="certificate__button_left"></button>
          <button className="certificate__button_right"></button>
        </div>
      </div>
      <div className="certificate__tape">
        <div className="certificate__item">
          <img src={cert1} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
        <div className="certificate__item">
          <img src={cert2} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
        <div className="certificate__item">
          <img src={cert1} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
        <div className="certificate__item">
          <img src={cert2} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
        <div className="certificate__item">
          <img src={cert1} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
        <div className="certificate__item">
          <img src={cert2} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
        <div className="certificate__item">
          <img src={cert1} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
        <div className="certificate__item">
          <img src={cert2} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
        <div className="certificate__item">
          <img src={cert1} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
        <div className="certificate__item">
          <img src={cert2} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
        <div className="certificate__item">
          <img src={cert1} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
        <div className="certificate__item">
          <img src={cert2} alt="" className="certificate__item_image"></img>
          <div className="certificate__item_text"></div>
        </div>
      </div>
    </section>
  )
}

export default Certificate
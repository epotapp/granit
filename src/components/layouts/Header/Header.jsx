// Libraries
import React from 'react';
import {Link} from 'react-router-dom'

//Assets
import headerLogo from '../../../assets/images/svg/header/headerLogo.svg'
import clockIcon from '../../../assets/images/png/header/clockIcon.png'
import buildingIcon from '../../../assets/images/png/header/buildingIcon.png'
import phoneRingingIcon from '../../../assets/images/png/header/phoneRingingIcon.png'
import atIcon from '../../../assets/images/png/header/atIcon.png'
import incomingCallIcon from '../../../assets/images/png/header/incomingCallIcon.png'
import writeIcon from '../../../assets/images/png/header/writeIcon.png'
import instaIcon from '../../../assets/images/png/header/instaIcon.png'

const Header = () => {
  return (
    <div className="header__wrapper">
      
      <Link className="header__link" to="/">
        <div className="header__logo">
          <img className="header__logo_icon" src={headerLogo} alt="logo"/>
        </div> 
      </Link>
      
      <div className="header__title">
        ГранитЪ
      </div>
      
      <div className="header__working-time">
        <img className="header__working-time_icon"src={clockIcon} alt=""/>
        <div className="header__working-time_pnpt"><span className="italic">пн-пт</span></div>
        <div className="header__working-time_0918">09:00-18:00</div>
        <div className="header__working-time_sbws"><span className="italic">сб-вс</span> выходной</div>        
      </div>
      
      <div className="header__address">
        <img className="header__address_icon" src={buildingIcon} alt="" />
        <div className="header__address_text">
          <div>офис Екатеринбург, Ткачей 23, оф. 512 </div>
          <div>производство Берёзовский,</div>
          <div>Западная Промзона, 26</div>          
        </div>
      </div>
      
      <div className="header__contacts">

        <div className="header__contacts__telephone">
          <img className="header__contacts__telephone_icon"src={phoneRingingIcon} alt="" />
          <span className="header__contacts__telephone_number">(343) 300-31-73</span> 
        </div>

        <div className="header__contacts__email">
          <img className="header__contacts__email_icon" src={atIcon} alt="" />
          <span className="header__contacts__email_text">office@gkgranit.com</span>
        </div>

        <div className="header__contacts__buttons">

          <button className="header__contacts__buttons_callback">
            ПОЗВОНИТЬ 
            <img className="header__contacts__buttons_callback_icon" src={incomingCallIcon} alt="" />
          </button>

          <button className="header__contacts__buttons_write">
            НАПИСАТЬ 
            <img className="header__contacts__buttons_write_icon" src={writeIcon} alt="" />
          </button>

          <button className="header__contacts__buttons_insta"><img src={instaIcon} alt="" /></button>
        </div>

      </div>
      
    </div>
  );
};

export default Header;
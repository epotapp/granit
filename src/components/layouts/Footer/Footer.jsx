// Libraries

import React from 'react';
import { Link } from 'react-router-dom';

// Assets

import footerLogo from '../../../assets/images/png/footer/footerLogo.png'
import clockIcon from '../../../assets/images/png/header/clockIcon.png'
import buildingIcon from '../../../assets/images/png/header/buildingIcon.png'
import atIcon from '../../../assets/images/png/header/atIcon.png'
import phoneRingingIcon from '../../../assets/images/png/header/phoneRingingIcon.png'
import catalogIcon from '../../../assets/images/png/navbar/catalogIcon.png'
import searchIcon from '../../../assets/images/png/navbar/searchIcon.png'
import telegram from '../../../assets/images/svg/social_media/telegram.svg'
import whatsapp from '../../../assets/images/svg/social_media/whatsapp.svg'
import insta from '../../../assets/images/svg/social_media/instagram.svg'
import facebook from '../../../assets/images/svg/social_media/facebook.svg'
import vk from '../../../assets/images/svg/social_media/vk.svg'





const Footer = () => {
  return (
    <div className="footer__wrapper">

      <div className="footer__information">
        
        <div className="footer__logo">
          <img className="footer__logo_icon" src={footerLogo} alt="logo"/>
        </div> 
        
        <div className="footer__working-time">
          <img className="footer__working-time_icon"src={clockIcon} alt=""/>
          <div className="footer__working-time_pnpt"><div className="italic">пн-пт</div></div>
          <div className="footer__working-time_0918">09:00-18:00</div>
          <div className="footer__working-time_sbws"><div className="italic">сб-вс</div> выходной</div>        
        </div>

        <div className="footer__address">
          <img className="footer__address_icon" src={buildingIcon} alt="" />
          <div className="footer__address_text">
            <div>офис Екатеринбург,</div>
            <div>Ткачей 23, оф. 512</div>
            <div>производство Берёзовский,</div>
            <div>Западная Промзона, 26</div>          
          </div>
        </div>

        <div className="footer__contacts">
          <div className="footer__contacts__email">
            <img className="footer__contacts__email_icon" src={atIcon} alt="" />
            <div>общие вопросы</div>
            <div className="footer__contacts__email_text">office@gkgranit.com</div>
            <div>отдел продаж</div>
            <div className="footer__contacts__email_text">komdir@gkgranit.com</div>
          </div>
        </div>

        <div className="footer__telephone">
            <img className="footer__telephone_icon"src={phoneRingingIcon} alt="" />
            <div>по всем вопросам</div>
            <div className="footer__telephone_number">(343) 300-31-73</div> 
        </div>
      
      </div>
      
      <div className="navbar">
        <div className="navbar__wrapper">
          <div className="navbar__el"><img className="navbar__el_icon" src={catalogIcon} alt=""/><Link className="navbar__link" to="/catalog">Каталог</Link></div>
          <div className="navbar__el"><Link className="navbar__link" to="/proizvodstvo">Производство</Link></div>
          <div className="navbar__el"><Link className="navbar__link" to="/plity_dorozhnye-pdn">Плита ПДН</Link></div>
          <div className="navbar__el"><Link className="navbar__link" to="/svai-zabivnye-zhelezobetonnye">Сваи</Link></div>
          <div className="navbar__el"><Link className="navbar__link" to="/plity-perekrytij-pb-70">Плиты ПБ</Link></div>
          <div className="navbar__el"><Link className="navbar__link" to="/novosti">СМИ о нас</Link></div>
          <div className="navbar__el"><Link className="navbar__link" to="/kontakty">Контакты</Link></div>
          <div className="navbar__search">
            <input className="navbar__search_input" type="text" placeholder="Поиск по сайту"></input>
            <button className="navbar__search_button"><img className="navbar__search_icon" src={searchIcon} alt=""/></button>
          </div>
        </div>
      </div>

      <div className="footer__lastblock">

        <div className="footer__copyright">
          <div className="footer__copyright_title">
            © 2012—2022 ТД «ГранитЪ» — Производство и поставка железобетонных изделий и изделий из гранита
          </div>
          <div className="footer__copyright_info">
            <div>Информация на сайте носит исключительно информационный характер и не является публичной офертой, определяемой положениями ст. 437 Гражданского кодекса РФ.</div>
            <div>Для сбора информации технического характера мы используем файлы Cookie. В том числе, мы обрабатываем Ваш IP-адрес, для определения региона местоположения.</div>
          </div>
        </div>

        <div className="footer__social">
          <img className="footer__social_telegram" src={telegram} alt=""/>
          <img className="footer__social_telegram" src={whatsapp} alt=""/>
          <img className="footer__social_telegram" src={insta} alt=""/>
          <img className="footer__social_telegram" src={facebook} alt=""/>
          <img className="footer__social_telegram" src={vk} alt=""/>
        </div>  

      </div>

    </div>
    );
};

export default Footer;

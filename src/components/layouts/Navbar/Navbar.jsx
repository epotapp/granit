// Libraries
import React from 'react';
import {Link} from 'react-router-dom'

//Assets
import catalogIcon from '../../../assets/images/png/navbar/catalogIcon.png'
import searchIcon from '../../../assets/images/png/navbar/searchIcon.png'


const Navbar = () => {
  return (
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
    );
};

export default Navbar;

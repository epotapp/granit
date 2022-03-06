// Libraries
import React from 'react'

// Assets
import grid from '../../assets/images/svg/ourproduction/grid.svg'
import asset1 from '../../assets/images/png/ourproduction/asset1.png'
import asset2 from '../../assets/images/png/ourproduction/asset2.png'
import asset3 from '../../assets/images/png/ourproduction/asset3.png'
import asset4 from '../../assets/images/png/ourproduction/asset4.png'
import asset5 from '../../assets/images/png/ourproduction/asset5.png'
import asset6 from '../../assets/images/png/ourproduction/asset6.png'

const OurProduction = () => {
  return (
    <div className="ourproduction">
      <div className="ourproduction__title">
        <img className="ourproduction__title_icon" src={grid} alt="" />
        <div className="ourproduction__title_text">Наша продукция</div>
      </div>
      <div className="ourproduction__photos">
        <img className="ourproduction__photos_1"src={asset1} alt="" />
        <img className="ourproduction__photos_2"src={asset2} alt="" />
        <img className="ourproduction__photos_3"src={asset3} alt="" />
        <img className="ourproduction__photos_4"src={asset4} alt="" />
        <img className="ourproduction__photos_5"src={asset5} alt="" />
        <img className="ourproduction__photos_6"src={asset6} alt="" />
      </div>
      <button className="ourproduction__button">Перейти в каталог</button>
    </div>
  )
}

export default OurProduction
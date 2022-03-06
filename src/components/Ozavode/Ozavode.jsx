// Libraries
import React from 'react'

// Assets
import top from '../../assets/images/jpg/Ozavode/top.jpg'
import mid from '../../assets/images/jpg/Ozavode/mid.jpg'
import bot from '../../assets/images/jpg/Ozavode/bot.jpg'

const Ozavode = () => {
  return (
    <div className="ozavode">
      <div className="ozavode_wrapper">
        <img className="ozavode_top"src={top} alt="Завод ГранитЪ с 2012 года реализует ЖБИ и изделия из гранита." />
        <img className="ozavode_mid"src={mid} alt="Наличие ЖД тупика и собственного автопарка позволяют максимально быстро доставить товар в любую точку России и ближнего зарубежья." />
        <img className="ozavode_bot"src={bot} alt="Производство в цифрах." />
      </div>
    </div>
  )
}

export default Ozavode
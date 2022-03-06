// Libraries
import React from 'react'

// Assets
import icon from '../../assets/images/svg/smionas/icon.svg'

const SMIoNas = () => {
  return (
    <div className="smionas">
      <div className="smionas__title">
        <img className="smionas__title_icon" src={icon} alt="" />
        <div className="smionas__title_text">СМИ о нас</div>
      </div>
    </div>
  )
}

export default SMIoNas
// Libraries
import React from 'react'

// Assets
import messageIcon from '../../../assets/images/svg/feedbackform/message.svg'
import attachmentIcon from '../../../assets/images/svg/feedbackform/attachment.svg'

const FeedbackForm = () => {
  return (
    <section className="section-wrapper feedback">
      <div className="feedback__wrapper">

        <div className="feedback__title">
          <img className="feedback__title_icon" src={messageIcon} alt="" />
          <div className="feedback__title_text">Форма обратной связи</div>
        </div>

        <div className="feedback__fields">
          <div className="feedback__fields__person">
            <input className="feedback__fields_name" type="text" placeholder="Имя"/>
            <input className="feedback__fields_email" type="email" placeholder="E-mail"/>
          </div>
          <textarea className="feedback__fields_message" placeholder="Сообщение"/>
          <button className="feedback__fields_attachment">
            <img className="feedback__fields_attachment_icon" src={attachmentIcon} alt="" />
            <div className="feedback__fields_attachment_text">Прикрепить файл</div>
          </button>
        </div>

        <div className="feedback__send">
          <button className="feedback__send__button">Отправить</button>
            <label className="feedback__send__policy">
              <input type="checkbox" className="checkbox"id="checkbox"></input>
              <span className="checkbox_decor"></span>
              <span className="policy_text">Я согласен  с&nbsp;</span>
              <a className="policy_link" href="#">политикой конфиденциальности и использования запрашиваемых данных</a>
            </label>

        </div>

      </div>
    </section>
  )
}

export default FeedbackForm
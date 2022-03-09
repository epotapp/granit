// Libraries
import React from 'react'

// Assets
import icon from '../../assets/images/svg/smionas/icon.svg'
import newsPhoto1 from '../../assets/images/jpg/smionas/newsPhoto1.jpg'
import newsPhoto2 from '../../assets/images/jpg/smionas/newsPhoto2.jpg'
import newsPhoto3 from '../../assets/images/jpg/smionas/newsPhoto3.jpg'


const SMIoNas = () => {

  return (
    <section className="section-wrapper">
      <div className="smionas">

        <div className="smionas__title">
          <img className="smionas__title_icon" src={icon} alt=""/>
          <div className="smionas__title_text">СМИ о нас</div>
        </div>

        <div className="smionas__news">
          <div className="smionas__news__block">
            <img className="smionas__news__block_image" src={newsPhoto1} alt="" />
            <div className="smionas__news__block__textwrapper">
              <div className="smionas__news__block_title">Эксперты в области недвижимости высоко оценили работу «Гранит»</div>
              <div className="smionas__news__block_text">Три объекта, созданные в Москве при участии Концерна «Гранит», получили престижную премию PROESTATE & TOBY Awards 2021. Это Северный речной...</div>
              <div className="smionas__news__block_date">24.02.2022</div>
            </div>
          </div>

          <div className="smionas__news__block">
            <img className="smionas__news__block_image" src={newsPhoto2} alt="" />
            <div className="smionas__news__block__textwrapper">
              <div className="smionas__news__block_title">Изделия «Гранит» для одного из лучших в России спинальных центров</div>
              <div className="smionas__news__block_text">В ноябре при Московском спинальном нейрохирургическом центре ГКБ № 67 им. Л.А. Ворохобова, одном из лучших в России, открылся современный...</div>
              <div className="smionas__news__block_date">24.12.2021</div>
            </div>
          </div>

          <div className="smionas__news__block">
            <img className="smionas__news__block_image" src={newsPhoto3} alt="" />
            <div className="smionas__news__block__textwrapper">
              <div className="smionas__news__block_title">Фабрика «Гранит» изготовила 30-тонные колонны сложной конфигурации</div>
              <div className="smionas__news__block_text">Фабрика «Гранит», резидент Технопарка Концерна «КРОСТ», изготовила крупногабаритные железобетонные колонны переменного сечения сложной...</div>
              <div className="smionas__news__block_date">08.12.2021</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
};

export default SMIoNas
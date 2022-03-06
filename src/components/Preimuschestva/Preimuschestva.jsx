// Libraries

import React from 'react'

// Assets

import preimuschestvaIcon from '../../assets/images/svg/preimuschestva/star.svg'
import building from '../../assets/images/svg/preimuschestva/building.svg'
import like from '../../assets/images/svg/preimuschestva/like.svg'
import target from '../../assets/images/svg/preimuschestva/target.svg'
import bus from '../../assets/images/svg/preimuschestva/bus.svg'

const Preimuschestva = () => {
  return (
    <div className="preimuschestva">
      <div className="preimuschestva__title">
        <img className="preimuschestva__title_icon"src={preimuschestvaIcon} alt="" />
        <div className="preimuschestva__title_text">Преимущества завода</div>
      </div>

      <div className="preimuschestva__features">
        <div className="preimuschestva__feature">
          <div className="preimuschestva__feature__image"><img className="preimuschestva__feature_image_icon" src={building} alt="" /></div>
          <div className="preimuschestva__feature_title_top">СОБСТВЕННОЕ</div>
          <div className="preimuschestva__feature_title_bot">ПРОИЗВОДСТВО</div>
          <div className="preimuschestva__feature_text">Завод ЖБИ провел модернизацию изготовления железобетонных изделий, также пересмотрели производственный цикл. Часть задач была полностью автоматизирована, также увеличена скорость выпуска ЖБИ и уменьшена доля получения механических повреждений в процессе производства</div>
        </div>
        <div className="preimuschestva__feature">
          <div className="preimuschestva__feature__image"><img className="preimuschestva__feature_image_icon" src={like} alt="" /></div>
          <div className="preimuschestva__feature_title_top">КОНТРОЛЬ</div>
          <div className="preimuschestva__feature_title_bot">КАЧЕСТВА</div>
          <div className="preimuschestva__feature_text">Мы контролируем качество выпускаемых железобетонных изделий в соответствии с требованиями действующих стандартов и технических условий. Каждая партия продукции проходит оценку. Готовая продукция хранится на складе площадью 1275 м2</div>
        </div>
        <div className="preimuschestva__feature">
          <div className="preimuschestva__feature__image"><img className="preimuschestva__feature_image_icon" src={target} alt="" /></div>
          <div className="preimuschestva__feature_title_top">УДОБНОЕ</div>
          <div className="preimuschestva__feature_title_bot">РАСПОЛОЖЕНИЕ</div>
          <div className="preimuschestva__feature_text">Завод ЖБИ расположен в Екатеринбурге, имеющий производственные площадки и склад с Ж/Д тупиком, находящийся в поселке Светлый, вблизи города Арамиль</div>
        </div>
        <div className="preimuschestva__feature">
          <div className="preimuschestva__feature__image"><img className="preimuschestva__feature_image_icon" src={bus} alt="" /></div>
          <div className="preimuschestva__feature_title_top">БЫСТРАЯ</div>
          <div className="preimuschestva__feature_title_bot">ДОСТАВКА</div>
          <div className="preimuschestva__feature_text">Часть задач была полностью автоматизирована, также увеличена скорость выпуска ЖБИ и уменьшена доля получения механических повреждений в процессе производства.</div>
        </div>
      </div>

    </div>
  )
}

export default Preimuschestva
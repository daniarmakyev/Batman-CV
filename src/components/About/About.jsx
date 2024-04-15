import React, { useState, useEffect } from 'react';
import './about.css'; 
const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setIsVisible(true);
    }, 700);
  }, []); 

  return (
    <div className='about'>
      <div className="container">
        <img
          src={require('../../images/batarang-black.png')}
          alt="batrang"
          className={`animated-image ${isVisible ? 'visible' : ''}`} 
        />

      </div>

      <div className="one">
        <div className="about-me">
        <div className="left-block">
        <iframe src="https://giphy.com/embed/13s7HAuPVWdw2I" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <div className="right-block">
          <p>Когда наступает ночь в Готэме, я превращаюсь в Бэтмена — символ справедливости и тьмы. Мои родители погибли на моих глазах, и этот момент определил мое предназначение: защищать город от преступности.

Днем я Брюс Уэйн, бизнесмен и филантроп, управляющий корпорацией Wayne Enterprises. Ночью я становлюсь тем, кого боятся преступники. Мой костюм и маска — символ моего обета бороться со злом. Мой арсенал и технологии помогают мне оставаться в тени и преследовать справедливость.

Я не ищу славы. Моя миссия — сделать улицы Готэма безопаснее для всех. Я верю, что даже в самых темных местах можно найти свет.</p>
        </div>
        </div>
    </div>

    <div className="two">
        <div className="about-me">
<div className="left-block">
      <p>Когда я не занят защитой Готэма как Бэтмен, моя жизнь насыщена разнообразными интересами и обязанностями.

В свободное время я предпочитаю активный образ жизни — хожу, занимаюсь спортом, качаюсь. Это помогает мне поддерживать отличную физическую форму, необходимую для моих ночных похождений.

Помимо этого, я являюсь плейбоем, миллиардером и филантропом. Мои ресурсы позволяют мне наслаждаться яркой и насыщенной жизнью в мире высшего общества. Я активно участвую в общественной жизни Готэма, поддерживая благотворительные программы и инициативы, направленные на улучшение жизни горожан.

Кроме того, меня часто называют красавчиком. Мой образ жизни, стиль и внешность — все это часть моего имиджа, который помогает мне общаться с различными кругами общества и поддерживать свою репутацию как человека, который не только борется за справедливость, но и воплощает идеалы успеха и привлекательности.</p>
</div>
<div className="right-block">
<iframe src="https://giphy.com/embed/lTLV2erK8vf1MIz4Rk" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
</div>
</div>
</div>
    </div>
  );
};

export default About;

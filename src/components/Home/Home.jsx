import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
          <div className='container2'>
          <img className='homeImg' src={require('../../images/batman-main.png')} alt="half-bat" />
        <div className="textContainer">
          <h2 className='title'>Я символ справедливости и тьмы</h2>
          <p className='desc'>Mеня зовут Брюс Уэйн. Когда падает ночь в Готэме, я становлюсь Бэтменом — символом справедливости и тьмы.</p>
          <p className='desc'>В этом городе, окутанном тенью преступности, я встаю на защиту невинных. Мой костюм — моя броня, а символ на груди — обет бороться с злом.</p>
          <p className='desc'>Моя жизнь — это бесконечный баланс между человеком Брюсом Уэйном и легендарным Бэтменом. Я иду туда, где закон не действует.</p>
          <p className='desc'>По ночам улицы Готэма принадлежат мне. Я остаюсь в тени, готовый выйти на свет и защитить тех, кто нуждается в моей помощи.</p>
        </div>
          </div>
      </div>
    </div>
  );
}

export default Home;

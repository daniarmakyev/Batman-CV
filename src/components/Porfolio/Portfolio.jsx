import React, { useState } from 'react';
import './portfolio.css'; // Импорт стилей для компонента
import batSignalImage from '../../images/bat-sginal.jpg'; // Импорт изображений
import pukImage from '../../images/puk.png';
import batarangImage from '../../images/glaza.jpg';

const Portfolio = () => {
  const [showBatSignal, setShowBatSignal] = useState(false);
  const [showPuk, setShowPuk] = useState(false);
  const [showBatarang, setShowBatarang] = useState(false);

  const handleButtonClick = () => {
    setShowBatSignal(true);

    setTimeout(() => {
      setShowPuk(true);

      setTimeout(() => {
        setShowBatarang(true);

        setTimeout(() => {
          setShowBatSignal(false);
          setShowPuk(false);
        }, 2000); 
      }, 2000);
    }, 2000);
  };

  return (
    <div className='portfolio'>
      <div className="container">
        <button className='bat-button' onClick={handleButtonClick}>
          Бет Сигнал
        </button>
        {/* Изображение "Bat Signal" */}
        <img
          src={batSignalImage}
          alt="Bat Signal"
          className={`bat-signal ${showBatSignal ? 'visible' : ''}`}
          style={{
            transition: 'opacity 0.5s ease',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: showBatSignal ? 1 : 0,
            visibility: showBatSignal ? 'visible' : 'hidden'
          }}
        />

        {/* Изображение "Puk" */}
        <img
          src={pukImage}
          alt="Puk"
          className={`puk ${showPuk ? 'visible' : ''}`}
          style={{
            transition: 'opacity 0.5s ease',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: showPuk ? 1 : 0,
            visibility: showPuk ? 'visible' : 'hidden'
          }}
        />

        {/* Изображение "Batarang" */}
        <img
          src={batarangImage}
          alt="Batarang"
          className={`batarang-white ${showBatarang ? 'visible' : ''}`}
          style={{
            transition: 'opacity 0.5s ease',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: showBatarang ? 1 : 0,
            visibility: showBatarang ? 'visible' : 'hidden'
          }}
        />
        <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
      </div>
    </div>
  );
};

export default Portfolio;

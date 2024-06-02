import React from 'react';
import chevroletBg from '../images/chevrolet-bg.jpg';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${chevroletBg})` }}>
      <div className="overlay">
        <h1>Добро пожаловать на сайт Chevrolet</h1>
        <p>Откройте для себя лучшие автомобили от одного из ведущих мировых брендов.</p>
        <div className="buttons">
          <Link to="/about" className="btn">Узнать больше</Link>
          <Link to="/gallery" className="btn">Посмотреть галерею</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
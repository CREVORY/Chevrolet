import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="header">
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/about">О компании</Link></li>
        <li><Link to="/gallery">Галерея</Link></li>
        <li><Link to="/contact">Обратная связь</Link></li>
      </ul>
    </nav>
  );
}

export default Header;

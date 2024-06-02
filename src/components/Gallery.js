import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import camaroImg from '../images/camaro.jpg';
import corvetteImg from '../images/corvette.jpg';
import silveradoImg from '../images/silverado.jpg';

const items = [
  { id: 1, name: 'Camaro', img: camaroImg, description: 'A sporty car with excellent performance.' },
  { id: 2, name: 'Corvette', img: corvetteImg, description: 'A classic American sports car.' },
  { id: 3, name: 'Silverado', img: silveradoImg, description: 'A powerful and reliable truck.' },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {items.map(item => (
        <div key={item.id} className="gallery-item">
          <Link to={`/detail/${item.id}`}>
            <div className="gallery-item-image">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="gallery-item-content">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <button>View Details</button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
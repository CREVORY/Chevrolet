import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';
import camaroImg from '../images/camaro.jpg';
import corvetteImg from '../images/corvette.jpg';
import silveradoImg from '../images/silverado.jpg';

const items = [
  { 
    id: 1, 
    name: 'Camaro', 
    img: camaroImg, 
    description: `
      Camaro — это спортивный автомобиль, известный своей превосходной производительностью и агрессивным дизайном. 
      Впервые представленный в 1966 году как конкурент Ford Mustang, Camaro быстро завоевал популярность среди любителей 
      автомобилей. Camaro предлагается в различных комплектациях, включая мощные версии ZL1 и SS, которые оснащены двигателями 
      V8 с высоким выходом мощности. Технологические особенности включают систему контроля устойчивости, современную мультимедийную 
      систему и адаптивную подвеску Magnetic Ride Control.
    ` 
  },
  { 
    id: 2, 
    name: 'Corvette', 
    img: corvetteImg, 
    description: `
      Corvette — это классический американский спортивный автомобиль, символ скорости и производительности. Выпускается с 1953 года, 
      Corvette прошел через несколько поколений и всегда оставался на переднем крае автомобильных инноваций. Современные модели Corvette, 
      такие как C8, предлагают центральное расположение двигателя и удивительную динамику движения. В стандартное оснащение входят мощные 
      двигатели V8, продвинутая аэродинамика и высокотехнологичные системы помощи водителю, такие как система контроля тяги и управление 
      старта с места.
    ` 
  },
  { 
    id: 3, 
    name: 'Silverado', 
    img: silveradoImg, 
    description: `
      Silverado — это мощный и надежный пикап, известный своей способностью справляться с самыми сложными задачами. Представленный в 1998 году, 
      Silverado быстро стал одним из самых популярных пикапов в США. Silverado предлагается в различных конфигурациях, включая варианты с 
      двигателями V6 и V8, а также дизельными двигателями для максимальной мощности и экономии топлива. Особенности включают высокую грузоподъемность, 
      продвинутые системы буксировки и современный интерьер с множеством опций для комфорта и развлечений.
    ` 
  },
];

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = items.find(i => i.id === parseInt(id, 10));
    setItem(foundItem);
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div className="detail">
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} />
      <p>{item.description}</p>
    </div>
  );
};

export default Detail;

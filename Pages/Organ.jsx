import React, { useState, useEffect } from "react";
import './Organ.css'
import Picture1 from '../assets/Picture1.png';
import Picture2 from '../assets/Picture2.png';

import Picture4 from '../assets/Picture4.png';
import Picture7 from '../assets/Picture7.jpg';
import Picture5 from '../assets/Picture5.jpg';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';



const disciplines = [
  {
    id: 1,
    img: Picture1,
    label: "",
  },
  {
    id: 2,
    img: Picture2,
    label: "",
  },
  {
    id: 4,
    img: Picture4,
    label: "",
  },
  {
    id: 5,
    img: pic2, 
    label: "",
  },
  {
    id: 6,
    img: pic1, 
    label: "",
  },
  {
    id: 7,
    img: Picture7, 
    label: "",
  },
  {
    id: 8,
    img: Picture5, 
    label: "",
  },
];


export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % disciplines.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + disciplines.length) % disciplines.length);
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + disciplines.length) % disciplines.length;
      visibleItems.push(disciplines[index]);
    }
    return visibleItems;
  };

  return (
  <section id="Organ">
      <div className="carousel-container">
      <h2 className="carousel-title">
       Organ System Of Human Body
      </h2>
    
      <div className="carousel">
        <button onClick={prevSlide} className="carousel-btn prev-btn"></button>
        <div className="carousel-slides">
          {getVisibleItems().map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === 2 ? "active" : ""}`}
            >
              <img src={item.img} alt={item.label} className="carousel-image" />
              <p className={`carousel-label ${index === 2 ? "active-label" : ""}`}>{item.label}</p>
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="carousel-btn next-btn"></button>
      </div>
      
    </div>
  </section>
  );
}

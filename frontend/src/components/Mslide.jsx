import React, { useState, useEffect } from "react";
import "../components/Navbar/Navbar.css";
import slide1 from "../assets/ms1.webp";
import slide2 from "../assets/ms2.webp";
import slide3 from "../assets/ms3.webp";
import slide4 from "../assets/ms4.webp";
import slide5 from "../assets/ms5.webp";

const Mslide = () => {

  const slide=[slide1,slide2,slide3,slide4,slide5];
  const [currentSlide,setCurrentSlide]=useState(0);

  const changeSlide=(index)=>{
    setCurrentSlide((index+slide.length)%slide.length);
  }

  useEffect(()=>{
    const interval=setInterval(()=>{
      changeSlide(currentSlide+1);
    },5000);
    return ()=>clearInterval(interval);
  },[currentSlide])

  return (
    <div className="slideshow">

      {slide.map((slide,index)=>(
        <img
          key={index}
          src={slide}
          className={`slide ${index===currentSlide ? "active" : ""}`}
          />
      ))}
      <button className="prev" onClick={()=>changeSlide(currentSlide-1)}>❮</button>
      <button className="next" onClick={()=>changeSlide(currentSlide+1)}>❯</button>

      <div className="dots">
        {slide.map((_,index)=>(
          <span
            key={index}
            className={`dot ${index===currentSlide ? "active":""}`}
            onClick={()=>changeSlide(index)}
            ></span>
        ))}
      </div>
    </div>
  );
};

export default Mslide;
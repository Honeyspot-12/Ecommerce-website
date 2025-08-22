import React, { useState, useEffect } from "react";
import "../components/Navbar/Navbar.css";
import slide1 from "../assets/s1.webp"; // Replace with actual paths
import slide2 from "../assets/s2.webp";
import slide3 from "../assets/s3.webp";
import slide4 from "../assets/s4.webp";
import slide5 from "../assets/s5.jpg";

const wslide = () => {

  //slideshow
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(currentSlide + 1);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentSlide]);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        />
      ))}
      <button className="prev" onClick={() => changeSlide(currentSlide - 1)}>
        ❮
      </button>
      <button className="next" onClick={() => changeSlide(currentSlide + 1)}>
        ❯
      </button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => changeSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default wslide;

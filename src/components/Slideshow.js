import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  const images = [
    "/assets/image1.png",
    "/assets/image2.png",
    "/assets/image3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />
    </div>
  );
};

export default Slideshow;

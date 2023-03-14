import React, { useState, useEffect } from "react";
import "../components/Carousel.css";
import picOne from "../Img/New Arrivals.jpg";
import picTwo from "../Img/Popular Blends.jpg";
import picThree from "../Img/Find Locations.jpg";
import picFour from "../Img/All Products CROP.jpg";

const images = [
  { image: picOne, text: "New Arrivals" },
  { image: picTwo, text: "Popular Blends" },
  { image: picThree, text: "Find Locations" },
  { image: picFour, text: "All Products" },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorColor, setIndicatorColor] = useState("#e2bcb0");

  console.log(activeIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIndicatorColor("#e2bcb0");
  }, [activeIndex]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  const handleSlideTransition = (index) => {
    if (index === activeIndex) {
      if (activeIndex !== images.length - 1) {
        setIndicatorColor("#fff");
        setTimeout(() => {
          setIndicatorColor("#e2bcb0");
        }, 4000);
      }
    }
  };

  return (
    <div className="carousel">
      <div className="slides">
        {images.map((imageObj, index) => (
          <div key={index}>
            <img
              className={index === activeIndex ? "active" : ""}
              src={imageObj.image}
              alt={`image-${index}`}
              onClick={() => setActiveIndex((prevIndex) => prevIndex + 1)}
              data-index={index}
              onTransitionEnd={(e) =>
                handleSlideTransition(e.target.getAttribute("data-index"))
              }
            />
          </div>
        ))}
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={index === activeIndex ? "active" : ""}
            style={{
              backgroundColor: index === activeIndex ? "#fff" : indicatorColor,
            }}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

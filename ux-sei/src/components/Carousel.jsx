import React, { useState, useEffect } from "react";
import "../App.css";
import picOne from "/Users/ahmedrahi/dev/unit-3/UX-SEI/ux-sei/src/Img/New Arrivals.avif";
import picTwo from "/Users/ahmedrahi/dev/unit-3/UX-SEI/ux-sei/src/Img/Popular Blends.avif";
import picThree from "/Users/ahmedrahi/dev/unit-3/UX-SEI/ux-sei/src/Img/Find Locations.avif";
import picFour from "/Users/ahmedrahi/dev/unit-3/UX-SEI/ux-sei/src/Img/All Products.png";

const images = [picOne, picTwo, picThree, picFour];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <div className="slides">
        {images.map((image, index) => (
          <img
            key={index}
            className={index === activeIndex ? "active" : ""}
            src={image}
            alt={`image-${index}`}
            onClick={() => setActiveIndex((prevIndex) => prevIndex + 1)}
            onTransitionEnd={() =>
              setActiveIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
              )
            }
          />
        ))}
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

// Get the four images:
// New Arrivals (New Arrivals.avif)
// Popular Blends (Popular Blends.avif)
// Find Nearest Cafe (Find Locations.avif)
// All Products (All Products.png)

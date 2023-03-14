import React from "react";
import picOne from "../Img/About Us CROP.png";
import picThree from "../Img/Nearest Location.avif";
import picTwo from "../Img/Snacks.png";

const FullCard = ({
  image,
  title,
  description,
  buttonLabel,
  onButtonClick,
}) => {
  let cardTitle;

  if (image === picOne) {
    cardTitle = "Find your nearest store";
  } else if (image === picTwo) {
    cardTitle = "Snacks for Tea";
  } else if (image === picThree) {
    cardTitle = "About Us";
  }

  return (
    <div className="card">
      <div className="card-placeholder">
        <h2 className="card-placeholder-title">{cardTitle}</h2>
      </div>
      <img className="card-image" src={image} alt={cardTitle} />
      <div className="card-backing"></div>
    </div>
  );
};

export default FullCard;

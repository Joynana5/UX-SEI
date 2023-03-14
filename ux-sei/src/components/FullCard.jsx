import React from "react";
import picOne from "/Users/ahmedrahi/dev/unit-3/UX-SEI/ux-sei/src/Img/About Us.png";
import picTwo from "/Users/ahmedrahi/dev/unit-3/UX-SEI/ux-sei/src/Img/Nearest Location.avif";
import picThree from "/Users/ahmedrahi/dev/unit-3/UX-SEI/ux-sei/src/Img/Tea for Snacks.png";

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
      <div className="card-content">
        <h2 className="card-title">{cardTitle}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      </div>
      <div className="card-backing"></div>
    </div>
  );
};

export default FullCard;

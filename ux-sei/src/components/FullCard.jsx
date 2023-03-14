import React from "react";

export const FullCard = ({
  image,
  title,
  description,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <div className="card">
      <img className="card-image" src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      </div>
      <div className="card-backing"></div>
    </div>
  );
};

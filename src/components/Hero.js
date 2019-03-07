import React, { useState } from "react";

function Hero({ hero }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  const showDetails = () => {
    if (showInfo) {
      return (
        <div>
          <hr />
          <h3>
            Alter Ego: <span>{hero.alter_ego}</span>
          </h3>
          <h3>
            Publisher: <span>{hero.publisher}</span>
          </h3>
          <h3>
            First Appearance: <span>{hero.first_appearance}</span>
          </h3>
        </div>
      );
    }
  };

  return (
    <div className="hero">
      <div className="title">
        <h2>{hero.superhero}</h2>
        <button
          onClick={handleShowInfo}
          style={
            showInfo
              ? { background: "red", color: "white", border: "1px solid red" }
              : { background: "white", color: "black" }
          }
        >
          {showInfo ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {showDetails()}
    </div>
  );
}

export default Hero;

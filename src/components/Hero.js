import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import HeroDetails from "./HeroDetails";

function Hero({ hero }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="hero">
      <div className="title">
        <h2>{hero.superhero}</h2>
        <button
          onClick={handleShowInfo}
          className={showInfo ? "hideInfoBtn" : "showInfoBtn"}
        >
          {showInfo ? "Hide Details" : "Show Details"}
        </button>
      </div>
      <CSSTransition
        in={showInfo}
        timeout={300}
        classNames="message"
        unmountOnExit
        onExited={() => setShowInfo(false)}
      >
        {state => <HeroDetails hero={hero} />}
      </CSSTransition>
    </div>
  );
}

export default Hero;

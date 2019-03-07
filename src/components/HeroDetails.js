import React from "react";

function HeroDetails({ hero }) {
  return (
    <div>
      <React.Fragment>
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
      </React.Fragment>
    </div>
  );
}

export default HeroDetails;

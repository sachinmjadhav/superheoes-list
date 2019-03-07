import React, { useState } from "react";
import Hero from "./Hero";

function Heroes({ Superheroes }) {
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const filteredList = Superheroes.filter(
    hero => hero.superhero.toLowerCase().indexOf(input.toLowerCase()) !== -1
  );

  return (
    <React.Fragment>
      <input
        className="input"
        type="text"
        placeholder="Search for your hero!"
        autoFocus={true}
        value={input}
        onChange={handleChange}
      />
      <div className="list">
        {filteredList.map(hero => (
          <Hero hero={hero} key={hero.superhero} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Heroes;

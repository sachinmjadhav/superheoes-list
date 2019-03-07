import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Superheroes from "./superheroes.json";

import Heroes from "./components/Heroes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Superhero</h1>
        <hr />
      </header>
      <Heroes Superheroes={Superheroes} />
    </div>
  );
}

export default App;

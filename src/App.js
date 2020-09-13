import React from "react";
import "./App.css";
import DarkButton from "./components/dark-blue-button";
import Header from "./components/header";
import LightButton from "./components/light-blue-button";
import Logo from "./components/logo";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="headline">
        <Title />
        <Logo />
      </div>
      <DarkButton />
      <LightButton />
    </div>
  );
}

export default App;

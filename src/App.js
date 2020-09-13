import React from "react";
import "./App.css";
import Header from "./components/header";
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
    </div>
  );
}

export default App;

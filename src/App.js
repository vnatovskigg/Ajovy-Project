import React from "react";
import "./App.css";
import Header from "./components/header";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="headline">
        <Title />
      </div>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import "./sass/App.css";
import CarConfig from "./components/CarConfig";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <CarConfig />
      </div>
    );
  }
}

export default App;

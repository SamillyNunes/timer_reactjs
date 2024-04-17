import React, { Component } from "react";
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} alt="'Cronometro" className="img" />
        <a className="timer">0.0</a>
        <div className="areaBtn">
          <a className="botao">VAI</a>
          <a className="botao">ZERAR</a>
        </div>
      </div>
    );
  }
}

export default App;

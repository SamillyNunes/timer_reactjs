import React, { Component } from "react";
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      timerNumber: 0,
      startBtnLabel: 'VAI'
    }
    this.timer=null;

    this.startTimer = this.startTimer.bind(this);
    this.cleanTimer = this.cleanTimer.bind(this);
  }

  startTimer(){
    let state = this.state;

    if(this.timer!==null){
      clearInterval(this.timer);
      this.timer=null;
      state.startBtnLabel='VAI';
      
      this.setState(state);
    } else {
      state.startBtnLabel='PAUSAR';
      this.timer = setInterval(() => {
        state.timerNumber += 0.1;
        this.setState(state);
      }, 100);
    }
  }

  cleanTimer(){
    if(this.timer!==null){
      clearInterval(this.timer);
      this.timer=null;
    }

    let state = this.state;
    state.timerNumber = 0;
    state.startBtnLabel='VAI';
    this.setState(state);
  }

  render(){
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} alt="'Cronometro" className="img" />
        <a className="timer">{this.state.timerNumber.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.startTimer} > {this.state.startBtnLabel} </a>
          <a className="botao" onClick={this.cleanTimer} >ZERAR</a>
        </div>
      </div>
    );
  }
}

export default App;

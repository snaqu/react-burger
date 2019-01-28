import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Toolbar from "./containers/Toolbar/Toolbar";

class App extends Component {
  state = {
    ingridients: {
      Salad: 1,
      Bacon: 1,
      Cheese: 2,
      Meat: 3,
    }
  }
  render() {
    const { ingridients } = this.state;
    return (
      <div className="container__app">
        <Toolbar />
        <BurgerBuilder ingridients={ingridients} />
      </div>
    );
  }
}

export default App;

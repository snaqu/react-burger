import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Toolbar from "./containers/Toolbar/Toolbar";



class App extends Component {
  state = {
    ingridients: [
      { name: "Salad", amount: 0, price: 2.10, maxAmount: 1 },
      { name: "Bacon", amount: 2, price: 1.40, maxAmount: 2 },
      { name: "Cheese", amount: 1, price: 1.20, maxAmount: 2 },
      { name: "Meat", amount: 1, price: 3.35, maxAmount: 2 },
    ]
  }


  handleChangeAmount = (amount, name) => {
    const newIngridients = this.state.ingridients;
    this.setState({
      ingridients: newIngridients
    })
    switch (amount) {
      case ('more'):
        return (
          newIngridients.map(item => {
            if (item.name === name && item.amount < item.maxAmount) {
              item.amount += 1;
            }
          })
        )
      case ('less'):
        return (
          newIngridients.map(item => {
            if (item.name === name && item.amount > 0) {
              item.amount -= 1;
            }
          })
        )
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="container__app">
        <Toolbar />
        <BurgerBuilder
          ingridients={this.state.ingridients}
          click={this.handleChangeAmount} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Toolbar from "./containers/Toolbar/Toolbar";
import Modal from "./components/Modal/Modal";


class App extends Component {
  state = {
    ingridients: [
      { name: "Salad", amount: 0, price: 2.10, maxAmount: 1 },
      { name: "Bacon", amount: 2, price: 1.40, maxAmount: 2 },
      { name: "Cheese", amount: 1, price: 1.20, maxAmount: 2 },
      { name: "Meat", amount: 1, price: 3.35, maxAmount: 2 },
    ],
    totalPrice: 7.35,
    purchasing: false,
  }


  handleChangeAmount = (amount, name) => {
    const newIngridients = this.state.ingridients;

    this.setState({
      ingridients: newIngridients
    }, () => {
      const ingridientsMap = this.state.ingridients;
      const totalPrice = ingridientsMap.reduce((acc, item) => {
        return acc + item.price * item.amount;
      }, 0);
      this.setState({
        totalPrice
      })
    })

    switch (amount) {
      case ('more'):
        return (
          newIngridients.forEach(item => {
            if (item.name === name && item.amount < item.maxAmount) {
              item.amount += 1;
            }
          })
        )
      case ('less'):
        return (
          newIngridients.forEach(item => {
            if (item.name === name && item.amount > 0) {
              item.amount -= 1;
            }
          })
        )
      default:
        return null;
    }
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }
  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    })
  }
  purchaseFinalHandler = () => {
    window.location.reload()
  }

  render() {
    return (
      <div className="container__app">
        <Toolbar />
        <Modal
          ingredients={this.state.ingridients}
          showStatus={this.state.purchasing}
          hide={this.purchaseCancelHandler}
          totalPrice={this.state.totalPrice}
          buy={this.purchaseFinalHandler}/>
        <BurgerBuilder
          ingridients={this.state.ingridients}
          click={this.handleChangeAmount}
          totalPrice={this.state.totalPrice}
          purchasing={this.purchaseHandler}
        />
      </div>
    );
  }
}

export default App;

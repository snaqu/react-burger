import React, { Component } from 'react';
import "./BurgerIngridients.css";

class BurgerIngridients extends Component {
    state = {}

    handleGenerateIngridients = (e) => {
        switch (e) {
            case ('BreadTop'):
                return (
                    <div className="BreadTop">
                        <div className="Seeds1"></div>
                        <div className="Seeds2"></div>
                    </div>
                )
            case ('BreadBottom'):
                return <div className="BreadBottom"></div>;
            case ('Cheese'):
                return <div className="Cheese"></div>;
            case ('Meat'):
                return <div className="Meat"></div>;
            case ('Bacon'):
                return <div className="Bacon"></div>;
            case ('Salad'):
                return <div className="Salad"></div>;
            default:
                return null;
        }
    }
    render() {
        return (
            <>
                {this.handleGenerateIngridients(this.props.type)}
            </>
        );
    }
}

export default BurgerIngridients;
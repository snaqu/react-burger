import React from 'react';
import './Burger.css';
import BurgerIngridients from "./BurgerIngridients/BurgerIngridients";

const burger = (props) => {
    const values = props.ingridients;
    const arrayWithIngridients = [];
    values.forEach((obj, index) => {
        for (let i = 0; i < obj.amount; i++) {
            arrayWithIngridients.push(<BurgerIngridients key={obj.name + index++} type={obj.name} />)
        }
    })
    return (
        <div className="container__burger-builder">
            <BurgerIngridients type="BreadTop" />
            {arrayWithIngridients.length === 0 ? <p><b>Add some ingridients!</b></p> : arrayWithIngridients}
            <BurgerIngridients type="BreadBottom" />
        </div>
    );
}

export default burger;
import React from 'react';
import './Burger.css';
import BurgerIngridients from "./BurgerIngridients/BurgerIngridients";

const burger = (props) => {
    const values = props.ingridients;
    let generateIngridients = Object.keys(values)
        .map((key) => {
            return [...Array(values[key])].map((_, i) => {
                return <BurgerIngridients key={key + i} type={key} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (generateIngridients.length === 0) {
        generateIngridients = <p>Add some ingridients!</p>
    }
    return (
        <div className="container__burger-builder">
            <BurgerIngridients type="BreadTop" />
            {generateIngridients}
            <BurgerIngridients type="BreadBottom" />
        </div>
    );
}

export default burger;
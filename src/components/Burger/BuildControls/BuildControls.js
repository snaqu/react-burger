import React from 'react';
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => {
    const ingridientsMap = props.ingridients;
    const totalPrice = ingridientsMap.reduce((acc, item) => {
        return acc + item.price * item.amount;
    }, 0);
    return (
        <div className="buildControls">
            <p><b> Current price: </b>{totalPrice.toFixed(2)}$</p>
            {controls.map(item => <BuildControl
                key={item.label}
                label={item.label}
                ingridients={props.ingridients}
                click={props.click}
            />)}
        </div>
    );
}

export default buildControls;
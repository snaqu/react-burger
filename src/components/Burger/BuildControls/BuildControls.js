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
    return (
        <div className="buildControls">
            <p><b> Current price: </b>{props.totalPrice.toFixed(2)}$</p>
            {controls.map(item => <BuildControl
                key={item.label}
                label={item.label}
                ingridients={props.ingridients}
                click={props.click}
            />)}
            <button
                className="buildControls--btn"
                disabled={props.totalPrice > 0 ? false : true}
                onClick={props.purchasing}
            >Purchase</button>
        </div>
    );
}

export default buildControls;
import React from 'react';
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

const buildControls = () => {
    return (
        <div className="buildControls">
            {controls.map(item => <BuildControl key={item.label} label={item.label} />)}
        </div>
    );
}

export default buildControls;
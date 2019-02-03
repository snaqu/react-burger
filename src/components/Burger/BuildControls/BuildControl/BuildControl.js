import React from 'react';
import "./BuildControl.css";

const buildControl = (props) => {
    const checkAmount = props.ingridients;
    let valueLess = false;
    let valueMore = false;
    let price = 0;
    checkAmount.forEach(item => {
        if (item.name === props.label) {
            price = item.price;
        }

        if (item.name === props.label && item.amount === 0) {
            valueLess = true;
        } else if (item.name === props.label && item.amount === item.maxAmount) {
            valueMore = true;
        }
    })
    return (
        <div className="BuildControl">
            <div className="Label">
                <b>
                    {props.label}
                </b>
                <em> {price.toFixed(2)}$</em>
            </div>
            <div className="container-btn">
                <button
                    className="Less"
                    disabled={valueLess ? true : false}
                    onClick={() => props.click('less', props.label)}>Less</button>
                <button
                    className="More"
                    disabled={valueMore ? true : false}
                    onClick={() => props.click('more', props.label)}>More</button>
            </div>
        </div>
    );
}

export default buildControl;
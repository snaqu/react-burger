import React from 'react';
import './OrderSummary.css';

const OrderSummary = (props) => {
    const ingredients = props.ingredients;
    const generateList = ingredients.map(item => (
        <li className="modal-list__item" key={item.name}>
            <p>{item.name}:</p>
            <p>{item.amount > 0 ? `${item.amount} pc.` : "-"}</p>
        </li>
    ));
    // console.log(`lol ${}`);
    return (
        <>
            <h2>Your order</h2>
            <p>Delicious burger with yours ingredients:</p>
            <ul className="modal-list">
                {generateList}
            </ul>
            <p>
                <b>Total price: </b>
                {props.totalPrice.toFixed(2)}$
            </p>
            <div className="modal-block">
                <div>
                    <p>Continue to checkout?</p>
                </div>
                <div className="modal-block__element">
                    <button 
                        className="modal-block__btn"
                        onClick={props.buy}>yes</button>
                    <button 
                        className="modal-block__btn modal-block__btn--cancel"
                        onClick={props.hide}>cancel</button>
                </div>
            </div>
        </>
    );
}

export default OrderSummary;
import React from 'react';
import "./Modal.css";
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Backdrop from "./Backdrop/Backdrop";

const Modal = (props) => {
    return (
        <>
        {props.showStatus ? <Backdrop hide={props.hide}/> : null}
        {props.showStatus ? <div className="Modal">
            <OrderSummary 
                ingredients={props.ingredients} 
                hide={props.hide}
                totalPrice={props.totalPrice}
                buy={props.buy}
                />
        </div>: null}
        </>
    );
}

export default Modal;
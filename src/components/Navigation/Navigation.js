import React from 'react';
import './Navigation.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => {
    return ( 
        <ul className="header__list">
            <NavigationItem location='#'>Home</NavigationItem>
            <NavigationItem location='#'>Checkout</NavigationItem>
        </ul>
     );
}
 
export default Navigation;
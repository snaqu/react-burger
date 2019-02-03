import React from 'react';
import './NavigationItem.css';

const NavigationItem = (props) => {
    return ( 
        <li className="header__list-item">
            <a className="header__list-item--link" href={props.location}>{props.children}</a>
        </li>
     );
}
 
export default NavigationItem;
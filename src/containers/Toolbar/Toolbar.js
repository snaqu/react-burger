import React, { Component } from 'react';
import './Toolbar.css';
import Logo from "../../assets/logo.png";
import Navigation from "../../components/Navigation/Navigation";

class Toolbar extends Component {
    state = {}
    render() {
        return (
            <header className="header">
                <div className="header__item">
                    <img className="header__logo" src={Logo} alt="Logo"/>
                </div>
                <div className="header__item">
                    <Navigation/>
                </div>
            </header>
        );
    }
}

export default Toolbar;
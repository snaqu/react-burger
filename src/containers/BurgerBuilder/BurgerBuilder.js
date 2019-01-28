import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    state = {}
    render() {
        return (
            <>
                <Burger ingridients={this.props.ingridients} />
                <BuildControls />
            </>
        );
    }
}

export default BurgerBuilder;
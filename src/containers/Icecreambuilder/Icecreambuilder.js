import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import Icecream from '../../components/Icecream/Icecream';
import classes from './Icecreambuilder.module.css';

export default class Icecreambuilder extends Component {
    state = {
        items: {
            vanilla : 45,
            chocolate : 50,
            lemon : 35,
            orange : 40,
            strawberry : 40
        },
        scoops : [],
        totalprice : 0,
    };
    render() {
        const {items} = this.state;
        return (
            <div className={[classes.container, 'container'].join(' ')}>
                <Icecream items = {items} />
                <Builder />
            </div>
        )
    }
}

import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import Icecream from '../../components/Icecream/Icecream';
import classes from './Icecreambuilder.module.css';

export default class Icecreambuilder extends Component {
    state = {};
    render() {
        return (
            <div className={[classes.container, 'container'].join(' ')}>
                <Icecream />
                <Builder />
            </div>
        )
    }
}

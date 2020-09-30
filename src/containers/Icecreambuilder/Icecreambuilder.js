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

    addScoop = (scoop) => {
        const {scoops , items, totalprice} = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        
        this.setState({
            scoops: workingScoops,
            totalprice: totalprice + items[scoop],
        })

    }

    removeScoop = (scoop) => {
        const {scoops , items, totalprice} = this.state;
        const workingScoops = [...scoops];
        const scoopIndex = workingScoops.findIndex(sc => sc === scoop);
        workingScoops.splice(scoopIndex, 1);
        
        this.setState({
            scoops: workingScoops,
            totalprice: totalprice - items[scoop],
        })

    }

    render() {
        const {items , totalprice, scoops} = this.state;
        return (
            <div className={[classes.container, 'container'].join(' ')}>
                <Icecream items = {items} scoops = {scoops}/>
                <Builder items = {items} price = {totalprice} add = {this.addScoop} remove = {this.removeScoop}/>
            </div>
        )
    }
}

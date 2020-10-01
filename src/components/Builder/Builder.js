import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import Modal from './Modal/Modal';
import Totalprice from './Totalprice/Totalprice';

function Builder({items, price, add, remove, scoops}) {
    return (
          <div>
            <div className={classes.builder}>
            <h3>Build your own Ice Cream Sundae</h3>
            <Items item = {items} add = {add} remove = {remove} scoops = {scoops}/>
            <Totalprice price={price}/>
            <button type="button" className={[classes.order , 'rounded'].join(' ')}>
              Add to Cart
            </button>
          </div>
          <Modal>
            Hello modal
          </Modal>
          </div>
    )
}

export default Builder

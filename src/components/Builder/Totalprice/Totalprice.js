import React from 'react';
import Classes from './Totalprice.module.css';

function Totalprice({price = 0}) {
    return (
        <div className={Classes.total}>
        <div>Total Price</div>
    <div>{price} TK</div>
      </div>
    )
}

export default Totalprice

import React from 'react';
import Item from './Item/Item';

function Items({item, add, remove, scoops}) {
    const flavours = Object.keys(item)
    console.log(flavours)
    return (
        <div>
                <ul>
                    {flavours.map((flavor) => <Item key = {flavor} name = {flavor} add = {add} remove = {remove} scoops = {scoops}/>)}
                </ul>
              </div>
    )
}

export default Items

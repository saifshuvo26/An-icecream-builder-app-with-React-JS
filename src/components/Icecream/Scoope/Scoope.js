import React from 'react';
import classes from './Scoope.module.css';

function Scoope({scoop}) {
    return (
        <div className={[classes.scoop, classes.[scoop]].join(' ')}></div>
    )
}

export default Scoope

import React from 'react';
import classes from './Scoope.module.css';

function Scoope() {
    return (
        <div className={[classes.scoop, classes.orange].join(' ')}></div>
    )
}

export default Scoope

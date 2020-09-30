import React from 'react'
import Icecreambuilder from '../../containers/Icecreambuilder/Icecreambuilder'
import classes from './Body.module.css'

function Body() {
    return (
        <div className={classes.mainBody}>
            <Icecreambuilder />
        </div>
    )
}

export default Body

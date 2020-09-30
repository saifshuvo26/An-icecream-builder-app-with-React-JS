import React from 'react';
import classes from './Icecream.module.css';
import Scoope from './Scoope/Scoope';

function Icecream({items}) {
  const flavours = Object.keys(items)
    return (
          <div>
            <div className={classes.icecream}>
              <p className={classes.cone}></p>
              {/* <p>Please start adding scoops</p> */}
              {/* scoope component */}
              {flavours.map((flavor) => <Scoope scoop = {flavor}/>)}

              <div className={classes.cherry}></div>
            </div>
          </div>
    )
}

export default Icecream

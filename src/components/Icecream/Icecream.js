import React from 'react';
import classes from './Icecream.module.css';
import Scoope from './Scoope/Scoope';

function Icecream({scoops}) {
    return (
          <div>
            <div className={classes.icecream}>
              <p className={classes.cone}></p>
              {/* <p>Please start adding scoops</p> */}
              {/* scoope component */}
              {scoops.map((scoop) => <Scoope key = {`${scoop} ${Math.random()}`} scoop = {scoop}/>)}

              <div className={classes.cherry}></div>
            </div>
          </div>
    )
}

export default Icecream

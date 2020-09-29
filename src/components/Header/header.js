import React from 'react'
import classes from './header.module.css';
import logo from '../../assets/logo.svg';
import reactlogo from '../../assets/react.svg';

function header() {
    return (
        <header>
        <div className="container">
          <div>
            <img className={classes.logo} src={logo} alt="Logo" />
            
          </div>
          <div className="textRight">
            <img src={reactlogo} alt="React" className={classes.reactLogo} /><strong
              >React</strong
            >
          </div>
        </div>
      </header>
    )
}

export default header

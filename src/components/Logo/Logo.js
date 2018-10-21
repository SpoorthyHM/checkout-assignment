import React from 'react';
import classes from './Logo.css';
import Logo from '../../assets/images/Logo-Color.png';

const logo = (props) => (
  <div className={classes.Logo} style={{height : props.height}}>
    <img src={Logo} alt="Lynch Creek Farm" />
  </div>
);

export default logo;

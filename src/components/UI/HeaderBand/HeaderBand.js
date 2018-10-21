import React from 'react';
import Cart from '../Cart/Cart';
import classes from './HeaderBand.css';
import logo from '../../../assets/images/Logo-White.png'

const headerBand = (props) => {
  return (
      <div className={classes.HeaderBand}>
        <img className={classes.Logo} src={logo} alt="Lynch Creek"/>
        <Cart 
            clicked={props.goToCart} 
            purchaseable={props.purchaseable}
            totalNoOfProducts={props.totalNoOfProducts}/>
      </div> );
}

export default headerBand;
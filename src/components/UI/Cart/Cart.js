import React from 'react';
import classes from './Cart.css';
import logo from '../../../assets/images/Icon-Cart.png';
import { Link } from 'react-router-dom';

const cart = (props) => (
  <div className={classes.Cart}>
    <div className={classes.CartCircle} onClick={props.clicked}>
      
      <Link
        to='/cartSummary'>
        <img className={classes.CartIcon}
              src={logo}
              alt="Cart"/>
       { (props.purchaseable) ?
         <div className={classes.Basketitems}>{props.totalNoOfProducts}</div> :
         null}
      </Link>
    </div>
    
  </div>
);

export default cart;
import React from 'react';
import classes from './Wreaths.css';
import Wreath from './Wreath/Wreath';
import Button from '../UI/Button/Button';

const Wreaths = (props) => {
  let transformedProducts = Object.keys(props.products)
  .map(igKey => {
    return [...Array(props.products[igKey])].map((_, i) => {
      return (
        <div className={classes.ProductColumn} key={props.products[igKey].id} >
          <Wreath 
            type={props.products[igKey].type}
            price={props.products[igKey].price}
            id={props.products[igKey].id}
            />
          <Button buttonType="Danger" disabled={props.disabledInfo[props.products[igKey].id]} clicked=
                  {() => props.removeProduct(props.products[igKey].id)}>Remove</Button>
          <Button buttonType="Success" clicked={() => props.addProduct(props.products[igKey].id)}>Add</Button>
          <span className={classes.Quantity}>Quantity: {props.products[igKey].quantity}</span>
        
        </div>
      )
    });
  });

  return(
    <div className={classes.WreathContainer}>
    <div className={classes.WreathProductRow}>
      {transformedProducts}
    </div>
  </div>
    );
  };

export default Wreaths;
import React from 'react';

import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div>
        <div className={classes.CheckoutSummary}>
            { Object.keys(props.products)
            .map(igKey => {
              if(props.products[igKey] > 0) {
                return (
                  <div className={classes.ProductColumn} key={igKey} >
                    <div className={classes.ProductContentBlock}>
                        <span className={classes.Details}>Product:      {igKey}</span>
                        <span className={classes.Details}>Quantity: {props.products[igKey]}</span>
                    </div>
                  </div>
              );
            }
          }) }

        </div>
        <Button 
        buttonType="Danger"
        clicked={props.checkoutCancelled}>CANCEL</Button>
    <Button 
        buttonType="Success"
        clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import classes from './Checkout.css';

class Checkout extends Component {

    constructor(props) {
      super(props);
      console.log(props);
    }

    state = {
        products: null,
        price: 0,
        purchaseable : false
    }

    componentWillMount() {
      const query = new URLSearchParams(this.props.location.search);
      const productsObj = {};
      let price = 0;
      let purchaseable = false;
      for(let param of query.entries()) {
        if(param[0] === 'price'){
          price = param[1]
        }else if(param[0] === 'purchaseable'){
          purchaseable = (param[1] === 'true') ? true : false;
        }else {
          productsObj[param[0]] = +param[1];
        }
        
      }

      this.setState({products: productsObj, price: price, purchaseable: purchaseable});
    }

    chececkoutCancelHandler = () => {
      this.props.history.push('/home');
    }

    chececkoutContinueHandler = () => {
      this.props.history.push('/cartSummary/contact-data')  ;
    }

    render() {
      let transformedProducts = <p>Your Cart is empty!</p>
      if(this.state.purchaseable) {
        transformedProducts = <CheckoutSummary products={this.state.products}
                  checkoutContinued={this.chececkoutContinueHandler}
                  checkoutCancelled={this.chececkoutCancelHandler}/>
        }

        return (
            <div className={classes.CheckoutBlock}>
                { transformedProducts }
                <Route 
                  path={this.props.match.path + '/contact-data'} 
                  render= {(props) => (
                  (this.state.purchaseable) ?
                  <ContactData products={this.state.products} price={this.state.price}
                    purchaseable={this.state.purchaseable} {...props}/> : null)}></Route>
            </div>
        );
    }
}

export default Checkout;
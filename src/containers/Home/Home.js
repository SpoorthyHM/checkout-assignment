import React, {Component } from 'react';
import HeaderBand from '../../components/UI/HeaderBand/HeaderBand';
import classes from './Home.css';
import Wreaths from '../../components/Wreaths/Wreaths';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

class Home extends Component {

  state= {
    products:  [
      { 
        id: 0,
        type: 'The Traditional',
        price: 45.95,
        quantity: 0
      },
      {
        id: 1,
        type: 'Three Cedars',
        price: 47.95,
        quantity: 0
      },
      {
        id: 2,
        type: 'King of the forest',
        price: 62.95,
        quantity: 0
      }
      ],
      totalPrice: 0,
      totalNoOfProducts: 0,
      purchaseable: false
  }

  addProductHandler = (id) => {
    const updateProducts = {
      ...this.state.products
    };
    let priceAddition =0,
        oldPrice =0,
        newPrice =0;
    for (var i in updateProducts) {
      if (updateProducts[i].id === id) {
         const oldQuantity = updateProducts[i].quantity;
         updateProducts[i].quantity = oldQuantity + 1;
         priceAddition = updateProducts[i].price;
         oldPrice = this.state.totalPrice;
         newPrice = oldPrice + priceAddition;
         break; 
      }
    }

    this.setState({products: updateProducts, totalPrice: newPrice});
    console.log("update ", updateProducts);
    this.updatePurchaseState(updateProducts);
  }

  removeProductHandler = (id) => {
    const updateProducts = {
      ...this.state.products
    };
    let priceDeduction =0,
        oldPrice =0,
        newPrice =0;
    for (var i in updateProducts) {
      if (updateProducts[i].id === id) {
         const oldQuantity = updateProducts[i].quantity;
         updateProducts[i].quantity = oldQuantity - 1;
         priceDeduction = updateProducts[i].price;
         oldPrice = this.state.totalPrice;
         newPrice = oldPrice - priceDeduction;
         break; 
      }
    }

    this.setState({products: updateProducts, totalPrice: newPrice});
    console.log("update ", updateProducts);
    this.updatePurchaseState(updateProducts);
  }

  updatePurchaseState(products) {
    const sum = Object.keys(products)
      .map(igKey => {
        return products[igKey].quantity;
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

      this.setState({totalNoOfProducts: sum, purchaseable: sum > 0 });
  }

  cartOnClickHandler = () =>{
    console.log(this.state.products);
    const queryParams = [];
    for(let i in this.state.products) {
      console.log("object " ,this.state.products[i]);
      queryParams.push(encodeURIComponent(this.state.products[i].type) + '='  + encodeURIComponent(this.state.products[i].quantity))
    }
    queryParams.push('price=' + this.state.totalPrice);
    queryParams.push('purchaseable=' + this.state.purchaseable);
    const queryString = queryParams.join('&');
    this.props.history.push({
        pathname: '/cartSummary',
        search: '?' + queryString
      }
      );
   }

  render() {
    let disabledInfo = {
      ...this.state.products
    }
    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key].quantity <= 0
    }
    return (
      <Auxiliary>
        <div className={classes.Home}>
          <HeaderBand goToCart={this.cartOnClickHandler}
              products={this.state.products}
              purchaseable={this.state.purchaseable}
              totalNoOfProducts={this.state.totalNoOfProducts}/>
        </div>
        <div className={classes.WrathSection}>
          
            <Wreaths 
              products={this.state.products}
              disabledInfo={disabledInfo}
              addProduct={this.addProductHandler}
              removeProduct={this.removeProductHandler}/>

        </div>
      </Auxiliary>
    );
  }
}

export default Home;
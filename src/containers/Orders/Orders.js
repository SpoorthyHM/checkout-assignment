import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

  state= {
    orders : [],
    loading: true
  }

  componentDidMount() {

    axios.get('/orders.json')
      .then(resp => {
        const fetchedOrders= [];
        for(let key in resp.data) {
          console.log(key);
          console.log(resp.data[key]);
          fetchedOrders.push({
            ...resp.data[key],
            id: key
          })
        }
        console.log(fetchedOrders);
        this.setState({loading: false, orders: fetchedOrders});
      })
      .catch(error=> {
        this.setState({loading: false});
      });

  }
  
  render() {
    return (
      <div>
        { this.state.orders.map(order => (
          <Order 
            orderID={order.id}
            products={order.products}
            price={+order.price}
            key={order.id}/>
        )) }
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios);
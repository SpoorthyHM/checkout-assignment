import React from 'react';
import classes from './Order.css';

const order = (props) => {
  const products = [];

  for(let productName in props.products) {
    products.push({
      name: productName,
      amount: props.products[productName]});
  }

  const productOutput = products.map(product => {
    return <span 
      style={{textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px',
              padding: '5px',
              border: '2px solid #ccc',
              borderRadius: '2px'}}
      key={product.name}>{product.name}({product.amount})</span>
  });
  var orderID = props.orderID.toString();
  const order= orderID.toString().substring(1,orderID.length);
  
  return(
    
    <div className={classes.Order}>
      <p>Order #ID : <span>{order}</span></p>
      <p>Product : <span>{productOutput}</span> </p>
      <p>Price: <span><strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></span></p>
  </div>
  );
}

export default order;
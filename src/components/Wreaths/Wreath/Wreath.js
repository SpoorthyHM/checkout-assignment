import React from 'react';
import classes from './Wreath.css';

const Wreath = (props) => {
  let img_src = require(`../../../assets/images/Wreaths/Wreath${props.id}.jpg`);
    return (
        <div>
          <img src={img_src} alt="Product" />
          <div className={classes.ProductContentBlock}>
            <span className={classes.Details}>{props.type}</span>
            <span className={classes.Details}>${props.price}</span>
          </div>
        </div>
    )}

export default Wreath;
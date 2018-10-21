import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem
      link="/home"
      exact>Home
    </NavigationItem>
    <NavigationItem
      link="/about"
      exact>About
    </NavigationItem>
    <NavigationItem
      link="/orders"
      exact>My Orders
    </NavigationItem>
  </ul>
);

export default navigationItems;

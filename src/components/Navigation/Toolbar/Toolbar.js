import React from 'react';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleDrawer from '../SideDrawer/ToggleDrawer/ToggleDrawer';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <ToggleDrawer clicked={props.drawerToggleClicked}/>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
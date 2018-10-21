import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import About from './containers/About/About';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/cartSummary' component={Checkout}/>
            <Route path='/orders' exact component={Orders}/>
            <Route path='/about' exact component={About}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

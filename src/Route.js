import React,{Component} from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './App.js';
import Home from './Home.js';
import Account from './Account.js';
import About from './About.js';

export default(
  <Route path="/" component={App}>
      <Route path="/home" component={Home}></Route>
      <Route path="/account" component={Account}></Route>
      <Route path="/about" component={About}></Route>
      <IndexRoute component={Home} />
  </Route>
);

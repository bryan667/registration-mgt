import React from 'react';
import {Switch, Route} from 'react-router'
import Home from './components/home'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}></Route>
    </Switch>
  );
};

export default Routes;
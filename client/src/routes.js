import React from 'react';
import {Switch, Route} from 'react-router'
import Home from './components/home'
import Register from './components/register_login/register'
import Layout from './hoc/layout'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/register' exact component={Register}></Route>
      </Switch>
    </Layout>
  );
};

export default Routes;
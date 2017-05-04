import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const Home = () => <h2>Home</h2>;

const SwitchTest = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/home"/>
      <Route path="/home" component={Home}/>
    </Switch>
  </BrowserRouter>
);

export default SwitchTest;

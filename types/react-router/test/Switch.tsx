import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const User = () => <h2>User</h2>;
const Contact = () => <h2>Contact</h2>;

const SwitchTest = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/home"/>
      <Route path="/home" component={Home}/>
      {[
        <Route path="/user" component={User}/>,
        <Route path="/about" component={About}/>,
        <Route path={["/contact", "/connect"]} component={Contact}/>
      ]}
    </Switch>
  </BrowserRouter>
);

export default SwitchTest;

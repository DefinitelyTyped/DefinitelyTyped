import * as React from 'react';
import {
  MemoryRouter,
  Route,
  Link
} from 'react-router-dom';

const initialRouterEntries = [
  '/',
  {
    pathname: '/about'
  }
];

const MemoryRouterExample = () => (
  <MemoryRouter initialEntries={initialRouterEntries} initialIndex={1}>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </MemoryRouter>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default MemoryRouterExample;

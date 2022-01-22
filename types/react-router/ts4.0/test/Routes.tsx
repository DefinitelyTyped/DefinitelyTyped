import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const User = () => <h2>User</h2>;
const Contact = () => <h2>Contact</h2>;

const RoutesTest = () => (
  <BrowserRouter>
    <Routes>
      <Navigate to="/home"/>
      <Route path="/home" element={Home}/>
      {[
        <Route path="/user" element={User}/>,
        <Route path="/about" element={About}/>,
        <Route path={["/contact", "/connect"]} element={Contact}/>
      ]}
    </Routes>
  </BrowserRouter>
);

export default RoutesTest;

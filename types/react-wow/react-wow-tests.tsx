import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';

const App = () => <ReactWOW animation='fadeIn'><img src='https://unsplash.it/900/900/?random' /></ReactWOW>;

ReactDOM.render(<App/>, document.getElementById('app'));

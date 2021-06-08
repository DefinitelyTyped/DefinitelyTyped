/// <reference types="../next"/>
import React = require('react');
import ReactDOM = require('react-dom');

function createRoot() {
    const root = ReactDOM.createRoot(document);

    root.render(<div>initial render</div>);
}

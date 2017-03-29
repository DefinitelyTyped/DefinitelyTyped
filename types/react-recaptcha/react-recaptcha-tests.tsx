import Recaptcha = require('react-recaptcha');
import ReactDOM = require("react-dom");
import React = require("react");

ReactDOM.render(
  <Recaptcha
    sitekey="xxxxxxxxxxxxxxxxxxxx"
  />,
  document.getElementById('example')
);
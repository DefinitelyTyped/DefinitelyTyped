/// <reference path="./radium.d.ts" />

import Radium = require('radium');
import React = require("react");

@Radium
export class Something extends React.Component<any, any>{
  render(){
    return <div>Hello World!</div>;
  }
}

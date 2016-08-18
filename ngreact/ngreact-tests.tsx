/// <reference path="../react/react.d.ts" />
/// <reference path="ngreact.d.ts"/>

import * as React from "react";
import { ReactDirective } from "ngreact";

const app = angular.module("app", ["react"]);

app.directive('helloComponent', function(reactDirective: ReactDirective) {
  return reactDirective(HelloComponent);
});

app.directive('helloComponent', function(reactDirective: ReactDirective) {
  return reactDirective('HelloComponent');
});

app.directive('hello', function(reactDirective: ReactDirective) {
  return reactDirective(HelloComponent, ['fname', 'lname']);
});

app.directive('hello', function(reactDirective: ReactDirective) {
  return reactDirective(HelloComponent, undefined, {restrict: 'C'});
});

app.directive('helloComponent', function(reactDirective: ReactDirective, $location: ng.ILocationService) {
  return reactDirective(HelloComponent, undefined, {}, { $location });
});

var HelloComponent = React.createClass({
  propTypes: {
    fname : React.PropTypes.string.isRequired,
    lname : React.PropTypes.string.isRequired
  },
  render: function() {
    return <span>Hello {this.props.fname} {this.props.lname}</span>;
  }
})
app.value('HelloComponent', HelloComponent);

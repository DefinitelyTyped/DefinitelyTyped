import * as angular from "angular";
import * as React from "react";
import * as PropTypes from "prop-types";
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

app.directive('helloComponent', function(reactDirective: ReactDirective, $location: angular.ILocationService) {
  return reactDirective(HelloComponent, undefined, {}, { $location });
});

interface HelloProps {
  fname: string;
  lname: string;
}

class HelloComponent extends React.Component<HelloProps> {
  static propTypes = {
    fname : PropTypes.string.isRequired,
    lname : PropTypes.string.isRequired
  }

  render() {
    return <span>Hello {this.props.fname} {this.props.lname}</span>;
  }
}

app.value('HelloComponent', HelloComponent);

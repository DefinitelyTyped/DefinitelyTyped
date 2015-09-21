/// <reference path="react-redux.d.ts" />
/// <reference path="../react/react.d.ts"/>

import { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state: any): any {
  return {
    value: state.counter
  };
}

let increment: Function;
function mapDispatchToProps(dispatch: any): any {
  return {
    onIncrement: () => dispatch(increment())
  };
}

export class Counter extends Component<string, string> {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

/// <reference path="react-redux.d.ts" />
/// <reference path="../react/react.d.ts"/>
/// <reference path="../redux/redux.d.ts" />

import { Component } from 'react';
import * as React from 'react';
import { Store } from 'redux';
import { connect, Provider } from 'react-redux';

class MyRootComponent extends Component<any, any> {

}
var store: Store;

React.render(
  <Provider store={store}>
    {() => <MyRootComponent />}
  </Provider>,
  document.body
);



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

@connect(mapStateToProps)
export class Counter2 extends Component<string, string> {
}




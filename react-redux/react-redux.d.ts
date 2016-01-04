// Type definitions for react-redux 2.1.2
// Project: https://github.com/rackt/react-redux
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../redux/redux.d.ts" />

declare module "react-redux" {
  import { Component } from 'react';
  import { Store, Dispatch, ActionCreator } from 'redux';

  export class ElementClass extends Component<any, any> { }
  export interface ClassDecorator {
    <T extends (typeof ElementClass)>(component: T): T
  }

  /**
   * Connects a React component to a Redux store.
   * @param mapStateToProps
   * @param mapDispatchToProps
   * @param mergeProps
   * @param options
     */
  export function connect(mapStateToProps?: MapStateToProps,
                          mapDispatchToProps?: MapDispatchToPropsFunction|MapDispatchToPropsObject,
                          mergeProps?: MergeProps,
                          options?: Options): ClassDecorator;

  interface MapStateToProps {
    (state: any, ownProps?: any): any;
  }

  interface MapDispatchToPropsFunction {
    (dispatch: Dispatch, ownProps?: any): any;
  }

  interface MapDispatchToPropsObject {
    [name: string]: ActionCreator;
  }

  interface MergeProps {
    (stateProps: any, dispatchProps: any, ownProps: any): any;
  }

  interface Options {
    /**
     * If true, implements shouldComponentUpdate and shallowly compares the result of mergeProps,
     * preventing unnecessary updates, assuming that the component is a “pure” component
     * and does not rely on any input or state other than its props and the selected Redux store’s state.
     * Defaults to true.
     * @default true
     */
    pure: boolean;
  }

  export interface Property {
    /**
     * The single Redux store in your application.
     */
    store?: Store;
    children?: Function;
  }

  /**
   * Makes the Redux store available to the connect() calls in the component hierarchy below.
   */
  export class Provider extends Component<Property, {}> { }
}

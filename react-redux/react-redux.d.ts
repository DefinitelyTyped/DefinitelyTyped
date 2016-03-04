// Type definitions for react-redux 4.4.0
// Project: https://github.com/rackt/react-redux
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../redux/redux.d.ts" />

declare module "react-redux" {
  import { ComponentClass, Component, StatelessComponent, Props, ReactNode } from 'react';
  import { Store, Dispatch, ActionCreator } from 'redux';

  /** Generic decorator, that receives T = original props, U = own props */
  interface ComponentDecorator<T extends Props<any>, U extends Props<any>> {
    (component: ComponentClass<T>): ComponentClass<U>;
  }

  /**
   * Decorator that infers the type from the original component
   *
   * Can't use the above decorator because it would default the type to {}
   */
  export interface InferableComponentDecorator {
    <P, TComponentConstruct extends (ComponentClass<P>|StatelessComponent<P>)>(component: TComponentConstruct): TComponentConstruct;
  }

  /**
   * Connects a React component to a Redux store.
   *
   * - Without arguments, just wraps the component, without changing the behavior / props
   *
   * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
   * is to override ownProps (as stated in the docs), so what remains is everything that's
   * not a state or dispatch prop
   *
   * - When 3rd param is passed, we don't know if ownProps propagate and whether they
   * should be valid component props, because it depends on mergeProps implementation.
   * As such, it is the user's responsability to extend ownProps interface from state or
   * dispatch props or both when applicable
   *
   * @param mapStateToProps
   * @param mapDispatchToProps
   * @param mergeProps
   * @param options
   */
  export function connect(): InferableComponentDecorator;
  export function connect<T extends Props<any>, U extends Props<any>, V extends Props<any>>(
    mapStateToProps: MapStateToProps<T, V>,
    mapDispatchToProps?: MapDispatchToPropsFunction<U, V>|MapDispatchToPropsObject
  ): ComponentDecorator<T & U, V>;
  export function connect<T extends Props<any>, U extends Props<any>, V extends Props<any>>(
    mapStateToProps: MapStateToProps<T, V>,
    mapDispatchToProps: MapDispatchToPropsFunction<U, V>|MapDispatchToPropsObject,
    mergeProps: MergeProps<T, U, V>,
    options?: Options
  ): ComponentDecorator<T & U, V>;

  interface MapStateToProps<T, V> {
    (state: any, ownProps?: V): T;
  }

  interface MapDispatchToPropsFunction<U, V> {
    (dispatch: Dispatch, ownProps?: V): U;
  }

  interface MapDispatchToPropsObject {
    [name: string]: ActionCreator;
  }

  interface MergeProps<T, U, V> {
    (stateProps: T, dispatchProps: U, ownProps: V): T & U;
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

  export interface ProviderProps extends Props<Provider> {
    /**
     * The single Redux store in your application.
     */
    store?: Store;
    children?: ReactNode;
  }

  /**
   * Makes the Redux store available to the connect() calls in the component hierarchy below.
   */
  export class Provider extends Component<ProviderProps, {}> { }
}

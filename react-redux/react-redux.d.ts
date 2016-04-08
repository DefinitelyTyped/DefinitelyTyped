// Type definitions for react-redux 4.4.0
// Project: https://github.com/rackt/react-redux
// Definitions by: Qubo <https://github.com/tkqubo>, Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../redux/redux.d.ts" />

declare module "react-redux" {
  import { ComponentClass, Component, StatelessComponent, ReactNode } from 'react';
  import { Store, Dispatch, ActionCreator } from 'redux';

  interface ComponentDecorator<TOriginalProps, TOwnProps> {
    (component: ComponentClass<TOriginalProps>|StatelessComponent<TOriginalProps>): ComponentClass<TOwnProps>;
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
   * As such, it is the user's responsibility to extend ownProps interface from state or
   * dispatch props or both when applicable
   *
   * @param mapStateToProps
   * @param mapDispatchToProps
   * @param mergeProps
   * @param options
   */
  export function connect(): InferableComponentDecorator;

  export function connect<TStateProps, TDispatchProps, TOwnProps>(
    mapStateToProps: MapStateToProps<TStateProps, TOwnProps>,
    mapDispatchToProps?: MapDispatchToPropsFunction<TDispatchProps, TOwnProps>|MapDispatchToPropsObject
  ): ComponentDecorator<TStateProps & TDispatchProps, TOwnProps>;

  export function connect<TStateProps, TDispatchProps, TOwnProps>(
    mapStateToProps: MapStateToProps<TStateProps, TOwnProps>,
    mapDispatchToProps: MapDispatchToPropsFunction<TDispatchProps, TOwnProps>|MapDispatchToPropsObject,
    mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps>,
    options?: Options
  ): ComponentDecorator<TStateProps & TDispatchProps, TOwnProps>;

  interface MapStateToProps<TStateProps, TOwnProps> {
    (state: any, ownProps?: TOwnProps): TStateProps;
  }

  interface MapDispatchToPropsFunction<TDispatchProps, TOwnProps> {
    (dispatch: Dispatch, ownProps?: TOwnProps): TDispatchProps;
  }

  interface MapDispatchToPropsObject {
    [name: string]: ActionCreator;
  }

  interface MergeProps<TStateProps, TDispatchProps, TOwnProps> {
    (stateProps: TStateProps, dispatchProps: TDispatchProps, ownProps: TOwnProps): TStateProps & TDispatchProps;
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

  export interface ProviderProps {
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

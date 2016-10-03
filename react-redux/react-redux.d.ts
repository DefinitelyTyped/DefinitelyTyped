// Type definitions for react-redux 4.4.0
// Project: https://github.com/rackt/react-redux
// Definitions by: Qubo <https://github.com/tkqubo>, Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../redux/redux.d.ts" />

declare namespace ReactRedux {
  type ComponentClass<P> = __React.ComponentClass<P>;
  type StatelessComponent<P> = __React.StatelessComponent<P>;
  type ReactNode = __React.ReactNode;
  type Store<S> = Redux.Store<S>;
  type Dispatch<S> = Redux.Dispatch<S>;
  type ActionCreator<A> = Redux.ActionCreator<A>;

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
    mapStateToProps: FuncOrSelf<MapStateToProps<TStateProps, TOwnProps>>,
    mapDispatchToProps?: FuncOrSelf<MapDispatchToPropsFunction<TDispatchProps, TOwnProps>|MapDispatchToPropsObject>
  ): ComponentDecorator<TStateProps & TDispatchProps, TOwnProps>;

  export function connect<TStateProps, TDispatchProps, TOwnProps>(
    mapStateToProps: FuncOrSelf<MapStateToProps<TStateProps, TOwnProps>>,
    mapDispatchToProps: FuncOrSelf<MapDispatchToPropsFunction<TDispatchProps, TOwnProps>|MapDispatchToPropsObject>,
    mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps>,
    options?: Options
  ): ComponentDecorator<TStateProps & TDispatchProps, TOwnProps>;

  type FuncOrSelf<T> = T | (() => T);

  interface MapStateToProps<TStateProps, TOwnProps> {
    (state: any, ownProps?: TOwnProps): TStateProps;
  }

  interface MapDispatchToPropsFunction<TDispatchProps, TOwnProps> {
    (dispatch: Dispatch<any>, ownProps?: TOwnProps): TDispatchProps;
  }

  interface MapDispatchToPropsObject {
    [name: string]: ActionCreator<any>;
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
    pure?: boolean;
    /**
    * If true, stores a ref to the wrapped component instance and makes it available via 
    * getWrappedInstance() method. Defaults to false.
    */
    withRef?: boolean;
  }

  export interface ProviderProps {
    /**
     * The single Redux store in your application.
     */
    store?: Store<any>;
    children?: ReactNode;
  }

  /**
   * Makes the Redux store available to the connect() calls in the component hierarchy below.
   */
  export class Provider extends __React.Component<ProviderProps, {}> { }
}

declare module "react-redux" {
  export = ReactRedux;
}

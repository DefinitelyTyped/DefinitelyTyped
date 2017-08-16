// Type definitions for react-redux 5.0.5
// Project: https://github.com/rackt/react-redux
// Definitions by: Qubo <https://github.com/tkqubo>,
//                 Sean Kelley <https://github.com/seansfkelley>,
//                 Thomas Hasner <https://github.com/thasner>,
//                 Kenzie Togami <https://github.com/kenzierocks>,
//                 Curits Layne <https://github.com/clayne11>
//                 Frank Tan <https://github.com/tansongyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from 'react';
import * as Redux from 'redux';

type ComponentClass<P> = React.ComponentClass<P>;
type StatelessComponent<P> = React.StatelessComponent<P>;
type Component<P> = React.ComponentType<P>;
type ReactNode = React.ReactNode;
type Store<S> = Redux.Store<S>;
type Dispatch<S> = Redux.Dispatch<S>;
type ActionCreator<A> = Redux.ActionCreator<A>;

// Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export interface DispatchProp<S> {
  dispatch?: Dispatch<S>;
}

interface AdvancedComponentDecorator<TProps, TOwnProps> {
    (component: Component<TProps>): ComponentClass<TOwnProps>;
}

// Injects props and removes them from the prop requirements.
// Will not pass through the injected props if they are passed in during
// render. Also adds new prop requirements from TNeedsProps.
export interface InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> {
    <P extends TInjectedProps>(
        component: Component<P>
    ): ComponentClass<Omit<P, keyof TInjectedProps> & TNeedsProps>
}

// Injects props and removes them from the prop requirements.
// Will not pass through the injected props if they are passed in during
// render.
export type InferableComponentEnhancer<TInjectedProps> =
    InferableComponentEnhancerWithProps<TInjectedProps, {}>

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
export declare function connect(): InferableComponentEnhancer<DispatchProp<any>>;

export declare function connect<TStateProps, no_dispatch, TOwnProps>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>
): InferableComponentEnhancerWithProps<TStateProps & DispatchProp<any>, TOwnProps>;

export declare function connect<no_state, TDispatchProps, TOwnProps>(
    mapStateToProps: null | undefined,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>
): InferableComponentEnhancerWithProps<TDispatchProps, TOwnProps>;

export declare function connect<TStateProps, TDispatchProps, TOwnProps>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>
): InferableComponentEnhancerWithProps<TStateProps & TDispatchProps, TOwnProps>;

export declare function connect<TStateProps, no_dispatch, TOwnProps, TMergedProps>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: null | undefined,
    mergeProps: MergeProps<TStateProps, undefined, TOwnProps, TMergedProps>,
): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

export declare function connect<no_state, TDispatchProps, TOwnProps, TMergedProps>(
    mapStateToProps: null | undefined,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps: MergeProps<undefined, TDispatchProps, TOwnProps, TMergedProps>,
): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

export declare function connect<no_state, no_dispatch, TOwnProps, TMergedProps>(
    mapStateToProps: null | undefined,
    mapDispatchToProps: null | undefined,
    mergeProps: MergeProps<undefined, undefined, TOwnProps, TMergedProps>,
): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

export declare function connect<TStateProps, TDispatchProps, TOwnProps, TMergedProps>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

export declare function connect<TStateProps, no_dispatch, TOwnProps>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: null | undefined,
    mergeProps: null | undefined,
    options: Options<TStateProps, TOwnProps>
): InferableComponentEnhancerWithProps<DispatchProp<any> & TStateProps, TOwnProps>;

export declare function connect<no_state, TDispatchProps, TOwnProps>(
    mapStateToProps: null | undefined,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps: null | undefined,
    options: Options<no_state, TOwnProps>
): InferableComponentEnhancerWithProps<TDispatchProps, TOwnProps>;

export declare function connect<TStateProps, TDispatchProps, TOwnProps>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps: null | undefined,
    options: Options<TStateProps, TOwnProps>
): InferableComponentEnhancerWithProps<TStateProps & TDispatchProps, TOwnProps>;

export declare function connect<TStateProps, TDispatchProps, TOwnProps, TMergedProps>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
    options: Options<TStateProps, TOwnProps, TMergedProps>
): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

interface MapStateToProps<TStateProps, TOwnProps> {
    (state: any, ownProps: TOwnProps): TStateProps;
}

interface MapStateToPropsFactory<TStateProps, TOwnProps> {
    (initialState: any, ownProps: TOwnProps): MapStateToProps<TStateProps, TOwnProps>;
}

type MapStateToPropsParam<TStateProps, TOwnProps> = MapStateToProps<TStateProps, TOwnProps> | MapStateToPropsFactory<TStateProps, TOwnProps>;

interface MapDispatchToPropsFunction<TDispatchProps, TOwnProps> {
    (dispatch: Dispatch<any>, ownProps: TOwnProps): TDispatchProps;
}

interface MapDispatchToPropsObject {
    [name: string]: ActionCreator<any>;
}

type MapDispatchToProps<TDispatchProps, TOwnProps> =
    MapDispatchToPropsFunction<TDispatchProps, TOwnProps> | MapDispatchToPropsObject;

interface MapDispatchToPropsFactory<TDispatchProps, TOwnProps> {
    (dispatch: Dispatch<any>, ownProps: TOwnProps): MapDispatchToProps<TDispatchProps, TOwnProps>;
}

type MapDispatchToPropsParam<TDispatchProps, TOwnProps> = MapDispatchToProps<TDispatchProps, TOwnProps> | MapDispatchToPropsFactory<TDispatchProps, TOwnProps>;

interface MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps> {
    (stateProps: TStateProps, dispatchProps: TDispatchProps, ownProps: TOwnProps): TMergedProps;
}

interface Options<TStateProps = {}, TOwnProps = {}, TMergedProps = {}> extends ConnectOptions {
    /**
     * If true, implements shouldComponentUpdate and shallowly compares the result of mergeProps,
     * preventing unnecessary updates, assuming that the component is a “pure” component
     * and does not rely on any input or state other than its props and the selected Redux store’s state.
     * Defaults to true.
     * @default true
     */
    pure?: boolean;

    /**
     * When pure, compares incoming store state to its previous value.
     * @default strictEqual
     */
    areStatesEqual?: (nextState: any, prevState: any) => boolean;
    
    /**
     * When pure, compares incoming props to its previous value.
     * @default shallowEqual
     */
    areOwnPropsEqual?: (nextOwnProps: TOwnProps, prevOwnProps: TOwnProps) => boolean;
    
    /**
     * When pure, compares the result of mapStateToProps to its previous value.
     * @default shallowEqual
     */
    areStatePropsEqual?: (nextStateProps: TStateProps, prevStateProps: TStateProps) => boolean;

    /**
     * When pure, compares the result of mergeProps to its previous value.
     * @default shallowEqual
     */
    areMergedPropsEqual?: (nextMergedProps: TMergedProps, prevMergedProps: TMergedProps) => boolean;
}

/**
 * Connects a React component to a Redux store. It is the base for {@link connect} but is less opinionated about
 * how to combine <code>state</code>, <code>props</code>, and <code>dispatch</code> into your final props. It makes no
 * assumptions about defaults or memoization of results, leaving those responsibilities to the caller.It does not
 * modify the component class passed to it; instead, it returns a new, connected component class for you to use.
 *
 * @param selectorFactory The selector factory. See {@type SelectorFactory} for details.
 * @param connectOptions If specified, further customizes the behavior of the connector. Additionally, any extra
 *     options will be passed through to your <code>selectorFactory</code> in the <code>factoryOptions</code> argument.
 */
export declare function connectAdvanced<S, TProps, TOwnProps, TFactoryOptions = {}>(
    selectorFactory: SelectorFactory<S, TProps, TOwnProps, TFactoryOptions>,
    connectOptions?: ConnectOptions & TFactoryOptions
): AdvancedComponentDecorator<TProps, TOwnProps>;

/**
 * Initializes a selector function (during each instance's constructor). That selector function is called any time the
 * connector component needs to compute new props, as a result of a store state change or receiving new props. The
 * result of <code>selector</code> is expected to be a plain object, which is passed as the props to the wrapped
 * component. If a consecutive call to <code>selector</code> returns the same object (<code>===</code>) as its previous
 * call, the component will not be re-rendered. It's the responsibility of <code>selector</code> to return that
 * previous object when appropriate.
 */
export interface SelectorFactory<S, TProps, TOwnProps, TFactoryOptions> {
    (dispatch: Dispatch<S>, factoryOptions: TFactoryOptions): Selector<S, TProps, TOwnProps>
}

export interface Selector<S, TProps, TOwnProps> {
    (state: S, ownProps: TOwnProps): TProps
}

export interface ConnectOptions {
    /**
     * Computes the connector component's displayName property relative to that of the wrapped component. Usually
     * overridden by wrapper functions.
     *
     * @default name => 'ConnectAdvanced('+name+')'
     * @param componentName
     */
    getDisplayName?: (componentName: string) => string
    /**
     * Shown in error messages. Usually overridden by wrapper functions.
     *
     * @default 'connectAdvanced'
     */
    methodName?: string
    /**
     * If defined, a property named this value will be added to the props passed to the wrapped component. Its value
     * will be the number of times the component has been rendered, which can be useful for tracking down unnecessary
     * re-renders.
     *
     * @default undefined
     */
    renderCountProp?: string
    /**
     * Controls whether the connector component subscribes to redux store state changes. If set to false, it will only
     * re-render on <code>componentWillReceiveProps</code>.
     *
     * @default true
     */
    shouldHandleStateChanges?: boolean
    /**
     * The key of props/context to get the store. You probably only need this if you are in the inadvisable position of
     * having multiple stores.
     *
     * @default 'store'
     */
    storeKey?: string
    /**
     * If true, stores a ref to the wrapped component instance and makes it available via getWrappedInstance() method.
     *
     * @default false
     */
    withRef?: boolean
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
export class Provider extends React.Component<ProviderProps, {}> { }

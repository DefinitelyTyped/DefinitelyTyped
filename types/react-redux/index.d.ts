// Type definitions for react-redux 6.0.4
// Project: https://github.com/reduxjs/react-redux
// Definitions by: Qubo <https://github.com/tkqubo>,
//                 Kenzie Togami <https://github.com/kenzierocks>,
//                 Curits Layne <https://github.com/clayne11>
//                 Frank Tan <https://github.com/tansongyang>
//                 Nicholas Boll <https://github.com/nicholasboll>
//                 Dibyo Majumdar <https://github.com/mdibyo>
//                 Prashant Deva <https://github.com/pdeva>
//                 Thomas Charlat <https://github.com/kallikrein>
//                 Valentin Descamps <https://github.com/val1984>
//                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
//                 Anatoli Papirovski <https://github.com/apapirovski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// Known Issue:
// There is a known issue in TypeScript, which doesn't allow decorators to change the signature of the classes
// they are decorating. Due to this, if you are using @connect() decorator in your code,
// you will see a bunch of errors from TypeScript. The current workaround is to use connect() as a function call on
// a separate line instead of as a decorator. Discussed in this github issue:
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796

// NOTE about the wrong react-redux version in the header comment:
// The actual react-redux version is not 6.0.0, but we had to increase the major version
// to update this type definitions for redux@4.x from redux@3.x.
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/25321

import {
    Component,
    ComponentClass,
    ComponentType,
    StatelessComponent
} from 'react';

import {
    Action,
    ActionCreator,
    AnyAction,
    Dispatch,
    Store
} from 'redux';

// Omit taken from https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface DispatchProp<A extends Action = AnyAction> {
    dispatch: Dispatch<A>;
}

interface AdvancedComponentDecorator<TProps, TOwnProps> {
    (component: ComponentType<TProps>): ComponentClass<TOwnProps>;
}

/**
 * A property P will be present if:
 * - it is present in DecorationTargetProps
 *
 * Its value will be dependent on the following conditions
 * - if property P is present in InjectedProps and its definition extends the definition
 *   in DecorationTargetProps, then its definition will be that of DecorationTargetProps[P]
 * - if property P is not present in InjectedProps then its definition will be that of
 *   DecorationTargetProps[P]
 * - if property P is present in InjectedProps but does not extend the
 *   DecorationTargetProps[P] definition, its definition will be that of InjectedProps[P]
 */
type Matching<InjectedProps, DecorationTargetProps> = {
	[P in keyof DecorationTargetProps]: P extends keyof InjectedProps
		? InjectedProps[P] extends DecorationTargetProps[P]
			? DecorationTargetProps[P]
			: InjectedProps[P]
		: DecorationTargetProps[P];
};

/**
 * a property P will be present if :
 * - it is present in both DecorationTargetProps and InjectedProps
 * - InjectedProps[P] can satisfy DecorationTargetProps[P]
 * ie: decorated component can accept more types than decorator is injecting
 *
 * For decoration, inject props or ownProps are all optionally
 * required by the decorated (right hand side) component.
 * But any property required by the decorated component must be satisfied by the injected property.
 */
type Shared<
    InjectedProps,
    DecorationTargetProps extends Shared<InjectedProps, DecorationTargetProps>
    > = {
        [P in Extract<keyof InjectedProps, keyof DecorationTargetProps>]?: InjectedProps[P] extends DecorationTargetProps[P] ? DecorationTargetProps[P] : never;
    };

// Infers prop type from component C
type GetProps<C> = C extends ComponentType<infer P> ? P : never;

// Applies LibraryManagedAttributes (proper handling of defaultProps
// and propTypes), as well as defines WrappedComponent.
type ConnectedComponentClass<C, P> = ComponentClass<JSX.LibraryManagedAttributes<C, P>> & {
	WrappedComponent: C;
}

// Injects props and removes them from the prop requirements.
// Will not pass through the injected props if they are passed in during
// render. Also adds new prop requirements from TNeedsProps.
export interface InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> {
	<C extends ComponentType<Matching<TInjectedProps, GetProps<C>>>>(
		component: C
	): ConnectedComponentClass<C, Omit<GetProps<C>, keyof Shared<TInjectedProps, GetProps<C>>> & TNeedsProps>
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
export interface Connect {
    (): InferableComponentEnhancer<DispatchProp>;

    <TStateProps = {}, no_dispatch = {}, TOwnProps = {}, State = {}>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>
    ): InferableComponentEnhancerWithProps<TStateProps & DispatchProp, TOwnProps>;

    <no_state = {}, TDispatchProps = {}, TOwnProps = {}>(
        mapStateToProps: null | undefined,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>
    ): InferableComponentEnhancerWithProps<TDispatchProps, TOwnProps>;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = {}>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>
    ): InferableComponentEnhancerWithProps<TStateProps & TDispatchProps, TOwnProps>;

    <TStateProps = {}, no_dispatch = {}, TOwnProps = {}, TMergedProps = {}, State = {}>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: null | undefined,
        mergeProps: MergeProps<TStateProps, undefined, TOwnProps, TMergedProps>,
    ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

    <no_state = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}>(
        mapStateToProps: null | undefined,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
        mergeProps: MergeProps<undefined, TDispatchProps, TOwnProps, TMergedProps>,
    ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

    <no_state = {}, no_dispatch = {}, TOwnProps = {}, TMergedProps = {}>(
        mapStateToProps: null | undefined,
        mapDispatchToProps: null | undefined,
        mergeProps: MergeProps<undefined, undefined, TOwnProps, TMergedProps>,
    ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}, State = {}>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
        mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
    ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

    <TStateProps = {}, no_dispatch = {}, TOwnProps = {}, State = {}>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: null | undefined,
        mergeProps: null | undefined,
        options: Options<State, TStateProps, TOwnProps>
    ): InferableComponentEnhancerWithProps<DispatchProp & TStateProps, TOwnProps>;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}>(
        mapStateToProps: null | undefined,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
        mergeProps: null | undefined,
        options: Options<{}, TStateProps, TOwnProps>
    ): InferableComponentEnhancerWithProps<TDispatchProps, TOwnProps>;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = {}>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
        mergeProps: null | undefined,
        options: Options<State, TStateProps, TOwnProps>
    ): InferableComponentEnhancerWithProps<TStateProps & TDispatchProps, TOwnProps>;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}, State = {}>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
        mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
        options: Options<State, TStateProps, TOwnProps, TMergedProps>
    ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;
}

/**
 * The connect function. See {@type Connect} for details.
 */
export declare const connect: Connect;

interface MapStateToProps<TStateProps, TOwnProps, State> {
    (state: State, ownProps: TOwnProps): TStateProps;
}

interface MapStateToPropsFactory<TStateProps, TOwnProps, State> {
    (initialState: State, ownProps: TOwnProps): MapStateToProps<TStateProps, TOwnProps, State>;
}

type MapStateToPropsParam<TStateProps, TOwnProps, State> = MapStateToPropsFactory<TStateProps, TOwnProps, State> | MapStateToProps<TStateProps, TOwnProps, State> | null | undefined;

interface MapDispatchToPropsFunction<TDispatchProps, TOwnProps> {
    (dispatch: Dispatch<Action>, ownProps: TOwnProps): TDispatchProps;
}

type MapDispatchToProps<TDispatchProps, TOwnProps> =
    MapDispatchToPropsFunction<TDispatchProps, TOwnProps> | TDispatchProps;

interface MapDispatchToPropsFactory<TDispatchProps, TOwnProps> {
    (dispatch: Dispatch<Action>, ownProps: TOwnProps): MapDispatchToProps<TDispatchProps, TOwnProps>;
}

type MapDispatchToPropsParam<TDispatchProps, TOwnProps> = MapDispatchToPropsFactory<TDispatchProps, TOwnProps> | MapDispatchToProps<TDispatchProps, TOwnProps>;

interface MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps> {
    (stateProps: TStateProps, dispatchProps: TDispatchProps, ownProps: TOwnProps): TMergedProps;
}

interface Options<State = {}, TStateProps = {}, TOwnProps = {}, TMergedProps = {}> extends ConnectOptions {
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
    areStatesEqual?: (nextState: State, prevState: State) => boolean;

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
    (dispatch: Dispatch<Action>, factoryOptions: TFactoryOptions): Selector<S, TProps, TOwnProps>
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

export interface ProviderProps<A extends Action = AnyAction> {
    /**
     * The single Redux store in your application.
     */
    store: Store<any, A>;
}

/**
 * Makes the Redux store available to the connect() calls in the component hierarchy below.
 */
export class Provider<A extends Action = AnyAction> extends Component<ProviderProps<A>> { }

/**
 * Creates a new <Provider> which will set the Redux Store on the passed key of the context. You probably only need this
 * if you are in the inadvisable position of having multiple stores. You will also need to pass the same storeKey to the
 * options argument of connect.
 *
 * @param storeKey The key of the context on which to set the store.
 */
export declare function createProvider(storeKey: string): typeof Provider;

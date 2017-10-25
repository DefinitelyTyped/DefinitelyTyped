// Type definitions for Recompose 0.26
// Project: https://github.com/acdlite/recompose
// Definitions by: Iskander Sierra <https://github.com/iskandersierra>
//                 Samuel DeSota <https://github.com/mrapogee>
//                 Curtis Layne <https://github.com/clayne11>
//                 Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import {
    ComponentType,
    ComponentClass,
    EventHandler,
    ReactElement,
    ReactInstance,
    ReactNode,
    StatelessComponent,
    ValidationMap
} from 'react';

export type mapper<TInner, TOutter> = (input: TInner) => TOutter;
export type predicate<T> = mapper<T, boolean>;
export type predicateDiff<T> = (current: T, next: T) => boolean;

// Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
export type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export interface Observer<T> {
    next(props: T): void;
    complete(): void;
}

export interface Subscription {
    unsubscribe(): void;
}

export interface Subscribable<T> {
    subscribe(observer: Observer<T>): Subscription;
}

export type ComponentEnhancer<TInner, TOutter> = (component: ComponentType<TInner>) => ComponentClass<TOutter>;

// Injects props and removes them from the prop requirements.
// Will not pass through the injected props if they are passed in during
// render. Also adds new prop requirements from TNeedsProps.
export type InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> =
    <P extends TInjectedProps>(
        component: ComponentType<P>
    ) => ComponentType<Omit<P, keyof TInjectedProps> & TNeedsProps>;

// Injects props and removes them from the prop requirements.
// Will not pass through the injected props if they are passed in during
// render.
export type InferableComponentEnhancer<TInjectedProps> =
    InferableComponentEnhancerWithProps<TInjectedProps, {}>;

// Injects default props and makes them optional. Will still pass through
// the injected props if they are passed in during render.
export type DefaultingInferableComponentEnhancer<TInjectedProps> =
    InferableComponentEnhancerWithProps<TInjectedProps, Partial<TInjectedProps>>;

// Higher-order components: https://github.com/acdlite/recompose/blob/master/docs/API.md#higher-order-components

// mapProps: https://github.com/acdlite/recompose/blob/master/docs/API.md#mapprops
export function mapProps<TInner, TOutter>(
    propsMapper: mapper<TOutter, TInner>,
): InferableComponentEnhancerWithProps<TInner, TOutter>;

// withProps: https://github.com/acdlite/recompose/blob/master/docs/API.md#withprops
export function withProps<TInner, TOutter>(
    createProps: TInner | mapper<TOutter, TInner>
): InferableComponentEnhancerWithProps<TInner & TOutter, TOutter>;

// withPropsOnChange: https://github.com/acdlite/recompose/blob/master/docs/API.md#withpropsonchange
export function withPropsOnChange<TInner, TOutter>(
    shouldMapOrKeys: string[] | predicateDiff<TOutter>,
    createProps: mapper<TOutter, TInner>
): InferableComponentEnhancerWithProps<TInner & TOutter, TOutter>;

// withHandlers: https://github.com/acdlite/recompose/blob/master/docs/API.md#withhandlers
export interface HandleCreators<TOutter> {
    [handlerName: string]: mapper<TOutter, EventHandler<any>>;
}
export type HandleCreatorsFactory<TOutter, THandlers> = (initialProps: TOutter) => HandleCreators<TOutter>;
export function withHandlers<TOutter, THandlers>(
    handlerCreators: HandleCreators<TOutter> | HandleCreatorsFactory<TOutter, THandlers>
): InferableComponentEnhancerWithProps<THandlers, TOutter>;

// defaultProps: https://github.com/acdlite/recompose/blob/master/docs/API.md#defaultprops
export function defaultProps<T = {}>(
    props: T
): DefaultingInferableComponentEnhancer<T>;

// renameProp: https://github.com/acdlite/recompose/blob/master/docs/API.md#renameProp
export function renameProp(
    outterName: string, innerName: string
): ComponentEnhancer<any, any>;

// renameProps: https://github.com/acdlite/recompose/blob/master/docs/API.md#renameProps
export interface NameMap {
    [outterName: string]: string;
}
export function renameProps(
    nameMap: NameMap
): ComponentEnhancer<any, any>;

// flattenProp: https://github.com/acdlite/recompose/blob/master/docs/API.md#flattenProp
export function flattenProp(
    propName: string
): ComponentEnhancer<any, any>;

// withState: https://github.com/acdlite/recompose/blob/master/docs/API.md#withState
export type stateProps<
    TState,
    TStateName extends string,
    TStateUpdaterName extends string
> = (
    {[stateName in TStateName]: TState} &
    {[stateUpdateName in TStateUpdaterName]: (state: TState) => TState}
);
export function withState<
    TOutter,
    TState,
    TStateName extends string,
    TStateUpdaterName extends string
>(
    stateName: TStateName,
    stateUpdaterName: TStateUpdaterName,
    initialState: TState | mapper<TOutter, TState>
): InferableComponentEnhancerWithProps<
    stateProps<TState, TStateName, TStateUpdaterName>,
    TOutter
>;

// withStateHandlers: https://github.com/acdlite/recompose/blob/master/docs/API.md#withstatehandlers
export type StateHandler<TState> = (...payload: any[]) => TState | undefined;
export interface StateUpdaters<TOutter, TState> {
  [updaterName: string]: (state: TState, props: TOutter) => StateHandler<TState>;
}
export function withStateHandlers<TState, TUpdaters, TOutter>(
  createProps: TState | mapper<TOutter, TState>,
  stateUpdaters: StateUpdaters<TOutter, TState>,
): InferableComponentEnhancerWithProps<TUpdaters & TState, TOutter>;

// withReducer: https://github.com/acdlite/recompose/blob/master/docs/API.md#withReducer
export type reducer<TState, TAction> = (s: TState, a: TAction) => TState;
export type reducerProps<
    TState,
    TAction,
    TStateName extends string,
    TDispatchName extends string
> = (
    {[stateName in TStateName]: TState} &
    {[dispatchName in TDispatchName]: (a: TAction) => void}
);
export function withReducer<
    TOutter,
    TState,
    TAction,
    TStateName extends string,
    TDispatchName extends string
>(
    stateName: TStateName,
    dispatchName: TDispatchName,
    reducer: reducer<TState, TAction>,
    initialState: TState | mapper<TOutter, TState>
): InferableComponentEnhancerWithProps<
    reducerProps<TState, TAction, TStateName, TDispatchName>,
    TOutter
>;

// branch: https://github.com/acdlite/recompose/blob/master/docs/API.md#branch
export function branch<TOutter>(
    test: predicate<TOutter>,
    trueEnhancer: ComponentEnhancer<any, any> | InferableComponentEnhancer<{}>,
    falseEnhancer?: ComponentEnhancer<any, any> | InferableComponentEnhancer<{}>
): ComponentEnhancer<any, TOutter>;

// renderComponent: https://github.com/acdlite/recompose/blob/master/docs/API.md#renderComponent
export function renderComponent<TProps>(
    component: string | ComponentType<TProps>
): ComponentEnhancer<any, any>;

// renderNothing: https://github.com/acdlite/recompose/blob/master/docs/API.md#renderNothing
export const renderNothing: InferableComponentEnhancer<{}>;

// shouldUpdate: https://github.com/acdlite/recompose/blob/master/docs/API.md#shouldUpdate
export function shouldUpdate<TProps>(
    test: predicateDiff<TProps>
): InferableComponentEnhancer<{}>;

// pure: https://github.com/acdlite/recompose/blob/master/docs/API.md#pure
export function pure<TProps>(component: ComponentType<TProps>): ComponentType<TProps>;

// onlyUpdateForKeys: https://github.com/acdlite/recompose/blob/master/docs/API.md#onlyUpdateForKeys
export function onlyUpdateForKeys(
    propKeys: string[]
): InferableComponentEnhancer<{}>;
export function onlyUpdateForKeys<T>(
    propKeys: Array<keyof T>
): InferableComponentEnhancer<{}>;

// onlyUpdateForPropTypes: https://github.com/acdlite/recompose/blob/master/docs/API.md#onlyUpdateForPropTypes
export const onlyUpdateForPropTypes: InferableComponentEnhancer<{}>;

// withContext: https://github.com/acdlite/recompose/blob/master/docs/API.md#withContext
export function withContext<TContext, TProps>(
    childContextTypes: ValidationMap<TContext>,
    getChildContext: mapper<TProps, any>
): InferableComponentEnhancer<{}>;

// getContext: https://github.com/acdlite/recompose/blob/master/docs/API.md#getContext
export function getContext<TContext>(
    contextTypes: ValidationMap<TContext>
): InferableComponentEnhancer<TContext>;

export interface ReactLifeCycleFunctionsThisArguments<TProps, TState> {
    props: TProps;
    state: TState;
    setState<TKeyOfState extends keyof TState>(
        state: ((prevState: TState, props: TProps) => Pick<TState, TKeyOfState>) | Pick<TState, TKeyOfState>,
        callback?: () => any
    ): void;
    forceUpdate(callBack?: () => any): void;

    context: any;
    refs: {
        [key: string]: ReactInstance
    };
}

// lifecycle: https://github.com/acdlite/recompose/blob/master/docs/API.md#lifecycle
export interface ReactLifeCycleFunctions<TProps, TState> {
    componentWillMount?(this: ReactLifeCycleFunctionsThisArguments<TProps, TState>): void;
    componentDidMount?(this: ReactLifeCycleFunctionsThisArguments<TProps, TState>): void;
    componentWillReceiveProps?(this: ReactLifeCycleFunctionsThisArguments<TProps, TState>, nextProps: TProps): void;
    shouldComponentUpdate?(this: ReactLifeCycleFunctionsThisArguments<TProps, TState>, nextProps: TProps, nextState: TState): boolean;
    componentWillUpdate?(this: ReactLifeCycleFunctionsThisArguments<TProps, TState>, nextProps: TProps, nextState: TState): void;
    componentDidUpdate?(this: ReactLifeCycleFunctionsThisArguments<TProps, TState>, prevProps: TProps, prevState: TState): void;
    componentWillUnmount?(this: ReactLifeCycleFunctionsThisArguments<TProps, TState>): void;
}

export function lifecycle<TProps, TState>(
    spec: ReactLifeCycleFunctions<TProps, TState>
): InferableComponentEnhancer<{}>;

// toClass: https://github.com/acdlite/recompose/blob/master/docs/API.md#toClass
export const toClass: InferableComponentEnhancer<{}>;

// Static property helpers: https://github.com/acdlite/recompose/blob/master/docs/API.md#static-property-helpers

// setStatic: https://github.com/acdlite/recompose/blob/master/docs/API.md#setStatic
export function setStatic<TOutter>(
    key: string, value: any
): ComponentEnhancer<TOutter, TOutter>;

// setPropTypes: https://github.com/acdlite/recompose/blob/master/docs/API.md#setPropTypes
export function setPropTypes<TOutter>(
    propTypes: ValidationMap<TOutter>
): ComponentEnhancer<any, TOutter>;

// setDisplayName: https://github.com/acdlite/recompose/blob/master/docs/API.md#setDisplayName
export function setDisplayName<TOutter>(
    displayName: string
): ComponentEnhancer<TOutter, TOutter>;

// Utilities: https://github.com/acdlite/recompose/blob/master/docs/API.md#utilities

// compose: https://github.com/acdlite/recompose/blob/master/docs/API.md#compose
export type HoC = (...args: any[]) => ComponentClass<any> | StatelessComponent<any>;

export function compose<TInner = {}, TOutter = {}>(
    ...functions: HoC[]
): ComponentEnhancer<TInner, TOutter>;

// getDisplayName: https://github.com/acdlite/recompose/blob/master/docs/API.md#getDisplayName
export function getDisplayName(
    component: ComponentType<any>
): string;

// wrapDisplayName: https://github.com/acdlite/recompose/blob/master/docs/API.md#wrapDisplayName
export function wrapDisplayName(
    component: ComponentType<any>,
    wrapperName: string
): string;

// shallowEqual: https://github.com/acdlite/recompose/blob/master/docs/API.md#shallowEqual
export function shallowEqual(
    a: object, b: object
): boolean;

// isClassComponent: https://github.com/acdlite/recompose/blob/master/docs/API.md#isClassComponent
export function isClassComponent(
    value: any
): boolean;

// createEagerElement: https://github.com/acdlite/recompose/blob/master/docs/API.md#createEagerElement
export function createEagerElement(
    type: ComponentType<any> | string,
    props?: object,
    children?: ReactNode
): ReactElement<any>;

// createEagerFactory: https://github.com/acdlite/recompose/blob/master/docs/API.md#createEagerFactory
export type componentFactory = (props?: object, children?: ReactNode) => ReactElement<any>;
export function createEagerFactory(
    type: ComponentType<any> | string
): componentFactory;

// createSink: https://github.com/acdlite/recompose/blob/master/docs/API.md#createSink
export function createSink(
    callback: (props: object) => void
): ComponentClass<any>; // ???

// componentFromProp: https://github.com/acdlite/recompose/blob/master/docs/API.md#componentFromProp
export function componentFromProp(
    propName: string
): StatelessComponent<any>;

// nest: https://github.com/acdlite/recompose/blob/master/docs/API.md#nest
export function nest(
    ...Components: Array<string | ComponentType<any>>
): ComponentClass<any>; // ???

// hoistStatics: https://github.com/acdlite/recompose/blob/master/docs/API.md#hoistStatics
export function hoistStatics<TProps>(
    hoc: InferableComponentEnhancer<TProps>
): InferableComponentEnhancer<TProps>;

// Observable utilities: https://github.com/acdlite/recompose/blob/master/docs/API.md#observable-utilities

// componentFromStream: https://github.com/acdlite/recompose/blob/master/docs/API.md#componentFromStream
export function componentFromStream<TProps>(
    propsToReactNode: mapper<Subscribable<TProps>, Subscribable<ReactNode>>
): ComponentType<TProps>; // ???

// componentFromStreamWithConfig: https://github.com/acdlite/recompose/blob/master/docs/API.md#componentfromstreamwithconfig
export function componentFromStreamWithConfig(config: ObservableConfig): <TProps> (
    propsToReactNode: mapper<Subscribable<TProps>, Subscribable<ReactNode>>
) => ComponentType<TProps>;

// mapPropsStream: https://github.com/acdlite/recompose/blob/master/docs/API.md#mapPropsStream
export function mapPropsStream<TInner, TOutter>(
    transform: mapper<Subscribable<TOutter>, Subscribable<TInner>>
): ComponentEnhancer<TInner, TOutter>;

// mapPropsStreamWithConfig: https://github.com/acdlite/recompose/blob/master/docs/API.md#mappropsstreamwithconfig
export function mapPropsStreamWithConfig(config: ObservableConfig): <TInner, TOutter> (
    transform: mapper<Subscribable<TOutter>, Subscribable<TInner>>
) => ComponentEnhancer<TInner, TOutter>;

// createEventHandler: https://github.com/acdlite/recompose/blob/master/docs/API.md#createEventHandler
export interface EventHandlerOf {
    handler(value: any): void;
    stream: Subscribable<any>;
}
export function createEventHandler(): EventHandlerOf;

// createEventHandlerWithConfig: https://github.com/acdlite/recompose/blob/master/docs/API.md#createEventHandlerWithConfig
export function createEventHandlerWithConfig(config: ObservableConfig):
    () => EventHandlerOf;

// setObservableConfig: https://github.com/acdlite/recompose/blob/master/docs/API.md#setObservableConfig
export interface ObservableConfig {
    fromESObservable?(observable: Subscribable<any>): any;
    toESObservable?(stream: any): Subscribable<any>;
}
export function setObservableConfig(config: ObservableConfig): void;

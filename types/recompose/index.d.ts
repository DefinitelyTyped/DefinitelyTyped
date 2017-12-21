// Type definitions for Recompose 0.24
// Project: https://github.com/acdlite/recompose
// Definitions by: Iskander Sierra <https://github.com/iskandersierra>
//                 Samuel DeSota <https://github.com/mrapogee>
//                 Curtis Layne <https://github.com/clayne11>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

///<reference types="react" />

declare module 'recompose' {

    import * as React from 'react';
    import { ComponentType as Component, ComponentClass, StatelessComponent, ValidationMap } from 'react';

    type mapper<TInner, TOutter> = (input: TInner) => TOutter;
    type predicate<T> = mapper<T, boolean>;
    type predicateDiff<T> = (current: T, next: T) => boolean

    // Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
    type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
    type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

    interface Observer<T>{
        next(props: T): void;
        complete(): void;
    }

    interface Subscription{
        unsubscribe(): void
    }

    interface Subscribable<T> {
        subscribe(observer: Observer<T>): Subscription;
    }

    interface ComponentEnhancer<TInner, TOutter> {
        (component: Component<TInner>): ComponentClass<TOutter>;
    }

    // Injects props and removes them from the prop requirements.
    // Will not pass through the injected props if they are passed in during
    // render. Also adds new prop requirements from TNeedsProps.
    export interface InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> {
        <P extends TInjectedProps>(
            component: Component<P>
        ): React.ComponentType<Omit<P, keyof TInjectedProps> & TNeedsProps>
    }

    // Injects props and removes them from the prop requirements.
    // Will not pass through the injected props if they are passed in during
    // render.
    export type InferableComponentEnhancer<TInjectedProps> =
        InferableComponentEnhancerWithProps<TInjectedProps, {}>

    // Injects default props and makes them optional. Will still pass through
    // the injected props if they are passed in during render.
    export type DefaultingInferableComponentEnhancer<TInjectedProps> =
        InferableComponentEnhancerWithProps<TInjectedProps, Partial<TInjectedProps>>

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
    type EventHandler = Function;
    type HandleCreators<TOutter, THandlers> = {
        [handlerName in keyof THandlers]: mapper<TOutter, EventHandler>;
    };
    type HandleCreatorsFactory<TOutter, THandlers> = (initialProps: TOutter) => HandleCreators<TOutter, THandlers>;
    export function withHandlers<TOutter, THandlers>(
        handlerCreators: HandleCreators<TOutter, THandlers> | HandleCreatorsFactory<TOutter, THandlers>
    ): InferableComponentEnhancerWithProps<TOutter & THandlers, TOutter>;

    // defaultProps: https://github.com/acdlite/recompose/blob/master/docs/API.md#defaultprops
    export function defaultProps<T = {}>(
        props: T
    ): DefaultingInferableComponentEnhancer<T>;

    // renameProp: https://github.com/acdlite/recompose/blob/master/docs/API.md#renameProp
    export function renameProp(
        outterName: string, innerName: string
    ): ComponentEnhancer<any, any>;

    // renameProps: https://github.com/acdlite/recompose/blob/master/docs/API.md#renameProps
    type NameMap = {
        [outterName: string]: string;
    };
    export function renameProps(
        nameMap: NameMap
    ): ComponentEnhancer<any, any>;

    // flattenProp: https://github.com/acdlite/recompose/blob/master/docs/API.md#flattenProp
    export function flattenProp(
        propName: string
    ): ComponentEnhancer<any, any>;

    // withState: https://github.com/acdlite/recompose/blob/master/docs/API.md#withState
    type stateProps<
        TState,
        TStateName extends string,
        TStateUpdaterName extends string
    > = (
        {[stateName in TStateName]: TState} &
        {[stateUpdateName in TStateUpdaterName]: (state: TState) => TState}
    )
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
    type StateHandler<TState> = (...payload: any[]) => TState | undefined;
    type StateHandlerMap<TState> = {
      [updaterName: string]: StateHandler<TState>;
    };
    type StateUpdaters<TOutter, TState, TUpdaters> = {
      [updaterName in keyof TUpdaters]: (state: TState, props: TOutter) => StateHandler<TState>;
    };
    export function withStateHandlers<TState, TUpdaters extends StateHandlerMap<TState>, TOutter = {}>(
      createProps: TState | mapper<TOutter, TState>,
      stateUpdaters: StateUpdaters<TOutter, TState, TUpdaters>,
    ): InferableComponentEnhancerWithProps<TOutter & TState & TUpdaters, TOutter>;

    // withReducer: https://github.com/acdlite/recompose/blob/master/docs/API.md#withReducer
    type reducer<TState, TAction> = (s: TState, a: TAction) => TState;
    type reducerProps<
        TState,
        TAction,
        TStateName extends string,
        TDispatchName extends string
    > = (
        {[stateName in TStateName]: TState} &
        {[dispatchName in TDispatchName]: (a: TAction) => void}
    )
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
        component: string | Component<TProps>
    ): ComponentEnhancer<any, any>;

    // renderNothing: https://github.com/acdlite/recompose/blob/master/docs/API.md#renderNothing
    export const renderNothing: InferableComponentEnhancer<{}>;

    // shouldUpdate: https://github.com/acdlite/recompose/blob/master/docs/API.md#shouldUpdate
    export function shouldUpdate<TProps>(
        test: predicateDiff<TProps>
    ): InferableComponentEnhancer<{}>;

    // pure: https://github.com/acdlite/recompose/blob/master/docs/API.md#pure
    export function pure<TProps>
        (component: Component<TProps>): Component<TProps>;

    // onlyUpdateForKeys: https://github.com/acdlite/recompose/blob/master/docs/API.md#onlyUpdateForKeys
    export function onlyUpdateForKeys(
        propKeys: Array<string>
    ) : InferableComponentEnhancer<{}>;
    export function onlyUpdateForKeys<T>(
        propKeys: Array<keyof T>
    ) : InferableComponentEnhancer<{}>;


    // onlyUpdateForPropTypes: https://github.com/acdlite/recompose/blob/master/docs/API.md#onlyUpdateForPropTypes
    export const onlyUpdateForPropTypes: InferableComponentEnhancer<{}>;

    // withContext: https://github.com/acdlite/recompose/blob/master/docs/API.md#withContext
    export function withContext<TContext, TProps>(
        childContextTypes: ValidationMap<TContext>,
        getChildContext: mapper<TProps, any>
    ) : InferableComponentEnhancer<{}>;

    // getContext: https://github.com/acdlite/recompose/blob/master/docs/API.md#getContext
    export function getContext<TContext>(
        contextTypes: ValidationMap<TContext>
    ) : InferableComponentEnhancer<TContext>;

    interface _ReactLifeCycleFunctionsThisArguments<TProps, TState> {
        props: TProps,
        state: TState,
        setState<TKeyOfState extends keyof TState>(f: (prevState: TState, props: TProps) => Pick<TState, TKeyOfState>, callback?: () => any): void;
        setState<TKeyOfState extends keyof TState>(state: Pick<TState, TKeyOfState>, callback?: () => any): void;
        forceUpdate(callBack?: () => any): void;

        context: any;
        refs: {
            [key: string]: React.ReactInstance
        };
    }
    type ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance = {}> =
        _ReactLifeCycleFunctionsThisArguments<TProps, TState> & TInstance

    // lifecycle: https://github.com/acdlite/recompose/blob/master/docs/API.md#lifecycle
    interface ReactLifeCycleFunctions<TProps, TState, TInstance = {}> {
        componentWillMount?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>) => void;
        componentDidMount?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>) => void;
        componentWillReceiveProps?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>, nextProps: TProps) => void;
        shouldComponentUpdate?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>, nextProps: TProps, nextState: TState) => boolean;
        componentWillUpdate?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>, nextProps: TProps, nextState: TState) => void;
        componentDidUpdate?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>, prevProps: TProps, prevState: TState) => void;
        componentWillUnmount?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>) => void;
    }

    export function lifecycle<TProps, TState, TInstance = {}>(
        spec: ReactLifeCycleFunctions<TProps, TState, TInstance> & TInstance
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
    export function compose<TInner, TOutter>(
        ...functions: Function[]
    ): ComponentEnhancer<TInner, TOutter>;
    // export function compose<TOutter>(
    //     ...functions: Array<Function>
    // ): ComponentEnhancer<any, TOutter>;
    // export function compose(
    //     ...functions: Array<Function>
    // ): ComponentEnhancer<any, any>;

    // getDisplayName: https://github.com/acdlite/recompose/blob/master/docs/API.md#getDisplayName
    export function getDisplayName(
        component: Component<any>
    ): string;

    // wrapDisplayName: https://github.com/acdlite/recompose/blob/master/docs/API.md#wrapDisplayName
    export function wrapDisplayName(
        component: Component<any>,
        wrapperName: string
    ): string;

    // shallowEqual: https://github.com/acdlite/recompose/blob/master/docs/API.md#shallowEqual
    export function shallowEqual(
        a: Object, b: Object
    ): boolean;

    // isClassComponent: https://github.com/acdlite/recompose/blob/master/docs/API.md#isClassComponent
    export function isClassComponent(
        value: any
    ): boolean;

    // createEagerElement: https://github.com/acdlite/recompose/blob/master/docs/API.md#createEagerElement
    export function createEagerElement(
        type: Component<any> | string,
        props?: Object,
        children?: React.ReactNode
    ): React.ReactElement<any>;

    // createEagerFactory: https://github.com/acdlite/recompose/blob/master/docs/API.md#createEagerFactory
    type componentFactory = (props?: Object, children?: React.ReactNode) => React.ReactElement<any>;
    export function createEagerFactory(
        type: Component<any> | string
    ): componentFactory;

    // createSink: https://github.com/acdlite/recompose/blob/master/docs/API.md#createSink
    export function createSink(
        callback: (props: Object) => void
    ): React.ComponentClass<any>; // ???

    // componentFromProp: https://github.com/acdlite/recompose/blob/master/docs/API.md#componentFromProp
    export function componentFromProp(
        propName: string
    ): StatelessComponent<any>;

    // nest: https://github.com/acdlite/recompose/blob/master/docs/API.md#nest
    export function nest(
        ...Components: (string | Component<any>)[]
    ): React.ComponentClass<any>; // ???

    // hoistStatics: https://github.com/acdlite/recompose/blob/master/docs/API.md#hoistStatics
    export function hoistStatics<TProps>(
        hoc: InferableComponentEnhancer<TProps>
    ): InferableComponentEnhancer<TProps>;



    // Observable utilities: https://github.com/acdlite/recompose/blob/master/docs/API.md#observable-utilities

    // componentFromStream: https://github.com/acdlite/recompose/blob/master/docs/API.md#componentFromStream
    export function componentFromStream<TProps>(
        propsToReactNode: mapper<Subscribable<TProps>, Subscribable<React.ReactNode>>
    ): Component<TProps>; // ???

    // componentFromStreamWithConfig: https://github.com/acdlite/recompose/blob/master/docs/API.md#componentfromstreamwithconfig
    export function componentFromStreamWithConfig(config: ObservableConfig): <TProps> (
        propsToReactNode: mapper<Subscribable<TProps>, Subscribable<React.ReactNode>>
    ) => Component<TProps>

    // mapPropsStream: https://github.com/acdlite/recompose/blob/master/docs/API.md#mapPropsStream
    export function mapPropsStream<TInner, TOutter>(
        transform: mapper<Subscribable<TOutter>, Subscribable<TInner>>
    ): ComponentEnhancer<TInner, TOutter>;

    // mapPropsStreamWithConfig: https://github.com/acdlite/recompose/blob/master/docs/API.md#mappropsstreamwithconfig
    export function mapPropsStreamWithConfig(config: ObservableConfig): <TInner, TOutter> (
        transform: mapper<Subscribable<TOutter>, Subscribable<TInner>>
    ) => ComponentEnhancer<TInner, TOutter>;

    // createEventHandler: https://github.com/acdlite/recompose/blob/master/docs/API.md#createEventHandler
    type EventHandlerOf<T, TSubs extends Subscribable<T>> = {
        handler: (value: T) => void;
        stream: TSubs;
    };
    export function createEventHandler<T, TSubs extends Subscribable<T>>(): EventHandlerOf<T, TSubs>;

    // createEventHandlerWithConfig: https://github.com/acdlite/recompose/blob/master/docs/API.md#createEventHandlerWithConfig
    export function createEventHandlerWithConfig(config: ObservableConfig):
        <T, TSubs extends Subscribable<T>>() => EventHandlerOf<T, TSubs>;

    // setObservableConfig: https://github.com/acdlite/recompose/blob/master/docs/API.md#setObservableConfig
    type ObservableConfig = {
        fromESObservable?: <T>(observable: Subscribable<T>) => any;
        toESObservable?: <T>(stream: any) => Subscribable<T>;
    };
    export function setObservableConfig(config: ObservableConfig): void;
}

// https://github.com/acdlite/recompose/blob/master/docs/API.md#rxjs
declare module 'recompose/rxjsObservableConfig' {

    import { ObservableConfig } from 'recompose';

    const rxjsconfig: ObservableConfig;

    export default rxjsconfig;
}

// https://github.com/acdlite/recompose/blob/master/docs/API.md#rxjs-4-legacy
declare module 'recompose/rxjs4ObservableConfig' {

    import { ObservableConfig } from 'recompose';

    const rxjs4config: ObservableConfig;

    export default rxjs4config;
}

// https://github.com/acdlite/recompose/blob/master/docs/API.md#most
declare module 'recompose/mostObservableConfig' {

    import { ObservableConfig } from 'recompose';

    const mostConfig: ObservableConfig;

    export default mostConfig;
}

// https://github.com/acdlite/recompose/blob/master/docs/API.md#xstream
declare module 'recompose/xstreamObservableConfig' {

    import { ObservableConfig } from 'recompose';

    const xstreamConfig: ObservableConfig;

    export default xstreamConfig;
}

// https://github.com/acdlite/recompose/blob/master/docs/API.md#bacon
declare module 'recompose/baconObservableConfig' {

    import { ObservableConfig } from 'recompose';

    const baconConfig: ObservableConfig;

    export default baconConfig;
}

// https://github.com/acdlite/recompose/blob/master/docs/API.md#kefir
declare module 'recompose/kefirObservableConfig' {

    import { ObservableConfig } from 'recompose';

    const kefirConfig: ObservableConfig;

    export default kefirConfig;
}

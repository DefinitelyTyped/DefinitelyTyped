// Type definitions for Recompose 0.23
// Project: https://github.com/acdlite/recompose
// Definitions by: Iskander Sierra <https://github.com/iskandersierra>
//                 Samuel DeSota <https://github.com/mrapogee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="react" />

declare module 'recompose' {

    import * as React from 'react';
    import { ComponentClass, StatelessComponent, ValidationMap } from 'react';

    type Component<P> = ComponentClass<P> | StatelessComponent<P>;
    type mapper<TInner, TOutter> = (input: TInner) => TOutter;
    type predicate<T> = mapper<T, boolean>;
    type predicateDiff<T> = (current: T, next: T) => boolean
    interface Subscribable<T> {
        subscribe: Function;
    }

    interface ComponentEnhancer<TInner, TOutter> {
        (component: Component<TInner>): ComponentClass<TOutter>;
    }
    export interface InferableComponentEnhancer {
        <P, TComp extends (Component<P>)>(component: TComp): TComp;
    }


    // Higher-order components: https://github.com/acdlite/recompose/blob/master/docs/API.md#higher-order-components

    // mapProps: https://github.com/acdlite/recompose/blob/master/docs/API.md#mapprops
    export function mapProps<TInner, TOutter>(
        propsMapper: mapper<TOutter, TInner>
    ): ComponentEnhancer<TInner, TOutter>;

    // withProps: https://github.com/acdlite/recompose/blob/master/docs/API.md#withprops
    export function withProps<TInner, TOutter>(
        createProps: TInner | mapper<TOutter, TInner>
    ): ComponentEnhancer<TInner & TOutter, TOutter>;

    // withPropsOnChange: https://github.com/acdlite/recompose/blob/master/docs/API.md#withpropsonchange
    export function withPropsOnChange<TInner, TOutter>(
        shouldMapOrKeys: string[] | predicateDiff<TOutter>,
        createProps: mapper<TOutter, TInner>
    ): ComponentEnhancer<TInner & TOutter, TOutter>;

    // withHandlers: https://github.com/acdlite/recompose/blob/master/docs/API.md#withhandlers
    type EventHandler = Function;
    type HandleCreators<TOutter> = {
        [handlerName: string]: mapper<TOutter, EventHandler>;
    };
    type HandleCreatorsFactory<TOutter> = (initialProps: TOutter) => HandleCreators<TOutter>;
    export function withHandlers<TInner, TOutter>(
        handlerCreators: HandleCreators<TOutter> | HandleCreatorsFactory<TOutter>
    ): ComponentEnhancer<TInner, TOutter>;

    // defaultProps: https://github.com/acdlite/recompose/blob/master/docs/API.md#defaultprops
    export function defaultProps(
        props: Object
    ): InferableComponentEnhancer;

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
    export function withState<TOutter>(
        stateName: string,
        stateUpdaterName: string,
        initialState: any | mapper<TOutter, any>
    ): ComponentEnhancer<TOutter /*& { [stateName]: any; [stateUpdaterName]: (s: any) => void }*/, TOutter>;

    // withReducer: https://github.com/acdlite/recompose/blob/master/docs/API.md#withReducer
    type reducer<TState, TAction> = (s: TState, a: TAction) => TState;
    export function withReducer<TState, TAction>(
        stateName: string,
        dispatchName: string,
        reducer: reducer<TState, TAction>,
        initialState: TState
    ): ComponentEnhancer<any, any>;
    export function withReducer<TOutter, TState, TAction>(
        stateName: string,
        dispatchName: string,
        reducer: reducer<TState, TAction>,
        initialState: (props: TOutter) => TState
    ): ComponentEnhancer<any, TOutter>;

    // branch: https://github.com/acdlite/recompose/blob/master/docs/API.md#branch
    export function branch<TOutter>(
        test: predicate<TOutter>,
        trueEnhancer: InferableComponentEnhancer,
        falseEnhancer?: InferableComponentEnhancer
    ): ComponentEnhancer<any, TOutter>;

    // renderComponent: https://github.com/acdlite/recompose/blob/master/docs/API.md#renderComponent
    export function renderComponent(
        component: string | Component<any>
    ): ComponentEnhancer<any, any>;

    // renderNothing: https://github.com/acdlite/recompose/blob/master/docs/API.md#renderNothing
    export const renderNothing: InferableComponentEnhancer;

    // shouldUpdate: https://github.com/acdlite/recompose/blob/master/docs/API.md#shouldUpdate
    export function shouldUpdate<TProps>(
        test: predicateDiff<TProps>
    ): InferableComponentEnhancer;

    // pure: https://github.com/acdlite/recompose/blob/master/docs/API.md#pure
    export function pure<TProps, TComp extends (Component<TProps>)>
        (component: TComp): TComp;

    // onlyUpdateForKeys: https://github.com/acdlite/recompose/blob/master/docs/API.md#onlyUpdateForKeys
    export function onlyUpdateForKeys(
        propKeys: Array<string>
    ) : InferableComponentEnhancer;

    // onlyUpdateForPropTypes: https://github.com/acdlite/recompose/blob/master/docs/API.md#onlyUpdateForPropTypes
    export const onlyUpdateForPropTypes: InferableComponentEnhancer;

    // withContext: https://github.com/acdlite/recompose/blob/master/docs/API.md#withContext
    export function withContext<TContext, TProps>(
        childContextTypes: ValidationMap<TContext>,
        getChildContext: mapper<TProps, any>
    ) : InferableComponentEnhancer;

    // getContext: https://github.com/acdlite/recompose/blob/master/docs/API.md#getContext
    export function getContext<TContext, TProps>(
        contextTypes: ValidationMap<TContext>
    ) : InferableComponentEnhancer;

    interface ReactLifeCycleFunctionsThisArguments<TProps, TState> {
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

    // lifecycle: https://github.com/acdlite/recompose/blob/master/docs/API.md#lifecycle
    interface ReactLifeCycleFunctions<TProps, TState> {
        componentWillMount?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState>) => void;
        componentDidMount?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState>) => void;
        componentWillReceiveProps?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState>, nextProps: TProps) => void;
        shouldComponentUpdate?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState>, nextProps: TProps, nextState: TState) => boolean;
        componentWillUpdate?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState>, nextProps: TProps, nextState: TState) => void;
        componentDidUpdate?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState>, prevProps: TProps, prevState: TState) => void;
        componentWillUnmount?: (this: ReactLifeCycleFunctionsThisArguments<TProps, TState>) => void;
    }

    export function lifecycle<TProps, TState>(
        spec: ReactLifeCycleFunctions<TProps, TState>
    ): InferableComponentEnhancer;

    // toClass: https://github.com/acdlite/recompose/blob/master/docs/API.md#toClass
    export const toClass: InferableComponentEnhancer;


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
    export function hoistStatics(
        hoc: InferableComponentEnhancer
    ): InferableComponentEnhancer;



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

// @shakacode/recompose is a fork of `recompose`, and these types are based on work done in `@types/recompose`.

/// <reference types="react" />

declare module "@shakacode/recompose" {
    import * as React from "react";
    import { ComponentClass, ComponentType as Component, FunctionComponent, ValidationMap } from "react";

    type mapper<TInner, TOutter> = (input: TInner) => TOutter;
    type predicate<T> = mapper<T, boolean>;
    type predicateDiff<T> = (current: T, next: T) => boolean;

    // Diff / Omit taken from https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
    type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

    interface Observer<T> {
        next(props: T): void;
        complete(): void;
    }

    interface Subscription {
        unsubscribe(): void;
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
            component: Component<P>,
        ): React.ComponentClass<Omit<P, keyof TInjectedProps> & TNeedsProps>;
    }

    // Injects props and removes them from the prop requirements.
    // Will not pass through the injected props if they are passed in during
    // render.
    export type InferableComponentEnhancer<TInjectedProps> = InferableComponentEnhancerWithProps<TInjectedProps, {}>;

    // Injects default props and makes them optional. Will still pass through
    // the injected props if they are passed in during render.
    export type DefaultingInferableComponentEnhancer<TInjectedProps> = InferableComponentEnhancerWithProps<
        TInjectedProps,
        Partial<TInjectedProps>
    >;

    // Higher-order components: https://github.com/shakacode/recompose/blob/master/docs/API.md#higher-order-components

    // mapProps: https://github.com/shakacode/recompose/blob/master/docs/API.md#mapprops
    export function mapProps<TInner, TOutter>(
        propsMapper: mapper<TOutter, TInner>,
    ): InferableComponentEnhancerWithProps<TInner, TOutter>;

    // withProps: https://github.com/shakacode/recompose/blob/master/docs/API.md#withprops
    export function withProps<TInner, TOutter>(
        createProps: TInner | mapper<TOutter, TInner>,
    ): InferableComponentEnhancerWithProps<TInner & TOutter, TOutter>;

    // withPropsOnChange: https://github.com/shakacode/recompose/blob/master/docs/API.md#withpropsonchange
    export function withPropsOnChange<TInner, TOutter>(
        shouldMapOrKeys: string[] | predicateDiff<TOutter>,
        createProps: mapper<TOutter, TInner>,
    ): InferableComponentEnhancerWithProps<TInner & TOutter, TOutter>;

    // withHandlers: https://github.com/shakacode/recompose/blob/master/docs/API.md#withhandlers
    type EventHandler = Function;
    // This type is required to infer TOutter
    type HandleCreatorsStructure<TOutter> = {
        [handlerName: string]: mapper<TOutter, EventHandler>;
    };
    // This type is required to infer THandlers
    type HandleCreatorsHandlers<TOutter, THandlers> = {
        [P in keyof THandlers]: (props: TOutter) => THandlers[P];
    };
    type HandleCreators<TOutter, THandlers> =
        & HandleCreatorsStructure<TOutter>
        & HandleCreatorsHandlers<TOutter, THandlers>;
    type HandleCreatorsFactory<TOutter, THandlers> = (initialProps: TOutter) => HandleCreators<TOutter, THandlers>;

    export function withHandlers<TOutter, THandlers>(
        handlerCreators:
            | HandleCreators<TOutter, THandlers>
            | HandleCreatorsFactory<TOutter, THandlers>,
    ): InferableComponentEnhancerWithProps<THandlers & TOutter, TOutter>;

    // defaultProps: https://github.com/shakacode/recompose/blob/master/docs/API.md#defaultprops
    export function defaultProps<T = {}>(
        props: T,
    ): DefaultingInferableComponentEnhancer<T>;

    // renameProp: https://github.com/shakacode/recompose/blob/master/docs/API.md#renameProp
    export function renameProp(
        outterName: string,
        innerName: string,
    ): ComponentEnhancer<any, any>;

    // renameProps: https://github.com/shakacode/recompose/blob/master/docs/API.md#renameProps
    type NameMap = {
        [outterName: string]: string;
    };
    export function renameProps(
        nameMap: NameMap,
    ): ComponentEnhancer<any, any>;

    // flattenProp: https://github.com/shakacode/recompose/blob/master/docs/API.md#flattenProp
    export function flattenProp(
        propName: string,
    ): ComponentEnhancer<any, any>;

    // withState: https://github.com/shakacode/recompose/blob/master/docs/API.md#withState
    type stateProps<
        TState,
        TStateName extends string,
        TStateUpdaterName extends string,
    > =
        & { [stateName in TStateName]: TState }
        & { [stateUpdateName in TStateUpdaterName]: (state: TState) => TState };
    export function withState<
        TOutter,
        TState,
        TStateName extends string,
        TStateUpdaterName extends string,
    >(
        stateName: TStateName,
        stateUpdaterName: TStateUpdaterName,
        initialState: TState | mapper<TOutter, TState>,
    ): InferableComponentEnhancerWithProps<
        stateProps<TState, TStateName, TStateUpdaterName>,
        TOutter
    >;

    // withStateHandlers: https://github.com/shakacode/recompose/blob/master/docs/API.md#withstatehandlers
    type StateHandler<TState> = (...payload: any[]) => Partial<TState> | undefined;
    type StateHandlerMap<TState> = {
        [updaterName: string]: StateHandler<TState>;
    };
    type StateUpdaters<TOutter, TState, TUpdaters> = {
        [updaterName in keyof TUpdaters]: (state: TState, props: TOutter) => TUpdaters[updaterName];
    };
    export function withStateHandlers<TState, TUpdaters extends StateHandlerMap<TState>, TOutter = {}>(
        createProps: TState | mapper<TOutter, TState>,
        stateUpdaters: StateUpdaters<TOutter, TState, TUpdaters>,
    ): InferableComponentEnhancerWithProps<TOutter & TState & TUpdaters, TOutter>;

    // withReducer: https://github.com/shakacode/recompose/blob/master/docs/API.md#withReducer
    type reducer<TState, TAction> = (s: TState, a: TAction) => TState;
    type reducerProps<
        TState,
        TAction,
        TStateName extends string,
        TDispatchName extends string,
    > =
        & { [stateName in TStateName]: TState }
        & { [dispatchName in TDispatchName]: (a: TAction) => void };
    export function withReducer<
        TOutter,
        TState,
        TAction,
        TStateName extends string,
        TDispatchName extends string,
    >(
        stateName: TStateName,
        dispatchName: TDispatchName,
        reducer: reducer<TState, TAction>,
        initialState: TState | mapper<TOutter, TState>,
    ): InferableComponentEnhancerWithProps<
        reducerProps<TState, TAction, TStateName, TDispatchName>,
        TOutter
    >;

    // branch: https://github.com/shakacode/recompose/blob/master/docs/API.md#branch
    export function branch<TOutter>(
        test: predicate<TOutter>,
        trueEnhancer: ComponentEnhancer<any, any> | InferableComponentEnhancer<{}>,
        falseEnhancer?: ComponentEnhancer<any, any> | InferableComponentEnhancer<{}>,
    ): ComponentEnhancer<any, TOutter>;

    // renderComponent: https://github.com/shakacode/recompose/blob/master/docs/API.md#renderComponent
    export function renderComponent<TProps>(
        component: string | Component<TProps>,
    ): ComponentEnhancer<any, any>;

    // renderNothing: https://github.com/shakacode/recompose/blob/master/docs/API.md#renderNothing
    export const renderNothing: InferableComponentEnhancer<{}>;

    // shouldUpdate: https://github.com/shakacode/recompose/blob/master/docs/API.md#shouldUpdate
    export function shouldUpdate<TProps>(
        test: predicateDiff<TProps>,
    ): InferableComponentEnhancer<{}>;

    // pure: https://github.com/shakacode/recompose/blob/master/docs/API.md#pure
    export function pure<TProps>(component: Component<TProps>): Component<TProps>;

    // onlyUpdateForKeys: https://github.com/shakacode/recompose/blob/master/docs/API.md#onlyUpdateForKeys
    export function onlyUpdateForKeys(
        propKeys: Array<string>,
    ): InferableComponentEnhancer<{}>;
    export function onlyUpdateForKeys<T>(
        propKeys: Array<keyof T>,
    ): InferableComponentEnhancer<{}>;

    // onlyUpdateForPropTypes: https://github.com/shakacode/recompose/blob/master/docs/API.md#onlyUpdateForPropTypes
    export const onlyUpdateForPropTypes: InferableComponentEnhancer<{}>;

    // withContext: https://github.com/shakacode/recompose/blob/master/docs/API.md#withContext
    export function withContext<TContext, TProps>(
        childContextTypes: ValidationMap<TContext>,
        getChildContext: mapper<TProps, any>,
    ): InferableComponentEnhancer<{}>;

    // getContext: https://github.com/shakacode/recompose/blob/master/docs/API.md#getContext
    export function getContext<TContext>(
        contextTypes: ValidationMap<TContext>,
    ): InferableComponentEnhancer<TContext>;

    interface _ReactLifeCycleFunctionsThisArguments<TProps, TState> {
        props: TProps;
        state: TState;
        setState<TKeyOfState extends keyof TState>(
            f: (prevState: TState, props: TProps) => Pick<TState, TKeyOfState>,
            callback?: () => any,
        ): void;
        setState<TKeyOfState extends keyof TState>(state: Pick<TState, TKeyOfState>, callback?: () => any): void;
        forceUpdate(callBack?: () => any): void;

        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    }
    type ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance = {}> =
        & _ReactLifeCycleFunctionsThisArguments<TProps, TState>
        & TInstance;

    // lifecycle: https://github.com/shakacode/recompose/blob/master/docs/API.md#lifecycle
    interface ReactLifeCycleFunctions<TProps, TState, TInstance = {}> {
        componentWillMount?:
            | ((this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>) => void)
            | undefined;
        UNSAFE_componentWillMount?(this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>): void;
        componentDidMount?:
            | ((this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>) => void)
            | undefined;
        componentWillReceiveProps?:
            | ((this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>, nextProps: TProps) => void)
            | undefined;
        UNSAFE_componentWillReceiveProps?(
            this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>,
            nextProps: TProps,
        ): void;
        shouldComponentUpdate?:
            | ((
                this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>,
                nextProps: TProps,
                nextState: TState,
            ) => boolean)
            | undefined;
        componentWillUpdate?:
            | ((
                this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>,
                nextProps: TProps,
                nextState: TState,
            ) => void)
            | undefined;
        UNSAFE_componentWillUpdate?(
            this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>,
            nextProps: TProps,
            nextState: TState,
        ): void;
        componentDidUpdate?:
            | ((
                this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>,
                prevProps: TProps,
                prevState: TState,
            ) => void)
            | undefined;
        componentWillUnmount?:
            | ((this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>) => void)
            | undefined;
        componentDidCatch?:
            | ((
                this: ReactLifeCycleFunctionsThisArguments<TProps, TState, TInstance>,
                error: Error,
                info: React.ErrorInfo,
            ) => void)
            | undefined;
    }

    export function lifecycle<TProps, TState, TInstance = {}>(
        spec: ReactLifeCycleFunctions<TProps, TState, TInstance> & TInstance,
    ): InferableComponentEnhancer<{}>;

    // toClass: https://github.com/shakacode/recompose/blob/master/docs/API.md#toClass
    export const toClass: InferableComponentEnhancer<{}>;

    // toRenderProps: https://github.com/shakacode/recompose/blob/master/docs/API.md#torenderprops
    export function toRenderProps<TInner, TOutter>(
        hoc: InferableComponentEnhancerWithProps<TInner & TOutter, TOutter>,
    ): FunctionComponent<TOutter & { children: (props: TInner) => React.ReactElement }>;

    // fromRenderProps: https://github.com/shakacode/recompose/blob/master/docs/API.md#fromrenderprops
    export function fromRenderProps<TInner, TOutter, TRenderProps = {}>(
        RenderPropsComponent: Component<any>,
        propsMapper: (props: TRenderProps) => TInner,
        renderPropName?: string,
    ): ComponentEnhancer<TInner & TOutter, TOutter>;

    // Static property helpers: https://github.com/shakacode/recompose/blob/master/docs/API.md#static-property-helpers

    // setStatic: https://github.com/shakacode/recompose/blob/master/docs/API.md#setStatic
    export function setStatic(
        key: string,
        value: any,
    ): <T extends Component<any>>(component: T) => T;

    // setPropTypes: https://github.com/shakacode/recompose/blob/master/docs/API.md#setPropTypes
    export function setPropTypes<P>(
        propTypes: ValidationMap<P>,
    ): <T extends Component<P>>(component: T) => T;

    // setDisplayName: https://github.com/shakacode/recompose/blob/master/docs/API.md#setDisplayName
    export function setDisplayName(
        displayName: string,
    ): <T extends Component<any>>(component: T) => T;

    // Utilities: https://github.com/shakacode/recompose/blob/master/docs/API.md#utilities

    // compose: https://github.com/shakacode/recompose/blob/master/docs/API.md#compose
    export function compose<TInner, TOutter>(
        ...functions: Function[]
    ): ComponentEnhancer<TInner, TOutter>;
    // export function compose<TOutter>(
    //     ...functions: Array<Function>
    // ): ComponentEnhancer<any, TOutter>;
    // export function compose(
    //     ...functions: Array<Function>
    // ): ComponentEnhancer<any, any>;

    // getDisplayName: https://github.com/shakacode/recompose/blob/master/docs/API.md#getDisplayName
    export function getDisplayName(
        component: Component<any>,
    ): string;

    // wrapDisplayName: https://github.com/shakacode/recompose/blob/master/docs/API.md#wrapDisplayName
    export function wrapDisplayName(
        component: Component<any>,
        wrapperName: string,
    ): string;

    // shallowEqual: https://github.com/shakacode/recompose/blob/master/docs/API.md#shallowEqual
    export function shallowEqual(
        a: Object,
        b: Object,
    ): boolean;

    // isClassComponent: https://github.com/shakacode/recompose/blob/master/docs/API.md#isClassComponent
    export function isClassComponent(
        value: any,
    ): boolean;

    // createEagerElement: https://github.com/shakacode/recompose/blob/master/docs/API.md#createEagerElement
    export function createEagerElement(
        type: Component<any> | string,
        props?: Object,
        children?: React.ReactNode,
    ): React.ReactElement;

    // createEagerFactory: https://github.com/shakacode/recompose/blob/master/docs/API.md#createEagerFactory
    type componentFactory = (props?: Object, children?: React.ReactNode) => React.ReactElement;
    export function createEagerFactory(
        type: Component<any> | string,
    ): componentFactory;

    // createSink: https://github.com/shakacode/recompose/blob/master/docs/API.md#createSink
    export function createSink(
        callback: (props: Object) => void,
    ): React.ComponentClass<any>; // ???

    // componentFromProp: https://github.com/shakacode/recompose/blob/master/docs/API.md#componentFromProp
    export function componentFromProp(
        propName: string,
    ): FunctionComponent<any>;

    // nest: https://github.com/shakacode/recompose/blob/master/docs/API.md#nest
    export function nest(
        ...Components: (string | Component<any>)[]
    ): React.ComponentClass<any>; // ???

    // hoistStatics: https://github.com/shakacode/recompose/blob/master/docs/API.md#hoistStatics
    export function hoistStatics<TProps>(
        hoc: InferableComponentEnhancer<TProps>,
        blacklist?: { [key: string]: boolean },
    ): InferableComponentEnhancer<TProps>;

    // Observable utilities: https://github.com/shakacode/recompose/blob/master/docs/API.md#observable-utilities

    // componentFromStream: https://github.com/shakacode/recompose/blob/master/docs/API.md#componentFromStream
    export function componentFromStream<TProps>(
        propsToReactNode: mapper<Subscribable<TProps>, Subscribable<React.ReactNode>>,
    ): Component<TProps>; // ???

    // componentFromStreamWithConfig: https://github.com/shakacode/recompose/blob/master/docs/API.md#componentfromstreamwithconfig
    export function componentFromStreamWithConfig(config: ObservableConfig): <TProps>(
        propsToReactNode: mapper<Subscribable<TProps>, Subscribable<React.ReactNode>>,
    ) => Component<TProps>;

    // mapPropsStream: https://github.com/shakacode/recompose/blob/master/docs/API.md#mapPropsStream
    export function mapPropsStream<TInner, TOutter>(
        transform: mapper<Subscribable<TOutter>, Subscribable<TInner>>,
    ): ComponentEnhancer<TInner, TOutter>;

    // mapPropsStreamWithConfig: https://github.com/shakacode/recompose/blob/master/docs/API.md#mappropsstreamwithconfig
    export function mapPropsStreamWithConfig(config: ObservableConfig): <TInner, TOutter>(
        transform: mapper<Subscribable<TOutter>, Subscribable<TInner>>,
    ) => ComponentEnhancer<TInner, TOutter>;

    // createEventHandler: https://github.com/shakacode/recompose/blob/master/docs/API.md#createEventHandler
    type EventHandlerOf<T, TSubs extends Subscribable<T>> = {
        handler: (value: T) => void;
        stream: TSubs;
    };
    export function createEventHandler<T, TSubs extends Subscribable<T>>(): EventHandlerOf<T, TSubs>;

    // createEventHandlerWithConfig: https://github.com/shakacode/recompose/blob/master/docs/API.md#createEventHandlerWithConfig
    export function createEventHandlerWithConfig(
        config: ObservableConfig,
    ): <T, TSubs extends Subscribable<T>>() => EventHandlerOf<T, TSubs>;

    // setObservableConfig: https://github.com/shakacode/recompose/blob/master/docs/API.md#setObservableConfig
    type ObservableConfig = {
        fromESObservable?: (<T>(observable: Subscribable<T>) => any) | undefined;
        toESObservable?: (<T>(stream: any) => Subscribable<T>) | undefined;
    };
    export function setObservableConfig(config: ObservableConfig): void;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#rxjs
declare module "@shakacode/recompose/rxjsObservableConfig" {
    import { ObservableConfig } from "@shakacode/recompose";

    const rxjsconfig: ObservableConfig;

    export default rxjsconfig;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#rxjs-4-legacy
declare module "@shakacode/recompose/rxjs4ObservableConfig" {
    import { ObservableConfig } from "@shakacode/recompose";

    const rxjs4config: ObservableConfig;

    export default rxjs4config;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#most
declare module "@shakacode/recompose/mostObservableConfig" {
    import { ObservableConfig } from "@shakacode/recompose";

    const mostConfig: ObservableConfig;

    export default mostConfig;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#xstream
declare module "@shakacode/recompose/xstreamObservableConfig" {
    import { ObservableConfig } from "@shakacode/recompose";

    const xstreamConfig: ObservableConfig;

    export default xstreamConfig;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#bacon
declare module "@shakacode/recompose/baconObservableConfig" {
    import { ObservableConfig } from "@shakacode/recompose";

    const baconConfig: ObservableConfig;

    export default baconConfig;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#kefir
declare module "@shakacode/recompose/kefirObservableConfig" {
    import { ObservableConfig } from "@shakacode/recompose";

    const kefirConfig: ObservableConfig;

    export default kefirConfig;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#mapprops
declare module "@shakacode/recompose/mapProps" {
    import { mapProps } from "@shakacode/recompose";
    export default mapProps;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#withprops
declare module "@shakacode/recompose/withProps" {
    import { withProps } from "@shakacode/recompose";
    export default withProps;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#withpropsonchange
declare module "@shakacode/recompose/withPropsOnChange" {
    import { withPropsOnChange } from "@shakacode/recompose";
    export default withPropsOnChange;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#withhandlers
declare module "@shakacode/recompose/withHandlers" {
    import { withHandlers } from "@shakacode/recompose";
    export default withHandlers;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#defaultprops
declare module "@shakacode/recompose/defaultProps" {
    import { defaultProps } from "@shakacode/recompose";
    export default defaultProps;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#renameprop
declare module "@shakacode/recompose/renameProp" {
    import { renameProp } from "@shakacode/recompose";
    export default renameProp;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#renameprops
declare module "@shakacode/recompose/renameProps" {
    import { renameProps } from "@shakacode/recompose";
    export default renameProps;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#flattenprop
declare module "@shakacode/recompose/flattenProp" {
    import { flattenProp } from "@shakacode/recompose";
    export default flattenProp;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#withstate
declare module "@shakacode/recompose/withState" {
    import { withState } from "@shakacode/recompose";
    export default withState;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#withstatehandlers
declare module "@shakacode/recompose/withStateHandlers" {
    import { withStateHandlers } from "@shakacode/recompose";
    export default withStateHandlers;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#withreducer
declare module "@shakacode/recompose/withReducer" {
    import { withReducer } from "@shakacode/recompose";
    export default withReducer;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#branch
declare module "@shakacode/recompose/branch" {
    import { branch } from "@shakacode/recompose";
    export default branch;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#rendercomponent
declare module "@shakacode/recompose/renderComponent" {
    import { renderComponent } from "@shakacode/recompose";
    export default renderComponent;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#rendernothing
declare module "@shakacode/recompose/renderNothing" {
    import { renderNothing } from "@shakacode/recompose";
    export default renderNothing;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#shouldupdate
declare module "@shakacode/recompose/shouldUpdate" {
    import { shouldUpdate } from "@shakacode/recompose";
    export default shouldUpdate;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#pure
declare module "@shakacode/recompose/pure" {
    import { pure } from "@shakacode/recompose";
    export default pure;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#onlyupdateforkeys
declare module "@shakacode/recompose/onlyUpdateForKeys" {
    import { onlyUpdateForKeys } from "@shakacode/recompose";
    export default onlyUpdateForKeys;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#onlyupdateforproptypes
declare module "@shakacode/recompose/onlyUpdateForPropTypes" {
    import { onlyUpdateForPropTypes } from "@shakacode/recompose";
    export default onlyUpdateForPropTypes;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#withcontext
declare module "@shakacode/recompose/withContext" {
    import { withContext } from "@shakacode/recompose";
    export default withContext;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#getcontext
declare module "@shakacode/recompose/getContext" {
    import { getContext } from "@shakacode/recompose";
    export default getContext;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#lifecycle
declare module "@shakacode/recompose/lifecycle" {
    import { lifecycle } from "@shakacode/recompose";
    export default lifecycle;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#toclass
declare module "@shakacode/recompose/toClass" {
    import { toClass } from "@shakacode/recompose";
    export default toClass;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#torenderprops
declare module "@shakacode/recompose/toRenderProps" {
    import { toRenderProps } from "@shakacode/recompose";
    export default toRenderProps;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#fromrenderprops
declare module "@shakacode/recompose/fromRenderProps" {
    import { fromRenderProps } from "@shakacode/recompose";
    export default fromRenderProps;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#setstatic
declare module "@shakacode/recompose/setStatic" {
    import { setStatic } from "@shakacode/recompose";
    export default setStatic;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#setproptypes
declare module "@shakacode/recompose/setPropTypes" {
    import { setPropTypes } from "@shakacode/recompose";
    export default setPropTypes;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#setdisplayname
declare module "@shakacode/recompose/setDisplayName" {
    import { setDisplayName } from "@shakacode/recompose";
    export default setDisplayName;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#compose
declare module "@shakacode/recompose/compose" {
    import { compose } from "@shakacode/recompose";
    export default compose;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#getdisplayname
declare module "@shakacode/recompose/getDisplayName" {
    import { getDisplayName } from "@shakacode/recompose";
    export default getDisplayName;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#wrapdisplayname
declare module "@shakacode/recompose/wrapDisplayName" {
    import { wrapDisplayName } from "@shakacode/recompose";
    export default wrapDisplayName;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#shallowequal
declare module "@shakacode/recompose/shallowEqual" {
    import { shallowEqual } from "@shakacode/recompose";
    export default shallowEqual;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#isclasscomponent
declare module "@shakacode/recompose/isClassComponent" {
    import { isClassComponent } from "@shakacode/recompose";
    export default isClassComponent;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#createsink
declare module "@shakacode/recompose/createSink" {
    import { createSink } from "@shakacode/recompose";
    export default createSink;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#componentfromprop
declare module "@shakacode/recompose/componentFromProp" {
    import { componentFromProp } from "@shakacode/recompose";
    export default componentFromProp;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#nest
declare module "@shakacode/recompose/nest" {
    import { nest } from "@shakacode/recompose";
    export default nest;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#hoiststatics
declare module "@shakacode/recompose/hoistStatics" {
    import { hoistStatics } from "@shakacode/recompose";
    export default hoistStatics;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#componentfromstream
declare module "@shakacode/recompose/componentFromStream" {
    import { componentFromStream } from "@shakacode/recompose";
    export { componentFromStreamWithConfig } from "@shakacode/recompose";
    export default componentFromStream;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#mappropsstream
declare module "@shakacode/recompose/mapPropsStream" {
    import { mapPropsStream } from "@shakacode/recompose";
    export { mapPropsStreamWithConfig } from "@shakacode/recompose";
    export default mapPropsStream;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#createeventhandler
declare module "@shakacode/recompose/createEventHandler" {
    import { createEventHandler } from "@shakacode/recompose";
    export { createEventHandlerWithConfig } from "@shakacode/recompose";
    export default createEventHandler;
}

// https://github.com/shakacode/recompose/blob/master/docs/API.md#setobservableconfig
declare module "@shakacode/recompose/setObservableConfig" {
    import { setObservableConfig } from "@shakacode/recompose";
    export default setObservableConfig;
}

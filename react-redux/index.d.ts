// Type definitions for react-redux 4.4.0
// Project: https://github.com/rackt/react-redux
// Definitions by: Qubo <https://github.com/tkqubo>, Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import * as Redux from 'redux';

export = ReactRedux;

declare namespace ReactRedux {

    type ComponentType<P> = React.ComponentClass<P> | React.StatelessComponent<P>;

    interface ComponentDecorator<M, P> {
        <TargetClass extends ComponentType<M>>(component: TargetClass): TargetClass & ConnectClass<P, TargetClass>;
    }

    interface ConnectState<S> {
        storeState: S
    }

    class Connect<P, S> extends React.Component<P, ConnectState<S>> {
        version: number;
        store: Redux.Store<S>;
        state: ConnectState<S>;
    }

    interface ConnectClass<P, W> extends React.ComponentClass<P> {
        constructor<S>(props?: P, context?: any): Connect<P, S>;
        WrappedComponent: W;
    }

    export type DefaultStateProps = {};
    export type DefaultDispatchProps = { dispatch: Redux.Dispatch<any> };
    export type DefaultMergedProps<TStateProps, TDispatchProps, TOwnProps> = TOwnProps & TStateProps & TDispatchProps;

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
    export function connect<TOwnProps>(
        mapStateToProps?: FuncOrSelf<InferableMapStateToProps<TOwnProps>>,
        mapDispatchToProps?: FuncOrSelf<InferableMapDispatchToPropsFunction<TOwnProps> | MapDispatchToPropsObject>,
        mergeProps?: void,
        options?: Options
    ): ComponentDecorator<any, TOwnProps>;

    export function connect<TStateProps, TDispatchProps, TOwnProps>(
        mapStateToProps?: FuncOrSelf<MapStateToProps<TStateProps, TOwnProps>>,
        mapDispatchToProps?: FuncOrSelf<MapDispatchToPropsFunction<TDispatchProps, TOwnProps> | MapDispatchToPropsObject>,
        mergeProps?: void,
        options?: Options
    ): ComponentDecorator<DefaultMergedProps<TStateProps, TDispatchProps, TOwnProps>, TOwnProps>;

    export function connect<TStateProps, TDispatchProps, TOwnProps, TMergedProps>(
        mapStateToProps?: FuncOrSelf<MapStateToProps<TStateProps, TOwnProps>>,
        mapDispatchToProps?: FuncOrSelf<MapDispatchToPropsFunction<TDispatchProps, TOwnProps> | MapDispatchToPropsObject>,
        mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
        options?: Options
    ): ComponentDecorator<TMergedProps, TOwnProps>;

    type FuncOrSelf<T> = (() => T) | T;

    type MapStateToProps<TStateProps, TOwnProps> = (state: any, ownProps?: TOwnProps) => TStateProps;

    type InferableMapStateToProps<TOwnProps> = <TStateProps>(state: any, ownProps?: TOwnProps) => TStateProps;

    type MapDispatchToPropsFunction<TDispatchProps, TOwnProps> = (dispatch: Redux.Dispatch<any>, ownProps?: TOwnProps) => TDispatchProps;

    type InferableMapDispatchToPropsFunction<TOwnProps> = <TDispatchProps>(dispatch: Redux.Dispatch<any>, ownProps?: TOwnProps) => TDispatchProps;

    type MapDispatchToPropsObject = {
        [name: string]: Redux.ActionCreator<any>;
    }

    type MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps> =
        (stateProps: TStateProps, dispatchProps: TDispatchProps, ownProps: TOwnProps) => TMergedProps;

    export interface Options {
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
        store?: Redux.Store<any>;
        children?: React.ReactNode;
    }

    /**
     * Makes the Redux store available to the connect() calls in the component hierarchy below.
     */
    export class Provider extends React.Component<ProviderProps, {}> {
    }
}

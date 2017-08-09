// Type definitions for react-redux 4.4.47
// Project: https://github.com/rackt/react-redux
// Definitions by: Qubo <https://github.com/tkqubo>, Sean Kelley <https://github.com/seansfkelley>, Thomas Hasner <https://github.com/thasner>, Jeremy Koritzinsky <https://github.com/jkoritzinsky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from 'react';
import * as Redux from 'redux';

type ComponentClass<P> = React.ComponentClass<P>;
type StatelessComponent<P> = React.StatelessComponent<P>;
type Component<P> = ComponentClass<P> | StatelessComponent<P>;
type ReactNode = React.ReactNode;
type Store<S> = Redux.Store<S>;
type Dispatch<S> = Redux.Dispatch<S>;
type ActionCreator<A> = Redux.ActionCreator<A>;

/**
 * From https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-307871458
 * The Diff type is a subtraction operator for string literal types. It relies on:
 *  - T | never = T
 *  - T & never = never
 *  - An object with a string index signature can be indexed with any string.
 */
type StringDiff<T extends string, U extends string> = ({[K in T]: K} &
  {[K in U]: never} & {[K: string]: never})[T];

/**
 * From https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
 * Omits keys in K from object type T
 */
type ObjectOmit<T extends object, K extends keyof T> = Pick<T, StringDiff<keyof T, K>>;

/**
 * Returns a version of type T where all properties which are also in U are optionalized.
 * Useful for makding props with defaults optional in React components.
 * Compare to flow's $Diff<> type: https://flow.org/en/docs/types/utilities/#toc-diff
 */
type ObjectDiff<T extends object, U extends object> = ObjectOmit<T, keyof U & keyof T> &
  {[K in (keyof U & keyof T)]?: T[K]};

export interface DispatchProp<S> {
  dispatch: Dispatch<S>;
}

interface ComponentDecorator<TMergedProps extends object> {
    <TOwnProps extends object>(component: Component<TOwnProps & TMergedProps>): ComponentClass<ObjectDiff<TOwnProps, TMergedProps & DispatchProp<any>>>;
}

interface ComponentDecoratorInfer<TMergedProps> {
    <T>(component: Component<T & TMergedProps>): ComponentClass<T>;
}

interface ComponentMergeDecorator<TMergedProps extends object> {
    <TOwnProps extends object>(component: Component<TOwnProps & TMergedProps>): ComponentClass<ObjectDiff<TOwnProps, TMergedProps>>;
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
export declare function connect(): ComponentDecoratorInfer<DispatchProp<any>>;

export declare function connect<TStateProps extends object, no_dispatch, TOwnProps>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>
): ComponentDecorator<TStateProps>;

export declare function connect<no_state, TDispatchProps extends object, TOwnProps>(
    mapStateToProps: null | undefined,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>
): ComponentDecorator<TDispatchProps>;

export declare function connect<TStateProps extends object, TDispatchProps extends object, TOwnProps>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>
): ComponentDecorator<TStateProps & TDispatchProps>;

export declare function connect<TStateProps, no_dispatch, TOwnProps, TMergedProps extends object>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: null | undefined,
    mergeProps: MergeProps<TStateProps, undefined, TOwnProps, TMergedProps>,
): ComponentMergeDecorator<TMergedProps>;

export declare function connect<no_state, TDispatchProps, TOwnProps, TMergedProps extends object>(
    mapStateToProps: null | undefined,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps: MergeProps<undefined, TDispatchProps, TOwnProps, TMergedProps>,
): ComponentMergeDecorator<TMergedProps>;

export declare function connect<no_state, no_dispatch, TOwnProps, TMergedProps extends object>(
    mapStateToProps: null | undefined,
    mapDispatchToProps: null | undefined,
    mergeProps: MergeProps<undefined, undefined, TOwnProps, TMergedProps>,
): ComponentMergeDecorator<TMergedProps>;

export declare function connect<TStateProps, TDispatchProps, TOwnProps, TMergedProps extends object>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
): ComponentMergeDecorator<TMergedProps>;

export declare function connect<TStateProps, no_dispatch, TOwnProps>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: null | undefined,
    mergeProps: null | undefined,
    options: Options
): ComponentDecorator<DispatchProp<any> & TStateProps>;

export declare function connect<no_state, TDispatchProps extends object, TOwnProps>(
    mapStateToProps: null | undefined,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps: null | undefined,
    options: Options
): ComponentDecorator<TDispatchProps>;

export declare function connect<TStateProps extends object, TDispatchProps, TOwnProps>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps: null | undefined,
    options: Options
): ComponentDecorator<TStateProps & TDispatchProps>;

export declare function connect<TStateProps, TDispatchProps, TOwnProps, TMergedProps extends object>(
    mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps>,
    mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
    options: Options
): ComponentMergeDecorator<TMergedProps>;

interface MapStateToProps<TStateProps, TOwnProps> {
    (state: any, ownProps?: TOwnProps): TStateProps;
}

interface MapStateToPropsFactory<TStateProps, TOwnProps> {
    (initialState: any, ownProps?: TOwnProps): MapStateToProps<TStateProps, TOwnProps>;
}

type MapStateToPropsParam<TStateProps, TOwnProps> = MapStateToProps<TStateProps, TOwnProps> | MapStateToPropsFactory<TStateProps, TOwnProps>;

interface MapDispatchToPropsFunction<TDispatchProps, TOwnProps> {
    (dispatch: Dispatch<any>, ownProps?: TOwnProps): TDispatchProps;
}

interface MapDispatchToPropsObject {
    [name: string]: ActionCreator<any>;
}

type MapDispatchToProps<TDispatchProps, TOwnProps> =
    MapDispatchToPropsFunction<TDispatchProps, TOwnProps> | MapDispatchToPropsObject;

interface MapDispatchToPropsFactory<TDispatchProps, TOwnProps> {
    (dispatch: Dispatch<any>, ownProps?: TOwnProps): MapDispatchToProps<TDispatchProps, TOwnProps>;
}

type MapDispatchToPropsParam<TDispatchProps, TOwnProps> = MapDispatchToProps<TDispatchProps, TOwnProps> | MapDispatchToPropsFactory<TDispatchProps, TOwnProps>;

interface MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps> {
    (stateProps: TStateProps, dispatchProps: TDispatchProps, ownProps: TOwnProps): TMergedProps;
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
export class Provider extends React.Component<ProviderProps, {}> { }

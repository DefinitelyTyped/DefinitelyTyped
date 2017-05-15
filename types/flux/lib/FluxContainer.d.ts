import * as Dispatcher from "./Dispatcher";
import * as FluxStore from "./FluxStore";
import * as React from "react";

/**
 * A FluxContainer is used to subscribe a react component to multiple stores.
 * The stores that are used must be returned from a static `getStores()` method.
 *
 * The component receives information from the stores via state. The state
 * is generated using a static `calculateState()` method that each container must implement.
 */
/**
 * Default options to create a Container.
 *
 * @interface RealOptions
 */
export interface RealOptions {
    /**
     * Default value: true
     *
     * @type {boolean}
     */
    pure?: boolean;
    /**
     * Default value: false
     *
     * @type {boolean}
     */
    withProps?: boolean;
    /**
     * Default value: false
     *
     * @type {boolean}
     */
    withContext?: boolean;
}

export type ComponentConstructor<TProps> = React.ComponentClass<TProps> | React.StatelessComponent<TProps>;

export interface ComponentStatic<TProps, TState, TContext> {
    getStores(maybeProps?: TProps, maybeContext?: TContext): Array<FluxStore<any>>;
    calculateState(prevState: TState, maybeProps?: TProps, maybeContext?: TContext): TState;
}

export type Component<TProps, TState, TContext> = ComponentConstructor<TProps> & ComponentStatic<TProps, TState, TContext>;

/**
 * Create is used to transform a react class into a container
 * that updates its state when relevant stores change.
 * The provided base class must have static methods getStores() and calculateState().
 */
export function create<TProps>(base: Component<TProps, any, any>, options?: RealOptions): Component<TProps, any, any>;
export function create<TProps, TState>(base: Component<TProps, TState, any>, options?: RealOptions): Component<TProps, TState, any>;
export function create<TProps, TState, TContext>(base: Component<TProps, TState, TContext>, options?: RealOptions): Component<TProps, TState, TContext>;
export function create<TProps, TState, TContext, TStatic>(base: Component<TProps, TState, TContext> & TStatic, options?: RealOptions): Component<TProps, TState, TContext> & TStatic;

/**
 * This is a way to connect stores to a functional stateless view.
 */
export function createFunctional<TProps, TState>(
    viewFn: (props: TProps) => React.ReactElement<TState>,
    getStores: (maybeProps?: TProps, maybeContext?: any) => Array<FluxStore<any>>,
    calculateState: (prevState?: TState, maybeProps?: TProps, maybeContext?: any) => TState,
    options?: RealOptions
): Component<TProps, TState, any>;

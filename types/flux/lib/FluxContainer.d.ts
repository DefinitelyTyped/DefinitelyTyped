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

export interface Component<TProps, TState> {
    getStores(maybeProps?: TProps, maybeContext?: any): Array<FluxStore<any>>;
    calculateState(prevState: TState, maybeProps?: TProps, maybeContext?: any): TState;
}

/**
 * Create is used to transform a react class into a container
 * that updates its state when relevant stores change.
 * The provided base class must have static methods getStores() and calculateState().
 */
// TODO: Waiting TS 2.3 release to set default generic values as any.
export function create<TProps, TState>(base: Component<TProps, TState>, options?: RealOptions): React.ComponentClass<TProps>;

/**
 * This is a way to connect stores to a functional stateless view.
 */
export function createFunctional<TProps, TState>(
    viewFn: (props: TProps) => React.ReactElement<TState>,
    getStores: (maybeProps?: TProps, maybeContext?: any) => Array<FluxStore<any>>,
    calculateState: (prevState?: TState, maybeProps?: TProps, maybeContext?: any) => TState,
    options?: RealOptions
): React.ComponentClass<TProps>;

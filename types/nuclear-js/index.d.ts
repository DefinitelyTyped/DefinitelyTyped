// Type definitions for nuclear-js 1.4
// Project: https://github.com/optimizely/nuclear-js
// Definitions by: Pat Lillis <https://github.com/patlillis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as _Immutable from 'immutable';

// Disable automatic exports.
export {};

// NuclearJS re-exports everything in ImmutableJS.
export import Immutable = _Immutable;

interface ReactorConfig {
    /** If true it will log the entire app state for every dispatch. */
    debug?: boolean;

    /** Additional options for customizing Reactor behavior. */
    options?: {
        /** Log information for each dispatch. */
        logDispatches?: boolean;

        /** log the entire app state after each dispatch. */
        logAppState?: boolean;

        /** Log what stores changed after a dispatch. */
        logDirtyStores?: boolean;

        /** Throw an error when dispatching an `undefined` actionType. */
        throwOnUndefinedActionType?: boolean;

        /** Throw an error if a store returns undefined. */
        throwOnUndefinedStoreReturnValue?: boolean;

        /** Throw an error if a store.getInitialState() returns a non immutable value. */
        throwOnNonImmutableStore?: boolean;

        /** Throw when dispatching in dispatch. */
        throwOnDispatchInDispatch?: boolean;
    };
}

// Getters have a really complex, recursive type that can't be represented
// in TypeScript, but at a high level they are all Arrays.
type Getter = any[];

interface ReactMixin {
    getInitialState(): any;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

/**
 * State is stored in NuclearJS Reactors. Reactors contain a `state` object
 * which is an Immutable.Map
 *
 * The only way Reactors can change state is by reacting to messages. To
 * update state, Reactor's dispatch messages to all registered stores, and
 * the store returns it's new state based on the message
 */
export interface Reactor {
    prevReactorState: any;
    reactorState: any;
    observerState: any;
    ReactMixin: ReactMixin;

    /**
     * Dispatches a message to all registered Stores.
     *
     * This process is done synchronously, all registered Stores are passed
     * this message and all components are re-evaluated (efficiently). After
     * a dispatch, a Reactor will emit the new state on the
     * reactor.changeEmitter.
     */
    dispatch(actionType: string, payload?: any): void;

    /**
     * Allows multiple dispatches within the `fn` function before notifying
     * any observers.
     */
    batch(fn: () => void): void;

    /**
     * Returns the immutable value for some KeyPath or Getter in the reactor
     * state.
     *
     * Returns `undefined` if a keyPath doesn't have a value.
     */
    evaluate(getter: Getter): any;

    /**
     * Returns a plain JS value for some KeyPath or Getter in the reactor
     * state.
     *
     * Returns `undefined` if a keyPath doesn't have a value.
     */
    evaluateToJS(getter: Getter): any;

    /**
     * Adds a change observer that is invoked whenever any part of the
     * reactor state changes.
     */
    observe(handler: () => void): () => void;

    /**
     * Adds a change observer that is invoked whenever any dependencies of
     * the getter change.
     *
     * @returns An "unsubscribe" function
     */
    observe(getter: Getter, handler: (value?: any) => void): () => void;

    /**
     * Removes the change observer for the getter.
     */
    unobserve(getter: Getter, handler: (value?: any) => void): void;

    /**
     * Returns a plain JavaScript object representing the application state.
     *
     * By default this maps over all stores and returns `toJS(storeState)`.
     */
    serialize(): any;

    /**
     * Takes a plain JavaScript object and merges into the reactor state,
     * using `store.deserialize()`.
     *
     * This can be useful if you need to load data already on the page.
     */
    loadState(state: any): void;

    /**
     * Registers stores.
     */
    registerStores(stores: { [storeName: string]: Store }): void;

    /**
     * Replace store implementation (handlers) without modifying the app
     * state or calling `getInitialState`.
     *
     * Useful for hot reloading
     */
    replaceStores(stores: { [storeName: string]: Store }): void;

    /**
     * Resets the state of a reactor and returns it back to initial state.
     */
    reset(): void;
}

export const Reactor: {
    /**
     * State is stored in NuclearJS Reactors. Reactors contain a `state` object
     * which is an Immutable.Map
     *
     * The only way Reactors can change state is by reacting to messages. To
     * update state, Reactor's dispatch messages to all registered stores, and
     * the store returns it's new state based on the message
     */
    new (config?: ReactorConfig): Reactor;

    /**
     * State is stored in NuclearJS Reactors. Reactors contain a `state` object
     * which is an Immutable.Map
     *
     * The only way Reactors can change state is by reacting to messages. To
     * update state, Reactor's dispatch messages to all registered stores, and
     * the store returns it's new state based on the message
     */
    (config?: ReactorConfig): Reactor;
};

/**
 * A Store defines how a certain domain of the application should respond to
 * actions taken on the whole system. They manage their own section of the
 * entire app state and have no knowledge about the other parts of the
 * application state.
 */
export interface Store<T = any> extends StoreLike<T> {
    /**
     * Takes a current reactor state, action type and payload, does the
     * reaction, and returns the new state.
     */
    handle(state: T, actionType: string, payload?: any): T;

    /**
     * Binds an action type to a handler.
     */
    on(actionType: string, handler: (state: T, payload?: any) => T): void;

    /**
     * Pure function taking the current state of store and returning the new
     * state after a NuclearJS reactor has been reset
     */
    handleReset(this: Store<T>, state: T): T;

    /**
     * Serializes store state to plain JSON serializable JavaScript.
     */
    serialize(this: Store<T>, state: T): any;

    /**
     * Deserializes plain JavaScript to store state.
     */
    deserialize(this: Store<T>, state: any): T;
}

/**
 * Stores are initialized like:
 *
 * ```
 * new Store({
 *   initialize() { ... },
 *   getInitialState() { ... },
 * })
 * ```
 *
 * This type defines the functions for the object passed to the
 * `new Store()` constructor. In additional, all of these functions are
 * available on the base `Store` object itself.
 */
interface StoreLike<T> {
    /**
     * Gets the initial state for this type of store
     */
    getInitialState(this: Store<T>): T;

    /**
     * Sets up message handlers via `this.on` and to set up the initial
     * state.
     */
    initialize(this: Store<T>): void;

    /**
     * Pure function taking the current state of store and returning the new
     * state after a NuclearJS reactor has been reset
     */
    handleReset?(this: Store<T>, state: T): T;

    /**
     * Serializes store state to plain JSON serializable JavaScript.
     */
    serialize?(this: Store<T>, state: T): any;

    /**
     * Deserializes plain JavaScript to store state.
     */
    deserialize?(this: Store<T>, state: any): T;
}

export const Store: {
    /**
     * A Store defines how a certain domain of the application should respond to
     * actions taken on the whole system. They manage their own section of the
     * entire app state and have no knowledge about the other parts of the
     * application state.
     */
    new <T>(config: StoreLike<T>): Store<T>;

    /**
     * A Store defines how a certain domain of the application should respond to
     * actions taken on the whole system. They manage their own section of the
     * entire app state and have no knowledge about the other parts of the
     * application state.
     */
    <T>(config: StoreLike<T>): Store<T>;
};

/**
 * Checks if something is simply a keyPath and not a getter.
 */
export function isKeyPath(toTest: any): boolean;

/**
 * Checks if something is a getter literal.
 *
 * For example, `['dep1', 'dep2', function(dep1, dep2) {...}]`.
 */
export function isGetter(toTest: any): boolean;

/**
 * Converts an Immutable Sequence to JS object.
 *
 * Can be called on any type.
 */
export function toJS(arg: any): any;

/**
 * Converts a JS object to an Immutable object, if it's already Immutable its a
 * no-op.
 */
export function toImmutable(arg: any): any;

/**
 * Returns true if the value is an ImmutableJS data structure.
 */
export function isImmutable(arg: any): boolean;

export function createReactMixin(reactor: Reactor): ReactMixin;

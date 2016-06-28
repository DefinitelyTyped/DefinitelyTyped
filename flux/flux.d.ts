// Type definitions for Flux
// Project: http://facebook.github.io/flux/
// Definitions by: Steve Baker <https://github.com/stkb/>, Giedrius Grabauskas <https://github.com/GiedriusGrabauskas/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />
/// <reference path="../fbemitter/fbemitter.d.ts" />
/// <reference path="../immutable/immutable.d.ts" />

declare namespace Flux {

    /**
    * Dispatcher class
    * Create an instance to use throughout the application.
    * Or extend it to create a derived dispatcher class.
    *
    * Specify a type in the 'TPayload' generic argument to use strongly-typed payloads,
    * otherwise specify 'any'
    *
    * Examples:
    *     var dispatcher = new flux.Dispatcher<any>()
    *     var typedDispatcher = new flux.Dispatcher<MyCustomActionType>()
    *     class DerivedDispatcher extends flux.Dispatcher<MyCustomActionType> { }
    */
    export class Dispatcher<TPayload> {

        /**
        * Create an instance of the Dispatcher class to use throughout the application.
        *
        * Specify a type in the 'TPayload' generic argument to use strongly-typed payloads,
        * otherwise specify 'any'
        *
        * Examples:
        *     var dispatcher = new flux.Dispatcher<any>()
        *     var typedDispatcher = new flux.Dispatcher<MyCustomActionType>()
        */
        constructor();

        /**
        * Registers a callback that will be invoked with every payload sent to the dispatcher.
        * Returns a string token to identify the callback to be used with waitFor() or unregister.
        */
        register(callback: (payload: TPayload) => void): string;

        /**
        * Unregisters a callback with the given ID token
        */
        unregister(id: string): void;

        /**
        * Waits for the callbacks with the specified IDs to be invoked before continuing execution
        * of the current callback. This method should only be used by a callback in response
        * to a dispatched payload.
        */
        waitFor(IDs: string[]): void;

        /**
        * Dispatches a payload to all registered callbacks
        */
        dispatch(payload: TPayload): void;

        /**
        * Gets whether the dispatcher is currently dispatching
        */
        isDispatching(): boolean;
    }
}

declare module "flux" {
    export = Flux;
}

declare namespace FluxUtils {

    import React = __React;
    import fbEmitter = FBEmitter;
    import immutable = Immutable;
    
    /**
     * Default options to create a Container with
     * 
     * @interface RealOptions
     */
    interface RealOptions {
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
    }
    
    export class Container {
        constructor();
        /**
        * Create is used to transform a react class into a container
        * that updates its state when relevant stores change.
        * The provided base class must have static methods getStores() and calculateState().
        */
        static create<TComponent>(base: React.ComponentClass<TComponent>, options?: RealOptions): React.ComponentClass<TComponent>;
    }

    /**
    * This class extends ReduceStore and defines the state as an immutable map.
    */
    export class MapStore<K extends string | number, V, TPayload> extends ReduceStore<immutable.Map<K, V>, TPayload> {
        /**
        * Access the value at the given key.
        * Throws an error if the key does not exist in the cache.
        */
        at(key: K): V;

        /**
        *  Check if the cache has a particular key
        */
        has(key: K): boolean;

        /**
        * Get the value of a particular key.
        * Returns undefined if the key does not exist in the cache.
        */
        get(key: K): V;

        /**
        * Gets an array of keys and puts the values in a map if they exist,
        * it allows providing a previous result to update instead of generating a new map.
        * Providing a previous result allows the possibility of keeping the same reference if the keys did not change.
        */
        getAll(keys: immutable.Iterable.Indexed<K>, prev?: immutable.Map<K, V>): immutable.Map<K, V>;
    }

    export class ReduceStore<T, TPayload> extends Store<TPayload> {
        /**
        * Getter that exposes the entire state of this store.
        * If your state is not immutable you should override this and not expose state directly.
        */
        getState(): T;

        /**
        * Constructs the initial state for this store.
        * This is called once during construction of the store.
        */
        getInitialState(): T;

        /**
        * Reduces the current state, and an action to the new state of this store.
        * All subclasses must implement this method.
        * This method should be pure and have no side-effects.
        */
        reduce(state: T, action: TPayload): T;

        /**
        * Checks if two versions of state are the same.
        * You do not need to override this if your state is immutable.
        */
        areEqual(one: T, two: T): boolean;

    }

    export class Store<TPayload> {

        /**
        * Constructs and registers an instance of this store with the given dispatcher.
        */
        constructor(dispatcher: Flux.Dispatcher<TPayload>);

        /**
        * Adds a listener to the store, when the store changes the given callback will be called.
        * A token is returned that can be used to remove the listener.
        * Calling the remove() function on the returned token will remove the listener.
        */
        addListener(callback: Function): fbEmitter.EventSubscription;

        /**
        * Returns the dispatcher this store is registered with.
        */
        getDispatcher(): Flux.Dispatcher<TPayload>;

        /**
        * Returns the dispatch token that the dispatcher recognizes this store by.
        * Can be used to waitFor() this store.
        */
        getDispatchToken(): string;

        /**
        * Ask if a store has changed during the current dispatch.
        * Can only be invoked while dispatching.
        * This can be used for constructing derived stores that depend on data from other stores.
        */
        hasChanged(): boolean;

        /**
        *Emit an event notifying all listeners that this store has changed.
        * This can only be invoked when dispatching.
        * Changes are de-duplicated and resolved at the end of this store's __onDispatch function.
        */
        __emitChange(): void;

        /**
        * Subclasses must override this method.
        * This is how the store receives actions from the dispatcher.
        * All state mutation logic must be done during this method.
        */
        __onDispatch(payload: TPayload): void;
    }
}

declare module 'flux/utils' {
    export = FluxUtils;
}

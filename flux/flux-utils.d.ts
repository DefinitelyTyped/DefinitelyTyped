// Type definitions for Flux/utils
// Project: http://facebook.github.io/flux/
// Definitions by: Giedrius Grabauskas <https://github.com/QuatroDevOfficial>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../immutable/immutable.d.ts" />

declare module FluxUtils {

    export class Container {
        /**
        * Create is used to transform a react class into a container 
        * that updates its state when relevant stores change. 
        * The provided base class must have static methods getStores() and calculateState().
        */
        static create(base: React.ComponentClass<Object>, options?: Object): React.ComponentClass<Object>;
     }

    /**
    * This class extends ReduceStore and defines the state as an immutable map.
    */
    export class MapStore<K extends string | number,V> extends ReduceStore<Immutable.Map<K, V>> {

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
        getAll(keys: Iterable<K>, prev?: Immutable.Map<K, V>): Immutable.Map<K, V>;
    }

    export class ReduceStore<T> extends Store {
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
        reduce(state: T, action: Object): T;

        /**
        * Checks if two versions of state are the same. 
        * You do not need to override this if your state is immutable.
        */
        areEqual(one: T, two: T): boolean;

    }

    export class Store {
        
        /**
        * Constructs and registers an instance of this store with the given dispatcher.
        */
        constructor(dispatcher: Flux.Dispatcher<Object>);

        /**
        * Adds a listener to the store, when the store changes the given callback will be called. 
        * A token is returned that can be used to remove the listener. 
        * Calling the remove() function on the returned token will remove the listener.
        */
        addListener(callback: Function): { remove: Function };

        /**
        * Returns the dispatcher this store is registered with.
        */
        getDispatcher(): Flux.Dispatcher<Object>;

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
        __onDispatch(payload: Object): void;
    }



}

declare module 'flux/utils' {
    export = FluxUtils;
}

// Type definitions for Flux Utils 3.0
// Project: http://facebook.github.io/flux/
// Definitions by: Steve Baker <https://github.com/stkb/>, Giedrius Grabauskas <https://github.com/GiedriusGrabauskas/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="react" />
/// <reference types="flux" />
/// <reference types="fbemitter" />

import * as React from 'react';
import * as Flux from 'flux';
import * as fbEmitter from 'fbemitter';

export = FluxUtils;

declare namespace FluxUtils {
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
        /**
         * Default value: false
         *
         * @type {boolean}
         */
        withContext?: boolean;
    }

    export class Container {
        constructor();
        /**
        * Create is used to transform a react class into a container
        * that updates its state when relevant stores change.
        * The provided base class must have static methods getStores() and calculateState().
        */
        static create<TComponent>(base: React.ComponentClass<TComponent>, options?: RealOptions): React.ComponentClass<TComponent>;



        /**
         * This is a way to connect stores to a functional stateless view
         */
        static createFunctional<Props, State>(
            viewFn: (props: State) => React.ReactElement<State>,
            getStores: (props?: Props, context?: any) => FluxUtils.Store<any>[],
            calculateState: (prevState?: State, props?: Props, context?: any) => State,
            options?: RealOptions
        ): React.ComponentClass<Props>;
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


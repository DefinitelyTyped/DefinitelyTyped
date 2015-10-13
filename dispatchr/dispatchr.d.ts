// Type definitions for Dispatchr 0.3.3
// Project: https://github.com/yahoo/dispatchr
// Definitions by: Umidbek Karimov <https://github.com/umidbek.karimov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../eventemitter3/eventemitter3.d.ts' />

declare module __Dispatchr {
    class Store {
        static name: string;
        static handlers: { [actionType: string]: string | Function };

        constructor(dispatcher: Dispatcher);

        protected dehydrate(): Object;
        protected rehydrate(state: Object): void;
    }

    interface getStore {
        <T extends Store>(store: string | typeof Store): T;
    }

    function getStore<T extends Store>(store: string | typeof Store): T

    interface Action<TPayload, TResult> {
        constructor(name: String, payload: TPayload): void;
        /**
         * Gets a name from a store
         * @method getStoreName
         * @param {String|Object} store The store name or class from which to extract
         *      the name
         * @returns {String}
         */
        getStoreName(store: string | typeof Store): string;
        /**
         * Executes all handlers for the action
         * @method execute
         * @param {Function[]} handlers A mapping of store names to handler function
         * @throws {Error} if action has already been executed
         */
        execute(handlers: Array<Function>): void;
        /**
         * Waits until all stores have finished handling an action and then calls
         * the callback
         * @method waitFor
         * @param {String|String[]|Constructor|Constructor[]} stores An array of stores as strings or constructors to wait for
         * @param {Function} callback Called after all stores have completed handling their actions
         * @throws {Error} if the action is not being executed
         */
        waitFor(stores: String | Array<String> | typeof Store | Array<typeof Store>, callback: Function): void;
    }

    interface DispatcherContext {
        /**
         * @class Dispatcher
         * @param {Object} context The context to be used for store instances
         * @constructor
         */
        constructor(dispatcher: Dispatcher, context: Object): void;
        /**
         * Returns a single store instance and creates one if it doesn't already exist
         * @method getStore
         * @param {String} name The name of the instance
         * @returns {Object} The store instance
         * @throws {Error} if store is not registered
         */
        getStore: getStore;
        /**
         * Dispatches a new action or queues it up if one is already in progress
         * @method dispatch
         * @param {String} actionName Name of the action to be dispatched
         * @param {Object} payload Parameters to describe the action
         * @throws {Error} if store has handler registered that does not exist
         */
        dispatch(actionName: string, payload: any): void;
        /**
         * Returns a raw data object representation of the current state of the
         * dispatcher and all store instances. If the store implements a shouldDehdyrate
         * function, then it will be called and only dehydrate if the method returns `true`
         * @method dehydrate
         * @returns {Object} dehydrated dispatcher data
         */
        dehydrate(): Object;
        /**
         * Takes a raw data object and rehydrates the dispatcher and store instances
         * @method rehydrate
         * @param {Object} dispatcherState raw state typically retrieved from `dehydrate`
         *      method
         */
        rehydrate(dispatcherState: Object): void;
        /**
         * Waits until all stores have finished handling an action and then calls
         * the callback
         * @method waitFor
         * @param {String|String[]} stores An array of stores as strings to wait for
         * @param {Function} callback Called after all stores have completed handling their actions
         * @throws {Error} if there is no action dispatching
         */
        waitFor(stores: String | Array<String> | typeof Store | Array<typeof Store>, callback: Function): void;
    }

    export class Dispatcher {
        /**
         * @class Dispatcher
         * @param {Object} options Dispatcher options
         * @param {Array} options.stores Array of stores to register
         * @constructor
         */
        constructor(options: {
            stores: Array<typeof Store>
        });

        createContext(context: Object): DispatcherContext;

        /**
         * Registers a store so that it can handle actions.
         * @method registerStore
         * @static
         * @param {Object} store A store class to be registered. The store should have a static
         *      `name` property so that it can be loaded later.
         * @throws {Error} if store is invalid
         * @throws {Error} if store is already registered
         */
        registerStore(store: typeof Store): void;

        /**
         * Method to discover if a storeName has been registered
         * @method isRegistered
         * @static
         * @param {Object|String} store The store to check
         * @returns {boolean}
         */
        isRegistered(store: Store): boolean;

        /**
         * Gets a name from a store
         * @method getStoreName
         * @static
         * @param {String|Object} store The store name or class from which to extract
         *      the name
         * @returns {String}
         */
        getStoreName(store: Store): string;

        /**
         * Adds a handler function to be called for the given action
         * @method registerHandler
         * @private
         * @static
         * @param {String} action Name of the action
         * @param {String} name Name of the store that handles the action
         * @param {String|Function} handler The function or name of the method that handles the action
         * @returns {number}
         */
        registerHandler(action: string, name: string, handler: string | Function): number;
    }


}

declare module DispatcherAddons {
    /**
     * @class BaseStore
     * @extends EventEmitter
     * @param dispatcher The dispatcher interface
     * @constructor
     */
    export class BaseStore extends __Dispatchr.Store {
        emitChange(): void;

        getContext(): __Dispatchr.DispatcherContext;

        addChangeListener(callback: Function): void;

        removeChangeListener(callback: Function): void;

        shouldDehydrate(): boolean;
    }

    /**
     * Helper for creating a store class
     * @method createStore
     * @param {Object} spec
     * @param {String} spec.storeName The name of the store
     * @param {Object} spec.handlers Hash of action name to method name of action handlers
     * @param {Function} spec.initialize Function called during construction for setting the default state
     * @param {Function} spec.dehydrate Function that returns serializable data to send to the client
     * @param {Function} spec.rehydrate Function that takes in serializable data to rehydrate the store
     */
    export function createStore(spec: {
        storeName: string,
        handlers: { [actionType: string]: string },

        initialize: Function,
        dehydrate: Function,
        rehydrate: Function
    }): void;
}


declare module 'dispatchr' {
    export = __Dispatchr.Dispatcher;
}

declare module 'dispatchr/addons' {
    export = DispatcherAddons;
}

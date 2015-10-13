// Type definitions for Fluxible 1.0.0
// Project: https://github.com/yahoo/fluxible
// Definitions by: Umidbek Karimov <https://github.com/umidbek.karimov>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../react/react.d.ts' />
///<reference path="../dispatchr/dispatchr.d.ts"/>
///<reference path="../es6-promise/es6-promise.d.ts"/>

declare module fluxible {
    interface FluxiblePlugin {
        name: string;
        plugContext: Function;
        plugStoreContext: Function;
        plugActionContext: Function;
        plugComponentContext: Function;
        dehydrate: Function;
        rehydrate: Function;
    }

    interface ExecuteAction {
        <P, R>(action: IAction<P, R>, payload: P, done: ICallback<R>): void;
        <P, R>(action: IPromiseAction<P, R>, payload: P): Promise<R>;
    }

    interface DehydratedState {
        context: Object,
        plugins: {
            [pluginName: string]: Object
        }
    }

    interface FluxibleCreateContextOptions { }

    export class Fluxible {
        /**
         * Provides a structured way of registering an application's configuration and
         * resources.
         * @class Fluxible
         * @param {Object} [options]
         * @param {Object} [options.component] Stores your top level React component for access using `getComponent()`
         * @param {Function} [options.componentActionHandler] App level component action handler
         * @constructor
         *
         * @example
         *      var app = new Fluxible({
         *          component: require('./components/App.jsx')
         *      });
         */
        constructor(options: {
            component: typeof __React.Component,
            componentActionHandler?: Function
        });

        /**
         * Creates an isolated context for a request/session
         * @method createContext
         * @param {Object} [options]
         * @returns {FluxibleContext}
         */
        createContext(options: FluxibleCreateContextOptions): FluxibleContext;

        /**
         * Creates a new dispatcher instance using the application's dispatchr class. Used by
         * FluxibleContext to create new dispatcher instance
         * @method createDispatcherInstance
         * @param {Object} contextOptions The context options to be provided to each store instance
         * @returns {Dispatcher}
         */
        createDispatcherInstance(): __Dispatchr.Dispatcher;
        /**
        * Provides plugin mechanism for adding application level settings that are persisted
        * between server/client and also modification of the FluxibleContext
        * @method plug
        * @param {Object} plugin
        * @param {String} plugin.name Name of the plugin
        * @param {Function} plugin.plugContext Method called after context is created to allow
        *  dynamically plugging the context
        * @param {Object} [plugin.dehydrate] Method called to serialize the plugin settings to be persisted
        *  to the client
        * @param {Object} [plugin.rehydrate] Method called to rehydrate the plugin settings from the server
        */
        plug(plugin: FluxiblePlugin): void;
        /**
        * Provides access to a plugin instance by name
        * @method getPlugin
        * @param {String} pluginName The plugin name
        * @returns {Object}
        */
        getPlugin(pluginName: string): Plugin;
        /**
        * Getter for the top level react component for the application
        * @method getComponent
        * @returns {ReactComponent}
        */
        getComponent(): new () => __React.Component<any, any>;
        /**
        * Registers a store to the dispatcher so it can listen for actions
        * @method registerStore
        */
        registerStore(store: typeof __Dispatchr.Store): void;
       
        /**
        * Creates a serializable state of the application and a given context for sending to the client
        * @method dehydrate
        * @param {FluxibleContext} context
        * @returns {Object} Dehydrated state object
        */
        dehydrate(context: FluxibleContext): DehydratedState;
        
        /**
        * Rehydrates the application and creates a new context with the state from the server
        * @method rehydrate
        * @param {Object} obj Raw object of dehydrated state
        * @param {Object} obj.plugins Dehydrated app plugin state
        * @param {Object} obj.context Dehydrated context state
        * @param {Function} callback
        * @async Rehydration may require more asset loading or async IO calls
        */
        rehydrate(obj: DehydratedState, callback?: (err: Error, context: FluxibleContext) => void): Promise<any>
    }

    interface FluxibleContext {
        /**
         * A request or browser-session context
         * @class FluxibleContext
         * @param {Fluxible} app The Fluxible instance used to create the context
         * @constructor
         */
        constructor(app: Fluxible): void;

        /**
         * Creates an instance of the app level component with given props and a proper component
         * context.
         * @method createElement
         * @param {Object} props
         * @deprecated
         * @return {ReactElement}
         */
        createElement(props: Object): __React.ReactElement<any>;

        /**
         * Getter for the app's component. Pass through to the Fluxible instance.
         * @method getComponent
         * @returns {ReactComponent}
         */
        getComponent(): __React.Component<any, any>;

        /**
         * Getter for store from dispatcher
         * @method getStore
         * @returns {Object}
         */
        getStore: __Dispatchr.getStore;

        /**
         * Provides plugin mechanism for adding application level settings that are persisted
         * between server/client and also modification of the FluxibleContext
         * @method plug
         * @param {Object} plugin
         * @param {String} plugin.name Name of the plugin
         * @param {Function} [plugin.plugActionContext] Method called after action context is created to allow
         *  dynamically modifying the action context
         * @param {Function} [plugin.plugComponentContext] Method called after component context is created to
         *  allow dynamically modifying the component context
         * @param {Function} [plugin.plugStoreContext] Method called after store context is created to allow
         *  dynamically modifying the store context
         * @param {Object} [plugin.dehydrate] Method called to serialize the plugin settings to be persisted
         *  to the client
         * @param {Object} [plugin.rehydrate] Method called to rehydrate the plugin settings from the server
         */
        plug(plugin: FluxiblePlugin): void;

        /**
         * Proxy function for executing an action.
         * @param {Function} action An action creator function that receives actionContext, payload,
         *  and done as parameters
         * @param {Object} payload The action payload
         * @param {Function} [done] Method to be called once action execution has completed
         * @return {Promise} executeActionPromise Resolved with action result or rejected with action error
         */
        executeAction: ExecuteAction;
        
        /**
         * Returns the context for action controllers
         * @method getActionContext
         * @return {Object} Action context information
         */
        getActionContext(): ActionContext;

        /**
         * Returns the context for action controllers
         * @method getComponentContext
         * @return {Object} Component context information
         */
        getComponentContext(): ComponentContext;

        /**
         * Returns the context for stores
         * @method getStoreContext
         * @return {Object} Store context information
         */
        getStoreContext(): StoreContext;

        /**
         * Returns a serializable context state
         * @method dehydrate
         * @return {Object} See rehydrate method for properties
         */
        dehydrate(): Object;

        /**
         * Rehydrates the context state
         * @method rehydrate
         * @param {Object} obj Configuration
         * @param {Object} obj.plugins Dehydrated context plugin state
         * @param {Object} obj.dispatcher Dehydrated dispatcher state
         */
        rehydrate(obj: { plugins: Object, dispatcher: __Dispatchr.Dispatcher }): void;
    }

    interface ICallback<R> {
        (error?: any | Error, data?: R): void;
    }

    interface IBaseAction<P, R> {
    }

    interface IAction<P, R> extends IBaseAction<P, R> {
        (actionContext: ActionContext, payload: P, done: ICallback<R>): void;
    }

    interface IPromiseAction<P, R> extends IBaseAction<P, R> {
        (actionContext: ActionContext, payload: P): Promise<R>;
    }

    interface ActionContext {
        dispatch(eventName: string, payload: any): void;
        /**
         * Proxy function for executing an action.
         * @param {Function} action An action creator function that receives actionContext, payload,
         *  and done as parameters
         * @param {Object} payload The action payload
         * @param {Function} [done] Method to be called once action execution has completed
         * @return {Promise} executeActionPromise Resolved with action result or rejected with action error
         */
        executeAction<P, R>(action: IAction<P, R>, payload: P, done: ICallback<R>): void;
        executeAction<P, R>(action: IPromiseAction<P, R>, payload: P): Promise<R>;
        /**
         * Getter for store from dispatcher
         * @method getStore
         * @returns {Object}
         */
        getStore: __Dispatchr.getStore;
    }

    interface ComponentContext {
        /**
         * Getter for store from dispatcher
         * @method getStore
         * @returns {Object}
         */
        getStore: __Dispatchr.getStore;
        /**
         * Proxy function for executing an action.
         * @param {Function} action An action creator function that receives actionContext, payload,
         *  and done as parameters
         * @param {Object} payload The action payload
         */
        executeAction(action: IBaseAction<any, any>, payload: any): void;
    }

    interface StoreContext {
        getContext(): Object;
        /**
         * Returns a single store instance and creates one if it doesn't already exist
         * @method getStore
         * @param {String} name The name of the instance
         * @returns {Object} The store instance
         * @throws {Error} if store is not registered
         */
        getStore: __Dispatchr.getStore;
        /**
         * Waits until all stores have finished handling an action and then calls
         * the callback
         * @method waitFor
         * @param {String|String[]} stores An array of stores as strings to wait for
         * @param {Function} callback Called after all stores have completed handling their actions
         * @throws {Error} if there is no action dispatching
         */
        waitFor(stores: String | Array<String> | __Dispatchr.Store | Array<__Dispatchr.Store>, callback?: Function): Promise<any>;
    }
}

declare module 'fluxible/addons' {
    export = DispatcherAddons;
}

declare module 'fluxible' {
    export = fluxible;
}

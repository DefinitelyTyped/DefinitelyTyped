/// <reference types="node" />
import { Dispatcher, DispatcherInterface, StoreClass } from "dispatchr";
import BaseStore = require("./addons/BaseStore");

export interface FluxibleConfiguration {
    /**
     * App level component action handler
     */
    componentActionHandler?: (() => void) | undefined;
    /**
     * Stores your top level React component for access using `getComponent()`
     */
    component: any;
}

/**
 * Provides a structured way of registering an application's configuration and
 * resources.
 */
export class Fluxible {
    /**
     * @param [options]
     * @example
     *      var app = new Fluxible({
     *          component: require('./components/App.jsx')
     *      });
     */
    constructor(options?: FluxibleConfiguration);

    /**
     * Creates an isolated context for a request/session
     * @param [contextOptions] The options object.  Please refer to FluxibleContext's constructor
     *         doc for supported subfields and detailed description.
     */
    createContext(contextOptions?: any): FluxibleContext;

    /**
     * Creates a new dispatcher instance using the application's dispatchr class. Used by
     * FluxibleContext to create new dispatcher instance
     * @param contextOptions The context options to be provided to each store instance
     */
    createDispatcherInstance(contextOptions?: any): Dispatcher;

    /**
     * Provides plugin mechanism for adding application level settings that are persisted
     * between server/client and also modification of the FluxibleContext
     * @param plugin
     * @param plugin.name Name of the plugin
     * @param plugin.plugContext Method called after context is created to allow
     *  dynamically plugging the context
     * @param [plugin.dehydrate] Method called to serialize the plugin settings to be persisted
     *  to the client
     * @param [plugin.rehydrate] Method called to rehydrate the plugin settings from the server
     */
    plug(plugin: any): void;

    /**
     * Provides access to a plugin instance by name
     * @param pluginName The plugin name
     */
    getPlugin(pluginName: string): any;

    /**
     * Getter for the top level react component for the application
     */
    getComponent(): any;

    /**
     * Registers a store to the dispatcher so it can listen for actions
     */
    registerStore(store: StoreClass | typeof BaseStore): void;

    /**
     * Creates a serializable state of the application and a given context for sending to the client
     * @param context
     */
    dehydrate(context?: FluxibleContext): any;

    /**
     * Rehydrates the application and creates a new context with the state from the server
     * @param obj Raw object of dehydrated state
     * @param obj.plugins Dehydrated app plugin state
     * @param obj.context Dehydrated context state. See FluxibleContext's
     *                 rehydrate() for subfields in this object.
     * @param callback
     * @async Rehydration may require more asset loading or async IO calls
     */
    rehydrate(state: any, callback?: (err: Error, context: FluxibleContext) => void): void;
}

/**
 * A request or browser-session context
 */
export class FluxibleContext {
    /**
     * @param options The options sharable by the context and context plugins
     */

    constructor(options?: FluxibleConfiguration);

    /**
     * Provides plugin mechanism for adding application level settings that are persisted
     * between server/client and also modification of the FluxibleContext
     */
    plug(plugin: any): void;

    /**
     * Returns the context for action controllers
     * @return Action context information
     */
    getActionContext(): ActionContext;

    /**
     * Returns the context for action controllers
     * @return Component context information
     */
    getComponentContext(): ComponentContext;

    /**
     * Returns the context for stores
     * @return Store context information
     */
    getStoreContext(): StoreContext;

    /**
     * Returns a serializable context state
     */
    dehydrate(): any;

    /**
     * Rehydrates the context state
     */
    rehydrate(state: any): void;

    /**
     * Getter for store from dispatcher
     */
    getStore<T extends BaseStore>(store: { new(dispatcher: DispatcherInterface): T }): T;
}

export class ActionContext {
    /**
     * Dispatches a payload to all registered callbacks.
     * @param action Action name
     * @param payload
     */
    dispatch(action: string, payload?: any): void;

    /**
     * Proxy function to execute action
     * @param action function that will be executed
     * @param payload
     * @param callback
     */
    executeAction(
        action: (context: ActionContext, params: object, callback?: () => void) => void,
        payload?: any,
        callback?: any,
    ): void;

    /**
     * Getter for store from dispatcher
     */
    getStore<T extends BaseStore>(store: { new(dispatcher: DispatcherInterface): T }): T;

    /**
     * Data service. available only if fetch plugin is added
     */
    service?: {
        /**
         * GET request to the server
         * @param resource name of resourse
         * @param params query string parameters as key-value object
         * @param callback
         */
        read: (resource: string, params: any, callback: (error: Error, data: any) => void) => void;
        /**
         * POST request to the server
         * @param resource name of resourse
         * @param params query string parameters as key-value object
         * @param body json request body
         * @param callback
         */
        create: (resource: string, params: any, body: any, callback: (error: Error, data: any) => void) => void;
        /**
         * @param resource name of resourse
         * @param params query string parameters as key-value object
         * @param body json request body
         * @param callback
         */
        update: (resource: string, params: any, body: any, callback: (error: Error, data: any) => void) => void;
        /**
         * @param resource name of resourse
         * @param params query string parameters as key-value object
         * @param callback
         */
        delete: (resource: string, params: any, callback: (error: Error, data: any) => void) => void;
    } | undefined;
}

export class ComponentContext {
    /**
     * Proxy function to execute action
     * @param action function that will be executed
     * @param payload
     * @param callback
     */
    executeAction(action: (context: ActionContext, params: object, callback?: () => void) => void, payload?: any): void;

    /**
     * Getter for store from dispatcher
     */
    getStore<T extends BaseStore>(store: { new(dispatcher: DispatcherInterface): T }): T;
}

export class StoreContext {
}

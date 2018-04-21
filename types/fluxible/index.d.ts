// Type definitions for fluxible 1.4
// Project: https://fluxible.io/
// Definitions by: xbim <https://github.com/xbim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
/// <reference types="node" />
import { Dispatcher, DispatcherInterface, StoreClass } from 'dispatchr';
import BaseStore = require('./addons/BaseStore');

export interface FluxibleConfiguration {
    /**
     * App level component action handler
     */
    componentActionHandler?: () => void;
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
     * @param {FluxibleConfiguration} [options]
     * @constructor     *
     * @example
     *      var app = new Fluxible({
     *          component: require('./components/App.jsx')
     *      });
     */
    constructor(options?: FluxibleConfiguration);

    /**
     * Creates an isolated context for a request/session
     * @param {Object} [contextOptions] The options object.  Please refer to FluxibleContext's constructor
     *         doc for supported subfields and detailed description.
     * @returns {FluxibleContext}
     */
    createContext(contextOptions?: any): FluxibleContext;

    /**
     * Creates a new dispatcher instance using the application's dispatchr class. Used by
     * FluxibleContext to create new dispatcher instance
     * @param {Object} contextOptions The context options to be provided to each store instance
     * @returns {Dispatcher}
     */
    createDispatcherInstance(contextOptions?: any): Dispatcher;

    /**
     * Provides plugin mechanism for adding application level settings that are persisted
     * between server/client and also modification of the FluxibleContext
     * @param {Object} plugin
     * @param {string} plugin.name Name of the plugin
     * @param {Function} plugin.plugContext Method called after context is created to allow
     *  dynamically plugging the context
     * @param {Object} [plugin.dehydrate] Method called to serialize the plugin settings to be persisted
     *  to the client
     * @param {Object} [plugin.rehydrate] Method called to rehydrate the plugin settings from the server
     */
    plug(plugin: any): void;

    /**
     * Provides access to a plugin instance by name
     * @param {string} pluginName The plugin name
     * @returns {Object}
     */
    getPlugin(pluginName: string): any;

    /**
     * Getter for the top level react component for the application
     * @returns {ReactComponent}
     */
    getComponent(): any;

    /**
     * Registers a store to the dispatcher so it can listen for actions
     * @method registerStore
     */
    registerStore(store: StoreClass| typeof BaseStore): void;

    /**
     * Creates a serializable state of the application and a given context for sending to the client
     * @method dehydrate
     * @param {FluxibleContext} context
     * @returns {Object} Dehydrated state object
     */
    dehydrate(context?: FluxibleContext): any;

    /**
     * Rehydrates the application and creates a new context with the state from the server
     * @param {Object} obj Raw object of dehydrated state
     * @param {Object} obj.plugins Dehydrated app plugin state
     * @param {Object} obj.context Dehydrated context state. See FluxibleContext's
     *                 rehydrate() for subfields in this object.
     * @param {Function} callback
     * @async Rehydration may require more asset loading or async IO calls
     */
    rehydrate(state: any): void;
}

/**
 * A request or browser-session context
 */
export class FluxibleContext {
    /**
     * @constructor
     * @param {Object} options The options sharable by the context and context plugins
     */

    constructor(options?: FluxibleConfiguration);

    /**
     * Provides plugin mechanism for adding application level settings that are persisted
     * between server/client and also modification of the FluxibleContext
     */
    plug(plugin: any): void;

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
    getStore<T extends BaseStore>(store: { new(dispatcher?: DispatcherInterface): T; }): T;
}

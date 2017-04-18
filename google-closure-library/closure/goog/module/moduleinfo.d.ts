declare module goog {
    function require(name: 'goog.module.ModuleInfo'): typeof goog.module.ModuleInfo;
}

declare module goog.module {

    /**
     * A ModuleInfo object is used by the ModuleManager to hold information about a
     * module of js code that may or may not yet be loaded into the environment.
     *
     * @param {Array<string>} deps Ids of the modules that must be loaded before
     *     this one. The ids must be in dependency order (i.e. if the ith module
     *     depends on the jth module, then i > j).
     * @param {string} id The module's ID.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class ModuleInfo extends goog.Disposable {
        constructor(deps: Array<string>, id: string);
        
        /**
         * Gets the dependencies of this module.
         * @return {Array<string>} The ids of the modules that this module depends on.
         */
        getDependencies(): Array<string>;
        
        /**
         * Gets the ID of this module.
         * @return {string} The ID.
         */
        getId(): string;
        
        /**
         * Sets the uris of this module.
         * @param {Array<string>} uris Uris for this module's code.
         */
        setUris(uris: Array<string>): void;
        
        /**
         * Gets the uris of this module.
         * @return {Array<string>?} Uris for this module's code.
         */
        getUris(): Array<string>;
        
        /**
         * Sets the constructor to use to instantiate the module object after the
         * module code is loaded.
         * @param {Function} constructor The constructor of a goog.module.BaseModule
         *     subclass.
         */
        setModuleConstructor(constructor: Function): void;
        
        /**
         * Registers a function that should be called after the module is loaded. These
         * early callbacks are called after {@link Module#initialize} is called but
         * before the other callbacks are called.
         * @param {Function} fn A callback function that takes a single argument which
         *    is the module context.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         * @return {!goog.module.ModuleLoadCallback} Reference to the callback
         *     object.
         */
        registerEarlyCallback(fn: Function, opt_handler?: Object): goog.module.ModuleLoadCallback;
        
        /**
         * Registers a function that should be called after the module is loaded.
         * @param {Function} fn A callback function that takes a single argument which
         *    is the module context.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         * @return {!goog.module.ModuleLoadCallback} Reference to the callback
         *     object.
         */
        registerCallback(fn: Function, opt_handler?: Object): goog.module.ModuleLoadCallback;
        
        /**
         * Registers a function that should be called if the module load fails.
         * @param {Function} fn A callback function that takes a single argument which
         *    is the failure type.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         * @return {!goog.module.ModuleLoadCallback} Reference to the callback
         *     object.
         */
        registerErrback(fn: Function, opt_handler?: Object): goog.module.ModuleLoadCallback;
        
        /**
         * Determines whether the module has been loaded.
         * @return {boolean} Whether the module has been loaded.
         */
        isLoaded(): boolean;
        
        /**
         * Gets the module.
         * @return {goog.module.BaseModule?} The module if it has been loaded.
         *     Otherwise, null.
         */
        getModule(): goog.module.BaseModule;
        
        /**
         * Sets this module as loaded.
         * @param {function() : Object} contextProvider A function that provides the
         *     module context.
         * @return {boolean} Whether any errors occurred while executing the onload
         *     callbacks.
         */
        onLoad(contextProvider: () => Object): boolean;
        
        /**
         * Calls the error callbacks for the module.
         * @param {goog.module.ModuleManager.FailureType} cause What caused the error.
         */
        onError(cause: goog.module.ModuleManager.FailureType): void;
    }
}

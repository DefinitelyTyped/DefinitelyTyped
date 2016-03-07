declare module goog {
    function require(name: 'goog.module.ModuleManager'): typeof goog.module.ModuleManager;
    function require(name: 'goog.module.ModuleManager.CallbackType'): typeof goog.module.ModuleManager.CallbackType;
    function require(name: 'goog.module.ModuleManager.FailureType'): typeof goog.module.ModuleManager.FailureType;
}

declare module goog.module {

    /**
     * The ModuleManager keeps track of all modules in the environment.
     * Since modules may not have their code loaded, we must keep track of them.
     * @constructor
     * @extends {goog.Disposable}
     * @struct
     * @suppress {checkStructDictInheritance}
     */
    class ModuleManager extends goog.Disposable {
        constructor();
        
        /**
         * A non-HTTP status code indicating a corruption in loaded module.
         * This should be used by a ModuleLoader as a replacement for the HTTP code
         * given to the error handler function to indicated that the module was
         * corrupted.
         * This will set the forceReload flag on the loadModules method when retrying
         * module loading.
         * @type {number}
         */
        static CORRUPT_RESPONSE_STATUS_CODE: number;
        
        /**
         * Sets the batch mode as enabled or disabled for the module manager.
         * @param {boolean} enabled Whether the batch mode is to be enabled or not.
         */
        setBatchModeEnabled(enabled: boolean): void;
        
        /**
         * Sets the concurrent loading mode as enabled or disabled for the module
         * manager. Requires a moduleloader implementation that supports concurrent
         * loads. The default {@see goog.module.ModuleLoader} does not.
         * @param {boolean} enabled
         */
        setConcurrentLoadingEnabled(enabled: boolean): void;
        
        /**
         * Sets the module info for all modules. Should only be called once.
         *
         * @param {Object<Array<string>>} infoMap An object that contains a mapping
         *    from module id (String) to list of required module ids (Array).
         */
        setAllModuleInfo(infoMap: {[index: string]: Array<string>}): void;
        
        /**
         * Sets the module info for all modules. Should only be called once. Also
         * marks modules that are currently being loaded.
         *
         * @param {string=} opt_info A string representation of the module dependency
         *      graph, in the form: module1:dep1,dep2/module2:dep1,dep2 etc.
         *     Where depX is the base-36 encoded position of the dep in the module list.
         * @param {Array<string>=} opt_loadingModuleIds A list of moduleIds that
         *     are currently being loaded.
         */
        setAllModuleInfoString(opt_info?: string, opt_loadingModuleIds?: Array<string>): void;
        
        /**
         * Gets a module info object by id.
         * @param {string} id A module identifier.
         * @return {!goog.module.ModuleInfo} The module info.
         */
        getModuleInfo(id: string): goog.module.ModuleInfo;
        
        /**
         * Sets the module uris.
         *
         * @param {Object} moduleUriMap The map of id/uris pairs for each module.
         */
        setModuleUris(moduleUriMap: Object): void;
        
        /**
         * Gets the application-specific module loader.
         * @return {goog.module.AbstractModuleLoader} An object that has a
         *     loadModules(ids, moduleInfoMap, opt_successFn, opt_errFn,
         *         opt_timeoutFn, opt_forceReload) method.
         */
        getLoader(): goog.module.AbstractModuleLoader;
        
        /**
         * Sets the application-specific module loader.
         * @param {goog.module.AbstractModuleLoader} loader An object that has a
         *     loadModules(ids, moduleInfoMap, opt_successFn, opt_errFn,
         *         opt_timeoutFn, opt_forceReload) method.
         */
        setLoader(loader: goog.module.AbstractModuleLoader): void;
        
        /**
         * Gets the module context to use to initialize the module.
         * @return {Object} The context.
         */
        getModuleContext(): Object;
        
        /**
         * Sets the module context to use to initialize the module.
         * @param {Object} context The context.
         */
        setModuleContext(context: Object): void;
        
        /**
         * Determines if the ModuleManager is active
         * @return {boolean} TRUE iff the ModuleManager is active (i.e., not idle).
         */
        isActive(): boolean;
        
        /**
         * Determines if the ModuleManager is user active
         * @return {boolean} TRUE iff the ModuleManager is user active (i.e., not idle).
         */
        isUserActive(): boolean;
        
        /**
         * Preloads a module after a short delay.
         *
         * @param {string} id The id of the module to preload.
         * @param {number=} opt_timeout The number of ms to wait before adding the
         *     module id to the loading queue (defaults to 0 ms). Note that the module
         *     will be loaded asynchronously regardless of the value of this parameter.
         * @return {!goog.async.Deferred} A deferred object.
         */
        preloadModule(id: string, opt_timeout?: number): goog.async.Deferred<any>;
        
        /**
         * Prefetches a JavaScript module and its dependencies, which means that the
         * module will be downloaded, but not evaluated. To complete the module load,
         * the caller should also call load or execOnLoad after prefetching the module.
         *
         * @param {string} id The id of the module to prefetch.
         */
        prefetchModule(id: string): void;
        
        /**
         * Records that a module was loaded. Also initiates loading the next module if
         * any module requests are queued. This method is called by code that is
         * generated and appended to each dynamic module's code at compilation time.
         *
         * @param {string} id A module id.
         */
        setLoaded(id: string): void;
        
        /**
         * Gets whether a module is currently loading or in the queue, waiting to be
         * loaded.
         * @param {string} id A module id.
         * @return {boolean} TRUE iff the module is loading.
         */
        isModuleLoading(id: string): boolean;
        
        /**
         * Requests that a function be called once a particular module is loaded.
         * Client code can use this method to safely call into modules that may not yet
         * be loaded. For consistency, this method always calls the function
         * asynchronously -- even if the module is already loaded. Initiates loading of
         * the module if necessary, unless opt_noLoad is true.
         *
         * @param {string} moduleId A module id.
         * @param {Function} fn Function to execute when the module has loaded.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         * @param {boolean=} opt_noLoad TRUE iff not to initiate loading of the module.
         * @param {boolean=} opt_userInitiated TRUE iff the loading of the module was
         *     user initiated.
         * @param {boolean=} opt_preferSynchronous TRUE iff the function should be
         *     executed synchronously if the module has already been loaded.
         * @return {!goog.module.ModuleLoadCallback} A callback wrapper that exposes
         *     an abort and execute method.
         */
        execOnLoad(moduleId: string, fn: Function, opt_handler?: Object, opt_noLoad?: boolean, opt_userInitiated?: boolean, opt_preferSynchronous?: boolean): goog.module.ModuleLoadCallback;
        
        /**
         * Loads a module, returning a goog.async.Deferred for keeping track of the
         * result.
         *
         * @param {string} moduleId A module id.
         * @param {boolean=} opt_userInitiated If the load is a result of a user action.
         * @return {goog.async.Deferred} A deferred object.
         */
        load(moduleId: string, opt_userInitiated?: boolean): goog.async.Deferred<any>;
        
        /**
         * Loads a list of modules, returning a goog.async.Deferred for keeping track of
         * the result.
         *
         * @param {Array<string>} moduleIds A list of module ids.
         * @param {boolean=} opt_userInitiated If the load is a result of a user action.
         * @return {!Object<string, !goog.async.Deferred>} A mapping from id (String)
         *     to deferred objects that will callback or errback when the load for that
         *     id is finished.
         */
        loadMultiple(moduleIds: Array<string>, opt_userInitiated?: boolean): {[index: string]: goog.async.Deferred<any>};
        
        /**
         * Method called just before a module code is loaded.
         * @param {string} id Identifier of the module.
         */
        beforeLoadModuleCode(id: string): void;
        
        /**
         * Method called just after module code is loaded
         * @param {string} id Identifier of the module.
         */
        afterLoadModuleCode(id: string): void;
        
        /**
         * Register an initialization callback for the currently loading module. This
         * should only be called by script that is executed during the evaluation of
         * a module's javascript. This is almost equivalent to calling the function
         * inline, but ensures that all the code from the currently loading module
         * has been loaded. This makes it cleaner and more robust than calling the
         * function inline.
         *
         * If this function is called from the base module (the one that contains
         * the module manager code), the callback is held until #setAllModuleInfo
         * is called, or until #setModuleContext is called, whichever happens first.
         *
         * @param {Function} fn A callback function that takes a single argument
         *    which is the module context.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         */
        registerInitializationCallback(fn: Function, opt_handler?: Object): void;
        
        /**
         * Register a late initialization callback for the currently loading module.
         * Callbacks registered via this function are executed similar to
         * {@see registerInitializationCallback}, but they are fired after all
         * initialization callbacks are called.
         *
         * @param {Function} fn A callback function that takes a single argument
         *    which is the module context.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         */
        registerLateInitializationCallback(fn: Function, opt_handler?: Object): void;
        
        /**
         * Sets the constructor to use for the module object for the currently
         * loading module. The constructor should derive from {@see
         * goog.module.BaseModule}.
         * @param {Function} fn The constructor function.
         */
        setModuleConstructor(fn: Function): void;
        
        /**
         * The function to call if the module manager is in error.
         * @param {goog.module.ModuleManager.CallbackType|Array<goog.module.ModuleManager.CallbackType>} types
         *  The callback type.
         * @param {Function} fn The function to register as a callback.
         */
        registerCallback(types: goog.module.ModuleManager.CallbackType|Array<goog.module.ModuleManager.CallbackType>, fn: Function): void;
    }
}

declare module goog.module.ModuleManager {

    /**
    * The type of callbacks that can be registered with the module manager,.
    * @enum {string}
    */
    type CallbackType = string;
    var CallbackType: {
        ERROR: CallbackType;
        IDLE: CallbackType;
        ACTIVE: CallbackType;
        USER_IDLE: CallbackType;
        USER_ACTIVE: CallbackType;
    };

    /**
     * The possible reasons for a module load failure callback being fired.
     * @enum {number}
     */
    type FailureType = number;
    var FailureType: {
        UNAUTHORIZED: FailureType;
        CONSECUTIVE_FAILURES: FailureType;
        TIMEOUT: FailureType;
        OLD_CODE_GONE: FailureType;
        INIT_ERROR: FailureType;
    };
}

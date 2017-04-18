declare module goog {
    function require(name: 'goog.module.Loader'): typeof goog.module.Loader;
}

declare module goog.module {

    /**
     * The dynamic loading functionality is defined as a class. The class
     * will be used as singleton. There is, however, a two step
     * initialization procedure because parameters need to be passed to
     * the goog.module.Loader instance.
     *
     * @constructor
     * @final
     */
    class Loader {
        constructor();
        
        /**
         * The globally exported name of the load callback. Matches the
         * definition in the js_modular_binary() BUILD rule.
         * @type {string}
         */
        static LOAD_CALLBACK: string;
        
        /**
         * Wrapper of goog.module.Loader.require() for use in modules.
         * See method goog.module.Loader.require() for
         * explanation of params.
         *
         * @param {string} module The name of the module. Usually, the value
         *     is defined as a constant whose name starts with MOD_.
         * @param {number|string} symbol The ID of the symbol. Usually, the value is
         *     defined as a constant whose name starts with SYM_.
         * @param {Function} callback This function will be called with the
         *     resolved symbol as the argument once the module is loaded.
         */
        static require(module: string, symbol: number|string, callback: Function): void;
        
        /**
         * Wrapper of goog.module.Loader.provide() for use in modules
         * See method goog.module.Loader.provide() for explanation of params.
         *
         * @param {string} module The name of the module. Cf. parameter module
         *     of method require().
         * @param {number|string=} opt_symbol The symbol being defined, or nothing
         *     when all symbols of the module are defined. Cf. parameter symbol of
         *     method require().
         * @param {Object=} opt_object The object bound to the symbol, or nothing when
         *     all symbols of the module are defined.
         */
        static provide(module: string, opt_symbol?: number|string, opt_object?: Object): void;
        
        /**
         * Wrapper of init() so that we only need to export this single
         * identifier instead of three. See method goog.module.Loader.init() for
         * explanation of param.
         *
         * @param {string} urlBase The URL of the base library.
         * @param {Function=} opt_urlFunction Function that creates the URL for the
         *     module file. It will be passed the base URL for module files and the
         *     module name and should return the fully-formed URL to the module file to
         *     load.
         */
        static init(urlBase: string, opt_urlFunction?: Function): void;
        
        /**
         * Produces a function that delegates all its arguments to a
         * dynamically loaded function. This is used to export dynamically
         * loaded functions.
         *
         * @param {string} module The module to load from.
         * @param {number|string} symbol The ID of the symbol to load from the module.
         *     This symbol must resolve to a function.
         * @return {!Function} A function that forwards all its arguments to
         *     the dynamically loaded function specified by module and symbol.
         */
        static loaderCall(module: string, symbol: number|string): Function;
        
        /**
         * Initializes the Loader to be fully functional. Also executes load
         * requests that were received before initialization. Must be called
         * exactly once, with the URL of the base library. Module URLs are
         * derived from the URL of the base library by inserting the module
         * name, preceded by a period, before the .js prefix of the base URL.
         *
         * @param {string} baseUrl The URL of the base library.
         * @param {Function=} opt_urlFunction Function that creates the URL for the
         *     module file. It will be passed the base URL for module files and the
         *     module name and should return the fully-formed URL to the module file to
         *     load.
         */
        init(baseUrl: string, opt_urlFunction?: Function): void;
        
        /**
         * Requests the loading of a symbol from a module. When the module is
         * loaded, the requested symbol will be passed as argument to the
         * function callback.
         *
         * @param {string} module The name of the module. Usually, the value
         *     is defined as a constant whose name starts with MOD_.
         * @param {number|string} symbol The ID of the symbol. Usually, the value is
         *     defined as a constant whose name starts with SYM_.
         * @param {Function} callback This function will be called with the
         *     resolved symbol as the argument once the module is loaded.
         */
        require(module: string, symbol: number|string, callback: Function): void;
        
        /**
         * Registers a symbol in a loaded module. When called without symbol,
         * registers the module to be fully loaded and executes all callbacks
         * from pending require() callbacks for this module.
         *
         * @param {string} module The name of the module. Cf. parameter module
         *     of method require().
         * @param {number|string=} opt_symbol The symbol being defined, or nothing when
         *     all symbols of the module are defined. Cf. parameter symbol of method
         *     require().
         * @param {Object=} opt_object The object bound to the symbol, or nothing when
         *     all symbols of the module are defined.
         */
        provide(module: string, opt_symbol?: number|string, opt_object?: Object): void;
    }
}

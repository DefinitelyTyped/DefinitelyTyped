declare module goog.module {

    /**
     * An interface that loads JavaScript modules.
     * @interface
     */
    interface AbstractModuleLoader {
        
        /**
         * Loads a list of JavaScript modules.
         *
         * @param {Array<string>} ids The module ids in dependency order.
         * @param {Object} moduleInfoMap A mapping from module id to ModuleInfo object.
         * @param {function()?=} opt_successFn The callback if module loading is a
         *     success.
         * @param {function(?number)?=} opt_errorFn The callback if module loading is an
         *     error.
         * @param {function()?=} opt_timeoutFn The callback if module loading times out.
         * @param {boolean=} opt_forceReload Whether to bypass cache while loading the
         *     module.
         */
        loadModules(ids: Array<string>, moduleInfoMap: Object, opt_successFn?: () => any, opt_errorFn?: (arg0: number) => any, opt_timeoutFn?: () => any, opt_forceReload?: boolean): void;
        
        /**
         * Pre-fetches a JavaScript module.
         *
         * @param {string} id The module id.
         * @param {!goog.module.ModuleInfo} moduleInfo The module info.
         */
        prefetchModule(id: string, moduleInfo: goog.module.ModuleInfo): void;
    }
}

declare module goog {
    function require(name: 'goog.module.BaseModule'): typeof goog.module.BaseModule;
}

declare module goog.module {

    /**
     * A basic module object that represents a module of Javascript code that can
     * be dynamically loaded.
     *
     * @constructor
     * @extends {goog.Disposable}
     */
    class BaseModule extends goog.Disposable {
        constructor();
        
        /**
         * Performs any load-time initialization that the module requires.
         * @param {Object} context The module context.
         */
        initialize(context: Object): void;
    }
}

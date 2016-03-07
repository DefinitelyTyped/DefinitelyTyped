declare module goog {
    function require(name: 'goog.debug.FancyWindow'): typeof goog.debug.FancyWindow;
}

declare module goog.debug {

    /**
     * Provides a Fancy extension to the DebugWindow class.  Allows filtering based
     * on loggers and levels.
     *
     * @param {string=} opt_identifier Idenitifier for this logging class.
     * @param {string=} opt_prefix Prefix pre-pended to messages.
     * @constructor
     * @extends {goog.debug.DebugWindow}
     */
    class FancyWindow extends goog.debug.DebugWindow {
        constructor(opt_identifier?: string, opt_prefix?: string);
        
        /**
         * Constant indicating if we are able to use localStorage to persist filters
         * @type {boolean}
         */
        static HAS_LOCAL_STORE: boolean;
        
        /**
         * Constant defining the prefix to use when storing log levels
         * @type {string}
         */
        static LOCAL_STORE_PREFIX: string;
    }
}

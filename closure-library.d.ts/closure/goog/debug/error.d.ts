declare module goog {
    function require(name: 'goog.debug.Error'): typeof goog.debug.Error;
}

declare module goog.debug {

    /**
     * Base class for custom error objects.
     * @param {*=} opt_msg The message associated with the error.
     * @constructor
     */
    class Error {
        constructor(opt_msg?: any);
    }
}

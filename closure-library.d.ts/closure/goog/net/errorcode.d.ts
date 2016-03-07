declare module goog {
    function require(name: 'goog.net.ErrorCode'): typeof goog.net.ErrorCode;
}

declare module goog.net {

    /**
     * Error codes
     * @enum {number}
     */
    type ErrorCode = number;
    var ErrorCode: {
        NO_ERROR: ErrorCode;
        ACCESS_DENIED: ErrorCode;
        FILE_NOT_FOUND: ErrorCode;
        FF_SILENT_ERROR: ErrorCode;
        CUSTOM_ERROR: ErrorCode;
        EXCEPTION: ErrorCode;
        HTTP_ERROR: ErrorCode;
        ABORT: ErrorCode;
        TIMEOUT: ErrorCode;
        OFFLINE: ErrorCode;

        /**
         * Returns a friendly error message for an error code. These messages are for
         * debugging and are not localized.
         * @param {goog.net.ErrorCode} errorCode An error code.
         * @return {string} A message for debugging.
         */
        getDebugMessage: (errorCode: goog.net.ErrorCode) => string;
    };
}

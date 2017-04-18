declare module goog {
    function require(name: 'goog.storage.mechanism.ErrorCode'): typeof goog.storage.mechanism.ErrorCode;
}

declare module goog.storage.mechanism {

    /**
     * Errors thrown by storage mechanisms.
     * @enum {string}
     */
    type ErrorCode = string;
    var ErrorCode: {
        INVALID_VALUE: ErrorCode;
        QUOTA_EXCEEDED: ErrorCode;
        STORAGE_DISABLED: ErrorCode;
    };
}

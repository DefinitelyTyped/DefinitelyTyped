declare module goog {
    function require(name: 'goog.db.Error'): typeof goog.db.Error;
    function require(name: 'goog.db.Error.ErrorCode'): typeof goog.db.Error.ErrorCode;
    function require(name: 'goog.db.Error.ErrorName'): typeof goog.db.Error.ErrorName;
    function require(name: 'goog.db.Error.VersionChangeBlockedError'): typeof goog.db.Error.VersionChangeBlockedError;
}

declare module goog.db {

    /**
     * A database error. Since the stack trace can be unhelpful in an asynchronous
     * context, the error provides a message about where it was produced.
     *
     * @param {number|!DOMError} error The DOMError instance returned by the
     *     browser for Chrome22+, or an error code for previous versions.
     * @param {string} context A description of where the error occured.
     * @param {string=} opt_message Additional message.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class Error extends goog.debug.Error {
        constructor(error: number|DOMError, context: string, opt_message?: string);
        
        /**
         * @return {string} The name of the error.
         */
        getName(): string;
        
        /**
         * Translates an error code into a more useful message.
         *
         * @param {number} code Error code.
         * @return {string} A debug message.
         */
        static getMessage(code: number): string;
        
        /**
         * Translates an error name to an error code. This is purely kept for backwards
         * compatibility with Chrome21.
         *
         * @param {string} name The name of the erorr.
         * @return {number} The error code corresponding to the error.
         */
        static getCode(name: string): number;
        
        /**
         * Converts an error code used by the old spec, to an error name used by the
         * latest spec.
         * @see http://www.w3.org/TR/IndexedDB/#exceptions
         *
         * @param {!goog.db.Error.ErrorCode|number} code The error code to convert.
         * @return {!goog.db.Error.ErrorName} The corresponding name of the error.
         */
        static getName(code: goog.db.Error.ErrorCode|number): goog.db.Error.ErrorName;
        
        /**
         * Constructs an goog.db.Error instance from an IDBRequest. This abstraction is
         * necessary to provide backwards compatibility with Chrome21.
         *
         * @param {!IDBRequest} request The request that failed.
         * @param {string} message The error message to add to err if it's wrapped.
         * @return {!goog.db.Error} The error that caused the failure.
         */
        static fromRequest(request: IDBRequest, message: string): goog.db.Error;
        
        /**
         * Constructs an goog.db.Error instance from an DOMException. This abstraction
         * is necessary to provide backwards compatibility with Chrome21.
         *
         * @param {!IDBDatabaseException} ex The exception that was thrown.
         * @param {string} message The error message to add to err if it's wrapped.
         * @return {!goog.db.Error} The error that caused the failure.
         * @suppress {invalidCasts} The cast from IDBDatabaseException to DOMError
         *     is invalid and will not compile.
         */
        static fromException(ex: IDBDatabaseException, message: string): goog.db.Error;
    }
}

declare module goog.db.Error {

    /**
     * Synthetic error codes for database errors, for use when IndexedDB
     * support is not available. This numbering differs in practice
     * from the browser implementations, but it is not meant to be reliable:
     * this object merely ensures that goog.db.Error is loadable on platforms
     * that do not support IndexedDB.
     *
     * @enum {number}
     * @private
     */
    type DatabaseErrorCode_ = number;
    var DatabaseErrorCode_: {
        UNKNOWN_ERR: DatabaseErrorCode_;
        NON_TRANSIENT_ERR: DatabaseErrorCode_;
        NOT_FOUND_ERR: DatabaseErrorCode_;
        CONSTRAINT_ERR: DatabaseErrorCode_;
        DATA_ERR: DatabaseErrorCode_;
        NOT_ALLOWED_ERR: DatabaseErrorCode_;
        TRANSACTION_INACTIVE_ERR: DatabaseErrorCode_;
        ABORT_ERR: DatabaseErrorCode_;
        READ_ONLY_ERR: DatabaseErrorCode_;
        TRANSIENT_ERR: DatabaseErrorCode_;
        TIMEOUT_ERR: DatabaseErrorCode_;
        QUOTA_ERR: DatabaseErrorCode_;
        INVALID_ACCESS_ERR: DatabaseErrorCode_;
        INVALID_STATE_ERR: DatabaseErrorCode_;
    };

    /**
     * Error codes for database errors.
     * @see http://www.w3.org/TR/IndexedDB/#idl-def-IDBDatabaseException
     *
     * @enum {number}
     */
    type ErrorCode = number;
    var ErrorCode: {
        UNKNOWN_ERR: ErrorCode;
        NON_TRANSIENT_ERR: ErrorCode;
        NOT_FOUND_ERR: ErrorCode;
        CONSTRAINT_ERR: ErrorCode;
        DATA_ERR: ErrorCode;
        NOT_ALLOWED_ERR: ErrorCode;
        TRANSACTION_INACTIVE_ERR: ErrorCode;
        ABORT_ERR: ErrorCode;
        READ_ONLY_ERR: ErrorCode;
        TIMEOUT_ERR: ErrorCode;
        QUOTA_ERR: ErrorCode;
        INVALID_ACCESS_ERR: ErrorCode;
        INVALID_STATE_ERR: ErrorCode;
    };

    /**
     * Names of all possible errors as returned from the browser.
     * @see http://www.w3.org/TR/IndexedDB/#exceptions
     * @enum {string}
     */
    type ErrorName = string;
    var ErrorName: {
        ABORT_ERR: ErrorName;
        CONSTRAINT_ERR: ErrorName;
        DATA_CLONE_ERR: ErrorName;
        DATA_ERR: ErrorName;
        INVALID_ACCESS_ERR: ErrorName;
        INVALID_STATE_ERR: ErrorName;
        NOT_FOUND_ERR: ErrorName;
        QUOTA_EXCEEDED_ERR: ErrorName;
        READ_ONLY_ERR: ErrorName;
        SYNTAX_ERROR: ErrorName;
        TIMEOUT_ERR: ErrorName;
        TRANSACTION_INACTIVE_ERR: ErrorName;
        UNKNOWN_ERR: ErrorName;
        VERSION_ERR: ErrorName;
    };

    /**
     * A specific kind of database error. If a Version Change is unable to proceed
     * due to other open database connections, it will block and this error will be
     * thrown.
     *
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class VersionChangeBlockedError extends goog.debug.Error {
        constructor();
    }
}

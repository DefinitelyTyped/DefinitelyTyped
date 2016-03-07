declare module goog {
    function require(name: 'goog.fs.Error'): typeof goog.fs.Error;
    function require(name: 'goog.fs.Error.ErrorCode'): typeof goog.fs.Error.ErrorCode;
}

declare module goog.fs {

    /**
     * A filesystem error. Since the filesystem API is asynchronous, stack traces
     * are less useful for identifying where errors come from, so this includes a
     * large amount of metadata in the message.
     *
     * @param {!DOMError} error
     * @param {string} action The action being undertaken when the error was raised.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class Error extends goog.debug.Error {
        constructor(error: DOMError, action: string);
    }
}

declare module goog.fs.Error {

    /**
     * Names of errors that may be thrown by the File API, the File System API, or
     * the File Writer API.
     *
     * @see http://dev.w3.org/2006/webapi/FileAPI/#ErrorAndException
     * @see http://www.w3.org/TR/file-system-api/#definitions
     * @see http://dev.w3.org/2009/dap/file-system/file-writer.html#definitions
     * @enum {string}
     */
    type ErrorName = string;
    var ErrorName: {
        ABORT: ErrorName;
        ENCODING: ErrorName;
        INVALID_MODIFICATION: ErrorName;
        INVALID_STATE: ErrorName;
        NOT_FOUND: ErrorName;
        NOT_READABLE: ErrorName;
        NO_MODIFICATION_ALLOWED: ErrorName;
        PATH_EXISTS: ErrorName;
        QUOTA_EXCEEDED: ErrorName;
        SECURITY: ErrorName;
        SYNTAX: ErrorName;
        TYPE_MISMATCH: ErrorName;
    };

    /**
     * Error codes for file errors.
     * @see http://www.w3.org/TR/file-system-api/#idl-def-FileException
     *
     * @enum {number}
     * @deprecated Use the 'name' or 'message' attribute instead.
     */
    type ErrorCode = number;
    var ErrorCode: {
        NOT_FOUND: ErrorCode;
        SECURITY: ErrorCode;
        ABORT: ErrorCode;
        NOT_READABLE: ErrorCode;
        ENCODING: ErrorCode;
        NO_MODIFICATION_ALLOWED: ErrorCode;
        INVALID_STATE: ErrorCode;
        SYNTAX: ErrorCode;
        INVALID_MODIFICATION: ErrorCode;
        QUOTA_EXCEEDED: ErrorCode;
        TYPE_MISMATCH: ErrorCode;
        PATH_EXISTS: ErrorCode;
    };
}

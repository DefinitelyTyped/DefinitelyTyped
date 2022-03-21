// Type definitions for domexception 4.0
// Project: https://github.com/jsdom/domexception#readme
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export = DOMException;

/**
 * An abnormal event (called an exception) which occurs as a result of calling
 * a method or accessing a property of a web API.
 */
declare class DOMException {
    readonly code: number;
    readonly message: string;
    readonly name: string;

    constructor(message?: string, name?: string);

    readonly INDEX_SIZE_ERR: 1;
    readonly DOMSTRING_SIZE_ERR: 2;
    readonly HIERARCHY_REQUEST_ERR: 3;
    readonly WRONG_DOCUMENT_ERR: 4;
    readonly INVALID_CHARACTER_ERR: 5;
    readonly NO_DATA_ALLOWED_ERR: 6;
    readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    readonly NOT_FOUND_ERR: 8;
    readonly NOT_SUPPORTED_ERR: 9;
    readonly INUSE_ATTRIBUTE_ERR: 10;
    readonly INVALID_STATE_ERR: 11;
    readonly SYNTAX_ERR: 12;
    readonly INVALID_MODIFICATION_ERR: 13;
    readonly NAMESPACE_ERR: 14;
    readonly INVALID_ACCESS_ERR: 15;
    readonly VALIDATION_ERR: 16;
    readonly TYPE_MISMATCH_ERR: 17;
    readonly SECURITY_ERR: 18;
    readonly NETWORK_ERR: 19;
    readonly ABORT_ERR: 20;
    readonly URL_MISMATCH_ERR: 21;
    readonly QUOTA_EXCEEDED_ERR: 22;
    readonly TIMEOUT_ERR: 23;
    readonly INVALID_NODE_TYPE_ERR: 24;
    readonly DATA_CLONE_ERR: 25;

    static readonly INDEX_SIZE_ERR: 1;
    static readonly DOMSTRING_SIZE_ERR: 2;
    static readonly HIERARCHY_REQUEST_ERR: 3;
    static readonly WRONG_DOCUMENT_ERR: 4;
    static readonly INVALID_CHARACTER_ERR: 5;
    static readonly NO_DATA_ALLOWED_ERR: 6;
    static readonly NO_MODIFICATION_ALLOWED_ERR: 7;
    static readonly NOT_FOUND_ERR: 8;
    static readonly NOT_SUPPORTED_ERR: 9;
    static readonly INUSE_ATTRIBUTE_ERR: 10;
    static readonly INVALID_STATE_ERR: 11;
    static readonly SYNTAX_ERR: 12;
    static readonly INVALID_MODIFICATION_ERR: 13;
    static readonly NAMESPACE_ERR: 14;
    static readonly INVALID_ACCESS_ERR: 15;
    static readonly VALIDATION_ERR: 16;
    static readonly TYPE_MISMATCH_ERR: 17;
    static readonly SECURITY_ERR: 18;
    static readonly NETWORK_ERR: 19;
    static readonly ABORT_ERR: 20;
    static readonly URL_MISMATCH_ERR: 21;
    static readonly QUOTA_EXCEEDED_ERR: 22;
    static readonly TIMEOUT_ERR: 23;
    static readonly INVALID_NODE_TYPE_ERR: 24;
    static readonly DATA_CLONE_ERR: 25;
}

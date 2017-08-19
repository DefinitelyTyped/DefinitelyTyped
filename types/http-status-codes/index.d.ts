// Type definitions for Node.JS package http-status-codes v1.0.5
// Project: https://github.com/prettymuchbryce/node-http-status
// Definitions by: Josh McCullough <https://github.com/JoshMcCullough>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export declare var ACCEPTED: number;
export declare var BAD_GATEWAY: number;
export declare var BAD_REQUEST: number;
export declare var CONFLICT: number;
export declare var CONTINUE: number;
export declare var CREATED: number;
export declare var EXPECTATION_FAILED: number;
export declare var FAILED_DEPENDENCY: number;
export declare var FORBIDDEN: number;
export declare var GATEWAY_TIMEOUT: number;
export declare var GONE: number;
export declare var HTTP_VERSION_NOT_SUPPORTED: number;
export declare var INSUFFICIENT_SPACE_ON_RESOURCE: number;
export declare var INSUFFICIENT_STORAGE: number;
export declare var INTERNAL_SERVER_ERROR: number;
export declare var LENGTH_REQUIRED: number;
export declare var LOCKED: number;
export declare var METHOD_FAILURE: number;
export declare var METHOD_NOT_ALLOWED: number;
export declare var MOVED_PERMANENTLY: number;
export declare var MOVED_TEMPORARILY: number;
export declare var MULTI_STATUS: number;
export declare var MULTIPLE_CHOICES: number;
export declare var NETWORK_AUTHENTICATION_REQUIRED: number;
export declare var NO_CONTENT: number;
export declare var NON_AUTHORITATIVE_INFORMATION: number;
export declare var NOT_ACCEPTABLE: number;
export declare var NOT_FOUND: number;
export declare var NOT_IMPLEMENTED: number;
export declare var NOT_MODIFIED: number;
export declare var OK: number;
export declare var PARTIAL_CONTENT: number;
export declare var PAYMENT_REQUIRED: number;
export declare var PRECONDITION_FAILED: number;
export declare var PRECONDITION_REQUIRED: number;
export declare var PROCESSING: number;
export declare var PROXY_AUTHENTICATION_REQUIRED: number;
export declare var REQUEST_HEADER_FIELDS_TOO_LARGE: number;
export declare var REQUEST_TIMEOUT: number;
export declare var REQUEST_TOO_LONG: number;
export declare var REQUEST_URI_TOO_LONG: number;
export declare var REQUESTED_RANGE_NOT_SATISFIABLE: number;
export declare var RESET_CONTENT: number;
export declare var SEE_OTHER: number;
export declare var SERVICE_UNAVAILABLE: number;
export declare var SWITCHING_PROTOCOLS: number;
export declare var TEMPORARY_REDIRECT: number;
export declare var TOO_MANY_REQUESTS: number;
export declare var UNAUTHORIZED: number;
export declare var UNPROCESSABLE_ENTITY: number;
export declare var UNSUPPORTED_MEDIA_TYPE: number;
export declare var USE_PROXY: number;

export declare function getStatusText(statusCode: number): string;

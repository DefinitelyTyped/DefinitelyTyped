// Type definitions for Node.JS package http-status-codes v1.0.5
// Project: https://github.com/prettymuchbryce/node-http-status
// Definitions by: Josh McCullough <https://github.com/JoshMcCullough>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "http-status-codes" {
    export var ACCEPTED: number;
    export var BAD_GATEWAY: number;
    export var BAD_REQUEST: number;
    export var CONFLICT: number;
    export var CONTINUE: number;
    export var CREATED: number;
    export var EXPECTATION_FAILED: number;
    export var FAILED_DEPENDENCY: number;
    export var FORBIDDEN: number;
    export var GATEWAY_TIMEOUT: number;
    export var GONE: number;
    export var HTTP_VERSION_NOT_SUPPORTED: number;
    export var INSUFFICIENT_SPACE_ON_RESOURCE: number;
    export var INSUFFICIENT_STORAGE: number;
    export var INTERNAL_SERVER_ERROR: number;
    export var LENGTH_REQUIRED: number;
    export var LOCKED: number;
    export var METHOD_FAILURE: number;
    export var METHOD_NOT_ALLOWED: number;
    export var MOVED_PERMANENTLY: number;
    export var MOVED_TEMPORARILY: number;
    export var MULTI_STATUS: number;
    export var MULTIPLE_CHOICES: number;
    export var NETWORK_AUTHENTICATION_REQUIRED: number;
    export var NO_CONTENT: number;
    export var NON_AUTHORITATIVE_INFORMATION: number;
    export var NOT_ACCEPTABLE: number;
    export var NOT_FOUND: number;
    export var NOT_IMPLEMENTED: number;
    export var NOT_MODIFIED: number;
    export var OK: number;
    export var PARTIAL_CONTENT: number;
    export var PAYMENT_REQUIRED: number;
    export var PRECONDITION_FAILED: number;
    export var PRECONDITION_REQUIRED: number;
    export var PROCESSING: number;
    export var PROXY_AUTHENTICATION_REQUIRED: number;
    export var REQUEST_HEADER_FIELDS_TOO_LARGE: number;
    export var REQUEST_TIMEOUT: number;
    export var REQUEST_TOO_LONG: number;
    export var REQUEST_URI_TOO_LONG: number;
    export var REQUESTED_RANGE_NOT_SATISFIABLE: number;
    export var RESET_CONTENT: number;
    export var SEE_OTHER: number;
    export var SERVICE_UNAVAILABLE: number;
    export var SWITCHING_PROTOCOLS: number;
    export var TEMPORARY_REDIRECT: number;
    export var TOO_MANY_REQUESTS: number;
    export var UNAUTHORIZED: number;
    export var UNPROCESSABLE_ENTITY: number;
    export var UNSUPPORTED_MEDIA_TYPE: number;
    export var USE_PROXY: number;
    
    export function getStatusText(statusCode: number): string;
}
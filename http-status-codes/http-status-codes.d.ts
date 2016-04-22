// Type definitions for Node.JS package http-status-codes v1.0.5
// Project: https://github.com/prettymuchbryce/node-http-status
// Definitions by: Josh McCullough <https://github.com/JoshMcCullough>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare export var ACCEPTED: number;
declare export var BAD_GATEWAY: number;
declare export var BAD_REQUEST: number;
declare export var CONFLICT: number;
declare export var CONTINUE: number;
declare export var CREATED: number;
declare export var EXPECTATION_FAILED: number;
declare export var FAILED_DEPENDENCY: number;
declare export var FORBIDDEN: number;
declare export var GATEWAY_TIMEOUT: number;
declare export var GONE: number;
declare export var HTTP_VERSION_NOT_SUPPORTED: number;
declare export var INSUFFICIENT_SPACE_ON_RESOURCE: number;
declare export var INSUFFICIENT_STORAGE: number;
declare export var INTERNAL_SERVER_ERROR: number;
declare export var LENGTH_REQUIRED: number;
declare export var LOCKED: number;
declare export var METHOD_FAILURE: number;
declare export var METHOD_NOT_ALLOWED: number;
declare export var MOVED_PERMANENTLY: number;
declare export var MOVED_TEMPORARILY: number;
declare export var MULTI_STATUS: number;
declare export var MULTIPLE_CHOICES: number;
declare export var NETWORK_AUTHENTICATION_REQUIRED: number;
declare export var NO_CONTENT: number;
declare export var NON_AUTHORITATIVE_INFORMATION: number;
declare export var NOT_ACCEPTABLE: number;
declare export var NOT_FOUND: number;
declare export var NOT_IMPLEMENTED: number;
declare export var NOT_MODIFIED: number;
declare export var OK: number;
declare export var PARTIAL_CONTENT: number;
declare export var PAYMENT_REQUIRED: number;
declare export var PRECONDITION_FAILED: number;
declare export var PRECONDITION_REQUIRED: number;
declare export var PROCESSING: number;
declare export var PROXY_AUTHENTICATION_REQUIRED: number;
declare export var REQUEST_HEADER_FIELDS_TOO_LARGE: number;
declare export var REQUEST_TIMEOUT: number;
declare export var REQUEST_TOO_LONG: number;
declare export var REQUEST_URI_TOO_LONG: number;
declare export var REQUESTED_RANGE_NOT_SATISFIABLE: number;
declare export var RESET_CONTENT: number;
declare export var SEE_OTHER: number;
declare export var SERVICE_UNAVAILABLE: number;
declare export var SWITCHING_PROTOCOLS: number;
declare export var TEMPORARY_REDIRECT: number;
declare export var TOO_MANY_REQUESTS: number;
declare export var UNAUTHORIZED: number;
declare export var UNPROCESSABLE_ENTITY: number;
declare export var UNSUPPORTED_MEDIA_TYPE: number;
declare export var USE_PROXY: number;

declare export function getStatusText(statusCode: number): string;

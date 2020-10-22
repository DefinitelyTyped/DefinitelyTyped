// Type definitions for sc-errors 1.4
// Project: https://github.com/SocketCluster/sc-errors
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export class AuthTokenExpiredError extends Error {
    expiry: Date;

    constructor(message: string, expiry: Date);
}

export class AuthTokenInvalidError extends Error {
    constructor(message: string);
}

export class AuthTokenNotBeforeError extends Error {
    date: Date;

    constructor(message: string, date: Date);
}

export class AuthTokenError extends Error {
    constructor(message: string);
}

export class SilentMiddlewareBlockedError extends Error {
    type: string;

    constructor(message: string, type: string);
}

export class InvalidActionError extends Error {
    constructor(message: string);
}

export class InvalidArgumentsError extends Error {
    constructor(message: string);
}

export class InvalidOptionsError extends Error {
    constructor(message: string);
}

export class InvalidMessageError extends Error {
    constructor(message: string);
}

export class SocketProtocolError extends Error {
    code: number;

    constructor(message: string, code: number);
}

export class ServerProtocolError extends Error {
    constructor(message: string);
}

export class HTTPServerError extends Error {
    constructor(message: string);
}

export class ResourceLimitError extends Error {
    constructor(message: string);
}

export class TimeoutError extends Error {
    constructor(message: string);
}

export class BadConnectionError extends Error {
    type: string;

    constructor(message: string, type: string);
}

export class BrokerError extends Error {
    constructor(message: string);
}

export class ProcessExitError extends Error {
    code?: number;

    constructor(message: string, code?: number);
}

export class UnknownError extends Error {
    constructor(message: string);
}

export interface SocketProtocolErrorStatuses {
    1001: string;
    1002: string;
    1003: string;
    1005: string;
    1006: string;
    1007: string;
    1008: string;
    1009: string;
    1010: string;
    1011: string;
    4000: string;
    4001: string;
    4002: string;
    4003: string;
    4004: string;
    4005: string;
    4006: string;
    4007: string;
    4008: string;
}
export const socketProtocolErrorStatuses: SocketProtocolErrorStatuses;

export interface SocketProtocolIgnoreStatuses {
    1000: string;
    1001: string;
}
export const socketProtocolIgnoreStatuses: SocketProtocolIgnoreStatuses;

/**
 * Convert an error into a JSON-compatible type which can later be hydrated
 * back to its *original* form.
 */
export function dehydrateError(error: any, includeStackTrace?: boolean): DehydratedError;

/**
 * Convert a dehydrated error back to its *original* form.
 */
export function hydrateError(error: DehydratedError): any;

export type DehydratedError = any;

/**
 * Make a deep copy of an object or array, assuring that there is at most
 * one instance of each object or array in the resulting structure. The
 * duplicate references (which might be forming cycles) are replaced with
 * an object of the form
 *      {$ref: PATH}
 * where the PATH is a JSONPath string that locates the first occurance.
 */
export function decycle(object: any): any;

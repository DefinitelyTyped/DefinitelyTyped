// Type definitions for express-brute 1.0.1
// Project: https://github.com/AdamPflug/express-brute
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="express" />

import express = require('express');

/**
 * @summary Middleware.
 * @class
 */
declare class ExpressBrute {
    /**
     * @summary Constructor.
     * @constructor
     * @param {any} store The store.
     */
    constructor(store: any, options?: ExpressBrute.Options);

    /**
     * @summary Generates middleware that will bounce requests with the same key and IP address that happen faster than the current wait time by calling failCallback.
     * @param {Object} options The options.
     */
    getMiddleware(options: ExpressBrute.Middleware): express.RequestHandler;

    /**
     * @summary Middleware that will bounce requests that happen faster than the current wait time by calling failCallback.
     * @param {Request}     request     The HTTP request.
     * @param {Response}    response    The HTTP response.
     * @param {Function}    next        The next middleware.
     * @return {RequestHandler} The Request handler.
     */
    prevent(request: express.Request, response: express.Response, next: express.NextFunction): express.RequestHandler;

    /**
     * @summary Resets the wait time between requests back to its initial value.
     * @param {string}      ip      The IP address.
     * @param {string}      key     The key. response.
     * @param {Function}    next    The next middleware.
     * @return {RequestHandler} The Request handler.
     */
    reset(ip: string, key: string, next: express.NextFunction): express.RequestHandler;
}

declare namespace ExpressBrute {
    /**
     * @summary Options for {@link MemoryStore} class.
     * @interface
     */
    export interface MemoryStoreOptions {
        /**
         * @summary Key prefix.
         * @type {string}
         */
        prefix: string;
    }

    type FailCallback = (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
        nextValidRequestDate: Date,
    ) => void;

    /**
     * @summary Options for {@link ExpressBrute#getMiddleware} class.
     * @interface
     */
    export interface Middleware {
        /**
         * @summary Allows you to override the value of failCallback for this middleware.
         * @type {FailCallback}
         */
        failCallback?: FailCallback;

        /**
         * @summary Disregard IP address when matching requests if set to true. Defaults to false.
         * @type {boolean}
         */
        ignoreIP?: boolean;

        /**
         * @summary Key.
         * @type {Function}
         */
        key?: (req: express.Request, res: express.Response, next: express.NextFunction) => any;
    }

    /**
     * @summary Options for {@link ExpressBrute} class.
     * @interface
     */
    export interface Options {
        /**
         * @summary The number of retires the user has before they need to start waiting (default: 2)
         */
        freeRetries?: number;
        /**
         * @summary Specify whether or not a simplified reset method should be attached at req.brute.reset. The simplified method takes only a callback, and resets all ExpressBrute middleware that was called on the current request. If multiple instances of ExpressBrute have middleware on the same request, only those with attachResetToRequest set to true will be reset (default: true)
         */
        attachResetToRequest?: boolean;
        /**
         * @summary Defines whether the lifetime counts from the time of the last request that ExpressBrute didn't prevent for a given IP (true) or from of that IP's first request (false). Useful for allowing limits over fixed periods of time, for example: a limited number of requests per day. (Default: true).
         */
        refreshTimeoutOnRequest?: boolean;
        /**
         * @summary The initial wait time (in milliseconds) after the user runs out of retries (default: 500 milliseconds)
         */
        minWait?: number;
        /**
         * @summary The maximum amount of time (in milliseconds) between requests the user needs to wait (default: 15 minutes). The wait for a given request is determined by adding the time the user needed to wait for the previous two requests.
         */
        maxWait?: number;
        /**
         * @summary The length of time (in seconds since the last request) to remember the number of requests that have been made by an IP. By default it will be set to maxWait * the number of attempts before you hit maxWait to discourage simply waiting for the lifetime to expire before resuming an attack. With default values this is about 6 hours.
         */
        lifetime?: number;
        /**
         * @summary Gets called with (req, res, next, nextValidRequestDate) when a request is rejected (default: `ExpressBrute.FailForbidden`)
         */
        failCallback?: FailCallback;
        /**
         * @summary Gets called whenever an error occurs with the persistent store from which ExpressBrute cannot recover. It is passed an object containing the properties message (a description of the message), parent (the error raised by the session store), and [key, ip] or [req, res, next] depending on whether or the error occurs during reset or in the middleware itself.
         */
        handleStoreError?: Function;
    }

    /**
     * @summary In-memory store.
     * @class
     */
    export class MemoryStore {
        /**
         * @summary Constructor.
         * @constructor
         * @param {Object} options The options.
         */
        constructor(options?: MemoryStoreOptions);
        /**
         * @summary Gets key value.
         * @param {string}      key     The key name.
         * @param {Function}    callbck The callback.
         */
        get(key: string, callback: (error: any, data: Object) => void): void;

        /**
         * @summary Sets the key value.
         * @param {string}      key      The name.
         * @param {string}      value    The value.
         * @param {number}      lifetime The lifetime.
         * @param {Function}    callback The callback.
         */
        set(key: string, value: any, lifetime: number, callback: (error: any) => void): void;

        /**
         * @summary Deletes the key.
         * @param {string}      key      The name.
         * @param {Function}    callback The callback.
         */
        reset(key: string, callback: (error: any) => void): void;
    }

    /**
     * Terminates the request and responses with a 429 (Too Many Requests) error that has a `Retry-After` header and a JSON error message.
     */
    export const FailTooManyRequests: FailCallback;

    /**
     * Terminates the request and responds with a 403 (Forbidden) error that has a `Retry-After` header and a JSON error message. This is provided for compatibility with ExpressBrute versions prior to v0.5.0, for new users `FailTooManyRequests` is the preferred behavior.
     */
    export const FailForbidden: FailCallback;

    /**
     * Sets res.nextValidRequestDate, the `Retry-After` header and sets `res.status=429`, then calls `next()` to pass the request on to the appropriate routes.
     */
    export const FailMark: FailCallback;
}

declare module 'express-serve-static-core' {
    export interface Request {
        brute?: {
            reset?: (callback?: () => void) => void;
        };
    }
}

export = ExpressBrute;

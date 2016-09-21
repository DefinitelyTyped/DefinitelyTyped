// Type definitions for express-brute
// Project: https://github.com/AdamPflug/express-brute
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "express-brute" {
    import express = require("express");

    /**
     * @summary Options for {@link MemoryStore} class.
     * @interface
     */
    interface MemoryStoreOptions {
        /**
         * @summary Key prefix.
         * @type {string}
         */
        prefix: string;
    }

    /**
     * @summary Options for {@link ExpressBrute#getMiddleware} class.
     * @interface
     */
    interface ExpressBruteMiddleware {
        /**
         * @summary Allows you to override the value of failCallback for this middleware.
         * @type {Function}
         */
        failCallback: Function;

        /**
         * @summary Disregard IP address when matching requests if set to true. Defaults to false.
         * @type {boolean}
         */
        ignoreIP: boolean;

        /**
         * @summary Key.
         * @type {any}
         */
        key: any;
    }

    /**
     * @summary Options for {@link ExpressBrute} class.
     * @interface
     */
    interface ExpressBruteOptions {
        freeRetries?: number;
        proxyDepth?: number;
        attachResetToRequest?: boolean;
        refreshTimeoutOnRequest?: boolean;
        minWait?: number;
        maxWait?: number;
        lifetime?: number;
        failCallback?: (req: express.Request, res: express.Response, next: Function, nextValidRequestDate: any) => void;
        handleStoreError?: any;
}

/**
 * @summary Middleware.
 * @class
 */
class ExpressBrute {
    /**
     * @summary Constructor.
     * @constructor
     * @param {any} store The store.
     */
    constructor(store: any, options?: ExpressBruteOptions);

    /**
     * @summary Generates middleware that will bounce requests with the same key and IP address that happen faster than the current wait time by calling failCallback.
     * @param {Object} options The options.
     */
    getMiddleware(options: ExpressBruteMiddleware): express.RequestHandler;

    /**
     * @summary Uses the current proxy trust settings to get the current IP from a request object.
     * @param {Request} request The HTTP request.
     * @return {RequestHandler} The Request handler.
     */
    getIPFromRequest(request: express.Request): express.RequestHandler;

    /**
     * @summary Middleware that will bounce requests that happen faster than the current wait time by calling failCallback.
     * @param {Request}     request     The HTTP request.
     * @param {Response}    response    The HTTP response.
     * @param {Function}    next        The next middleware.
     * @return {RequestHandler} The Request handler.
     */
    prevent(request: express.Request, response: express.Response, next: Function): express.RequestHandler;

    /**
     * @summary Resets the wait time between requests back to its initial value.
     * @param {string}      ip      The IP address.
     * @param {string}      key     The key. response.
     * @param {Function}    next    The next middleware.
     * @return {RequestHandler} The Request handler.
     */
    reset(ip: string, key: string, next: Function): express.RequestHandler;
}

namespace ExpressBrute {
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
}

export = ExpressBrute;
}

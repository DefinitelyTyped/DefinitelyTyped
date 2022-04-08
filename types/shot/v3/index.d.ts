// Type definitions for shot 3.4
// Project: https://github.com/hapijs/shot
// Definitions by: AJP <https://github.com/AJamesPhillips>
//                 Simon Schick <https://github.com/SimonSchick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import { ServerResponse } from "http";
import { Readable, Stream } from "stream";

/**
 * Injects a fake request into an HTTP server.
 * @param dispatchFunc  listener function. The same as you would pass to Http.createServer when making a node HTTP server. @see IListener
 * @param options  request options object @see RequestOptions
 * @param callback  the callback function @see Callback
 * @see {@link https://github.com/hapijs/shot/blob/master/API.md#shotinjectdispatchfunc-options-callback}
 */
export function inject(dispatchFunc: Listener, options: RequestOptions, callback: (res: ResponseObject) => void): void;

/**
 * Checks if given object obj is a Shot Request object.
 * @see {@link https://github.com/hapijs/shot/blob/master/API.md#shotisinjectionobj}
 */
export function isInjection(obj: any): boolean;

/**
 * listener function. The same as you would pass to Http.createServer when making a node HTTP server. Has the signature function (req, res) where:
 *    * req - a simulated request object. Inherits from Stream.Readable.
 *    * res - a simulated response object. Inherits from node's Http.ServerResponse.
 * @see {@link https://github.com/hapijs/shot/blob/master/API.md#shotinjectdispatchfunc-options-callback}
 */
export type Listener = (req: SimulatedRequestObject, res: SimulatedResponseObject) => void;

// disabled for backwards compat
// tslint:disable:no-empty-interface

/**
 * a simulated request object. Inherits from Stream.Readable.
 * @see {@link https://github.com/hapijs/shot/blob/master/API.md#shotinjectdispatchfunc-options-callback}
 */
export interface SimulatedRequestObject extends Readable {}

/**
 * a simulated response object. Inherits from node's Http.ServerResponse.
 * @see {@link https://github.com/hapijs/shot/blob/master/API.md#shotinjectdispatchfunc-options-callback}
 */
export interface SimulatedResponseObject extends ServerResponse {}

// tslint:enable:no-empty-interface

/**
 * @see {@link https://github.com/hapijs/shot/blob/master/API.md#shotinjectdispatchfunc-options-callback}
 */
export interface RequestOptions {
    /** a string specifying the request URL. */
    url: string;
    /** a string specifying the HTTP request method, defaulting to 'GET'. */
    method?: string;
    /** a string specifying the HTTP HOST header value to be used if no header is provided, and the url does not include an authority component. Defaults to 'localhost'. */
    authority?: string;
    /** an optional object containing request headers. */
    headers?: Headers;
    /** an optional string specifying the client remote address. Defaults to '127.0.0.1'. */
    remoteAddress?: string;
    /** an optional request payload. Can be a string, Buffer, Stream or object. */
    payload?: string | Buffer | Stream | object;
    /** an object containing flags to simulate various conditions: */
    simulate?: {
        /** indicates whether the request will fire an end event. Defaults to undefined, meaning an end event will fire. */
        end?: boolean;
        /** indicates whether the request payload will be split into chunks. Defaults to `undefined`, meaning payload will not be chunked. */
        split?: boolean;
        /** whether the request will emit an error event. Defaults to undefined, meaning no error event will be emitted. If set to true, the emitted error will have a message of 'Simulated'. */
        error?: boolean;
        /** whether the request will emit a close event. Defaults to undefined, meaning no close event will be emitted. */
        close?: boolean;
    };
    /** Optional flag to validate this options object. Defaults to true. */
    validate?: boolean;
}

export interface Headers {
    [header: string]: string | string[];
}

/**
 * @see {@link https://github.com/hapijs/shot/blob/master/API.md#shotinjectdispatchfunc-options-callback}
 */
export interface ResponseObject {
    /** an object containing the raw request and response objects where: */
    raw: {
        /** the simulated request object. */
        req: SimulatedRequestObject;
        /** the simulated response object. */
        res: SimulatedResponseObject;
    };
    /** an object containing the response headers. */
    headers: Headers;
    /** the HTTP status code. */
    statusCode: number;
    /** the HTTP status message. */
    statusMessage: string;
    /** the payload as a UTF-8 encoded string. */
    payload: string;
    /** the raw payload as a Buffer. */
    rawPayload: Buffer;
    /** an object containing the response trailers. */
    trailers: {[index: string]: any};
}

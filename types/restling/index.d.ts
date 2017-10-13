// Type definitions for restling 0.9
// Project: https://github.com/lucasfeliciano/restling
// Definitions by: Alessandro vergani <https://github.com/loghorn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Promise from "bluebird";
import * as Restler from "restler";
import { ServerResponse } from "http";

/**
 * Create a DELETE request.
 * @param {string}          url     A url address.
 * @param {RestlingOptions}  options Options.
 * @return {Promise<RestlingResult>}  Result.
 */
export function del(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Create a GET request.
 * @param {string}          url     A url address.
 * @param {RestlingOptions}  options Options.
 * @return {Promise<RestlingResult>}  Result.
 */
export function get(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Create a HEAD request.
 * @param {string}          url     A url address.
 * @param {RestlingOptions}  options Options.
 * @return {Promise<RestlingResult>}  Result.
 */
export function head(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Send json data via GET method.
 * @param {string}          url     A url address.
 * @param {any}             data    JSON body
 * @param {RestlingOptions}  options Options.
 * @return {Promise<RestlingResult>}  Result.
 */
export function json(url: string, data?: any, options?: RestlingOptions, method?: string): Promise<RestlingResult>;

/**
 * Create a PATCH request.
 * @param {string}          url     A url address.
 * @param {RestlingOptions}  options Options.
 * @return {Promise<RestlingResult>}  Result.
 */
export function patch(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Send json  data  via PATCH method.
 * @param {string}          url     A url address.
 * @param {any}             data    JSON body
 * @param {RestlingOptions}  options Options.
 * @return {Promise<RestlingResult>}  Result.
 */
export function patchJson(url: string, data?: any, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Create a POST request.
 * @param {string}          url     A url address.
 * @param {RestlingOptions}  options Options.
 * @return {Promise<RestlingResult>}  Result.
 */
export function post(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Send json data via POST method.
 * @param {string}          url     A url address.
 * @param {any}             data    JSON body
 * @param {RestlingOptions}  options Options.
 * @return {Promise<RestlingResult>}  Result.
 */
export function postJson(url: string, data?: any, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Create a PUT request.
 * @param {string}          url     A url address.
 * @param {RestlingOptions}  options Options.
 * @return {Promise<RestlingResult>}  Result.
 */
export function put(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Send json data via PUT method.
 * @param {string}          url     A url address.
 * @param {any}             data    JSON body
 * @param {RestlingOptions}  options Options.
 * @return {Promise<RestlingResult>}  Result.
 */
export function putJson(url: string, data?: any, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Create a request.
 * @param {string}          url     A url address.
 * @param {RestlingOptions}  options Options.
 * @return {Promise<RestlingResult>}  Result.
 */
export function request(url: string, options?: RestlingOptions): Promise<RestlingResult>;

export function settleAsync(requests: [{ url: string, options?: RestlingOptions }]): Promise<[RestlingResult]>;
export function settleAsync(requests: { [key: string]: { url: string, options?: RestlingOptions } }): Promise<{ [key: string]: RestlingResult }>;

export function allAsync(requests: [{ url: string, options?: RestlingOptions }]): Promise<[RestlingResult]>;
export function allAsync(requests: { [key: string]: { url: string, options?: RestlingOptions } }): Promise<{ [key: string]: RestlingResult }>;

/**
 * Interface for the result.
 * @interface
 */
export interface RestlingResult {
    data?: any;
    response?: ServerResponse;
}

/**
 * Interface for the header.
 * @interface
 */
export interface RestlerOptionsHeader {
    [headerName: string]: string;
}

/**
 * Interface for restler options.
 * @interface
 */
export interface RestlingOptions {
    /**
     * OAuth Bearer Token.
     * @type {string}
     */
    accessToken?: string;

    /**
     *  HTTP Agent instance to use. If not defined globalAgent will be used. If false opts out of connection pooling with an Agent, defaults request to Connection: close.
     * @type {any}
     */
    agent?: any;

    /**
     * A http.Client instance if you want to reuse or implement some kind of connection pooling.
     * @type {any}
     */
    client?: any;

    /**
     * Data to be added to the body of the request.
     * @type {any}
     */
    data?: any;

    /**
     * Encoding of the response body
     * @type {string}
     */
    decoding?: string;

    /**
     * Encoding of the request body.
     * @type {string}
     */
    encoding?: string;

    /**
     * If set will recursively follow redirects.
     * @type {boolean}
     */
    followRedirects?: boolean;

    /**
     * A hash of HTTP headers to be sent.
     * @type {RestlerOptionsHeader}
     */
    headers?: RestlerOptionsHeader;

    /**
     * Request method
     * @type {string}
     */
    method?: string;

    /**
     * If set the data passed will be formatted as <code>multipart/form-encoded</code>.
     * @type {boolean}
     */
    multipart?: boolean;

    /**
     * A function that will be called on the returned data. Use any of predefined <code>restler.parsers</code>.
     * @type {any}
     */
    parser?: any;

    /**
     * Basic auth password.
     * @type {string}
     */
    password?: string;

    /**
     * Query string variables as a javascript object, will override the querystring in the URL.
     * @type {any}
     */
    query?: any;

    /**
     * If true, the server certificate is verified against the list of supplied CAs.
     * An 'error' event is emitted if verification fails. Verification happens at the connection level, before the HTTP request is sent.
     * @type {boolean}
     */
    rejectUnauthorized?: boolean;

    /**
     * Emit the timeout event when the response does not return within the said value (in ms).
     * @type {number}
     */
    timeout?: number;

    /**
     * Basic auth username.
     * @type {string}
     */
    username?: string;

    /**
     * Options for xml2js.
     * @type {any}
     */
    xml2js?: any;
}

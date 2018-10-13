// Type definitions for restling 0.9
// Project: https://github.com/lucasfeliciano/restling
// Definitions by: Alessandro vergani <https://github.com/loghorn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as Promise from "bluebird";
import * as Restler from "restler";
import { ServerResponse } from "http";

/**
 * Create a DELETE request.
 * @param          url     A url address.
 * @param  options Options.
 * @return  Result.
 */
export function del(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Create a GET request.
 * @param          url     A url address.
 * @param  options Options.
 * @return  Result.
 */
export function get(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Create a HEAD request.
 * @param          url     A url address.
 * @param  options Options.
 * @return  Result.
 */
export function head(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Send json data via GET method.
 * @param          url     A url address.
 * @param             data    JSON body
 * @param  options Options.
 * @return  Result.
 */
export function json(url: string, data?: any, options?: RestlingOptions, method?: string): Promise<RestlingResult>;

/**
 * Create a PATCH request.
 * @param          url     A url address.
 * @param  options Options.
 * @return  Result.
 */
export function patch(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Send json  data  via PATCH method.
 * @param          url     A url address.
 * @param             data    JSON body
 * @param  options Options.
 * @return  Result.
 */
export function patchJson(url: string, data?: any, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Create a POST request.
 * @param          url     A url address.
 * @param  options Options.
 * @return  Result.
 */
export function post(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Send json data via POST method.
 * @param          url     A url address.
 * @param             data    JSON body
 * @param  options Options.
 * @return  Result.
 */
export function postJson(url: string, data?: any, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Create a PUT request.
 * @param          url     A url address.
 * @param  options Options.
 * @return  Result.
 */
export function put(url: string, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Send json data via PUT method.
 * @param          url     A url address.
 * @param             data    JSON body
 * @param  options Options.
 * @return  Result.
 */
export function putJson(url: string, data?: any, options?: RestlingOptions): Promise<RestlingResult>;

/**
 * Create a request.
 * @param          url     A url address.
 * @param  options Options.
 * @return  Result.
 */
export function request(url: string, options?: RestlingOptions): Promise<RestlingResult>;

export function settleAsync(requests: Array<{ url: string, options?: RestlingOptions }>): Promise<[RestlingResult]>;
export function settleAsync(requests: { [key: string]: { url: string, options?: RestlingOptions } }): Promise<{ [key: string]: RestlingResult }>;

export function allAsync(requests: Array<{ url: string, options?: RestlingOptions }>): Promise<[RestlingResult]>;
export function allAsync(requests: { [key: string]: { url: string, options?: RestlingOptions } }): Promise<{ [key: string]: RestlingResult }>;

/**
 * Interface for the result.
 */
export interface RestlingResult {
    data?: any;
    response?: ServerResponse;
}

/**
 * Interface for the header.
 */
export interface RestlerOptionsHeader {
    [headerName: string]: string;
}

/**
 * Interface for restler options.
 */
export interface RestlingOptions {
    /**
     * OAuth Bearer Token.
     */
    accessToken?: string;

    /**
     *  HTTP Agent instance to use. If not defined globalAgent will be used. If false opts out of connection pooling with an Agent, defaults request to Connection: close.
     */
    agent?: any;

    /**
     * A http.Client instance if you want to reuse or implement some kind of connection pooling.
     */
    client?: any;

    /**
     * Data to be added to the body of the request.
     */
    data?: any;

    /**
     * Encoding of the response body
     */
    decoding?: string;

    /**
     * Encoding of the request body.
     */
    encoding?: string;

    /**
     * If set will recursively follow redirects.
     */
    followRedirects?: boolean;

    /**
     * A hash of HTTP headers to be sent.
     */
    headers?: RestlerOptionsHeader;

    /**
     * Request method
     */
    method?: string;

    /**
     * If set the data passed will be formatted as <code>multipart/form-encoded</code>.
     */
    multipart?: boolean;

    /**
     * A function that will be called on the returned data. Use any of predefined <code>restler.parsers</code>.
     */
    parser?: any;

    /**
     * Basic auth password.
     */
    password?: string;

    /**
     * Query string variables as a javascript object, will override the querystring in the URL.
     */
    query?: any;

    /**
     * If true, the server certificate is verified against the list of supplied CAs.
     * An 'error' event is emitted if verification fails. Verification happens at the connection level, before the HTTP request is sent.
     */
    rejectUnauthorized?: boolean;

    /**
     * Emit the timeout event when the response does not return within the said value (in ms).
     */
    timeout?: number;

    /**
     * Basic auth username.
     */
    username?: string;

    /**
     * Options for xml2js.
     */
    xml2js?: any;
}

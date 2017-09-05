// Type definitions for restler 3.1.0
// Project: https://github.com/danwrong/restler
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare module "restler" {
    import * as http from "http";

    /**
     * Interface for resler class.
     * @interface
     */
    interface RestlerStatic {
        /**
         * Create a DELETE request.
         * @param {string}          url     A url address.
         * @param {RestlerOptions}  options Options.
         * @return {RestlerResult}  Result.
         */
        del(url: string, options?: Object): RestlerResult;

        /**
         * Create a GET request.
         * @param {string}          url     A url address.
         * @param {RestlerOptions}  options Options.
         * @return {RestlerResult}  Result.
         */
        get(url: string, options?: RestlerOptions): RestlerResult;

        /**
         * Create a HEAD request.
         * @param {string}          url     A url address.
         * @param {RestlerOptions}  options Options.
         * @return {RestlerResult}  Result.
         */
        head(url: string, options?: RestlerOptions): RestlerResult;

        /**
         * Send json data via GET method.
         * @param {string}          url     A url address.
         * @param {any}             data    JSON body
         * @param {RestlerOptions}  options Options.
         * @return {RestlerResult}  Result.
         */
        json(url: string, data?: any, options?: RestlerOptions, method?: string): RestlerResult;

        /**
         * Create a PATCH request.
         * @param {string}          url     A url address.
         * @param {RestlerOptions}  options Options.
         * @return {RestlerResult}  Result.
         */
        patch(url: string, options?: RestlerOptions): RestlerResult;

        /**
         * Send json  data  via PATCH method.
         * @param {string}          url     A url address.
         * @param {any}             data    JSON body
         * @param {RestlerOptions}  options Options.
         * @return {RestlerResult}  Result.
         */
        patchJson(url: string, data?: any, options?: RestlerOptions): RestlerResult;

        /**
         * Create a POST request.
         * @param {string}          url     A url address.
         * @param {RestlerOptions}  options Options.
         * @return {RestlerResult}  Result.
         */
        post(url: string, options?: RestlerOptions): RestlerResult;

        /**
         * Send json data via POST method.
         * @param {string}          url     A url address.
         * @param {any}             data    JSON body
         * @param {RestlerOptions}  options Options.
         * @return {RestlerResult}  Result.
         */
        postJson(url: string, data?: any, options?: RestlerOptions): RestlerResult;

        /**
         * Create a PUT request.
         * @param {string}          url     A url address.
         * @param {RestlerOptions}  options Options.
         * @return {RestlerResult}  Result.
         */
        put(url: string, options?: RestlerOptions): RestlerResult;

        /**
         * Send json data via PUT method.
         * @param {string}          url     A url address.
         * @param {any}             data    JSON body
         * @param {RestlerOptions}  options Options.
         * @return {RestlerResult}  Result.
         */
        putJson(url: string, data?: any, options?: RestlerOptions): RestlerResult;

        /**
         * Create a PUT request.
         * @param {string}          url     A url address.
         * @param {RestlerOptions}  options Options.
         * @return {RestlerResult}  Result.
         */
        service(url: string, options?: RestlerOptions): RestlerResult;
    }

    /**
     * Interface for the header.
     * @interface
     */
    interface RestlerOptionsHeader {
        [headerName: string]: string;
    }

    /**
     * Interface for restler options.
     * @interface
     */
    interface RestlerOptions {
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

    /**
     * Interface for restler result.
     * @interface
     */
    interface RestlerResult {
        /**
         * Adds the listener function to the end of the listeners array for the event named eventName.
         * @param {string}    eventName   The name of the event.
         * @param {Function}  listener    The callback function
         */
        on(eventName: string, listener: (data?: any, response?: http.ServerResponse) => void): RestlerResult;
    }

    let restler: RestlerStatic;
    export = restler;
}

// Type definitions for needle 2.5
// Project: https://github.com/tomas/needle
// Definitions by: San Chen <https://github.com/bigsan>,
//                 Niklas Mollenhauer <https://github.com/nikeee>,
//                 Matanel Sindilevich <https://github.com/sindilevich>,
//                 Bryan Spears <https://github.com/bryanspears>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import * as http from 'http';
import * as Buffer from 'buffer';
import * as https from 'https';

declare namespace core {
    interface NeedleResponse extends http.IncomingMessage {
        body: any;
        raw: Buffer;
        bytes: number;
        cookies?: Cookies | undefined;
    }

    type ReadableStream = NodeJS.ReadableStream;

    type NeedleCallback = (error: Error | null, response: NeedleResponse, body: any) => void;

    interface Cookies {
        [name: string]: any;
    }

    type NeedleOptions = RequestOptions & ResponseOptions & RedirectOptions & https.RequestOptions;

    type NeedleReadonlyHttpVerbs = 'get' | 'head';

    type NeedleReadWriteHttpVerbs = 'delete' | 'patch' | 'post' | 'put';

    type NeedleHttpVerbs = NeedleReadonlyHttpVerbs | NeedleReadWriteHttpVerbs;

    interface RequestOptions {
        /**
         * Returns error if connection takes longer than X milisecs to establish.
         * Defaults to 10000 (10 secs). 0 means no timeout.
         */
        open_timeout?: number | undefined;
        /**
         * Alias for open_timeout
         */
        timeout?: RequestOptions['open_timeout'] | undefined;

        /**
         * Returns error if no response headers are received in X milisecs,
         * counting from when the connection is opened. Defaults to `0` (no response timeout).
         */
        response_timeout?: number | undefined;

        /**
         * Returns error if data transfer takes longer than X milisecs,
         * after connection is established. Defaults to 0 (no timeout).
         */
        read_timeout?: number | undefined;
        /**
         * Number of redirects to follow. Defaults to 0.
         */
        follow_max?: number | undefined;
        /**
         * Alias for follow_max
         */
        follow?: RequestOptions['follow_max'] | undefined;

        /**
         * Enables multipart/form-data encoding. Defaults to false.
         * Use it when uploading files.
         */
        multipart?: boolean | undefined;
        /**
         * Uses an http.Agent of your choice, instead of the global, default one.
         * Useful for tweaking the behaviour at the connection level, such as when doing tunneling.
         */
        agent?: http.Agent | boolean | undefined;
        /**
         * Forwards request through HTTP(s) proxy.
         * Eg. proxy: 'http://user:pass@proxy.server.com:3128'.
         * For more advanced proxying/tunneling use a custom agent.
         */
        proxy?: string | undefined;
        /**
         * Object containing custom HTTP headers for request.
         */
        headers?: {} | undefined;
        /**
         * Determines what to do with provided username/password.
         * Options are auto, digest or basic (default).
         * auto will detect the type of authentication depending on the response headers.
         */
        auth?: "auto" | "digest" | "basic" | undefined;
        /**
         * When true, sets content type to application/json and sends request body as JSON string,
         * instead of a query string.
         */
        json?: boolean | undefined;
        /**
         * When sending streams, this lets manually set the Content-Length header
         * --if the stream's bytecount is known beforehand--,
         * preventing ECONNRESET (socket hang up) errors on some servers that misbehave
         * when receiving payloads of unknown size.
         * Set it to 0 and Needle will get and set the stream's length,
         * or leave unset for the default behavior,
         * which is no Content-Length header for stream payloads.
         */
        stream_length?: number | undefined;

        /**
         * IP address. Passed to http/https request. Local interface from which the request should be emitted.
         */
        localAddress?: string | undefined;

        /**
         * Anonymous function taking request (or redirect location if following redirects) URI as an argument and modifying it given logic.
         * It has to return a valid URI string for successful request.
         */
        uri_modifier?: ((uri: string) => string) | undefined;

        // These properties are overwritten by those in the 'headers' field
        /**
         * Builds and sets a Cookie header from a { key: 'value' } object.
         */
        cookies?: Cookies | undefined;
        /**
         * If true, sets 'Accept-Encoding' header to 'gzip,deflate',
         * and inflates content if zipped.
         * Defaults to false.
         */
        compressed?: boolean | undefined;
        // Overwritten if present in the URI
        /**
         * For HTTP basic auth.
         */
        username?: string | undefined;
        /**
         * For HTTP basic auth. Requires username to be passed, but is optional.
         */
        password?: string | undefined;
        /**
         * Sets 'Accept' HTTP header. Defaults to &#x2a;&#x2f;&#x2a;.
         */
        accept?: string | undefined;
        /**
         * Sets 'Connection' HTTP header.
         * Not set by default, unless running Node < 0.11.4
         * in which case it defaults to close.
         */
        connection?: string | undefined;
        /**
         * Sets the 'User-Agent' HTTP header.
         * Defaults to Needle/{version} (Node.js {node_version}).
         */
        user_agent?: string | undefined;
        /**
         * Sets the 'Content-Type' header.
         * Unset by default, unless you're sending data
         * in which case it's set accordingly to whatever is being sent
         * (application/x-www-form-urlencoded, application/json or multipart/form-data).
         * That is, of course, unless the option is passed,
         * either here or through options.headers.
         */
        content_type?: string | undefined;
    }

    interface ResponseOptions {
        /**
         * Whether to decode the text responses to UTF-8,
         * if Content-Type header shows a different charset. Defaults to true.
         */
        decode_response?: boolean | undefined;
        /**
         * Alias for decode_response
         */
        decode?: ResponseOptions['decode_response'] | undefined;

        /**
         * Whether to parse XML or JSON response bodies automagically.
         * Defaults to true.
         * You can also set this to 'xml' or 'json' in which case Needle
         * will only parse the response if the content type matches.
         */
        parse_response?: boolean | 'json' | 'xml' | undefined;
        /**
         * Alias for parse_response
         */
        parse?: ResponseOptions['parse_response'] | undefined;

        /**
         * Whether to parse response’s Set-Cookie header.
         * Defaults to true.
         * If parsed, response cookies will be available at resp.cookies.
         */
        parse_cookies?: boolean | undefined;
        /**
         * Dump response output to file.
         * This occurs after parsing and charset decoding is done.
         */
        output?: string | undefined;
    }

    interface RedirectOptions {
        /**
         * Sends the cookies received in the set-cookie header
         * as part of the following request.
         * false by default.
         */
        follow_set_cookie?: boolean | undefined;
        /**
         * Sets the 'Referer' header to the requested URI
         * when following a redirect.
         * false by default.
         */
        follow_set_referer?: boolean | undefined;
        /**
         * If enabled, resends the request using the original verb
         * instead of being rewritten to get with no data.
         * false by default.
         */
        follow_keep_method?: boolean | undefined;
        /**
         * When true, Needle will only follow redirects that point to the same host
         * as the original request.
         * false by default.
         */
        follow_if_same_host?: boolean | undefined;
        /**
         * When true, Needle will only follow redirects that point to the same protocol
         * as the original request.
         * false by default.
         */
        follow_if_same_protocol?: boolean | undefined;
        /**
         * Unless true, Needle will not follow redirects that point to same location (as set in the response header) as the original request URL. false by default.
         */
        follow_if_same_location?: boolean | undefined;
    }

    interface KeyValue {
        [key: string]: any;
    }

    type BodyData = Buffer | KeyValue | NodeJS.ReadableStream | string | null;
}

/**
 * Calling needle() directly returns a Promise.
 *
 * Since needle 2.0
 * @param method Designates an HTTP verb for the request.
 */
declare function needle(method: core.NeedleReadonlyHttpVerbs, url: string, options?: core.NeedleOptions): Promise<core.NeedleResponse>;
/**
 * Calling needle() directly returns a Promise.
 *
 * Since needle 2.0
 * @param method Designates an HTTP verb for the request.
 * @param data May be null when issuing an HTTP DELETE request, but you need to explicity pass it.
 */
declare function needle(method: core.NeedleHttpVerbs, url: string, data: core.BodyData, options?: core.NeedleOptions): Promise<core.NeedleResponse>;

declare namespace needle {
    export type BodyData = core.BodyData;
    export type NeedleCallback = core.NeedleCallback;
    export type NeedleHttpVerbs = core.NeedleHttpVerbs;
    export type NeedleOptions = core.NeedleOptions;
    export type NeedleResponse = core.NeedleResponse;
    export type ReadableStream = core.ReadableStream;

    /**
     * Lets override the defaults for all future requests.
     */
    export function defaults(options: NeedleOptions): NeedleOptions;

    /**
     * Issues an HTTP HEAD request.
     */
    export function head(url: string, callback?: NeedleCallback): ReadableStream;
    /**
     * Issues an HTTP HEAD request.
     */
    export function head(url: string, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

    /**
     * Issues an HTTP GET request.
     */
    export function get(url: string, callback?: NeedleCallback): ReadableStream;
    /**
     * Issues an HTTP GET request.
     */
    export function get(url: string, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

    /**
     * Issues an HTTP POST request.
     */
    export function post(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
    /**
     * Issues an HTTP POST request.
     */
    export function post(url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

    /**
     * Issues an HTTP PUT request.
     */
    export function put(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
    /**
     * Issues an HTTP PUT request.
     */
    export function put(url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

    /**
     * Same behaviour as PUT.
     */
    export function patch(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
    /**
     * Same behaviour as PUT.
     */
    export function patch(url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

    /**
     * Issues an HTTP DELETE request.
     */
    function deleteFunc(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
    /**
     * Issues an HTTP DELETE request.
     */
    function deleteFunc(url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;
    // See https://github.com/Microsoft/TypeScript/issues/1784#issuecomment-258720219
    export { deleteFunc as delete };

    /**
     * Generic request.
     * This not only allows for flexibility, but also lets you perform a GET request with data,
     * in which case will be appended to the request as a query string,
     * unless you pass a json: true option.
     * @param method Designates an HTTP verb for the request.
     */
    export function request(method: NeedleHttpVerbs, url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
    /**
     * Generic request.
     * This not only allows for flexibility, but also lets you perform a GET request with data,
     * in which case will be appended to the request as a query string,
     * unless you pass a json: true option.
     * @param method Designates an HTTP verb for the request.
     */
    export function request(method: NeedleHttpVerbs, url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;
}

export = needle;

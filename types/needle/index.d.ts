// Type definitions for needle 2.0
// Project: https://github.com/tomas/needle
// Definitions by: San Chen <https://github.com/bigsan>, Niklas Mollenhauer <https://github.com/nikeee>, Matanel Sindilevich <https://github.com/sindilevich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "needle" {
    import * as http from 'http';
    import * as Buffer from 'buffer';
    import * as https from 'https';
    namespace Needle {
        interface NeedleResponse extends http.IncomingMessage {
            body: any;
            raw: Buffer;
            bytes: number;
        }

        type ReadableStream = NodeJS.ReadableStream;

        type NeedleCallback = (error: Error, response: NeedleResponse, body: any) => void;

        interface Cookies {
            [name: string]: any;
        }

        type NeedleOptions = RequestOptions & ResponseOptions & RedirectOptions & https.RequestOptions;

        interface RequestOptions {
            /**
             * Returns error if connection takes longer than X milisecs to establish.
             * Defaults to 10000 (10 secs). 0 means no timeout.
             */
            open_timeout?: number;
            /**
             * Alias for open_timeout
             */
            timeout?: number;

            /**
             * Returns error if data transfer takes longer than X milisecs,
             * after connection is established. Defaults to 0 (no timeout).
             */
            read_timeout?: number;
            /**
             * Number of redirects to follow. Defaults to 0.
             */
            follow_max?: number;
            /**
             * Alias for follow_max
             */
            follow?: number;

            /**
             * Enables multipart/form-data encoding. Defaults to false.
             * Use it when uploading files.
             */
            multipart?: boolean;
            /**
             * Uses an http.Agent of your choice, instead of the global, default one.
             * Useful for tweaking the behaviour at the connection level, such as when doing tunneling.
             */
            agent?: http.Agent | boolean;
            /**
             * Forwards request through HTTP(s) proxy.
             * Eg. proxy: 'http://user:pass@proxy.server.com:3128'.
             * For more advanced proxying/tunneling use a custom agent.
             */
            proxy?: string;
            /**
             * Object containing custom HTTP headers for request.
             */
            headers?: {};
            /**
             * Determines what to do with provided username/password.
             * Options are auto, digest or basic (default).
             * auto will detect the type of authentication depending on the response headers.
             */
            auth?: "auto" | "digest" | "basic";
            /**
             * When true, sets content type to application/json and sends request body as JSON string,
             * instead of a query string.
             */
            json?: boolean;

            // These properties are overwritten by those in the 'headers' field
            /**
             * Builds and sets a Cookie header from a { key: 'value' } object.
             */
            cookies?: Cookies;
            /**
             * If true, sets 'Accept-Encoding' header to 'gzip,deflate',
             * and inflates content if zipped.
             * Defaults to false.
             */
            compressed?: boolean;
            // Overwritten if present in the URI
            /**
             * For HTTP basic auth.
             */
            username?: string;
            /**
             * For HTTP basic auth. Requires username to be passed, but is optional.
             */
            password?: string;
            /**
             * Sets 'Accept' HTTP header. Defaults to &#x2a;&#x2f;&#x2a;.
             */
            accept?: string;
            /**
             * Sets 'Connection' HTTP header.
             * Not set by default, unless running Node < 0.11.4
             * in which case it defaults to close.
             */
            connection?: string;
            /**
             * Sets the 'User-Agent' HTTP header.
             * Defaults to Needle/{version} (Node.js {node_version}).
             */
            user_agent?: string;
        }

        interface ResponseOptions {
            /**
             * Whether to decode the text responses to UTF-8,
             * if Content-Type header shows a different charset. Defaults to true.
             */
            decode_response?: boolean;
            /**
             * Alias for decode_response
             */
            decode?: boolean;

            /**
             * Whether to parse XML or JSON response bodies automagically.
             * Defaults to true.
             * You can also set this to 'xml' or 'json' in which case Needle
             * will only parse the response if the content type matches.
             */
            parse_response?: boolean;
            /**
             * Alias for parse_response
             */
            parse?: boolean;

            /**
             * Whether to parse response’s Set-Cookie header.
             * Defaults to true.
             * If parsed, response cookies will be available at resp.cookies.
             */
            parse_cookies?: boolean;
            /**
             * Dump response output to file.
             * This occurs after parsing and charset decoding is done.
             */
            output?: string;
        }

        interface RedirectOptions {
            /**
             * Sends the cookies received in the set-cookie header
             * as part of the following request.
             * false by default.
             */
            follow_set_cookie?: boolean;
            /**
             * Sets the 'Referer' header to the requested URI
             * when following a redirect.
             * false by default.
             */
            follow_set_referer?: boolean;
            /**
             * If enabled, resends the request using the original verb
             * instead of being rewritten to get with no data.
             * false by default.
             */
            follow_keep_method?: boolean;
            /**
             * When true, Needle will only follow redirects that point to the same host
             * as the original request.
             * false by default.
             */
            follow_if_same_host?: boolean;
            /**
             * When true, Needle will only follow redirects that point to the same protocol
             * as the original request.
             * false by default.
             */
            follow_if_same_protocol?: boolean;
        }

        interface KeyValue {
            [key: string]: any;
        }

        type BodyData = Buffer | KeyValue | NodeJS.ReadableStream | string | null;

        interface NeedleStatic {
            /**
             * Lets override the defaults for all future requests.
             */
            defaults(options: NeedleOptions): void;

            /**
             * Issues an HTTP HEAD request.
             */
            head(url: string, callback?: NeedleCallback): ReadableStream;
            /**
             * Issues an HTTP HEAD request.
             */
            head(url: string, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

            /**
             * Issues an HTTP GET request.
             */
            get(url: string, callback?: NeedleCallback): ReadableStream;
            /**
             * Issues an HTTP GET request.
             */
            get(url: string, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

            /**
             * Issues an HTTP POST request.
             */
            post(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
            /**
             * Issues an HTTP POST request.
             */
            post(url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

            /**
             * Issues an HTTP PUT request.
             */
            put(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
            /**
             * Issues an HTTP PUT request.
             */
            put(url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

            /**
             * Same behaviour as PUT.
             */
            patch(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
            /**
             * Same behaviour as PUT.
             */
            patch(url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;

            /**
             * Issues an HTTP DELETE request.
             */
            delete(url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
            /**
             * Issues an HTTP DELETE request.
             */
            delete(url: string, data: BodyData, options?: NeedleOptions, callback ?: NeedleCallback): ReadableStream;

            /**
             * Generic request.
             * This not only allows for flexibility, but also lets you perform a GET request with data,
             * in which case will be appended to the request as a query string,
             * unless you pass a json: true option.
             * @param method Designates an HTTP verb for the request.
             */
            request(method: string, url: string, data: BodyData, callback?: NeedleCallback): ReadableStream;
            /**
             * Generic request.
             * This not only allows for flexibility, but also lets you perform a GET request with data,
             * in which case will be appended to the request as a query string,
             * unless you pass a json: true option.
             * @param method Designates an HTTP verb for the request.
             */
            request(method: string, url: string, data: BodyData, options?: NeedleOptions, callback?: NeedleCallback): ReadableStream;
        }
    }
    const needle: Needle.NeedleStatic;
    export = needle;
}
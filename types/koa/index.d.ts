// Type definitions for Koa 2.13.1
// Project: http://koajs.com
// Definitions by: DavidCai1993 <https://github.com/DavidCai1993>
//                 jKey Lu <https://github.com/jkeylu>
//                 Brice Bernard <https://github.com/brikou>
//                 harryparkdotio <https://github.com/harryparkdotio>
//                 Wooram Jun <https://github.com/chatoo2412>
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
//                 Piotr Kuczynski <https://github.com/pkuczynski>
//                 vnoder <https://github.com/vnoder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/* =================== USAGE ===================

    import * as Koa from "koa"
    const app = new Koa()

    async function (ctx: Koa.Context, next: Koa.Next) {
      // ...
    }

 =============================================== */
/// <reference types="node" />
import * as accepts from 'accepts';
import * as Cookies from 'cookies';
import { EventEmitter } from 'events';
import { IncomingMessage, ServerResponse, Server, IncomingHttpHeaders, OutgoingHttpHeaders } from 'http';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';
import httpAssert = require('http-assert');
import * as HttpErrors from 'http-errors';
import * as Keygrip from 'keygrip';
import * as compose from 'koa-compose';
import { Socket, ListenOptions } from 'net';
import * as url from 'url';
import * as contentDisposition from 'content-disposition';
import { ParsedUrlQuery } from 'querystring';

declare interface ContextDelegatedRequest {
    /**
     * Return request header.
     */
    header: IncomingHttpHeaders;

    /**
     * Return request header, alias as request.header
     */
    headers: IncomingHttpHeaders;

    /**
     * Get/Set request URL.
     */
    url: string;

    /**
     * Get origin of URL.
     */
    origin: string;

    /**
     * Get full request URL.
     */
    href: string;

    /**
     * Get/Set request method.
     */
    method: string;

    /**
     * Get request pathname.
     * Set pathname, retaining the query-string when present.
     */
    path: string;

    /**
     * Get parsed query-string.
     * Set query-string as an object.
     */
    query: ParsedUrlQuery;

    /**
     * Get/Set query string.
     */
    querystring: string;

    /**
     * Get the search string. Same as the querystring
     * except it includes the leading ?.
     *
     * Set the search string. Same as
     * response.querystring= but included for ubiquity.
     */
    search: string;

    /**
     * Parse the "Host" header field host
     * and support X-Forwarded-Host when a
     * proxy is enabled.
     */
    host: string;

    /**
     * Parse the "Host" header field hostname
     * and support X-Forwarded-Host when a
     * proxy is enabled.
     */
    hostname: string;

    /**
     * Get WHATWG parsed URL object.
     */
    URL: url.URL;

    /**
     * Check if the request is fresh, aka
     * Last-Modified and/or the ETag
     * still match.
     */
    fresh: boolean;

    /**
     * Check if the request is stale, aka
     * "Last-Modified" and / or the "ETag" for the
     * resource has changed.
     */
    stale: boolean;

    /**
     * Check if the request is idempotent.
     */
    idempotent: boolean;

    /**
     * Return the request socket.
     */
    socket: Socket;

    /**
     * Return the protocol string "http" or "https"
     * when requested with TLS. When the proxy setting
     * is enabled the "X-Forwarded-Proto" header
     * field will be trusted. If you're running behind
     * a reverse proxy that supplies https for you this
     * may be enabled.
     */
    protocol: string;

    /**
     * Short-hand for:
     *
     *    this.protocol == 'https'
     */
    secure: boolean;

    /**
     * Request remote address. Supports X-Forwarded-For when app.proxy is true.
     */
    ip: string;

    /**
     * When `app.proxy` is `true`, parse
     * the "X-Forwarded-For" ip address list.
     *
     * For example if the value were "client, proxy1, proxy2"
     * you would receive the array `["client", "proxy1", "proxy2"]`
     * where "proxy2" is the furthest down-stream.
     */
    ips: string[];

    /**
     * Return subdomains as an array.
     *
     * Subdomains are the dot-separated parts of the host before the main domain
     * of the app. By default, the domain of the app is assumed to be the last two
     * parts of the host. This can be changed by setting `app.subdomainOffset`.
     *
     * For example, if the domain is "tobi.ferrets.example.com":
     * If `app.subdomainOffset` is not set, this.subdomains is
     * `["ferrets", "tobi"]`.
     * If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.
     */
    subdomains: string[];

    /**
     * Check if the given `type(s)` is acceptable, returning
     * the best match when true, otherwise `false`, in which
     * case you should respond with 406 "Not Acceptable".
     *
     * The `type` value may be a single mime type string
     * such as "application/json", the extension name
     * such as "json" or an array `["json", "html", "text/plain"]`. When a list
     * or array is given the _best_ match, if any is returned.
     *
     * Examples:
     *
     *     // Accept: text/html
     *     this.accepts('html');
     *     // => "html"
     *
     *     // Accept: text/*, application/json
     *     this.accepts('html');
     *     // => "html"
     *     this.accepts('text/html');
     *     // => "text/html"
     *     this.accepts('json', 'text');
     *     // => "json"
     *     this.accepts('application/json');
     *     // => "application/json"
     *
     *     // Accept: text/*, application/json
     *     this.accepts('image/png');
     *     this.accepts('png');
     *     // => undefined
     *
     *     // Accept: text/*;q=.5, application/json
     *     this.accepts(['html', 'json']);
     *     this.accepts('html', 'json');
     *     // => "json"
     */
    accepts(): string[];
    accepts(...types: string[]): string | false;
    accepts(types: string[]): string | false;

    /**
     * Return accepted encodings or best fit based on `encodings`.
     *
     * Given `Accept-Encoding: gzip, deflate`
     * an array sorted by quality is returned:
     *
     *     ['gzip', 'deflate']
     */
    acceptsEncodings(): string[];
    acceptsEncodings(...encodings: string[]): string | false;
    acceptsEncodings(encodings: string[]): string | false;

    /**
     * Return accepted charsets or best fit based on `charsets`.
     *
     * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
     * an array sorted by quality is returned:
     *
     *     ['utf-8', 'utf-7', 'iso-8859-1']
     */
    acceptsCharsets(): string[];
    acceptsCharsets(...charsets: string[]): string | false;
    acceptsCharsets(charsets: string[]): string | false;

    /**
     * Return accepted languages or best fit based on `langs`.
     *
     * Given `Accept-Language: en;q=0.8, es, pt`
     * an array sorted by quality is returned:
     *
     *     ['es', 'pt', 'en']
     */
    acceptsLanguages(): string[];
    acceptsLanguages(...langs: string[]): string | false;
    acceptsLanguages(langs: string[]): string | false;

    /**
     * Check if the incoming request contains the "Content-Type"
     * header field, and it contains any of the give mime `type`s.
     * If there is no request body, `null` is returned.
     * If there is no content type, `false` is returned.
     * Otherwise, it returns the first `type` that matches.
     *
     * Examples:
     *
     *     // With Content-Type: text/html; charset=utf-8
     *     this.is('html'); // => 'html'
     *     this.is('text/html'); // => 'text/html'
     *     this.is('text/*', 'application/json'); // => 'text/html'
     *
     *     // When Content-Type is application/json
     *     this.is('json', 'urlencoded'); // => 'json'
     *     this.is('application/json'); // => 'application/json'
     *     this.is('html', 'application/*'); // => 'application/json'
     *
     *     this.is('html'); // => false
     */
    // is(): string | boolean;
    is(...types: string[]): string | false | null;
    is(types: string[]): string | false | null;

    /**
     * Return request header. If the header is not set, will return an empty
     * string.
     *
     * The `Referrer` header field is special-cased, both `Referrer` and
     * `Referer` are interchangeable.
     *
     * Examples:
     *
     *     this.get('Content-Type');
     *     // => "text/plain"
     *
     *     this.get('content-type');
     *     // => "text/plain"
     *
     *     this.get('Something');
     *     // => ''
     */
    get(field: string): string;
}

declare interface ContextDelegatedResponse {
    /**
     * Get/Set response status code.
     */
    status: number;

    /**
     * Get response status message
     */
    message: string;

    /**
     * Get/Set response body.
     */
    body: unknown;

    /**
     * Return parsed response Content-Length when present.
     * Set Content-Length field to `n`.
     */
    length: number;

    /**
     * Check if a header has been written to the socket.
     */
    headerSent: boolean;

    /**
     * Vary on `field`.
     */
    vary(field: string): void;

    /**
     * Perform a 302 redirect to `url`.
     *
     * The string "back" is special-cased
     * to provide Referrer support, when Referrer
     * is not present `alt` or "/" is used.
     *
     * Examples:
     *
     *    this.redirect('back');
     *    this.redirect('back', '/index.html');
     *    this.redirect('/login');
     *    this.redirect('http://google.com');
     */
    redirect(url: string, alt?: string): void;

    /**
     * Set Content-Disposition to "attachment" to signal the client to prompt for download.
     * Optionally specify the filename of the download and some options.
     */
    attachment(filename?: string, options?: contentDisposition.Options): void;

    /**
     * Return the response mime type void of
     * parameters such as "charset".
     *
     * Set Content-Type response header with `type` through `mime.lookup()`
     * when it does not contain a charset.
     *
     * Examples:
     *
     *     this.type = '.html';
     *     this.type = 'html';
     *     this.type = 'json';
     *     this.type = 'application/json';
     *     this.type = 'png';
     */
    type: string;

    /**
     * Get the Last-Modified date in Date form, if it exists.
     * Set the Last-Modified date using a string or a Date.
     *
     *     this.response.lastModified = new Date();
     *     this.response.lastModified = '2013-09-13';
     */
    lastModified: Date;

    /**
     * Get/Set the ETag of a response.
     * This will normalize the quotes if necessary.
     *
     *     this.response.etag = 'md5hashsum';
     *     this.response.etag = '"md5hashsum"';
     *     this.response.etag = 'W/"123456789"';
     *
     * @param {String} etag
     * @api public
     */
    etag: string;

    /**
     * Set header `field` to `val`, or pass
     * an object of header fields.
     *
     * Examples:
     *
     *    this.set('Foo', ['bar', 'baz']);
     *    this.set('Accept', 'application/json');
     *    this.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
     */
    set(field: { [key: string]: string | string[] }): void;
    set(field: string, val: string | string[]): void;

    /**
     * Append additional header `field` with value `val`.
     *
     * Examples:
     *
     * ```
     * this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
     * this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
     * this.append('Warning', '199 Miscellaneous warning');
     * ```
     */
    append(field: string, val: string | string[]): void;

    /**
     * Remove header `field`.
     */
    remove(field: string): void;

    /**
     * Checks if the request is writable.
     * Tests for the existence of the socket
     * as node sometimes does not set it.
     */
    writable: boolean;

    /**
     * Flush any set headers, and begin the body
     */
    flushHeaders(): void;
}

declare class Application<
    StateT = Application.DefaultState,
    ContextT = Application.DefaultContext
> extends EventEmitter {
    proxy: boolean;
    proxyIpHeader: string;
    maxIpsCount: number;
    middleware: Application.Middleware<StateT, ContextT>[];
    subdomainOffset: number;
    env: string;
    context: Application.BaseContext & ContextT;
    request: Application.BaseRequest;
    response: Application.BaseResponse;
    silent: boolean;
    keys: Keygrip | string[];

    /**
     *
     * @param {object} [options] Application options
     * @param {string} [options.env='development'] Environment
     * @param {string[]} [options.keys] Signed cookie keys
     * @param {boolean} [options.proxy] Trust proxy headers
     * @param {number} [options.subdomainOffset] Subdomain offset
     * @param {boolean} [options.proxyIpHeader] proxy ip header, default to X-Forwarded-For
     * @param {boolean} [options.maxIpsCount] max ips read from proxy ip header, default to 0 (means infinity)
     *
     */
    constructor(options?: {
        env?: string,
        keys?: string[],
        proxy?: boolean,
        subdomainOffset?: number,
        proxyIpHeader?: boolean,
        maxIpsCount?: boolean,
    });

    /**
     * Shorthand for:
     *
     *    http.createServer(app.callback()).listen(...)
     */
    listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void): Server;
    listen(port: number, hostname?: string, listeningListener?: () => void): Server;
    listen(port: number, backlog?: number, listeningListener?: () => void): Server;
    listen(port: number, listeningListener?: () => void): Server;
    listen(path: string, backlog?: number, listeningListener?: () => void): Server;
    listen(path: string, listeningListener?: () => void): Server;
    listen(options: ListenOptions, listeningListener?: () => void): Server;
    listen(handle: any, backlog?: number, listeningListener?: () => void): Server;
    listen(handle: any, listeningListener?: () => void): Server;

    /**
     * Return JSON representation.
     * We only bother showing settings.
     */
    inspect(): any;

    /**
     * Return JSON representation.
     * We only bother showing settings.
     */
    toJSON(): any;

    /**
     * Use the given middleware `fn`.
     *
     * Old-style middleware will be converted.
     */
    use<NewStateT = {}, NewContextT = {}>(
        middleware: Application.Middleware<StateT & NewStateT, ContextT & NewContextT>
    ): Application<StateT & NewStateT, ContextT & NewContextT>;

    /**
     * Return a request handler callback
     * for node's native http/http2 server.
     */
    callback(): (req: IncomingMessage | Http2ServerRequest, res: ServerResponse | Http2ServerResponse) => void;

    /**
     * Initialize a new context.
     *
     * @api private
     */
    createContext<StateT = Application.DefaultState>(
        req: IncomingMessage,
        res: ServerResponse,
    ): Application.ParameterizedContext<StateT>;

    /**
     * Default error handler.
     *
     * @api private
     */
    onerror(err: Error): void;
}

declare namespace Application {
    type DefaultStateExtends = any;
    /**
     * This interface can be augmented by users to add types to Koa's default state
     */
    interface DefaultState extends DefaultStateExtends {}

    type DefaultContextExtends = {};
    /**
     * This interface can be augmented by users to add types to Koa's default context
     */
    interface DefaultContext extends DefaultContextExtends {
        /**
         * Custom properties.
         */
        [key: string]: any;
    }

    type Middleware<StateT = DefaultState, ContextT = DefaultContext, ResponseBodyT = any> = compose.Middleware<
        ParameterizedContext<StateT, ContextT, ResponseBodyT>
    >;

    interface BaseRequest extends ContextDelegatedRequest {
        /**
         * Get the charset when present or undefined.
         */
        charset: string;

        /**
         * Return parsed Content-Length when present.
         */
        length: number;

        /**
         * Return the request mime type void of
         * parameters such as "charset".
         */
        type: string;

        /**
         * Inspect implementation.
         */
        inspect(): any;

        /**
         * Return JSON representation.
         */
        toJSON(): any;
    }

    interface BaseResponse extends ContextDelegatedResponse {
        /**
         * Return the request socket.
         *
         * @return {Connection}
         * @api public
         */
        socket: Socket;

        /**
         * Return response header.
         */
        header: OutgoingHttpHeaders;

        /**
         * Return response header, alias as response.header
         */
        headers: OutgoingHttpHeaders;

        /**
         * Check whether the response is one of the listed types.
         * Pretty much the same as `this.request.is()`.
         *
         * @param {String|Array} types...
         * @return {String|false}
         * @api public
         */
        // is(): string;
        is(...types: string[]): string | false | null;
        is(types: string[]): string | false | null;

        /**
         * Return response header. If the header is not set, will return an empty
         * string.
         *
         * The `Referrer` header field is special-cased, both `Referrer` and
         * `Referer` are interchangeable.
         *
         * Examples:
         *
         *     this.get('Content-Type');
         *     // => "text/plain"
         *
         *     this.get('content-type');
         *     // => "text/plain"
         *
         *     this.get('Something');
         *     // => ''
         */
        get(field: string): string;

        /**
         * Inspect implementation.
         */
        inspect(): any;

        /**
         * Return JSON representation.
         */
        toJSON(): any;
    }

    interface BaseContext extends ContextDelegatedRequest, ContextDelegatedResponse {
        /**
         * util.inspect() implementation, which
         * just returns the JSON output.
         */
        inspect(): any;

        /**
         * Return JSON representation.
         *
         * Here we explicitly invoke .toJSON() on each
         * object, as iteration will otherwise fail due
         * to the getters and cause utilities such as
         * clone() to fail.
         */
        toJSON(): any;

        /**
         * Similar to .throw(), adds assertion.
         *
         *    this.assert(this.user, 401, 'Please login!');
         *
         * See: https://github.com/jshttp/http-assert
         */
        assert: typeof httpAssert;

        /**
         * Throw an error with `msg` and optional `status`
         * defaulting to 500. Note that these are user-level
         * errors, and the message may be exposed to the client.
         *
         *    this.throw(403)
         *    this.throw('name required', 400)
         *    this.throw(400, 'name required')
         *    this.throw('something exploded')
         *    this.throw(new Error('invalid'), 400);
         *    this.throw(400, new Error('invalid'));
         *
         * See: https://github.com/jshttp/http-errors
         */
        throw(message: string, code?: number, properties?: {}): never;
        throw(status: number): never;
        throw(...properties: Array<number | string | {}>): never;

        /**
         * Default error handling.
         */
        onerror(err: Error): void;
    }

    interface Request extends BaseRequest {
        app: Application;
        req: IncomingMessage;
        res: ServerResponse;
        ctx: Context;
        response: Response;
        originalUrl: string;
        ip: string;
        accept: accepts.Accepts;
    }

    interface Response extends BaseResponse {
        app: Application;
        req: IncomingMessage;
        res: ServerResponse;
        ctx: Context;
        request: Request;
    }

    interface ExtendableContext extends BaseContext {
        app: Application;
        request: Request;
        response: Response;
        req: IncomingMessage;
        res: ServerResponse;
        originalUrl: string;
        cookies: Cookies;
        accept: accepts.Accepts;
        /**
         * To bypass Koa's built-in response handling, you may explicitly set `ctx.respond = false;`
         */
        respond?: boolean;
    }

    type ParameterizedContext<StateT = DefaultState, ContextT = DefaultContext, ResponseBodyT = unknown> = ExtendableContext
        & { state: StateT; }
        & ContextT
        & { body: ResponseBodyT; response: { body: ResponseBodyT }; };

    interface Context extends ParameterizedContext {}

    type Next = () => Promise<any>;

    /**
     * A re-export of `HttpError` from the `http-error` package.
     *
     * This is the error type that is thrown by `ctx.assert()` and `ctx.throw()`.
     */
    const HttpError: typeof HttpErrors.HttpError;
}

export = Application;

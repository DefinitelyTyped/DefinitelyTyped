


import * as net from 'net';
import * as http from 'http';
import * as events from 'events';
import * as Cookies from 'cookies';

interface IRequest extends Koa.Request {
    /**
     * Return request header.
     *
     * @readonly
     */
    header: any;
    /**
     * Return request header, alias as request.header
     *
     * @readonly
     */
    headers: any;
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
     *
     * @readonly
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
    query: any;
    /**
     * Get/Set query string.
     */
    querystring: string;
    /**
     * Get the search string. Same as the querystring except it includes the leading ?.
     * Set the search string. Same as response.querystring= but included for ubiquity.
     */
    search: string;
    /**
     * Parse the "Host" header field host and support X-Forwarded-Host when a proxy is enabled.
     *
     * @readonly
     */
    host: string;
    /**
     * Parse the "Host" header field hostname and support X-Forwarded-Host when a proxy is enabled.
     *
     * @readonly
     */
    hostname: string;
    /**
     * Check if the request is fresh, aka
     * Last-Modified and/or the ETag
     * still match.
     *
     * @readonly
     */
    fresh: boolean;
    /**
     * Check if the request is stale, aka
     * "Last-Modified" and / or the "ETag" for the
     * resource has changed.
     *
     * @readonly
     */
    stale: boolean;
    /**
     * Check if the request is idempotent.
     *
     * @readonly
     */
    idempotent: boolean;
    /**
     * Return the request socket.
     *
     * @readonly
     */
    socket: net.Socket;
    /**
     * Return the protocol string "http" or "https"
     * when requested with TLS. When the proxy setting
     * is enabled the "X-Forwarded-Proto" header
     * field will be trusted. If you're running behind
     * a reverse proxy that supplies https for you this
     * may be enabled.
     *
     * @readonly
     */
    protocol: string;
    /**
     * Short-hand for:
     *
     *    this.protocol == 'https'
     *
     * @readonly
     */
    secure: boolean;
    /**
     * Return the remote address, or when
     * `app.proxy` is `true` return
     * the upstream addr.
     *
     * @readonly
     */
    ip: string;
    /**
     * When `app.proxy` is `true`, parse
     * the "X-Forwarded-For" ip address list.
     *
     * For example if the value were "client, proxy1, proxy2"
     * you would receive the array `["client", "proxy1", "proxy2"]`
     * where "proxy2" is the furthest down-stream.
     *
     * @readonly
     */
    ips: string[];
    /**
     * Return subdomains as an array.
     *
     * Subdomains are the dot-separated parts of the host before the main domain of
     * the app. By default, the domain of the app is assumed to be the last two
     * parts of the host. This can be changed by setting `app.subdomainOffset`.
     *
     * For example, if the domain is "tobi.ferrets.example.com":
     * If `app.subdomainOffset` is not set, this.subdomains is `["ferrets", "tobi"]`.
     * If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.
     *
     * @readonly
     */
    subdomains: string[];
    /**
     * Check if the given `type(s)` is acceptable, returning
     * the best match when true, otherwise `undefined`, in which
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
    accepts(...types: string[]): string | boolean | string[];
    accepts(types: string[]): string | boolean | string[];
    /**
     * Return accepted encodings or best fit based on `encodings`.
     *
     * Given `Accept-Encoding: gzip, deflate`
     * an array sorted by quality is returned:
     *
     *     ['gzip', 'deflate']
     */
    acceptsEncodings(...encodings: string[]): string | string[];
    acceptsEncodings(encodings: string[]): string | string[];
    /**
     * Return accepted charsets or best fit based on `charsets`.
     *
     * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
     * an array sorted by quality is returned:
     *
     *     ['utf-8', 'utf-7', 'iso-8859-1']
     */
    acceptsCharsets(...charsets: string[]): string | string[];
    acceptsCharsets(charsets: string[]): string | string[];
    /**
     * Return accepted languages or best fit based on `langs`.
     *
     * Given `Accept-Language: en;q=0.8, es, pt`
     * an array sorted by quality is returned:
     *
     *     ['es', 'pt', 'en']
     */
    acceptsLanguages(...langs: string[]): string | string[];
    acceptsLanguages(langs: string[]): string | string[];
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
    is(type: string): string | boolean;
    is(types: string[]): string | boolean;
    /**
     * Return request header.
     *
     * The `Referrer` header field is special-cased,
     * both `Referrer` and `Referer` are interchangeable.
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
     *     // => undefined
     */
    get(field: string): string;
}

interface IResponse extends Koa.Response {
    /**
     * Get/Set response status code.
     */
    status: number;
    /**
     * Get/Set response status message
     */
    message: string;
    /**
     * Get/Set response body.
     */
    body: any;
    /**
     * Return parsed response Content-Length when present.
     * Set Content-Length field to `n`.
     */
    length: number;
    /**
     * Check if a header has been written to the socket.
     *
     * @readonly
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
    redirect(url: string): void;
    redirect(url: string, alt: string): void;
    /**
     * Set Content-Disposition header to "attachment" with optional `filename`.
     */
    attachment(filename: string): void;
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
     * Get the ETag of a response.
     * Set the ETag of a response.
     * This will normalize the quotes if necessary.
     *
     *     this.response.etag = 'md5hashsum';
     *     this.response.etag = '"md5hashsum"';
     *     this.response.etag = 'W/"123456789"';
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
    set(field: any): void;
    set(field: string, val: string): void;
    set(field: string, val: any[]): void;
    /**
     * Append additional header `field` with value `val`.
     *
     * Examples:
     *
     *    this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
     *    this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
     *    this.append('Warning', '199 Miscellaneous warning');
     */
    append(field: string, val: string): void;
    append(field: string, val: any[]): void;
    /**
     * Remove header `field`.
     */
    remove(field: string): void;
    /**
     * Checks if the request is writable.
     * Tests for the existence of the socket
     * as node sometimes does not set it.
     *
     * @readonly
     * @private
     */
    writable: boolean;
}

declare namespace koa {
    interface BaseRequest extends IRequest {
        /**
         * Get the charset when present or undefined.
         *
         * @readonly
         */
        charset: string;
        /**
         * Return parsed Content-Length when present.
         *
         * @readonly
         */
        length: number;
        /**
         * Return the request mime type void of
         * parameters such as "charset".
         *
         * @readonly
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

    interface BaseResponse extends IResponse {
        /**
         * Return the request socket.
         *
         * @readonly
         */
        socket: net.Socket;
        /**
         * Return response header.
         *
         * @readonly
         */
        header: any;
        /**
         * Return response header, alias as response.header
         */
        headers: any;
        /**
         * Check whether the response is one of the listed types.
         * Pretty much the same as `this.request.is()`.
         */
        is(type: string): string | boolean;
        is(types: string[]): string | boolean;
        /**
         * Return response header.
         *
         * Examples:
         *
         *     this.get('Content-Type');
         *     // => "text/plain"
         *
         *     this.get('content-type');
         *     // => "text/plain"
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

    interface BaseContext extends IRequest, IResponse {
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
        assert(test: any, status: number, message: string): void;
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
        throw(...args: any[]): void;
        /**
         * Default error handling.
         *
         * @private
         */
        onerror(err: Error): void;
    }

    interface Request extends BaseRequest {
        app: Application;
        ctx: Context;
        response: Response;
        req: http.IncomingMessage;
        res: http.ServerResponse;
    }

    interface Response extends BaseResponse {
        app: Application;
        ctx: Context;
        request: Request;
        req: http.IncomingMessage;
        res: http.ServerResponse;
    }

    interface Context extends BaseContext {
        request: Request;
        response: Response;
        app: Application;
        req: http.IncomingMessage;
        res: http.ServerResponse;
        originalUrl: string;
        cookies: Cookies.ICookies;
        accept: any;
        state: any;
    }

    interface Application extends events.EventEmitter, Koa.Application {
        env: string;
        subdomainOffset: number;
        middleware: any[];
        proxy: boolean;
        context: BaseContext;
        request: BaseRequest;
        response: BaseResponse;
        /**
         * Shorthand for:
         *
         *    http.createServer(app.callback()).listen(...)
         */
        listen(port: number, hostname?: string, backlog?: number, callback?: Function): http.Server;
        listen(port: number, hostname?: string, callback?: Function): http.Server;
        listen(path: string, callback?: Function): http.Server;
        listen(handle: any, listeningListener?: Function): http.Server;
        listen(): http.Server;
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
         */
        use(fn: Function): Application;
        /**
         * Return a request handler callback
         * for node's native http server.
         */
        callback(): (req: http.IncomingMessage, res: http.ServerResponse) => void;
        /**
         * Initialize a new context.
         *
         * @private
         */
        createContext(req: http.IncomingMessage, res: http.ServerResponse): Context;
        /**
         * Default error handler.
         *
         * @private
         */
        onerror(err: Error): void;
    }
}

interface KoaStatic {
    new (): koa.Application;
    (): koa.Application;
}

declare var koa: KoaStatic;

export = koa;

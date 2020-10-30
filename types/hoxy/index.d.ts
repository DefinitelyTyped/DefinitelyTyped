// Type definitions for hoxy 3.3
// Project: https://github.com/greim/hoxy#readme
// Definitions by: _TrueLecter_ <https://github.com/TrueLecter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Writable } from 'stream';
import cheerio = require('cheerio');

/**
 * Key and certificate to be passed to https.createServer()
 * See supported formats [here](https://nodejs.org/api/tls.html#tls_tls_createsecurecontext_options)
 */
export interface CertificateParams {
    cert: string | string[] | Buffer | Buffer[];
    key: string | string[] | Buffer | Buffer[] | object[];
}

export interface Slow {
    /**
     * Imposes a delay (in milliseconds) between all requests and responses
     */
    rate: number;

    /**
     * Imposes a single rate-limiting bottleneck (in bytes per second) on all throughput
     */
    latency: number;

    /**
     * Imposes a single rate-limiting bottleneck (in bytes per second) on all uploads
     */
    up: number;

    /**
     * Imposes a single rate-limiting bottleneck (in bytes per second) on all downloads
     */
    down: number;
}

export interface CreateServerOptions {
    /**
     * If present, this proxy will in turn use another proxy.
     * This allows Hoxy to play well with other proxies.
     * This value should take the form host:port
     */
    upstreamProxy?: string;

    /**
     *  If present, this proxy will run as a reverse proxy for the given server.
     *  This allows you to point your client directly at the proxy, instead of
     *  configuring it in the client's proxy settings.
     *  This value should take the form scheme://host:port.
     */
    reverse?: string;

    /**
     * If present, this should contain a key/cert combo representing a certificate
     * authority that your client trusts. See these instructions for how to
     * generate these files. You'll then need to configure your client to use this
     * proxy for https in addition to http. Once you've got all of that set up,
     * Hoxy will generate fake keys/cert combos for every hostname you visit,
     * caching them in memory for subsequent visits, thus allowing the proxy to
     * handle https requests as cleartext
     */
    certAuthority?: CertificateParams;

    /**
     * Should only be used in combination with reverse. If present, causes Hoxy to
     * run as an https server. Passed as opts to https.createServer(opts, function)
     */
    tls?: CertificateParams;

    /**
     * Latency emulation
     */
    slow?: Slow;
}

/**
 * Factory for a new proxy with given options
 * @param opts - Options to be passed in constructor
 */
export function createServer(opts?: CreateServerOptions): Proxy;

/**
 * Request phase
 */
export type Phase = 'request' | 'request-sent' | 'response' | 'response-sent';

/**
 * Body parsers
 */
export type BodyParser = '$' | 'json' | 'params' | 'buffer' | 'string';

export type TesterFunction<T> = (arg: T) => boolean;

export type Filter<T> = RegExp | TesterFunction<T> | T;

export interface InterceptOptions {
    /**
     * Request phase to listen to
     */
    phase: Phase;

    /**
     * Body-parsers
     */
    as?: BodyParser;

    /**
     * Match the request protocol
     */
    protocol?: Filter<string>;

    /**
     * Match the all-uppercase HTTP request method
     */
    method?: Filter<HttpMethod>;

    /**
     * Match the host, not including :port.
     */
    hostname?: Filter<string>;

    /**
     * Match the port number.
     */
    port?: Filter<number | string>;

    /**
     * Match the request URL. Patterns like /foo/* are allowed
     */
    url?: Filter<string>;

    /**
     * Match the full request URL including protocol and hostname.
     * Patterns like /foo/* are allowed
     */
    fullUrl?: Filter<string>;

    /**
     * Match the full content-type header of the request or
     * response (depending on the phase)
     */
    contentType?: Filter<string>;

    /**
     * Same as contentType but only matches request
     */
    requestContentType?: Filter<string>;

    /**
     * Same as contentType but only matches response
     */
    responseContentType?: Filter<string>;

    /**
     * Match just the mime type portion of the content-type header
     * of the request or response (depending on the phase). I.e.,
     * if the entire header is "text/html; charset=utf-8", just
     * match the "text/html" part
     */
    mimeType?: Filter<string>;

    /**
     * Same as mimeType but only matches request
     */
    requestMimeType?: Filter<string>;

    /**
     * Same as mimeType but only matches response
     */
    responseMimeType?: Filter<string>;
}

/**
 * Request method
 */
export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';

export class Request {
    private constructor();

    /**
     * Protocol of the request
     */
    protocol: string;

    /**
     * Destination server hostname, sans port
     */
    hostname: string;

    /**
     * Destination server port
     */
    port: number;

    /**
     * All-caps HTTP method used. Lowercase values are converted to uppercase
     */
    method: HttpMethod;

    /**
     * HTTP request header name/value JS object. These are all-lowercase, e.g. accept-encoding
     */
    headers: Record<string, string>;

    /**
     * Root-relative request URL, including query string, like /foo/bar?baz=qux
     */
    url: string;

    /**
     * An object representing querystring params in the URL.
     * For example if the URL is /foo/bar?baz=qux, then this
     * object will look like { baz: 'qux' }.
     */
    query: Record<string, string>;

    /**
     * Request body parsed as JSON. This is only present if you intercept the
     * request as:'json'. Changes made to this object will be seen by the server.
     */
    json?: Record<string, any>;

    /**
     * Request body parsed as form-url-encoded params. This will be a key/value
     * object. This object will only present if you intercept the request
     * as:'params'. Changes made to this object will be seen by the server.
     *
     * Note: parameters from the URL querystring are not included in this object.
     */
    params?: Record<string, string>;

    /**
     * Request body string. This is only present if you intercept the request
     * as:'string'. Overwriting this will overwrite the request body sent to
     * the server.
     */
    string?: string;

    /**
     * Request body binary buffer. This is only present if you intercept the
     * request as:'buffer'. Changes made to this object will be seen by the server.
     */
    buffer?: Buffer;

    /**
     * Simulates slowness during request phase. With this method you can set a minimum
     * latency and/or maximum transfer rate. Since these are minimum/maximum, if your
     * native connection is already slower than these values, this method will have no
     * effect.
     */
    slow(opts: Partial<Slow>): void;

    /**
     * If url is provided, sets the request's absolute protocol, hostname, port and
     * url. Otherwise it returns the absolute URL of this request. This is mainly a
     * convenience method.
     */
    fullUrl(url?: string): string;

    /**
     * Whatever request body gets sent to the server, tee() pipes an identical copy
     * to your writable stream. Your stream is held in memory, and only gets written
     * to if and when the request is sent to the server. In other words, your stream
     * sees whatever the server sees. If the server sees nothing, your stream sees
     * nothing. You can tee() as many times as you want.
     *
     * @param stream - target stream
     */
    tee(stream: Writable): void;
}

export class Response {
    private constructor();

    /**
     * HTTP status code being sent to the client.
     */
    statusCode: number;

    /**
     * HTTP response header name/value JS object. Header names are all-lowercase,
     * such as 'content-type'.
     */
    headers: Record<string, string>;

    /**
     * Response body parsed as DOM. This object is only present if you intercept
     * the response as:'$'. This is a cheerio object, which provides a jQuery-like
     * API. Changes made to it will be seen by the client.
     */
    $?: ReturnType<typeof cheerio>;

    /**
     * Response body parsed as JSON. This is only present if you intercept the
     * response as:'json'. Changes to this object will be seen by the client.
     */
    json?: any;

    /**
     * Response body string. This is only present if you intercept the response
     * as:'string'. Overwriting this will overwrite the response body sent to the
     * client.
     */
    string?: string;

    /**
     * Response body binary buffer. This is only present if you intercept the
     * response as:'buffer'. Changes made to this object will be seen by the client.
     */
    buffer?: Buffer;

    /**
     * Simulates slowness during request phase. With this method you can set a minimum
     * latency and/or maximum transfer rate. Since these are minimum/maximum, if your
     * native connection is already slower than these values, this method will have no
     * effect.
     */
    slow(opts: Partial<Slow>): void;

    /**
     * Whatever request body gets sent to the server, tee() pipes an identical copy
     * to your writable stream. Your stream is held in memory, and only gets written
     * to if and when the request is sent to the server. In other words, your stream
     * sees whatever the server sees. If the server sees nothing, your stream sees
     * nothing. You can tee() as many times as you want.
     *
     * @param stream - target stream
     */
    tee(stream: Writable): void;
}

export type ServeStrategy = 'replace' | 'overlay' | 'mirror';

export interface ServeOptions {
    /**
     * Which file to serve. Defaults to the request URL. Normally this would
     * be used in mutual exclusion with docroot. Strictly speaking, path is
     * always rooted to docroot, which defaults to "/"
     */
    path?: string;

    /**
     * Which local directory to serve out of. Defaults to filesystem root "/"
     */
    docroot?: string;

    /**
     * Mainly relevant when using the docroot option. Describes the relationship
     * between the local docroot and the remote one. Strictly speaking, this
     * controls what happens when the local docroot is missing a requested file.
     * Accepted values:
     * * replace - (default) Replaces the remote docroot with the local one. In
     * other words, if a requested file doesn't exist locally, it populates the
     * response with a 404, even if it would have been found remotely.
     * * overlay - Overlays the local docroot on top of the remote one. In other
     * words, if a requested file doesn't exist locally, the request will
     * transparently fall through to the remote server.
     * * mirror - Automatically mirror the remote docroot locally. In other words,
     * if a requested file doesn't exist locally, it's copied to the local docroot
     * from the remote one, and will be found locally on subsequent requests.
     */
    strategy?: ServeStrategy;
}

/**
 * Represents a whole request/response cycle. A Cycle instance is this in all
 * interceptor calls, and the same instance is shared across an entire
 * request/response cycle. It's also passed as the third argument, in order
 * to support arrow functions. It provides a small number of methods not
 * associated specifically to either the request or response.
 */
export class Cycle {
    private constructor();

    /**
     * Provisions responses from the local filesystem. Generally, the reason you'd do
     * this is to be able to edit those files locally and test them as if they were
     * live on the remote server. This action populates the response object; see
     * response population for more info. The completion of this action is asynchronous,
     * so serve() returns a promise.
     *
     * The returned promise resolves after the response has been populated. There are at
     * least three use cases worth mentioning.
     */
    serve(opts?: string | ServeOptions): Promise<void>;

    /**
     * Stores and retrieves data on a cycle instance. This is useful since the same
     * instance is shared across all interceptors for a given request/response cycle,
     * allowing you to share related data across disparate scopes. With two params this
     * method behaves as a setter, with one param as a getter.
     */
    data(name: string, value?: any): any;
}

export type InterceptionHandler = (this: Proxy, req: Request, res: Response, cycle: Cycle) => Promise<void> | void;

export type LogLevel = 'error' | 'warn' | 'info' | 'debug';

export interface Log {
    level: LogLevel;
    error?: Error;
    message: string;
}

export type LoggerCallbackFunction = (log: Log) => any;

export type PossibleErrorCallback = (err?: Error) => any;

export class Proxy {
    protected constructor(opts: CreateServerOptions);

    /**
     * Starts proxy listening on port. Returns itself.
     * A callback may be provided, to run when the proxy has started listening.
     * This method simply passes its arguments to Node's server.listen() method.
     */
    listen(port: number, callback?: () => void): this;
    listen(port: number, host: string, callback?: () => void): this;
    listen(port: number, host: string, backlog: number, callback?: () => void): this;

    /**
     * This is the entry point for intercepting and operating on requests and responses.
     * This first example intercepts all requests:
     * ```javascript
     * proxy.intercept('request', req => console.log(req.url));
     * ```
     * This is more verbose, but identical to the above:
     * ```javascript
     * proxy.intercept({
     *     phase: 'request'
     * }, function(req, resp, cycle) {
     *     console.log(req.url);
     * });
     * ```
     */
    intercept(opts: string | InterceptOptions, handler: InterceptionHandler): void;

    /**
     * Get/set proxy-level slow options. If options is provided, it's a setter.
     * If options is not provided, it's a getter.
     * @param opts
     */
    slow(opts: Slow): this;

    /**
     * Deals with various logging events.
     *
     * This first example listens for error,
     * warn, and debug logging events, and prints them to stderr:
     * ```javascript
     * proxy.log('error warn debug');
     * ```
     * Or, print logging events to various writable streams:
     * ```javascript
     * proxy.log('error warn debug', process.stderr);
     * proxy.log('info', process.stdout);
     * ```
     *
     * Or, explicitly handle logging event:
     * ```javascript
     * proxy.log('error warn', function(event) {
     *     console.error(event.level + ': ' + event.message);
     *     if (event.error) console.error(event.error.stack);
     * });
     * ```
     */
    log(levels: string, cb?: LoggerCallbackFunction | Writable): this;

    /**
     * Stops proxy receiving requests. Finalizes and/or cleans up any
     * resources the proxy uses internally.
     */
    close(cb?: PossibleErrorCallback): void;
}

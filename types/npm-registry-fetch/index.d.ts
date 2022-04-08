// Type definitions for npm-registry-fetch 8.0
// Project: https://github.com/npm/registry-fetch#readme
// Definitions by: Joel Spadin <https://github.com/ChaosinaCan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import { Response } from 'node-fetch';
import { Readable, Stream } from 'stream';
import { Agent } from 'http';
import { Integrity } from 'ssri';
import { Logger } from 'npmlog';
import * as npa from 'npm-package-arg';

/**
 * Performs a request to a given URL.
 *
 * The URL can be either a full URL, or a path to one. The appropriate registry
 * will be automatically picked if only a URL path is given.
 */
declare function fetch(url: string, opts?: fetch.Options): Promise<Response>;

declare namespace fetch {
    function pickRegistry(spec: string, opts?: Options): string;

    /**
     * Performs a request to a given registry URL, parses the body of the
     * response as JSON, and returns it as its final value. This is a utility
     * shorthand for `fetch(url).then(res => res.json())`.
     */
    function json(url: string, opts?: Options): Promise<Record<string, unknown>>;

    namespace json {
        /**
         * Performs a request to a given registry URL and parses the body of the
         * response as JSON, with each entry being emitted through the stream.
         *
         * The jsonPath argument is a `JSONStream.parse()` path, and the returned
         * stream (unlike default `JSONStreams`), has a valid `Symbol.asyncIterator`
         * implementation.
         */
        function stream(url: string, jsonPath: string, opts?: Options): NodeJS.ReadWriteStream;
    }

    type Options = FetchOptions & FetchRetryOptions & AuthOptions;

    interface AuthOptions {
        'always-auth'?: boolean;
        alwaysAuth?: boolean;
        email?: string;
        /**
         * Password used for basic authentication. For the more modern
         * authentication method, please use the (more secure) `opts.token`
         *
         * Can optionally be scoped to a registry by using a "nerf dart" for
         * that registry. That is:
         *
         * ```typescript
         * {
         * '//registry.npmjs.org/:password': 't0k3nH34r'
         * }
         * ```
         *
         * See also `opts.username`
         */
        password?: string;
        /**
         * Alias for `password`
         */
        _password?: string;
        /**
         * This is a one-time password from a two-factor authenticator. It is
         * required for certain registry interactions when two-factor auth is
         * enabled for a user account.
         */
        otp?: number | string;
        /**
         * Authentication token string.
         *
         * Can be scoped to a registry by using a "nerf dart" for that registry.
         * That is:
         *
         * ```typescript
         * {
         * '//registry.npmjs.org/:token': 't0k3nH34r'
         * }
         * ```
         */
        token?: string;
        /**
         * Alias for `token`.
         */
        _authToken?: string;
        /**
         * Username used for basic authentication. For the more modern
         * authentication method, please use the (more secure) `opts.token`
         *
         * Can optionally be scoped to a registry by using a "nerf dart" for
         * that registry. That is:
         *
         * ```typescript
         * {
         * '//registry.npmjs.org/:username': 't0k3nH34r'
         * }
         * ```
         *
         * See also `opts.password`
         */
        username?: string;
        /**
         * @deprecated
         * This is a legacy authentication token supported only for
         * compatibility. Please use `opts.token` instead.
         */
        _auth?: string;
    }

    interface FetchRetryOptions {
        /**
         * The "retries" config for `retry` to use when fetching packages from
         * the registry.
         *
         * See also `opts.retry` to provide all retry options as a single object.
         */
        fetchRetries?: number;
        /**
         * The "factor" config for `retry` to use when fetching packages.
         *
         * See also `opts.retry` to provide all retry options as a single
         * object.
         */
        fetchRetryFactor?: number;
        /**
         * The "minTimeout" config for `retry` to use when fetching packages.
         *
         * See also `opts.retry` to provide all retry options as a single
         * object.
         */
        fetchRetryMintimeout?: number;
        /**
         * The "maxTimeout" config for `retry` to use when fetching packages.
         *
         * See also `opts.retry` to provide all retry options as a single
         * object.
         */
        fetchRetryMaxtimeout?: number;
    }

    /**
     * Extra options:
     *
     * **<scope>:registry**
     *
     * This option type can be used to configure the registry used for requests
     * involving a particular scope. For example,
     * `opts['@myscope:registry'] = 'https://scope-specific.registry/'` will
     * make it so requests go out to this registry instead of `opts.registry`
     * when `opts.scope` is used, or when `opts.spec` is a scoped package spec.
     *
     * The `@` before the scope name is optional, but recommended.
     *
     * **<registry>:password**
     * @see password
     *
     * **<registry>:token**
     * @see token
     *
     * **<registry>:username**
     * @see username
     */
    interface FetchOptions {
        /**
         * An `Agent` instance to be shared across requests. This allows
         * multiple concurrent fetch requests to happen on the same socket.
         *
         * You do not need to provide this option unless you want something
         * particularly specialized, since proxy configurations and http/https
         * agents are already automatically managed internally when this option
         * is not passed through.
         */
        agent?: Agent;
        /**
         * Request body to send through the outgoing request. Buffers and
         * Streams will be passed through as-is, with a default `content-type`
         * of `application/octet-stream`. Plain JavaScript objects will be
         * `JSON.stringify`ed and the `content-type` will default to
         * `application/json`.
         *
         * Use `opts.headers` to set the content-type to something else.
         */
        body?: Buffer | Stream | object | string;
        /**
         * The Certificate Authority signing certificate that is trusted for SSL
         * connections to the registry. Values should be in PEM format (Windows
         * calls it "Base-64 encoded X.509 (.CER)") with newlines replaced by
         * the string `'\n'`. For example:
         *
         * ```typescript
         * {
         * ca: '-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----'
         * }
         * ```
         *
         * Set to `null` to only allow "known" registrars, or to a specific CA
         * cert to trust only that specific signing authority.
         *
         * Multiple CAs can be trusted by specifying an array of certificates
         * instead of a single string.
         *
         * See also `opts.strictSSL`, `opts.ca` and `opts.key`
         */
        ca?: string | Buffer | Array<string | Buffer> | null;
        /**
         * The location of the http cache directory. If provided, certain
         * cachable requests will be cached according to
         * [IETF RFC 7234](https://tools.ietf.org/html/rfc7234) rules. This will
         * speed up future requests, as well as make the cached data available
         * offline if necessary/requested.
         *
         * See also `offline`, `preferOffline`, and `preferOnline`.
         */
        cache?: string;
        /**
         * A client certificate to pass when accessing the registry. Values
         * should be in PEM format (Windows calls it "Base-64 encoded X.509
         * (.CER)") with newlines replaced by the string `'\n'`. For example:
         *
         * ```typescript
         * {
         * cert: '-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----'
         * }
         * ```
         *
         * It is *not* the path to a certificate file (and there is no "certfile"
         * option).
         *
         * See also: `opts.ca` and `opts.key`
         */
        cert?: string;
        /**
         * If present, other auth-related values in `opts` will be completely
         * ignored, including `alwaysAuth`, `email`, and `otp`, when calculating
         * auth for a request, and the auth details in `opts.forceAuth` will be
         * used instead.
         */
        forceAuth?: Partial<AuthOptions>;
        /**
         * If true, `npm-registry-fetch` will set the `Content-Encoding` header
         * to `gzip` and use `zlib.gzip()` or `zlib.createGzip()` to gzip-encode
         * `opts.body`.
         */
        gzip?: boolean;
        /**
         * Additional headers for the outgoing request. This option can also be
         * used to override headers automatically generated by
         * `npm-registry-fetch`, such as `Content-Type`.
         */
        headers?: Record<string, string>;
        /**
         * If true, the response body will be thrown away and `res.body` set to
         * `null`. This will prevent dangling response sockets for requests
         * where you don't usually care what the response body is.
         */
        ignoreBody?: boolean;
        /**
         * If provided, the response body's will be verified against this
         * integrity string, using [`ssri`](https://npm.im/ssri). If
         * verification succeeds, the response will complete as normal. If
         * verification fails, the response body will error with an `EINTEGRITY`
         * error.
         *
         * Body integrity is only verified if the body is actually consumed to
         * completion -- that is, if you use `res.json()`/`res.buffer()`, or if
         * you consume the default `res` stream data to its end.
         *
         * Cached data will have its integrity automatically verified using the
         * previously-generated integrity hash for the saved request
         * information, so `EINTEGRITY` errors can happen if `opts.cache` is
         * used, even if `opts.integrity` is not passed in.
         */
        integrity?: string | Integrity;
        /**
         * This is used to populate the `npm-in-ci` request header sent to the
         * registry.
         */
        isFromCI?: boolean;
        /**
         * A client key to pass when accessing the registry. Values should be in
         * PEM format with newlines replaced by the string `'\n'`. For example:
         *
         * ```typescript
         * {
         * key: '-----BEGIN PRIVATE KEY-----\nXXXX\nXXXX\n-----END PRIVATE KEY-----'
         * }
         * ```
         *
         * It is *not* the path to a key file (and there is no "keyfile"
         * option).
         *
         * See also: `opts.ca` and `opts.cert`
         */
        key?: string;
        /**
         * The IP address of the local interface to use when making connections
         * to the registry.
         *
         * See also `opts.proxy`
         */
        localAddress?: string;
        /**
         * Logger object to use for logging operation details.
         */
        log?: Logger;
        /**
         * When using `fetch.json.stream()` (NOT `fetch.json()`), this will be
         * passed down to `JSONStream` as the second argument to
         * `JSONStream.parse`, and can be used to transform stream data before
         * output.
         */
        mapJSON?: (v: any) => any;
        /**
         * Maximum number of sockets to keep open during requests. Has no effect
         * if `opts.agent` is used.
         */
        maxSockets?: number;
        /**
         * HTTP method to use for the outgoing request. Case-insensitive.
         */
        method?: string;
        /**
         * If true, proxying will be disabled even if `opts.proxy` is used.
         */
        noproxy?: boolean;
        /**
         * If provided, will be sent in the `npm-session` header. This header is
         * used by the npm registry to identify individual user sessions
         * (usually individual invocations of the CLI).
         */
        npmSession?: string;
        /**
         * Force offline mode: no network requests will be done during install.
         * To allow `npm-registry-fetch` to fill in missing cache data, see
         * `opts.preferOffline`.
         *
         * This option is only really useful if you're also using `opts.cache`.
         */
        offline?: boolean;
        /**
         * If true, staleness checks for cached data will be bypassed, but
         * missing data will be requested from the server. To force full offline
         * mode, use `opts.offline`.
         *
         * This option is generally only useful if you're also using `opts.cache`.
         */
        preferOffline?: boolean;
        /**
         * If true, staleness checks for cached data will be forced, making the
         * CLI look for updates immediately even for fresh package data.
         *
         * This option is generally only useful if you're also using `opts.cache`.
         */
        preferOnline?: boolean;
        /**
         * If provided, will be sent in the npm-scope header. This header is
         * used by the npm registry to identify the toplevel package scope that
         * a particular project installation is using.
         */
        projectScope?: string;
        /**
         * A proxy to use for outgoing http requests. If not passed in, the
         * `HTTP(S)_PROXY` environment variable will be used.
         */
        proxy?: string;
        /**
         * If provided, the request URI will have a query string appended to it
         * using this query. If `opts.query` is an object, it will be converted
         * to a query string using [`querystring.stringify()`](https://nodejs.org/api/querystring.html#querystring_querystring_stringify_obj_sep_eq_options).
         *
         * If the request URI already has a query string, it will be merged with
         * `opts.query`, preferring `opts.query` values.
         */
        query?: string | object;
        /**
         * Registry configuration for a request. If a request URL only includes
         * the URL path, this registry setting will be prepended. This
         * configuration is also used to determine authentication details, so
         * even if the request URL references a completely different host,
         * `opts.registry` will be used to find the auth details for that
         * request.
         *
         * See also `opts.scope`, `opts.spec`, and `opts.<scope>:registry` which
         * can all affect the actual registry URL used by the outgoing request.
         */
        registry?: string;
        /**
         * Single-object configuration for request retry settings. If passed in,
         * will override individually-passed `fetchRetry*` settings.
         */
        retry?: Partial<FetchRetryOptions>;
        /**
         * Associate an operation with a scope for a scoped registry. This
         * option can force lookup of scope-specific registries and
         * authentication.
         *
         * See also `opts.<scope>:registry` and `opts.spec` for interactions
         * with this option.
         */
        scope?: string;
        /**
         * If provided, can be used to automatically configure `opts.scope`
         * based on a specific package name. Non-registry package specs will
         * throw an error.
         */
        spec?: string | npa.Result;
        /**
         * Whether or not to do SSL key validation when making requests to the
         * registry via https.
         *
         * See also `opts.ca`.
         */
        strictSSL?: boolean;
        /**
         * Time before a hanging request times out.
         */
        timeout?: number;
        /**
         * User agent string to send in the `User-Agent` header.
         */
        userAgent?: string;

        [key: string]: any;
    }
}

export = fetch;

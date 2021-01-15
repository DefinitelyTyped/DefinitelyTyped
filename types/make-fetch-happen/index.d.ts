// Type definitions for make-fetch-happen 8.0
// Project: https://github.com/npm/make-fetch-happen#readme
// Definitions by: Jesse Rosenberger <https://github.com/abernix>
//                 Trevor Scheer <https://github.com/trevor-scheer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
/// <reference lib="dom" />
import { ClientRequestArgs, AgentOptions } from 'http';
import { CommonConnectionOptions, SecureContextOptions } from 'tls';
import { URL as NodeURL } from 'url';

import { RequestInit, Response } from 'node-fetch';
import { Integrity } from 'ssri';
import { TimeoutsOptions } from 'retry';

export = fetch;

// The `const` and the `namespace` by the same name will be merged into the
// default export using `esModuleInterop`, which is necessitated by
// `make-fetch-happen`'s use of the `module.exports` pattern.
declare const fetch: fetch.FetchInterface;
declare namespace fetch {
    type NodeFetchOptions = Pick<
        RequestInit,
        'method' | 'body' | 'redirect' | 'follow' | 'timeout' | 'compress' | 'size' | 'headers' | 'agent'
    >;

    type TlsOptions = Pick<SecureContextOptions, 'ca' | 'cert' | 'key'> & {
        strictSSL?: CommonConnectionOptions['rejectUnauthorized'];
    };

    interface MakeFetchHappenOptions {
        /**
         * Either a `String` or a `Cache`. If the former, it will be assumed to
         * be a `Path` to be used as the cache root for
         * [`cacache`](https://npm.im/cacache).
         *
         * If an object is provided, it will be assumed to be a compliant
         * [`Cache`
         * instance](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
         * Only `Cache.match()`, `Cache.put()`, and `Cache.delete()` are
         * required. Options objects will not be passed in to `match()` or
         * `delete()`.
         *
         * By implementing this API, you can customize the storage backend for
         * make-fetch-happen itself -- for example, you could implement a cache
         * that uses `redis` for caching, or simply keeps everything in memory.
         * Most of the caching logic exists entirely on the make-fetch-happen
         * side, so the only thing you need to worry about is reading, writing,
         * and deleting, as well as making sure `fetch.Response` objects are
         * what gets returned.
         *
         * Ref: https://github.com/npm/make-fetch-happen/#--optscachemanager
         */
        cacheManager?: string | Cache;

        cache?: RequestCache;
        proxy?: string | NodeURL | URL;

        /**
         * If present, should be a comma-separated string or an array of domain
         * extensions that a proxy should _not_ be used for.
         *
         * This option may also be provided through `process.env.NO_PROXY`.
         */
        noProxy?: string | string[];

        /**
         * Passed directly to `http` and `https` request calls. Determines the
         * local address to bind to.
         */
        localAddress?: ClientRequestArgs['localAddress'];

        /**
         * Maximum number of active concurrent sockets to use for the underlying
         * Http/Https/Proxy agents. This setting applies once per spawned agent.
         */
        maxSockets?: AgentOptions['maxSockets'];

        /**
         * An object that can be used to tune request retry settings. Retries
         * will only be attempted on the following conditions:
         *
         * - Request method is NOT `POST`; **AND**
         * - Request status is one of: `408`, `420`, `429`, or any status in the
         *   500-range.; **OR**
         * - Request errored with `ECONNRESET`, `ECONNREFUSED`, `EADDRINUSE`,
         *   `ETIMEDOUT`, or the `fetch` error `request-timeout`.
         *
         * The following are worth noting as explicitly not retried:
         *
         * - `getaddrinfo ENOTFOUND` and will be assumed to be either an
         *   unreachable domain or the user will be assumed offline. If a
         *   response is cached, it will be returned immediately.
         * - `ECONNRESET` currently has no support for restarting. It will
         *   eventually be supported but requires a bit more juggling due to
         *   streaming.
         *
         * If `opts.retry` is `false`, it is equivalent to `{retries: 0}`
         *
         * If `opts.retry` is a number, it is equivalent to `{retries: num}`
         *
         * The following retry options are available if you want more control
         * over it:
         *
         * - `retries`
         * - `factor`
         * - `minTimeout`
         * - `maxTimeout`
         * - `randomize`
         *
         * For details on what each of these do, refer to the
         * [`retry`](https://npm.im/retry) documentation.
         */

        retry?: boolean | number | TimeoutsOptions;

        /**
         * A function called whenever a retry is attempted.
         */
        onRetry?: () => void;

        /**
         * Matches the response body against the given [Subresource
         * Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)
         * metadata. If verification fails, the request will fail with an
         * `EINTEGRITY` error.
         *
         * `integrity` may either be a string or an
         * [`ssri`](https://npm.im/ssri) `Integrity`-like.
         */
        integrity?: string | Integrity;
    }

    type FetchOptions = NodeFetchOptions & TlsOptions & MakeFetchHappenOptions;

    interface FetchInterface {
        prototype: FetchInterface;
        (uriOrRequest: string | Request, opts?: FetchOptions): Promise<Response>;
        (opts: FetchOptions): Promise<Response>;
        defaults(uri: string, opts?: FetchOptions): FetchInterface;
        defaults(opts?: FetchOptions): FetchInterface;
        delete(uri: string, opts?: FetchOptions): ReturnType<Cache['delete']>;
    }
}

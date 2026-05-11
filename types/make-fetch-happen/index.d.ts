/// <reference lib="dom" />
import { AgentOptions, ClientRequestArgs } from "http";
import { SecureContextOptions } from "tls";
import { URL as NodeURL } from "url";

import { RequestInit, Response } from "node-fetch";
import { TimeoutsOptions } from "retry";
import { Integrity } from "ssri";

export = fetch;

// The `const` and the `namespace` by the same name will be merged into the
// default export using `esModuleInterop`, which is necessitated by
// `make-fetch-happen`'s use of the `module.exports` pattern.
declare const fetch: fetch.FetchInterface;
declare namespace fetch {
    type NodeFetchOptions = Pick<
        RequestInit,
        "method" | "body" | "redirect" | "follow" | "timeout" | "compress" | "size" | "headers" | "agent"
    >;

    type TlsOptions = Pick<SecureContextOptions, "ca" | "cert" | "key"> & {
        strictSSL?: boolean | undefined;
    };

    interface MakeFetchHappenOptions {
        /**
         * A string `Path` to be used as the cache root for [`cacache`](https://npm.im/cacache).
         *
         * Ref: https://github.com/npm/make-fetch-happen/#opts-cache-path
         */
        cachePath?: string | undefined;

        cache?: RequestCache | undefined;
        proxy?: string | NodeURL | URL | undefined;

        /**
         * If present, should be a comma-separated string or an array of domain
         * extensions that a proxy should _not_ be used for.
         *
         * This option may also be provided through `process.env.NO_PROXY`.
         */
        noProxy?: string | string[] | undefined;

        /**
         * Passed directly to `http` and `https` request calls. Determines the
         * local address to bind to.
         */
        localAddress?: ClientRequestArgs["localAddress"] | undefined;

        /**
         * Maximum number of active concurrent sockets to use for the underlying
         * Http/Https/Proxy agents. This setting applies once per spawned agent.
         */
        maxSockets?: AgentOptions["maxSockets"] | undefined;

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

        retry?: boolean | number | TimeoutsOptions | undefined;

        /**
         * A function called whenever a retry is attempted.
         */
        onRetry?: ((cause: unknown) => void) | undefined;

        /**
         * Matches the response body against the given [Subresource
         * Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)
         * metadata. If verification fails, the request will fail with an
         * `EINTEGRITY` error.
         *
         * `integrity` may either be a string or an
         * [`ssri`](https://npm.im/ssri) `Integrity`-like.
         */
        integrity?: string | Integrity | undefined;
    }

    type FetchOptions = NodeFetchOptions & TlsOptions & MakeFetchHappenOptions;

    interface FetchInterface {
        prototype: FetchInterface;
        (uriOrRequest: string | Request, opts?: FetchOptions): Promise<Response>;
        (opts: FetchOptions): Promise<Response>;
        defaults(uri: string, opts?: FetchOptions): FetchInterface;
        defaults(opts?: FetchOptions): FetchInterface;
        delete(uri: string, opts?: FetchOptions): ReturnType<Cache["delete"]>;
    }
}

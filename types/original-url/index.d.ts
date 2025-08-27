/// <reference types="node" />

import { IncomingMessage } from "http";

export = originalUrl;

/**
 * Reconstruct the original URL used in an HTTP request based on the HTTP
 * request headers.
 *
 * The module takes into account potential URL rewrites made by proxies,
 * load balancers, etc along the way (as long as these append special HTTP
 * headers to the request).
 *
 * Supported HTTP headers:
 *
 * - `Host`
 * - `Forwarded`
 * - `X-Forwarded-Proto`
 * - `X-Forwarded-Protocol`
 * - `X-Url-Scheme`
 * - `Front-End-Https`
 * - `X-Forwarded-Ssl`
 * - `X-Forwarded-Host`
 * - `X-Forwarded-Port`
 *
 * If the protocol (http vs https) cannot be determined based on the above
 * headers, the `encrypted` flag on the TLS connection is used.
 *
 * @example
 * import * as http from 'http'
 * import originalUrl = require('original-url')
 *
 * const server = http.createServer((req, res) => {
 *   const url = originalUrl(req)
 *   if (url.full) {
 *     res.end(`Original URL: ${url.full}\n`)
 *   } else {
 *     res.end('Original URL could not be determined\n')
 *   }
 * })
 *
 * server.listen(1337)
 */
declare function originalUrl(req: IncomingMessage): originalUrl.OriginalUrl;

declare namespace originalUrl {
    interface OriginalUrl {
        raw: string | undefined;
        protocol: string;
        hostname: string | undefined;
        port?: number | undefined;
        pathname?: string | undefined;
        search?: string | undefined;
        hash?: string | undefined;
        /** The fully resolved URL. */
        full?: string | undefined;
    }
}

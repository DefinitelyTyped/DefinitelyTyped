// Type definitions for is-reachable 3.0
// Project: https://github.com/sindresorhus/is-reachable#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isReachable;

/**
 * Check if servers are reachable.
 *
 * The Node.js version will do a TCP handshake with the target's port. It attempts to detect cases where a router
 * redirects the request to itself.
 *
 * The browser version is limited by the fact that browsers cannot connect to arbitrary ports. It only supports
 * HTTP and HTTPS and the check relies on the `/favicon.ico` path being present.
 *
 * @param targets One or more targets to check. Can either be a full [URL](https://nodejs.org/api/url.html)
 * like `https://hostname`, `hostname:port` or just `hostname`. When the protocol is missing from a target
 * `http` is assumed.
 *
 * [Well-known protocols](http://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)
 * are supported (e.g. `ftp://`, `mysql://`, `redis://` and more).
 *
 * @returns A `Promise` for a `boolean` which is `true` if any of the `targets` are reachable.
 */
declare function isReachable(
    targets: string | string[],
    options?: isReachable.Options
): Promise<boolean>;

declare namespace isReachable {
    interface Options {
        /**
         * Timeout in milliseconds after which a request is considered failed.
         * @default 5000
         */
        timeout?: number;
    }
}

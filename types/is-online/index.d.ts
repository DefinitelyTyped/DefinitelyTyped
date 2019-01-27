// Type definitions for is-online 8.0
// Project: https://github.com/sindresorhus/is-online#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = isOnline;

/**
 * Check if the internet connection is up.
 *
 * The following checks are run in parallel:
 * - Retrieve [icanhazip.com](https://github.com/major/icanhaz) via HTTPS
 * - Query `myip.opendns.com` on OpenDNS (Node.js only)
 * - Retrieve Apple's Captive Portal test page (Node.js only)
 *
 * When the first check succeeds, the returned Promise is resolved to `true`.
 */
declare function isOnline(options?: isOnline.Options): Promise<boolean>;

declare namespace isOnline {
    interface Options {
        /**
         * Milliseconds to wait for a server to respond.
         * @default 5000
         */
        timeout?: number;
        /**
         * Internet Protocol version to use. This is an advanced option that is usually not necessary to be set,
         * but it can prove useful to specifically assert IPv6 connectivity.
         * @default 'v4'
         */
        version?: 'v4' | 'v6';
    }
}

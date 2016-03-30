// Type definitions for cookie-parser v0.5.1
// Project: https://github.com/pillarjs/cookies
// Definitions by: Wang Zishi <https://github.com/WangZishi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "cookies" {
    import * as http from "http"

    namespace cookies {
        interface ICookies {
            /**
             * This extracts the cookie with the given name from the
             * Cookie header in the request. If such a cookie exists,
             * its value is returned. Otherwise, nothing is returned.
             */
            get(name: string): string;
            /**
             * This extracts the cookie with the given name from the
             * Cookie header in the request. If such a cookie exists,
             * its value is returned. Otherwise, nothing is returned.
             */
            get(name: string, opts: IOptions): string;

            /**
             * This sets the given cookie in the response and returns
             * the current context to allow chaining.If the value is omitted,
             * an outbound header with an expired date is used to delete the cookie.
             */
            set(name: string, value: string): ICookies;
            /**
             * This sets the given cookie in the response and returns
             * the current context to allow chaining.If the value is omitted,
             * an outbound header with an expired date is used to delete the cookie.
             */
            set(name: string, value: string, opts: IOptions): ICookies;
        }

        interface IOptions {
            /**
             * a number representing the milliseconds from Date.now() for expiry
             */
            maxAge?: number;
            /**
             * a Date object indicating the cookie's expiration
             * date (expires at the end of session by default).
             */
            expires?: Date;
            /**
             * a string indicating the path of the cookie (/ by default).
             */
            path?: string;
            /**
             * a string indicating the domain of the cookie (no default).
             */
            domain?: string;
            /**
             * a boolean indicating whether the cookie is only to be sent
             * over HTTPS (false by default for HTTP, true by default for HTTPS).
             */
            secure?: boolean;
            /**
             * a boolean indicating whether the cookie is only to be sent
             * over HTTPS (use this if you handle SSL not in your node process).
             */
            secureProxy?: boolean;
            /**
             * a boolean indicating whether the cookie is only to be sent over HTTP(S),
             * and not made available to client JavaScript (true by default).
             */
            httpOnly?: boolean;
            /**
             * a boolean indicating whether the cookie is to be signed (false by default).
             * If this is true, another cookie of the same name with the .sig suffix
             * appended will also be sent, with a 27-byte url-safe base64 SHA1 value
             * representing the hash of cookie-name=cookie-value against the first Keygrip key.
             * This signature key is used to detect tampering the next time a cookie is received.
             */
            signed?: boolean;
            /**
             * a boolean indicating whether to overwrite previously set
             * cookies of the same name (false by default). If this is true,
             * all cookies set during the same request with the same
             * name (regardless of path or domain) are filtered out of
             * the Set-Cookie header when setting this cookie.
             */
            overwrite?: boolean;
        }
    }

    interface CookiesStatic {
        new (request: http.IncomingMessage, response: http.ServerResponse): cookies.ICookies;
        new (request: http.IncomingMessage, response: http.ServerResponse, keys?: Array<string>): cookies.ICookies;
    }

    const cookies: CookiesStatic;

    export = cookies
}

// Type definitions for set-cookie-parser 2.4
// Project: https://github.com/nfriedly/set-cookie-parser
// Definitions by: Nick Paddock <https://github.com/nickp10>
//                 Singlebyted <https://github.com/singlebyted>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

import { IncomingMessage } from 'http';
import http = require('http');

/**
 * Parses set-cookie headers into objects
 */
declare function parse(
    input: string | ReadonlyArray<string> | IncomingMessage,
    options: parse.Options & { map: true },
): parse.CookieMap;
declare function parse(
    input: string | ReadonlyArray<string> | IncomingMessage,
    options?: parse.Options & { map?: false | undefined },
): parse.Cookie[];
declare function parse(
    input: string | ReadonlyArray<string> | IncomingMessage,
    options?: parse.Options,
): parse.Cookie[] | parse.CookieMap;

declare namespace parse {
    function parse(
        input: string | ReadonlyArray<string> | IncomingMessage,
        options: Options & { map: true },
    ): CookieMap;
    function parse(
        input: string | ReadonlyArray<string> | IncomingMessage,
        options?: Options & { map?: false | undefined },
    ): Cookie[];
    function parse(input: string | ReadonlyArray<string> | IncomingMessage, options?: Options): Cookie[] | CookieMap;

    /**
     * Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
     * that are within a single set-cookie field-value, such as in the Expires portion.
     * This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
     * Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
     * React Native's fetch does this for *every* header, including set-cookie.
     * Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
     * Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
     */
    function splitCookiesString(input: string | ReadonlyArray<string> | undefined): string[];

    /**
     * Parses a single set-cookie header value string.
     * Options default is `{decodeValues: true}`. Used under-the-hood by `parse()`
     */
    function parseString(individualSetCookieHeader: string, options?: Options): Cookie;

    interface Cookie {
        /**
         * cookie name
         */
        name: string;
        /**
         * cookie value
         */
        value: string;
        
        /**
         * Specifies the value for the {@link https://tools.ietf.org/html/rfc6265#section-5.2.3|Domain Set-Cookie attribute}. By default, no
         * domain is set, and most clients will consider the cookie to apply to only
         * the current domain.
         */
        domain?: string;

        /**
         * Specifies the `Date` object to be the value for the {@link https://tools.ietf.org/html/rfc6265#section-5.2.1|`Expires` `Set-Cookie` attribute}. By default,
         * no expiration is set, and most clients will consider this a "non-persistent cookie" and will delete
         * it on a condition like exiting a web browser application.
         *
         * *Note* the {@link https://tools.ietf.org/html/rfc6265#section-5.3|cookie storage model specification}
         * states that if both `expires` and `maxAge` are set, then `maxAge` takes precedence, but it is
         * possible not all clients by obey this, so if both are set, they should
         * point to the same date and time.
         */
        expires?: Date;
        
        /**
         * Specifies the boolean value for the {@link https://tools.ietf.org/html/rfc6265#section-5.2.6|`HttpOnly` `Set-Cookie` attribute}.
         * When truthy, the `HttpOnly` attribute is set, otherwise it is not. By
         * default, the `HttpOnly` attribute is not set.
         *
         * *Note* be careful when setting this to true, as compliant clients will
         * not allow client-side JavaScript to see the cookie in `document.cookie`.
         */
        httpOnly?: boolean;
        
        /**
         * Specifies the number (in seconds) to be the value for the `Max-Age`
         * `Set-Cookie` attribute. The given number will be converted to an integer
         * by rounding down. By default, no maximum age is set.
         *
         * *Note* the {@link https://tools.ietf.org/html/rfc6265#section-5.3|cookie storage model specification}
         * states that if both `expires` and `maxAge` are set, then `maxAge` takes precedence, but it is
         * possible not all clients by obey this, so if both are set, they should
         * point to the same date and time.
         */
        maxAge?: number;
        
        /**
         * Specifies the value for the {@link https://tools.ietf.org/html/rfc6265#section-5.2.4|`Path` `Set-Cookie` attribute}.
         * By default, the path is considered the "default path".
         */
        path?: string;
        
        /**
         * Specifies the boolean or string to be the value for the {@link https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7|`SameSite` `Set-Cookie` attribute}.
         *
         * - `true` will set the `SameSite` attribute to `Strict` for strict same
         * site enforcement.
         * - `false` will not set the `SameSite` attribute.
         * - `'lax'` will set the `SameSite` attribute to Lax for lax same site
         * enforcement.
         * - `'strict'` will set the `SameSite` attribute to Strict for strict same
         * site enforcement.
         *  - `'none'` will set the SameSite attribute to None for an explicit
         *  cross-site cookie.
         *
         * More information about the different enforcement levels can be found in {@link https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7|the specification}.
         *
         * *note* This is an attribute that has not yet been fully standardized, and may change in the future. This also means many clients may ignore this attribute until they understand it.
         */
        
        sameSite?: true | false | 'lax' | 'strict' | 'none';
        /**
         * Specifies the boolean value for the {@link https://tools.ietf.org/html/rfc6265#section-5.2.5|`Secure` `Set-Cookie` attribute}. When truthy, the
         * `Secure` attribute is set, otherwise it is not. By default, the `Secure` attribute is not set.
         *
         * *Note* be careful when setting this to `true`, as compliant clients will
         * not send the cookie back to the server in the future if the browser does
         * not have an HTTPS connection.
         */
        secure?: boolean;
    }

    interface CookieMap {
        [name: string]: Cookie;
    }

    interface Options {
        /**
         * Calls dcodeURIComponent on each value
         * @default true
         */
        decodeValues?: boolean | undefined;
        /**
         * Return an object instead of an array
         * @default false
         */
        map?: boolean | undefined;
        /**
         * Suppress the warning that is loged when called on a request instead of a response
         * @default false
         */
        silent?: boolean | undefined;
    }
}

export = parse;

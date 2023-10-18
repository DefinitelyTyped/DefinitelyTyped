/// <reference types="node" />
import * as connect from "connect";
import * as express from "express";
import { IncomingMessage, ServerResponse } from "http";
import * as Keygrip from "keygrip";

interface Cookies {
    secure: boolean;
    request: IncomingMessage;
    response: ServerResponse;

    /**
     * This extracts the cookie with the given name from the
     * Cookie header in the request. If such a cookie exists,
     * its value is returned. Otherwise, nothing is returned.
     */
    get(name: string, opts?: Cookies.GetOption): string | undefined;

    /**
     * This sets the given cookie in the response and returns
     * the current context to allow chaining.If the value is omitted,
     * an outbound header with an expired date is used to delete the cookie.
     */
    set(name: string, value?: string | null, opts?: Cookies.SetOption): this;
}

declare namespace Cookies {
    /**
     * for backward-compatibility
     */
    type ICookies = Cookies;
    /**
     * for backward-compatibility
     */
    type IOptions = SetOption;

    interface Option {
        keys?: string[] | Keygrip | undefined;
        secure?: boolean | undefined;
    }

    interface GetOption {
        signed: boolean;
    }

    interface SetOption {
        /**
         * a number representing the milliseconds from Date.now() for expiry
         */
        maxAge?: number | undefined;
        /**
         * a Date object indicating the cookie's expiration
         * date (expires at the end of session by default).
         */
        expires?: Date | undefined;
        /**
         * a string indicating the path of the cookie (/ by default).
         */
        path?: string | undefined;
        /**
         * a string indicating the domain of the cookie (no default).
         */
        domain?: string | undefined;
        /**
         * a boolean indicating whether the cookie is only to be sent
         * over HTTPS (false by default for HTTP, true by default for HTTPS).
         */
        secure?: boolean | undefined;
        /**
         * "secureProxy" option is deprecated; use "secure" option, provide "secure" to constructor if needed
         */
        secureProxy?: boolean | undefined;
        /**
         * a boolean indicating whether the cookie is only to be sent over HTTP(S),
         * and not made available to client JavaScript (true by default).
         */
        httpOnly?: boolean | undefined;
        /**
         * a boolean or string indicating whether the cookie is a "same site" cookie (false by default).
         * This can be set to 'strict', 'lax', or true (which maps to 'strict').
         */
        sameSite?: "strict" | "lax" | "none" | boolean | undefined;
        /**
         * a boolean indicating whether the cookie is to be signed (false by default).
         * If this is true, another cookie of the same name with the .sig suffix
         * appended will also be sent, with a 27-byte url-safe base64 SHA1 value
         * representing the hash of cookie-name=cookie-value against the first Keygrip key.
         * This signature key is used to detect tampering the next time a cookie is received.
         */
        signed?: boolean | undefined;
        /**
         * a boolean indicating whether to overwrite previously set
         * cookies of the same name (false by default). If this is true,
         * all cookies set during the same request with the same
         * name (regardless of path or domain) are filtered out of
         * the Set-Cookie header when setting this cookie.
         */
        overwrite?: boolean | undefined;
    }

    type CookieAttr = SetOption;

    interface Cookie {
        name: string;
        value: string;
        /**
         * "maxage" is deprecated, use "maxAge" instead
         */
        maxage: number;
        maxAge: number;
        expires: Date;
        path: string;
        domain: string;
        secure: boolean;
        httpOnly: boolean;
        sameSite: boolean;
        overwrite: boolean;

        toString(): string;
        toHeader(): string;
    }
}

interface CookiesFunction {
    (request: IncomingMessage, response: ServerResponse, options?: Cookies.Option): Cookies;
    /**
     * "options" array of key strings is deprecated, provide using options {"keys": keygrip}
     */
    (request: IncomingMessage, response: ServerResponse, options: string[]): Cookies;
    /**
     * "options" instance of Keygrip is deprecated, provide using options {"keys": keygrip}
     */
    // tslint:disable-next-line:unified-signatures
    (request: IncomingMessage, response: ServerResponse, options: Keygrip): Cookies;

    new(request: IncomingMessage, response: ServerResponse, options?: Cookies.Option): Cookies;
    /**
     * "options" array of key strings is deprecated, provide using options {"keys": keygrip}
     */
    new(request: IncomingMessage, response: ServerResponse, options: string[]): Cookies;
    /**
     * "options" instance of Keygrip is deprecated, provide using options {"keys": keygrip}
     */
    // tslint:disable-next-line:unified-signatures
    new(request: IncomingMessage, response: ServerResponse, options: Keygrip): Cookies;

    Cookie: {
        new(name: string, value?: string, attrs?: Cookies.CookieAttr): Cookies.Cookie;
    };

    express(keys: string[] | Keygrip): express.Handler;
    connect(keys: string[] | Keygrip): connect.NextHandleFunction;
}

declare const Cookies: CookiesFunction;

export = Cookies;

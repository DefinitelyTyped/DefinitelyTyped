// Type definitions for angular-cookie v4.1.0
// Project: https://github.com/ivpusic/angular-cookie
// Definitions by: Borislav Zhivkov <https://github.com/borislavjivkov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

declare namespace angular.cookie {
    interface CookieService {
        /**
         * Get all cookies
         */
        (): any;

        /**
         * Get a cookie with a specific key
         */
        (key: string): any;

        /**
         * Create a cookie
         */
        (key: string, value: any, options?: CookieOptions): any;

        /**
         * Remove a cookie
         */
        remove(key: string, options?: CookieOptions): void;
    }

    interface CookieOptions {
        /**
         * The domain tells the browser to which domain the cookie should be sent. If you don't specify it, it becomes the domain of the page that sets the cookie.
         */
        domain?: string;

        /**
         * The path gives you the chance to specify a directory where the cookie is active.
         */
        path?: string;

        /**
         * Each cookie has an expiry date after which it is trashed. If you don't specify the expiry date the cookie is trashed when you close the browser.
         */
        expires?: number;

        /**
         * Allows you to set the expiration time in hours, minutes, seconds, or `milliseconds. If this is not specified, any expiration time specified will default to days.
         */
        expirationUnit?: string;

        /**
         * The Secure attribute is meant to keep cookie communication limited to encrypted transmission, directing browsers to use cookies only via secure/encrypted connections.
         */
        secure?: boolean;

        /**
         * The method that will be used to encode the cookie value (should be passed when using Set).
         */
        encode?: (value: any) => any;

        /**
         * The method that will be used to decode extracted cookie values (should be passed when using Get).
         */
        decode?: (value: any) => any;
    }
}

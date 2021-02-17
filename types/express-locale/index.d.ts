// Type definitions for express-locale 2.0
// Project: https://github.com/smhg/express-locale#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import express = require('express');
import { RequestHandler, Request } from 'express';

declare module 'express-serve-static-core' {
    interface Request {
        locale: locale.Locale;
    }
}

/**
 * Express middleware to determine the locale identifier of the incomming request.
 * It returns (only) full locale identifiers based on the middleware's configuration.
 * Configuration defines possible sources, their order and, optionally, a whitelist.
 * For performance reasons, on each request, remaining lookups are ignored as soon as a match is found.
 */
declare function locale(options?: locale.Options): RequestHandler;

declare namespace locale {
    /**
     * @see {@link https://github.com/smhg/express-locale/#configuration}
     */
    interface Options {
        /**
         * Defines the order of lookups.
         * The first lookup to return a full locale will be the final result.
         * @default ['accept-language', 'default']
         */
        priority?: string[];

        /**
         * Add custom lookups or overwrite the default ones
         * @default undefined
         */
        lookups?: {
            [key: string]: (req: Request) => string;
        };

        /**
         * The name of the cookie that contains the locale for the cookie lookup.
         *
         * Use with {@link https://github.com/expressjs/cookie-parser|cookie-parser} middleware.
         *
         * Note: you are responsible for writing the locale to the cookie.
         *
         * @default {name: 'locale'}
         */
        cookie?: {
            [key: string]: unknown;
        };

        /**
         * The name of the query string parameter that contains the locale for the query lookup.
         * @default {name: 'locale'}
         */
        query?: {
            [key: string]: unknown;
        };

        /**
         * A mapping of hostnames to locales for the hostname lookup.
         * @default {}
         */
        hostname?: {
            [locale: string]: string;
        };

        /**
         * Maps lookup results that return only a language to a full locale.
         * @default {}
         */
        map?: {
            [language: string]: string;
        };

        /**
         * The default locale for the default lookup.
         * @default 'en-GB'
         */
        default?: string;

        /**
         * Lookup results are validated against this list of allowed locales if provided.
         * @default undefined
         */
        allowed?: string[];

        /**
         * By default, the locale is attached to `req.locale` but can be configured with the `requestProperty` option.
         * @default 'locale'
         */
        requestProperty?: string;
    }

    /**
     * The locale property on the request object
     */
    interface Locale {
        source: string;
        language: string;
        region: string;
    }
}

export = locale;

// Type definitions for express-simple-locale 0.3
// Project: https://github.com/n26/express-simple-locale#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import express = require('express');
import { RequestHandler } from 'express';

declare module 'express-serve-static-core' {
    interface Request {
        userLocale: locale.ShortLocale;
    }
}

/**
 * A simple Express middleware to guess the short-locale of a user.
 * It then saves the found locale on the request for further usage.
 */
declare function locale(options?: locale.Options): RequestHandler;

declare namespace locale {
    /**
     * @see {@link https://github.com/n26/express-simple-locale#options}
     */
    interface Options {
        /**
         * the key to save locale to on the request
         * @default 'locale'
         */
        key?: string;
        /**
         * available locales for the app
         * @default []
         */
        supportedLocales?: string[];
        /**
         * locale to fallback to
         * @default 'en'
         */
        defaultLocale?: string;
        /**
         * cookie to try getting the locale from
         * @default 'locale'
         */
        cookieName?: string;
        /**
         * the query parameter(s) to look the locale from
         * @default ['locale']
         */
        queryParams?: string | string[];
    }

    /** The short-locale of a user */
    type ShortLocale = string;
}

export = locale;

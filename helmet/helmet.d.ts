// Type definitions for helmet
// Project: https://github.com/helmetjs/helmet
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "helmet" {
    import express = require("express");

    /**
     * @summary Interface for helmet class.
     * @interface
     */
    interface Helmet {
        /**
         * @summary Constructor.
         * @return {RequestHandler} The Request handler.
         */
        ():express.RequestHandler;

        /**
         * @summary Prevent clickjacking.
         * @param {string} header The header.
         * @return {RequestHandler} The Request handler.
         */
        frameguard(header ?: string):express.RequestHandler;

        /**
         * @summary Hide "X-Powered-By" header.
         * @param {Object} options The options.
         * @return {RequestHandler} The Request handler.
         */
        hidePoweredBy(options ?: Object):express.RequestHandler;

        /**
         * @summary Adds the "Strict-Transport-Security" header.
         * @param {Object} options The options.
         * @return {RequestHandler} The Request handler.
         */
        hsts(options ?: Object):express.RequestHandler;

        /**
         * @summary Add the "X-Download-Options" header.
         * @return {RequestHandler} The Request handler.
         */
        ieNoOpen():express.RequestHandler;

        /**
         * @summary Add the "Cache-Control" and "Pragma" headers to stop caching.
         * @return {RequestHandler} The Request handler.
         */
        noCache(options ?: Object):express.RequestHandler;

        /**
         * @summary Adds the "X-Content-Type-Options" header.
         * @return {RequestHandler} The Request handler.
         */
        noSniff():express.RequestHandler;

        /**
         * @summary Adds the "Public-Key-Pins" header.
         * @return {RequestHandler} The Request handler.
         */
        publicKeyPins(options ?: Object):express.RequestHandler;

        /**
         * @summary Prevent Cross-site scripting attacks.
         * @return {RequestHandler} The Request handler.
         * @param {Object} options The options.
         */
        xssFilter(options ?: Object):express.RequestHandler;
    }

    var helmet: Helmet;
    export = helmet;
}

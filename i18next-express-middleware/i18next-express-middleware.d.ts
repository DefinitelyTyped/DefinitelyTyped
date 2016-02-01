// Type definitions for i18next-express-middleware
// Project: http://i18next.com/
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../express/express.d.ts"/>
///<reference path="../i18next/i18next.d.ts"/>

/**
 * @summary Interface for Language detector options.
 * @interface
 */
interface LanguageDetectorOptions {
    caches?: boolean;
    cookieDomain?: string;
    cookieExpirationDate?: Date;
    lookupCookie?: string;
    lookupFromPathIndex?: number;
    lookupQuerystring?: string;
    lookupSession?: string;
    order?: Array<string>;
}

declare module "i18next-express-middleware" {
    import express = require("express");
    import i18next = require("i18next");

    /**
     * @summary Interface for middleware to use i18next in express.js.
     * @interface
     */
    export interface i18nextExpressMiddleware {
        LanguageDetector(): express.Handler;
        missingKeyHandler(): express.Handler;
    }

    /**
     * @summary Interface for own detection functionality.
     */
    export interface i18nextCustomDetection {
        name: string;
        lookup: (req: express.Request, res: express.Response, options?: Object) => void;
        cacheUserLanguage: (req: express.Request, res: express.Response, lng?: any, options?: Object) => void;
    }

    /**
     * @summary Detects user language from current request.
     * @class
     */
    export class LanguageDetector {
        /**
         * @summary Constructor.
         * @constructor
         * @param {any}     services    The services.
         * @param {Object}  options     The options.
         * @param {Object}  allOptions  The all options.
         */
        constructor(services?: any, options?: Object, allOptions?: Object);

        /**
         * @summary Adds detector.
         * @param {i18nextCustomDetection} detector The detector to add.
         */
        addDetector(detector: i18nextCustomDetection): void;

        // NOTE: add documentation
        cacheUserLanguage(req: express.Request, res: express.Response, detectionOrder: any): void;

        /**
         * @summary Detects the language.
         * @param {Request}         req             The HTTP request.
         * @param {Response}        res             The HTTP response.
         * @param {detectionOrder}  detectionOrder  The detection order.
         */
        detect(req: express.Request, res: express.Response, detectionOrder: any): void;

        /**
         * @summary Initializes class.
         * @param {any}     services    The services.
         * @param {Object}  options     The options.
         * @param {Object}  allOptions  The all options.
         */
        init(services: any, options?: Object, allOptions?: Object): void;
    }

    export function getResourcesHandler(i18next: I18nextStatic, options: Object): express.Handler;
    export function handle(i18next: I18nextStatic, options?: Object): express.Handler;

    /**
     * @summary Gets handler for missing key.
     * @param {I18nextStatic}   i18next The i18next.
     * @param {Object}          options The options.
     * @return {express.Handler} The express handler.
     */
    export function missingKeyHandler(i18next: I18nextStatic, options: Object): express.Handler;
}

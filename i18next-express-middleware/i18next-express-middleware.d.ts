// Type definitions for i18next-express-middleware
// Project: http://i18next.com/
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path="../express/express.d.ts"/>

declare module "i18next-express-middleware" {
    import express = require("express");
    export interface i18nextExpressMiddleware {
        LanguageDetector(): express.Handler;
        missingKeyHandler(): express.Handler;
    }

    interface LanguageDetectorOptions {
        caches: boolean;
        cookieDomain: string;
        cookieExpirationDate: Date;
        lookupCookie: string;
        lookupFromPathIndex: number;
        lookupQuerystring: string;
        lookupSession: string;
        order: Array<string>;
    }

    export class LanguageDetector {
        constructor(services?: any, options?: Object, allOptions?: Object);
        addDetector(detector: any): void;
        cacheUserLanguage(req: express.Request, res: express.Response, detectionOrder: any): void;
        detect(req: express.Request, res: express.Response, detectionOrder: any): void;
        init(services: any, options?: Object, allOptions?: Object): void;
    }
}

// Type definitions for helmet
// Project: https://github.com/helmetjs/helmet
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "helmet" {
    import express = require("express");
    
    interface IHelmetCspDirectiveFunction {
      (req: express.Request, res: express.Response): string;
    }
    type HelmetCspDirectiveValue = string | IHelmetCspDirectiveFunction;

    interface IHelmetCspDirectives {
        baseUri? : HelmetCspDirectiveValue[],
        childSrc? : HelmetCspDirectiveValue[],
        connectSrc? : HelmetCspDirectiveValue[],
        defaultSrc? : HelmetCspDirectiveValue[],
        fontSrc? : HelmetCspDirectiveValue[],
        formAction? : HelmetCspDirectiveValue[],
        frameAncestors? : HelmetCspDirectiveValue[],
        frameSrc? : HelmetCspDirectiveValue[],
        imgSrc? : HelmetCspDirectiveValue[],
        mediaSrc? : HelmetCspDirectiveValue[],
        objectSrc? : HelmetCspDirectiveValue[],
        pluginTypes? : HelmetCspDirectiveValue[],
        reportUri?: string,
        sandbox? : HelmetCspDirectiveValue[],
        scriptSrc? : HelmetCspDirectiveValue[],
        styleSrc? : HelmetCspDirectiveValue[]
    }
    
    interface IHelmetCspConfiguration {
        reportOnly? : boolean;
        setAllHeaders? : boolean;
        disableAndroid? : boolean;
        browserSniff?: boolean;
        directives? : IHelmetCspDirectives
    }

    interface IHelmetXssFilterConfiguration {
        setOnOldIE? : boolean;
    }

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
         * @summary Mitigate cross-site scripting attacks with the "X-XSS-Protection" header.
         * @return {RequestHandler} The Request handler.
         * @param {Object} options The options.
         */
        xssFilter(options ?: IHelmetXssFilterConfiguration):express.RequestHandler;

        /**
         * @summary Set policy around third-party content via headers
         * @return {RequestHandler} The Request handler
         * @param {Object} options The options
         */
        csp(options ?: IHelmetCspConfiguration): express.RequestHandler;

        /**
         * @see csp
         */
        contentSecurityPolicy(options ?: IHelmetCspConfiguration): express.RequestHandler;

    }

    var helmet: Helmet;
    export = helmet;
}

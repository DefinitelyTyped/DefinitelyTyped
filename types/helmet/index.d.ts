// Type definitions for helmet
// Project: https://github.com/helmetjs/helmet
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>, Evan Hahn <https://github.com/EvanHahn>, Elliot Blackburn <https://github.com/bluehatbrit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');

declare var helmet: helmet.Helmet;
export = helmet;

declare namespace helmet {
    export interface IHelmetConfiguration {
        contentSecurityPolicy?: boolean | IHelmetContentSecurityPolicyConfiguration;
        dnsPrefetchControl?: boolean | IHelmetDnsPrefetchControlConfiguration;
        frameguard?: boolean | IHelmetFrameguardConfiguration;
        hidePoweredBy?: boolean | IHelmetHidePoweredByConfiguration;
        hpkp?: boolean | IHelmetHpkpConfiguration;
        hsts?: boolean | IHelmetHstsConfiguration;
        ieNoOpen?: boolean;
        noCache?: boolean;
        noSniff?: boolean;
        referrerPolicy?: boolean | IHelmetReferrerPolicyConfiguration;
        xssFilter?: boolean | IHelmetXssFilterConfiguration;
        expectCt?: boolean | IHelmetExpectCtConfiguration;
        permittedCrossDomainPolicies?: boolean | IHelmetPermittedCrossDomainPoliciesConfiguration;
    }

    export interface IHelmetPermittedCrossDomainPoliciesConfiguration {
        permittedPolicies?: string;
    }

    export interface IHelmetContentSecurityPolicyDirectiveFunction {
        (req: express.Request, res: express.Response): string;
    }
    export type HelmetCspDirectiveValue = string | IHelmetContentSecurityPolicyDirectiveFunction;

    export type HelmetCspSandboxDirective =
        | string
        | 'allow-forms'
        | 'allow-modals'
        | 'allow-orientation-lock'
        | 'allow-pointer-lock'
        | 'allow-popups-to-escape-sandbox'
        | 'allow-popups'
        | 'allow-presentation'
        | 'allow-same-origin'
        | 'allow-scripts'
        | 'allow-top-navigation'

    export type HelmetCspRequireSriForValue =
        | string
        | 'script'
        | 'style'

    export interface IHelmetContentSecurityPolicyDirectives {
        baseUri?: HelmetCspDirectiveValue[];
        blockAllMixedContent?: boolean;
        childSrc?: HelmetCspDirectiveValue[];
        connectSrc?: HelmetCspDirectiveValue[];
        defaultSrc?: HelmetCspDirectiveValue[];
        fontSrc?: HelmetCspDirectiveValue[];
        formAction?: HelmetCspDirectiveValue[];
        frameAncestors?: HelmetCspDirectiveValue[];
        frameSrc?: HelmetCspDirectiveValue[];
        imgSrc?: HelmetCspDirectiveValue[];
        manifestSrc?: HelmetCspDirectiveValue[];
        mediaSrc?: HelmetCspDirectiveValue[];
        objectSrc?: HelmetCspDirectiveValue[];
        pluginTypes?: HelmetCspDirectiveValue[];
        prefetchSrc?: HelmetCspDirectiveValue[];
        reportTo?: HelmetCspDirectiveValue;
        reportUri?: HelmetCspDirectiveValue;
        requireSriFor?: HelmetCspRequireSriForValue[];
        sandbox?: HelmetCspSandboxDirective[];
        scriptSrc?: HelmetCspDirectiveValue[];
        styleSrc?: HelmetCspDirectiveValue[];
        upgradeInsecureRequests?: boolean;
        workerSrc?: HelmetCspDirectiveValue[];
    }

    export interface IHelmetContentSecurityPolicyDirectives {
        'base-uri'?: HelmetCspDirectiveValue[];
        'block-all-mixed-content'?: boolean;
        'child-src'?: HelmetCspDirectiveValue[];
        'connect-src'?: HelmetCspDirectiveValue[];
        'default-src'?: HelmetCspDirectiveValue[];
        'font-src'?: HelmetCspDirectiveValue[];
        'form-action'?: HelmetCspDirectiveValue[];
        'frame-ancestors'?: HelmetCspDirectiveValue[];
        'frame-src'?: HelmetCspDirectiveValue[];
        'img-src'?: HelmetCspDirectiveValue[];
        'manifest-src'?: HelmetCspDirectiveValue[];
        'media-src'?: HelmetCspDirectiveValue[];
        'object-src'?: HelmetCspDirectiveValue[];
        'plugin-types'?: HelmetCspDirectiveValue[];
        'prefetch-src'?: HelmetCspDirectiveValue[];
        'report-to'?: HelmetCspDirectiveValue;
        'report-uri'?: HelmetCspDirectiveValue;
        'require-sri-for'?: HelmetCspRequireSriForValue[];
        'sandbox'?: HelmetCspSandboxDirective[];
        'script-src'?: HelmetCspDirectiveValue;
        'style-src'?: HelmetCspDirectiveValue;
        'upgrade-insecure-requests'?: boolean;
        'worker-src'?: HelmetCspDirectiveValue;
    }

    export interface IHelmetContentSecurityPolicyConfiguration {
        reportOnly?: boolean | ((req: express.Request, res: express.Response) => boolean);
        setAllHeaders?: boolean;
        disableAndroid?: boolean;
        browserSniff?: boolean;
        directives?: IHelmetContentSecurityPolicyDirectives;
        loose?: boolean;
    }

    export interface IHelmetDnsPrefetchControlConfiguration {
        allow?: boolean;
    }

    export interface IHelmetFrameguardConfiguration {
        action?: string;
        domain?: string;
    }

    export interface IHelmetHidePoweredByConfiguration {
        setTo?: string;
    }

    export interface IHelmetSetIfFunction {
        (req: express.Request, res: express.Response): boolean;
    }

    export interface IHelmetHpkpConfiguration {
        maxAge: number;
        sha256s: string[];
        includeSubdomains?: boolean;
        reportUri?: string;
        reportOnly?: boolean;
        setIf?: IHelmetSetIfFunction;
    }

    export interface IHelmetHstsConfiguration {
        maxAge?: number;
        includeSubdomains?: boolean;
        preload?: boolean;
        setIf?: IHelmetSetIfFunction;
        force?: boolean;
    }

    export interface IHelmetReferrerPolicyConfiguration {
        policy?: string;
    }

    export interface IHelmetXssFilterConfiguration {
        setOnOldIE?: boolean;
    }

    export interface IHelmetExpectCtConfiguration {
        enforce?: boolean;
        maxAge?: number;
        reportUri?: string;
    }

    /**
     * @summary Interface for helmet class.
     * @interface
     */
    export interface Helmet {
        /**
         * @summary Constructor.
         * @return {RequestHandler} The Request handler.
         */
        (options?: IHelmetConfiguration): express.RequestHandler;

        /**
         * @summary Set policy around third-party content via headers
         * @param {IHelmetContentSecurityPolicyConfiguration} options The options
         * @return {RequestHandler} The Request handler
         */
        contentSecurityPolicy(options?: IHelmetContentSecurityPolicyConfiguration): express.RequestHandler;

        /**
         * @summary Stop browsers from doing DNS prefetching.
         * @param {IHelmetDnsPrefetchControlConfiguration} options The options
         * @return {RequestHandler} The Request handler
         */
        dnsPrefetchControl(options?: IHelmetDnsPrefetchControlConfiguration): express.RequestHandler;

        /**
         * @summary Prevent clickjacking.
         * @param {IHelmetFrameguardConfiguration} options The options
         * @return {RequestHandler} The Request handler
         */
        frameguard(options?: IHelmetFrameguardConfiguration): express.RequestHandler;

        /**
         * @summary Hide "X-Powered-By" header.
         * @param {IHelmetHidePoweredByConfiguration} options The options
         * @return {RequestHandler} The Request handler.
         */
        hidePoweredBy(options?: IHelmetHidePoweredByConfiguration): express.RequestHandler;

        /**
         * @summary Adds the "Public-Key-Pins" header.
         * @param {IHelmetHpkpConfiguration} options The options
         * @return {RequestHandler} The Request handler.
         */
        hpkp(options?: IHelmetHpkpConfiguration): express.RequestHandler;

        /**
         * @summary Adds the "Strict-Transport-Security" header.
         * @param {IHelmetHstsConfiguration} options The options
         * @return {RequestHandler} The Request handler.
         */
        hsts(options?: IHelmetHstsConfiguration): express.RequestHandler;

        /**
         * @summary Add the "X-Download-Options" header.
         * @return {RequestHandler} The Request handler.
         */
        ieNoOpen(): express.RequestHandler;

        /**
         * @summary Add the "Cache-Control" and "Pragma" headers to stop caching.
         * @return {RequestHandler} The Request handler.
         */
        noCache(options?: Object): express.RequestHandler;

        /**
         * @summary Adds the "X-Content-Type-Options" header.
         * @return {RequestHandler} The Request handler.
         */
        noSniff(): express.RequestHandler;

        /**
         * @summary Adds the "Referrer-Policy" header.
         * @return {RequestHandler} The Request handler.
         */
        referrerPolicy(options?: IHelmetReferrerPolicyConfiguration): express.RequestHandler;

        /**
         * @summary Mitigate cross-site scripting attacks with the "X-XSS-Protection" header.
         * @param {IHelmetXssFilterConfiguration} options The options
         * @return {RequestHandler} The Request handler.
         */
        xssFilter(options?: IHelmetXssFilterConfiguration): express.RequestHandler;

        /**
         * @summary Adds the "Expect-CT" header.
         * @param {helmet.IHelmetExpectCtConfiguration} options
         * @returns {e.RequestHandler}
         */
        expectCt(options?: IHelmetExpectCtConfiguration): express.RequestHandler;

        /**
         * @summary Adds the "X-Permitted-Cross-Domain-Policies" header.
         * @param {helmet.IHelmetPermittedCrossDomainPoliciesConfiguration} options
         * @returns {express.RequestHandler}
         */
        permittedCrossDomainPolicies(options?: IHelmetPermittedCrossDomainPoliciesConfiguration): express.RequestHandler;
    }
}

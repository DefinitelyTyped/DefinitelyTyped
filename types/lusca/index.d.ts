// Type definitions for lusca 1.5
// Project: https://github.com/krakenjs/lusca#readme
// Definitions by: Corbin Crutchley <https://github.com/crutchcorn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import express = require('express');

declare function lusca(options?: lusca.LuscaOptions): express.RequestHandler;

declare namespace lusca {
    /*~ Documentation declares that:
     *~ Setting any value to false will disable it.
     */
    interface LuscaOptions {
        csrf?: csrfOptions | boolean;
        csp?: cspOptions | false;
        xframe?: string | false;
        p3p?: string | false;
        hsts?: hstsOptions | false;
        xssProtection?: xssProtectionOptions | boolean;
        nosniff?: boolean;
        referrerPolicy?: string | false;
    }

    interface cspOptions {
        policy?: string | object | Array<object | string>;
        reportOnly?: boolean;
        reportUri?: string;
        styleNonce?: boolean;
        scriptNonce?: boolean;
    }

    interface hstsOptions {
        maxAge?: number;
        includeSubDomains?: boolean;
        preload?: boolean;
    }

    type csrfOptions = csrfOptionsAngular | csrfOptionsNonAngular;

    interface csrfOptionsAngular  {
        key?: string;
        secret?: string;
        impl?: () => any;
        cookie?: string | {
            options?: object;
        };
        angular: true;
    }

    interface csrfOptionsNonAngular {
        key?: string;
        secret?: string;
        impl?: () => any;
        cookie?: string | {
            name: string;
            options?: object;
        };
        angular?: false;
    }

    interface xssProtectionOptions {
        enabled?: boolean;
        mode?: string;
    }

    function csrf(options?: csrfOptions): express.RequestHandler;
    function csp(options?: cspOptions): express.RequestHandler;
    function xframe(value: string): express.RequestHandler;
    function p3p(value: string): express.RequestHandler;
    function hsts(options?: hstsOptions): express.RequestHandler;
    function xssProtection(options?: xssProtectionOptions | true): express.RequestHandler;
    function nosniff(): express.RequestHandler;
    function referrerPolicy(value: string): express.RequestHandler;
}

export = lusca;

// Type definitions for lusca 1.6
// Project: https://github.com/krakenjs/lusca#readme
// Definitions by: Corbin Crutchley <https://github.com/crutchcorn>, Naoto Yokoyama <https://github.com/builtinnya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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

    type csrfOptions = csrfOptionsBase & csrfOptionsAngularOrNonAngular & csrfOptionsBlacklistOrWhitelist;

    interface csrfOptionsBase {
        key?: string;
        secret?: string;
        impl?: () => any;
    }

    interface csrfOptionsAngular {
        cookie?: string | {
            options?: object;
        };
        angular: true;
    }

    interface csrfOptionsNonAngular {
        cookie?: string | {
            name: string;
            options?: object;
        };
        angular?: false;
    }

    type csrfOptionsAngularOrNonAngular = csrfOptionsAngular | csrfOptionsNonAngular;

    interface csrfOptionsBlacklist {
        blacklist?: string[];
        whitelist?: never;
    }

    interface csrfOptionsWhitelist {
        blacklist?: never;
        whitelist?: string[];
    }

    type csrfOptionsBlacklistOrWhitelist = csrfOptionsBlacklist | csrfOptionsWhitelist;

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

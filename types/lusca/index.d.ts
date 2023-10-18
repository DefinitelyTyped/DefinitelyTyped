import express = require("express");

declare function lusca(options?: lusca.LuscaOptions): express.RequestHandler;

declare namespace lusca {
    /*~ Documentation declares that:
     *~ Setting any value to false will disable it.
     */
    interface LuscaOptions {
        csrf?: csrfOptions | boolean | undefined;
        csp?: cspOptions | false | undefined;
        xframe?: string | false | undefined;
        p3p?: string | false | undefined;
        hsts?: hstsOptions | false | undefined;
        xssProtection?: xssProtectionOptions | boolean | undefined;
        nosniff?: boolean | undefined;
        referrerPolicy?: string | false | undefined;
    }

    interface cspOptions {
        policy?: string | object | Array<object | string> | undefined;
        reportOnly?: boolean | undefined;
        reportUri?: string | undefined;
        styleNonce?: boolean | undefined;
        scriptNonce?: boolean | undefined;
    }

    interface hstsOptions {
        maxAge?: number | undefined;
        includeSubDomains?: boolean | undefined;
        preload?: boolean | undefined;
    }

    type csrfOptions = csrfOptionsBase & csrfOptionsAngularOrNonAngular & csrfOptionsBlocklistOrAllowlist;

    interface csrfOptionsBase {
        /**
         * The name of the CSRF token in the model.
         * @default '_csrf'
         */
        key?: string | undefined;
        /**
         * @default '_csrfSecret'
         */
        secret?: string | undefined;
        /**
         *  An object with create/validate methods for custom tokens
         */
        impl?: (() => any) | undefined;
        /**
         * The name of the response header containing the CSRF token
         * @default 'x-csrf-token'
         */
        header?: string | undefined;
    }

    interface csrfOptionsAngular {
        cookie?: string | {
            options?: object | undefined;
        } | undefined;
        angular: true;
    }

    interface csrfOptionsNonAngular {
        cookie?: string | {
            name: string;
            options?: object | undefined;
        } | undefined;
        angular?: false | undefined;
    }

    type csrfOptionsAngularOrNonAngular = csrfOptionsAngular | csrfOptionsNonAngular;

    interface csrfOptionsBlocklist {
        blocklist?: string[] | undefined;
        allowlist?: never | undefined;
    }

    interface csrfOptionsAllowlist {
        blocklist?: never | undefined;
        allowlist?: string[] | undefined;
    }

    type csrfOptionsBlocklistOrAllowlist = csrfOptionsBlocklist | csrfOptionsAllowlist;

    interface xssProtectionOptions {
        enabled?: boolean | undefined;
        mode?: string | undefined;
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

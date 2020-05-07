// Type definitions for csp-html-webpack-plugin 3.0
// Project: https://github.com/slackhq/csp-html-webpack-plugin
// Definitions by: Porama Ruengrairatanaroj <https://github.com/Seally>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Compiler as WebpackCompiler } from 'webpack';
import { AsyncSeriesWaterfallHook } from 'tapable';
import HtmlWebpackPlugin = require('html-webpack-plugin');

export = CspHtmlWebpackPlugin;

declare class CspHtmlWebpackPlugin {
    /**
     * Setup for our plugin
     * @param policy - the policy object
     * @param additionalOpts - additional config options
     */
    constructor(
        policy?: CspHtmlWebpackPlugin.Policy,
        additionalOpts?: CspHtmlWebpackPlugin.AdditionalOptions
    );

    apply(compiler: WebpackCompiler): void;
}

declare namespace CspHtmlWebpackPlugin {
    /**
     * A flat object which defines your CSP policy. Values can either be a
     * string or an array of strings.
     *
     * The default policy is:
     *
     * ```javascript
     * {
     *   'base-uri': "'self'",
     *   'object-src': "'none'",
     *   'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
     *   'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"]
     * }
     * ```
     */
    interface Policy {
        [directive: string]: string | string[];
    }

    // HtmlWebpackPlugin v3 and v4 use different hook interfaces. Figure out
    // which we're using and infer the generic type variable inside.
    type HtmlPluginData
        = HtmlWebpackPlugin.Hooks extends HtmlPluginDataHookV3<infer T> ? T
        : HtmlWebpackPlugin.Hooks extends HtmlPluginDataHookV4<infer U> ? U
        : any; // Fallback when nothing works.

    /**
     * Additional options. Defaults are:
     *
     * ```javascript
     * {
     *   enabled: true
     *   hashingMethod: 'sha256',
     *   hashEnabled: {
     *     'script-src': true,
     *     'style-src': true
     *   },
     *   nonceEnabled: {
     *     'script-src': true,
     *     'style-src': true
     *   }
     * }
     * ```
     */
    interface AdditionalOptions {
        /**
         * If false, or the function returns false, the empty CSP tag will be
         * stripped from the html output.
         *
         * * The `htmlPluginData` is passed into the function as its first
         *   param.
         * * If `enabled` is set the false, it will disable generating a CSP for
         *   all instances of HtmlWebpackPlugin in your webpack config.
         */
        enabled?: boolean | ((htmlPluginData: HtmlPluginData) => boolean);
        /**
         * The hashing method. Your node version must also accept this hashing
         * method.
         */
        hashingMethod?: 'sha256' | 'sha384' | 'sha512';
        /**
         * A `<string, boolean>` entry for which policy rules are allowed to
         * include hashes.
         */
        hashEnabled?: { [directive: string]: boolean };
        /**
         * A `<string, boolean>` entry for which policy rules are allowed to
         * include nonces.
         */
        nonceEnabled?: { [directive: string]: boolean };
    }
}

declare module 'html-webpack-plugin' {
    interface Options {
        cspPlugin?: CspHtmlWebpackPlugin.AdditionalOptions & {
            policy?: CspHtmlWebpackPlugin.Policy
        };
    }
}

// Helpers for extracting the relevant generic types from
// HtmlWebpackPlugin.Hooks.
interface HtmlPluginDataHookV3<T> {
    htmlWebpackPluginAfterHtmlProcessing: AsyncSeriesWaterfallHook<T>;
}

interface HtmlPluginDataHookV4<T> {
    beforeEmit: AsyncSeriesWaterfallHook<T>;
}

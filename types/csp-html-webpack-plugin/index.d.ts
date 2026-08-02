import { CheerioAPI } from "cheerio";
import { AsyncSeriesWaterfallHook } from "tapable";
import { compilation, Compiler as WebpackCompiler } from "webpack";
import HtmlWebpackPlugin = require("html-webpack-plugin");

export = CspHtmlWebpackPlugin;

declare class CspHtmlWebpackPlugin {
    /**
     * Setup for our plugin
     * @param policy a flat object which defines your CSP policy. Valid keys and values can be found on the [MDN CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) page. Values can either be a string, or an array of strings.
     * @param additionalOpts a flat object with the optional configuration options
     */
    constructor(
        policy?: CspHtmlWebpackPlugin.Policy,
        additionalOpts?: CspHtmlWebpackPlugin.AdditionalOptions,
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

    type HtmlPluginData = HtmlWebpackPlugin.Hooks extends HtmlPluginDataHookV4<infer U> ? U
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
        enabled?: boolean | ((htmlPluginData: HtmlPluginData) => boolean) | undefined;
        /**
         * The hashing method. Your node version must also accept this hashing
         * method.
         */
        hashingMethod?: "sha256" | "sha384" | "sha512" | undefined;
        /**
         * A `<string, boolean>` entry for which policy rules are allowed to
         * include hashes.
         */
        hashEnabled?: { [directive: string]: boolean } | undefined;
        /**
         * A `<string, boolean>` entry for which policy rules are allowed to
         * include nonces.
         */
        nonceEnabled?: { [directive: string]: boolean } | undefined;
        /**
         * Allows the developer to overwrite the default method of what happens to the CSP after it has been created.
         *
         * @param builtPolicy A string containing the completed policy
         * @param htmlPluginData The `HtmlWebpackPlugin` object
         * @param $ The `cheerio` object of the html file currently being processed
         * @param compilation Internal webpack object to manipulate the build
         */
        processFn?(
            builtPolicy: string,
            htmlPluginData: HtmlPluginData,
            $: CheerioAPI,
            compilation: compilation.Compilation,
        ): void;
    }
}

declare module "html-webpack-plugin" {
    interface Options {
        cspPlugin?:
            | CspHtmlWebpackPlugin.AdditionalOptions & {
                policy?: CspHtmlWebpackPlugin.Policy | undefined;
            }
            | undefined;
    }
}

interface HtmlPluginDataHookV4<T> {
    beforeEmit: AsyncSeriesWaterfallHook<T>;
}

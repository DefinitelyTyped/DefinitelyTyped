// Type definitions for webpack-cdn-inject 1.0
// Project: https://github.com/drolsen/webpack-cdn-inject#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

/**
 * Plugin to inject CDN assets into HTML documents.
 */
declare namespace WebpackCDNInject {
    interface Options {
        /**
         * Defines urls to be added to document head (tag type is defined by url's file extension).
         */
        head?: string[];
        /**
         * Defines urls to be added to document body (tag type is defined by url's file extension).
         */
        body?: string[];
    }
}

declare class WebpackCDNInject extends Plugin {
    constructor(options?: WebpackCDNInject.Options);
}

export = WebpackCDNInject;

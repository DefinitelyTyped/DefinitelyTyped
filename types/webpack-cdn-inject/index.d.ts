import { Plugin } from "webpack";

/**
 * Plugin to inject CDN assets into HTML documents.
 */
declare namespace WebpackCDNInject {
    interface Options {
        /**
         * Defines urls to be added to document head (tag type is defined by url's file extension).
         */
        head?: string[] | undefined;
        /**
         * Defines urls to be added to document body (tag type is defined by url's file extension).
         */
        body?: string[] | undefined;
    }
}

declare class WebpackCDNInject extends Plugin {
    constructor(options?: WebpackCDNInject.Options);
}

export = WebpackCDNInject;

// Type definitions for appcache-webpack-plugin 1.4
// Project: https://github.com/lettertwo/appcache-webpack-plugin
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import webpack = require('webpack');

/**
 * Generate an HTML5 Application Cache for a Webpack build
 */
declare class AppCachePlugin extends webpack.Plugin {
    AppCache: AppCachePlugin.AppCache;
    constructor(options?: AppCachePlugin.Options);
}

declare namespace AppCachePlugin {
    interface Options {
        /**
         * 'additional assets to cache
         */
        cache?: string[];
        /**
         * Assets that may be accessed via the network.
         * @default ['*']
         */
        network?: string[] | null;
        /**
         * Fallback assets
         */
        fallback?: string[];
        /**
         * Settings
         */
        settings?: string[];
        /**
         * Assets in the compilation that match any of these patterns will be excluded from the manifest.
         * @default []
         */
        exclude?: Array<string | RegExp>;
        /**
         * The filename to write the appcache to
         * @default 'manifest.appcache'
         */
        output?: string;
        /**
         * @default ''
         */
        comment?: string;
    }

    class AppCache {
        constructor(
            cache: string,
            network: string[],
            fallback: string[],
            settings: string[],
            hash: string,
            comment: string,
        );
        addAsset(asset: string): void;
        size(): number;
        getManifestBody(): string;
        source(): string;
    }
}

export = AppCachePlugin;

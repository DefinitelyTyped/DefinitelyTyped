import webpack = require("webpack");

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
        cache?: string[] | undefined;
        /**
         * Assets that may be accessed via the network.
         * @default ['*']
         */
        network?: string[] | null | undefined;
        /**
         * Fallback assets
         */
        fallback?: string[] | undefined;
        /**
         * Settings
         */
        settings?: string[] | undefined;
        /**
         * Assets in the compilation that match any of these patterns will be excluded from the manifest.
         * @default []
         */
        exclude?: Array<string | RegExp> | undefined;
        /**
         * The filename to write the appcache to
         * @default 'manifest.appcache'
         */
        output?: string | undefined;
        /**
         * @default ''
         */
        comment?: string | undefined;
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

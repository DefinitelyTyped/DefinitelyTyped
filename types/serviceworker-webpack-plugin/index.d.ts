// Type definitions for serviceworker-webpack-plugin 1.0
// Project: https://github.com/oliviertassinari/serviceworker-webpack-plugin#readme
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin, Stats } from 'webpack';

declare class ServiceWorkerWebpackPlugin<T = ServiceWorkerWebpackPlugin.ServiceWorkerDefaultOption> extends Plugin {
    constructor(options: ServiceWorkerWebpackPlugin.ServiceWorkerWebpackPluginOptions<T>);
}

declare namespace ServiceWorkerWebpackPlugin {
    interface ServiceWorkerOption {
        assets: string[];

        jsonStats?: Stats.ToJsonOutput;
    }

    interface ServiceWorkerDefaultOption {
        assets: string[];
    }

    interface ServiceWorkerWebpackPluginOptions<T = ServiceWorkerDefaultOption> {
        /**
         * Path to the actual service worker implementation.
         */
        entry: string;

        /**
         * Relative (from the webpack's config output.path) output path for emitted script.
         *
         * @default 'sw.js'
         */
        filename?: string;

        /**
         * Exclude matched assets from being added to the `serviceWorkerOption.assets` variable. (Blacklist)
         *
         * @default ['**\/.*', '**\/*.map']
         */
        excludes?: string[];

        /**
         * Include matched assets added to the `serviceWorkerOption.assets` variable. (Whitelist)
         *
         * @default ['**\/*']
         */
        includes?: string[];

        /**
         * Specifies the public URL address of the output files when referenced in a browser. We use this value to load the service worker over the network.
         *
         * @default '/'
         */
        publicPath?: string;

        /**
         * This callback function can be used to inject statically generated service worker.
         */
        template?: (serviceWorkerOption: T) => Promise<void>;

        /**
         * This callback function receives a raw `serviceWorkerOption` argument. The `jsonStats` key contains all the webpack build information.
         */
        transformOptions?: (serviceWorkerOption: ServiceWorkerOption) => T;

        /**
         * Whether to minimize output.
         *
         * @default process.env.NODE_ENV === 'production'
         */
        minimize?: boolean;
    }
}

export = ServiceWorkerWebpackPlugin;

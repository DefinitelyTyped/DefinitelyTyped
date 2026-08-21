import { Plugin, Stats } from "webpack";

declare class ServiceWorkerWebpackPlugin<T = ServiceWorkerWebpackPlugin.ServiceWorkerDefaultOption> extends Plugin {
    constructor(options: ServiceWorkerWebpackPlugin.ServiceWorkerWebpackPluginOptions<T>);
}

declare namespace ServiceWorkerWebpackPlugin {
    interface ServiceWorkerOption {
        assets: string[];

        jsonStats?: Stats.ToJsonOutput | undefined;
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
        filename?: string | undefined;

        /**
         * Exclude matched assets from being added to the `serviceWorkerOption.assets` variable. (Blacklist)
         *
         * @default ['**\/.*', '**\/*.map']
         */
        excludes?: string[] | undefined;

        /**
         * Include matched assets added to the `serviceWorkerOption.assets` variable. (Whitelist)
         *
         * @default ['**\/*']
         */
        includes?: string[] | undefined;

        /**
         * Specifies the public URL address of the output files when referenced in a browser. We use this value to load the service worker over the network.
         *
         * @default '/'
         */
        publicPath?: string | undefined;

        /**
         * This callback function can be used to inject statically generated service worker.
         */
        template?: ((serviceWorkerOption: T) => Promise<void>) | undefined;

        /**
         * This callback function receives a raw `serviceWorkerOption` argument. The `jsonStats` key contains all the webpack build information.
         */
        transformOptions?: ((serviceWorkerOption: ServiceWorkerOption) => T) | undefined;

        /**
         * Whether to minimize output.
         *
         * @default process.env.NODE_ENV === 'production'
         */
        minimize?: boolean | undefined;
    }
}

export = ServiceWorkerWebpackPlugin;

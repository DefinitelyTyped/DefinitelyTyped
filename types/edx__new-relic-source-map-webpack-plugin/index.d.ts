/// <reference types="node" />

import webpack = require("webpack");

declare class NewRelicPlugin {
    constructor(options?: NewRelicPlugin.Options);
    apply(compiler: webpack.Compiler): void;
}

declare namespace NewRelicPlugin {
    interface Options {
        /**
         * applicationId
         * @link {https://docs.newrelic.com/docs/browser/browser-monitoring/configuration/browser-license-key-app-id/}
         */
        applicationId: string;
        /**
         * API Key
         * @link {https://docs.newrelic.com/docs/apis/rest-api-v2/requirements/api-keys}
         */
        apiKey: string;
        /**
         * the domain your production assets are served from.
         * Written as a complete url.
         * Example: "examplecdn.com"
         */
        staticAssetUrl: string;
        /**
         * A function for building the production url your js file is built from.
         * Will be called for every javascript file with four arguments: staticAssetUrl,
         * the public path from your webpack config, the filename, and the webpack stats instance.
         * Defaults to `${removeLastCharIfSlash(url)}${removeLastCharIfSlash(publicPath)}/${file}`
         */
        staticAssetUrlBuilder?: StaticAssetUrlBuilder | undefined;
        /**
         * a regex used to find js files
         * @default /\.js$/
         */
        extensionRegex?: RegExp | undefined;
        /**
         * Control boolean that decides whether or not to run the plugin.
         * Set to true for builds where you don't want to upload assets to new relic.
         */
        noop?: boolean | undefined;
        /**
         * unique identifier for the release name
         */
        releaseName?: string | null | undefined;
        /**
         * unique version for the release identifier
         */
        releaseId?: string | null | undefined;
        /**
         *  A function for error callback.
         * Default is: 'console.warn(`New Relic sourcemap upload error: ${err}`)'
         */
        errorCallback?: ErrorCallback | undefined;
    }

    interface StaticAssetUrlBuilder {
        (url: string, publicPath: "auto" | string, file: string): string;
    }

    interface ErrorCallback {
        (err: Error): void;
    }
}

export = NewRelicPlugin;

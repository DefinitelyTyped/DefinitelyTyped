// Type definitions for assets-webpack-plugin 3.5
// Project: https://github.com/sporto/assets-webpack-plugin
// Definitions by: Michael Strobel <https://github.com/kryops>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as webpack from 'webpack';

declare namespace AssetsWebpackPlugin {
    interface Assets {
        [name: string]: {
            [ext: string]: string;
        };
    }

    type ProcessOutputFn = (assets: Assets) => string;

    interface Options {
        /**
         * Name for the created json file.
         * "webpack-assets.json" by default
         */
        filename?: string;

        /**
         * If false the output will not include the full path of the generated file.
         * true by default
         */
        fullPath?: boolean;

        /**
         * Inserts the manifest javascript as a text property in your assets.
         * Accepts the name of your manifest chunk.
         * A manifest is the last CommonChunk that only contains the webpack bootstrap code.
         * This is useful for production use when you want to inline the manifest
         * in your HTML skeleton for long-term caching.
         * false by default
         */
        includeManifest?: boolean;

        /**
         * Inject metadata into the output file. All values will be injected into the key "metadata"
         */
        metadata?: object;

        /**
         * Path where to save the created JSON file.
         * Defaults to the current directory
         */
        path?: string;

        /**
         * Whether to format the JSON output for readability.
         * false by default
         */
        prettyPrint?: boolean;

        /**
         * Formats the assets output.
         * Defaults to JSON.stringify
         */
        processOutput?: ProcessOutputFn;

        /**
         * When set to true, the output JSON file will be updated instead of overwritten.
         * false by default
         */
        update?: boolean;
    }
}

declare class AssetsWebpackPlugin extends webpack.Plugin {
    constructor(options?: AssetsWebpackPlugin.Options);
}

export = AssetsWebpackPlugin;

// Type definitions for assets-webpack-plugin 3.9
// Project: https://github.com/ztoben/assets-webpack-plugin
// Definitions by: Michael Strobel <https://github.com/kryops>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
         * If the "entrypoints" option is given, the output will be limited to the entrypoints and the chunks associated with them.
         * false by default
         */
        entrypoints?: boolean;

        /**
         * Name for the created json file.
         * "webpack-assets.json" by default
         */
        filename?: string;

        /**
         * When set and "includeAllFileTypes" is set false, only assets matching these types will be included in the assets file.
         * ['js', 'css'] by default
         */
        fileTypes?: string[];

        /**
         * If false the output will not include the full path of the generated file.
         * true by default
         */
        fullPath?: boolean;

        /**
         * When set false, falls back to the "fileTypes" option array to decide which file types to include in the assets file.
         * true by default
         */
        includeAllFileTypes?: boolean;

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
         * When set the assets file will only be generated in memory while running webpack-dev-server and not written to disk.
         * false by default
         */
        keepInMemory?: boolean;

        /**
         * Orders the assets output so that manifest is the first entry.
         * This is useful for cases where script tags are generated from the assets json output, and order of import is important.
         * false by default
         */
        manifestFirst?: boolean;

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

        /**
         * Will override the path to use the compiler output path set in your webpack config.
         * false by default
         */
        useCompilerPath?: boolean;
    }
}

declare class AssetsWebpackPlugin extends webpack.Plugin {
    constructor(options?: AssetsWebpackPlugin.Options);
}

export = AssetsWebpackPlugin;

// Type definitions for webpack-bundle-analyzer 2.13
// Project: https://github.com/webpack-contrib/webpack-bundle-analyzer
// Definitions by: Michael Strobel <https://github.com/kryops>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as webpack from 'webpack';

export namespace BundleAnalyzerPlugin {
    type ExcludeAssetsPatternFn = (assetName: string) => boolean;
    type ExcludeAssetsPattern = string | RegExp | ExcludeAssetsPatternFn;

    interface Options {
        /**
         * Can be "server", "static" or "disabled".
         * Defaults to "server".
         * In "server" mode analyzer will start HTTP server to show bundle report.
         * In "static" mode single HTML file with bundle report will be generated.
         * In "disabled" mode you can use this plugin to just generate Webpack Stats JSON file by setting "generateStatsFile" to true.
         */
        analyzerMode?: 'server' | 'static' | 'disabled';

        /**
         * Host that will be used in `server` mode to start HTTP server.
         * Defaults to 127.0.0.1
         */
        analyzerHost?: string;

        /**
         * Port that will be used in `server` mode to start HTTP server.
         * Defaults to 8888
         */
        analyzerPort?: number;

        /**
         * Path to bundle report file that will be generated in "static" mode.
         * Relative to bundles output directory.
         * Defaults to "report.html"
         */
        reportFilename?: string;

        /**
         * Module sizes to show in report by default.
         * Should be one of "stat", "parsed" or "gzip".
         * Defaults to "parsed"
         */
        defaultSizes?: 'parsed' | 'stat' | 'gzip';

        /**
         * Automatically open report in default browser.
         * Defaults to true
         */
        openAnalyzer?: boolean;

        /**
         * If true, Webpack Stats JSON file will be generated in bundles output directory.
         * Defaults to false
         */
        generateStatsFile?: boolean;

        /**
         * Name of Webpack Stats JSON file that will be generated if generateStatsFile is true.
         * Relative to bundles output directory.
         * Defaults to "stats.json"
         */
        statsFilename?: string;

        /**
         * Options for stats.toJson() method.
         * For example you can exclude sources of your modules from stats file with "source: false" option.
         */
        statsOptions?: null | webpack.Stats.ToJsonOptionsObject;

        /**
         * Default: `null`.
         * Patterns that will be used to match against asset names to exclude them from the report.
         * If pattern is a string it will be converted to RegExp via `new RegExp(str)`.
         * If pattern is a function it should have the following signature `(assetName: string) => boolean`
         * and should return true to exclude matching asset.
         * If multiple patterns are provided asset should match at least one of them to be excluded.
         */
        excludeAssets?: null | ExcludeAssetsPattern | ExcludeAssetsPattern[];

        /**
         * Log level. Can be "info", "warn", "error" or "silent".
         * Defaults to "info"
         */
        logLevel?: 'info' | 'warn' | 'error' | 'silent';
    }
}

export class BundleAnalyzerPlugin extends webpack.Plugin {
    constructor(options?: BundleAnalyzerPlugin.Options);
}

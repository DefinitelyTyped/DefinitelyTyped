// Type definitions for webpack-bundle-analyzer 3.8
// Project: https://github.com/webpack-contrib/webpack-bundle-analyzer
// Definitions by: Michael Strobel <https://github.com/kryops>
//                 Vladimir Grenaderov <https://github.com/VladimirGrenaderov>
//                 Max Boguslavskiy <https://github.com/maxbogus>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, Compiler, Stats } from 'webpack';

export namespace BundleAnalyzerPlugin {
    type ExcludeAssetsPatternFn = (assetName: string) => boolean;
    type ExcludeAssetsPattern = string | RegExp | ExcludeAssetsPatternFn;

    interface Options {
        /**
         * Can be "server", "static" or "disabled".
         * Defaults to "server".
         * In "server" mode analyzer will start HTTP server to show bundle report.
         * In "static" mode single HTML file with bundle report will be generated.
         * In "json" mode single JSON file with bundle report will be generated
         * In "disabled" mode you can use this plugin to just generate Webpack Stats JSON file by setting "generateStatsFile" to true.
         */
        analyzerMode?: 'server' | 'static' | 'json' | 'disabled';

        /**
         * Host that will be used in `server` mode to start HTTP server.
         * @default '127.0.0.1'
         */
        analyzerHost?: string;

        /**
         * Port that will be used in `server` mode to start HTTP server.
         * @default 8888
         */
        analyzerPort?: number | 'auto';

        /**
         * Path to bundle report file that will be generated in "static" mode.
         * Relative to bundles output directory.
         * @default 'report.html'
         */
        reportFilename?: string;

        /**
         * Module sizes to show in report by default.
         * Should be one of "stat", "parsed" or "gzip".
         * @default 'parsed'
         */
        defaultSizes?: 'parsed' | 'stat' | 'gzip';

        /**
         * Automatically open report in default browser.
         * @default true
         */
        openAnalyzer?: boolean;

        /**
         * If true, Webpack Stats JSON file will be generated in bundles output directory.
         * @default false
         */
        generateStatsFile?: boolean;

        /**
         * Name of Webpack Stats JSON file that will be generated if generateStatsFile is true.
         * Relative to bundles output directory.
         * @default 'stats.json'
         */
        statsFilename?: string;

        /**
         * Options for stats.toJson() method.
         * For example you can exclude sources of your modules from stats file with "source: false" option.
         * @default null
         */
        statsOptions?: null | Stats.ToJsonOptionsObject;

        /**
         * Patterns that will be used to match against asset names to exclude them from the report.
         * If pattern is a string it will be converted to RegExp via `new RegExp(str)`.
         * If pattern is a function it should have the following signature `(assetName: string) => boolean`
         * and should return true to exclude matching asset.
         * If multiple patterns are provided asset should match at least one of them to be excluded.
         * @default null
         */
        excludeAssets?: null | ExcludeAssetsPattern | ExcludeAssetsPattern[];

        /**
         * Log level. Can be "info", "warn", "error" or "silent".
         * @default 'info'
         */
        logLevel?: 'info' | 'warn' | 'error' | 'silent';
    }
}

export class BundleAnalyzerPlugin extends Plugin {
    constructor(options?: BundleAnalyzerPlugin.Options);

    apply(compiler: Compiler): void;
}

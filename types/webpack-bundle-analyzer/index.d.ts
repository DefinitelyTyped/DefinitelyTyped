// Type definitions for webpack-bundle-analyzer 4.6
// Project: https://github.com/webpack-contrib/webpack-bundle-analyzer
// Definitions by: Michael Strobel <https://github.com/kryops>
//                 Max Boguslavskiy <https://github.com/maxbogus>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="node" />

import { Server } from 'http';
import { AddressInfo } from 'net';
import { WebpackPluginInstance, Compiler, StatsOptions, Stats as WebpackStats } from 'webpack';

export namespace BundleAnalyzerPlugin {
    // Copied from @types/webpack@4 as webpack@5 only has `any` defined at the moment.
    // See https://github.com/webpack/webpack/issues/11630
    namespace Stats {
        type Preset = boolean | 'errors-only' | 'errors-warnings' | 'minimal' | 'none' | 'normal' | 'verbose';

        type ToJsonOptionsObject = StatsOptions;

        type ToJsonOptions = Preset | ToJsonOptionsObject;

        type StatsExcludeFilter =
            | string
            | string[]
            | RegExp
            | RegExp[]
            | ((assetName: string) => boolean)
            | Array<(assetName: string) => boolean>;
    }

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
        analyzerMode?: 'server' | 'static' | 'json' | 'disabled' | undefined;

        /**
         * Host that will be used in `server` mode to start HTTP server.
         * @default '127.0.0.1'
         */
        analyzerHost?: string | undefined;

        /**
         * Port that will be used in `server` mode to start HTTP server.
         * @default 8888
         */
        analyzerPort?: number | 'auto' | undefined;

        /**
         * The URL printed to console with server mode.
         * @default 'http://${listenHost}:${boundAddress.port}'
         */
        analyzerUrl?: (options: { listenPort: string, listenHost: string, boundAddress: AddressInfo }) => string;

        /**
         * Path to bundle report file that will be generated in "static" mode.
         * Relative to bundles output directory.
         * @default 'report.html'
         */
        reportFilename?: string | undefined;

        /**
         * Content of the HTML title element; or a function of the form () => string that provides the content.
         * @default function that returns pretty printed current date and time.
         */
        reportTitle?: string | (() => string) | undefined;

        /**
         * Module sizes to show in report by default.
         * Should be one of "stat", "parsed" or "gzip".
         * @default 'parsed'
         */
        defaultSizes?: 'parsed' | 'stat' | 'gzip' | undefined;

        /**
         * Automatically open report in default browser.
         * @default true
         */
        openAnalyzer?: boolean | undefined;

        /**
         * If true, Webpack Stats JSON file will be generated in bundles output directory.
         * @default false
         */
        generateStatsFile?: boolean | undefined;

        /**
         * Name of Webpack Stats JSON file that will be generated if generateStatsFile is true.
         * Relative to bundles output directory.
         * @default 'stats.json'
         */
        statsFilename?: string | undefined;

        /**
         * Options for stats.toJson() method.
         * For example you can exclude sources of your modules from stats file with "source: false" option.
         * @default null
         */
        statsOptions?: null | Stats.ToJsonOptions | undefined;

        /**
         * Patterns that will be used to match against asset names to exclude them from the report.
         * If pattern is a string it will be converted to RegExp via `new RegExp(str)`.
         * If pattern is a function it should have the following signature `(assetName: string) => boolean`
         * and should return true to exclude matching asset.
         * If multiple patterns are provided asset should match at least one of them to be excluded.
         * @default null
         */
        excludeAssets?: null | ExcludeAssetsPattern | ExcludeAssetsPattern[] | undefined;

        /**
         * Log level. Can be "info", "warn", "error" or "silent".
         * @default 'info'
         */
        logLevel?: 'info' | 'warn' | 'error' | 'silent' | undefined;
    }

    interface JsonReportItem {
        label: string;
        /** in bytes */
        gzipSize: number;
        concatenated?: boolean | undefined;
        /** in bytes */
        statSize: number;
        /** in bytes */
        parsedSize: number;

        groups?: JsonReportItem[] | undefined;
        path?: string | undefined;
        inaccurateSizes?: boolean | undefined;
        id?: number | null | undefined;
        isAsset?: boolean | undefined;
    }

    /** The json report that will be produced if `analyzerMode: 'json'` */
    type JsonReport = JsonReportItem[];
}

export class BundleAnalyzerPlugin implements WebpackPluginInstance {
    opts: BundleAnalyzerPlugin.Options;
    compiler?: Compiler;
    server: null | Server;

    constructor(options?: BundleAnalyzerPlugin.Options);

    apply(compiler: Compiler): void;
    /** @async */
    startAnalyzerServer: (stats: WebpackStats) => Promise<void>;
    /** @async */
    generateJSONReport: (stats: WebpackStats) => Promise<void>;
    generateStatsFile: (stats: WebpackStats) => Promise<void>;
    /** @async */
    generateStaticReport: (stats: WebpackStats) => Promise<void>;
    getBundleDirFromCompiler: () => null | string;
}

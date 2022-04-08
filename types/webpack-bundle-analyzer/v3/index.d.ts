// Type definitions for webpack-bundle-analyzer 3.9
// Project: https://github.com/webpack-contrib/webpack-bundle-analyzer
// Definitions by: Michael Strobel <https://github.com/kryops>
//                 Vladimir Grenaderov <https://github.com/VladimirGrenaderov>
//                 Max Boguslavskiy <https://github.com/maxbogus>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { WebpackPluginInstance, Compiler } from 'webpack';

export namespace BundleAnalyzerPlugin {
    // Copied from @types/webpack@4 as webpack@5 only has `any` defined at the moment.
    // See https://github.com/webpack/webpack/issues/11630
    namespace Stats {
        type Preset
            = boolean
            | 'errors-only'
            | 'errors-warnings'
            | 'minimal'
            | 'none'
            | 'normal'
            | 'verbose';

        interface ToJsonOptionsObject {
            /** fallback value for stats options when an option is not defined (has precedence over local webpack defaults) */
            all?: boolean;
            /** Add asset Information */
            assets?: boolean;
            /** Sort assets by a field */
            assetsSort?: string;
            /** Add built at time information */
            builtAt?: boolean;
            /** Add information about cached (not built) modules */
            cached?: boolean;
            /** Show cached assets (setting this to `false` only shows emitted files) */
            cachedAssets?: boolean;
            /** Add children information */
            children?: boolean;
            /** Add information about the `namedChunkGroups` */
            chunkGroups?: boolean;
            /** Add built modules information to chunk information */
            chunkModules?: boolean;
            /** Add the origins of chunks and chunk merging info */
            chunkOrigins?: boolean;
            /** Add chunk information (setting this to `false` allows for a less verbose output) */
            chunks?: boolean;
            /** Sort the chunks by a field */
            chunksSort?: string;
            /** Context directory for request shortening */
            context?: string;
            /** Display the distance from the entry point for each module */
            depth?: boolean;
            /** Display the entry points with the corresponding bundles */
            entrypoints?: boolean;
            /** Add --env information */
            env?: boolean;
            /** Add errors */
            errors?: boolean;
            /** Add details to errors (like resolving log) */
            errorDetails?: boolean;
            /** Exclude assets from being displayed in stats */
            excludeAssets?: StatsExcludeFilter;
            /** Exclude modules from being displayed in stats */
            excludeModules?: StatsExcludeFilter;
            /** See excludeModules */
            exclude?: StatsExcludeFilter;
            /** Add the hash of the compilation */
            hash?: boolean;
            /** Set the maximum number of modules to be shown */
            maxModules?: number;
            /** Add built modules information */
            modules?: boolean;
            /** Sort the modules by a field */
            modulesSort?: string;
            /** Show dependencies and origin of warnings/errors */
            moduleTrace?: boolean;
            /** Add public path information */
            publicPath?: boolean;
            /** Add information about the reasons why modules are included */
            reasons?: boolean;
            /** Add the source code of modules */
            source?: boolean;
            /** Add timing information */
            timings?: boolean;
            /** Add webpack version information */
            version?: boolean;
            /** Add warnings */
            warnings?: boolean;
            /** Show which exports of a module are used */
            usedExports?: boolean;
            /** Filter warnings to be shown */
            warningsFilter?: string | RegExp | Array<string | RegExp> | ((warning: string) => boolean);
            /** Show performance hint when file size exceeds `performance.maxAssetSize` */
            performance?: boolean;
            /** Show the exports of the modules */
            providedExports?: boolean;
        }

        type ToJsonOptions = Preset | ToJsonOptionsObject;

        type StatsExcludeFilter = string | string[] | RegExp | RegExp[] | ((assetName: string) => boolean) | Array<(assetName: string) => boolean>;
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
         * Content of the HTML title element; or a function of the form () => string that provides the content.
         * @default function that returns pretty printed current date and time.
         */
        reportTitle?: string | (() => string);

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

    interface JsonReportItem {
        label: string;
        /** in bytes */
        gzipSize: number;
        concatenated?: boolean;
        /** in bytes */
        statSize: number;
        /** in bytes */
        parsedSize: number;

        groups?: JsonReportItem[];
        path?: string;
        inaccurateSizes?: boolean;
        id?: number | null;
        isAsset?: boolean;
    }

    /** The json report that will be produced if `analyzerMode: 'json'` */
    type JsonReport = JsonReportItem[];
}

export class BundleAnalyzerPlugin implements WebpackPluginInstance {
    constructor(options?: BundleAnalyzerPlugin.Options);

    apply(compiler: Compiler): void;
}

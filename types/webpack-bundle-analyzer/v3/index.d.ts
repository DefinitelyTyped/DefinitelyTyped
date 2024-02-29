import { Compiler, WebpackPluginInstance } from "webpack";

export namespace BundleAnalyzerPlugin {
    // Copied from @types/webpack@4 as webpack@5 only has `any` defined at the moment.
    // See https://github.com/webpack/webpack/issues/11630
    namespace Stats {
        type Preset =
            | boolean
            | "errors-only"
            | "errors-warnings"
            | "minimal"
            | "none"
            | "normal"
            | "verbose";

        interface ToJsonOptionsObject {
            /** fallback value for stats options when an option is not defined (has precedence over local webpack defaults) */
            all?: boolean | undefined;
            /** Add asset Information */
            assets?: boolean | undefined;
            /** Sort assets by a field */
            assetsSort?: string | undefined;
            /** Add built at time information */
            builtAt?: boolean | undefined;
            /** Add information about cached (not built) modules */
            cached?: boolean | undefined;
            /** Show cached assets (setting this to `false` only shows emitted files) */
            cachedAssets?: boolean | undefined;
            /** Add children information */
            children?: boolean | undefined;
            /** Add information about the `namedChunkGroups` */
            chunkGroups?: boolean | undefined;
            /** Add built modules information to chunk information */
            chunkModules?: boolean | undefined;
            /** Add the origins of chunks and chunk merging info */
            chunkOrigins?: boolean | undefined;
            /** Add chunk information (setting this to `false` allows for a less verbose output) */
            chunks?: boolean | undefined;
            /** Sort the chunks by a field */
            chunksSort?: string | undefined;
            /** Context directory for request shortening */
            context?: string | undefined;
            /** Display the distance from the entry point for each module */
            depth?: boolean | undefined;
            /** Display the entry points with the corresponding bundles */
            entrypoints?: boolean | undefined;
            /** Add --env information */
            env?: boolean | undefined;
            /** Add errors */
            errors?: boolean | undefined;
            /** Add details to errors (like resolving log) */
            errorDetails?: boolean | undefined;
            /** Exclude assets from being displayed in stats */
            excludeAssets?: StatsExcludeFilter | undefined;
            /** Exclude modules from being displayed in stats */
            excludeModules?: StatsExcludeFilter | undefined;
            /** See excludeModules */
            exclude?: StatsExcludeFilter | undefined;
            /** Add the hash of the compilation */
            hash?: boolean | undefined;
            /** Set the maximum number of modules to be shown */
            maxModules?: number | undefined;
            /** Add built modules information */
            modules?: boolean | undefined;
            /** Sort the modules by a field */
            modulesSort?: string | undefined;
            /** Show dependencies and origin of warnings/errors */
            moduleTrace?: boolean | undefined;
            /** Add public path information */
            publicPath?: boolean | undefined;
            /** Add information about the reasons why modules are included */
            reasons?: boolean | undefined;
            /** Add the source code of modules */
            source?: boolean | undefined;
            /** Add timing information */
            timings?: boolean | undefined;
            /** Add webpack version information */
            version?: boolean | undefined;
            /** Add warnings */
            warnings?: boolean | undefined;
            /** Show which exports of a module are used */
            usedExports?: boolean | undefined;
            /** Filter warnings to be shown */
            warningsFilter?: string | RegExp | Array<string | RegExp> | ((warning: string) => boolean) | undefined;
            /** Show performance hint when file size exceeds `performance.maxAssetSize` */
            performance?: boolean | undefined;
            /** Show the exports of the modules */
            providedExports?: boolean | undefined;
        }

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
        analyzerMode?: "server" | "static" | "json" | "disabled" | undefined;

        /**
         * Host that will be used in `server` mode to start HTTP server.
         * @default '127.0.0.1'
         */
        analyzerHost?: string | undefined;

        /**
         * Port that will be used in `server` mode to start HTTP server.
         * @default 8888
         */
        analyzerPort?: number | "auto" | undefined;

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
        defaultSizes?: "parsed" | "stat" | "gzip" | undefined;

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
        statsOptions?: null | Stats.ToJsonOptionsObject | undefined;

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
        logLevel?: "info" | "warn" | "error" | "silent" | undefined;
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
    constructor(options?: BundleAnalyzerPlugin.Options);

    apply(compiler: Compiler): void;
}

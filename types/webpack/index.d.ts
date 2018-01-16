// Type definitions for webpack 3.8
// Project: https://github.com/webpack/webpack
// Definitions by: Qubo <https://github.com/tkqubo>
//                 Benjamin Lim <https://github.com/bumbleblym>
//                 Boris Cherny <https://github.com/bcherny>
//                 Tommy Troy Lin <https://github.com/tommytroylin>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Jonathan Creamer <https://github.com/jcreamer898>
//                 Ahmed T. Ali <https://github.com/ahmed-taj>
//                 Alan Agius <https://github.com/alan-agius4>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as Tapable from 'tapable';
import * as UglifyJS from 'uglify-js';

export = webpack;

declare function webpack(
    options: webpack.Configuration,
    handler: webpack.Compiler.Handler
): webpack.Compiler.Watching | webpack.Compiler;
declare function webpack(options?: webpack.Configuration): webpack.Compiler;

declare function webpack(
    options: webpack.Configuration[],
    handler: webpack.MultiCompiler.Handler
): webpack.MultiWatching | webpack.MultiCompiler;
declare function webpack(options: webpack.Configuration[]): webpack.MultiCompiler;

declare namespace webpack {
    interface Configuration {
        /** Name of the configuration. Used when loading multiple configurations. */
        name?: string;
        /**
         * The base directory (absolute path!) for resolving the `entry` option.
         * If `output.pathinfo` is set, the included pathinfo is shortened to this directory.
         */
        context?: string;
        entry?: string | string[] | Entry | EntryFunc;
        /** Choose a style of source mapping to enhance the debugging process. These values can affect build and rebuild speed dramatically. */
        devtool?: Options.Devtool;
        /** Options affecting the output. */
        output?: Output;
        /** Options affecting the normal modules (NormalModuleFactory) */
        module?: Module;
        /** Options affecting the resolving of modules. */
        resolve?: Resolve;
        /** Like resolve but for loaders. */
        resolveLoader?: ResolveLoader;
        /**
         *  Specify dependencies that shouldn’t be resolved by webpack, but should become dependencies of the resulting bundle.
         *  The kind of the dependency depends on output.libraryTarget.
         */
        externals?: ExternalsElement | ExternalsElement[];
        /**
         * <ul>
         *   <li>"web" Compile for usage in a browser-like environment (default)</li>
         *   <li>"webworker" Compile as WebWorker</li>
         *   <li>"node" Compile for usage in a node.js-like environment (use require to load chunks)</li>
         *   <li>"async-node" Compile for usage in a node.js-like environment (use fs and vm to load chunks async)</li>
         *   <li>"node-webkit" Compile for usage in webkit, uses jsonp chunk loading but also supports builtin node.js modules plus require(“nw.gui”) (experimental)</li>
         *   <li>"atom" Compile for usage in electron (formerly known as atom-shell), supports require for modules necessary to run Electron.</li>
         *   <li>"electron-renderer" Compile for Electron for renderer process, providing a target using JsonpTemplatePlugin, FunctionModulePlugin
         *        for browser environments and NodeTargetPlugin and ExternalsPlugin for CommonJS and Electron built-in modules.<li>
         *   <li>"electron-main" Compile for Electron for main process.</li>
         *   <li>"atom" Alias for electron-main</li>
         *   <li>"electron" Alias for electron-main</li>
         * <ul>
         */
        target?: 'web' | 'webworker' | 'node' | 'async-node' | 'node-webkit' | 'atom' | 'electron' | 'electron-renderer' | 'electron-main' | ((compiler?: any) => void);
        /** Report the first error as a hard error instead of tolerating it. */
        bail?: boolean;
        /** Capture timing information for each module. */
        profile?: boolean;
        /** Cache generated modules and chunks to improve performance for multiple incremental builds. */
        cache?: boolean | any;
        /** Enter watch mode, which rebuilds on file change. */
        watch?: boolean;
        watchOptions?: Options.WatchOptions;
        /** Switch loaders to debug mode. */
        debug?: boolean;
        /** Can be used to configure the behaviour of webpack-dev-server when the webpack config is passed to webpack-dev-server CLI. */
        devServer?: any; // TODO: Type this
        /** Include polyfills or mocks for various node stuff */
        node?: Node;
        /** Set the value of require.amd and define.amd. */
        amd?: { [moduleName: string]: boolean };
        /** Used for recordsInputPath and recordsOutputPath */
        recordsPath?: string;
        /** Load compiler state from a json file. */
        recordsInputPath?: string;
        /** Store compiler state to a json file. */
        recordsOutputPath?: string;
        /** Add additional plugins to the compiler. */
        plugins?: Plugin[];
        /** Stats options for logging  */
        stats?: Options.Stats;
        /** Performance options */
        performance?: Options.Performance;
        /** Limit the number of parallel processed modules. Can be used to fine tune performance or to get more reliable profiling results */
        parallelism?: number;
    }

    interface Entry {
        [name: string]: string | string[];
    }

    type EntryFunc = () => (string | string[] | Promise<string | string[]>);

    interface DevtoolModuleFilenameTemplateInfo {
        identifier: string;
        shortIdentifier: string;
        resource: any;
        resourcePath: string;
        absoluteResourcePath: string;
        allLoaders: any[];
        query: string;
        moduleId: string;
        hash: string;
    }

    interface Output {
        /** The output directory as absolute path (required). */
        path?: string;
        /** The filename of the entry chunk as relative path inside the output.path directory. */
        filename?: string;
        /** The filename of non-entry chunks as relative path inside the output.path directory. */
        chunkFilename?: string;
        /** The filename of the SourceMaps for the JavaScript files. They are inside the output.path directory. */
        sourceMapFilename?: string;
        /** Filename template string of function for the sources array in a generated SourceMap. */
        devtoolModuleFilenameTemplate?: string | ((info: DevtoolModuleFilenameTemplateInfo) => string);
        /** Similar to output.devtoolModuleFilenameTemplate, but used in the case of duplicate module identifiers. */
        devtoolFallbackModuleFilenameTemplate?: string | ((info: DevtoolModuleFilenameTemplateInfo) => string);
        /**
         * Enable line to line mapped mode for all/specified modules.
         * Line to line mapped mode uses a simple SourceMap where each line of the generated source is mapped to the same line of the original source.
         * It’s a performance optimization. Only use it if your performance need to be better and you are sure that input lines match which generated lines.
         * true enables it for all modules (not recommended)
         */
        devtoolLineToLine?: boolean;
        /** The filename of the Hot Update Chunks. They are inside the output.path directory. */
        hotUpdateChunkFilename?: string;
        /** The filename of the Hot Update Main File. It is inside the output.path directory. */
        hotUpdateMainFilename?: string;
        /** The output.path from the view of the Javascript / HTML page. */
        publicPath?: string;
        /** The JSONP function used by webpack for asnyc loading of chunks. */
        jsonpFunction?: string;
        /** The JSONP function used by webpack for async loading of hot update chunks. */
        hotUpdateFunction?: string;
        /** Include comments with information about the modules. */
        pathinfo?: boolean;
        /** If set, export the bundle as library. output.library is the name. */
        library?: string | string[];
        /**
         * Which format to export the library:
         * <ul>
         *   <li>"var" - Export by setting a variable: var Library = xxx (default)</li>
         *   <li>"this" - Export by setting a property of this: this["Library"] = xxx</li>
         *   <li>"commonjs" - Export by setting a property of exports: exports["Library"] = xxx</li>
         *   <li>"commonjs2" - Export by setting module.exports: module.exports = xxx</li>
         *   <li>"amd" - Export to AMD (optionally named)</li>
         *   <li>"umd" - Export to AMD, CommonJS2 or as property in root</li>
         *   <li>"window" - Assign to widnow</li>
         *   <li>"assign" - Assign to a global variable</li>
         *   <li>"jsonp" - Generate Webpack JSONP module<li>
         * </ul>
         */
        libraryTarget?: 'var' | 'this' | 'commonjs' | 'commonjs2' | 'amd' | 'umd' | 'window' | 'assign' | 'jsonp';
        /** Configure which module or modules will be exposed via the `libraryTarget` */
        libraryExport?: string | string[];
        /** If output.libraryTarget is set to umd and output.library is set, setting this to true will name the AMD module. */
        umdNamedDefine?: boolean;
        /** Prefixes every line of the source in the bundle with this string. */
        sourcePrefix?: string;
        /** This option enables cross-origin loading of chunks. */
        crossOriginLoading?: string | boolean;
    }

    interface BaseModule {
        /** A array of applied pre loaders. */
        preLoaders?: Rule[];
        /** A array of applied post loaders. */
        postLoaders?: Rule[];
        /** A RegExp or an array of RegExps. Don’t parse files matching. */
        noParse?: RegExp | RegExp[] | ((content: string) => boolean);
        unknownContextRequest?: string;
        unknownContextRecursive?: boolean;
        unknownContextRegExp?: RegExp;
        unknownContextCritical?: boolean;
        exprContextRequest?: string;
        exprContextRegExp?: RegExp;
        exprContextRecursive?: boolean;
        exprContextCritical?: boolean;
        wrappedContextRegExp?: RegExp;
        wrappedContextRecursive?: boolean;
        wrappedContextCritical?: boolean;
        strictExportPresence?: boolean;
    }
    interface OldModule extends BaseModule {
        /** An array of automatically applied loaders. */
        loaders: Rule[];
    }
    interface NewModule extends BaseModule {
        /** An array of rules applied for modules. */
        rules: Rule[];
    }

    type Module = OldModule | NewModule;

    interface Resolve {
        /**
         * A list of directories to resolve modules from.
         *
         * Absolute paths will be searched once.
         *
         * If an entry is relative, will be resolved using node's resolution algorithm
         * relative to the requested file.
         *
         * Defaults to `["node_modules"]`
         */
        modules?: string[];

        /**
         * A list of package description files to search for.
         *
         * Defaults to `["package.json"]`
         */
        descriptionFiles?: string[];

        /**
         * A list of fields in a package description object to use for finding
         * the entry point.
         *
         * Defaults to `["browser", "module", "main"]` or `["module", "main"]`,
         * depending on the value of the `target` `Configuration` value.
         */
        mainFields?: string[];

        /**
         * A list of fields in a package description object to try to parse
         * in the same format as the `alias` resolve option.
         *
         * Defaults to `["browser"]` or `[]`, depending on the value of the
         * `target` `Configuration` value.
         *
         * @see alias
         */
        aliasFields?: string[];

        /**
         * A list of file names to search for when requiring directories that
         * don't contain a package description file.
         *
         * Defaults to `["index"]`.
         */
        mainFiles?: string[];

        /**
         * A list of file extensions to try when requesting files.
         *
         * An empty string is considered invalid.
         */
        extensions?: string[];

        /**
         * If true, requires that all requested paths must use an extension
         * from `extensions`.
         */
        enforceExtension?: boolean;

        /**
         * Replace the given module requests with other modules or paths.
         *
         * @see aliasFields
         */
        alias?: { [key: string]: string; };

        /**
         * Whether to use a cache for resolving, or the specific object
         * to use for caching. Sharing objects may be useful when running
         * multiple webpack compilers.
         *
         * Defaults to `true`.
         */
        unsafeCache?: {} | boolean;

        /**
         * A function used to decide whether to cache the given resolve request.
         *
         * Defaults to `() => true`.
         */
        cachePredicate?(data: { path: string, request: string }): boolean;

        /**
         * A list of additional resolve plugins which should be applied.
         */
        plugins?: ResolvePlugin[];

        /**
         * Whether to resolve symlinks to their symlinked location.
         *
         * Defaults to `true`
         */
        symlinks?: boolean;
    }

    interface ResolveLoader extends Resolve {
        /**
         * List of strings to append to a loader's name when trying to resolve it.
         */
        moduleExtensions?: string[];

        enforceModuleExtension?: boolean;
    }

    type ExternalsElement = string | RegExp | ExternalsObjectElement | ExternalsFunctionElement;

    interface ExternalsObjectElement {
        [key: string]: boolean | string;
    }

    type ExternalsFunctionElement = (context: any, request: any, callback: (error: any, result: any) => void) => any;

    interface Node {
        console?: boolean;
        global?: boolean;
        process?: boolean;
        Buffer?: boolean;
        __filename?: boolean | string;
        __dirname?: boolean | string;
        [nodeBuiltin: string]: boolean | string | undefined;
    }

    interface BaseConditionSpec {
        /** The Condition must match. The convention is the provide a string or array of strings here, but it's not enforced. */
        include?: Condition;
        /** The Condition must NOT match. The convention is the provide a string or array of strings here, but it's not enforced. */
        exclude?: Condition;
    }
    interface TestConditionSpec extends BaseConditionSpec {
        /** The Condition must match. The convention is the provide a RegExp or array of RegExps here, but it's not enforced. */
        test: Condition;
    }
    interface AndConditionSpec extends BaseConditionSpec {
        /** All Conditions must match. */
        and: Condition[];
    }
    interface OrConditionSpec extends BaseConditionSpec {
        /** Any Condition must match. */
        or: Condition[];
    }
    interface NotConditionSpec extends BaseConditionSpec {
        /** The Condition must NOT match. */
        not: Condition;
    }
    type ConditionSpec = TestConditionSpec | OrConditionSpec | AndConditionSpec | NotConditionSpec;

    // tslint:disable-next-line:no-empty-interface
    interface ConditionArray extends Array<Condition> { }
    type Condition = string | RegExp | ((absPath: string) => boolean) | ConditionSpec | ConditionArray;

    interface OldLoader {
        loader: string;
        query?: { [name: string]: any };
    }
    interface NewLoader {
        loader: string;
        options?: { [name: string]: any };
    }
    type Loader = string | OldLoader | NewLoader;

    /**
     * There are direct and delegate rules. Direct Rules need a test, Delegate rules delegate to subrules bringing their own.
     * Direct rules can optionally contain delegate keys (oneOf, rules).
     *
     * These types exist to enforce that a rule has the keys `((loader XOR loaders) AND test) OR oneOf OR rules`
     */
    interface BaseRule {
        /**
         * Specifies the category of the loader. No value means normal loader.
         *
         * There is also an additional category "inlined loader" which are loaders applied inline of the import/require.
         *
         * All loaders are sorted in the order post, inline, normal, pre and used in this order.
         *
         * All normal loaders can be omitted (overridden) by prefixing ! in the request.
         *
         * All normal and pre loaders can be omitted (overridden) by prefixing -! in the request.
         *
         * All normal, post and pre loaders can be omitted (overridden) by prefixing !! in the request.
         *
         * Inline loaders and ! prefixes should not be used as they are non-standard. They may be use by loader generated code.
         */
        enforce?: 'pre' | 'post';
        /** A condition that must be met */
        test?: Condition | Condition[];
        /** A condition that must not be met */
        exclude?: Condition | Condition[];
        /** A condition that must be met */
        include?: Condition | Condition[];
        /** A Condition matched with the resource. */
        resource?: Condition | Condition[];
        /** A condition matched with the issuer */
        issuer?: Condition | Condition[];
        /**
         * An object with parser options. All applied parser options are merged.
         *
         * For each different parser options object a new parser is created and plugins can apply plugins depending on the parser options.
         * Many of the default plugins apply their parser plugins only if a property in the parser options is not set or true.
         */
        parser?: { [optName: string]: any };
        /** An array of Rules that is also used when the Rule matches. */
        rules?: Rule[];
        /** An array of Rules from which only the first matching Rule is used when the Rule matches. */
        oneOf?: Rule[];
    }
    interface BaseDirectRule extends BaseRule {
        /** A condition that must be met */
        test: Condition | Condition[];
    }
    // Direct Rules
    interface BaseSingleLoaderRule extends BaseDirectRule {
        /** Loader name or an object with name and options */
        loader: Loader;
    }
    interface OldLoaderRule extends BaseSingleLoaderRule {
        /**
         * Loader options
         * @deprecated:
         */
        query?: { [name: string]: any };
    }
    interface NewLoaderRule extends BaseSingleLoaderRule {
        options?: { [name: string]: any };
    }
    type LoaderRule = OldLoaderRule | NewLoaderRule;
    interface OldUseRule extends BaseDirectRule {
        /**
         * A array of loaders.
         * @deprecated  use `use` instead
         */
        loaders: string[];
    }
    interface NewUseRule extends BaseDirectRule {
        /** A loader or array of loaders */
        use: Loader | Loader[];
    }
    type UseRule = OldUseRule | NewUseRule;

    // Delegate Rules
    interface RulesRule extends BaseRule {
        /** An array of Rules that is also used when the Rule matches. */
        rules: Rule[];
    }
    interface OneOfRule extends BaseRule {
        oneOf: Rule[];
    }
    type Rule = LoaderRule | UseRule | RulesRule | OneOfRule;

    namespace Options {
        // tslint:disable-next-line:max-line-length
        type Devtool = 'eval' | 'inline-source-map' | 'cheap-eval-source-map' | 'cheap-source-map' | 'cheap-module-eval-source-map' | 'cheap-module-source-map' | 'eval-source-map' | 'source-map' |
            'nosources-source-map' | 'hidden-source-map' | 'nosources-source-map' | '@eval' | '@inline-source-map' | '@cheap-eval-source-map' | '@cheap-source-map' | '@cheap-module-eval-source-map' |
            '@cheap-module-source-map' | '@eval-source-map' | '@source-map' | '@nosources-source-map' | '@hidden-source-map' | '@nosources-source-map' | '#eval' | '#inline-source-map' |
            '#cheap-eval-source-map' | '#cheap-source-map' | '#cheap-module-eval-source-map' | '#cheap-module-source-map' | '#eval-source-map' | '#source-map' | '#nosources-source-map' |
            '#hidden-source-map' | '#nosources-source-map' | '#@eval' | '#@inline-source-map' | '#@cheap-eval-source-map' | '#@cheap-source-map' | '#@cheap-module-eval-source-map' |
            '#@cheap-module-source-map' | '#@eval-source-map' | '#@source-map' | '#@nosources-source-map' | '#@hidden-source-map' | '#@nosources-source-map' | boolean;

        interface Performance {
            /** This property allows webpack to control what files are used to calculate performance hints. */
            assetFilter?(assetFilename: string): boolean;
            /**
             * Turns hints on/off. In addition, tells webpack to throw either an error or a warning when hints are
             * found. This property is set to "warning" by default.
             */
            hints?: 'warning' | 'error' | false;
            /**
             * An asset is any emitted file from webpack. This option controls when webpack emits a performance hint
             * based on individual asset size. The default value is 250000 (bytes).
             */
            maxAssetSize?: number;
            /**
             * An entrypoint represents all assets that would be utilized during initial load time for a specific entry.
             * This option controls when webpack should emit performance hints based on the maximum entrypoint size.
             * The default value is 250000 (bytes).
             */
            maxEntrypointSize?: number;
        }
        type Stats = webpack.Stats.ToStringOptions;
        type WatchOptions = ICompiler.WatchOptions;
    }

    // tslint:disable-next-line:interface-name
    interface ICompiler {
        run(handler: ICompiler.Handler): void;
        watch(watchOptions: ICompiler.WatchOptions, handler: ICompiler.Handler): Watching;
    }

    namespace ICompiler {
        type Handler = (err: Error, stats: Stats) => void;

        interface WatchOptions {
            /**
             * Add a delay before rebuilding once the first file changed. This allows webpack to aggregate any other
             * changes made during this time period into one rebuild.
             * Pass a value in milliseconds. Default: 300.
             */
            aggregateTimeout?: number;
            /**
             * For some systems, watching many file systems can result in a lot of CPU or memory usage.
             * It is possible to exclude a huge folder like node_modules.
             * It is also possible to use anymatch patterns.
             */
            ignored?: string | RegExp;
            /** Turn on polling by passing true, or specifying a poll interval in milliseconds. */
            poll?: boolean | number;
        }
    }

    interface Watching {
        close(callback: () => void): void;
        invalidate(): void;
    }

    class Compiler extends Tapable implements ICompiler {
        constructor();

        name: string;
        options: Configuration;
        outputFileSystem: any;
        run(handler: Compiler.Handler): void;
        watch(watchOptions: Compiler.WatchOptions, handler: Compiler.Handler): Compiler.Watching;
    }

    namespace Compiler {
        type Handler = ICompiler.Handler;
        type WatchOptions = ICompiler.WatchOptions;

        class Watching implements webpack.Watching {
            constructor(compiler: Compiler, watchOptions: Watching.WatchOptions, handler: Watching.Handler);

            close(callback: () => void): void;
            invalidate(): void;
        }

        namespace Watching {
            type WatchOptions = ICompiler.WatchOptions;
            type Handler = ICompiler.Handler;
        }
    }

    abstract class MultiCompiler extends Tapable implements ICompiler {
        compilers: ICompiler[];
        run(handler: MultiCompiler.Handler): void;
        watch(watchOptions: MultiCompiler.WatchOptions, handler: MultiCompiler.Handler): MultiWatching;
    }

    namespace MultiCompiler {
        type Handler = ICompiler.Handler;
        type WatchOptions = ICompiler.WatchOptions;
    }

    abstract class MultiWatching implements Watching {
        close(callback: () => void): void;
        invalidate(): void;
    }

    abstract class Plugin implements Tapable.Plugin {
        apply(compiler: Compiler): void;
    }

    abstract class ResolvePlugin implements Tapable.Plugin {
        apply(resolver: any /* EnhancedResolve.Resolver */): void;
    }

    abstract class Stats {
        /** Returns true if there were errors while compiling. */
        hasErrors(): boolean;
        /** Returns true if there were warnings while compiling. */
        hasWarnings(): boolean;
        /** Returns compilation information as a JSON object. */
        toJson(options?: Stats.ToJsonOptions): any;
        /** Returns a formatted string of the compilation information (similar to CLI output). */
        toString(options?: Stats.ToStringOptions): string;
    }

    namespace Stats {
        type Preset
            = boolean
            | 'errors-only'
            | 'minimal'
            | 'none'
            | 'normal'
            | 'verbose';

        interface ToJsonOptionsObject {
            /** Add asset Information */
            assets?: boolean;
            /** Sort assets by a field */
            assetsSort?: string;
            /** Add information about cached (not built) modules */
            cached?: boolean;
            /** Show cached assets (setting this to `false` only shows emitted files) */
            cachedAssets?: boolean;
            /** Add children information */
            children?: boolean;
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

        interface ToStringOptionsObject extends ToJsonOptionsObject {
            /** `webpack --colors` equivalent */
            colors?: boolean;
        }

        type ToStringOptions = Preset | ToStringOptionsObject;
    }

    /**
     * Plugins
     */

    class BannerPlugin extends Plugin {
        constructor(options: string | BannerPlugin.Options);
    }

    namespace BannerPlugin {
        type Filter = string | RegExp;

        interface Options {
            banner: string;
            entryOnly?: boolean;
            exclude?: Filter | Filter[];
            include?: Filter | Filter[];
            raw?: boolean;
            test?: Filter | Filter[];
        }
    }

    class ContextReplacementPlugin extends Plugin {
        constructor(resourceRegExp: any, newContentResource?: any, newContentRecursive?: any, newContentRegExp?: any);
    }

    class DefinePlugin extends Plugin {
        constructor(definitions: { [key: string]: any });
    }

    class DllPlugin extends Plugin {
        constructor(options: DllPlugin.Options | DllPlugin.Options[]);
    }

    namespace DllPlugin {
        interface Options {
            /**
             * The context of requests in the manifest file.
             *
             * Defaults to the webpack context.
             */
            context?: string;

            /**
             * The name of the exposed DLL function (keep consistent with `output.library`).
             */
            name: string;

            /**
             * The absolute path to the manifest json file (output).
             */
            path: string;
        }
    }

    class DllReferencePlugin extends Plugin {
        constructor(options: DllReferencePlugin.Options);
    }

    namespace DllReferencePlugin {
        interface Options {
            /**
             * The mappings from the request to module ID.
             *
             * Defaults to `manifest.content`.
             */
            content?: any;

            /**
             * The context of requests in the manifest (or content property).
             *
             * This is an <b>absolute path</b>.
             */
            context: string;

            /**
             * An object containing `content` and `name`.
             */
            manifest: { content: string, name: string } | string;

            /**
             * The name where the DLL is exposed.
             *
             * Defaults to `manifest.name`.
             *
             * See also `externals`.
             */
            name?: string;

            /**
             * The prefix which is used for accessing the content of the DLL.
             */
            scope?: string;

            /**
             * The type how the DLL is exposed.
             *
             * Defaults to `"var"`.
             *
             * See also `externals`.
             */
            sourceType?: string;
        }
    }

    class EvalSourceMapDevToolPlugin extends Plugin {
        constructor(options?: false | string | EvalSourceMapDevToolPlugin.Options);
    }

    namespace EvalSourceMapDevToolPlugin {
        interface Options {
            append?: false | string;
            columns?: boolean;
            lineToLine?: boolean | {
                exclude?: Condition | Condition[];
                include?: Condition | Condition[];
                test?: Condition | Condition[];
            };
            module?: boolean;
            moduleFilenameTemplate?: string;
            sourceRoot?: string;
        }
    }

    class ExtendedAPIPlugin extends Plugin {
        constructor();
    }

    class HashedModuleIdsPlugin extends Plugin {
        constructor(options?: {
            hashFunction?: string,
            hashDigest?: string,
            hashDigestLength?: number
        });
    }

    class HotModuleReplacementPlugin extends Plugin {
        constructor(options?: any);
    }

    class IgnorePlugin extends Plugin {
        constructor(requestRegExp: any, contextRegExp?: any);
    }

    class LoaderOptionsPlugin extends Plugin {
        constructor(options: any);
    }

    class NamedModulesPlugin extends Plugin {
        constructor();
    }

    class NamedChunksPlugin extends Plugin {
        constructor(nameResolver?: (chunk: any) => string | null);
    }

    class NoEmitOnErrorsPlugin extends Plugin {
        constructor();
    }

    /** @deprecated use webpack.NoEmitOnErrorsPlugin */
    class NoErrorsPlugin extends Plugin {
        constructor();
    }

    class NormalModuleReplacementPlugin extends Plugin {
        constructor(resourceRegExp: any, newResource: any);
    }

    class PrefetchPlugin extends Plugin {
        // tslint:disable-next-line:unified-signatures
        constructor(context: any, request: any);
        constructor(request: any);
    }

    class ProgressPlugin extends Plugin {
        constructor(options?: (percentage: number, msg: string) => void);
    }

    class EnvironmentPlugin extends Plugin {
        constructor(envs: string[] | { [key: string]: any });
    }

    class ProvidePlugin extends Plugin {
        constructor(definitions: { [key: string]: any });
    }

    class SourceMapDevToolPlugin extends Plugin {
        constructor(options?: null | false | string | SourceMapDevToolPlugin.Options);
    }

    namespace SourceMapDevToolPlugin {
        /** @todo extend EvalSourceMapDevToolPlugin.Options */
        interface Options {
            append?: false | string;
            columns?: boolean;
            exclude?: Condition | Condition[];
            fallbackModuleFilenameTemplate?: string;
            filename?: null | false | string;
            include?: Condition | Condition[];
            lineToLine?: boolean | {
                exclude?: Condition | Condition[];
                include?: Condition | Condition[];
                test?: Condition | Condition[];
            };
            module?: boolean;
            moduleFilenameTemplate?: string;
            noSources?: boolean;
            sourceRoot?: null | string;
            test?: Condition | Condition[];
        }
    }

    class WatchIgnorePlugin extends Plugin {
        constructor(paths: Array<string | RegExp>);
    }

    namespace optimize {
        class ModuleConcatenationPlugin extends Plugin { }
        class AggressiveMergingPlugin extends Plugin {
            constructor(options?: AggressiveMergingPlugin.Options);
        }

        namespace AggressiveMergingPlugin {
            interface Options {
                /**
                 * When options.moveToParents is set, moving to an entry chunk is more expensive.
                 * Defaults to 10, which means moving to an entry chunk is ten times more expensive than moving to a
                 * normal chunk.
                 */
                entryChunkMultiplicator?: number;
                /**
                 * A factor which defines the minimum required size reduction for chunk merging.
                 * Defaults to 1.5 which means that the total size needs to be reduced by 50% for chunk merging.
                 */
                minSizeReduce?: number;
                /**
                 * When set, modules that are not in both merged chunks are moved to all parents of the chunk.
                 * Defaults to false.
                 */
                moveToParents?: boolean;
            }
        }

        class CommonsChunkPlugin extends Plugin {
            constructor(options?: CommonsChunkPlugin.Options);
        }

        namespace CommonsChunkPlugin {
            type MinChunksFn = (module: any, count: number) => boolean;

            interface Options {
                /**
                 * The chunk name of the commons chunk. An existing chunk can be selected by passing a name of an existing chunk.
                 * If an array of strings is passed this is equal to invoking the plugin multiple times for each chunk name.
                 * If omitted and `options.async` or `options.children` is set all chunks are used,
                 * otherwise `options.filename` is used as chunk name.
                 */
                name?: string;
                names?: string[];

                /**
                 * The filename template for the commons chunk. Can contain the same placeholders as `output.filename`.
                 * If omitted the original filename is not modified (usually `output.filename` or `output.chunkFilename`).
                 */
                filename?: string;

                /**
                 * The minimum number of chunks which need to contain a module before it's moved into the commons chunk.
                 * The number must be greater than or equal 2 and lower than or equal to the number of chunks.
                 * Passing `Infinity` just creates the commons chunk, but moves no modules into it.
                 * By providing a `function` you can add custom logic. (Defaults to the number of chunks)
                 */
                minChunks?: number | MinChunksFn;

                /**
                 * Select the source chunks by chunk names. The chunk must be a child of the commons chunk.
                 * If omitted all entry chunks are selected.
                 */
                chunks?: string[];

                /**
                 * If `true` all children of the commons chunk are selected
                 */
                children?: boolean;

                /**
                 * If `true` a new async commons chunk is created as child of `options.name` and sibling of `options.chunks`.
                 * It is loaded in parallel with `options.chunks`. It is possible to change the name of the output file
                 * by providing the desired string instead of `true`.
                 */
                async?: boolean | string;

                /**
                 * Minimum size of all common module before a commons chunk is created.
                 */
                minSize?: number;
            }
        }

        /** @deprecated */
        class DedupePlugin extends Plugin {
            constructor();
        }

        class LimitChunkCountPlugin extends Plugin {
            constructor(options: any);
        }

        class MinChunkSizePlugin extends Plugin {
            constructor(options: any);
        }

        class OccurrenceOrderPlugin extends Plugin {
            constructor(preferEntry: boolean);
        }

        class UglifyJsPlugin extends Plugin {
            constructor(options?: UglifyJsPlugin.Options);
        }

        namespace UglifyJsPlugin {
            type CommentFilter = (astNode: any, comment: any) => boolean;

            interface Options extends UglifyJS.MinifyOptions {
                beautify?: boolean;
                comments?: boolean | RegExp | CommentFilter;
                exclude?: Condition | Condition[];
                include?: Condition | Condition[];
                /** Parallelization can speedup your build significantly and is therefore highly recommended. */
                parallel?: boolean | { cache: boolean, workers: boolean | number };
                sourceMap?: boolean;
                test?: Condition | Condition[];
            }
        }
    }

    namespace dependencies {
    }

    namespace loader {
        interface Loader extends Function {
            (this: LoaderContext, source: string | Buffer, sourceMap: string | Buffer): string | Buffer | void | undefined;

            /**
             * The order of chained loaders are always called from right to left.
             * But, in some cases, loaders do not care about the results of the previous loader or the resource.
             * They only care for metadata. The pitch method on the loaders is called from left to right before the loaders are called (from right to left).
             * If a loader delivers a result in the pitch method the process turns around and skips the remaining loaders,
             * continuing with the calls to the more left loaders. data can be passed between pitch and normal call.
             */
            pitch?(remainingRequest: string, precedingRequest: string, data: any): any | undefined;

            /**
             * By default, the resource file is treated as utf-8 string and passed as String to the loader.
             * By setting raw to true the loader is passed the raw Buffer.
             * Every loader is allowed to deliver its result as String or as Buffer.
             * The compiler converts them between loaders.
             */
            raw?: boolean;
        }

        type loaderCallback = (err: Error | undefined | null, content?: string | Buffer, sourceMap?: string | Buffer) => void;

        interface LoaderContext {
            /**
             * Loader API version. Currently 2.
             * This is useful for providing backwards compatibility.
             * Using the version you can specify custom logic or fallbacks for breaking changes.
             */
            version: string;

            /**
             *  The directory of the module. Can be used as context for resolving other stuff.
             *  In the example: /abc because resource.js is in this directory
             */
            context: string;

            /**
             * The resolved request string.
             * In the example: "/abc/loader1.js?xyz!/abc/node_modules/loader2/index.js!/abc/resource.js?rrr"
             */
            request: string;

            /**
             *  A string or any object. The query of the request for the current loader.
             */
            query: any;

            /**
             * A data object shared between the pitch and the normal phase.
             */
            data?: any;

            callback: loaderCallback;

            /**
             * Make this loader async.
             */
            async(): loaderCallback | undefined;

            /**
             *  Make this loader result cacheable. By default it's not cacheable.
             *  A cacheable loader must have a deterministic result, when inputs and dependencies haven't changed.
             *  This means the loader shouldn't have other dependencies than specified with this.addDependency.
             *  Most loaders are deterministic and cacheable.
             */
            cacheable(flag?: boolean): void;

            /**
             * loaders = [{request: string, path: string, query: string, module: function}]
             * An array of all the loaders. It is writeable in the pitch phase.
             * In the example:
             * [
             *   { request: "/abc/loader1.js?xyz",
             *     path: "/abc/loader1.js",
             *     query: "?xyz",
             *     module: [Function]
             *   },
             *   { request: "/abc/node_modules/loader2/index.js",
             *     path: "/abc/node_modules/loader2/index.js",
             *     query: "",
             *     module: [Function]
             *   }
             * ]
             */
            loaders: any[];

            /**
             * The index in the loaders array of the current loader.
             * In the example: in loader1: 0, in loader2: 1
             */
            loaderIndex: number;

            /**
             * The resource part of the request, including query.
             * In the example: "/abc/resource.js?rrr"
             */
            resource: string;

            /**
             * The resource file.
             * In the example: "/abc/resource.js"
             */
            resourcePath: string;

            /**
             * The query of the resource.
             * In the example: "?rrr"
             */
            resourceQuery: string;

            /**
             * Emit a warning.
             */
            emitWarning(message: string | Error): void;

            /**
             * Emit a error.
             */
            emitError(message: string | Error): void;

            /**
             * Execute some code fragment like a module.
             *
             * Don't use require(this.resourcePath), use this function to make loaders chainable!
             *
             */
            exec(code: string, filename: string): any;

            /**
             * Resolve a request like a require expression.
             */
            resolve(context: string, request: string, callback: (err: Error, result: string) => void): any;

            /**
             * Resolve a request like a require expression.
             */
            resolveSync(context: string, request: string): string;

            /**
             * Adds a file as dependency of the loader result in order to make them watchable.
             * For example, html-loader uses this technique as it finds src and src-set attributes.
             * Then, it sets the url's for those attributes as dependencies of the html file that is parsed.
             */
            addDependency(file: string): void;

            /**
             * Adds a file as dependency of the loader result in order to make them watchable.
             * For example, html-loader uses this technique as it finds src and src-set attributes.
             * Then, it sets the url's for those attributes as dependencies of the html file that is parsed.
             */
            dependency(file: string): void;

            /**
             * Add a directory as dependency of the loader result.
             */
            addContextDependency(directory: string): void;

            /**
             * Remove all dependencies of the loader result. Even initial dependencies and these of other loaders. Consider using pitch.
             */
            clearDependencies(): void;

            /**
             * Pass values to the next loader.
             * If you know what your result exports if executed as module, set this value here (as a only element array).
             */
            value: any;

            /**
             * Passed from the last loader.
             * If you would execute the input argument as module, consider reading this variable for a shortcut (for performance).
             */
            inputValue: any;

            /**
             * The options passed to the Compiler.
             */
            options: any;

            /**
             * A boolean flag. It is set when in debug mode.
             */
            debug: boolean;

            /**
             * Should the result be minimized.
             */
            minimize: boolean;

            /**
             * Should a SourceMap be generated.
             */
            sourceMap: boolean;

            /**
             * Target of compilation. Passed from configuration options.
             * Example values: "web", "node"
             */
            target: 'web' | 'webworker' | 'async-node' | 'node' | 'electron-main' | 'electron-renderer' | 'node-webkit' | string;

            /**
             * This boolean is set to true when this is compiled by webpack.
             *
             * Loaders were originally designed to also work as Babel transforms.
             * Therefore if you write a loader that works for both, you can use this property to know if
             * there is access to additional loaderContext and webpack features.
             */
            webpack: boolean;

            /**
             * Emit a file. This is webpack-specific.
             */
            emitFile(name: string, content: Buffer | string, sourceMap: any): void;

            /**
             * Access to the compilation's inputFileSystem property.
             */
            fs: any;

            /**
             * Hacky access to the Compilation object of webpack.
             */
            _compilation: any;

            /**
             * Hacky access to the Compiler object of webpack.
             */
            _compiler: Compiler;

            /**
             * Hacky access to the Module object being loaded.
             */
            _module: any;
        }
    }

    /** @deprecated */
    namespace compiler {
        /** @deprecated use webpack.Compiler */
        type Compiler = webpack.Compiler;

        /** @deprecated use webpack.Compiler.Watching */
        type Watching = webpack.Compiler.Watching;

        /** @deprecated use webpack.Compiler.WatchOptions */
        type WatchOptions = webpack.Compiler.WatchOptions;

        /** @deprecated use webpack.Stats */
        type Stats = webpack.Stats;

        /** @deprecated use webpack.Stats.ToJsonOptions */
        type StatsOptions = webpack.Stats.ToJsonOptions;

        /** @deprecated use webpack.Stats.ToStringOptions */
        type StatsToStringOptions = webpack.Stats.ToStringOptions;

        /** @deprecated use webpack.Compiler.Handler */
        type CompilerCallback = webpack.Compiler.Handler;
    }

    /** @deprecated use webpack.Options.Performance */
    type PerformanceOptions = webpack.Options.Performance;
    /** @deprecated use webpack.Options.WatchOptions */
    type WatchOptions = webpack.Options.WatchOptions;
    /** @deprecated use webpack.EvalSourceMapDevToolPlugin.Options */
    type EvalSourceMapDevToolPluginOptions = webpack.EvalSourceMapDevToolPlugin.Options;
    /** @deprecated use webpack.SourceMapDevToolPlugin.Options */
    type SourceMapDevToolPluginOptions = webpack.SourceMapDevToolPlugin.Options;
    /** @deprecated use webpack.optimize.UglifyJsPlugin.CommentFilter */
    type UglifyCommentFunction = webpack.optimize.UglifyJsPlugin.CommentFilter;
    /** @deprecated use webpack.optimize.UglifyJsPlugin.Options */
    type UglifyPluginOptions = webpack.optimize.UglifyJsPlugin.Options;
}

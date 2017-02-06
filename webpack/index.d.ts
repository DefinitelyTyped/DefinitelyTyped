// Type definitions for webpack 2.2
// Project: https://github.com/webpack/webpack
// Definitions by: Qubo <https://github.com/tkqubo>, Matt Lewis <https://github.com/mattlewis92>, Benjamin Lim <https://github.com/bumbleblym>, Boris Cherny <https://github.com/bcherny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as UglifyJS from 'uglify-js';
import * as tapable from 'tapable';

declare namespace webpack {
    interface Configuration {
        context?: string;
        entry?: string | string[] | Entry;
        /** Choose a style of source mapping to enhance the debugging process. These values can affect build and rebuild speed dramatically. */
        devtool?: 'eval' | 'inline-source-map' | 'cheap-eval-source-map' | 'cheap-source-map' | 'cheap-module-eval-source-map' | 'cheap-module-source-map' | 'eval-source-map' | 'source-map' | 'nosources-source-map' | 'hidden-source-map' | 'nosources-source-map' | '@eval' | '@inline-source-map' | '@cheap-eval-source-map' | '@cheap-source-map' | '@cheap-module-eval-source-map' | '@cheap-module-source-map' | '@eval-source-map' | '@source-map' | '@nosources-source-map' | '@hidden-source-map' | '@nosources-source-map' | '#eval' | '#inline-source-map' | '#cheap-eval-source-map' | '#cheap-source-map' | '#cheap-module-eval-source-map' | '#cheap-module-source-map' | '#eval-source-map' | '#source-map' | '#nosources-source-map' | '#hidden-source-map' | '#nosources-source-map' | '#@eval' | '#@inline-source-map' | '#@cheap-eval-source-map' | '#@cheap-source-map' | '#@cheap-module-eval-source-map' | '#@cheap-module-source-map' | '#@eval-source-map' | '#@source-map' | '#@nosources-source-map' | '#@hidden-source-map' | '#@nosources-source-map' | boolean;
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
         * <ul>
         */
        target?: string;
        /** Report the first error as a hard error instead of tolerating it. */
        bail?: boolean;
        /** Capture timing information for each module. */
        profile?: boolean;
        /** Cache generated modules and chunks to improve performance for multiple incremental builds. */
        cache?: boolean | any;
        /** Enter watch mode, which rebuilds on file change. */
        watch?: boolean;
        watchOptions?: WatchOptions;
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
        stats?: compiler.StatsToStringOptions;
        /** Performance options */
        performance?: Options.Performance;
    }

    interface Entry {
        [name: string]: string | string[];
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
        devtoolModuleFilenameTemplate?: string;
        /** Similar to output.devtoolModuleFilenameTemplate, but used in the case of duplicate module identifiers. */
        devtoolFallbackModuleFilenameTemplate?: string;
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
        library?: string;
        /**
         * Which format to export the library:
         * <ul>
         *   <li>"var" - Export by setting a variable: var Library = xxx (default)</li>
         *   <li>"this" - Export by setting a property of this: this["Library"] = xxx</li>
         *   <li>"commonjs" - Export by setting a property of exports: exports["Library"] = xxx</li>
         *   <li>"commonjs2" - Export by setting module.exports: module.exports = xxx</li>
         *   <li>"amd" - Export to AMD (optionally named)</li>
         *   <li>"umd" - Export to AMD, CommonJS2 or as property in root</li>
         * </ul>
         */
        libraryTarget?: string;
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
        noParse?: RegExp | RegExp[];
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

    interface NewResolve {
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
        cachePredicate?: (data: { path: string, request: string }) => boolean;
    }

    interface OldResolve {
        /** Replace modules by other modules or paths. */
        alias?: { [key: string]: string; };
        /**
         * The directory (absolute path) that contains your modules.
         * May also be an array of directories.
         * This setting should be used to add individual directories to the search path.
         *
         * @deprecated Replaced by `modules` in webpack 2.
         */
        root?: string | string[];
        /**
         * An array of directory names to be resolved to the current directory as well as its ancestors, and searched for modules.
         * This functions similarly to how node finds “node_modules” directories.
         * For example, if the value is ["mydir"], webpack will look in “./mydir”, “../mydir”, “../../mydir”, etc.
         *
         * @deprecated Replaced by `modules` in webpack 2.
         */
        modulesDirectories?: string[];
        /**
         * A directory (or array of directories absolute paths),
         * in which webpack should look for modules that weren’t found in resolve.root or resolve.modulesDirectories.
         *
         * @deprecated Replaced by `modules` in webpack 2.
         */
        fallback?: string | string[];
        /**
         * An array of extensions that should be used to resolve modules.
         * For example, in order to discover CoffeeScript files, your array should contain the string ".coffee".
         */
        extensions?: string[];
        /**
         * Check these fields in the package.json for suitable files.
         *
         * @deprecated Replaced by `mainFields` in webpack 2.
         */
        packageMains?: Array<string | string[]>;

        /**
         * Check this field in the package.json for an object. Key-value-pairs are threaded as aliasing according to this spec
         *
         * @deprecated Replaced by `aliasFields` in webpack 2.
         */
        packageAlias?: Array<string | string[]>;

        /**
         * Enable aggressive but unsafe caching for the resolving of a part of your files.
         * Changes to cached paths may cause failure (in rare cases). An array of RegExps, only a RegExp or true (all files) is expected.
         * If the resolved path matches, it’ll be cached.
         *
         * @deprecated Split into `unsafeCache` and `cachePredicate` in webpack 2.
         */
        unsafeCache?: RegExp | RegExp[] | boolean;
    }

    type Resolve = OldResolve | NewResolve;

    interface OldResolveLoader extends OldResolve {
        /** It describes alternatives for the module name that are tried.
         * @deprecated Replaced by `moduleExtensions` in webpack 2.
         */
        moduleTemplates?: string[];
    }

    interface NewResolveLoader extends NewResolve {
        /**
         * List of strings to append to a loader's name when trying to resolve it.
         */
        moduleExtensions?: string[];

        enforceModuleExtension?: boolean;
    }

    type ResolveLoader = OldResolveLoader | NewResolveLoader;

    type ExternalsElement = string | RegExp | ExternalsObjectElement | ExternalsFunctionElement;

    interface ExternalsObjectElement {
        [key: string]: boolean | string;
    }

    type ExternalsFunctionElement = (context: any, request: any, callback: (error: any, result: any) => void) => any;

    interface WatchOptions {
        /** Delay the rebuilt after the first change. Value is a time in ms. */
        aggregateTimeout?: number;
        /** For some systems, watching many file systems can result in a lot of CPU or memory usage. It is possible to exclude a huge folder like node_modules. It is also possible to use anymatch patterns. */
        ignored?: RegExp | string;
        /** true: use polling, number: use polling with specified interval */
        poll?: boolean | number;
    }

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
    interface ConditionArray extends Array<Condition> {}
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
         * For each different parser options object a new parser is created and plugins can apply plugins depending on the parser options. Many of the default plugins apply their parser plugins only if a property in the parser options is not set or true.
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
        interface Performance {
            /** This property allows webpack to control what files are used to calculate performance hints. */
            assetFilter?(assetFilename: string): boolean;
            /**
             * Turns hints on/off. In addition, tells webpack to throw either an error or a warning when hints are
             * found. This property is set to "warning" by default.
             */
            hints?: 'warning' | 'error' | boolean;
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
    }

    interface Plugin extends tapable.Plugin {
        apply(thisArg: Webpack, ...args: any[]): void;
    }

    type UglifyCommentFunction = (astNode: any, comment: any) => boolean;

    interface UglifyPluginOptions extends UglifyJS.MinifyOptions {
        beautify?: boolean;
        comments?: boolean | RegExp | UglifyCommentFunction;
        sourceMap?: boolean;
        test?: Condition | Condition[];
        include?: Condition | Condition[];
        exclude?: Condition | Condition[];
    }

    interface Webpack {
        (config: Configuration, callback?: compiler.CompilerCallback): compiler.Compiler;
        /**
         * optimize namespace
         */
        optimize: Optimize;
        /**
         * dependencies namespace
         */
        dependencies: {};
        /**
         * Replace resources that matches resourceRegExp with newResource.
         * If newResource is relative, it is resolve relative to the previous resource.
         * If newResource is a function, it is expected to overwrite the ‘request’ attribute of the supplied object.
         */
        NormalModuleReplacementPlugin: NormalModuleReplacementPluginStatic;
        /**
         * Replaces the default resource, recursive flag or regExp generated by parsing with newContentResource,
         * newContentRecursive resp. newContextRegExp if the resource (directory) matches resourceRegExp.
         * If newContentResource is relative, it is resolve relative to the previous resource.
         * If newContentResource is a function, it is expected to overwrite the ‘request’ attribute of the supplied object.
         */
        ContextReplacementPlugin: ContextReplacementPluginStatic;
        /**
         * Don’t generate modules for requests matching the provided RegExp.
         */
        IgnorePlugin: IgnorePluginStatic;
        /**
         * A request for a normal module, which is resolved and built even before a require to it occurs.
         * This can boost performance. Try to profile the build first to determine clever prefetching points.
         */
        PrefetchPlugin: PrefetchPluginStatic;
        /**
         * Adds a banner to the top of each generated chunk.
         */
        BannerPlugin: BannerPluginStatic;
        /**
         * Define free variables. Useful for having development builds with debug logging or adding global constants.
         */
        DefinePlugin: DefinePluginStatic;
        /**
         * Automatically loaded modules.
         * Module (value) is loaded when the identifier (key) is used as free variable in a module.
         * The identifier is filled with the exports of the loaded module.
         */
        ProvidePlugin: ProvidePluginStatic;
        /**
         * Adds SourceMaps for assets.
         */
        SourceMapDevToolPlugin: SourceMapDevToolPluginStatic;
        /**
         * Adds SourceMaps for assets, but wrapped inside eval statements.
         * Much faster incremental build speed, but harder to debug.
         */
        EvalSourceMapDevToolPlugin: EvalSourceMapDevToolPluginStatic;
        /**
         * Enables Hot Module Replacement. (This requires records data if not in dev-server mode, recordsPath)
         * Generates Hot Update Chunks of each chunk in the records.
         * It also enables the API and makes __webpack_hash__ available in the bundle.
         */
        HotModuleReplacementPlugin: HotModuleReplacementPluginStatic;
        /**
         * Adds useful free vars to the bundle.
         */
        ExtendedAPIPlugin: ExtendedAPIPluginStatic;
        /**
         * When there are errors while compiling this plugin skips the emitting phase (and recording phase),
         * so there are no assets emitted that include errors. The emitted flag in the stats is false for all assets.
         */
        NoEmitOnErrorsPlugin: NoEmitOnErrorsPluginStatic;
        /**
         * Alias for NoEmitOnErrorsPlugin
         * @deprecated
         */
        NoErrorsPlugin: NoEmitOnErrorsPluginStatic;
        /**
         * Does not watch specified files matching provided paths or RegExps.
         */
        WatchIgnorePlugin: WatchIgnorePluginStatic;
        /**
         * Uses the module name as the module id inside the bundle, instead of a number.
         * Helps with debugging, but increases bundle size.
         */
        NamedModulesPlugin: NamedModulesPluginStatic;
        /**
         * Some loaders need context information and read them from the configuration.
         * This need to be passed via loader options in the long-term. See loader documentation for relevant options.
         * To keep compatibility with old loaders, these options can be passed via this plugin.
         */
        LoaderOptionsPlugin: LoaderOptionsPluginStatic;
    }

    interface Optimize {
        /**
         * Search for equal or similar files and deduplicate them in the output.
         * This comes with some overhead for the entry chunk, but can reduce file size effectively.
         * This is experimental and may crash, because of some missing implementations. (Report an issue)
         */
        DedupePlugin: optimize.DedupePluginStatic;
        /**
         * Limit the chunk count to a defined value. Chunks are merged until it fits.
         */
        LimitChunkCountPlugin: optimize.LimitChunkCountPluginStatic;
        /**
         * Merge small chunks that are lower than this min size (in chars). Size is approximated.
         */
        MinChunkSizePlugin: optimize.MinChunkSizePluginStatic;
        /**
         * Assign the module and chunk ids by occurrence count. Ids that are used often get lower (shorter) ids.
         * This make ids predictable, reduces to total file size and is recommended.
         */
        OccurrenceOrderPlugin: optimize.OccurrenceOrderPluginStatic;
        /**
         * Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode.
         * You can pass an object containing UglifyJs options.
         */
        UglifyJsPlugin: optimize.UglifyJsPluginStatic;
        CommonsChunkPlugin: optimize.CommonsChunkPluginStatic;
        /**
         * A plugin for a more aggressive chunk merging strategy.
         * Even similar chunks are merged if the total size is reduced enough.
         * As an option modules that are not common in these chunks can be moved up the chunk tree to the parents.
         */
        AggressiveMergingPlugin: optimize.AggressiveMergingPluginStatic;
    }

    interface NormalModuleReplacementPluginStatic {
        new (resourceRegExp: any, newResource: any): Plugin;
    }

    interface ContextReplacementPluginStatic {
        new (resourceRegExp: any, newContentResource?: any, newContentRecursive?: any, newContentRegExp?: any): Plugin;
    }

    interface IgnorePluginStatic {
        new (requestRegExp: any, contextRegExp?: any): Plugin;
    }

    interface PrefetchPluginStatic {
        // tslint:disable-next-line:unified-signatures
        new (context: any, request: any): Plugin;
        new (request: any): Plugin;
    }

    interface BannerPluginStatic {
        new (banner: any, options: any): Plugin;
    }

    interface DefinePluginStatic {
        new (definitions: {[key: string]: any}): Plugin;
    }

    interface ProvidePluginStatic {
        new (definitions: {[key: string]: any}): Plugin;
    }

    interface SourceMapDevToolPluginStatic {
        // if string | false | null, maps to the filename option
        new (options?: string | false | null | SourceMapDevToolPluginOptions): Plugin;
    }

    interface SourceMapDevToolPluginOptions {
        // output filename pattern (false/null to append)
        filename?: string | false | null;
        // source map comment pattern (false to not append)
        append?: false | string;
        // template for the module filename inside the source map
        moduleFilenameTemplate?: string;
        // fallback used when the moduleFilenameTemplate produces a collision
        fallbackModuleFilenameTemplate?: string;
        // test/include/exclude files
        test?: Condition | Condition[];
        include?: Condition | Condition[];
        exclude?: Condition | Condition[];
        // whether to include the footer comment with source information
        noSources?: boolean;
        // the source map sourceRoot ("The URL root from which all sources are relative.")
        sourceRoot?: string | null;
        // whether to generate per-module source map
        module?: boolean;
        // whether to include column information in the source map
        columns?: boolean;
        // whether to preserve line numbers between source and source map
        lineToLine?: boolean | {
            test?: Condition | Condition[];
            include?: Condition | Condition[];
            exclude?: Condition | Condition[];
        };
    }

    interface EvalSourceMapDevToolPluginStatic {
        // if string | false, maps to the append option
        new (options?: string | false | EvalSourceMapDevToolPluginOptions): Plugin;
    }

    interface EvalSourceMapDevToolPluginOptions {
        append?: false | string;
        moduleFilenameTemplate?: string;
        sourceRoot?: string;
        module?: boolean;
        columns?: boolean;
        lineToLine?: boolean | {
            test?: Condition | Condition[];
            include?: Condition | Condition[];
            exclude?: Condition | Condition[];
        };
    }

    interface HotModuleReplacementPluginStatic {
        new (options?: any): Plugin;
    }

    interface ExtendedAPIPluginStatic {
        new (): Plugin;
    }

    interface NoEmitOnErrorsPluginStatic {
        new (): Plugin;
    }

    interface WatchIgnorePluginStatic {
        new (paths: RegExp[]): Plugin;
    }

    interface NamedModulesPluginStatic {
        new (): Plugin;
    }

    interface LoaderOptionsPluginStatic {
        new (options: any): Plugin;
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
             * @param remainingRequest
             * @param precedingRequest
             * @param data
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
             * @param message
             */
            emitWarning(message: string): void;

            /**
             * Emit a error.
             * @param message
             */
            emitError(message: string): void;

            /**
             * Execute some code fragment like a module.
             *
             * Don't use require(this.resourcePath), use this function to make loaders chainable!
             *
             * @param code
             * @param filename
             */
            exec(code: string, filename: string): any;


            /**
             * Resolve a request like a require expression.
             * @param context
             * @param request
             * @param callback
             */
            resolve(context: string, request: string, callback: (err: Error, result: string) => void): any;

            /**
             * Resolve a request like a require expression.
             * @param context
             * @param request
             */
            resolveSync(context: string, request: string): string;


            /**
             * Adds a file as dependency of the loader result in order to make them watchable.
             * For example, html-loader uses this technique as it finds src and src-set attributes.
             * Then, it sets the url's for those attributes as dependencies of the html file that is parsed.
             * @param file
             */
            addDependency(file: string): void;

            /**
             * Adds a file as dependency of the loader result in order to make them watchable.
             * For example, html-loader uses this technique as it finds src and src-set attributes.
             * Then, it sets the url's for those attributes as dependencies of the html file that is parsed.
             * @param file
             */
            dependency(file: string): void;

            /**
             * Add a directory as dependency of the loader result.
             * @param directory
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
            target: 'web' | 'node' | string;

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
             * @param name
             * @param content
             * @param sourceMap
             */
            emitFile(name: string, content: Buffer|string, sourceMap: any): void;


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
            _compiler: compiler.Compiler;


            /**
             * Hacky access to the Module object being loaded.
             */
            _module: any;
        }
    }

    namespace optimize {
        interface DedupePluginStatic {
            new (): Plugin;
        }
        interface LimitChunkCountPluginStatic {
            new (options: any): Plugin;
        }
        interface MinChunkSizePluginStatic {
            new (options: any): Plugin;
        }
        interface OccurrenceOrderPluginStatic {
            new (preferEntry: boolean): Plugin;
        }
        interface UglifyJsPluginStatic {
            new (options?: UglifyPluginOptions): Plugin;
        }
        interface CommonsChunkPluginStatic {
            new (options?: any): Plugin;
        }
        interface AggressiveMergingPluginStatic {
            new (options: any): Plugin;
        }
    }

    namespace dependencies {
    }

    namespace compiler {
        interface Compiler {
            /** Builds the bundle(s). */
            run(callback: CompilerCallback): void;
            /**
             * Builds the bundle(s) then starts the watcher, which rebuilds bundles whenever their source files change.
             * Returns a Watching instance. Note: since this will automatically run an initial build, so you only need to run watch (and not run).
             */
            watch(watchOptions: WatchOptions, handler: CompilerCallback): Watching;
            //TODO: below are some of the undocumented properties. needs typings
            outputFileSystem: any;
            name: string;
            options: Configuration;
        }

        interface Watching {
            close(callback: () => void): void;
        }

        interface WatchOptions {
            /** After a change the watcher waits that time (in milliseconds) for more changes. Default: 300. */
            aggregateTimeout?: number;
            /** For some systems, watching many file systems can result in a lot of CPU or memory usage. It is possible to exclude a huge folder like node_modules. It is also possible to use anymatch patterns. */
            ignored?: RegExp | string;
            /** The watcher uses polling instead of native watchers. true uses the default interval, a number specifies a interval in milliseconds. Default: undefined (automatic). */
            poll?: number | boolean;
        }

        interface Stats {
            /** Returns true if there were errors while compiling */
            hasErrors(): boolean;
            /** Returns true if there were warnings while compiling. */
            hasWarnings(): boolean;
            /** Return information as json object */
            toJson(options?: StatsOptions): any; //TODO: type this
            /** Returns a formatted string of the result. */
            toString(options?: StatsToStringOptions): string;
        }

        interface StatsOptions {
            /** Add asset Information */
            assets?: boolean;
            /** Sort assets by a field */
            assetsSort?: string;
            /** Add information about cached (not built) modules */
            cached?: boolean;
            /** Add children information */
            children?: boolean;
            /** Add chunk information (setting this to `false` allows for a less verbose output) */
            chunks?: boolean;
            /** Add built modules information to chunk information */
            chunkModules?: boolean;
            /** Add the origins of chunks and chunk merging info */
            chunkOrigins?: boolean;
            /** Sort the chunks by a field */
            chunksSort?: string;
            /** Context directory for request shortening */
            context?: string;
            /** Add errors */
            errors?: boolean;
            /** Add details to errors (like resolving log) */
            errorDetails?: boolean;
            /** Add the hash of the compilation */
            hash?: boolean;
            /** Add built modules information */
            modules?: boolean;
            /** Sort the modules by a field */
            modulesSort?: string;
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
        }

        interface StatsToStringOptions extends StatsOptions {
            /** With console colors */
            colors?: boolean;
        }

        type CompilerCallback = (err: Error, stats: Stats) => void;
    }

    /** @deprecated use webpack.Options.Performance */
    type PerformanceOptions = webpack.Options.Performance;
}

declare var webpack: webpack.Webpack;

//export default webpack;
export = webpack;

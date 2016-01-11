// Type definitions for webpack 1.12.9
// Project: https://github.com/webpack/webpack
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "webpack" {
    namespace webpack {
        interface Configuration {
            context?: string;
            entry?: string|string[]|Entry;
            /** Choose a developer tool to enhance debugging. */
            devtool?: string;
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
            externals?: ExternalsElement|ExternalsElement[];
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
            cache?: boolean|any;
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
            plugins?: (Plugin|Function)[];
        }

        interface Entry {
            [name: string]: string|string[];
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
            library?: boolean;
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
            crossOriginLoading?: string|boolean;
        }

        interface Module {
            /** A array of automatically applied loaders. */
            loaders?: Loader[];
            /** A array of applied pre loaders. */
            preLoaders?: Loader[];
            /** A array of applied post loaders. */
            postLoaders?: Loader[];
            /** A RegExp or an array of RegExps. Don’t parse files matching. */
            noParse?: RegExp|RegExp[];
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

        interface Resolve {
            /** Replace modules by other modules or paths. */
            alias: { [key: string]: string; };
            /**
             * The directory (absolute path) that contains your modules.
             * May also be an array of directories.
             * This setting should be used to add individual directories to the search path. */
            root?: string|string[];
            /**
             * An array of directory names to be resolved to the current directory as well as its ancestors, and searched for modules.
             * This functions similarly to how node finds “node_modules” directories.
             * For example, if the value is ["mydir"], webpack will look in “./mydir”, “../mydir”, “../../mydir”, etc.
             */
            modulesDirectories?: string[];
            /**
             * A directory (or array of directories absolute paths),
             * in which webpack should look for modules that weren’t found in resolve.root or resolve.modulesDirectories.
             */
            fallback?: string|string[];
            /**
             * An array of extensions that should be used to resolve modules.
             * For example, in order to discover CoffeeScript files, your array should contain the string ".coffee".
             */
            extensions?: string[];
            /** Check these fields in the package.json for suitable files. */
            packageMains?: (string|string[])[];
            /** Check this field in the package.json for an object. Key-value-pairs are threaded as aliasing according to this spec */
            packageAlias?: (string|string[])[];
            /**
             * Enable aggressive but unsafe caching for the resolving of a part of your files.
             * Changes to cached paths may cause failure (in rare cases). An array of RegExps, only a RegExp or true (all files) is expected.
             * If the resolved path matches, it’ll be cached.
             */
            unsafeCache?: RegExp|RegExp[]|boolean;
        }

        interface ResolveLoader extends Resolve {
            /** It describes alternatives for the module name that are tried. */
            moduleTemplates?: string[];
        }

        type ExternalsElement = string|RegExp|ExternalsObjectElement|ExternalsFunctionElement;

        interface ExternalsObjectElement {
            [key: string]: boolean|string;
        }

        interface ExternalsFunctionElement {
            (context: any, request: any, callback: (error: any, result: any) => void): any;
        }

        interface WatchOptions {
            /** Delay the rebuilt after the first change. Value is a time in ms. */
            aggregateTimeout?: number;
            /** true: use polling, number: use polling with specified interval */
            poll?: boolean|number;
        }

        interface Node {
            console?: boolean;
            global?: boolean;
            process?: boolean;
            Buffer?: boolean;
            __filename?: boolean|string;
            __dirname?: boolean|string;
            [nodeBuiltin: string]: boolean|string;
        }

        type LoaderCondition = string|RegExp|((absPath: string) => boolean);

        interface Loader {
            /** A condition that must not be met */
            exclude?: LoaderCondition|LoaderCondition[];
            /** A condition that must be met */
            include?: LoaderCondition|LoaderCondition[];
            /** A condition that must be met */
            test: LoaderCondition|LoaderCondition[];
            /** A string of “!” separated loaders */
            loader?: string;
            /** A array of loaders as string */
            loaders?: string[];
            query?: {
                [name: string]: any;
            }
        }

        interface Plugin { }

        interface Webpack {
            /**
             * optimize namespace
             */
            optimize: Optimize;
            /**
             * dependencies namespace
             */
            dependencies: Dependencies;
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
             * Apply a plugin (or array of plugins) to one or more resolvers (as specified in types).
             */
            ResolverPlugin: ResolverPluginStatic;
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
            NoErrorsPlugin: NoErrorsPluginStatic;
            /**
             * Does not watch specified files matching provided paths or RegExps.
             */
            WatchIgnorePlugin: WatchIgnorePluginStatic;
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
            OccurenceOrderPlugin: optimize.OccurenceOrderPluginStatic;
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

        interface Dependencies {
            /**
             * Support Labeled Modules.
             */
            LabeledModulesPlugin: dependencies.LabeledModulesPluginStatic;
        }

        interface DirectoryDescriptionFilePluginStatic {
            new(file: string, files: string[]): Plugin;
        }

        interface NormalModuleReplacementPluginStatic {
            new(resourceRegExp: any, newResource: any): Plugin;
        }

        interface ContextReplacementPluginStatic {
            new(resourceRegExp: any, newContentResource?: any, newContentRecursive?: any, newContentRegExp?: any): Plugin
        }

        interface IgnorePluginStatic {
            new(requestRegExp: any, contextRegExp?: any): Plugin;
        }

        interface PrefetchPluginStatic {
            new(context: any, request: any): Plugin;
            new(request: any): Plugin;
        }

        interface ResolverPluginStatic {
            new(plugins: Plugin[], files?: string[]): Plugin;
            DirectoryDescriptionFilePlugin: DirectoryDescriptionFilePluginStatic;
            /**
             * This plugin will append a path to the module directory to find a match,
             * which can be useful if you have a module which has an incorrect “main” entry in its package.json/bower.json etc (e.g. "main": "Gruntfile.js").
             * You can use this plugin as a special case to load the correct file for this module. Example:
             */
            FileAppendPlugin: FileAppendPluginStatic;
        }

        interface FileAppendPluginStatic {
            new(files: string[]): Plugin;
        }

        interface BannerPluginStatic {
            new(banner: any, options: any): Plugin;
        }

        interface DefinePluginStatic {
            new(definitions: any): Plugin;
        }

        interface ProvidePluginStatic {
            new(definitions: any): Plugin;
        }

        interface SourceMapDevToolPluginStatic {
            new(options: any): Plugin;
        }

        interface HotModuleReplacementPluginStatic {
            new(): Plugin;
        }

        interface ExtendedAPIPluginStatic {
            new(): Plugin;
        }

        interface NoErrorsPluginStatic {
            new(): Plugin;
        }

        interface WatchIgnorePluginStatic {
            new(paths: RegExp[]): Plugin;
        }

        namespace optimize {
            interface DedupePluginStatic {
                new(): Plugin;
            }
            interface LimitChunkCountPluginStatic {
                new(options: any): Plugin
            }
            interface MinChunkSizePluginStatic {
                new(options: any): Plugin;
            }
            interface OccurenceOrderPluginStatic {
                new(preferEntry: boolean): Plugin;
            }
            interface UglifyJsPluginStatic {
                new(options?: any): Plugin;
            }
            interface CommonsChunkPluginStatic {
                new(chunkName: string, filenames?: string|string[]): Plugin;
                new(options?: any): Plugin;
            }
            interface AggressiveMergingPluginStatic {
                new(options: any): Plugin;
            }
        }

        namespace dependencies {
            interface LabeledModulesPluginStatic {
                new(): Plugin;
            }
        }
    }

    var webpack: webpack.Webpack;

    //export default webpack;
    export = webpack;
}


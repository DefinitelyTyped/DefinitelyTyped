import webpack = require('webpack');
import { Tapable } from 'tapable';
import { RawSourceMap } from 'source-map';

const {
    optimize,
} = webpack;

let plugins: webpack.Plugin[];

/**
 * Plugins
 */

/**
 * optimize
 */

const {
    AggressiveMergingPlugin,
} = optimize;

plugins = [
    new AggressiveMergingPlugin(),
    new AggressiveMergingPlugin({}),
    new AggressiveMergingPlugin({
        entryChunkMultiplicator: 10,
        minSizeReduce: 1.5,
        moveToParents: false,
    }),
];

let configuration: webpack.Configuration;
let rule: webpack.Rule;
let plugin: webpack.Plugin;
declare const __dirname: string;

rule = { test: /\.png$/, loader: "url-loader?mimetype=image/png" };

rule = {
    test: /\.png$/,
    loader: "url-loader",
    query: { mimetype: "image/png" }
};

//
// https://webpack.js.org/configuration/entry-context/#dynamic-entry
//

configuration = {
    entry: () => './demo'
};

configuration = {
    entry: () => ['./demo', './demo2']
};

configuration = {
    entry: () => ({
        p1: "./page1",
        p2: "./page2",
        p3: "./page3"
    })
};

configuration = {
    entry: () => new Promise((resolve) => resolve('./demo'))
};

configuration = {
    entry: () => new Promise((resolve) => resolve(['./demo', './demo2']))
};

configuration = {
    entry: () => new Promise((resolve) => resolve({
        p1: "./page1",
        p2: "./page2",
        p3: "./page3"
    }))
};

//
// https://webpack.js.org/configuration/externals/
//
configuration = {
    externals : {
        react: 'react'
    },
};

configuration = {
    externals : {
        lodash : {
            commonjs: 'lodash',
            amd: 'lodash',
            root: '_' // indicates global variable
        }
      },
};

configuration = {
    externals : {
        subtract : {
            root: ['math', 'subtract']
        }
    }
};

configuration = {
    externals: [
        // Disable TSLint for allowing non-arrow functions
        /* tslint:disable-next-line */
        function(context, request, callback) {
          if (/^yourregex$/.test(request)) {
            // Disable TSLint for bypassing 'no-void-expression' to align with Webpack documentation
            /* tslint:disable-next-line */
            return callback(null, 'commonjs ' + request);
          }
          callback({}, {});
        }
      ]
};

configuration = {
    externals: [
        {
            // String
            react: 'react',
            // Object
            lodash : {
                commonjs: 'lodash',
                amd: 'lodash',
                root: '_' // indicates global variable
            },
            // Array
            subtract: ['./math', 'subtract']
            },
            // Disable TSLint for allowing non-arrow functions
            /* tslint:disable-next-line */
            function(context, request, callback) {
              if (/^yourregex$/.test(request)) {
                // Disable TSLint for bypassing 'no-void-expression' to align with Webpack documentation
                /* tslint:disable-next-line */
                return callback(null, 'commonjs ' + request);
              }
              callback({}, {});
            },
            // Regex
            /^(jquery|\$)$/i
    ]
};

configuration = {
    externals: [
        "add",
        {
            subtract: {
                root: "subtract",
                commonjs2: "./subtract",
                commonjs: ["./math", "subtract"],
                amd: "subtract"
            }
        }
    ]
};

//
// https://webpack.github.io/docs/optimization.html
//

configuration = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        p3: "./page3"
    },
    output: {
        filename: "[name].entry.chunk.js"
    }
};

configuration = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        p3: "./page3",
        ap1: "./admin/page1",
        ap2: "./admin/page2"
    },
    output: {
        filename: "[name].js"
    },
};

//
// https://webpack.github.io/docs/long-term-caching.html
//

configuration = {
    output: {
        path: path.join(__dirname, "assets", "[hash]"),
        publicPath: "assets/[hash]/",
        filename: "output.[hash].bundle.js",
        chunkFilename: "[id].[hash].bundle.js",
        hashFunction: 'sha256',
        hashDigestLength: 64,
    }
};

configuration = { output: { chunkFilename: "[chunkhash].bundle.js" } };

//
// https://webpack.github.io/docs/configuration.html
//

configuration = {
    entry: [
        "./entry1",
        "./entry2"
    ]
};

configuration = {
    devtool: "inline-source-map"
};

configuration = {
    devtool: false
};

configuration = {
    resolve: {
        modules: [__dirname]
    }
};

rule = {
    test: /\.jsx$/,
    include: [
        path.resolve(__dirname, "app/src"),
        path.resolve(__dirname, "app/test")
    ],
    exclude: [
        path.resolve(__dirname, "node_modules")
    ],
    loader: "babel-loader"
};

rule = {
    test: /\.css$/,
    resourceQuery: /module/,
    loader: 'css-loader',
    options: {
        modules: true
    }
};

declare const require: any;
declare const path: any;
configuration = {
    plugins: [
        function apply(this: webpack.Compiler) {
            const prevTimestamps = new Map<string, number>();
            const startTime = Date.now();

            this.hooks.emit.tap("SomePlugin", (compilation: webpack.compilation.Compilation) => {
                for (const filepath in compilation.fileTimestamps.keys()) {
                    const prevTimestamp = prevTimestamps.get(filepath) || startTime;
                    const newTimestamp = compilation.fileTimestamps.get(filepath) || Infinity;
                    if (prevTimestamp < newTimestamp) {
                        this.inputFileSystem.readFileSync(filepath).toString('utf-8');
                    }
                }
            });

            compiler.hooks.afterCompile.tap("SomePlugin", (compilation: webpack.compilation.Compilation) => {
                ['path/to/extra/dep', 'another/extra/dep'].forEach(path => compilation.fileDependencies.add(path));
              });

            this.hooks.afterEmit.tapAsync("afterEmit", (stats, callback) => {
                this.outputFileSystem.writeFile(
                    path.join(__dirname, "...", "stats.json"),
                    JSON.stringify(stats.getStats().toJson()),
                    callback
                );
            });
        }
    ]
};

//
// https://webpack.github.io/docs/list-of-plugins.html
//

declare const resourceRegExp: any;
declare const newResource: any;
declare const contextRegExp: any;
declare const newContentResource: any;
declare const newContentRecursive: any;
declare const newContentRegExp: any;
declare const requestRegExp: any;
declare const options: any;
declare const definitions: any;
declare const paths: any;
const preferEntry = true;
declare const context: any;
declare const request: any;
declare const types: any;
declare const banner: any;

plugin = new webpack.NormalModuleReplacementPlugin(resourceRegExp, newResource);
plugin = new webpack.ContextReplacementPlugin(
    resourceRegExp,
    newContentResource,
    newContentRecursive,
    newContentRegExp);
plugin = new webpack.ContextReplacementPlugin(
    resourceRegExp,
    newContentResource,
    newContentRecursive);
plugin = new webpack.ContextReplacementPlugin(
    resourceRegExp,
    newContentResource);
plugin = new webpack.ContextReplacementPlugin(resourceRegExp);
plugin = new webpack.DllPlugin({
    context: 'dir-context',
    name: 'dll-name',
    path: 'manifest-path'
});
plugin = new webpack.DllPlugin([{
    context: 'dir-context',
    name: 'dll-name',
    path: 'manifest-path'
}]);
plugin = new webpack.DllReferencePlugin({
    content: 'dll content',
    context: 'dir-context',
    manifest: {
        content: 'dll content',
        name: 'dll name'
    },
    name: 'dll name',
    scope: 'dll prefix',
    sourceType: 'var'
});
plugin = new webpack.IgnorePlugin(requestRegExp);
plugin = new webpack.IgnorePlugin(requestRegExp, contextRegExp);

plugin = new webpack.PrefetchPlugin(context, request);
plugin = new webpack.PrefetchPlugin(request);
plugin = new webpack.BannerPlugin('banner');
plugin = new webpack.BannerPlugin({
    banner: 'banner'
});
plugin = new webpack.BannerPlugin({
    banner: 'banner',
    entryOnly: true,
    exclude: /index/,
    include: 'test',
    raw: false,
    test: ['test', /index/]
});
plugin = new webpack.optimize.DedupePlugin();
plugin = new webpack.optimize.LimitChunkCountPlugin(options);
plugin = new webpack.optimize.MinChunkSizePlugin(options);
plugin = new webpack.optimize.OccurrenceOrderPlugin(preferEntry);
plugin = new webpack.optimize.OccurrenceOrderPlugin(preferEntry);
plugin = new webpack.optimize.UglifyJsPlugin(options);
plugin = new webpack.optimize.UglifyJsPlugin();
plugin = new webpack.optimize.UglifyJsPlugin({
    parallel: true
});
plugin = new webpack.optimize.UglifyJsPlugin({
    parallel: {
        cache: true,
        workers: 2
    }
});
plugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});
plugin = new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    comments: true,
    beautify: true,
    test: 'foo',
    exclude: /node_modules/,
    include: 'test'
});
plugin = new webpack.optimize.UglifyJsPlugin({
    mangle: {
        reserved: ['$super', '$', 'exports', 'require']
    }
});
plugin = new webpack.optimize.UglifyJsPlugin({
    comments: (astNode: any, comment: any) => false
});
plugin = new webpack.DefinePlugin(definitions);
plugin = new webpack.DefinePlugin({
    VERSION: JSON.stringify("5fa3b9"),
    BROWSER_SUPPORTS_HTML5: true,
    TWO: "1+1",
    "typeof window": JSON.stringify("object")
});
plugin = new webpack.ProvidePlugin(definitions);
plugin = new webpack.ProvidePlugin({
    $: "jquery"
});
plugin = new webpack.SourceMapDevToolPlugin({
    //// asset matching
    test: /\.js$/,
    // include: Condition | Condition[],
    exclude: [
        /node_modules/
    ],
    //
    //// file and reference
    filename: null, // | string
    // append: false | string,
    //// sources naming
    // moduleFilenameTemplate: string,
    // fallbackModuleFilenameTemplate: string,
    //
    //// quality/performance
    module: true,
    columns: true,
    lineToLine: false // | { test?: Condition | Condition[], ... }
});
plugin = new webpack.EvalSourceMapDevToolPlugin(false);
plugin = new webpack.HotModuleReplacementPlugin();
plugin = new webpack.ExtendedAPIPlugin();
plugin = new webpack.NoEmitOnErrorsPlugin();
plugin = new webpack.WatchIgnorePlugin(paths);
plugin = new webpack.LoaderOptionsPlugin({
    debug: true
});
plugin = new webpack.EnvironmentPlugin(['a', 'b']);
plugin = new webpack.EnvironmentPlugin({ a: true, b: 'c' });
plugin = new webpack.ProgressPlugin((percent: number, message: string) => { });
plugin = new webpack.ProgressPlugin((percent: number, message: string, moduleProgress?: string, activeModules?: string, moduleName?: string) => { });
plugin = new webpack.HashedModuleIdsPlugin();
plugin = new webpack.HashedModuleIdsPlugin({
    hashFunction: 'sha256',
    hashDigest: 'hex',
    hashDigestLength: 20
});

//
// http://webpack.github.io/docs/node.js-api.html
//

// returns a Compiler instance
webpack({
    // configuration
}, (err, stats) => {
    // ...
});

// returns a Compiler instance
let compiler = webpack({
    // configuration
});

compiler.run((err, stats) => {
    // ...
});
// or
compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, (err, stats) => {
    // ...
});
// or
compiler.watch({ // watch options:
    ignored: 'foo/**/*'
}, (err, stats) => {
    // ...
});
// or
compiler.watch({ // watch options:
    ignored: /node_modules/
}, (err, stats) => {
    // ...
});

declare function handleFatalError(err: Error): void;
declare function handleSoftErrors(errs: string[]): void;
declare function handleWarnings(errs: string[]): void;
declare function successfullyCompiled(): void;

webpack({
    // configuration
}, (err, stats) => {
    if (err) {
        handleFatalError(err);
        return;
    }
    const jsonStats = stats.toJson();
    const jsonStatsWithAllOptions = stats.toJson({
        assets: true,
        assetsSort: "field",
        builtAt: true,
        cached: true,
        children: true,
        chunks: true,
        chunkModules: true,
        chunkOrigins: true,
        chunksSort: "field",
        context: "../src/",
        errors: true,
        errorDetails: true,
        hash: true,
        modules: true,
        modulesSort: "field",
        publicPath: true,
        reasons: true,
        source: true,
        timings: true,
        version: true,
        warnings: true,
        warningsFilter: ["filter", /filter/],
        excludeAssets: ["filter", "excluded"]
    });

    if (jsonStats.errors.length > 0) {
        handleSoftErrors(jsonStats.errors);
        return;
    }
    if (jsonStats.warnings.length > 0) {
        handleWarnings(jsonStats.warnings);
    }
    successfullyCompiled();
});

declare const fs: any;

compiler = webpack({});
compiler.outputFileSystem = fs;
compiler.run((err, stats) => {
    // ...
    const fileContent = fs.readFileSync("...");
});

//
// https://github.com/webpack/webpack/blob/master/test/configCases/rule-set/simple/webpack.config.js
//

rule = {
    test: {
        or: [
            require.resolve("./a"),
            require.resolve("./c"),
        ]
    },
    loader: "./loader",
    options: "third"
};

configuration = {
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: {
                            and: [
                                /a.\.js$/,
                                /b\.js$/
                            ]
                        },
                        loader: "./loader?first"
                    },
                    {
                        test: [
                            require.resolve("./a"),
                            require.resolve("./c"),
                        ],
                        issuer: require.resolve("./b"),
                        use: [
                            "./loader?second-1",
                            {
                                loader: "./loader",
                                options: "second-2"
                            },
                            {
                                loader: "./loader",
                                options: {
                                    get: () => "second-3"
                                }
                            }
                        ]
                    },
                    {
                        test: {
                            or: [
                                require.resolve("./a"),
                                require.resolve("./c"),
                            ]
                        },
                        loader: "./loader",
                        options: "third"
                    }
                ]
            }
        ]
    }
};

class TestResolvePlugin implements webpack.ResolvePlugin {
    apply(resolver: any) {
        resolver.plugin('before-existing-directory', (request: any, callback: any) => {
            callback();
        });
    }
}

const performance: webpack.Options.Performance = {
    hints: 'error',
    maxEntrypointSize: 400000,
    maxAssetSize: 100000,
    assetFilter: assetFilename => assetFilename.endsWith('.js'),
};

configuration = {
    performance,
};

function loader(this: webpack.loader.LoaderContext, source: string | Buffer, sourcemap?: RawSourceMap): void {
    this.cacheable();

    this.async();

    this.addDependency('');

    this.loadModule('path', (err: Error | null, result: string, sourceMap: RawSourceMap, module: webpack.Module) => { });
    this.resolve('context', 'request', (err: Error, result: string) => { });

    this.emitWarning('warning message');
    this.emitWarning(new Error('warning message'));

    this.emitError('error message');
    this.emitError(new Error('error message'));

    this.callback(null, source);
}

(loader as webpack.loader.Loader).raw = true;
(loader as webpack.loader.Loader).pitch = (remainingRequest: string, precedingRequest: string, data: any) => { };
const loaderRef: webpack.loader.Loader = loader;
console.log(loaderRef.raw === true);

/**
 * New v4 tests
 */
configuration = {
};

configuration = {
    mode: "development"
};

configuration = {
    mode: "production"
};

configuration = {
    mode: "development",
    optimization: {
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        flagIncludedChunks: false,
        occurrenceOrder: false,
        providedExports: true,
        usedExports: false,
        sideEffects: false,
        concatenateModules: false,
        splitChunks: false,
        runtimeChunk: true,
        noEmitOnErrors: false,
        namedModules: true,
        namedChunks: true,
        nodeEnv: "development",
        minimize: false,
        portableRecords: false
    }
};

configuration = {
    mode: "production",
    optimization: {
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        flagIncludedChunks: true,
        occurrenceOrder: true,
        providedExports: true,
        usedExports: true,
        sideEffects: true,
        concatenateModules: true,
        splitChunks: { chunks: "async", minChunks: 2 },
        runtimeChunk: true,
        noEmitOnErrors: true,
        namedModules: false,
        namedChunks: false,
        nodeEnv: "production",
        minimize: true,
        portableRecords: true
    }
};

configuration = {
    mode: "production",
    optimization: {
        splitChunks: {
            minSize: 30000,
            maxSize: 50000,
            cacheGroups: {
                default: false,
                vendor: {
                    chunks: "initial",
                    test: "node_modules",
                    name: "vendor",
                    minSize: 30000,
                    maxSize: 50000,
                    enforce: true
                }
            }
        }
    },
};

configuration = {
    mode: "production",
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: 'common',
                    chunks(chunk: webpack.compilation.Chunk) {
                        const allowedChunks = [
                            'renderer',
                            'component-window',
                        ];
                        return allowedChunks.indexOf(chunk.name) >= 0;
                    },
                    minChunks: 2
                }
            }
        }
    },
};

plugin = new webpack.SplitChunksPlugin({ chunks: "async", minChunks: 2 });

class SingleEntryDependency extends webpack.compilation.Dependency {}
class MultiEntryDependency extends webpack.compilation.Dependency {}
class MultiModuleFactory extends Tapable {}
class MultiEntryPlugin extends webpack.Plugin {
    apply(compiler: webpack.Compiler) {
        compiler.hooks.compilation.tap(
            "MultiEntryPlugin",
            (compilation, { normalModuleFactory }) => {
                compilation.dependencyFactories.set(MultiEntryDependency, new MultiModuleFactory());
            }
        );
        compiler.hooks.make.tapAsync(
            "MultiEntryPlugin",
            (compilation, callback) => {
                const dep = new MultiEntryPlugin();
                compilation.addEntry("", {}, "", () => {});
            }
        );
    }
}

class IgnorePlugin extends webpack.Plugin {
    checkIgnore(result: any) {
    }

    apply(compiler: webpack.Compiler) {
        compiler.hooks.normalModuleFactory.tap("IgnorePlugin", nmf => {
            nmf.hooks.beforeResolve.tap("IgnorePlugin", this.checkIgnore);
        });
        compiler.hooks.contextModuleFactory.tap("IgnorePlugin", cmf => {
            cmf.hooks.beforeResolve.tap("IgnorePlugin", this.checkIgnore);
        });
    }
}

class DllEntryDependency extends webpack.compilation.Dependency {}
class DllModuleFactory extends Tapable {}
class DllEntryPlugin extends webpack.Plugin {
	apply(compiler: webpack.Compiler) {
		compiler.hooks.compilation.tap(
			"DllEntryPlugin",
			(compilation, { normalModuleFactory }) => {
				const dllModuleFactory = new DllModuleFactory();
				compilation.dependencyFactories.set(
					DllEntryDependency,
					dllModuleFactory
				);
				compilation.dependencyFactories.set(
					SingleEntryDependency,
					normalModuleFactory
				);
			}
		);
		compiler.hooks.make.tapAsync("DllEntryPlugin", (compilation, callback) => {
			compilation.addEntry("", new DllEntryDependency(), "", callback);
		});
	}
}

class BannerPlugin extends webpack.Plugin {
	apply(compiler: webpack.Compiler) {
        compiler.hooks.compilation.tap("BannerPlugin", compilation  => {
            compilation.hooks.optimizeChunkAssets.tap("BannerPlugin", chunks => {
                for (const chunk of chunks) {
                    if (!chunk.canBeInitial()) {
                        continue;
                    }
                    for (const file of chunk.files) {
                        compilation.getPath("", {});
                    }
                }
            });
        });
    }
}

configuration = {
    module: {
        rules: [
            {
                test: /\.css$/,
                oneOf: [
                    { resourceQuery: /global/, use: ["style-loader", "css-loader"] },
                    { use: ["to-string-loader", "css-loader"] }
                ]
            }
        ]
    }
};

configuration = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                include: '/foo/bar',
                exclude: path => path.startsWith('/foo'),
                resourceQuery: ['foo', 'bar'],
                resolve: {
                    mainFields: ['foo'],
                    aliasFields: [['bar']],
                },
                loader: 'foo-loader',
                loaders: [
                    'foo-loader',
                    {
                        loader: 'bar-loader',
                        query: 'baz'
                    }
                ],
                use: () => ([
                    'foo-loader',
                    {
                        loader: 'bar-loader',
                        query: {
                            baz: 'qux'
                        }
                    },
                ])
            }
        ]
    }
};

let profiling = new webpack.debug.ProfilingPlugin();
profiling = new webpack.debug.ProfilingPlugin({ outputPath: './path.json' });

configuration = {
    plugins: [profiling]
};

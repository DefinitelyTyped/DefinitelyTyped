// Type definitions for webpack-chain 4.8
// Project: https://github.com/mozilla-neutrino/webpack-chain
// Definitions by: Eirikur Nilsson <https://github.com/eirikurn>, Paul Sachs <https://github.com/psachs21>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as webpack from 'webpack';
import * as https from 'https';

export = Config;

declare namespace __Config {
	class Chained<Parent> {
		end(): Parent;
	}

	class TypedChainedMap<Parent, Value> extends Chained<Parent> {
		clear(): this;
		delete(key: string): this;
		has(key: string): boolean;
		get(key: string): Value;
		set(key: string, value: Value): this;
		merge(obj: { [key: string]: Value }): this;
		entries(): { [key: string]: Value };
		values(): Value[];
		when(condition: boolean, trueBrancher: (obj: this) => void, falseBrancher?: (obj: this) => void): this;
	}

	class ChainedMap<Parent> extends TypedChainedMap<Parent, any> {}

	class TypedChainedSet<Parent, Value> extends Chained<Parent> {
		add(value: Value): this;
		prepend(value: Value): this;
		clear(): this;
		delete(key: string): this;
		has(key: string): boolean;
		merge(arr: Value[]): this;
		values(): Value[];
		when(condition: boolean, trueBrancher: (obj: this) => void, falseBrancher?: (obj: this) => void): this;
	}

	class ChainedSet<Parent> extends TypedChainedSet<Parent, any> {}
}

declare class Config extends __Config.ChainedMap<void> {
	devServer: Config.DevServer;
	entryPoints: Config.TypedChainedMap<Config, Config.EntryPoint>;
	module: Config.Module;
	node: Config.ChainedMap<this>;
	output: Config.Output;
	optimization: Config.Optimization;
	performance: Config.Performance;
	plugins: Config.Plugins<this>;
	resolve: Config.Resolve;
	resolveLoader: Config.ResolveLoader;

	amd(value: { [moduleName: string]: boolean }): this;
	bail(value: boolean): this;
	cache(value: boolean | any): this;
	devtool(value: Config.DevTool): this;
	context(value: string): this;
	externals(value: webpack.ExternalsElement | webpack.ExternalsElement[]): this;
	loader(value: any): this;
	profile(value: boolean): this;
	recordsPath(value: string): this;
	recordsInputPath(value: string): this;
	recordsOutputPath(value: string): this;
	stats(value: webpack.Options.Stats): this;
	target(value: string): this;
	watch(value: boolean): this;
	watchOptions(value: webpack.Options.WatchOptions): this;

	entry(name: string): Config.EntryPoint;
	plugin(name: string): Config.Plugin<this>;

	toConfig(): webpack.Configuration;
}

declare namespace Config {
	class Chained<Parent> extends __Config.Chained<Parent> {}
	class TypedChainedMap<Parent, Value> extends __Config.TypedChainedMap<Parent, Value> {}
	class ChainedMap<Parent> extends __Config.TypedChainedMap<Parent, any> {}
	class TypedChainedSet<Parent, Value> extends __Config.TypedChainedSet<Parent, Value> {}
	class ChainedSet<Parent> extends __Config.TypedChainedSet<Parent, any> {}

	class Plugins<Parent> extends TypedChainedMap<Parent, Plugin<Parent>> {}

	class Plugin<Parent> extends ChainedMap<Parent> implements Orderable {
		init(value: (plugin: PluginClass, args: any[]) => webpack.Plugin): this;
		use(plugin: PluginClass, args?: any[]): this;
		tap(f: (args: any[]) => any[]): this;

		// Orderable
		before(name: string): this;
		after(name: string): this;
	}

	class Module extends ChainedMap<Config> {
		rules: TypedChainedMap<this, Rule>;
		rule(name: string): Rule;
		noParse(noParse: RegExp | RegExp[] | ((contentPath: string) => boolean)): this;
	}

	class Output extends ChainedMap<Config> {
		chunkFilename(value: string): this;
		crossOriginLoading(value: boolean | string): this;
		filename(value: string): this;
		library(value: string): this;
		libraryTarget(value: string): this;
		devtoolFallbackModuleFilenameTemplate(value: any): this;
		devtoolLineToLine(value: any): this;
		devtoolModuleFilenameTemplate(value: any): this;
		hashFunction(value: string): this;
		hashDigest(value: string): this;
		hashDigestLength(value: number): this;
		hashSalt(value: any): this;
		hotUpdateChunkFilename(value: string): this;
		hotUpdateFunction(value: any): this;
		hotUpdateMainFilename(value: string): this;
		jsonpFunction(value: string): this;
		path(value: string): this;
		pathinfo(value: boolean): this;
		publicPath(value: string): this;
		sourceMapFilename(value: string): this;
		sourcePrefix(value: string): this;
		strictModuleExceptionHandling(value: boolean): this;
		umdNamedDefine(value: boolean): this;
	}

	class DevServer extends ChainedMap<Config> {
		clientLogLevel(value: 'none' | 'error' | 'warning' | 'info'): this;
		compress(value: boolean): this;
		contentBase(value: boolean | string | string[]): this;
		filename(value: string): this;
		headers(value: { [header: string]: string }): this;
		historyApiFallback(value: boolean | any): this;
		host(value: string): this;
		hot(value: boolean): this;
		hotOnly(value: boolean): this;
		https(value: boolean | https.ServerOptions): this;
		inline(value: boolean): this;
		lazy(value: boolean): this;
		noInfo(value: boolean): this;
		overlay(value: boolean | { warnings?: boolean, errors?: boolean }): this;
		port(value: number): this;
		progress(value: boolean): this;
		proxy(value: any): this;
		public(value: string): this;
		publicPath(publicPath: string): this;
		quiet(value: boolean): this;
		setup(value: (expressApp: any) => void): this;
		staticOptions(value: any): this;
		stats(value: webpack.Options.Stats): this;
		watchContentBase(value: boolean): this;
		watchOptions(value: any): this;
	}

	class Performance extends ChainedMap<Config> {
		hints(value: boolean | 'error' | 'warning'): this;
		maxEntrypointSize(value: number): this;
		maxAssetSize(value: number): this;
		assetFilter(value: (assetFilename: string) => boolean): this;
	}

	class EntryPoint extends TypedChainedSet<Config, string> {}

	class Resolve extends ChainedMap<Config> {
		alias: TypedChainedMap<this, string>;
		aliasFields: TypedChainedSet<this, string>;
		descriptionFiles: TypedChainedSet<this, string>;
		extensions: TypedChainedSet<this, string>;
		mainFields: TypedChainedSet<this, string>;
		mainFiles: TypedChainedSet<this, string>;
		modules: TypedChainedSet<this, string>;
		plugins: TypedChainedMap<this, Plugin<this>>;

		enforceExtension(value: boolean): this;
		enforceModuleExtension(value: boolean): this;
		unsafeCache(value: boolean | RegExp | RegExp[]): this;
		symlinks(value: boolean): this;
		cachePredicate(value: (data: { path: string, request: string }) => boolean): this;

		plugin(name: string): Plugin<this>;
	}

	class ResolveLoader extends ChainedMap<Config> {
		extensions: TypedChainedSet<this, string>;
		modules: TypedChainedSet<this, string>;
		moduleExtensions: TypedChainedSet<this, string>;
		packageMains: TypedChainedSet<this, string>;
	}

	class Rule extends ChainedMap<Module> {
		uses: TypedChainedMap<this, Use>;
		include: TypedChainedSet<this, webpack.Condition>;
		exclude: TypedChainedSet<this, webpack.Condition>;

		parser(value: { [optName: string]: any }): this;
		test(value: webpack.Condition | webpack.Condition[]): this;
		enforce(value: 'pre' | 'post'): this;

		use(name: string): Use;
		pre(): this;
		post(): this;
	}

	class Optimization extends ChainedMap<Config> {
		concatenateModules(value: boolean): this;
		flagIncludedChunks(value: boolean): this;
		mergeDuplicateChunks(value: boolean): this;
		minimize(value: boolean): this;
		minimizer(value: webpack.Plugin[]): this;
		namedChunks(value: boolean): this;
		namedModules(value: boolean): this;
		nodeEnv(value: boolean | string): this;
		noEmitOnErrors(value: boolean): this;
		occurrenceOrder(value: boolean): this;
		portableRecords(value: boolean): this;
		providedExports(value: boolean): this;
		removeAvailableModules(value: boolean): this;
		removeEmptyChunks(value: boolean): this;
		runtimeChunk(value: boolean | "single" | "multiple" | RuntimeChunk): this;
		sideEffects(value: boolean): this;
		splitChunks(value: SplitChunksOptions): this;
		usedExports(value: boolean): this;
	}

	interface RuntimeChunk {
		name: string | RuntimeChunkFunction;
	}

	type RuntimeChunkFunction = (entryPoint: EntryPoint) => string;

	interface SplitChunksOptions { [name: string]: any; }

	interface LoaderOptions { [name: string]: any; }

	class Use extends ChainedMap<Rule> implements Orderable {
		loader(value: string): this;
		options(value: LoaderOptions): this;

		tap(f: (options: LoaderOptions) => LoaderOptions): this;

		// Orderable
		before(name: string): this;
		after(name: string): this;
	}

	type DevTool = 'eval' | 'inline-source-map' | 'cheap-eval-source-map' | 'cheap-source-map' |
		'cheap-module-eval-source-map' | 'cheap-module-source-map' | 'eval-source-map' | 'source-map' |
		'nosources-source-map' | 'hidden-source-map' | 'nosources-source-map' | '@eval' |
		'@inline-source-map' | '@cheap-eval-source-map' | '@cheap-source-map' |
		'@cheap-module-eval-source-map' | '@cheap-module-source-map' | '@eval-source-map' |
		'@source-map' | '@nosources-source-map' | '@hidden-source-map' | '@nosources-source-map' |
		'#eval' | '#inline-source-map' | '#cheap-eval-source-map' | '#cheap-source-map' |
		'#cheap-module-eval-source-map' | '#cheap-module-source-map' | '#eval-source-map' |
		'#source-map' | '#nosources-source-map' | '#hidden-source-map' | '#nosources-source-map' |
		'#@eval' | '#@inline-source-map' | '#@cheap-eval-source-map' | '#@cheap-source-map' |
		'#@cheap-module-eval-source-map' | '#@cheap-module-source-map' | '#@eval-source-map' |
		'#@source-map' | '#@nosources-source-map' | '#@hidden-source-map' | '#@nosources-source-map' |
		boolean;

	interface PluginClass {
		new (...opts: any[]): webpack.Plugin;
	}

	interface Orderable {
		before(name: string): this;
		after(name: string): this;
	}
}

// Type definitions for html-webpack-plugin 3.2
// Project: https://github.com/jantimon/html-webpack-plugin
// Definitions by: Simon Hartcher <https://github.com/deevus>
//                 Benjamin Lim <https://github.com/bumbleblym>
//                 Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin, compilation, Compiler } from 'webpack';
import { AsyncSeriesWaterfallHook } from 'tapable';
import { Options as HtmlMinifierOptions } from 'html-minifier';

export = HtmlWebpackPlugin;

type TemplateFunction = (param: object) => string;

declare class HtmlWebpackPlugin extends Plugin {
    constructor(options?: HtmlWebpackPlugin.Options);

		apply(compiler: Compiler): void;

		evaluateCompilationResult(compilation: compilation.Compilation, content: string): Promise<string | TemplateFunction>;

		executeTemplate(templateFunction: TemplateFunction, chunks: any, assets: any, compilation: compilation.Compilation): Promise<string>;

    postProcessHtml(html: string, assets: any, assetTags: any): Promise<string>;
}

declare namespace HtmlWebpackPlugin {
	type MinifyOptions = HtmlMinifierOptions;

	interface TemplateParametersAssets {
		/** The public path */
		publicPath: string;
		/** Will contain all js & css files by chunk */
		chunks: {};
		/** Will contain all js files */
		js: string[];
		/** Will contain all css files */
		css: string[];
		/** Will contain a favicon if it exists */
		favicon?: string;
		/** Will contain amn appcache manifest file if it exists */
		manifest?: string;
	}

	interface Options {
		/**
		 * Emit the file only if it was changed.
		 * Default: `true`.
		 */
		cache?: boolean;
		/**
		 * Allows to control how chunks should be sorted before they are included to the html.
		 * Default: `'auto'`.
		 */
		chunksSortMode?:
			'none'
			| 'auto'
			| 'dependency'
			| 'manual'
			| ((a: compilation.Chunk, b: compilation.Chunk) => number);
		/**
		 * Allows you to add only some chunks (e.g. only the unit-test chunk).
		 * Default: 'all'.
		 */
		chunks?: 'all' | string[];
		/**
		 * Allows you to skip some chunks (e.g. don't add the unit-test chunk).
		 * Default: `[]`.
		 */
		excludeChunks?: string[];
		/**
		 * Adds the given favicon path to the output html.
		 * Default: `false`.
		 */
		favicon?: false | string;
		/**
		 * The file to write the HTML to.
		 * You can specify a subdirectory here too (eg: `assets/admin.html`).
		 * Default: `'index.html'`.
		 */
		filename?: string;
		/**
		 * If true then append a unique webpack compilation hash to all included scripts and CSS files.
		 * This is useful for cache busting.
		 * Default: `false`.
		 */
		hash?: boolean;
		/**
		 * Inject all assets into the given template or templateContent.
		 * When passing true or 'body' all javascript resources will be placed at the bottom of the body element.
		 * 'head' will place the scripts in the head element.
		 * Default: `true`.
		 */
		inject?: 'body' | 'head' | boolean;
		/**
		 * Allows to inject meta-tags, e.g. meta: `{viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}`.
		 * Default: `{}`.
		 */
		meta?: false | { [name: string]: any };
		/**
		 * Pass a html-minifier options object to minify the output.
		 * https://github.com/kangax/html-minifier#options-quick-reference
		 * Default: `false`.
		 */
		minify?: false | MinifyOptions;
		/**
		 * Errors details will be written into the HTML page.
		 * Default: `true`.
		 */
		showErrors?: boolean;
		/**
		 * The `webpack` require path to the template.
		 * @see https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md
		 */
		template?: string;
		/**
		 * Allow to use a html string instead of reading from a file.
		 * Default: `false`, meaning the `template` option should be used instead.
		 */
		templateContent?: false | string | Promise<string>;
		/**
		 * Allows to overwrite the parameters used in the template.
		 */
		templateParameters?:
			false
			| ((compilation: compilation.Compilation, assets: TemplateParametersAssets, options: Options) => any)
			| { [key: string]: any };
		/**
		 * The title to use for the generated HTML document.
		 * Default: `'Webpack App'`.
		 */
		title?: string;
		/**
		 * If true render the link tags as self-closing (XHTML compliant).
		 * Default: `false`.
		 */
		xhtml?: boolean;
		/**
		 * In addition to the options actually used by this plugin, you can use this hash to pass arbitrary data through
		 * to your template.
		 */
		[option: string]: any;
	}

	interface Hooks extends compilation.CompilationHooks {
		htmlWebpackPluginBeforeHtmlGeneration: AsyncSeriesWaterfallHook<{
			assets: {
				publicPath: string;
				js: EntryObject[];
				css: EntryObject[];
			};
			outputName: string;
			plugin: HtmlWebpackPlugin;
		}>;
		htmlWebpackPluginBeforeHtmlProcessing: AsyncSeriesWaterfallHook<{
			html: string;
			assets: {
				publicPath: string;
				js: EntryObject[];
				css: EntryObject[];
			};
			outputName: string;
			plugin: HtmlWebpackPlugin;
		}>;
		htmlWebpackPluginAfterHtmlProcessing: AsyncSeriesWaterfallHook<{
			html: string;
			assets: {
				publicPath: string;
				js: EntryObject[];
				css: EntryObject[];
			};
			outputName: string;
			plugin: HtmlWebpackPlugin;
		}>;
		htmlWebpackPluginAlterAssetTags: AsyncSeriesWaterfallHook<{
			head: HtmlTagObject[];
			body: HtmlTagObject[];
			outputName: string;
			plugin: HtmlWebpackPlugin;
		}>;
		htmlWebpackPluginAfterEmit: AsyncSeriesWaterfallHook<{
			html: string;
			outputName: string;
			plugin: HtmlWebpackPlugin;
		}>;
	}

	/** @deprecated use MinifyOptions */
	type MinifyConfig = MinifyOptions;
	/** @deprecated use Options */
	type Config = Options;
}

interface EntryObject {
	/** Webpack entry or chunk name */
	entryName: string;
	/** Entry or chunk path */
	path: string;
}

interface HtmlTagObject {
	/**
	 * Attributes of the html tag
	 * E.g. `{'disabled': true, 'value': 'demo'}`
	 */
	attributes: {
		[attributeName: string]: string | boolean;
	};
	/**
	 * Wether this html must not contain innerHTML
	 * @see https://www.w3.org/TR/html5/syntax.html#void-elements
	 */
	voidTag: boolean;
	/**
	 * The tag name e.g. `'div'`
	 */
	tagName: string;
	/**
	 * Inner HTML The
	 */
	innerHTML?: string;
}

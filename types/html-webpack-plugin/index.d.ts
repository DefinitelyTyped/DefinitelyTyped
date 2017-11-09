// Type definitions for html-webpack-plugin 2.28
// Project: https://github.com/ampedandwired/html-webpack-plugin
// Definitions by: Simon Hartcher <https://github.com/deevus>, Benjamin Lim <https://github.com/bumbleblym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'webpack';
import { Options as HtmlMinifierOptions } from 'html-minifier';

export = HtmlWebpackPlugin;

declare class HtmlWebpackPlugin extends Plugin {
	constructor(options?: HtmlWebpackPlugin.Options);
}

declare namespace HtmlWebpackPlugin {
	type MinifyOptions = HtmlMinifierOptions;

	/**
	 * It is assumed that each [chunk] contains at least the properties "id"
	 * (containing the chunk id) and "parents" (array containing the ids of the
	 * parent chunks).
	 *
	 * @todo define in webpack
	 */
	interface Chunk {
		id: string;
		parents: string[];
		[propName: string]: any;
	}

	type ChunkComparator = (a: Chunk, b: Chunk) => number;

	interface Options {
		/** `true | false` if `true` (default) try to emit the file only if it was changed. */
		cache?: boolean;
		/**
		 * Allows to control how chunks should be sorted before they are included to the html.
		 * Allowed values: `'none' | 'auto' | 'dependency' | {function}` - default: `'auto'`
		 */
		chunksSortMode?: 'none' | 'auto' | 'dependency' | ChunkComparator;
		/** Allows you to add only some chunks (e.g. only the unit-test chunk) */
		chunks?: string[];
		/** Allows you to skip some chunks (e.g. don't add the unit-test chunk) */
		excludeChunks?: string[];
		/** Adds the given favicon path to the output html. */
		favicon?: string;
		/**
		 * The file to write the HTML to.
		 * Defaults to index.html. You can specify a subdirectory here too (eg: `assets/admin.html`).
		 */
		filename?: string;
		/**
		 * `true | false` if `true` then append a unique webpack compilation hash to all included scripts and css files.
		 * This is useful for cache busting.
		 */
		hash?: boolean;
		/**
		 * `true | 'head' | 'body' | false`
		 * Inject all assets into the given template or templateContent.
		 * When passing true or 'body' all javascript resources will be placed at the bottom of the body element.
		 * 'head' will place the scripts in the head element.
		 */
		inject?: 'body' | 'head' | boolean;
		/**
		 * `{...} | false` Pass a html-minifier options object to minify the output.
		 * https://github.com/kangax/html-minifier#options-quick-reference
		 */
		minify?: false | MinifyOptions;
		/** `true | false` if `true` (default) errors details will be written into the html page. */
		showErrors?: boolean;
		/** Webpack require path to the template. Please see the docs for details. */
		template?: string;
		/** The title to use for the generated HTML document. */
		title?: string;
		/** `true | false` If `true` render the link tags as self-closing, XHTML compliant. Default is `false` */
		xhtml?: boolean;
		/**
		 * In addition to the options actually used by this plugin, you can use this hash to pass arbitrary data through
		 * to your template.
		 */
		[option: string]: any;
	}

	/** @deprecated use MinifyOptions */
	type MinifyConfig = MinifyOptions;
	/** @deprecated use Options */
	type Config = Options;
}

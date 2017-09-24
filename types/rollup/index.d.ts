// Type definitions for rollup 0.41
// Project: https://github.com/rollup/rollup
// Definitions by: Philipp A. <https://github.com/flying-sheep>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RawSourceMap } from 'source-map'
import * as acorn from 'acorn'

export type Format = 'amd' | 'cjs' | 'es' | 'iife' | 'umd'

export interface SourceMap extends RawSourceMap {
	toString(): string
	toUrl(): string
}

// https://github.com/rollup/rollup/wiki/JavaScript-API
export interface Warning {
	code: string
	message: string
	loc?: { file: string, line: number, column: number }
	frame?: string
}

export interface BundleOptions {
	/** The format of the generated bundle. */
	format?: Format
	/** What export mode to use. Defaults to auto, which guesses your intentions based on what the `entry` module exports. */
	exports?: 'auto' | 'default' | 'named' | 'none'
	/** An ID to use for AMD/UMD bundles. */
	moduleId?: string
	/** The name to use for the module for UMD/IIFE bundles (required for bundles with exports). */
	moduleName?: string
	/** Mapping of IDs → global variable names. Used for UMD/IIFE bundles. */
	globals?: { [id: string]: string }
	/**
	 * The indent string to use, for formats that require code to be indented (AMD, IIFE, UMD).
	 * Can also be false (no indent), or true (the default – auto-indent)
	 */
	indent?: string | boolean
	/**
	 * Whether or not to add an 'interop block'. By default (interop: true).
	 * For safety's sake, Rollup will assign any external dependencies' default exports to a separate variable if it's necessary to distinguish between default and named exports.
	 * This generally only applies if your external dependencies were transpiled (for example with Babel) – if you're sure you don't need it, you can save a few bytes with interop: false.
	 */
	interop?: boolean
	/** A string to prepend to the bundle. */
	banner?: string
	/** A string to append to the bundle. */
	footer?: string
	/** A string prepended to the code inside of the format-specific wrapper */
	intro?: string
	/** A string appended to the code inside of the format-specific wrapper */
	outro?: string
	/**
	 * Whether to include the 'use strict' pragma at the top of generated non-ES6 bundles.
	 * Strictly-speaking (geddit?), ES6 modules are always in strict mode, so you shouldn't disable this without good reason.
	 */
	useStrict?: boolean
}

export interface GenerateOptions extends BundleOptions {
	/** Whether to generate a sourcemap. If true, the return value from `bundle.generate(...)` will include a map property */
	sourceMap?: boolean
	/**
	 * The location of the generated bundle. If this is an absolute path, all the sources paths in the sourcemap will be relative to it.
	 * The map.file property is the basename of sourceMapFile, as the location of the sourcemap is assumed to be adjacent to the bundle.
	 */
	sourceMapFile?: string
}

export interface WriteOptions extends BundleOptions {
	/** The file to write to. If `options.sourceMap === true`, two files will be created – `dest` and `dest + '.map`. */
	dest: string
	/** If `true`, a separate sourcemap file will be created. If `'inline'`, the sourcemap will be appended to the resulting dest file as a data URI. */
	sourceMap?: boolean | 'inline'
	/** This option is unnecessary, as it defaults to the value of dest. */
	sourceMapFile?: string
}

export interface Bundle {
	/** Generate bundled code as an object */
	generate(options: GenerateOptions): { code: string, map: SourceMap }
	/** writes the file (and accompanying sourcemap file, if appropriate) to the file system. */
	write(options: WriteOptions): Promise<void>
}

export interface Options {
	/** The bundle's entry point (e.g. your `main.js` or `app.js` or `index.js`) */
	entry: string | string[]
	/** A previous bundle. Use it to speed up subsequent bundles :) */
	cache?: Bundle
	/**
	 * Function that returns if an ID is external or array of IDs of modules that should remain external to the bundle.
	 * The IDs should be either the name of an external dependency or a resolved ID (like an absolute path to a file)
	 */
	external?: ((id: string) => boolean) | string[]
	/**
	 * Function that takes an ID and returns a path, or Object of id: path pairs.
	 * Where supplied, these paths will be used in the generated bundle instead of the module ID, allowing you to (for example) load dependencies from a CDN.
	 */
	paths?: ((id: string) => string) | { [id: string]: string }
	/** Function that will intercept warning messages. If not supplied, warnings will be deduplicated and printed to the console. */
	onwarn?(warning: Warning): void
	/** Array of plugin objects or a single plugin object */
	plugins?: Plugin | Plugin[]
	/**
	 * Whether or not to apply tree-shaking. (Default: true)
	 * It's recommended that you omit this option, unless you discover a bug caused by the tree-shaking algorithm in which case use treeshake: false once you've filed an issue!
	 */
	treeshake?: boolean
	/** Any options that should be passed through to Acorn. */
	acorn?: acorn.Options
	/** By default, the context of a module – i.e., the value of `this` at the top level – is `undefined`. In rare cases you might need to change this to something else, like `'window'`. */
	context?: any
	/** Same as `options.context`, but per-module. */
	moduleContext?: ((id: string) => any) | { [id: string]: any }
	/** Adds support for very old environments like IE8, at the cost of some extra code. */
	legacy?: boolean
}

// https://github.com/rollup/rollup/wiki/Plugins#creating-plugins
export interface Plugin {
	/** The name of the plugin, for use in error messages and warnings */
	name?: string
	/** A function that replaces or manipulates the options object passed to rollup.rollup */
	options?(options: Options): Options
	/** A custom loader. Returning null or undefined defers to other load functions (and eventually the default behavior of loading from the file system). */
	load?(id: string): string | null | undefined
	/**
	 * Custom resolver (useful for e.g. locating third-party dependencies).
	 * Returning null or undefined defers to other resolveId functions (and eventually the default resolution behavior);
	 * returning any other falsy value signals that importee should be treated as an external module and not included in the bundle.
	 */
	resolveId?(importee: string, importer: string): string | null | undefined | false | 0 | ''
	/** A module transformer function */
	transform?(source: string, id: string): string | { code: string, map: SourceMap }
	/** A bundle transformer function */
	transformBundle?(source: string, options: { format: Format }): string | { code: string, map: SourceMap }
	/** Function hook called when bundle.generate() is being executed. */
	ongenerate?(options: GenerateOptions, bundle: Bundle): void
	/** Function hook called when bundle.write() is being executed, after the file has been written to disk. */
	onwrite?(options: WriteOptions, bundle: Bundle): void
	/** A function for generating intro text */
	intro?(): string
	/** A function for generating outro text */
	outro?(): string
	/** Prepend to the bundle. */
	banner?: string | (() => string)
	/** Apppend to the bundle. */
	footer?: string | (() => string)
}

/** Returns a Promise that resolves with a bundle */
export function rollup(options: Options): Promise<Bundle>

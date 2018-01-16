// Type definitions for rollup 0.51
// Project: https://github.com/rollup/rollup
// Definitions by: Philipp A. <https://github.com/flying-sheep>, Christian Svensson <https://github.com/csvn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RawSourceMap } from 'source-map'
import * as acorn from 'acorn'

export type Format = 'amd' | 'cjs' | 'es' | 'iife' | 'umd'
export const VERSION: string

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
	format: Format
	/** What export mode to use. Defaults to auto, which guesses your intentions based on what the `entry` module exports. */
	exports?: 'auto' | 'default' | 'named' | 'none'
	/** An ID to use for AMD/UMD bundles. */
	moduleId?: string
	/** The name to use for the module for UMD/IIFE bundles (required for bundles with exports). */
	name?: string
	/** Mapping of IDs → global variable names. Used for UMD/IIFE bundles. */
	globals?: ((id: string) => string) | { [id: string]: string }
	/**
	 * Function that takes an ID and returns a path, or Object of id: path pairs.
	 * Where supplied, these paths will be used in the generated bundle instead of the module ID, allowing you to (for example) load dependencies from a CDN.
	 */
	paths?: ((id: string) => string) | { [id: string]: string }
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
	strict?: boolean
}

export interface GenerateOptions extends BundleOptions {
	/** Whether to generate a sourcemap. If true, the return value from `bundle.generate(...)` will include a map property */
	sourcemap?: boolean
	/**
	 * The location of the generated bundle. If this is an absolute path, all the sources paths in the sourcemap will be relative to it.
	 * The map.file property is the basename of sourcemapFile, as the location of the sourcemap is assumed to be adjacent to the bundle.
	 */
	sourcemapFile?: string
}

export interface WriteOptions extends BundleOptions {
	/** The file to write to. If `options.sourcemap === true`, two files will be created – `file` and `file + '.map`. */
	file: string
	/** If `true`, a separate sourcemap file will be created. If `'inline'`, the sourcemap will be appended to the resulting file as a data URI. */
	sourcemap?: boolean | 'inline'
	/** This option is unnecessary, as it defaults to the value of file. */
	sourcemapFile?: string
}

export interface Bundle {
	/** Generate bundled code as an object */
	generate(options: GenerateOptions): Promise<{ code: string, map: SourceMap | null }>
	/** writes the file (and accompanying sourcemap file, if appropriate) to the file system. */
	write(options: WriteOptions): Promise<void>
}

export interface Options {
	/** The bundle's entry point (e.g. your `main.js` or `app.js` or `index.js`) */
	input: string
	/** A previous bundle. Use it to speed up subsequent bundles :) */
	cache?: Bundle
	/**
	 * Function that returns if an ID is external or array of IDs of modules that should remain external to the bundle.
	 * The IDs should be either the name of an external dependency or a resolved ID (like an absolute path to a file)
	 */
	external?: ((id: string) => boolean) | string[]
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

export interface ConfigFileOptions extends Options {
	output: WriteOptions | WriteOptions[]
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
	resolveId?(importee: string, importer: string | undefined): string | null | undefined | false | 0 | ''
	/** A module transformer function */
	transform?(this: TransformContext, source: string, id: string): TransformResult | Promise<TransformResult>
	/** A bundle transformer function */
	transformBundle?(source: string, options: { format: Format }): TransformResult | Promise<TransformResult>
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

// See https://github.com/rollup/rollup/wiki/Plugins#warnings-and-errors
export interface TransformContext {
	/** Emit warnings to Rollup which will be logged during bundling */
	warn(message: string | { message: string }, pos?: number | { line: number, column: number }): void
	/** Emit an error, which will abort the bundling process */
	error(message: string | { message: string }, pos?: number | { line: number, column: number }): void
}

export type TransformResult = string | null | undefined | { code: string, map: SourceMap }

/** Returns a Promise that resolves with a bundle */
export function rollup(options: Options): Promise<Bundle>

export interface WatchOptions extends ConfigFileOptions {
	watch?: {
		/**
		 * If set to true, will use chokidar for file watching (requires installation).
		 * If set to object, the settings are passed on to chokidar
		 */
		chokidar?: boolean | { [key: string]: any };
		/** Limit the file-watching to certain files, e.g. 'src/**' */
		include?: string;
		/** Prevent files from being watched, e.g. 'node_modules/**' */
		exclude?: string;
	}
}

export interface StartEvent {
	code: 'START'
}
export interface EndEvent {
	code: 'END'
}
export interface ErrorEvent {
	code: 'ERROR'
	error: Error
}
export interface FatalEvent {
	code: 'FATAL'
	error: Error
}
export interface BundleStartEvent {
	code: 'BUNDLE_START'
	input: string
	output: string[]
}
export interface BundleEndEvent {
	code: 'BUNDLE_END'
	input: string
	output: string[]
	duration: number
}
export type WatchEvent = StartEvent | EndEvent | ErrorEvent | FatalEvent | BundleStartEvent | BundleEndEvent

export class Watcher {
	/** Listen to the events that are emitted by rollup during watching */
	on(type: 'event', callback: (e: WatchEvent) => void): void
	/** Stop watching for file changes */
	close(): void
}

/** Starts rollup in watch mode. Returns a watcher instance for closing or listening to events */
export function watch(options: WatchOptions): Watcher

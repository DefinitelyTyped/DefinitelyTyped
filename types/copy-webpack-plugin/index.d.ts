// Type definitions for copy-webpack-plugin 5.0
// Project: https://github.com/webpack-contrib/copy-webpack-plugin
// Definitions by: 	flying-sheep <https://github.com/flying-sheep>
// 					avin-kavish  <https://github.com/avin-kavish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>

import { Plugin, compiler } from 'webpack'
import { IOptions } from 'minimatch'

interface MiniMatchGlob extends IOptions {
	glob: string
}

interface MiniMatchOptions extends IOptions {
	cwd?: string
}

interface CopyPattern {
	/** File source path or glob */
	from: string | MiniMatchGlob
	/**
	 * Path or webpack file-loader patterns. defaults:
	 * output root if `from` is file or dir.
	 * resolved glob path if `from` is glob.
	 */
	to?: string
	/** A path that determines how to interpret the `from` path. 
	 * 
	 * (default: `options.context | compiler.options.context`) 
	 * */
	context?: string
	/**
	 * How to interpret `to`. default: undefined
	 * 
	 * `file` - if 'to' has extension or 'from' is file.
	 * `dir` - if 'from' is directory, 'to' has no extension or ends in '/'.
	 * `template` - if 'to' contains a template pattern.
	 */
	toType?: 'file' | 'dir' | 'template'
	/** 
	 * Pattern for extracting elements to be used in `to` templates. 
	 * 
	 * Defines a `RegExp` to match some parts of the file path. These capture groups can be reused in the name property using [N] 
	 * placeholder. Note that [0] will be replaced by the entire path of the file, whereas [1] will contain the first capturing 
	 * parenthesis of your RegExp and so on...
	 * 
	 * */
	test?: RegExp
	/** Overwrites files already in `compilation.assets` (usually added by other plugins; default: `false`) */
	force?: boolean
	/** Additional globs to ignore for this pattern. (default: `[]`) */
	ignore?: Array<string | MiniMatchGlob>
	/**
	 * Removes all directory references and only copies file names. (default: `false`)
	 *
	 * If files have the same name, the result is non-deterministic. 
	 */
	flatten?: boolean
	/** Function that modifies file contents before writing to webpack. (default: `(content, path) => content`) */
	transform?: (content: Buffer, path: string) => string | Buffer | Promise<string | Buffer>
	/** 
	 * Enable transform caching.  (default: `false`)
	 * 
	 * You can use `{ key: 'my-cache-key' }` to invalidate the cache.  
	 * */
	cache?: boolean | { key: string }
	/** 
	 * Allows to modify the writing path.
	 * 
	 *  Returns the new path or a promise that resolves into the new path
	 */
	transformPath?: (targetPath: string, absolutePath: string) => string | Promise<string>
}

interface CopyWebpackPluginConfiguration {
	/** Level of messages that the module will log. (default: `'warn'`) */
	logLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent'
	/** Array of globs to ignore. (applied to `from`; default: `[]`) */
	ignore?: Array<string | MiniMatchGlob>
	/** A path that determines how to interpret the from path, shared for all patterns. default: `'compiler.options.context'` */
	context?: string
	/** Copies files, regardless of modification when using `watch` or `webpack-dev-server`. All files are copied on first build, regardless of this option. (default: `false`) */
	copyUnmodified?: boolean
}

interface CopyWebpackPlugin {
    new (patterns?: (string | CopyPattern)[], options?: CopyWebpackPluginConfiguration): Plugin
}

declare const copyWebpackPlugin: CopyWebpackPlugin
export = copyWebpackPlugin

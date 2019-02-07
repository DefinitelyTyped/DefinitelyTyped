// Type definitions for copy-webpack-plugin 4.4
// Project: https://github.com/kevlened/copy-webpack-plugin
// Definitions by: flying-sheep <https://github.com/flying-sheep>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack'
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
	/** See the `node-glob` options in addition to the ones below. (default: `{ cwd: context }`) */
	fromArgs?: MiniMatchOptions
	/**
	 * Path or webpack file-loader patterns. defaults:
	 * output root if `from` is file or dir.
	 * resolved glob path if `from` is glob.
	 */
	to?: string
	/**
	 * How to interpret `to`. defaults:
	 * 'file' if to has extension or from is file.
	 * 'dir' if from is directory, to has no extension or ends in '/'.
	 * 'template' if to contains a template pattern.
	 */
	toType?: 'file' | 'dir' | 'template'
	/** A path that determines how to interpret the `from` path. (default: `compiler.options.context`) */
	context?: string
	/**
	 * Removes all directory references and only copies file names.
	 *
	 * If files have the same name, the result is non-deterministic. (default: `false`)
	 */
	flatten?: boolean
	/** Additional globs to ignore for this pattern. (default: `[]`) */
	ignore?: Array<string | MiniMatchGlob>
	/** Function that modifies file contents before writing to webpack. (default: `(content, path) => content`) */
	transform?: (content: string, path: string) => string
	/** Enable transform caching. You can use `{ cache: { key: 'my-cache-key' } }` to invalidate the cache. (default: `false`) */
	cache?: boolean | { key: string }
	/** Overwrites files already in `compilation.assets` (usually added by other plugins; default: `false`) */
	force?: boolean
}

interface CopyWebpackPluginConfiguration {
	/** Array of globs to ignore. (applied to from; default: `[]`) */
	ignore?: Array<string | MiniMatchGlob>
	/** Copies files, regardless of modification when using `watch` or `webpack-dev-server`. All files are copied on first build, regardless of this option. (default: `false`) */
	copyUnmodified?: boolean
	/** Debug level. warning: only warnings, info/true: file location and read info, debug: very detailed debugging info. (default: `'warning'`) */
	debug?: 'warning' | 'info'|true | 'debug'
}

interface CopyWebpackPlugin {
    new (patterns?: (string | CopyPattern)[], options?: CopyWebpackPluginConfiguration): Plugin
}

declare const copyWebpackPlugin: CopyWebpackPlugin
export = copyWebpackPlugin

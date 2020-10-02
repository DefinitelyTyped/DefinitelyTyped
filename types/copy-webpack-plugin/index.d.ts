// Type definitions for copy-webpack-plugin 6.0
// Project: https://github.com/webpack-contrib/copy-webpack-plugin
// Definitions by: flying-sheep <https://github.com/flying-sheep>
//                 avin-kavish  <https://github.com/avin-kavish>
//                 Piotr Błażejewicz  <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { Plugin } from 'webpack';

interface ObjectPattern {
    /**
     * File source path or glob
     * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#from}
     * @default undefined
     */
    from: string;

    /**
     * Path or webpack file-loader patterns. defaults:
     * output root if `from` is file or dir.
     * resolved glob path if `from` is glob.
     * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#to}
     * @default compiler.options.output
     */
    to?: string;

    /**
     * A path that determines how to interpret the `from` path.
     * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#context}
     * @default options.context | compiler.options.context
     */
    context?: string;

    /**
     * Allows to configure the glob pattern matching library used by the plugin.
     * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#globoptions}
     */
    globOptions?: object;

    /**
     * How to interpret `to`. default: undefined
     * `file` - if 'to' has extension or 'from' is file.
     * `dir` - if 'from' is directory, 'to' has no extension or ends in '/'.
     * `template` - if 'to' contains a template pattern.
     * @default undefined
     */
    toType?: 'file' | 'dir' | 'template';

    /**
     * Overwrites files already in `compilation.assets` (usually added by other plugins.
     * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#force}
     * @default false
     */
    force?: boolean;

    /**
     * Removes all directory references and only copies file names. (default: `false`)
     * If files have the same name, the result is non-deterministic.
     * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#flatten}
     * @default false
     */
    flatten?: boolean;

    /**
     * Function that modifies file contents before writing to webpack. (default: `(content, path) => content`)
     * {@link https://webpack.js.org/plugins/copy-webpack-plugin/#transform}
     * @default undefined
     */
    transform?: (content: Buffer, absoluteFrom: string) => string | Buffer | Promise<string | Buffer>;

    /**
     * Enable/disable and configure caching. Default path to cache directory: node_modules/.cache/copy-webpack-plugin.
     * @default false
     */
    cacheTransform?: boolean | string | object;

    /**
     * Allows to modify the writing path.
     * Returns the new path or a promise that resolves into the new path
     * @default undefined
     */
    transformPath?: (targetPath: string, absolutePath: string) => string | Promise<string>;

    /**
     * Doesn't generate an error on missing file(s);
     * @default false
     */
    noErrorOnMissing?: boolean;
}

type StringPattern = string;

interface Options {
    /**
     * Limits the number of simultaneous requests to fs
     * @default 100
     */
    concurrency?: number;
}

interface CopyPluginOptions {
    patterns: ReadonlyArray<StringPattern | ObjectPattern>;
    options?: Options;
}

interface CopyPlugin {
    new (options?: CopyPluginOptions): Plugin;
}

/**
 * Copy files and directories with webpack
 */
declare const copyWebpackPlugin: CopyPlugin;

export = copyWebpackPlugin;

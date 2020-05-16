// Type definitions for copy-webpack-plugin 6.0
// Project: https://github.com/webpack-contrib/copy-webpack-plugin
// Definitions by:     flying-sheep <https://github.com/flying-sheep>
//                     avin-kavish  <https://github.com/avin-kavish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>

import { GlobbyOptions } from 'globby';
import { Plugin } from 'webpack';

type Keys = (defaultCacheKeys: {}, absoluteFrom: string) => {};

interface CacheTransform {
    directory?: string;
    keys: { key: string; } | Keys | Promise<Keys>;
}

type Temp = 'dir' | 'file' | 'template';

interface Pattern {
    /** Glob or path from where we сopy files. */
    from: string;
    /** Output path. */
    to?: string;
    /** A path that determines how to interpret the from path. */
    context?: string;
    /** Options passed to the glob pattern matching library including ignore option. */
    globOptions?: GlobbyOptions;
    /**
     * Determinate what is to option - directory, file or template.
     *
     * - `dir`: If to has no extension or ends on '/'
     * - `file`: If to is not a directory and is not a template
     * - `template`: If to contains a template pattern
     * */
    toType?: Temp;
    /** Overwrites files already in compilation.assets (usually added by other plugins/loaders). */
    force?: boolean;
    /** Removes all directory references and only copies file names. */
    flatten?: boolean;
    /** Allows to modify the file contents. */
    transform?: (content: Buffer, absoluteFrom: string) => string | Buffer | Promise<string | Buffer>;
    /** Enable transform caching. You can use { cache: { key: 'my-cache-key' } } to invalidate the cache. */
    cacheTransform?: boolean | string | CacheTransform;
    /**
     * Allows to modify the writing path.
     *
     * Returns the new path or a promise that resolves into the new path
     */
    transformPath?: (targetPath: string, absolutePath: string) => string | Promise<string>;
    /** Doesn't generate an error on missing file(s). */
    noErrorOnMissing?: boolean;
}

interface Options {
    concurrency?: number;
}

interface CopyWebpackPluginOptions {
    patterns: (string | Pattern)[];
    options?: Options;
}

interface CopyWebpackPlugin {
    new (options?: CopyWebpackPluginOptions): Plugin
}

declare const copyWebpackPlugin: CopyWebpackPlugin
export = copyWebpackPlugin

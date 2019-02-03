// Type definitions for rollup-plugin-commonjs 9.2
// Project: https://github.com/rollup/rollup-plugin-commonjs
// Definitions by: Eoin O'Brien <https://github.com/eoin-obrien>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import { Plugin } from 'rollup';

export type IgnoreFunction = (id: string) => boolean;

export interface Options {
    /**
     * Non-CommonJS modules will be ignored, but you can also
     * specifically include files.
     * @default undefined
     */
    include?: string | Array<string | RegExp>;

    /**
     * Non-CommonJS modules will be ignored, but you can also
     * specifically exclude files.
     * @default undefined
     */
    exclude?: string | Array<string | RegExp>;

    /**
     * Search for files other than .js files (must already
     * be transpiled by a previous plugin).
     * @default [ '.js' ]
     */
    extensions?: string[];

    /**
     * If `true`, then uses of `global` won't be dealt with by this plugin.
     * @default false
     */
    ignoreGlobal?: boolean;

    /**
     * If false, then skip sourceMap generation for CommonJS modules.
     * @default true
     */
    sourceMap?: boolean;

    /**
     * Explicitly specify unresolvable named exports.
     * @default undefined
     */
    namedExports?: { [key: string]: string[] };

    /**
     * Sometimes you have to leave require statements
     * unconverted. Pass an array containing the IDs
     * or a `id => boolean` function. Only use this
     * option if you know what you're doing!
     * @default undefined
     */
    ignore?: IgnoreFunction | string[];
}

export default function commonjs(options?: Options): Plugin;

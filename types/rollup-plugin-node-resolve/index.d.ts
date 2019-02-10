// Type definitions for rollup-plugin-node-resolve 4.0
// Project: https://github.com/rollup/rollup-plugin-node-resolve#readme
// Definitions by: Eoin O'Brien <https://github.com/eoin-obrien>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'rollup';
import { AsyncOpts as ResolveOptions } from 'resolve';

export interface Options {
    /**
     * Use "module" field for ES6 module if possible.
     * @default true
     */
    module?: boolean;

    /**
     * Use "jsnext:main" if possible.
     * Legacy field pointing to ES6 module in third-party libraries,
     * deprecated in favor of "pkg.module".
     * See: https://github.com/rollup/rollup/wiki/pkg.module
     * @default false
     */
    jsnext?: boolean;

    /**
     * Use "main" field or index.js, even if it's not an ES6 module
     * (needs to be converted from CommonJS to ES6).
     * See https://github.com/rollup/rollup-plugin-commonjs
     * @default true
     */
    main?: boolean;

    /**
     * Some package.json files have a `browser` field which
     * specifies alternative files to load for people bundling
     * for the browser. If that's you, use this option, otherwise
     * pkg.browser will be ignored.
     * @default false
     */
    browser?: boolean;

    /**
     * Not all files you want to resolve are .js files.
     * @default ['.mjs', '.js', '.json', '.node']
     */
    extensions?: string[];

    /**
     * Whether to prefer built-in modules (e.g. `fs`, `path`) or
     * local ones with the same names.
     * @default true
     */
    preferBuiltins?: boolean;

    /**
     * Lock the module search in this path (like a chroot). Module defined
     * outside this path will be marked as external.
     * @default '/'
     */
    jail?: string;

    /**
     * Set to an array of strings and/or regexps to lock the module search
     * to modules that match at least one entry. Modules not matching any
     * entry will be marked as external.
     */
    only?: Array<string | RegExp>;

    /**
     * If true, inspect resolved files to check that they are ES2015 modules
     * @default false
     */
    modulesOnly?: boolean;

    /**
     * Any additional options that should be passed through to node-resolve
     */
    customResolveOptions?: ResolveOptions;
}

export default function resolve(options?: Options): Plugin;

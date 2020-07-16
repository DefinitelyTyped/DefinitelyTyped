// Type definitions for rollup-plugin-node-globals 1.4
// Project: https://github.com/calvinmetcalf/rollup-plugin-node-globals#readme
// Definitions by: Hugo Alliaume <https://github.com/kocal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Plugin } from 'rollup';

export interface Options {
    // Every files will be parsed by default, but you can specify which files to include or exclude
    include?: Array<string | RegExp> | string | RegExp | null;
    exclude?: Array<string | RegExp> | string | RegExp | null;

    // Enable sourcemaps support
    sourceMap ?: boolean;

    // Plugin's options
    process?: boolean;
    global?: boolean;
    buffer?: boolean;
    dirname?: boolean;
    filename?: boolean;
    baseDir?: string;
}

export default function globals(options?: Options): Plugin;

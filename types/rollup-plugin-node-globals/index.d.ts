// Type definitions for rollup-plugin-node-globals 1.4
// Project: https://github.com/calvinmetcalf/rollup-plugin-node-globals#readme
// Definitions by: Hugo Alliaume <https://github.com/kocal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Plugin } from 'rollup';

export interface Options {
    // Every files will be parsed by default, but you can specify which files to include or exclude
    include?: Array<string | RegExp> | string | RegExp | null | undefined;
    exclude?: Array<string | RegExp> | string | RegExp | null | undefined;

    // Enable sourcemaps support
    sourceMap ?: boolean | undefined;

    // Plugin's options
    process?: boolean | undefined;
    global?: boolean | undefined;
    buffer?: boolean | undefined;
    dirname?: boolean | undefined;
    filename?: boolean | undefined;
    baseDir?: string | undefined;
}

export default function globals(options?: Options): Plugin;

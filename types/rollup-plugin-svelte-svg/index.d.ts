// Type definitions for rollup-plugin-svelte-svg 1.0
// Project: https://github.com/codefeathers/rollup-plugin-svelte-svg#readme
// Definitions by: Gautier Ben Aim <https://github.com/GauBen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

/// <reference types="./svg" />

import type { Plugin } from 'rollup';
import type { OptimizeOptions } from 'svgo';

export interface Options {
    enforce?: 'pre' | 'post' | undefined;
    svgo?: OptimizeOptions | undefined;
}

export function svelteSVG(options?: Options): Plugin;

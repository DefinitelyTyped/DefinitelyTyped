// Type definitions for @rollup/plugin-virtual 2.0
// Project: https://github.com/rollup/plugins/tree/master/packages/virtual#readme
// Definitions by: ed eustace <https://github.com/ahum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="node" />

import { Plugin } from 'rollup';

declare namespace virtual {
    interface Options {
        [filePath: string]: string;
    }
}

/**
 * A Rollup plugin which loads virtual modules from memory.
 */
declare function virtual(options?: virtual.Options): Plugin;
export = virtual;

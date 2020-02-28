// Type definitions for @rollup/plugin-virtual 2.0
// Project: https://github.com/rollup/plugins/tree/master/packages/virtual#readme
// Definitions by: ed eustace <https://github.com/ahum>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="node" />

declare module '@rollup/plugin-virtual' {
    import { Plugin } from 'rollup';
    namespace virtual {
        interface Options {
            [filePath: string]: string;
        }
    }

    /**
     * A Rollup plugin which loads virtual modules from memory.
     */
    function virtual(options?: virtual.Options): Plugin;
    export = virtual;
}

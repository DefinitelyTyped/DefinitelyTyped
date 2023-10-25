/// <reference types="node" />

import { Plugin } from "rollup";

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

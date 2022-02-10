// Type definitions for rollup-plugin-json 1.1
// Project: https://github.com/rollup/rollup-plugin-json#readme
// Definitions by: Tristan <https://github.com/LeoDog896>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import { Plugin } from 'rollup';

declare namespace less {
    interface Options {
        insert?: boolean;
        watch?: boolean;
        option?: {
            filename?: string;
        };
        output?: string | boolean | (() => string);
        include?: string | string[];
        exclude?: string | string[];
    }
}
declare function less(options?: less.Options): Plugin;
export = less;

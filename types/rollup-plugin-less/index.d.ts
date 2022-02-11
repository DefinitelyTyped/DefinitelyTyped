// Type definitions for rollup-plugin-less 1.1
// Project: https://github.com/xiaofuzi/rollup-plugin-less##readme
// Definitions by: Tristan <https://github.com/LeoDog896>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import { Plugin } from 'rollup';
import { render } from "less"

declare namespace less {

    type LessOptions = Parameters<typeof render>[1]

    interface Options {
        insert?: boolean;
        watch?: boolean;
        option?: LessOptions,
        plugins?: Exclude<LessOptions["plugins"], undefined>[0]
        output?: string | boolean | (() => string);
        include?: string | string[];
        exclude?: string | string[];
    }
}
declare function less(options?: less.Options): Plugin;
export = less;

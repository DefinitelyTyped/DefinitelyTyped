// Type definitions for rollup-plugin-less 1.1
// Project: https://github.com/xiaofuzi/rollup-plugin-less##readme
// Definitions by: Tristan <https://github.com/LeoDog896>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="less" />

import { Plugin } from 'rollup';

declare namespace less {
    interface Options {
        insert?: boolean;
        watch?: boolean;
        option?: Less.Options;
        plugins?: Less.Plugin[];
        output?: string | boolean | (() => string);
        include?: string | string[];
        exclude?: string | string[];
    }
}
declare function less(options?: less.Options): Plugin;
export = less;

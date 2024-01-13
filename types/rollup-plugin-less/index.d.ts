/// <reference types="node" />
/// <reference types="less" />

import { Plugin } from "rollup";

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

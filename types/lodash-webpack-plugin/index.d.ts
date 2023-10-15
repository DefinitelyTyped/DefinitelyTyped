// Type definitions for lodash-webpack-plugin 0.11
// Project: https://github.com/lodash/lodash-webpack-plugin#readme
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from "webpack";

export = LodashModuleReplacementPlugin;

declare class LodashModuleReplacementPlugin extends Plugin {
    constructor(options?: LodashModuleReplacementPlugin.Options);
}

declare namespace LodashModuleReplacementPlugin {
    interface Options {
        caching?: boolean | undefined;
        chaining?: boolean | undefined;
        cloning?: boolean | undefined;
        coercions?: boolean | undefined;
        collections?: boolean | undefined;
        currying?: boolean | undefined;
        deburring?: boolean | undefined;
        exotics?: boolean | undefined;
        flattening?: boolean | undefined;
        guards?: boolean | undefined;
        memoizing?: boolean | undefined;
        metadata?: boolean | undefined;
        paths?: boolean | undefined;
        placeholders?: boolean | undefined;
        shorthands?: boolean | undefined;
        unicode?: boolean | undefined;
    }
}

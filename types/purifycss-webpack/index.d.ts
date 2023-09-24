// Type definitions for purifycss-webpack 0.7
// Project: https://github.com/webpack-contrib/purifycss-webpack
// Definitions by: Geoff Garbers <https://github.com/garbetjie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as webpack from "webpack";

declare class PurifyPlugin extends webpack.Plugin {
    constructor(options?: PurifyOptions);
}

interface PurifyOptions {
    styleExtensions?: string[] | undefined;
    moduleExtensions?: string[] | undefined;
    minimize?: boolean | undefined;
    paths?: object | string[] | undefined;
    purifyOptions?: {
        minify?: boolean | undefined;
        output?: string | boolean | undefined;
        info?: boolean | undefined;
        rejected?: boolean | undefined;
        whitelist?: string[] | undefined;
    } | undefined;
    verbose?: boolean | undefined;
}

export = PurifyPlugin;

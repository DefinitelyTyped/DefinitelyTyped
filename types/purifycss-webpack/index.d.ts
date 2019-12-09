// Type definitions for purifycss-webpack 0.7
// Project: https://github.com/webpack-contrib/purifycss-webpack
// Definitions by: Geoff Garbers <https://github.com/garbetjie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as webpack from 'webpack';

declare class PurifyPlugin extends webpack.Plugin {
    constructor(options?: PurifyOptions);
}

interface PurifyOptions {
    styleExtensions?: string[];
    moduleExtensions?: string[];
    minimize?: boolean;
    paths?: object | string[];
    purifyOptions?: {
        minify?: boolean,
        output?: string | boolean,
        info?: boolean,
        rejected?: boolean,
        whitelist?: string[]
    };
    verbose?: boolean;
}

export = PurifyPlugin;

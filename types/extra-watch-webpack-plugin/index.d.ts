// Type definitions for extra-watch-webpack-plugin 1.0
// Project: https://github.com/pigcan/extra-watch-webpack-plugin#readme
// Definitions by: Dave Cardwell <https://github.com/davecardwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from "webpack";

export = ExtraWatchWebpackPlugin;

declare class ExtraWatchWebpackPlugin extends Plugin {
    constructor(options?: ExtraWatchWebpackPlugin.Options);
}

declare namespace ExtraWatchWebpackPlugin {
    interface Options {
        /**
         * `string` (absolute path or glob pattern) or `array`, default `[]`, attach extra files to webpack's watch system
         */
        files?: string | ReadonlyArray<string>;
        /**
         * `string` or `array`, default `[]`, attach extra dirs to webpack's watch system
         */
        dirs?: string | ReadonlyArray<string>;
    }
}

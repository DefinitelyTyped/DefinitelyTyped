// Type definitions for extra-watch-webpack-plugin 1.0
// Project: https://github.com/pigcan/extra-watch-webpack-plugin#readme
// Definitions by: Dave Cardwell <https://github.com/davecardwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from "webpack";

export = ExtraWatchWebpackPlugin;

declare class ExtraWatchWebpackPlugin extends Plugin {
    static defaults: {
        cwd: string;
        files: string[];
        dirs: string[];
    };
    constructor(options?: ExtraWatchWebpackPlugin.Options);
}

declare namespace ExtraWatchWebpackPlugin {
    interface Options {
        /**
         * (absolute path or glob pattern), attach extra files to webpack's watch system
         * @default []
         */
        files?: string | ReadonlyArray<string>;
        /**
         * attach extra dirs to webpack's watch system
         * @default []
         */
        dirs?: string | ReadonlyArray<string>;
    }
}

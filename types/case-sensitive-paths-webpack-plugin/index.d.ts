// Type definitions for case-sensitive-paths-webpack-plugin 2.1
// Project: https://github.com/Urthen/case-sensitive-paths-webpack-plugin#readme
// Definitions by: Andrew Makarov <https://github.com/r3nya>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'webpack';

export = CaseSensitivePathsWebpackPlugin;

declare class CaseSensitivePathsWebpackPlugin extends Plugin {
    constructor(options?: CaseSensitivePathsWebpackPlugin.Options);
}

declare namespace CaseSensitivePathsWebpackPlugin {
    interface Options {
        /**
         * Show more information
         */
        debug?: boolean;
    }
}

// Type definitions for webpack-dotenv-plugin 2.0
// Project: https://github.com/nwinch/webpack-dotenv-plugin#readme
// Definitions by: Michael Strobel <https://github.com/kryops>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as webpack from 'webpack';

declare namespace WebpackDotenvPlugin {
    interface Options {
        path?: string;
        sample?: string;
        silent?: boolean;
        encoding?: string;
        allowEmptyValues?: boolean;
    }
}

declare class WebpackDotenvPlugin extends webpack.Plugin {
    constructor(options?: WebpackDotenvPlugin.Options);
}

export = WebpackDotenvPlugin;

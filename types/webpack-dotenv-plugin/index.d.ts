// Type definitions for webpack-dotenv-plugin 2.0
// Project: https://github.com/nwinch/webpack-dotenv-plugin#readme
// Definitions by: Michael Strobel <https://github.com/kryops>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as webpack from "webpack";

declare namespace WebpackDotenvPlugin {
    interface Options {
        path?: string | undefined;
        sample?: string | undefined;
        silent?: boolean | undefined;
        encoding?: string | undefined;
        allowEmptyValues?: boolean | undefined;
    }
}

declare class WebpackDotenvPlugin extends webpack.Plugin {
    constructor(options?: WebpackDotenvPlugin.Options);
}

export = WebpackDotenvPlugin;

// Type definitions for unused-files-webpack-plugin 3.4
// Project: https://github.com/tomchentw/unused-files-webpack-plugin
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

export interface Options {
    patterns?: string[] | undefined;
    failOnUnused: boolean;
    globOptions?: {
        ignore?: string | string[] | undefined;
    } | undefined;
    ignore?: string | string[] | undefined;
    cwd?: string | undefined;
}

export class UnusedFilesWebpackPlugin extends Plugin {
    constructor(options: Options);
}

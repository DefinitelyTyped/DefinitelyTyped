// Type definitions for unused-files-webpack-plugin 3.4
// Project: https://github.com/tomchentw/unused-files-webpack-plugin
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

export interface Options {
    patterns?: string[];
    failOnUnused: boolean;
    globOptions?: {
        ignore?: string | string[];
    };
    ignore?: string | string[];
    cwd?: string;
}

export class UnusedFilesWebpackPlugin extends Plugin {
    constructor(options: Options);
}

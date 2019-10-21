// Type definitions for html-webpack-tags-plugin 2.0
// Project: https://github.com/jharris4/html-webpack-tags-plugin
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

declare namespace HtmlWebpackTagsPlugin {
    interface Options {
        tags: string | string[];
        files?: string | string[];
        append?: boolean;
    }
}

declare class HtmlWebpackTagsPlugin extends Plugin {
    constructor(options: HtmlWebpackTagsPlugin.Options);
}

export = HtmlWebpackTagsPlugin;

// Type definitions for html-webpack-tags-plugin 2.0
// Project: https://github.com/jharris4/html-webpack-tags-plugin
// Definitions by: 贺师俊 <https://github.com/hax>
//                 Vladimir Grenaderov <https://github.com/VladimirGrenaderov>
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

export interface Options {
    tags: string | string[];
    files?: string | string[];
    append?: boolean;
}

export default class HtmlWebpackTagsPlugin extends Plugin {
    constructor(options: Options);
}

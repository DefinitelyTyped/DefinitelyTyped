// Type definitions for html-replace-webpack-plugin 2.6
// Project: https://github.com/iminif/html-replace-webpack-plugin#readme
// Definitions by: Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

// Cannot have varargs in the middle of a type, so we need to unfortunately make the rest `any[]`
// https://github.com/microsoft/TypeScript/issues/1360
type ReplacementFunction = (match: string, ...args: any[]) => string;

interface HtmlReplaceWebpackPluginOption {
    pattern: string | RegExp;
    replacement: string | ReplacementFunction;
}

declare class HtmlReplaceWebpackPlugin extends Plugin {
    constructor(options: HtmlReplaceWebpackPluginOption | HtmlReplaceWebpackPluginOption[]);
}

export = HtmlReplaceWebpackPlugin;

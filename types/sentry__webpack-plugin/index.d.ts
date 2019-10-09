// Type definitions for @sentry/webpack-plugin 1.9
// Project: https://github.com/getsentry/sentry-webpack-plugin
// Definitions by: Peter Snider <https://github.com/psnider>
//                 Kevyn Bruyere <https://github.com/kevynb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/seneca
// TypeScript Version: 2.3

import { Plugin } from 'webpack';

declare class SentryPlugin extends Plugin {
    constructor(options?: Options);
}

declare interface Options {
    debug?: boolean;
    include?: string | string[];
    ignoreFile?: string;
    ignore?: string | string[];
    configFile?: string;
}

export = SentryPlugin;

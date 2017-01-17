// Type definitions for webpack-notifier 1.5
// Project: https://github.com/Turbo87/webpack-notifier#readme
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, Webpack } from 'webpack';

export = WebpackNotifierPlugin;

declare class WebpackNotifierPlugin implements Plugin {
    constructor(options?: WebpackNotifierPlugin.Config);
    apply(thisArg: Webpack, ...args: any[]): void;
}

declare namespace WebpackNotifierPlugin {
    export interface Config {
        title?: string;
        contentImage?: string;
        excludeWarnings?: boolean;
        alwaysNotify?: boolean;
        skipFirstNotification?: boolean;
    }
}

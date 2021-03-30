// Type definitions for webpack-notifier 1.8
// Project: https://github.com/Turbo87/webpack-notifier#readme
// Definitions by: Benjamin Lim <https://github.com/bumbleblym>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';

export = WebpackNotifierPlugin;

declare class WebpackNotifierPlugin extends Plugin {
    constructor(options?: WebpackNotifierPlugin.Options);
}

declare namespace WebpackNotifierPlugin {
    interface Options {
        alwaysNotify?: boolean;
        contentImage?: string;
        excludeWarnings?: boolean;
        skipFirstNotification?: boolean;
        title?: string;
        /**
         * Use emoji in notifications
         * @default false
         */
        emoji?: boolean;
    }

    /** @deprecated use Options */
    type Config = Options;
}

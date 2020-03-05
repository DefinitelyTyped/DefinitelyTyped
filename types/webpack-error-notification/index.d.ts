// Type definitions for webpack-error-notification 0.1
// Project: https://github.com/vsolovyov/webpack-error-notification#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, Stats } from 'webpack';

declare class WebpackErrorNotificationPlugin extends Plugin {
    /**
     * You can supply some strategy for the plugin to display notification.
     * If you don't supply anything, it will use process.platform as a strategy name.
     * `darwin` and `linux` are supported out of the box now.
     * You can also supply function(msg) {} as a strategy that will use your notification CLI tool of choice.
     */
    constructor(strategy?: WebpackErrorNotificationPlugin.Strategy, options?: WebpackErrorNotificationPlugin.Options);

    compileMessage(stats: Stats): string;
    compilationDone(stats: Stats): void;
}

declare namespace WebpackErrorNotificationPlugin {
    type Strategy = 'darwin' | 'linux' | ((msg: string) => void);

    interface Options {
        /** if you do not want to notify warnings, set this to `false` */
        notifyWarnings?: boolean;
    }
}

export = WebpackErrorNotificationPlugin;

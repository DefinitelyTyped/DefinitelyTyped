// Type definitions for browser-sync-webpack-plugin 2.2
// Project: https://github.com/Va1/browser-sync-webpack-plugin/blob/master/README.md
// Definitions by: Derek Sifford <https://github.com/dsifford>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import BrowserSync = require('browser-sync');
import { Plugin } from 'webpack';

declare namespace BrowserSyncPlugin {
    interface Options {
        /**
         * BrowserSync instance init callback.
         * @defaultValue undefined
         */
        callback?(error: Error, bs: BrowserSync.BrowserSyncInstance): void;
        /**
         * allows BrowserSync to inject changes inplace instead of reloading the page when changed
         * chunks are all CSS files.
         * @defaultValue false
         */
        injectCss?: boolean;
        /**
         * BrowserSync instance name.
         * @defaultValue 'bs-webpack-plugin'
         */
        name?: string;
        /**
         * Should BrowserSync handle reloads?
         * @defaultValue true
         */
        reload?: boolean;
    }
}
declare class BrowserSyncPlugin extends Plugin {
    constructor(browserSyncOptions: BrowserSync.Options, pluginOptions?: BrowserSyncPlugin.Options);
}

export = BrowserSyncPlugin;

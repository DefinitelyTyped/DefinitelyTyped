import BrowserSync = require("browser-sync");
import { Plugin } from "webpack";

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
        injectCss?: boolean | undefined;
        /**
         * BrowserSync instance name.
         * @defaultValue 'bs-webpack-plugin'
         */
        name?: string | undefined;
        /**
         * Should BrowserSync handle reloads?
         * @defaultValue true
         */
        reload?: boolean | undefined;
    }
}
declare class BrowserSyncPlugin extends Plugin {
    constructor(browserSyncOptions: BrowserSync.Options, pluginOptions?: BrowserSyncPlugin.Options);
}

export = BrowserSyncPlugin;

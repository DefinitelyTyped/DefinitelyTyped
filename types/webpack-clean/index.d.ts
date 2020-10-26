// Type definitions for webpack-clean 1.2
// Project: https://github.com/allexcd/webpack-clean#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'webpack';

declare namespace WebpackCleanPlugin {
    interface Options {
        /**
         * directory to be resolved to
         * @default null;
         */
        basePath?: string | null;
        /**
         * specify if the .map files should be automatically removed
         * @default false
         */
        removeMaps?: boolean;
        /**
         * specify if the files should be force deleted in case of compile errors.
         * If forceDelete is not enabled, the compile errors will be logged to stdout but the deletion of the files will not take place
         * @default false
         */
        forceDelete?: boolean;
    }
}

/**
 * A webpack plugin to clean specified files after build
 */
declare class WebpackCleanPlugin extends Plugin {
    /**
     * @param files  array of files or string for a single file relative to the basePath
     * or to the context of your config (if the basePath param is not specified)
     */
    constructor(files: string | string[], options?: WebpackCleanPlugin.Options);
}

/**
 *  A webpack plugin to clean specified files after build
 */
export = WebpackCleanPlugin;

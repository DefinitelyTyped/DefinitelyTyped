// Type definitions for clean-webpack-plugin 0.1
// Project: https://github.com/johnagan/clean-webpack-plugin
// Definitions by: Jed Fox <https://github.com/j-f1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'webpack';

export = CleanWebpackPlugin;

declare class CleanWebpackPlugin extends Plugin {
    /**
     * @param paths A glob or array of globs to delete
     */
    constructor(paths: string | ReadonlyArray<string>, options?: string | CleanWebpackPlugin.Options);
}

declare namespace CleanWebpackPlugin {
    interface Options {
        /**
         * Absolute path to your webpack root folder (paths appended to this)
         * Default: root of your package
         */
        root?: string;
        /**
         * Write logs to the console.
         */
        verbose?: boolean;
        /**
         * Set to `true` to emulate deletion without actually removing any files.
         */
        dry?: boolean;
        /**
         * If true, remove files on recompile.
         */
        watch?: boolean;
        /**
         * Instead of removing whole path recursively,
         * remove all path's content with exclusion of provided immediate children.
         * Good for not removing shared files from build directories.
         */
        exclude?: ReadonlyArray<string>;
        /**
         * Allow the plugin to clean folders outside of the webpack root
         */
        allowExternal?: boolean;
    }
}

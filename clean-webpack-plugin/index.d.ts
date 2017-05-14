// Type definitions for clean-webpack-plugin 0.1
// Project: https://github.com/johnagan/clean-webpack-plugin
// Definitions by: Chase Brewer <https://github.com/chasepbrewer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'webpack';

declare namespace CleanWebpackPlugin {
    interface Options {
        // An absolute path for the root.
        root?: string;
        // Write logs to console.
        verbose?: boolean;
        // Use boolean "true" to test/emulate delete. (will not remove files).
        // (Default: "false", remove files)
        dry?: boolean;
        // Instead of removing whole path recursively,
        // remove all path's content with exclusion of provided
        // immediate children. Good for not removing shared files from
        // build directories.
        exclude?: string[];
    }

    interface Constructor {
        new(paths: string[], options?: Options): Plugin;
    }
}

declare var plugin: CleanWebpackPlugin.Constructor;

export = plugin;

// Type definitions for webpack-cleanup-plugin 0.5
// Project: https://github.com/gpbl/webpack-cleanup-plugin#readme
// Definitions by: Luka Maljic <https://github.com/malj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin } from 'webpack';
export = WebpackCleanupPlugin;

declare class WebpackCleanupPlugin extends Plugin {
    constructor(options?: WebpackCleanupPlugin.Options);
}

declare namespace WebpackCleanupPlugin {
    interface Options {
        /**
         * Keep some files in the output path. It accepts globbing as in [minimatch](https://github.com/isaacs/minimatch).
         */
        exclude?: string[];

        /**
         * Print the list of the files that will be deleted without actually deleting them.
         */
        preview?: boolean;

        /**
         * Mute the console output.
         */
        quiet?: boolean;
    }
}

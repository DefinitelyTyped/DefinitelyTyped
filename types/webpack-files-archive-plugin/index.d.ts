// Type definitions for webpack-files-archive-plugin 1.0
// Project: https://github.com/himanshuapril1/webpack-files-archive-plugin
// Definitions by: Yusuf Ades <https://github.com/yusufades>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import type { Compiler } from 'webpack';

declare namespace WebpackFilesArchivePlugin {
    type Formats = 'tar' | 'zip';

    interface Options {
        /**
         * Archive formats to use, can be 'tar' or 'zip'
         */
        format: Formats | Formats[];
        /**
         *  Directory location of files to be archived.
         */
        output?: string;
        /**
         * A different extension to use instead of tar.gz or zip (without leading .)
         */
        ext?: string;
    }
}

declare class WebpackFilesArchivePlugin {
    constructor(options: WebpackFilesArchivePlugin.Options);

    apply(compiler: Compiler): void;
}

export = WebpackFilesArchivePlugin;

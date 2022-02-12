// Type definitions for webpack-watch-files-plugin 1.1
// Project: https://github.com/Fridus/webpack-watch-files-plugin
// Definitions by: Ben Grynhaus <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Compiler } from 'webpack';

interface Options {
    /**
     * Array of patterns.
     * @default []
     */
    files?: readonly string[];
    /**
     * List files found.
     * @default false
     */
    verbose?: boolean;
}

declare class WebpackWatchFilesPlugin {
    constructor(options?: Options);

    apply(compiler: Compiler): void;
}

export = WebpackWatchFilesPlugin;

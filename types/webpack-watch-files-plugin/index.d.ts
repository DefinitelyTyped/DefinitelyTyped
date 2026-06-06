/// <reference types="node" />
import { Compiler } from "webpack";

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

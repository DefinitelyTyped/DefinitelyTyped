// Type definitions for webpack-deadcode-plugin 0.1
// Project: https://github.com/MQuy/webpack-deadcode-plugin#readme
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { compilation, Plugin } from 'webpack';

interface Options {
    /** Current working directoy for patterns above. If you don't set explicitly, your webpack context will be used. */
    context?: string;
    /** Whether to run unsed export detection or not. */
    detectUnusedExport?: boolean;
    /** Whether to run unused files detection or not. */
    detectUnusedFiles?: boolean;
    /** The array of patterns to not look at. */
    exclude?: string[];
    /**
     * Deadcode does not interrupt the compilation by default.
     * If you want to cancel the compilation, set it `true`, it throws a fatal error and stops the compilation.
     */
    failOnHint?: boolean;
    outputFile?: string;
    /**
     * The array of patterns to look for unused files and unused export in used files.
     * Directly passed to [`fast-glob`](https://github.com/mrmlnc/fast-glob).
     */
    patterns?: string[];
}

declare class WebpackDeadcodePlugin extends Plugin {
    options: Options;

    constructor(options?: Options);

    handleAfterEmit(options: Required<Options>, compilation: compilation.Compilation, callback: () => void): void;
}

export = WebpackDeadcodePlugin;

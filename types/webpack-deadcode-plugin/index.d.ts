import { compilation, Plugin } from "webpack";

interface Options {
    /** Current working directoy for patterns above. If you don't set explicitly, your webpack context will be used. */
    context?: string | undefined;
    /** Whether to run unsed export detection or not. */
    detectUnusedExport?: boolean | undefined;
    /** Whether to run unused files detection or not. */
    detectUnusedFiles?: boolean | undefined;
    /** The array of patterns to not look at. */
    exclude?: string[] | undefined;
    /**
     * Deadcode does not interrupt the compilation by default.
     * If you want to cancel the compilation, set it `true`, it throws a fatal error and stops the compilation.
     */
    failOnHint?: boolean | undefined;
    outputFile?: string | undefined;
    /**
     * The array of patterns to look for unused files and unused export in used files.
     * Directly passed to [`fast-glob`](https://github.com/mrmlnc/fast-glob).
     */
    patterns?: string[] | undefined;
}

declare class WebpackDeadcodePlugin extends Plugin {
    options: Options;

    constructor(options?: Options);

    handleAfterEmit(options: Required<Options>, compilation: compilation.Compilation, callback: () => void): void;
}

export = WebpackDeadcodePlugin;

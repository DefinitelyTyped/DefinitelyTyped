// Type definitions for remove-files-webpack-plugin 1.2.0
// Project: https://github.com/Amaimersion/remove-files-webpack-plugin/blob/master/README.md
// Definitions by: Sergey Kuznetsov <https://github.com/Amaimersion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { Plugin, compilation, Compiler } from "webpack";

/**
 * A plugin for webpack that removes files and
 * folders before and after compilation.
 */
declare class RemovePlugin extends Plugin {
    constructor(parameters: PluginParameters);
    apply(compiler: Compiler): void;
}

/**
 * A parameters of plugin.
 */
interface PluginParameters {
    /**
     * Executes before compilation.
     */
    before?: RemoveParameters;

    /**
     * Executes after compilation.
     */
    after?: RemoveParameters;
}

/**
 * A parameters of removing.
 */
interface RemoveParameters {
    /**
     * A root directory.
     * Not absolute paths will be appended to this.
     *
     * Defaults to `.` (where package.json and
     * node_modules are located).
     */
    root?: string;

    /**
     * A folders or files for removing.
     *
     * Defaults to `[]`.
     */
    include?: ReadonlyArray<string>;

    /**
     * A files for excluding.
     *
     * Defaults to `[]`.
     */
    exclude?: ReadonlyArray<string>;

    /**
     * A folders for testing.
     *
     * Defaults to `[]`.
     */
    test?: ReadonlyArray<TestObject>;

    /**
     * Move folders or files to trash (recycle bin)
     * instead of permanent removing.
     *
     * Defaults to `true`.
     */
    trash?: boolean;

    /**
     * Print messages of "info" level
     * (example: "Which folders or files have been removed").
     *
     * Defaults to `true`.
     */
    log?: boolean;

    /**
     * Print messages of "warning" level
     * (example: "An items for removing not found").
     *
     * Defaults to `true`.
     */
    logWarning?: boolean;

    /**
     * Print messages of "error" level
     * (example: "No such file or directory").
     *
     * Defaults to `false`.
     */
    logError?: boolean;

    /**
     * Print messages of "debug" level
     * (used for developers of the plugin).
     *
     * Defaults to `false`.
     */
    logDebug?: boolean;

    /**
     * Emulate remove process.
     * Print which folders or files will be removed
     * without actually removing them.
     * Ignores `log` value.
     *
     * Defaults to `false`.
     */
    emulate?: boolean;

    /**
     * Allow removing of `root` directory or outside `root` directory.
     * It is kind of safe mode.
     * **Don't turn it on if you don't know what you actually do!**
     *
     * Defaults to `false`.
     */
    allowRootAndOutside?: boolean;
}

/**
 * A folder for testing of files that should be removed.
 */
interface TestObject {
    /**
     * A path to the folder.
     */
    folder: string;

    /**
     * A method that accepts file path
     * (root + directoryPath + fileName) and
     * returns value that indicates should be
     * this file be removed or not.
     */
    method: (filePath: string) => boolean;

    /**
     * Test in all subfolders, not just in `folder`.
     *
     * Defaults to `false`.
     */
    recursive?: boolean;
}

export = RemovePlugin;

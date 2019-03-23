// Type definitions for remove-files-webpack-plugin 1.0
// Project: https://github.com/Amaimersion/remove-files-webpack-plugin
// Definitions by: Sergey Kuznetsov <https://github.com/Amaimersion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3


/**
 * A plugin for webpack which removes files and folders before and after compilation.
 */
declare class RemovePlugin {
    constructor(parameters: PluginParameters);
}


/**
 * A parameters for plugin.
 */
interface PluginParameters {
    /**
     * Removing before compilation.
     */
    before: RemoveParameters;

    /**
     * Removing after compilation.
     */
    after: RemoveParameters;
}


/**
 * A parameters for removing.
 */
interface RemoveParameters {
    /**
     * A root directory.
     * Not absolute paths will be appended to this.
     * Defaults to `.` (from which directory is called).
     */
    root: string;

    /**
     * A folders or files for removing.
     * Defaults to `[]`.
     */
    include: ReadonlyArray<String>;

    /**
     * A files for excluding.
     * Defaults to `[]`.
     */
    exclude: ReadonlyArray<String>;

    /**
     * A folders for custom testing.
     * Defaults to `[]`.
     */
    test: ReadonlyArray<TestObject>;

    /**
     * Print which folders or files has been removed.
     * Defaults to `true`.
     */
    log: boolean;

    /**
     * Emulate remove process.
     * Print which folders or files will be removed without actually removing them.
     * Ignores `log`.
     * Defaults to `false`.
     */
    emulate: boolean;

    /**
     * Allow remove of a `root` directory or outside the `root` directory.
     * It's kinda safe mode.
     * **Don't turn it on, if you don't know what you actually do!**
     * Defaults to `false`.
     */
    allowRootAndOutside: boolean;
}


/**
 * A folder for custom testing of files that should be removed.
 */
interface TestObject {
    /**
     * A path to the folder.
     * Required.
     */
    folder: string;

    /**
     * A method that accepts an absolute file path and must return 
     * boolean value that indicates should be removed that file or not.
     * Required.
     */
    method: (filePath: string) => boolean;

    /**
     * Should the method be applied to files in subdirectories.
     * Defaults to `false`.
     */
    recursive: boolean;
}


export = RemovePlugin;

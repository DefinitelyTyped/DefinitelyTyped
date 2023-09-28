// Type definitions for walk-asyncgen 0.0
// Project: https://bitbucket.org/ShoemakerSteve/walk-asyncgen
// Definitions by: PythonCoderAS <https://github.com/PythonCoderAS>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    /**
     * A regex of which directories to exclude.
     */
    excludeDirs?: false | RegExp;
    /**
     * A regex of which files to exclude.
     */
    excludeFiles?: false | RegExp;
    /**
     * A regex of which extensions to exclude.
     */
    excludeExt?: false | RegExp;
    /**
     * A regex of which directories to include. If provided, only directories matching this regex will be walked.
     */
    includeDirs?: false | RegExp;
    /**
     * A regex of which files to include. If provided, only files matching this regex will be walked.
     */
    includeFiles?: false | RegExp;
    /**
     * A regex of which extensions to include. If provided, only files with extensions matching this regex will be walked.
     */
    includeExt?: false | RegExp;
    /**
     * Whether to print the directory that is initially walked.
     */
    printDirs?: boolean;
}

/**
 * Walk a directory asynchronously and returns every file found.
 * @param dir The directory to start at. Defaults to the current working directory.
 * @param options Optional settings for the walk.
 */
declare function pathsGenerator(dir?: string, options?: Options): AsyncGenerator<string, void, void>;

export = pathsGenerator;

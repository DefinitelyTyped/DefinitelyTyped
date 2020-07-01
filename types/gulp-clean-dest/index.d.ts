// Type definitions for gulp-clean-dest 0.2
// Project: https://github.com/clark800/gulp-clean-dest
// Definitions by: Andrey Lalev <https://github.com/andypyrope>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace gulpCleanDest {
    interface Options {
        /**
         * The working directory the folder is relative to.
         */
        cwd?: string;

        /**
         * Extension of the destination files. Useful if it differs from the original.
         */
        extension?: string;
    }
}

/**
 * Removes files from the dest directory prior to building.
 * @param destination The name of the dest directory
 * @param options Options for the cleaning process
 */
declare function gulpCleanDest(destination: string, options?: gulpCleanDest.Options): NodeJS.ReadWriteStream;

export = gulpCleanDest;

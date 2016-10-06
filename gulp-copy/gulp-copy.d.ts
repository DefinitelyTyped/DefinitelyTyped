// Type definitions for gulp-copy v0.0.2
// Project: https://github.com/klaascuvelier/gulp-copy
// Definitions by: Arun Aravind <https://github.com/aravindarun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../through/through.d.ts" />

declare module "gulp-copy" {
    import through = require("through");

    /**
     * Copy files to destination and expose those files as source streams for the gulp pipeline.
     *
     * @param outDirectory The name of the destination directory. If this directory
     *                     does not exist, it will be created atomatically.
     */
    function gulpCopy(outDirectory: string): through.ThroughStream;

    /**
     * Copy files to destination and expose those files as source streams for the gulp pipeline.
     *
     * @param outDirectory The name of the destination directory. If this directory
     *                     does not exist, it will be created atomatically.
     * @param options Override values for available settings.
     */
    function gulpCopy(outDirectory: string, options: gulpCopy.GulpCopyOptions): through.ThroughStream;

    namespace gulpCopy {

        export interface GulpCopyOptions {
            /**
             * Specifies the number of parts of the path to be ignored as path prefixes.
             */
            prefix: number;
        }
    }

    export = gulpCopy;
}

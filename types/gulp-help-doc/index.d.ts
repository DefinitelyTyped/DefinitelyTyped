// Type definitions for gulp-help-doc
// Project: https://github.com/Mikhus/gulp-help-doc
// Definitions by: Mikhus <https://github.com/Mikhus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="gulp" />

declare module "gulp-help-doc" {

    import gulp = require('gulp');

    namespace usage {

        interface UsageOptions {
            /**
             * Defines  max line width for the printed output lines
             * (by default is 80 characters long)
             */
            lineWidth?: number,

            /**
             * Defines max width of the column width tasks or args names
             * (by default is 20 characters long)
             */
            keysColumnWidth?: number,

            /**
             * Defines number of empty characters for left-padding of the output
             */
            padding?: number,

            /**
             * Printing engine (by default is console). Accepted any device
             * which has log() function defined to do output.
             */
            logger?: { log: Function },

            /**
             * Path to a gulpfile (default is gulpfile.js)
             * Normally, there is no need to change this option. It may be used
             * for some special cases, like mocking gulpfile for testing.
             */
            gulpfile?: string
        }

        interface Usage {
            (gulp: gulp.Gulp, options?: UsageOptions): Promise<any>
        }

    }

    var usage: usage.Usage;

    export = usage;
}

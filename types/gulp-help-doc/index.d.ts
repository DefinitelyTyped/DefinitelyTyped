/// <reference types="node" />
/// <reference types="gulp" />

declare module "gulp-help-doc" {
    import gulp = require("gulp");

    namespace usage {
        interface UsageOptions {
            /**
             * Defines  max line width for the printed output lines
             * (by default is 80 characters long)
             */
            lineWidth?: number | undefined;

            /**
             * Defines max width of the column width tasks or args names
             * (by default is 20 characters long)
             */
            keysColumnWidth?: number | undefined;

            /**
             * Defines number of empty characters for left-padding of the output
             */
            padding?: number | undefined;

            /**
             * Printing engine (by default is console). Accepted any device
             * which has log() function defined to do output.
             */
            logger?: { log: Function } | undefined;

            /**
             * Path to a gulpfile (default is gulpfile.js)
             * Normally, there is no need to change this option. It may be used
             * for some special cases, like mocking gulpfile for testing.
             */
            gulpfile?: string | undefined;
        }

        interface Usage {
            (gulp: gulp.Gulp, options?: UsageOptions): Promise<any>;
        }
    }

    var usage: usage.Usage;

    export = usage;
}

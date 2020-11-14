// Type definitions for karma-brief-reporter 0.2
// Project: https://github.com/prantlf/karma-brief-reporter
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * Reports test progress statistics and lists failures at the end of a Karma test run.
         * {@link https://github.com/prantlf/karma-brief-reporter#options}
         */
        briefReporter?: BriefReporterOptions;
    }

    interface BriefReporterOptions {
        /**
         * Suppress the error report at the end of the test run
         * @default false
         */
        suppressErrorReport?: boolean;
        /**
         * Print the test failures immediately instead of at the end
         * @default false
         */
        earlyErrorReport?: boolean;
        /**
         * Suppress the red background on errors in the error
         * report at the end of the test run.
         * @default false
         */
        suppressErrorHighlighting?: boolean;
        /**
         * Omits stack frames from external dependencies like qunit,
         * jasmine or chai, which appear in stack traces of failed
         * tests and which are usually irrelevant to the tested code
         * @default false
         */
        omitExternalStackFrames?: boolean;
        /**
         * Suppress the browser console log at the end of the test run
         * @default false
         */
        suppressBrowserLogs?: boolean;
        /**
         * Only render the graphic after all tests have finished.
         * This is ideal for using this reporter in a continuous integration environment
         * @default false
         */
        renderOnRunCompleteOnly?: boolean;
    }
}

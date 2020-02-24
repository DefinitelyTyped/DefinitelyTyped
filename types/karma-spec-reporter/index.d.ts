// Type definitions for karma-spec-reporter 0.0
// Project: https://github.com/mlex/karma-spec-reporter#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * {@link https://github.com/mlex/karma-spec-reporter#configuration}
         */
        specReporter?: SpecReporterOptions;
    }

    interface SpecReporterOptions {
        /** limit number of lines logged per test */
        maxLogLines?: number;
        /** do not print error summary */
        suppressErrorSummary?: boolean;
        /** do not print information about failed tests */
        suppressFailed?: boolean;
        /** do not print information about passed tests */
        suppressPassed?: boolean;
        /** do not print information about skipped tests */
        suppressSkipped?: boolean;
        /** print the time elapsed for each spec */
        showSpecTiming?: boolean;
        /** test would finish with error when a first fail occurs */
        failFast?: boolean;
    }
}

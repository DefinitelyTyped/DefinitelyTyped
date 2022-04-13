// Type definitions for karma-spec-reporter 0.0
// Project: https://github.com/mlex/karma-spec-reporter#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * {@link https://github.com/mlex/karma-spec-reporter#configuration}
         */
        specReporter?: SpecReporterOptions | undefined;
    }

    interface SpecReporterOptions {
        /** limit number of lines logged per test */
        maxLogLines?: number | undefined;
        /** do not print error summary */
        suppressErrorSummary?: boolean | undefined;
        /** do not print information about failed tests */
        suppressFailed?: boolean | undefined;
        /** do not print information about passed tests */
        suppressPassed?: boolean | undefined;
        /** do not print information about skipped tests */
        suppressSkipped?: boolean | undefined;
        /** do not print summary  */
        suppressSummary?: boolean | undefined;
        /** print the time elapsed for each spec */
        showSpecTiming?: boolean | undefined;
        /** test would finish with error when a first fail occurs */
        failFast?: boolean | undefined;
        /** custom prefixes to use when reporting passed/failed/skipped prefixes */
        prefixes?:
            | {
                  success?: string | undefined;
                  failure?: string | undefined;
                  skipped?: string | undefined;
              }
            | undefined;
    }
}

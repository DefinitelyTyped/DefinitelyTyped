// Type definitions for karma-summary-reporter 1.10
// Project: https://github.com/sth/karma-summary-reporter#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
//                 Stephan Hohe <https://github.com/sth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * Show a table detailing the test results for all connected browsers at the end of a test run.
         * This gives a better overview which browsers are broken than the output of other reporters.
         * see {@link https://github.com/sth/karma-summary-reporter#config}
         */
        readonly summaryReporter?: SummaryReporterConfig;
    }

    interface SummaryReporterConfig {
        /**
         * Select which tests are displayed in the summary:
         * * 'failed': Only show tests that failed in some browser (default)
         * * 'skipped': Additionally show tests that got skipped in some browser
         * * 'all': Show all test, also ones that didn't fail specLength
         */
        show?: 'failed' | 'skipped' | 'all';
        /**
         * Space reserved to display the spec label (width of the first column in the results table).
         */
        specLength?: number;
        /**
         * Shows a overview column in the results table, showing the total result of a test over all browsers
         * ("failed" if the test failed anywhere, ...)
         */
        overviewColumn?: boolean;
        /**
         * Show the list of connected browsers before the result table:
         * * 'always': Show always (default)
         * * 'never': Show never
         * * 'ifneeded': Show only if there are test results shown from multiple browsers
         */
        browserList?: 'always' | 'never' | 'ifneeded';
    }
}

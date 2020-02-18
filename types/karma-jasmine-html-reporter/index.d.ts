// Type definitions for karma-jasmine-html-reporter 1.5
// Project: https://github.com/dfederm/karma-jasmine-html-reporter#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * In combination with multiple reporters you may want to disable failed messages
         * because it's already handled by another reporter
         * See {@link https://github.com/dfederm/karma-jasmine-html-reporter#with-options}
         */
        jasmineHtmlReporter?: JasmineHtmlReporterOptions;
    }
    interface JasmineHtmlReporterOptions {
        /** Suppress failed messages */
        suppressFailed?: boolean;
    }
}

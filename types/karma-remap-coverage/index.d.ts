// Type definitions for karma-remap-coverage 0.1
// Project: https://github.com/sshev/karma-remap-coverage#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/// <reference types="karma-coverage" />

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * Key-value pairs where key is report type and value - path to file/dir where to save it.
         * Reporters like `text-summary`, `text-lcov` and `teamcity` can print out to console as well
         * - in this case just provide any falsy value instead of path.
         *
         * @example
         * ```ts
         * 'text-summary': null, // to show summary in console
         * html: './coverage/html',
         * ```
         *
         * {@link https://github.com/sshev/karma-remap-coverage#remapcoveragereporter-format }
         */
        remapCoverageReporter?: KarmaRemapCoverageReporter;
    }

    // remapped reporter types to key-value pairs
    type KarmaRemapCoverageReporter = Partial<Record<ReporterType, string | null | undefined>>;
}

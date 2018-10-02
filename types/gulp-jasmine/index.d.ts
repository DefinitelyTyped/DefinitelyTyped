// Type definitions for gulp-jasmine 2.4
// Project: https://github.com/sindresorhus/gulp-jasmine#readme
// Definitions by: Andrey Lalev <https://github.com/andypyrope>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
/// <reference types="jasmine" />

interface JasmineOptions {
    /**
     *  Display spec names in default reporter.
     */
    verbose?: boolean;

    /**
     * Include stack traces in failures in default reporter.
     * @default false
     */
    includeStackTrace?: boolean;

    /**
     * Reporter(s) to use.
     */
    reporter?: jasmine.CustomReporter | ReadonlyArray<jasmine.CustomReporter>;

    /**
     * Time to wait in milliseconds before a test automatically fails.
     * @default 5000
     */
    timeout?: number;

    /**
     * Stops the stream on failed tests.
     * @default true
     */
    errorOnFail?: boolean;

    /**
     * Passes the config to Jasmine's loadConfig method.
     */
    config?: object;
}

/**
 * Executes Jasmine tests. Emits a 'jasmineDone' event on success.
 * @param options Optional options for the execution of the Jasmine test
 */
declare function gulpJasmine(options?: JasmineOptions): NodeJS.ReadWriteStream;
export = gulpJasmine;

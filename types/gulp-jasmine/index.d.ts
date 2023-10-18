/// <reference types="node" />
/// <reference types="jasmine" />

interface JasmineOptions {
    /**
     *  Display spec names in default reporter.
     */
    verbose?: boolean | undefined;

    /**
     * Include stack traces in failures in default reporter.
     * @default false
     */
    includeStackTrace?: boolean | undefined;

    /**
     * Reporter(s) to use.
     */
    reporter?: jasmine.CustomReporter | ReadonlyArray<jasmine.CustomReporter> | undefined;

    /**
     * Time to wait in milliseconds before a test automatically fails.
     * @default 5000
     */
    timeout?: number | undefined;

    /**
     * Stops the stream on failed tests.
     * @default true
     */
    errorOnFail?: boolean | undefined;

    /**
     * Passes the config to Jasmine's loadConfig method.
     */
    config?: object | undefined;
}

/**
 * Executes Jasmine tests. Emits a 'jasmineDone' event on success.
 * @param options Optional options for the execution of the Jasmine test
 */
declare function gulpJasmine(options?: JasmineOptions): NodeJS.ReadWriteStream;
export = gulpJasmine;

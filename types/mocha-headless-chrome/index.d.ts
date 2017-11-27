// Type definitions for mocha-headless-chrome 1.7
// Project: https://github.com/direct-adv-interfaces/mocha-headless-chrome#readme
// Definitions by: Josh Goldberg <https://github.com/joshuakgoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Options to run the mocha-headless-chrome runner.
 */
interface Options {
    /**
     * Arguments to pass Puppeteer, if any.
     */
    args?: string[];

    /**
     * Chrome executable path, if not the system default.
     */
    executablePath?: string;

    /**
     * Path or URL of the page which contains tests.
     */
    file: string;

    /**
     * Viewport height.
     */
    height?: number;

    /**
     * Mocha reporter name (defaults to "spec").
     */
    reporter?: string;

    /**
     * Viewport width.
     */
    width?: number;

    /**
     * Test timeout in ms.
     */
    timeout?: number;

    /**
     * Whether to show the Chrome window.
     */
    visible?: boolean;
}

/**
 * Description of a runner run.
 */
interface Run {
    /**
     * Exposed coverage results.
     */
    coverage: object | undefined;

    /**
     * Test results.
     */
    result: Result;
}

/**
 * Test results from a run.
 */
interface Result {
    /**
     * Tests that failed.
     */
    failures: TestDescription[];

    /**
     * Tests that passed.
     */
    passed: TestDescription[];

    /**
     * Tests that were pending at completion time.
     */
    pending: TestDescription[];

    /**
     * Test statistics.
     */
    stats: ResultStats;

    /**
     * All tests that were run.
     */
    tests: TestDescription[];
}

/**
 * Description of a single test's results.
 */
interface TestDescription {
    /**
     * How many milliseconds it took to run the test.
     */
    duration: number;

    /**
     * Any details for an error that happened during the test, if any.
     */
    err: TestError;

    /**
     * Full title of the test.
     */
    fullTitle: string;

    /**
     * Friendly title of the test.
     */
    title: string;
}

type TestError = Error | {};

/**
 * Test statistics from a run result.
 */
interface ResultStats {
    /**
     * How many milliseconds it took to run the tests.
     */
    duration: number;

    /**
     * ISO string formatted end time.
     */
    end: string;

    /**
     * How many tests failed.
     */
    failures: number;

    /**
     * How many tests passed.
     */
    passes: number;

    /**
     * How many tests were still pending at completion time.
     */
    pending: number;

    /**
     * ISO string formatted start time.
     */
    start: string;

    /**
     * How many tests were run.
     */
    tests: number;
}

/**
 * Runs mocha in a client-side mocha tests in the command line through Puppeteer.
 *
 * @returns A Promise for the test results.
 */
declare function runner(options: Options): Promise<Run>;

export = runner;

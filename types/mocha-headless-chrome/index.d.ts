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
 * Runs mocha in a client-side mocha tests in the command line through Puppeteer.
 *
 * @returns A Promise for the test results.
 */
declare function runner(options: Options): Promise<string>;

export = runner;

/// <reference types="mocha" />

import { TestRunner } from "atom";

interface AtomMochaOptions {
    /** Which reporter to use on the terminal. */
    reporter?: string | undefined;

    /** Whether or not to assign the created Atom environment to `global.atom`. */
    globalAtom?: boolean | undefined;

    /** File extensions that indicate that the file contains tests. */
    testSuffixes?: string[] | undefined;

    /** Whether or not to colorize output on the terminal. */
    colors?: boolean | undefined;

    /** The string to use for the window title in the HTML reporter. */
    htmlTitle?: string | undefined;
}

// The test runner function is augmented on export by:
//   import createRunner from './lib/create-runner'
//
//   module.exports = createRunner()
//   module.exports.createRunner = createRunner
// Which is what we're trying to model here.
interface TestRunnerExport extends TestRunner {
    createRunner(options?: AtomMochaOptions, mochaConfigFunction?: (mocha: Mocha) => void): TestRunner;
}

declare const runner: TestRunnerExport;
export = runner;

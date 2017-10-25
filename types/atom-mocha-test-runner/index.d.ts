// Type definitions for atom-mocha-test-runner 1.0
// Project: https://github.com/BinaryMuse/atom-mocha-test-runner
// Definitions by: GlenCFL <https://github.com/GlenCFL>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="mocha" />
/// <reference types="atom" />

interface AtomMochaOptions {
    /** Which reporter to use on the terminal. */
    reporter?: string;

    /** Whether or not to assign the created Atom environment to `global.atom`. */
    globalAtom?: boolean;

    /** File extensions that indicate that the file contains tests. */
    testSuffixes?: string[];

    /** Whether or not to colorize output on the terminal. */
    colors?: boolean;

    /** The string to use for the window title in the HTML reporter. */
    htmlTitle?: string;
}

// The test runner function is augmented on export by:
//   import createRunner from './lib/create-runner'
//
//   module.exports = createRunner()
//   module.exports.createRunner = createRunner
// Which is what we're trying to model here.
interface TestRunnerExport extends AtomCore.TestRunner {
    createRunner(options?: AtomMochaOptions, mochaConfigFunction?:
        (mocha: Mocha) => void): AtomCore.TestRunner;
}

declare const runner: TestRunnerExport;
export = runner;

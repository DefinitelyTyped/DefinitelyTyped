// Type definitions for karma-chrome-launcher 3.1
// Project: https://github.com/karma-runner/karma-chrome-launcher#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface CustomLauncher {
        /**
         * The `--user-data-dir` is set to a temporary directory,
         * but can be overridden on a custom launcher as shown below.
         * One reason to do this is to have a permanent Chrome user data directory inside the project directory
         * to be able to install plugins there (e.g. JetBrains IDE Support plugin).
         */
        chromeDataDir?: string;
    }
}

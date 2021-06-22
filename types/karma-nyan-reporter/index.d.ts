// Type definitions for karma-nyan-reporter 0.2
// Project: https://github.com/dgarlitt/karma-nyan-reporter#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2
import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * If you want to suppress the stack trace at the end of the test run you can use the suppressErrorReport option.
         * {@link https://github.com/dgarlitt/karma-nyan-reporter#options}
         */
        nyanReporter?: NyanCatOptions;
    }

    interface NyanCatOptions {
        /**
         * suppress the error report at the end of the test run
         * @default false
         */
        suppressErrorReport?: boolean;
        /**
         * Suppress the red background on errors in the error
         * report at the end of the test run.
         * @default false
         */
        suppressErrorHighlighting?: boolean;
        /**
         * increase the number of rainbow lines displayed
         * enforced min = 4, enforced max = terminal height - 1
         * @default 4
         */
        numberOfRainbowLines?: number;
        /**
         * Only render the graphic after all tests have finished.
         * This is ideal for using this reporter in a continuous integration environment
         * @default false
         */
        renderOnRunCompleteOnly?: boolean;
    }
}

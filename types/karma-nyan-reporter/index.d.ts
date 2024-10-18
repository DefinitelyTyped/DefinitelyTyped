import "karma";

declare module "karma" {
    interface ConfigOptions {
        /**
         * If you want to suppress the stack trace at the end of the test run you can use the suppressErrorReport option.
         * {@link https://github.com/dgarlitt/karma-nyan-reporter#options}
         */
        nyanReporter?: NyanCatOptions | undefined;
    }

    interface NyanCatOptions {
        /**
         * suppress the error report at the end of the test run
         * @default false
         */
        suppressErrorReport?: boolean | undefined;
        /**
         * Suppress the red background on errors in the error
         * report at the end of the test run.
         * @default false
         */
        suppressErrorHighlighting?: boolean | undefined;
        /**
         * increase the number of rainbow lines displayed
         * enforced min = 4, enforced max = terminal height - 1
         * @default 4
         */
        numberOfRainbowLines?: number | undefined;
        /**
         * Only render the graphic after all tests have finished.
         * This is ideal for using this reporter in a continuous integration environment
         * @default false
         */
        renderOnRunCompleteOnly?: boolean | undefined;
    }
}

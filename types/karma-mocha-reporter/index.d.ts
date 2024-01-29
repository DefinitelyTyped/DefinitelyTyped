import "karma";

declare module "karma" {
    interface ConfigOptions {
        /**
         * {@link https://github.com/litixsoft/karma-mocha-reporter#options}
         */
        mochaReporter?: MochaReporterOptions | undefined;
    }

    type ReporterColor = "success" | "info" | "warning" | "error";

    type ColorOptions = {
        [K in ReporterColor]?: string;
    };

    type SymbolOptions = {
        [K in ReporterColor]?: string;
    };

    type OutputOptions =
        // all output is printed to the console
        | "full"
        // first run will have the full output and the next runs just output the summary and errors in mocha style
        | "autowatch"
        // only the summary and errors are printed to the console in mocha style
        | "minimal"
        // the failure details are not logged
        | "noFailures";

    type ShowDiffOptions =
        // prints each diff in its own line, same as 'unified'
        | true
        // prints each diff in its own line
        | "unified"
        // /prints diffs inline
        | "inline";

    /**
     * Reporter options
     */
    interface MochaReporterOptions {
        /**
         * Lets you overwrite the default colors.
         * Possible values are all colors and background colors from chalk.
         */
        colors?: ColorOptions | undefined;
        /** The string to output between multiple test runs. Set to false or empty string to disable */
        divider?: string | false | undefined;
        /**
         * When setting the ignoreSkipped flag to true, the reporter will ignore the skipped tests in the output
         * and you will see only the tests that where really executed.
         * The summary will still contain the number of skipped tests.
         */
        ignoreSkipped?: boolean | undefined;
        /**
         * Lets you set the maximum number of lines which are printed for a failure.
         * The default value is 999. Helps to cut long stack traces. Set the value to -1 to disable stack traces.
         */
        maxLogLines?: number | undefined;
        /**
         * output type printed to the console
         */
        output?: OutputOptions | undefined;
        /**
         * Prints the result of an it block after it is run in one browser.
         * This options is useful when you have tests which are conditionally run in one browser only.
         * Otherwise the result of the it block would not be printed because it was not run in all browsers.
         */
        printFirstSuccess?: boolean | undefined;
        /**
         * Shows a diff output. Is disabled by default.
         * All credits to the contributors of mocha, since the diff logic is used from there and customized for this modul
         */
        showDiff?: ShowDiffOptions | undefined;
        /**
         * Lets you overwrite the default symbols.
         */
        symbols?: SymbolOptions | undefined;
    }
}

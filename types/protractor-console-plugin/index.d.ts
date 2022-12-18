// Type definitions for protractor-console-plugin 0.1
// Project: https://github.com/angular/protractor-console-plugin
// Definitions by: Adam Kwiatek <https://github.com/akwiatek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as webdriver from 'selenium-webdriver';

declare namespace consolePlugin {
    interface ConsolePlugin {
        /**
         * Gets the browser log.
         */
        getBrowserLog(): webdriver.promise.Promise<webdriver.logging.Entry[]>;

        /**
         * Logs messages to the test output.
         */
        logMessages(
            warnings: webdriver.logging.Entry[],
            errors: webdriver.logging.Entry[],
            failOnWarning: boolean,
            failOnError: boolean,
            context: Context,
        ): void;

        /**
         * Determines if a log message is filtered out or not. This can be set at the
         * config stage using the exclude parameter.  The parameter accepts both strings
         * and regex.
         */
        includeLog(logMessage: string): boolean;

        /**
         * Parses the log and decides whether to throw an error or not.
         */
        parseLog(context: Context): webdriver.promise.Promise<void>;

        /**
         * Gather the console logs and output them as test results.  See the
         * documentation of the teardown function in the protractor plugin API.
         */
        teardown(): webdriver.promise.Promise<void>;
    }

    interface Context {
        config: Config;
    }

    interface Config {
        failOnWarning?: boolean;
        failOnError?: boolean;
        logWarnings?: boolean;
        exclude?: Array<string | RegExp>;
    }
}

declare const consolePlugin: consolePlugin.ConsolePlugin;

export = consolePlugin;

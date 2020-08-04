// Type definitions for karma-notify-reporter 1.2
// Project: https://github.com/jdcataldo/karma-notify-reporter#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * Report test results using OSX Notification Center, Growl or notify-send.
         * {@link https://github.com/jdcataldo/karma-notify-reporter#karma-notify-reporter}
         */
        notifyReporter?: NotifyReporterOptions;
    }

    interface NotifyReporterOptions {
        /**
         * Will notify on every failed spec
         * @default false
         */
        reportEachFailure?: boolean;
        /**
         * Will notify when a suite was successful
         * @default true
         */
        reportSuccess?: boolean;
        /**
         * Will notify when a suite was back to successful
         * @default true
         */
        reportBackToSuccess?: boolean;
    }
}

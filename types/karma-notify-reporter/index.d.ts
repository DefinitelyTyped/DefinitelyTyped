import "karma";

declare module "karma" {
    interface ConfigOptions {
        /**
         * Report test results using OSX Notification Center, Growl or notify-send.
         * {@link https://github.com/jdcataldo/karma-notify-reporter#karma-notify-reporter}
         */
        notifyReporter?: NotifyReporterOptions | undefined;
    }

    interface NotifyReporterOptions {
        /**
         * Will notify on every failed spec
         * @default false
         */
        reportEachFailure?: boolean | undefined;
        /**
         * Will notify when a suite was successful
         * @default true
         */
        reportSuccess?: boolean | undefined;
        /**
         * Will notify when a suite was back to successful
         * @default true
         */
        reportBackToSuccess?: boolean | undefined;
    }
}

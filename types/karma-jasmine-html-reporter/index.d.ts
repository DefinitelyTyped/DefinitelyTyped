import "karma";

declare module "karma" {
    interface ConfigOptions {
        /**
         * In combination with multiple reporters you may want to disable failed messages
         * because it's already handled by another reporter
         * See {@link https://github.com/dfederm/karma-jasmine-html-reporter#with-options}
         */
        jasmineHtmlReporter?: JasmineHtmlReporterOptions | undefined;
    }
    interface JasmineHtmlReporterOptions {
        /**
         * Suppress all messages (overrides other suppress settings)
         */
        suppressAll?: boolean | undefined;
        /** Suppress failed messages */
        suppressFailed?: boolean | undefined;
    }
}

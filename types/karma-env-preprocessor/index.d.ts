import "karma";

declare module "karma" {
    interface ConfigOptions {
        /**
         * environment variables available to your tests
         * {@link https://github.com/jsok/karma-env-preprocessor#configuration}
         */
        envPreprocessor?: string[] | undefined;
    }
}

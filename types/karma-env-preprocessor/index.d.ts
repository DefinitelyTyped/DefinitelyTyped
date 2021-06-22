// Type definitions for karma-env-preprocessor 0.1
// Project: https://github.com/jsok/karma-env-preprocessor
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2
import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * environment variables available to your tests
         * {@link https://github.com/jsok/karma-env-preprocessor#configuration}
         */
        envPreprocessor?: string[];
    }
}

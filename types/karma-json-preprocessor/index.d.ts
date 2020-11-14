// Type definitions for karma-json-preprocessor 0.3
// Project: https://github.com/mjeanroy/karma-json-preprocessor#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import 'karma';

declare module 'karma' {
    interface ConfigOptions {
        /**
         * see {@link https://github.com/mjeanroy/karma-json-preprocessor#configuration-1}
         */
        jsonPreprocessor?: JsonPreprocessorOptions;
    }

    /**
     * Default global variable name is by default `__json__`,
     * but you can override it with your own name in karma configuration:
     */
    interface JsonPreprocessorOptions {
        /**
         * @default '__json__'
         */
        varName?: string;
        /**
         * @default ''
         */
        stripPrefix?: string;
    }
}

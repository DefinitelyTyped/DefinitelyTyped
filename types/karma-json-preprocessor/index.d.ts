import "karma";

declare module "karma" {
    interface ConfigOptions {
        /**
         * see {@link https://github.com/mjeanroy/karma-json-preprocessor#configuration-1}
         */
        jsonPreprocessor?: JsonPreprocessorOptions | undefined;
    }

    /**
     * Default global variable name is by default `__json__`,
     * but you can override it with your own name in karma configuration:
     */
    interface JsonPreprocessorOptions {
        /**
         * @default '__json__'
         */
        varName?: string | undefined;
        /**
         * @default ''
         */
        stripPrefix?: string | undefined;
    }
}

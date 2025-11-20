import "karma";

declare module "karma" {
    interface ConfigOptions {
        /**
         * see {@link https://github.com/karma-runner/karma-html2js-preprocessor#configuration}
         */
        html2JsPreprocessor?: HTML2JSPreprocessorOptions | undefined;
    }

    interface HTML2JSPreprocessorOptions {

        /**
         * Strip this from the file path
         *
         * @default ''
         */
        stripPrefix?: string | undefined;

        /**
         * Prepend this to the file path
         *
         * @default ''
         */
        prependPrefix?: string | undefined;

        /**
         * Define a custom transform function
         */
        processPath?: (filePath: string) => string;
    }
}

declare global {
    /**
     * Collection of HTML files converted into JS strings by karma-html2js-preprocessor.
     */
    var __html__: Record<string, string>;
}

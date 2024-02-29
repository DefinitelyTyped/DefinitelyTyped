import "karma";

declare module "karma" {
    interface ConfigOptions {
        /**
         * see {@link https://www.npmjs.com/package/karma-json-to-file-reporter#config}
         */
        jsonToFileReporter?: JsonToFileReporterOptions | undefined;
    }

    /**
     * JSON messages logged via console.log(_) will be filtered
     * and saved to local json file you specified in config.
     */
    interface JsonToFileReporterOptions {
        /** Path for your json output file. By default it will save your files in the root of your project. */
        outputPath?: string | undefined;
        /**
         * File name pattern. You can use wildcards:
         * `*timestamp*` - for current karma run timestamp.
         * `*index*` - for log entry index: 1, 2, 3, etc.
         * @default 'logFile_start-timestamp.json'
         */
        fileName?: string | undefined;
        /**
         * Set it true to overwrite files if it already exists. If false, log entries will be added to the end
         */
        overwrite?: boolean | undefined;
        /**
         * Filter for json objects. This option can be:
         * - string - filter JSONs by field on the root level
         * - predicate function
         */
        filter?: string | ((obj: object) => boolean) | undefined;
    }
}

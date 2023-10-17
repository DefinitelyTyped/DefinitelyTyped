declare module "uglifycss" {
    namespace UglifyCSS {
        interface UglifyCSSOptions {
            /**
             * Adds a newline (approx.) every n characters; 0 means no newline and is the default value
             */
            maxLineLen?: number | undefined;

            /**
             * eEpands variables; by default, @variables blocks are preserved and var(x)s are not expanded
             */
            expandVars?: boolean | undefined;

            /**
             * Removes newlines within preserved comments; by default, newlines are preserved
             */
            uglyComments?: boolean | undefined;

            /**
             * Preserves newlines within and around preserved comments
             */
            cuteComments?: boolean | undefined;
        }

        /**
         * Uglify a string
         */
        function processString(content: string, options?: UglifyCSSOptions): string;

        /**
         * Uglify one or more files
         */
        function processFiles(filenames: Array<string>, options?: UglifyCSSOptions): string;
    }

    export = UglifyCSS;
}

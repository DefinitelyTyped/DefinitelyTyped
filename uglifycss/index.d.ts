// Type definitions for UglifyCSS v0.0.20
// Project: https://github.com/fmarcia/UglifyCSS
// Definitions by: gevik Babakhani <https://github.com/blendsdk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "uglifycss" {

    namespace UglifyCSS {

        interface UglifyCSSOptions {

            /**
             * Adds a newline (approx.) every n characters; 0 means no newline and is the default value
             */
            maxLineLen?: number

            /**
             * eEpands variables; by default, @variables blocks are preserved and var(x)s are not expanded
             */
            expandVars?: boolean

            /**
             * Removes newlines within preserved comments; by default, newlines are preserved
             */
            uglyComments?: boolean

            /**
             * Preserves newlines within and around preserved comments
             */
            cuteComments?: boolean
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
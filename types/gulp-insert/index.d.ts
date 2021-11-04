// Type definitions for gulp-insert 0.5.0
// Project: https://github.com/rschmukler/gulp-insert
// Definitions by: Shant Marouti <https://github.com/shantmarouti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
/// <reference types="vinyl"/>

declare module 'gulp-insert' {

    import File = require('vinyl');

    interface Transformer {
        (contents: string, file: File): string
    }

    namespace Insert {

        /**
         * Prepends a string onto the contents
         * @param {string} content
         * @returns {NodeJS.ReadWriteStream}
         */
        function prepend(content: string): NodeJS.ReadWriteStream;

        /**
         * Appends a string onto the contents
         * @param {string} content
         * @returns {NodeJS.ReadWriteStream}
         */
        function append(content: string): NodeJS.ReadWriteStream;

        /**
         * Wraps the contents with two strings
         * @param {string} prepend
         * @param {string} append
         * @returns {NodeJS.ReadWriteStream}
         */
        function wrap(prepend: string, append: string): NodeJS.ReadWriteStream;

        /**
         * Calls a function with the contents of the file
         * @param {Transformer} transformer
         * @returns {NodeJS.ReadWriteStream}
         */
        function transform(transformer: Transformer): NodeJS.ReadWriteStream;

    }

    module Insert { }
    export = Insert;
}

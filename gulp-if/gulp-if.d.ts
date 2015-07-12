// Type definitions for gulp-if
// Project: https://github.com/robrich/gulp-if
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-if" {
    import fs = require("fs");

    function gulpIf(
        /**
         * Type: boolean or stat object or function that takes in a vinyl file and returns a boolean or RegularExpression that works on the file.path
         *
         * The condition parameter is any of the conditions supported by gulp-match. The file.path is passed into gulp-match.
         *
         * If a function is given, then the function is passed a vinyl file. The function should return a boolean.
         */
        condition: boolean | fs.Stats | ((vinylFile: any) => boolean) | string,

        /**
         * Stream for gulp-if to pipe data into when conditon is truthy.
         */
        stream: NodeJS.ReadWriteStream,

        /**
         * Optional, Stream for gulp-if to pipe data into when condition is falsey.
         */
        elseStream?: NodeJS.ReadWriteStream
    ): NodeJS.ReadWriteStream;

    export = gulpIf;
}

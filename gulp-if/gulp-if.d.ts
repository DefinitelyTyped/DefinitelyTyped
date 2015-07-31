// Type definitions for gulp-if
// Project: https://github.com/robrich/gulp-if
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-if" {
    function gulpIf(
        condition: boolean,
        stream: NodeJS.ReadWriteStream,
        elseStream?: NodeJS.ReadWriteStream): NodeJS.ReadWriteStream;
    export = gulpIf;
}
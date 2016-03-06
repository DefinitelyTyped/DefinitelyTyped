// Type definitions for gulp-debug v2.0.1
// Project: https://github.com/sindresorhus/gulp-debug
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'gulp-debug' {
    interface IOptions {
        title?: string;
        minimal?: boolean;
    }

    function debug(options?: IOptions): NodeJS.ReadWriteStream;

    namespace debug {}

    export = debug;
}

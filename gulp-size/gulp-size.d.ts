// Type definitions for gulp-size v1.2.3
// Project: https://github.com/sindresorhus/gulp-size
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'gulp-size' {
    interface IOptions {
        showFiles?: boolean;
        gzip?: boolean;
        title?: string;
    }

    interface ISizeStream extends NodeJS.ReadWriteStream {
      size: number;
      prettySize: string;
    }

    function size(options?: IOptions): ISizeStream;

    export = size;
}

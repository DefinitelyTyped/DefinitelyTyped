// Type definitions for gulp-size v1.2.3
// Project: https://github.com/sindresorhus/gulp-size
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'gulp-size' {
    namespace size {
        interface Options {
            showFiles?: boolean;
            gzip?: boolean;
            title?: string;
        }

        interface SizeStream extends NodeJS.ReadWriteStream {
            size: number;
            prettySize: string;
        }
    }

    function size(options?: size.Options): size.SizeStream;

    export = size;
}

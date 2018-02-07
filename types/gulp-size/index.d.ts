// Type definitions for gulp-size 2.1
// Project: https://github.com/sindresorhus/gulp-size
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Remisery <https://github.com/remisery>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace size {
    interface Options {
        showFiles?: boolean;
        gzip?: boolean;
        title?: string;
        pretty?: boolean;
        showTotal?: boolean;
    }

    interface SizeStream extends NodeJS.ReadWriteStream {
        size: number;
        prettySize: string;
    }
}

declare function size(options?: size.Options): size.SizeStream;

export = size;

// Type definitions for gulp-strip-comments 2.5
// Project: https://github.com/RnbWd/gulp-strip-comments
// Definitions by: Aqours <https://github.com/Aqours>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace stripComments {
    interface StripOptions {
        safe?: boolean;
        ignore?: RegExp | RegExp[];
        space?: boolean;
        trim?: boolean;
    }

    interface Strip {
        (options?: StripOptions): NodeJS.ReadWriteStream;
        text(options?: StripOptions): NodeJS.ReadWriteStream;
        html(options?: StripOptions): NodeJS.ReadWriteStream;
        getEOL(): string;
    }
}

declare const strip: stripComments.Strip;

export = strip;

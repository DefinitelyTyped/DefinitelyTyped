/// <reference types="node" />

declare namespace stripComments {
    interface StripOptions {
        safe?: boolean | undefined;
        ignore?: RegExp | RegExp[] | undefined;
        space?: boolean | undefined;
        trim?: boolean | undefined;
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

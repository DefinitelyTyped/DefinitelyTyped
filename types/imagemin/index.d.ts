// Type definitions for imagemin 6.0
// Project: https://github.com/imagemin/imagemin#readme
// Definitions by: Romain Faust <https://github.com/romain-faust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function imagemin(input: ReadonlyArray<string>, outputOrOptions?: string | imagemin.Options, options?: imagemin.Options): Promise<imagemin.Result[]>;

declare namespace imagemin {
    function buffer(buffer: Buffer, options?: Options): Promise<Buffer>;

    type Plugin = (input: Buffer) => Promise<Buffer>;

    interface Options {
        plugins: ReadonlyArray<Plugin>;
    }

    interface Result {
        data: Buffer;
        path: string;
    }
}

export = imagemin;

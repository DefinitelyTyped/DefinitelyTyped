// Type definitions for mime
// Project: https://github.com/broofa/node-mime
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/mime.d.ts


export declare function lookup(path: string): string;
export declare function extension(mime: string): string;
export declare function load(filepath: string): void;
export declare function define(mimes: Object): void;

interface Charsets {
    lookup(mime: string): string;
}

export declare var charsets: Charsets;
export declare var default_type: string;

// Type definitions for mime
// Project: https://github.com/broofa/node-mime
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/mime.d.ts


declare export function lookup(path: string): string;
declare export function extension(mime: string): string;
declare export function load(filepath: string): void;
declare export function define(mimes: Object): void;

interface Charsets {
    lookup(mime: string): string;
}

declare export var charsets: Charsets;
declare export var default_type: string;

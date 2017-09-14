// Type definitions for mime 2.0
// Project: https://github.com/broofa/node-mime
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/mime.d.ts

export as namespace mime;

export function getType(path: string): string;
export function getExtension(mime: string): string;
export function define(mimes: { [key: string]: string[] }, force?: boolean): void;

export interface Charsets {
    getType(path: string): string;
    getExtension(mime: string): string;
    define(mimes: { [key: string]: string[] }, force?: boolean): void;
}

export const charsets: Charsets;
export const default_type: string;

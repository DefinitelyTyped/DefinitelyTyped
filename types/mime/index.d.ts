// Type definitions for mime 1.3
// Project: https://github.com/broofa/node-mime
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/mime.d.ts

export as namespace mime;

export function lookup(path: string, fallback?: string): string;
export function extension(mime: string): string;
export function load(filepath: string): void;
export function define(mimes: { [key: string]: any }): void;

export interface Charsets {
    lookup(mime: string): string;
}

export const charsets: Charsets;
export const default_type: string;

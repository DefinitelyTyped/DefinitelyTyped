// Type definitions for mime 2.1
// Project: https://github.com/broofa/node-mime
// Definitions by: Jeff Goddard <https://github.com/jedigo>, Peter Keuter <https://github.com/pkeuter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/mime.d.ts

export as namespace mime;

export function getType(path: string, fallback?: string): string;
export function getExtension(mime: string): string;
export function define(mimes: { [key: string]: any }): void;

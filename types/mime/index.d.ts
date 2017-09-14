// Type definitions for mime 2.0
// Project: https://github.com/broofa/node-mime
// Definitions by: Jeff Goddard <https://github.com/jedigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/mime.d.ts

export as namespace mime;

export interface TypeMap { [key: string]: string[]; }

export function getType(path: string): string | null;
export function getExtension(mime: string): string | null;
export function define(mimes: TypeMap, force?: boolean): void;

export const default_type: string;

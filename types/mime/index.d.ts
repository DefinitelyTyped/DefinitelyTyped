// Type definitions for mime 3.0
// Project: https://github.com/broofa/node-mime
// Definitions by: Jeff Goddard <https://github.com/jedigo>
//                 Daniel Hritzkiv <https://github.com/dhritzkiv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Originally imported from: https://github.com/soywiz/typescript-node-definitions/mime.d.ts

export as namespace mime;

export interface TypeMap { [key: string]: string[]; }

export function getType(path: string): string | null;
export function getExtension(mime: string): string | null;
export function define(mimes: TypeMap, force?: boolean): void;

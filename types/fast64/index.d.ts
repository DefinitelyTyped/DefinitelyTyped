// Type definitions for fast64 0.5
// Project: https://github.com/superhuman/fast64, https://github.com/conradirwin/fast64
// Definitions by: Rares Matei <https://github.com/rarmatei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    uint8Array: boolean;
}

export function encode(value: string): string;
export function decode(base64: string): string;
export function decode(base64: string, options: Options): Uint8Array;
export function urlencode(value: string): string;
export function urldecode(base64: string): string;
export function urldecode(base64: string, options: Options): Uint8Array;

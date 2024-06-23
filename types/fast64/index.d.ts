export interface Options {
    uint8Array: boolean;
}

export function encode(value: string): string;
export function decode(base64: string): string;
export function decode(base64: string, options: Options): Uint8Array;
export function urlencode(value: string): string;
export function urldecode(base64: string): string;
export function urldecode(base64: string, options: Options): Uint8Array;

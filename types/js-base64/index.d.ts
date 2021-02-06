// Type definitions for js-base64 3.0
// Project: https://github.com/dankogai/js-base64
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>
//                 Tommy Lent <https://github.com/tlent>
//                 JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Base64 {
    VERSION: string;
    encode(s: string, uriSafe?: boolean): string;
    encodeURI(s: string): string;
    encodeURL: Base64['encodeURI'];
    decode(base64: string): string;
    atob(base64: string): string;
    btoa(s: string): string;
    fromBase64(base64: string): string;
    toBase64(s: string, uriSafe?: boolean): string;
    btou(s: string): string;
    utob(s: string): string;
    fromUint8Array(uint8Array: Uint8Array, uriSafe?: boolean): string;
    toUint8Array(s: string): Uint8Array;
    extendString(): void;
    extendUint8Array(): void;
    extendBuiltins(): void;
}

export const Base64: Base64;

export const VERSION: string;

export const encode: Base64['encode'];

export const encodeURI: Base64['encodeURI'];

export const encodeURL: Base64['encodeURL'];

export const decode: Base64['decode'];

export const atob: Base64['atob'];

export const btoa: Base64['btoa'];

export const fromBase64: Base64['fromBase64'];

export const toBase64: Base64['toBase64'];

export const btou: Base64['btou'];

export const utob: Base64['utob'];

export const fromUint8Array: Base64['fromUint8Array'];

export const toUint8Array: Base64['toUint8Array'];

export const extendString: Base64['extendString'];

export const extendUint8Array: Base64['extendUint8Array'];

export const extendBuiltins: Base64['extendBuiltins'];

/**
 * only for global usage, not available in esm actually
 */
export function noConflict(): Base64;

export as namespace Base64;

declare global {
    interface String {
        fromBase64(): string;
        toBase64(uriSafe?: boolean): string;
        toBase64URI(): string;
        toBase64URL(): string;
        toUint8Array(): Uint8Array;
    }

    interface Uint8Array {
        toBase64(uriSafe?: boolean): string;
        toBase64URI(): string;
        toBase64URL(): string;
    }
}

export type Binary = ArrayBuffer | Uint8Array | DataView;
export interface DecodeOptions {
    stream?: boolean;
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encode
 */
export function encode(text: string): Uint8Array;

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode
 */
export function decode(binary?: Binary, options?: DecodeOptions): string;

export class TextDecoder {
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode
     */
    decode(binary?: Binary, options?: DecodeOptions): string;
}

export interface EncodingProgress {
    // The number of UTF-16 units of code from the source that has been converted over to UTF-8. This may be less than
    // text.length if Uint8Array did not have enough space.
    read: number;

    // The number of bytes modified in the destination Uint8Array. The bytes written are guaranteed to form complete
    // UTF-8 byte sequences.
    written: number;
}

export class TextEncoder {
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encode
     */
    encode(text: string): Uint8Array;

    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encodeInto
     */
    encodeInfo(text: string, array: Uint8Array): EncodingProgress;
}

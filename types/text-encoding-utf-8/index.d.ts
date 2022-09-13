// Type definitions for text-encoding-utf-8 1.0
// Project: https://github.com/arv/text-encoding-utf-8
// Definitions by: Paul Taylor <https://github.com/trxcllnt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace TextEncoding {
    interface TextDecoderOptions {
        fatal?: boolean | undefined;
        ignoreBOM?: boolean | undefined;
    }

    interface TextDecodeOptions {
        stream?: boolean | undefined;
    }

    interface TextEncoderOptions {
        NONSTANDARD_allowLegacyEncoding?: boolean | undefined;
    }

    interface TextDecoder {
        encoding: string;
        fatal: boolean;
        ignoreBOM: boolean;
        decode(input?: ArrayBuffer | ArrayBufferView, options?: TextDecodeOptions): string;
    }

    interface TextEncoder {
        encoding: string;
        encode(input?: string, options?: TextEncodeOptions): Uint8Array;
    }

    interface TextEncodeOptions {
        stream?: boolean | undefined;
    }

    interface TextEncoderStatic {
        (utfLabel?: string, options?: TextEncoderOptions): TextEncoder;
        new (utfLabel?: string, options?: TextEncoderOptions): TextEncoder;
    }

    interface TextDecoderStatic {
        (label?: string, options?: TextDecoderOptions): TextDecoder;
        new (label?: string, options?: TextDecoderOptions): TextDecoder;
    }

    interface TextEncodingStatic {
        TextEncoder: TextEncoderStatic;
        TextDecoder: TextDecoderStatic;
    }
}

export const TextDecoder: TextEncoding.TextDecoderStatic;

export const TextEncoder: TextEncoding.TextEncoderStatic;

export const TextEncoding: TextEncoding.TextEncodingStatic;

export as namespace TextEncoding;

// Type definitions for text-encoding-utf-8 1.0
// Project: https://github.com/arv/text-encoding-utf-8
// Definitions by: Paul Taylor <https://github.com/trxcllnt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace TextEncoding {
    interface TextDecoderOptions {
        fatal?: boolean;
        ignoreBOM?: boolean;
    }

    interface TextDecodeOptions {
        stream?: boolean;
    }

    interface TextEncoderOptions {
        NONSTANDARD_allowLegacyEncoding?: boolean;
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
        stream?: boolean;
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

declare var TextDecoder: TextEncoding.TextDecoderStatic;

declare var TextEncoder: TextEncoding.TextEncoderStatic;

declare var TextEncoding: TextEncoding.TextEncodingStatic;

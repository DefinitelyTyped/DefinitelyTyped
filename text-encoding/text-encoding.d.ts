// Type definitions for text-encoding
// Project: https://github.com/inexorabletash/text-encoding
// Definitions by: MIZUNE Pine <https://github.com/pine613/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module TextEncodingStatic {
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
        decode(input?: ArrayBufferView, options?: TextDecodeOptions): string;
    }

    interface TextEncoder {
        encoding: string;
        encode(input?: string, options?: TextEncodeOptions): Uint8Array;
    }

    interface TextEncodeOptions {
        stream?: boolean;
    }
}

declare var TextDecoder: {
    (label?: string, options?: TextEncodingStatic.TextDecoderOptions): TextEncodingStatic.TextDecoder;
    new (label?: string, options?: TextEncodingStatic.TextDecoderOptions): TextEncodingStatic.TextDecoder;
};

declare var TextEncoder: {
    (utfLabel?: string, options?: TextEncodingStatic.TextEncoderOptions): TextEncodingStatic.TextEncoder;
    new (utfLabel?: string, options?: TextEncodingStatic.TextEncoderOptions): TextEncodingStatic.TextEncoder;
};
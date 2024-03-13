declare namespace TextEncoding {
    interface TextEncoderOptions {
        NONSTANDARD_allowLegacyEncoding?: boolean | undefined;
    }
    interface TextEncoderStatic {
        (utfLabel?: string, options?: TextEncoderOptions): TextEncoder;
        new(utfLabel?: string, options?: TextEncoderOptions): TextEncoder;
    }

    export var TextEncoder: {
        new(utfLabel?: string, options?: TextEncoderOptions): TextEncoder;
        (utfLabel?: string, options?: TextEncoderOptions): TextEncoder;
        encoding: string;
    };

    export var TextDecoder: {
        (label?: string, options?: TextDecoderOptions): TextDecoder;
        new(label?: string, options?: TextDecoderOptions): TextDecoder;
        encoding: string;
    };
}

interface TextEncodeOptions {
    stream?: boolean | undefined;
}

interface TextDecoderOptions {
    stream?: boolean | undefined;
}

interface TextEncoder {
    readonly encoding: string;
    encode(input?: string, options?: TextEncodeOptions): Uint8Array;
}

interface TextDecoder {
    readonly encoding: string;
    decode(input?: Uint8Array, options?: TextDecoderOptions): string;
}

declare module "text-encoding" {
    export = TextEncoding;
}

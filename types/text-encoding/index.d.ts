// Type definitions for text-encoding
// Project: https://github.com/inexorabletash/text-encoding
// Definitions by: MIZUNE Pine <https://github.com/pine613>
//                 Mohsen Azimi <https://github.com/mohsen1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare namespace TextEncoding {
    interface TextEncoderOptions {
        NONSTANDARD_allowLegacyEncoding?: boolean;
    }
    interface TextEncoderStatic {
        (utfLabel?: string, options?: TextEncoderOptions): TextEncoder;
        new (utfLabel?: string, options?: TextEncoderOptions): TextEncoder;
    }
    export const TextEncoder: TextEncoder;
    export const TextDecoder: TextDecoder;
}

declare var TextEncoding: TextEncoding.TextEncodingStatic;

declare module "text-encoding" {
    export = TextEncoding;
}

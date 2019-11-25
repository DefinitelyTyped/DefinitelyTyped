// Type definitions for fast-text-encoding 1.0
// Project: https://github.com/samthor/fast-text-encoder#readme
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace fastTextEncoder {
    interface Options {
        stream: boolean;
    }
}

declare class TextEncoder {
    encoding: string;

    constructor(label?: string);

    encode(string: string, options?: fastTextEncoder.Options): Uint8Array;
}

declare class TextDecoder {
    encoding: string;
    fatal: boolean;
    ignoreBOM: boolean;

    constructor(utfLabel?: string, options?: { fatal: boolean });

    decode(buffer: Uint8Array, options?: fastTextEncoder.Options): string;
}

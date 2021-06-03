// Type definitions for ttf2woff 2.0
// Project: https://github.com/fontello/ttf2woff#readme
// Definitions by: Kaspar Vollenweider <https://github.com/casaper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare function ttf2woff(
    ttf: Uint8Array,
    options?: {
        /**
         * Woff Extended Metadata Block
         *
         * See https://www.w3.org/TR/WOFF/#Metadata
         */
        metadata?: string;
    },
): Buffer;

export = ttf2woff;

/// <reference types="node" />

declare function ttf2woff(ttf: Uint8Array, options?: ttf2woff.Options): Buffer;

declare namespace ttf2woff {
    interface Options {
        /**
         * Woff Extended Metadata Block
         *
         * See https://www.w3.org/TR/WOFF/#Metadata
         */
        metadata?: string | undefined;
    }
}

export = ttf2woff;

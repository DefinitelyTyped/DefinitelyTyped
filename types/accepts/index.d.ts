// Type definitions for accepts 1.3
// Project: https://github.com/jshttp/accepts
// Definitions by: Stefan Reichel <https://github.com/bomret>
//                 Brice BERNARD <https://github.com/brikou>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage } from "http";

declare namespace accepts {
    interface Accepts {
        /**
         * Return the first accepted charset. If nothing in `charsets` is accepted, then `false` is returned.
         * If no charsets are supplied, all accepted charsets are returned, in the order of the client's preference
         * (most preferred first).
         */
        charset(): string[];
        charset(charsets: string[]): string | false;
        charset(...charsets: string[]): string | false;

        /**
         * Return the first accepted charset. If nothing in `charsets` is accepted, then `false` is returned.
         * If no charsets are supplied, all accepted charsets are returned, in the order of the client's preference
         * (most preferred first).
         */
        charsets(): string[];
        charsets(charsets: string[]): string | false;
        charsets(...charsets: string[]): string | false;

        /**
         * Return the first accepted encoding. If nothing in `encodings` is accepted, then `false` is returned.
         * If no encodings are supplied, all accepted encodings are returned, in the order of the client's preference
         * (most preferred first).
         */
        encoding(): string[];
        encoding(encodings: string[]): string | false;
        encoding(...encodings: string[]): string | false;

        /**
         * Return the first accepted encoding. If nothing in `encodings` is accepted, then `false` is returned.
         * If no encodings are supplied, all accepted encodings are returned, in the order of the client's preference
         * (most preferred first).
         */
        encodings(): string[];
        encodings(encodings: string[]): string | false;
        encodings(...encodings: string[]): string | false;

        /**
         * Return the first accepted language. If nothing in `languages` is accepted, then `false` is returned.
         * If no languaes are supplied, all accepted languages are returned, in the order of the client's preference
         * (most preferred first).
         */
        language(): string[];
        language(languages: string[]): string | false;
        language(...languages: string[]): string | false;

        /**
         * Return the first accepted language. If nothing in `languages` is accepted, then `false` is returned.
         * If no languaes are supplied, all accepted languages are returned, in the order of the client's preference
         * (most preferred first).
         */
        languages(): string[];
        languages(languages: string[]): string | false;
        languages(...languages: string[]): string | false;

        /**
         * Return the first accepted language. If nothing in `languages` is accepted, then `false` is returned.
         * If no languaes are supplied, all accepted languages are returned, in the order of the client's preference
         * (most preferred first).
         */
        lang(): string[];
        lang(languages: string[]): string | false;
        lang(...languages: string[]): string | false;

        /**
         * Return the first accepted language. If nothing in `languages` is accepted, then `false` is returned.
         * If no languaes are supplied, all accepted languages are returned, in the order of the client's preference
         * (most preferred first).
         */
        langs(): string[];
        langs(languages: string[]): string | false;
        langs(...languages: string[]): string | false;

        /**
         * Return the first accepted type (and it is returned as the same text as what appears in the `types` array). If nothing in `types` is accepted, then `false` is returned.
         * If no types are supplied, return the entire set of acceptable types.
         *
         * The `types` array can contain full MIME types or file extensions. Any value that is not a full MIME types is passed to `require('mime-types').lookup`.
         */
        type(types: string[]): string[] | string | false;
        type(...types: string[]): string[] | string | false;
        types(types: string[]): string[] | string | false;
        types(...types: string[]): string[] | string | false;
    }
}

declare function accepts(req: IncomingMessage): accepts.Accepts;

export = accepts;

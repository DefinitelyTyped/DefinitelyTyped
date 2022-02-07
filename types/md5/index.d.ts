// Type definitions for md5 2.3
// Project: https://github.com/pvorb/node-md5
// Definitions by: Bill Sourour <https://github.com/arcdev1>
//                 Cameron Crothers <https://github.com/jprogrammer>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Ruslan Arkhipau <https://github.com/DethAriel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Calculate the MD5 hash of a message.
 *
 * @param message - Message to hash.
 * @param options - Input and output options.
 * @returns MD5 hash.
 */
declare function md5(message: string | number[] | Uint8Array, options: md5.Options & { asBytes: true }): number[];
declare function md5(message: string | number[] | Uint8Array, options?: Pick<md5.Options, 'asString' | 'encoding'>): string;
declare function md5(message: string | number[] | Uint8Array, options?: md5.Options): string | number[];

declare namespace md5 {
    interface Options {
        asBytes?: boolean | undefined;
        asString?: boolean | undefined;
        encoding?: 'binary' | string | undefined;
    }
}

export = md5;

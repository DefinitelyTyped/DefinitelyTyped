// Type definitions for image-decode 1.2
// Project: https://github.com/dy/image-decode#readme
// Definitions by: Priyanshu Rav <https://github.com/priyanshurav>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface Options {
    /** The MIME type of the data */
    type: string;
}

interface DecodedImage {
    data: Uint8Array;
    width: number;
    height: number;
}

/**
 * @param data The image buffer to decode
 * @param options Options can be an object or it could be a string with the MIME type of the data
 */
declare function decode(
    data: ArrayBuffer | Uint8Array | Buffer | string,
    options?: Options | string,
): DecodedImage | null;

export = decode;

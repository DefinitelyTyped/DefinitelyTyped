/// <reference types="node" />

type MimeType =
    | "image/gif"
    | "image/png"
    | "image/jpeg"
    | "image/jpg"
    | "image/bitmap"
    | "image/bmp"
    | "image/tiff"
    | "image/webp"
    | (string & {});

/** Binary image data or a base64-encoded string. */
type ImageBuffer = ArrayBuffer | Uint8Array | Buffer | File | Blob | string;

interface Options {
    type: MimeType;
}

interface DecodedImage {
    /** Raw pixel data in `[r, g, b, a, r, g, b, a, ...]` layout */
    data: Uint8Array;
    width: number;
    height: number;
}

/**
 * Decodes an image buffer into raw RGBA pixel data.
 *
 * @param buffer The image buffer to decode.
 * @param mimeType MIME type string or {@link Options}. If omitted, inferred from magic bytes.
 * @returns The decoded image, or `null` if the data is empty or the type cannot be detected.
 * @throws {Error} If `mimeType` is omitted and the detected type is not supported.
 */
declare function decode(
    buffer: ImageBuffer,
    mimeType: MimeType,
): DecodedImage | null;
declare function decode(
    buffer: ImageBuffer,
    mimeType: Options,
): DecodedImage | null;
declare function decode(
    buffer: ImageBuffer,
): DecodedImage | null;

export = decode;

export = Base64;
declare function Base64(): void;
declare class Base64 {}
declare namespace Base64 {
    export {
        encode,
        decode,
        STRING_DECODING,
        ARRAY_BUFFER_DECODING,
        STANDARD_ENCODING,
        MIME_ENCODING,
        URL_ENCODING,
        File,
        MemoryStream,
    };
}
declare function encode(
    bin: string | ArrayBuffer | Uint8Array | MemoryStream | File,
    encodeFormat?: number
): string;
declare function decode(str: string | ArrayBuffer, decodeFormat?: number): string | ArrayBuffer;
declare var STRING_DECODING: number;
declare var ARRAY_BUFFER_DECODING: number;
declare var STANDARD_ENCODING: number;
declare var MIME_ENCODING: number;
declare var URL_ENCODING: number;
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');

export = Base85;
declare function Base85(): void;
declare class Base85 {}
declare namespace Base85 {
    export {
        encode,
        decode,
        STRING_DECODING,
        ARRAY_BUFFER_DECODING,
        Z85,
        decodeStream,
        encodeStream,
        File,
        MemoryStream,
    };
}
declare function encode(
    bin: string | MemoryStream | File | ArrayBuffer,
    encoding?: string,
    noPadding?: boolean
): string;
declare function decode(
    str: string,
    encoding?: string,
    decodeFormat?: number
): string | ArrayBuffer;
declare let STRING_DECODING: number;
declare let ARRAY_BUFFER_DECODING: number;
declare let Z85: string;
declare function decodeStream(
    input: File | MemoryStream,
    output: File | MemoryStream,
    encoding?: string
): void;
declare function encodeStream(
    input: File | MemoryStream,
    output: File | MemoryStream,
    encoding?: string
): void;
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');

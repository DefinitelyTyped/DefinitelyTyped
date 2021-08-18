export = Base64;
declare function Base64(): void;
declare class Base64 {}
declare namespace Base64 {
    function encode(bin: any, opt_encodeFmt?: number): string;
    function decode(str: string | ArrayBuffer, opt_decodeFmt?: number): string | ArrayBuffer;
    const STRING_DECODING: number;
    const ARRAY_BUFFER_DECODING: number;
    const STANDARD_ENCODING: number;
    const MIME_ENCODING: number;
    const URL_ENCODING: number;
}

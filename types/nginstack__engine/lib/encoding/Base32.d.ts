export = Base32;
declare function Base32(): void;
declare class Base32 {}
declare namespace Base32 {
    export {
        encode,
        decode,
        encodeStream,
        decodeStream,
        BASE32,
        BASE32_NOPAD,
        BASE32HEX,
        BASE32HEX_NOPAD,
        BASE32_DNSSEC,
        BASE32_DNSCURVE,
        File,
        MemoryStream,
        Base32Variant,
    };
}
declare function encode(bin: string | ArrayBuffer | Uint8Array, variant?: Base32Variant): string;
declare function decode(
    str: string,
    variant?: Base32Variant,
    resultType?: string
): string | Uint8Array | ArrayBuffer;
declare function encodeStream(
    input: File | MemoryStream,
    output: File | MemoryStream,
    variant?: Base32Variant
): void;
declare function decodeStream(
    input: File | MemoryStream,
    output: File | MemoryStream,
    variant?: Base32Variant
): void;
declare let BASE32: string;
declare let BASE32_NOPAD: string;
declare let BASE32HEX: string;
declare let BASE32HEX_NOPAD: string;
declare let BASE32_DNSSEC: string;
declare let BASE32_DNSCURVE: string;
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
type Base32Variant =
    | 'base32'
    | 'base32_nopad'
    | 'base32hex'
    | 'base32hex_nopad'
    | 'base32_dnssec'
    | 'base32_dnscurve';

export = Base32;
declare function Base32(): void;
declare class Base32 {}
declare namespace Base32 {
    function encode(bin: string | ArrayBuffer | Uint8Array, variant?: string): string;
    function decode(
        str: string,
        variant?: string,
        resultType?: string
    ): string | ArrayBuffer | Uint8Array;
    function encodeStream(input: any, output: any, variant?: string): void;
    function decodeStream(input: any, output: any, variant?: string): void;
    const BASE32: string;
    const BASE32_NOPAD: string;
    const BASE32HEX: string;
    const BASE32HEX_NOPAD: string;
    const BASE32_DNSSEC: string;
    const BASE32_DNSCURVE: string;
}

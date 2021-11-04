export = Base85;
declare function Base85(): void;
declare class Base85 {}
declare namespace Base85 {
    function encode(bin: any, opt_encoding?: string, opt_noPadding?: boolean): string;
    function decode(
        str: string,
        opt_encoding?: string,
        opt_decodeFmt?: number
    ): string | ArrayBuffer;
    const STRING_DECODING: number;
    const ARRAY_BUFFER_DECODING: number;
    const Z85: string;
    function decodeStream(input: any, output: any, opt_encoding?: string): void;
    function encodeStream(input: any, output: any, opt_encoding?: string): void;
}

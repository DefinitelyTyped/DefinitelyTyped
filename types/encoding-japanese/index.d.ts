// Type definitions for encoding-japanese v1.0.24
// Project: https://github.com/polygonplanet/encoding.js
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


export type Encoding =
    "UTF32" | "UTF16" | "UTF16BE" |
    "UTF16LE" | "BINARY" | "ASCII" |
    "JIS" | "UTF8" | "EUCJP" |
    "SJIS" | "UNICODE" | "AUTO";
type RawType = string | Uint8Array | number[] | Buffer;

interface ConvertOptions {
    to: Encoding;
    from?: Encoding;
    type?: "string" | "arraybuffer" | "array";
    bom?: boolean | string;
}

export declare function detect(data: RawType, encodings?: Encoding | Encoding[]): Encoding;
export declare function convert(data: RawType, to: Encoding, from?: Encoding): number[];
export declare function convert(data: RawType, options: ConvertOptions): string | ArrayBuffer | number[];
export declare function urlEncode(data: number[] | Uint8Array): string;
export declare function urlDecode(data: string): number[];
export declare function base64Encode(data: number[] | Uint8Array): string;
export declare function base64Decode(data: string): number[];
export declare function codeToString(data: number[] | Uint8Array): string;
export declare function stringToCode(data: string): number[];
export declare function toHankakuCase(data: number[]): number[];
export declare function toHankakuCase(data: string): string;
export declare function toZenkakuCase(data: number[]): number[];
export declare function toZenkakuCase(data: string): string;
export declare function toHiraganaCase(data: number[]): number[];
export declare function toHiraganaCase(data: string): string;
export declare function toKatakanaCase(data: number[]): number[];
export declare function toKatakanaCase(data: string): string;
export declare function toHankanaCase(data: number[]): number[];
export declare function toHankanaCase(data: string): string;
export declare function toZenkanaCase(data: number[]): number[];
export declare function toZenkanaCase(data: string): string;
export declare function toHankakuSpace(data: number[]): number[];
export declare function toHankakuSpace(data: string): string;
export declare function toZenkakuSpace(data: number[]): number[];
export declare function toZenkakuSpace(data: string): string;

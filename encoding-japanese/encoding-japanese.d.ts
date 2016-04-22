// Type definitions for encoding-japanese v1.0.24
// Project: https://github.com/polygonplanet/encoding.js
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />


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

declare export function detect(data: RawType, encodings?: Encoding | Encoding[]): Encoding;
declare export function convert(data: RawType, to: Encoding, from?: Encoding): number[];
declare export function convert(data: RawType, options: ConvertOptions): string | ArrayBuffer | number[];
declare export function urlEncode(data: number[] | Uint8Array): string;
declare export function urlDecode(data: string): number[];
declare export function base64Encode(data: number[] | Uint8Array): string;
declare export function base64Decode(data: string): number[];
declare export function codeToString(data: number[] | Uint8Array): string;
declare export function stringToCode(data: string): number[];
declare export function toHankakuCase(data: number[]): number[];
declare export function toHankakuCase(data: string): string;
declare export function toZenkakuCase(data: number[]): number[];
declare export function toZenkakuCase(data: string): string;
declare export function toHiraganaCase(data: number[]): number[];
declare export function toHiraganaCase(data: string): string;
declare export function toKatakanaCase(data: number[]): number[];
declare export function toKatakanaCase(data: string): string;
declare export function toHankanaCase(data: number[]): number[];
declare export function toHankanaCase(data: string): string;
declare export function toZenkanaCase(data: number[]): number[];
declare export function toZenkanaCase(data: string): string;
declare export function toHankakuSpace(data: number[]): number[];
declare export function toHankakuSpace(data: string): string;
declare export function toZenkakuSpace(data: number[]): number[];
declare export function toZenkakuSpace(data: string): string;

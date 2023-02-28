// Type definitions for encoding-japanese 2.0
// Project: https://github.com/polygonplanet/encoding.js
// Definitions by: rhysd <https://github.com/rhysd>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Encoding;

export type Encoding =
    | 'UTF32'
    | 'UTF16'
    | 'UTF16BE'
    | 'UTF16LE'
    | 'BINARY'
    | 'ASCII'
    | 'JIS'
    | 'UTF8'
    | 'EUCJP'
    | 'SJIS'
    | 'UNICODE'
    | 'AUTO';
type IntArrayType =
    | ReadonlyArray<number>
    | Uint8Array
    | Uint16Array
    | Uint32Array
    | Int8Array
    | Int16Array
    | Int32Array;
type EncodingDetection = Encoding | false;

export type ConvertOptions =
    | ConvertStringOptions
    | ConvertArrayBufferOptions
    | ConvertArrayOptions
    | ConvertUnknownOptions;

export interface ConvertStringOptions {
    to: Encoding;
    from?: Encoding | undefined;
    type: 'string';
    fallback?: 'html-entity' | 'html-entity-hex';
    bom?: boolean | string | undefined;
}

export interface ConvertArrayBufferOptions {
    to: Encoding;
    from?: Encoding | undefined;
    type: 'arraybuffer';
    fallback?: 'html-entity' | 'html-entity-hex';
    bom?: boolean | string | undefined;
}

export interface ConvertArrayOptions {
    to: Encoding;
    from?: Encoding | undefined;
    type: 'array';
    fallback?: 'html-entity' | 'html-entity-hex';
    bom?: boolean | string | undefined;
}

export interface ConvertUnknownOptions {
    to: Encoding;
    from?: Encoding | undefined;
    fallback?: 'html-entity' | 'html-entity-hex';
    bom?: boolean | string | undefined;
}

export function detect(data: IntArrayType | string, encodings?: Encoding | Encoding[]): EncodingDetection;
export function convert(data: IntArrayType, to: Encoding, from?: Encoding): number[];
export function convert(data: string, to: Encoding, from?: Encoding): string;
export function convert(data: IntArrayType | string, options: ConvertStringOptions): string;
export function convert(data: IntArrayType | string, options: ConvertArrayBufferOptions): ArrayBuffer;
export function convert(data: IntArrayType | string, options: ConvertArrayOptions): number[];
export function convert(data: string, options: ConvertUnknownOptions): string;
export function convert(data: IntArrayType, options: ConvertUnknownOptions): number[];
export function urlEncode(data: IntArrayType): string;
export function urlDecode(data: string): number[];
export function base64Encode(data: IntArrayType): string;
export function base64Decode(data: string): number[];
export function codeToString(data: IntArrayType): string;
export function stringToCode(data: string): number[];
export function toHankakuCase(data: ReadonlyArray<number>): number[];
export function toHankakuCase(data: string): string;
export function toZenkakuCase(data: ReadonlyArray<number>): number[];
export function toZenkakuCase(data: string): string;
export function toHiraganaCase(data: ReadonlyArray<number>): number[];
export function toHiraganaCase(data: string): string;
export function toKatakanaCase(data: ReadonlyArray<number>): number[];
export function toKatakanaCase(data: string): string;
export function toHankanaCase(data: ReadonlyArray<number>): number[];
export function toHankanaCase(data: string): string;
export function toZenkanaCase(data: ReadonlyArray<number>): number[];
export function toZenkanaCase(data: string): string;
export function toHankakuSpace(data: ReadonlyArray<number>): number[];
export function toHankakuSpace(data: string): string;
export function toZenkakuSpace(data: ReadonlyArray<number>): number[];
export function toZenkakuSpace(data: string): string;

export const version: string;
export const orders: string[];

export {};

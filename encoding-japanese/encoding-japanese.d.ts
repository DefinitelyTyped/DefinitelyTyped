// Type definitions for encoding-japanese v1.0.24
// Project: https://github.com/polygonplanet/encoding.js
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "encoding-japanese" {
	export type Encoding =
		"UTF32"   | "UTF16"   | "UTF16BE" |
		"UTF16LE" | "BINARY"  | "ASCII"   |
		"JIS"     | "UTF8"    | "EUCJP"   |
		"SJIS"    | "UNICODE" | "AUTO";
	type RawType = string | Uint8Array | number[] | Buffer;

	interface ConvertOptions {
		to: Encoding;
		from?: Encoding;
		type?: "string" | "arraybuffer" | "array";
		bom?: boolean | string;
	}

	export function detect(data: RawType, encodings?: Encoding | Encoding[]): Encoding;
	export function convert(data: RawType, to: Encoding, from?: Encoding): number[];
	export function convert(data: RawType, options: ConvertOptions): string | ArrayBuffer | number[];
	export function urlEncode(data: number[] | Uint8Array): string;
	export function urlDecode(data: string): number[];
	export function base64Encode(data: number[] | Uint8Array): string;
	export function base64Decode(data: string): number[];
	export function codeToString(data: number[] | Uint8Array): string;
	export function stringToCode(data: string): number[];
	export function toHankakuCase(data: number[]): number[];
	export function toHankakuCase(data: string): string;
	export function toZenkakuCase(data: number[]): number[];
	export function toZenkakuCase(data: string): string;
	export function toHiraganaCase(data: number[]): number[];
	export function toHiraganaCase(data: string): string;
	export function toKatakanaCase(data: number[]): number[];
	export function toKatakanaCase(data: string): string;
	export function toHankanaCase(data: number[]): number[];
	export function toHankanaCase(data: string): string;
	export function toZenkanaCase(data: number[]): number[];
	export function toZenkanaCase(data: string): string;
	export function toHankakuSpace(data: number[]): number[];
	export function toHankakuSpace(data: string): string;
	export function toZenkakuSpace(data: number[]): number[];
	export function toZenkakuSpace(data: string): string;
}


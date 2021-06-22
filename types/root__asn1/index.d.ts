// Type definitions for @root/asn1 1.0
// Project: https://git.coolaj86.com/coolaj86/asn1.js
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

export {};

interface Element<V extends string|Uint8Array> {
    type: number;
    lengthSize: number;
    length: number;
    value?: V;
    children?: Array<Element<V>>;
}

export type ElementHex = Element<string>;

export type ElementBuffer = Element<Uint8Array>;

export interface ElementInput {
    type: number;
    value?: string|Uint8Array;
    children?: ElementInput[];
}

export type ArrJson = [string, string | ArrJson[]];

export type ArrBuffer = [number, Uint8Array | ArrBuffer[]];

export type ArrInput = [string|number, string|Uint8Array|ArrInput[]];

export function parseVerbose(buf: Uint8Array, opts?: { json?: false }): ElementBuffer;

export function parseVerbose(buf: Uint8Array, opts: { json: true }): ElementHex;

export function parse(opts: { der: Uint8Array, verbose?: false, json?: true }): ArrJson;

export function parse(opts: { der: Uint8Array, verbose?: false, json: false }): ArrBuffer;

export function parse(opts: { der: Uint8Array, verbose: true, json?: true }): ElementHex;

export function parse(opts: { der: Uint8Array, verbose: true, json: false }): ElementBuffer;

export function pack(asn1: ElementInput|ArrInput, opts?: { json?: false }): Uint8Array;

export function pack(asn1: ElementInput|ArrInput, opts: { json: true }): string;

export function Any(hexType: string|number, ...hexBytes: string[]): string;

export function UInt(hexBigInt: string): string;

export function BitStr(hexBitStream: string): string;

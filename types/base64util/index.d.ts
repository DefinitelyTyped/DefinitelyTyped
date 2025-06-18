/* eslint-disable @typescript-eslint/naming-convention */
export const VERSION: string;

export namespace BASE64 {
    type Prototype = unknown;
}

export function _atob(data: string): string;
export function byteDecode(data: string): string;

export function _btoa(data: string): string;
export function byteEncode(data: string): string;

export function byteUrlDecode(data: string): string;
export function byteUrlEncode(data: string): string;
export function decode(data: string): string;
export function encode(data: string): string;
export function mb2utf8(data: string): string;
export function mbDecode(data: string): string;
export function mbEncode(data: string): string;
export function mbUrlDecode(data: string): string;
export function mbUrlEncode(data: string): string;
export function polyfill(data: string): string;
export function urlDecode(data: string): string;
export function urlEncode(data: string): string;
export function utf82mb(data: string): string;

export function bindProto(proto: BASE64.Prototype): void;

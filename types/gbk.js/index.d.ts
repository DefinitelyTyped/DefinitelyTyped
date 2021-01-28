// Type definitions for gbk.js 0.3
// Project: https://github.com/cnwhy/GBK.js
// Definitions by: mkchung <https://github.com/mkchung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'gbk.js' {
    export function encode(str: string): number[];
    export function decode(bytes: number[]): string;
    export namespace URI {
      export function encodeURI(str: string): number[];
      export function decodeURI(bytes: number[]): string;
      export function encodeURIComponent(str: string): number[];
      export function decodeURIComponent(bytes: number[]): string;
    }
}
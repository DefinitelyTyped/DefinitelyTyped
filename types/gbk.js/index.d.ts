// Type definitions for gbk.js 0.3
// Project: https://github.com/cnwhy/GBK.js
// Definitions by: mkchung <https://github.com/mkchung>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function encode(str: string): number[];
export function decode(bytes: number[]): string;
export namespace URI {
    function encodeURI(str: string): string;
    function decodeURI(str: string): string;
    function encodeURIComponent(str: string): string;
    function decodeURIComponent(str: string): string;
}

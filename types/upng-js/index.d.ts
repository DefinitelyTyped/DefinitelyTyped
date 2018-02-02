// Type definitions for upng-js 2.1
// Project: https://github.com/photopea/UPNG.js
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function decode(buff: ArrayBuffer): PngData;

export function encode(bufs: ArrayBuffer, w: number, h: number, ps: number, dels: any[]): ArrayBuffer;

export function toRGBA8(out: PngData): Uint8Array;

export interface PngData {
    width: number;
    height: number;
    depth: number;
    ctype: any;
    frames: any;
    tabs: any;
    data: ArrayBuffer;
}

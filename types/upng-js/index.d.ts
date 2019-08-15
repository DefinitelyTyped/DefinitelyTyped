// Type definitions for upng-js 2.1
// Project: https://github.com/photopea/UPNG.js
// Definitions by: York Yao <https://github.com/plantain-00>, Sophie Kirschner <https://github.com/pineapplemachine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ImageFrameRect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface ImageFrame {
    rect: ImageFrameRect;
    delay: number;
    dispose: number;
    blend: number;
}

export interface ImageTabACTL {
    num_frames: number;
    num_plays: number;
}

export interface ImageTabText {
    [key: string]: string;
}

export interface ImageTabs {
    acTL?: ImageTabACTL;
    pHYs?: number[];
    cHRM?: number[];
    tEXt?: ImageTabText;
    iTXt?: ImageTabText;
    PLTE?: number[];
    hIST?: number[];
    tRNS?: (number | number[]); // Depends on ctype
    gAMA?: number;
    sRGB?: number;
    bKGD?: (number | number[]); // Depends on ctype
}

export interface Image {
    width: number;
    height: number;
    depth: number;
    ctype: number;
    frames: ImageFrame[];
    tabs: ImageTabs;
    data: ArrayBuffer;
}

export interface QuantizeResult {
    abuf: ArrayBuffer;
    inds: Uint8Array;
    // Type is complicated and I am too lazy to work it out right now, sorry!
    plte: any[];
}

export function encode(
    imgs: ArrayBuffer[],
    w: number,
    h: number,
    cnum: number,
    dels?: number[]
): ArrayBuffer;

export function encodeLL(
    imgs: ArrayBuffer[],
    w: number,
    h: number,
    cc: number,
    ac: number,
    depth: number,
    dels?: number[]
): ArrayBuffer;

export function decode(buffer: ArrayBuffer): Image;

export function toRGBA8(out: Image): ArrayBuffer[];

export function quantize(data: ArrayBuffer, psize: number): QuantizeResult;

// Type definitions for omggif 1.0
// Project: https://github.com/deanm/omggif
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

export interface GifOptions {
    background?: number;
    loop?: number;
    palette?: number[];
}

export interface FrameOptions {
    delay?: number;
    disposal?: number;
    palette?: number[] | null;
    transparent?: number;
}

export interface Frame {
    data_length: number;
    data_offset: number;
    delay: number;
    disposal: number;
    has_local_palette: boolean;
    height: number;
    interlaced: boolean;
    palette_offset: number | null;
    palette_size: number | null;
    transparent_index: number | null;
    width: number;
    x: number;
    y: number;
}

export class GifWriter {
    height: number;
    width: number;

    constructor(buf: Buffer, width: number, height: number, gopts?: GifOptions);

    addFrame(x: number, y: number, w: number, h: number, indexed_pixels: number[], opts?: FrameOptions): number;
    end(): number;
    getOutputBuffer(): Buffer;
    getOutputBufferPosition(): number;
    setOutputBuffer(v: Buffer): void;
    setOutputBufferPosition(v: number): void;
}

export class GifReader {
    height: number;
    width: number;

    constructor(buf: Buffer);

    decodeAndBlitFrameBGRA(frame_num: number, pixels: number[] | Uint8Array | Uint8ClampedArray): void;
    decodeAndBlitFrameRGBA(frame_num: number, pixels: number[] | Uint8Array | Uint8ClampedArray): void;
    frameInfo(frame_num: number): Frame;
    loopCount(): number;
    numFrames(): number;
}

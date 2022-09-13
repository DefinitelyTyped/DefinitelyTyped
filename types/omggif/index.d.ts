// Type definitions for omggif 1.0
// Project: https://github.com/deanm/omggif
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Can be any type that supports the bracket accessor: Array, Uint8Array, Node Buffer, etc.
 */
export interface GifBinary {
    readonly length: number;
    [index: number]: number;
}

export interface GifOptions {
    background?: number | undefined;
    loop?: number | undefined;
    palette?: number[] | undefined;
}

export interface FrameOptions {
    delay?: number | undefined;
    disposal?: number | undefined;
    palette?: number[] | null | undefined;
    transparent?: number | undefined;
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
    /**
     * @param buf - Uint8Array is a common choice.
     * Can be any type that supports the bracket accessor: Array, Uint8Array, Node Buffer, etc.
     */
    constructor(buf: GifBinary, width: number, height: number, gopts?: GifOptions);

    addFrame(x: number, y: number, w: number, h: number, indexed_pixels: number[], opts?: FrameOptions): number;
    end(): number;
    getOutputBuffer(): GifBinary;
    getOutputBufferPosition(): number;
    setOutputBuffer(v: GifBinary): void;
    setOutputBufferPosition(v: number): void;
}

export class GifReader {
    height: number;
    width: number;

    /**
     * @param buf - Uint8Array is a common choice.
     * Can be any type that supports the bracket accessor: Array, Uint8Array, Node Buffer, etc.
     */
    constructor(buf: GifBinary);

    decodeAndBlitFrameBGRA(frame_num: number, pixels: number[] | Uint8Array | Uint8ClampedArray): void;
    decodeAndBlitFrameRGBA(frame_num: number, pixels: number[] | Uint8Array | Uint8ClampedArray): void;
    frameInfo(frame_num: number): Frame;
    loopCount(): number;
    numFrames(): number;
}

// Type definitions for pngjs 3.4
// Project: https://github.com/lukeapage/pngjs
// Definitions by: Jason Cheatham <https://github.com/jason0x43>
//                 Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Duplex } from 'stream';
import { createDeflate } from 'zlib';

export class PNG extends Duplex {
    static adjustGamma(src: PNG): void;

    static bitblt(
        src: PNG,
        dst: PNG,
        srcX?: number,
        srcY?: number,
        width?: number,
        height?: number,
        deltaX?: number,
        deltaY?: number,
    ): void;

    static sync: {
        read(buffer: Buffer, options?: ParserOptions): PNGWithMetadata;
        write(png: PNG, options?: PackerOptions): Buffer;
    };

    constructor(options?: PNGOptions);

    data: Buffer;
    gamma: number;
    height: number;
    width: number;

    adjustGamma(): void;

    bitblt(
        dst: PNG,
        srcX?: number,
        srcY?: number,
        width?: number,
        height?: number,
        deltaX?: number,
        deltaY?: number,
    ): PNG;

    on(event: 'metadata', callback: (metadata: Metadata) => void): this;
    on(event: 'parsed', callback: (data: Buffer) => void): this;
    on(event: 'error', callback: (error: Error) => void): this;
    on(event: 'close', callback: () => void): this;
    on(event: string, callback: (...args: any[]) => void): this;

    pack(): PNG;

    parse(data: string | Buffer, callback?: (error: Error, data: PNG) => void): PNG;
}

export interface BaseOptions {
    fill?: boolean;
    height?: number;
    width?: number;
}

export interface ParserOptions {
    checkCRC?: boolean;
}

export interface PackerOptions {
    bgColor?: {
        red: number;
        green: number;
        blue: number;
    };
    bitDepth?: BitDepth;
    colorType?: ColorType;
    deflateChunkSize?: number;
    deflateFactory?: typeof createDeflate;
    deflateLevel?: number;
    deflateStrategy?: number;
    filterType?: number | number[];
    inputColorType?: ColorType;
    inputHasAlpha?: boolean;
}

export type PNGOptions = BaseOptions & ParserOptions & PackerOptions;

export type PNGWithMetadata = PNG & Metadata;

export type ColorType = 0 | 2 | 4 | 6;

export type BitDepth = 8 | 16;

export interface Metadata {
    alpha: boolean;
    bpp: 1 | 2 | 3 | 4;
    color: boolean;
    colorType: ColorType;
    depth: 1 | 2 | 4 | 8 | 16;
    height: number;
    interlace: boolean;
    palette: boolean;
    width: number;
}

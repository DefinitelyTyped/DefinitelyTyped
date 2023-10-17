/// <reference types="node" />

import { Duplex } from "stream";
import { createDeflate } from "zlib";

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

    on(event: "metadata", callback: (this: PNG, metadata: Metadata) => void): this;
    on(event: "parsed", callback: (this: PNG, data: Buffer) => void): this;
    on(event: "error", callback: (this: PNG, error: Error) => void): this;
    on(event: "close", callback: (this: PNG) => void): this;
    on(event: string, callback: (this: PNG, ...args: any[]) => void): this;

    pack(): PNG;

    parse(data: string | Buffer, callback?: (error: Error, data: PNG) => void): PNG;
}

export interface BaseOptions {
    fill?: boolean | undefined;
    height?: number | undefined;
    width?: number | undefined;
}

export interface ParserOptions {
    checkCRC?: boolean | undefined;
    skipRescale?: boolean | undefined;
}

export interface PackerOptions {
    bgColor?: {
        red: number;
        green: number;
        blue: number;
    } | undefined;
    bitDepth?: BitDepth | undefined;
    colorType?: ColorType | undefined;
    deflateChunkSize?: number | undefined;
    deflateFactory?: typeof createDeflate | undefined;
    deflateLevel?: number | undefined;
    deflateStrategy?: number | undefined;
    filterType?: number | number[] | undefined;
    inputColorType?: ColorType | undefined;
    inputHasAlpha?: boolean | undefined;
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

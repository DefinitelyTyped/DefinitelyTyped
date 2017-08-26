// Type definitions for png-async
// Project: https://github.com/kanreisa/node-png-async
// Definitions by: Yuki KAN <https://github.com/kanreisa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


import stream = require('stream');

export interface IImageOptions {
    width?: number;
    height?: number;
    fill?: boolean;
    checkCRC?: boolean;
    deflateChunkSize?: number;
    deflateLevel?: number;
    deflateStrategy?: EDeflateStrategy;
    filterType?: EFilterType;
}

export declare enum EDeflateStrategy {
    DEFAULT_STRATEGY = 0,
    FILTERED = 1,
    HUFFMAN_ONLY = 2,
    RLE = 3,
    FIXED = 4,
}

export declare enum EFilterType {
    Auto = -1,
    None = 0,
    Sub = 1,
    Up = 2,
    Average = 3,
    Paeth = 4,
}

export declare function createImage(option?: IImageOptions): Image;

export declare class Image extends stream.Duplex {
    width: number;
    height: number;
    gamma: number;
    data: Buffer;
    constructor(option?: IImageOptions);
    pack(): Image;
    parse(data: Buffer, callback?: (err: Error, image: Image) => void): Image;
    write(data: any, cb?: any): boolean;
    end(data?: any): void;
    bitblt(dst: Image, sx: number, sy: number, w: number, h: number, dx: number, dy: number): Image;
}

/// <reference types="node" />

export interface ImageData {
    readonly data: Buffer;
    readonly height: number;
    readonly width: number;
}

export type Encode = (imgData: ImageData, quality?: number) => ImageData;

/**
 * Bmp format decoder, support 1bit 4bit 8bit 24bit bmp
 */
export class BmpDecoder implements ImageData {
    private pos: number;
    data: Buffer;
    fileSize: number;
    reserved: number;
    offset: number;
    headerSize: number;
    width: number;
    height: number;
    planes: number;
    bitPP: number;
    compress: number;
    rawSize: number;
    hr: number;
    vr: number;
    colors: number;
    importantColors: number;
    bottom_up: boolean;

    palette: Array<{
        red: number;
        green: number;
        blue: number;
        quad: number;
    }>;

    constructor(buffer: Buffer, is_with_alpha?: boolean);

    /**
     * Returns the data buffer - byte array order by ABGR ABGR ABGR,4 bytes per pixel
     */
    getData(): Buffer;

    private parseHeader(): void;
    private parseRGBA(): void;
    private bit1(): void;
    private bit4(): void;
    private bit8(): void;
    private bit15(): void;
    private bit16(): void;
    private bit24(): void;
    private bit32(): void;
}

export type Decode = (bmpData: Buffer) => BmpDecoder;

/**
 * var bmp = require("bmp-js");
 * var bmpBuffer = fs.readFileSync('bit24.bmp');
 * var bmpData = bmp.decode(bmpBuffer);
 */
export const decode: Decode;

/**
 * var bmp = require("bmp-js");
 * var rawData = bmp.encode(bmpData); //default no compression,write rawData to .bmp file
 */
export const encode: Encode;

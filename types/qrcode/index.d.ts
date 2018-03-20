// Type definitions for qrcode 0.8.2
// Project: https://github.com/soldair/node-qrcode
// Definitions by: York Yao <https://github.com/plantain-00/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from "stream";

export interface QRCodeOptions {
    /**
     * QR Code version. If not specified the more suitable value will be calculated.
     */
    version?: number;
    /**
     * Error correction level.
     * Possible values are low, medium, quartile, high or L, M, Q, H.
     * Default: M
     */
    errorCorrectionLevel?: "low" | "medium" | "quartile" | "high" | "L" | "M" | "Q" | "H";
    /**
     * Helper function used internally to convert a kanji to its Shift JIS value.
     * Provide this function if you need support for Kanji mode.
     */
    toSJISFunc?: Function;
}

export interface QRCodeToDataURLOptions extends QRCodeRenderersOptions {
    /**
     * Data URI format.
     * Default: image/png
     */
    type?: "image/png" | "image/jpeg" | "image/webp";
    rendererOpts?: {
        /**
         * A Number between 0 and 1 indicating image quality if the requested type is image/jpeg or image/webp.
         * Default: 0.92
         */
        quality?: number;
    };
}

export interface QRCodeToStringOptions extends QRCodeOptions {
    /**
     * Output format.
     * Default: utf8
     */
    type?: "utf8" | "svg" | "terminal";
}

export interface QRCodeToFileOptions extends QRCodeRenderersOptions {
    /**
     * Output format.
     * Default: png
     */
    type?: "png" | "svg" | "utf8";
    rendererOpts?: {
        /**
         * Compression level for deflate.
         * Default: 9
         */
        deflateLevel?: number;
        /**
         * Compression strategy for deflate.
         * Default: 3
         */
        deflateStrategy?: number;
    };
}

export interface QRCodeRenderersOptions extends QRCodeOptions {
    /**
     * Define how much wide the quiet zone should be.
     * Default: 4
     */
    margin?: number;
    /**
     * Scale factor. A value of 1 means 1px per modules (black dots).
     * Default: 4
     */
    scale?: number;
    color?: {
        /**
         * Color of dark module. Value must be in hex format (RGBA).
         * Note: dark color should always be darker than color.light.
         * Default: #000000ff
         */
        dark?: string;
        /**
         * Color of light module. Value must be in hex format (RGBA).
         * Default: #ffffffff
         */
        light?: string;
    };
}

export interface QRCodeSegment {
    data: string;
    mode: 'alphanumeric' | 'numeric';
}

export interface QRCode {
    /**
     * Bitmatrix class with modules data
     */
    modules: any;
    /**
     * Calculated QR Code version
     */
    version: number;
    /**
     * Error Correction Level
     */
    errorCorrectionLevel: number;
    /**
     * Calculated Mask pattern
     */
    maskPattern: any;
    /**
     * Generated segments
     */
    segments: QRCodeSegment[];
}

/**
 * Creates QR Code symbol and returns a qrcode object.
 */
export function create(text: string | QRCodeSegment[], options: QRCodeOptions): QRCode;

/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(canvasElement: HTMLCanvasElement, text: string | QRCodeSegment[]): Promise<any>;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(canvasElement: HTMLCanvasElement, text: string | QRCodeSegment[], callback: (error: Error) => void): void;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(canvasElement: HTMLCanvasElement, text: string | QRCodeSegment[], options: QRCodeOptions): Promise<any>;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(canvasElement: HTMLCanvasElement, text: string | QRCodeSegment[], options: QRCodeOptions, callback: (error: Error) => void): void;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(text: string | QRCodeSegment[]): Promise<any>;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(text: string | QRCodeSegment[], callback: (error: Error, canvas: HTMLCanvasElement) => void): void;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(text: string | QRCodeSegment[], options: QRCodeOptions): Promise<any>;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(text: string | QRCodeSegment[], options: QRCodeOptions, callback: (error: Error, canvas: HTMLCanvasElement) => void): void;
/**
 * Draws qr code symbol to node canvas.
 */
export function toCanvas(canvas: any, text: string | QRCodeSegment[]): Promise<any>;
/**
 * Draws qr code symbol to node canvas.
 */
export function toCanvas(canvas: any, text: string | QRCodeSegment[], callback: (error: Error) => void): void;
/**
 * Draws qr code symbol to node canvas.
 */
export function toCanvas(canvas: any, text: string | QRCodeSegment[], options: QRCodeOptions): Promise<any>;
/**
 * Draws qr code symbol to node canvas.
 */
export function toCanvas(canvas: any, text: string | QRCodeSegment[], options: QRCodeOptions, callback: (error: Error) => void): void;

/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(canvasElement: HTMLCanvasElement, text: string | QRCodeSegment[]): Promise<any>;
/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(canvasElement: HTMLCanvasElement, text: string | QRCodeSegment[], callback: (error: Error, url: string) => void): void;
/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(canvasElement: HTMLCanvasElement, text: string | QRCodeSegment[], options: QRCodeToDataURLOptions): Promise<any>;
/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(canvasElement: HTMLCanvasElement, text: string | QRCodeSegment[], options: QRCodeToDataURLOptions, callback: (error: Error, url: string) => void): void;
/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(text: string | QRCodeSegment[]): Promise<any>;
/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(text: string | QRCodeSegment[], callback: (error: Error, url: string) => void): void;
/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(text: string | QRCodeSegment[], options: QRCodeToDataURLOptions): Promise<any>;
/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(text: string | QRCodeSegment[], options: QRCodeToDataURLOptions, callback: (error: Error, url: string) => void): void;

/**
 * Returns a string representation of the QR Code.
 * If choosen output format is svg it will returns a string containing xml code.
 */
export function toString(text: string | QRCodeSegment[]): Promise<any>;
/**
 * Returns a string representation of the QR Code.
 * If choosen output format is svg it will returns a string containing xml code.
 */
export function toString(text: string | QRCodeSegment[], callback: (error: Error, string: string) => void): void;
/**
 * Returns a string representation of the QR Code.
 * If choosen output format is svg it will returns a string containing xml code.
 */
export function toString(text: string | QRCodeSegment[], options: QRCodeToStringOptions): Promise<any>;
/**
 * Returns a string representation of the QR Code.
 * If choosen output format is svg it will returns a string containing xml code.
 */
export function toString(text: string | QRCodeSegment[], options: QRCodeToStringOptions, callback: (error: Error, string: string) => void): void;

/**
 * Saves QR Code to image file.
 * If options.type is not specified, the format will be guessed from file extension.
 * Recognized extensions are png, svg, txt.
 */
export function toFile(path: string, text: string | QRCodeSegment[]): Promise<any>;
/**
 * Saves QR Code to image file.
 * If options.type is not specified, the format will be guessed from file extension.
 * Recognized extensions are png, svg, txt.
 */
export function toFile(path: string, text: string | QRCodeSegment[], callback: (error: Error) => void): void;
/**
 * Saves QR Code to image file.
 * If options.type is not specified, the format will be guessed from file extension.
 * Recognized extensions are png, svg, txt.
 */
export function toFile(path: string, text: string | QRCodeSegment[], options: QRCodeToFileOptions): Promise<any>;
/**
 * Saves QR Code to image file.
 * If options.type is not specified, the format will be guessed from file extension.
 * Recognized extensions are png, svg, txt.
 */
export function toFile(path: string, text: string | QRCodeSegment[], options: QRCodeToFileOptions, callback: (error: Error) => void): void;

/**
 * Writes QR Code image to stream. Only works with png format for now.
 */
export function toFileStream(stream: stream.Writable, text: string | QRCodeSegment[]): Promise<any>;
/**
 * Writes QR Code image to stream. Only works with png format for now.
 */
export function toFileStream(stream: stream.Writable, text: string | QRCodeSegment[], callback: (error: Error) => void): void;
/**
 * Writes QR Code image to stream. Only works with png format for now.
 */
export function toFileStream(stream: stream.Writable, text: string | QRCodeSegment[], options: QRCodeOptions): Promise<any>;
/**
 * Writes QR Code image to stream. Only works with png format for now.
 */
export function toFileStream(stream: stream.Writable, text: string | QRCodeSegment[], options: QRCodeOptions, callback: (error: Error) => void): void;

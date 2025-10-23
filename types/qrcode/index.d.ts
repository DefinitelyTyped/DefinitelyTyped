/// <reference types="node" />

import * as stream from "stream";

export type QRCodeErrorCorrectionLevel = "low" | "medium" | "quartile" | "high" | "L" | "M" | "Q" | "H";
export type QRCodeMaskPattern = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type QRCodeToSJISFunc = (codePoint: string) => number;

export interface QRCodeOptions {
    /**
     * QR Code version. If not specified the more suitable value will be calculated.
     */
    version?: number | undefined;
    /**
     * Error correction level.
     * @default 'M'
     */
    errorCorrectionLevel?: QRCodeErrorCorrectionLevel | undefined;
    /**
     * Mask pattern used to mask the symbol.
     *
     * If not specified the more suitable value will be calculated.
     */
    maskPattern?: QRCodeMaskPattern | undefined;
    /**
     * Helper function used internally to convert a kanji to its Shift JIS value.
     * Provide this function if you need support for Kanji mode.
     */
    toSJISFunc?: QRCodeToSJISFunc | undefined;
}

export type QRCodeDataURLType = "image/png" | "image/jpeg" | "image/webp";
export type QRCodeToDataURLOptions = QRCodeToDataURLOptionsJpegWebp | QRCodeToDataURLOptionsOther;
export interface QRCodeToDataURLOptionsJpegWebp extends QRCodeRenderersOptions {
    /**
     * Data URI format.
     * @default 'image/png'
     */
    type: "image/jpeg" | "image/webp";
    rendererOpts?:
        | {
            /**
             * A number between `0` and `1` indicating image quality.
             * @default 0.92
             */
            quality?: number | undefined;
        }
        | undefined;
}
export interface QRCodeToDataURLOptionsOther extends QRCodeRenderersOptions {
    /**
     * Data URI format.
     * @default 'image/png'
     */
    type?: Exclude<QRCodeDataURLType, "image/jpeg" | "image/webp"> | undefined;
}

export type QRCodeStringType = "utf8" | "svg" | "terminal";
export type QRCodeToStringOptions = QRCodeToStringOptionsTerminal | QRCodeToStringOptionsOther;
export interface QRCodeToStringOptionsTerminal extends QRCodeRenderersOptions {
    /**
     * Output format.
     * @default 'utf8'
     */
    type: "terminal";
    /**
     * Outputs smaller QR code.
     * @default false
     */
    small?: boolean | undefined;
}
export interface QRCodeToStringOptionsOther extends QRCodeRenderersOptions {
    /**
     * Output format.
     * @default 'utf8'
     */
    type?: Exclude<QRCodeStringType, "terminal"> | undefined;
}

export type QRCodeFileType = "png" | "svg" | "utf8";
export type QRCodeToFileOptions = QRCodeToFileOptionsPng | QRCodeToFileOptionsOther;
export interface QRCodeToFileOptionsPng extends QRCodeRenderersOptions {
    /**
     * Output format.
     * @default 'png'
     */
    type?: "png" | undefined;
    rendererOpts?:
        | {
            /**
             * Compression level for deflate.
             * @default 9
             */
            deflateLevel?: number | undefined;
            /**
             * Compression strategy for deflate.
             * @default 3
             */
            deflateStrategy?: number | undefined;
        }
        | undefined;
}
export interface QRCodeToFileOptionsOther extends QRCodeRenderersOptions {
    /**
     * Output format.
     * @default 'png'
     */
    type: Exclude<QRCodeFileType, "png"> | undefined;
}

export type QRCodeFileStreamType = "png";
export interface QRCodeToFileStreamOptions extends QRCodeRenderersOptions {
    /**
     * Output format. Only png supported for file stream.
     */
    type?: QRCodeFileStreamType | undefined;
    rendererOpts?:
        | {
            /**
             * Compression level for deflate.
             * @default 9
             */
            deflateLevel?: number | undefined;
            /**
             * Compression strategy for deflate.
             * @default 3
             */
            deflateStrategy?: number | undefined;
        }
        | undefined;
}

export type QRCodeBufferType = "png";
export interface QRCodeToBufferOptions extends QRCodeRenderersOptions {
    /**
     * Output format. Only png supported for Buffer.
     */
    type?: QRCodeBufferType | undefined;
    rendererOpts?:
        | {
            /**
             * Compression level for deflate.
             * @default 9
             */
            deflateLevel?: number | undefined;
            /**
             * Compression strategy for deflate.
             * @default 3
             */
            deflateStrategy?: number | undefined;
        }
        | undefined;
}

export interface QRCodeRenderersOptions extends QRCodeOptions {
    /**
     * Define how much wide the quiet zone should be.
     * @default 4
     */
    margin?: number | undefined;
    /**
     * Scale factor. A value of `1` means 1px per modules (black dots).
     * @default 4
     */
    scale?: number | undefined;
    /**
     * Forces a specific width for the output image.
     * If width is too small to contain the qr symbol, this option will be ignored.
     * Takes precedence over `scale`.
     */
    width?: number | undefined;
    color?:
        | {
            /**
             * Color of dark module. Value must be in hex format (RGBA).
             * Note: dark color should always be darker than `color.light`.
             * @default '#000000ff'
             */
            dark?: string | undefined;
            /**
             * Color of light module. Value must be in hex format (RGBA).
             * @default '#ffffffff'
             */
            light?: string | undefined;
        }
        | undefined;
}

export type QRCodeSegmentMode = "alphanumeric" | "numeric" | "byte" | "kanji";
export type QRCodeSegment =
    | QRCodeNumericSegment
    | QRCodeAlphanumericSegment
    | QRCodeByteSegment
    | QRCodeKanjiSegment
    | {
        mode?: never;
        data: string | Buffer | Uint8ClampedArray | Uint8Array;
    };

export interface QRCodeNumericSegment {
    mode: "numeric";
    data: string | number;
}

export interface QRCodeAlphanumericSegment {
    mode: "alphanumeric";
    data: string;
}

export interface QRCodeByteSegment {
    mode: "byte";
    data: Buffer | Uint8ClampedArray | Uint8Array;
}

export interface QRCodeKanjiSegment {
    mode: "kanji";
    data: string;
}

export interface QRCode {
    /**
     * BitMatrix class with modules data
     */
    modules: BitMatrix;
    /**
     * Calculated QR Code version
     */
    version: number;
    /**
     * Error Correction Level
     */
    errorCorrectionLevel: ErrorCorrectionLevel;
    /**
     * Calculated Mask pattern
     */
    maskPattern: QRCodeMaskPattern | undefined;
    /**
     * Generated segments
     */
    segments: GeneratedQRCodeSegment[];
}

/**
 * Helper class to handle QR Code symbol modules.
 */
export interface BitMatrix {
    /**
     * Symbol size.
     */
    size: number;
    data: Uint8Array;
    reservedBit: Uint8Array;
    /**
     * Set bit value at specified location
     * If reserved flag is set, this bit will be ignored during masking process.
     */
    set(row: number, col: number, value: number, reserved: boolean): void;
    /**
     * @return Bit value at specified location.
     */
    get(row: number, col: number): number;
    /**
     * Applies xor operator at specified location (used during masking process).
     */
    xor(row: number, col: number, value: number): void;
    /**
     * Check if bit at specified location is reserved.
     */
    isReserved(row: number, col: number): number;
}

export interface ErrorCorrectionLevel {
    bit: 0 | 1 | 2 | 3;
}

export type ModeId = "Numeric" | "Alphanumeric" | "Byte" | "Kanji";
export interface Mode<TModeId extends ModeId = ModeId> {
    id: TModeId;
    bit: number;
    ccBits: readonly number[];
}

export type GeneratedQRCodeSegment = NumericData | AlphanumericData | ByteData | KanjiData;

export interface DataSegment {
    getLength(): number;
    getBitsLength(): number;
}

export interface NumericData extends DataSegment {
    mode: Mode<"Numeric">;
    data: string;
}

export interface AlphanumericData extends DataSegment {
    mode: Mode<"Alphanumeric">;
    data: string;
}

export interface ByteData extends DataSegment {
    mode: Mode<"Byte">;
    data: Uint8Array;
}

export interface KanjiData extends DataSegment {
    mode: Mode<"Kanji">;
    data: string;
}

/**
 * Creates QR Code symbol and returns a qrcode object.
 * @param text Text to encode or a list of objects describing segments.
 */
export function create(text: string | QRCodeSegment[], options?: QRCodeOptions): QRCode;

/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(
    canvasElement: HTMLCanvasElement,
    text: string | QRCodeSegment[],
    callback: (error: Error | null | undefined) => void,
): void;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(
    canvasElement: HTMLCanvasElement,
    text: string | QRCodeSegment[],
    options?: QRCodeRenderersOptions,
): Promise<void>;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(
    canvasElement: HTMLCanvasElement,
    text: string | QRCodeSegment[],
    options: QRCodeRenderersOptions,
    callback: (error: Error | null | undefined) => void,
): void;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(
    text: string | QRCodeSegment[],
    callback: (error: Error | null | undefined, canvas: HTMLCanvasElement) => void,
): void;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(text: string | QRCodeSegment[], options?: QRCodeRenderersOptions): Promise<HTMLCanvasElement>;
/**
 * Draws qr code symbol to canvas.
 */
export function toCanvas(
    text: string | QRCodeSegment[],
    options: QRCodeRenderersOptions,
    callback: (error: Error | null | undefined, canvas: HTMLCanvasElement) => void,
): void;
/**
 * Draws qr code symbol to node canvas.
 */
export function toCanvas(
    canvas: any,
    text: string | QRCodeSegment[],
    callback: (error: Error | null | undefined) => void,
): void;
/**
 * Draws qr code symbol to node canvas.
 */
export function toCanvas(canvas: any, text: string | QRCodeSegment[], options?: QRCodeRenderersOptions): Promise<void>;
/**
 * Draws qr code symbol to node canvas.
 */
export function toCanvas(
    canvas: any,
    text: string | QRCodeSegment[],
    options: QRCodeRenderersOptions,
    callback: (error: Error | null | undefined) => void,
): void;

/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(
    canvasElement: HTMLCanvasElement,
    text: string | QRCodeSegment[],
    callback: (error: Error | null | undefined, url: string) => void,
): void;
/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(
    canvasElement: HTMLCanvasElement,
    text: string | QRCodeSegment[],
    options?: QRCodeToDataURLOptions,
): Promise<string>;
/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(
    canvasElement: HTMLCanvasElement,
    text: string | QRCodeSegment[],
    options: QRCodeToDataURLOptions,
    callback: (error: Error | null | undefined, url: string) => void,
): void;

/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(
    text: string | QRCodeSegment[],
    callback: (error: Error | null | undefined, url: string) => void,
): void;
/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(text: string | QRCodeSegment[], options?: QRCodeToDataURLOptions): Promise<string>;
/**
 * Returns a Data URI containing a representation of the QR Code image.
 */
export function toDataURL(
    text: string | QRCodeSegment[],
    options: QRCodeToDataURLOptions,
    callback: (error: Error | null | undefined, url: string) => void,
): void;

/**
 * Returns a string representation of the QR Code.
 */
export function toString(
    text: string | QRCodeSegment[],
    callback: (error: Error | null | undefined, string: string) => void,
): void;
/**
 * Returns a string representation of the QR Code.
 */
export function toString(text: string | QRCodeSegment[], options?: QRCodeToStringOptions): Promise<string>;
/**
 * Returns a string representation of the QR Code.
 */
export function toString(
    text: string | QRCodeSegment[],
    options: QRCodeToStringOptions,
    callback: (error: Error | null | undefined, string: string) => void,
): void;

/**
 * Saves QR Code to image file.
 * If `options.type` is not specified, the format will be guessed from file extension.
 */
export function toFile(
    path: string,
    text: string | QRCodeSegment[],
    callback: (error: Error | null | undefined) => void,
): void;
/**
 * Saves QR Code to image file.
 * If `options.type` is not specified, the format will be guessed from file extension.
 */
export function toFile(path: string, text: string | QRCodeSegment[], options?: QRCodeToFileOptions): Promise<void>;
/**
 * Saves QR Code to image file.
 * If `options.type` is not specified, the format will be guessed from file extension.
 */
export function toFile(
    path: string,
    text: string | QRCodeSegment[],
    options: QRCodeToFileOptions,
    callback: (error: Error | null | undefined) => void,
): void;

/**
 * Writes QR Code image to stream. Only works with png format for now.
 */
export function toFileStream(
    stream: stream.Writable,
    text: string | QRCodeSegment[],
    callback: (error: Error | null | undefined) => void,
): void;
/**
 * Writes QR Code image to stream. Only works with png format for now.
 */
export function toFileStream(
    stream: stream.Writable,
    text: string | QRCodeSegment[],
    options?: QRCodeToFileStreamOptions,
): Promise<void>;
/**
 * Writes QR Code image to stream. Only works with png format for now.
 */
export function toFileStream(
    stream: stream.Writable,
    text: string | QRCodeSegment[],
    options: QRCodeToFileStreamOptions,
    callback: (error: Error | null | undefined) => void,
): void;

/**
 * Returns a Buffer containing a representation of the QR Code image. Only works with png format.
 */
export function toBuffer(
    text: string | QRCodeSegment[],
    callback: (error: Error | null | undefined, buffer: Buffer) => void,
): void;
/**
 * Returns a Buffer containing a representation of the QR Code image. Only works with png format.
 */
export function toBuffer(text: string | QRCodeSegment[], options?: QRCodeToBufferOptions): Promise<Buffer>;
/**
 * Returns a Buffer containing a representation of the QR Code image. Only works with png format.
 */
export function toBuffer(
    text: string | QRCodeSegment[],
    options: QRCodeToBufferOptions,
    callback: (error: Error | null | undefined, buffer: Buffer) => void,
): void;

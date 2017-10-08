// Type definitions for blob-util 1.3
// Project: https://github.com/nolanlawson/blob-util#readme
// Definitions by: Max Battcher <https://github.com/WorldMaker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export function createBlob(parts: any[], options?: { type: string }): Blob;
export function createObjectURL(blob: Blob): string;
export function revokeObjectURL(url: string): void;
export function blobToBinaryString(blob: Blob): Promise<string>;
export function binaryStringToBlob(binary: string, type?: string): Promise<Blob>;
export function blobToBase64String(blob: Blob): Promise<string>;
export function base64StringToBlob(base64: string, type?: string): Promise<Blob>;
export function dataURLToBlob(dataURL: string): Promise<Blob>;
export function blobToDataURL(blob: Blob): Promise<string>;

/**
 * Convert an image's src URL to a data URL by loading the image and painting it to a canvas.
 *
 * Note: this will coerce the image to the desired content type, and it will only paint the first frame of an animated GIF.
 *
 * @param src
 * @param type the content type (optional, defaults to 'image/png')
 * @param crossOrigin for CORS-enabled images, set this to 'Anonymous' to avoid "tainted canvas" errors
 * @param quality a number between 0 and 1 indicating image quality if the requested type is 'image/jpeg' or 'image/webp'
 */
export function imgSrcToDataURL(src: string, type?: string, crossOrigin?: string, quality?: number): Promise<string>;

/**
 * Convert a canvas to a Blob.
 *
 * @param src
 * @param type the content type (optional, defaults to 'image/png')
 * @param quality a number between 0 and 1 indicating image quality if the requested type is 'image/jpeg' or 'image/webp'
 */
export function canvasToBlob(canvas: HTMLCanvasElement, type?: string, quality?: number): Promise<Blob>;

/**
 * Convert an image's src URL to a Blob by loading the image and painting it to a canvas.
 *
 * Note: this will coerce the image to the desired content type, and it will only paint the first frame of an animated GIF.
 *
 * @param src
 * @param type the content type (optional, defaults to 'image/png')
 * @param crossOrigin for CORS-enabled images, set this to 'Anonymous' to avoid "tainted canvas" errors
 * @param quality a number between 0 and 1 indicating image quality if the requested type is 'image/jpeg' or 'image/webp'
 */
export function imgSrcToBlob(src: string, type?: string, crossOrigin?: string, quality?: number): Promise<Blob>;

export function arrayBufferToBlob(arrayBuff: ArrayBuffer, type?: string): Promise<Blob>;
export function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer>;

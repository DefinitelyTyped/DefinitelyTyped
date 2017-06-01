// Type definitions for blob-util 1.2
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
export function imgSrcToDataURL(src: string, type?: string, crossOrigin?: string): Promise<string>;
export function canvasToBlob(canvas: HTMLCanvasElement, type?: string): Promise<Blob>;
export function imgSrcToBlob(src: string, type?: string, crossOrigin?: string): Promise<Blob>;
export function arrayBufferToBlob(arrayBuff: ArrayBuffer, type?: string): Promise<Blob>;
export function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer>;

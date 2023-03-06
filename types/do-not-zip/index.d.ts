// Type definitions for do-not-zip 1.0
// Project: https://github.com/Conduitry/do-not-zip
// Definitions by: Alexander Cerutti <https://github.com/alexandercerutti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function toArray(files: File[]): number[];
export function toAuto(files: File[]): Buffer | Blob;
export function toBuffer(files: File[]): Buffer;
export function toBlob(files: File[]): Blob;

export interface File {
    path: string;
    data: any;
}

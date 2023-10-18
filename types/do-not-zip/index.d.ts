/// <reference types="node" />

export function toArray(files: File[]): number[];
export function toAuto(files: File[]): Buffer | Blob;
export function toBuffer(files: File[]): Buffer;
export function toBlob(files: File[]): Blob;

export interface File {
    path: string;
    data: any;
}

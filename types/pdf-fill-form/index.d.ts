// Type definitions for pdf-fill-form 5.0
// Project: https://github.com/tpisto/pdf-fill-form#readme
// Definitions by: Grégoire Lodi <https://github.com/lodi-g>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

export interface WritableFields {
    [key: string]: string;
}

export type ReadableFields = Array<{
    name: string;
    page: number;
    value: string;
    id: number;
    type: string;
}>;

export interface PdfOptions {
    save?: string;
    cores?: number;
    scale?: number;
    antialias?: boolean;
}

export interface ImgPdfOptions extends PdfOptions {
    startPage?: number;
    endPage?: number;
}

export type Options = PdfOptions | ImgPdfOptions;

export type WriteAsyncCallback = (err: Error, result: Buffer) => void;

export function read(sourceFile: string): Promise<ReadableFields>;
export function readSync(sourceFile: string): ReadableFields;
export function readBuffer(sourceBuffer: Buffer): Promise<ReadableFields>;
export function readBufferSync(sourceBuffer: Buffer): ReadableFields;

export function write(sourceFile: string, fields: WritableFields, options?: Options): Promise<Buffer>;
export function writeBuffer(sourceBuffer: Buffer, fields: WritableFields, options?: Options): Promise<Buffer>;
export function writeBufferSync(sourceBuffer: Buffer, fields: WritableFields, options?: Options): Buffer;

// Options are not optional here because the callback MUST be defined to avoid a crash
export function writeAsync(
    sourceFile: string,
    fields: WritableFields,
    options: Options,
    callback: WriteAsyncCallback,
): void;

import type { ReadStreamOptions } from "fs-capacitor";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { Readable } from "node:stream";

export interface ProcessRequestOptions {
    maxFieldSize?: number | undefined;
    maxFileSize?: number | undefined;
    maxFiles?: number | undefined;
}

export default function processRequest(
    request: IncomingMessage,
    response: ServerResponse,
    options?: ProcessRequestOptions,
): Promise<
    | {
        [key: string]: unknown;
    }
    | Array<{
        [key: string]: unknown;
    }>
>;

export interface FileUpload {
    filename: string;
    mimetype: string;
    encoding: string;
    // We omit the capacitor property because it's a private implementation detail that shouldn't be used outside.
    createReadStream: FileUploadCreateReadStream;
}

export type FileUploadCreateReadStream = (
    options?: FileUploadCreateReadStreamOptions | undefined,
) => Readable;

export interface FileUploadCreateReadStreamOptions {
    encoding?: ReadStreamOptions["encoding"];
    highWaterMark?: ReadStreamOptions["highWaterMark"];
}

export type ProcessRequestFunction = (
    request: IncomingMessage,
    response: ServerResponse,
    options?: ProcessRequestOptions | undefined,
) => Promise<
    | {
        [key: string]: unknown;
    }
    | Array<{
        [key: string]: unknown;
    }>
>;

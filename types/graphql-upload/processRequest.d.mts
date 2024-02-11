import { ReadStreamOptions } from "fs-capacitor";
import { GraphQLScalarType } from "graphql";
import { IncomingMessage, ServerResponse } from "node:http";
import { Readable } from "node:stream";

export interface ProcessRequestOptions {
    maxFieldSize?: number | undefined;
    maxFileSize?: number | undefined;
    maxFiles?: number | undefined;
}

// We are keeping this type just to avoid breaking changes, but it should be removed on the next major release.
export type UploadOptions = ProcessRequestOptions;

// We are keeping this interface just to avoid breaking changes, but it should be removed on the next major release.
export interface GraphQLOperation {
    query: string;
    operationName?: null | string | undefined;
    variables?: null | unknown | undefined;
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

export type GraphQLUpload = GraphQLScalarType<any, any>;

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

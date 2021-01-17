// Type definitions for convertapi 1.9
// Project: https://github.com/ConvertAPI/convertapi-node
// Definitions by: Laurynas Baltsoft <https://github.com/laurynas-baltsoft>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

/// <reference types="node" />

export interface Options {
    conversionTimeout?: number;
    conversionTimeoutDelta?: number;
    uploadTimeout?: number;
    downloadTimeout?: number;
    proxy?: object;
    baseUri?: string;
}

export interface ResultFile {
    readonly url: string;
    readonly fileName: string;
    readonly fileSize: number;
    save(filePath: string): Promise<string>;
}

export interface Result {
    readonly response: object;
    readonly conversionCost: number;
    readonly jobId?: string;
    readonly file: ResultFile;
    readonly files: [ResultFile];
    saveFiles(path: string): Promise<[string]>;
}

export interface UploadResult {
    readonly fileId: string;
    readonly fileName: string;
    readonly fileExt: string;
    toString(): string;
}

export interface Client {
    get(path: string, params?: any, timeout?: number): Promise<any>;
    post(path: string, params: any, timeout?: number): Promise<any>;
    download(url: string, path: string): Promise<string>;
    upload(stream: string | NodeJS.ReadableStream, fileName: string): Promise<UploadResult>;
}

export class ConvertAPI {
    client: Client;
    constructor(secret: string, options?: Options);
    convert(toFormat: string, params: object): Promise<Result>;
    getUser(): Promise<object>;
    upload(source: string | NodeJS.ReadableStream, fileName?: string): Promise<UploadResult>;
}

export default function init(secret: string, options?: Options): ConvertAPI;

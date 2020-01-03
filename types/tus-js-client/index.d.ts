// Type definitions for tus-js-client 1.8
// Project: https://github.com/tus/tus-js-client/
// Definitions by: Kevin Somers-Higgins <https://github.com/kevhiggins>
//                 Marius Kleidl <https://github.com/Acconut>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

export interface UploadOptions {
    endpoint: string;
    fingerprint?: (file: File, options?: UploadOptions) => string;
    resume?: boolean;
    metadata?: { [key: string]: string };
    onProgress?: ((bytesSent: number, bytesTotal: number) => void) | null;
    onChunkComplete?: ((chunkSize: number, bytesAccepted: number, bytesTotal: number) => void) | null;
    onSuccess?: (() => void) | null;
    onError?: ((error: Error) => void) | null;
    headers?: { [key: string]: string };
    chunkSize?: number;
    withCredentials?: boolean;
    uploadUrl?: string | null;
    uploadSize?: number | null;
    overridePatchMethod?: boolean;
    retryDelays?: number[];
    removeFingerprintOnSuccess?: boolean;
    uploadLengthDeferred?: boolean;
}

export class Upload {
    constructor(file: File | Blob | Pick<ReadableStreamDefaultReader, "read">, options: UploadOptions);

    file: File | Blob | Pick<ReadableStreamDefaultReader, "read">;
    options: UploadOptions;
    url: string | null;

    static terminate(url: string, options?: UploadOptions, callback?: (error?: Error) => void): void;
    start(): void;
    abort(shouldTerminate?: boolean, callback?: (error?: Error) => void): void;
}

export const isSupported: boolean;
export const canStoreURLs: boolean;
export const defaultOptions: UploadOptions;

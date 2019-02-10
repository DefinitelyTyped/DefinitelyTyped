// Type definitions for tus-js-client 1.5
// Project: https://github.com/tus/tus-js-client/
// Definitions by: Kevin Somers-Higgins <https://github.com/kevhiggins>
//                 Marius Kleidl <https://github.com/Acconut>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
}

export class Upload {
    constructor(file: File | Blob, options: UploadOptions);

    file: File | Blob;
    options: UploadOptions;
    url: string | null;

    start(): void;
    abort(): void;
}

export const isSupported: boolean;
export const canStoreURLs: boolean;
export const defaultOptions: UploadOptions;

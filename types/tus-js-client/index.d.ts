// Type definitions for tus-js-client 1.4
// Project: https://github.com/tus/tus-js-client/
// Definitions by: Kevin Somers-Higgins <https://github.com/kevhiggins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface UploadOptions {
    endpoint: string;
    fingerprint?: string;
    resume?: boolean;
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
}

export class Upload {
    constructor(file: File | Blob, options: UploadOptions);

    file: File | Blob;
    options: UploadOptions;
    url: string | null;

    start(): void;
    abort(): void;
}

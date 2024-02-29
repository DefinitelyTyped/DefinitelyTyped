export as namespace ActiveStorage;

export function start(): void;

export class DirectUpload {
    id: number;
    file: File;
    url: string;

    constructor(file: File, url: string, delegate?: DirectUploadDelegate);

    create(callback: (error: Error, blob: Blob) => void): void;
}

export interface DirectUploadDelegate {
    directUploadWillCreateBlobWithXHR?: ((xhr: XMLHttpRequest) => void) | undefined;

    directUploadWillStoreFileWithXHR?: ((xhr: XMLHttpRequest) => void) | undefined;
}

export interface Blob {
    byte_size: number;
    checksum: string;
    content_type: string;
    filename: string;
    signed_id: string;
}

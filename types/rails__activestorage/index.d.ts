// Type definitions for @rails/activestorage 7.0
// Project: https://github.com/rails/rails/tree/master/activestorage/app/javascript, http://rubyonrails.org/
// Definitions by: Ilgiz Mustafin <https://github.com/imustafin>, Cameron Bothner <https://github.com/cbothner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace ActiveStorage;

export function start(): void;

export class DirectUpload {
    id: number;
    file: File;
    url: string;

    constructor(file: File, url: string, delegate?: DirectUploadDelegate)

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

// Type definitions for ActiveStorage 5.2
// Project: https://github.com/rails/rails/tree/master/activestorage/app/javascript, http://rubyonrails.org
// Definitions by: Cameron Bothner <https://github.com/cbothner>
// Definitions: https://github.com/cbothner/DefinitelyTyped
// TypeScript Version: 2.1

export as namespace ActiveStorage

export function start(): void;

export class DirectUpload {
    id: number;
    file: File;
    url: string;

    constructor(file: File, url: string, delegate?: DirectUploadDelegate)

    create(callback: (error: Error, blob: Blob) => void): void;
}

export interface DirectUploadDelegate {
    directUploadWillCreateBlobWithXHR?: (xhr: XMLHttpRequest) => void;

    directUploadWillStoreFileWithXHR?: (xhr: XMLHttpRequest) => void;
}

export interface Blob {
    byte_size: number;
    checksum: string;
    content_type: string;
    filename: string;
    signed_id: string;
}

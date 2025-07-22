export as namespace ActiveStorage;

export function start(): void;

export class DirectUpload {
    id: number;
    file: File;
    url: string;
    delegate?: DirectUploadDelegate;
    customHeaders: Record<string, string>;

    constructor(
        file: File,
        url: string,
        delegate?: DirectUploadDelegate,
        customHeaders?: Record<string, string>,
    );

    create(callback: (error: Error | null, blob?: Blob) => void): void;

    // Dynamically assigned after create()
    xhr?: XMLHttpRequest;
    uploadRequest?: XMLHttpRequest;

    // Optional hook assignable directly
    directUploadWillCreateBlobWithXHR?: (xhr: XMLHttpRequest) => void;
}

export interface DirectUploadDelegate {
    directUploadWillCreateBlobWithXHR?: ((xhr: XMLHttpRequest) => void) | undefined;
    directUploadWillStoreFileWithXHR?: ((xhr: XMLHttpRequest) => void) | undefined;
}

export interface Blob {
    signed_id: string;
    filename: string;
    content_type: string;
    byte_size: number;
    checksum: string;
}

export class DirectUploadController {
    constructor(input: HTMLInputElement, file: File);
    start(callback: (error: Error | null) => void): void;
}

export class DirectUploadsController {
    constructor(form: HTMLFormElement);
    start(callback: (error: Error | null) => void): void;
}

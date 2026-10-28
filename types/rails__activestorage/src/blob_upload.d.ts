export class BlobUpload {
    constructor(blob: {
        file: File;
        directUploadData: {
            headers: Record<string, string>;
            url: string;
        };
    });

    create(callback: (error: string | null, blob: Blob) => void): void;

    xhr: XMLHttpRequest;
}

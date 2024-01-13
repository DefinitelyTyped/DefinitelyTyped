declare namespace download {
}
declare function download(
    data: string | File | Blob | Uint8Array,
    filename?: string,
    mimeType?: string,
): XMLHttpRequest | boolean;
export = download;

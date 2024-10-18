export function openDoc(
    files: Array<{
        url: string;
        fileName?: string | undefined;
        fileNameOptional?: string | undefined;
        cache?: boolean | undefined;
        fileType?: string | undefined;
    }>,
    callback: (error: string, url: string) => void,
): void;

export function openDocb64(
    files: Array<{ base64: string; fileName?: string | undefined; fileType?: string | undefined }>,
    callback: (error: string, url: string) => void,
): void;

export function openDocBinaryinUrl(
    files: Array<{ url: string; fileName?: string | undefined; fileType?: string | undefined }>,
    callback: (error: string, url: string) => void,
): void;

export function playMovie(
    path: string,
    callback: (error: string, url: string) => void,
): void;

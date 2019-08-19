// Type definitions for compress.js 1.1
// Project: - (link to the repo is missing)
// Definitions by: Yuri Drabik <https://github.com/yurist38>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Compress;

declare class Compress {
    attach(
        el: string,
        options: CompressOptions,
    ): Promise<CompressResult[]>;

    compress(
        files: File[],
        options: CompressOptions,
    ): Promise<CompressResult[]>;

    static convertBase64ToFile(
        base64: string,
        mime?: string,
    ): File;
}

interface CompressOptions {
    quality?: number;
    size?: number;
    maxWidth?: number;
    maxHeight?: number;
    resize?: boolean;
}

interface CompressResult {
    data: string;
    prefix: string;
    elapsedTimeInSeconds: number;
    alt: string;
    initialSizeInMb: number;
    endSizeInMb: number;
    ext: string;
    quality: number;
    endWidthInPx: number;
    endHeightInPx: number;
    initialWidthInPx: number;
    initialHeightInPx: number;
    sizeReducedInPercent: number;
    iterations: number;
}

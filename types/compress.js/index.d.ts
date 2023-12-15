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
    quality?: number | undefined;
    size?: number | undefined;
    maxWidth?: number | undefined;
    maxHeight?: number | undefined;
    resize?: boolean | undefined;
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

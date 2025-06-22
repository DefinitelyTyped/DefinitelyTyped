export = ImageCompressor;
declare function ImageCompressor(
    encoder: string,
    options?: PngOptions | JpegOptions | WebpOptions | AvifOptions
): void;
declare class ImageCompressor {
    constructor(encoder: string, options?: PngOptions | JpegOptions | WebpOptions | AvifOptions);
    compressBytes(content: Uint8Array | ArrayBuffer): Uint8Array;
    compressFile(inputPath: string, outputPath: string): void;
}
declare namespace ImageCompressor {
    export { PngOptions, JpegOptions, WebpOptions, AvifOptions };
}
interface PngOptions {
    compression?: string;
    filter?: string;
}
interface JpegOptions {
    quality?: number;
    backgroundColor?: string;
}
interface WebpOptions {
    quality?: number;
}
interface AvifOptions {
    quality?: number;
    speed?: number;
}

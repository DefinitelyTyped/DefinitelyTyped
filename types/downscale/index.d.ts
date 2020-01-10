// Type definitions for downscale 1.0
// Project: https://github.com/ytiurin/downscale
// Definitions by: Gabriel Soicher <https://github.com/Lunrtick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ImageSource = File | HTMLImageElement | HTMLVideoElement | string;

interface DownscaleOptions {
    imageType?: string;
    quality?: number;
    returnBlob?: boolean;
    returnCanvas?: boolean;
    sourceX?: number;
    sourceY?: number;
}

/**
 * Overloads that automatically type the return value based on the selected options
 */
declare function downscale(source: ImageSource, width: number, height: number, options?: DownscaleOptions & { returnBlob?: false; returnCanvas?: false; }): Promise<string>;
declare function downscale(source: ImageSource, width: number, height: number, options?: DownscaleOptions & { returnBlob: true; }): Promise<Blob>;
declare function downscale(source: ImageSource, width: number, height: number, options?: DownscaleOptions & { returnCanvas: true; }): Promise<HTMLCanvasElement>;

export = downscale;

export as namespace downscale;

type ImageSource = File | HTMLImageElement | HTMLVideoElement | string;

interface DownscaleOptions {
    imageType?: string | undefined;
    quality?: number | undefined;
    returnBlob?: boolean | undefined;
    returnCanvas?: boolean | undefined;
    sourceX?: number | undefined;
    sourceY?: number | undefined;
}

/**
 * Overloads that automatically type the return value based on the selected options
 */
declare function downscale(
    source: ImageSource,
    width: number,
    height: number,
    options?: DownscaleOptions & { returnBlob?: false | undefined; returnCanvas?: false | undefined },
): Promise<string>;
declare function downscale(
    source: ImageSource,
    width: number,
    height: number,
    options?: DownscaleOptions & { returnBlob: true },
): Promise<Blob>;
declare function downscale(
    source: ImageSource,
    width: number,
    height: number,
    options?: DownscaleOptions & { returnCanvas: true },
): Promise<HTMLCanvasElement>;

export = downscale;

export as namespace downscale;

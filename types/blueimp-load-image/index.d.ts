// Type definitions for blueimp-load-image 5.14
// Project: https://github.com/blueimp/JavaScript-Load-Image
// Definitions by: Evan Kesten <https://github.com/ebk46>
//                 Konstantin Lukaschenko <https://github.com/KonstantinLukaschenko>
//                 Saeid Rezaei <https://github.com/moeinio>
//                 Zak Barbuto <https://github.com/zbarbuto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace loadImage {
    type LoadImageCallback = (eventOrImage: Event | HTMLCanvasElement | HTMLImageElement, data?: MetaData) => void;
    type LoadImageResult = MetaData & {
        image: HTMLImageElement | HTMLCanvasElement;
    };

    type ParseMetaDataCallback = (data: MetaData) => void;

    type ExifTagValue = number | string | string[];

    interface Exif {
        [tag: number]: ExifTagValue;
        get: (tagName: 'Orientation' | 'Thumbnail' | 'Exif' | 'GPSInfo' | 'Interoperability') => ExifTagValue;
    }

    interface Iptc {
        [tag: number]: number | string | string[];
    }

    interface ImageHead {
        imageHead?: ArrayBuffer | Uint8Array | undefined;
    }

    interface MetaData extends ImageHead {
        originalWidth?: number | undefined;
        originalHeight?: number | undefined;
        exif?: Exif | undefined;
        iptc?: Iptc | undefined;
    }

    interface BasicOptions {
        maxWidth?: number | undefined;
        maxHeight?: number | undefined;
        minWidth?: number | undefined;
        minHeight?: number | undefined;
        contain?: boolean | undefined;
        cover?: boolean | undefined;
        crossOrigin?: string | undefined;
        noRevoke?: boolean | undefined;
    }

    type Orientation = number | boolean;
    type AspectRatio = number;

    // Some options are only valid if 'canvas' is true.
    // In addition, if 'crop' is true or 'orientation' is set,
    // it automatically enables 'canvas' so in those cases,
    // 'canvas' cannot be false
    interface CanvasTrueOptions {
        canvas: true;
        sourceWidth?: number | undefined;
        sourceHeight?: number | undefined;
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
        pixelRatio?: number | undefined;
        downsamplingRatio?: number | undefined;
        orientation?: Orientation | undefined;
        crop?: boolean | undefined;
        imageSmoothingEnabled?: boolean | undefined;
        imageSmoothingQuality?: 'low' | 'medium' | 'high' | undefined;
    }
    interface CanvasFalseOptions {
        canvas?: false | undefined;
    }
    type CanvasOptions = CanvasTrueOptions | CanvasFalseOptions;

    // Setting 'aspectRatio' automatically enables 'crop', so setting 'crop' to
    // 'false' in that case is not valid
    interface CropTrueOptions {
        crop?: true | undefined;
        aspectRatio?: AspectRatio | undefined;
    }
    interface CropFalseOptions {
        crop?: false | undefined;
    }
    type CropOptions = CropTrueOptions | CropFalseOptions;

    // Setting 'orientation' automatically sets 'meta' to true
    // so setting it to false is not valid in that case
    interface MetaTrueOptions {
        meta?: true | undefined;
        orientation: Orientation;
    }
    interface MetaFalseOptions {
        meta?: false | undefined;
    }
    type MetaOptions = MetaTrueOptions | MetaFalseOptions;

    interface ParseOptions {
        // Defines the maximum number of bytes to parse.
        maxMetaDataSize?: number | undefined;

        // Disables creating the imageHead property.
        disableImageHead?: boolean | undefined;
    }

    type LoadImageOptions = BasicOptions & CanvasOptions & CropOptions & MetaOptions;
}

// loadImage is implemented as a callable object.
interface LoadImage {
    (file: File | Blob | string, callback: loadImage.LoadImageCallback, options: loadImage.LoadImageOptions):
        | HTMLImageElement
        | FileReader
        | false;
    (file: File | Blob | string, options: loadImage.LoadImageOptions): Promise<loadImage.LoadImageResult>;

    // Parses image meta data and calls the callback with the image head
    parseMetaData: (
        file: File | Blob | string,
        callback: loadImage.ParseMetaDataCallback,
        options?: loadImage.ParseOptions,
        data?: loadImage.ImageHead,
    ) => void;

    blobSlice: (this: Blob, start?: number, end?: number) => Blob;
}

declare const loadImage: LoadImage;

export = loadImage;

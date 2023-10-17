declare namespace loadImage {
    type LoadImageCallback = (eventOrImage: Event | HTMLCanvasElement | HTMLImageElement, data?: MetaData) => void;
    type LoadImageResult = MetaData & {
        image: HTMLImageElement | HTMLCanvasElement;
    };

    type ParseMetaDataCallback = (data: MetaData) => void;

    type ExifTagValue = number | string | string[];

    type ExifMap = Record<number, number>;

    interface Exif {
        [tag: number]: ExifTagValue;
        map: Record<string, number>;
        get: (tagName: "Orientation" | "Thumbnail" | "Exif" | "GPSInfo" | "Interoperability") => ExifTagValue;
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
        exifOffsets?: ExifMap;
    }

    interface WriteExifData {
        exif: Pick<Exif, "map">;
        exifOffsets: ExifMap;
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
        imageSmoothingQuality?: "low" | "medium" | "high" | undefined;
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

        disableExif?: boolean | undefined;
        disableExifOffsets?: boolean | undefined;
        includeExifTags?: Record<number, boolean> | undefined;
        excludeExifTags?: Record<number, boolean> | undefined;
        disableIptc?: boolean | undefined;
        disableIptcOffsets?: boolean | undefined;
        includeIptcTags?: Record<number, boolean> | undefined;
        excludeIptcTags?: Record<number, boolean> | undefined;
    }

    type LoadImageOptions = BasicOptions & CanvasOptions & CropOptions & MetaOptions;
}

interface ParseMetadata {
    (
        file: File | Blob | string,
        callback: loadImage.ParseMetaDataCallback,
        options?: loadImage.ParseOptions,
        data?: loadImage.ImageHead,
    ): void;
    (
        file: File | Blob | string,
        options?: loadImage.ParseOptions,
        data?: loadImage.ImageHead,
    ): Promise<loadImage.MetaData>;
}

interface ReplaceHead {
    (blob: Blob, head: ArrayBuffer | Uint8Array, callback: (blob: Blob | null) => void): void;
    (blob: Blob, head: ArrayBuffer | Uint8Array): Promise<Blob | null>;
}

interface Scale {
    <O extends loadImage.LoadImageOptions>(
        image: HTMLImageElement | HTMLCanvasElement,
        options?: O,
    ): O extends loadImage.CanvasTrueOptions ? HTMLCanvasElement : HTMLImageElement;
}

// loadImage is implemented as a callable object.
interface LoadImage {
    (file: File | Blob | string, callback: loadImage.LoadImageCallback, options: loadImage.LoadImageOptions):
        | HTMLImageElement
        | FileReader
        | false;
    (file: File | Blob | string, options: loadImage.LoadImageOptions): Promise<loadImage.LoadImageResult>;

    parseMetaData: ParseMetadata;

    // Parses image meta data and calls the callback/returns the promise with the image head
    blobSlice: (this: Blob, start?: number, end?: number) => Blob;

    // Replaces the image head of a JPEG blob with the given one
    replaceHead: ReplaceHead;

    writeExifData: (
        buffer: ArrayBuffer | Uint8Array,
        data: loadImage.WriteExifData,
        id: number | string,
        value: loadImage.ExifTagValue,
    ) => ArrayBuffer | Uint8Array;

    scale: Scale;

    // Internal functions, undocumented
    requiresMetaData: (options: loadImage.LoadImageOptions) => boolean;
    fetchBlob: (url: string, callback: () => void) => void;
    transform: (img: unknown, options: unknown, callback: () => void, file: unknown, data: unknown) => void;
    global: Window;
    readFile: unknown;
    isInstanceOf: unknown;
    createObjectURL: (blob: Blob) => string | false;
    revokeObjectURL: (url: string) => void | false;
}

declare const loadImage: LoadImage;

export = loadImage;

// JSBox Photo API TypeScript Declaration

// Known bugs in this module:
// 1. $photo.take does not support a format parameter, so if mediaTypes is set to [$mediaType.movie],
//    no data can be returned. In other words, it cannot be used to record videos.
// 2. Although the documentation claims that $photo.pick accepts the same parameters as $photo.take,
//    using any parameter other than edit and mediaTypes will cause a crash.
// 3. $photo.prompt can accept additional parameters, including those from $photo.take and the format parameter. However:
//      1. If taking a photo, and format is data or mediaTypes is [$mediaType.movie], no data will be returned.
//      2. If picking from the photo library, adding any parameter other than edit, mediaTypes, and format will cause a crash.
//      Summary: only the edit parameter is safe.
// 4. mediaTypes only supports $mediaType.image and $mediaType.movie; using any other value will cause a crash.
// 5. Although the documentation states that $photo.delete accepts the format parameter, it has no practical effect.

declare namespace PhotoTypes {
    type PhotoFormat = "image" | "data";
    type PhotoMediaType = typeof $mediaType.image | typeof $mediaType.movie;

    interface PhotoTIFFMetadata {
        Orientation?: number;
        DateTime?: string;
        ImageDescription?: string;
        Make?: string;
        Model?: string;
        Software?: string;
        HostComputer?: string;
        XResolution?: number;
        YResolution?: number;
        ResolutionUnit?: number;
        TileWidth?: number;
        TileLength?: number;
        [key: string]: unknown;
    }

    interface PhotoExifMetadata {
        PixelXDimension?: number;
        PixelYDimension?: number;
        ColorSpace?: number;
        DateTimeOriginal?: string;
        DateTimeDigitized?: string;
        OffsetTime?: string;
        OffsetTimeOriginal?: string;
        OffsetTimeDigitized?: string;
        SubsecTimeOriginal?: string;
        SubsecTimeDigitized?: string;
        UserComment?: string;
        ExifVersion?: number[];
        ExposureTime?: number;
        ExposureMode?: number;
        ExposureProgram?: number;
        ExposureBiasValue?: number;
        FNumber?: number;
        ApertureValue?: number;
        ShutterSpeedValue?: number;
        BrightnessValue?: number;
        FocalLength?: number;
        FocalLenIn35mmFilm?: number;
        Flash?: number;
        ISOSpeedRatings?: number[];
        LensMake?: string;
        LensModel?: string;
        LensSpecification?: number[];
        MeteringMode?: number;
        SceneType?: number;
        SensingMethod?: number;
        SubjectArea?: number[];
        WhiteBalance?: number;
        CompositeImage?: number;
        SourceExposureTimesOfCompositeImage?: number[];
        SourceImageNumberOfCompositeImage?: number[];
        [key: string]: unknown;
    }

    interface PhotoGPSMetadata {
        Latitude?: number;
        LatitudeRef?: string;
        Longitude?: number;
        LongitudeRef?: string;
        Altitude?: number;
        AltitudeRef?: number;
        Speed?: number;
        SpeedRef?: string;
        ImgDirection?: number;
        ImgDirectionRef?: string;
        DestBearing?: number;
        DestBearingRef?: string;
        HPositioningError?: number;
        DateStamp?: string;
        TimeStamp?: string;
        [key: string]: unknown;
    }

    interface PhotoPNGMetadata {
        InterlaceType?: number;
        Gamma?: number;
        Chromaticities?: number[];
        sRGBIntent?: number;
        XPixelsPerMeter?: number;
        YPixelsPerMeter?: number;
        Description?: string;
        [key: string]: unknown;
    }

    interface PhotoIPTCMetadata {
        "Caption/Abstract"?: string;
        [key: string]: unknown;
    }

    interface PhotoMetadata {
        "{TIFF}"?: PhotoTIFFMetadata;
        "{Exif}"?: PhotoExifMetadata;
        "{GPS}"?: PhotoGPSMetadata;
        "{PNG}"?: PhotoPNGMetadata;
        "{IPTC}"?: PhotoIPTCMetadata;
        /** Apple-private metadata whose numeric keys and values vary by device and OS version. */
        "{MakerApple}"?: Record<string, unknown>;
        PixelWidth?: number;
        PixelHeight?: number;
        DPIWidth?: number;
        DPIHeight?: number;
        ColorModel?: string;
        Depth?: number;
        HasAlpha?: boolean;
        PrimaryImage?: boolean;
        Headroom?: number;
        Orientation?: number;
        ProfileName?: string;
        UIImagePickerControllerOriginalImage?: UIImage;
        UIImagePickerControllerMediaType?: PhotoMediaType;
        /** Native NSURL object. */
        UIImagePickerControllerImageURL?: JBBasicValue;
        /** Native NSURL object. */
        UIImagePickerControllerReferenceURL?: JBBasicValue;
        /** Native PHAsset object. */
        UIImagePickerControllerPHAsset?: JBBasicValue;
        [key: string]: unknown;
    }

    interface PhotoResponseBase {
        status: boolean;
        filename: string;
        metadata: PhotoMetadata;
    }

    type PhotoPayload<F extends PhotoFormat> = F extends "image" ? { image: UIImage } : { data: NSData };
    type PhotoResponse<F extends PhotoFormat = "image"> = PhotoResponseBase & PhotoPayload<F>;

    interface TakeOptions {
        edit?: boolean;
        mediaTypes?: PhotoMediaType[];
        maxDuration?: number;
        quality?: (typeof $imgPicker.quality)[keyof typeof $imgPicker.quality];
        showsControls?: boolean;
        device?: (typeof $imgPicker.device)[keyof typeof $imgPicker.device];
        flashMode?: (typeof $imgPicker.flashMode)[keyof typeof $imgPicker.flashMode];
        handler: (resp: PhotoResponse<"image">) => void;
    }

    interface PickOptionsBase {
        edit?: boolean;
        mediaTypes?: PhotoMediaType[];
    }

    interface PickOptionsMultiBase {
        multi: true;
        selectionLimit?: number;
    }

    interface PickOptionsSingleBase {
        multi?: false;
    }

    type PickPayload<F extends PhotoFormat, M extends boolean = false> = F extends "image"
        ? { format?: "image"; handler: (resp: PickResponse<"image", M>) => void }
        : { format: "data"; handler: (resp: PickResponse<"data", M>) => void };
    type PickOptions<F extends PhotoFormat = "image", M extends boolean = false> =
        & PickOptionsBase
        & (M extends true ? PickOptionsMultiBase : PickOptionsSingleBase)
        & PickPayload<F, M>;

    type PickResponse<F extends PhotoFormat = "image", M extends boolean = false> = M extends true
        ? { status: boolean; results: Omit<PhotoResponse<F>, "status">[] }
        : PhotoResponse<F>;

    interface PromptOptions {
        edit?: boolean;
        handler: (resp: PhotoResponse<"image">) => void;
    }

    interface ScanOptions {
        handler: (resp: ScanResponse) => void;
    }

    interface ScanResponse {
        status: boolean;
        results: UIImage[];
    }

    type SaveOptions =
        | {
            image: UIImage;
            data?: never;
            handler: (success: boolean) => void;
        }
        | {
            image?: never;
            data: NSData;
            handler: (success: boolean) => void;
        };

    interface FetchOptionsBase {
        count?: number;
        type?: (typeof $assetMedia.type)[keyof typeof $assetMedia.type];
        subType?: (typeof $assetMedia.subType)[keyof typeof $assetMedia.subType];
        size?: JBSize;
    }

    type FetchPayload<F extends PhotoFormat = "image"> = F extends "image"
        ? { format?: "image"; handler: (images: UIImage[]) => void }
        : { format: "data"; handler: (datas: NSData[]) => void };
    type FetchOptions<F extends PhotoFormat = "image"> = FetchOptionsBase & FetchPayload<F>;

    interface DeleteOptions extends FetchOptionsBase {
        /** @default 1 */
        count?: number;
        // format?: PhotoFormat; // no practical effect
        handler?: (success: boolean) => void;
    }
}

interface JBPhoto {
    take(options: PhotoTypes.TakeOptions): void;
    take(options?: Omit<PhotoTypes.TakeOptions, "handler">): Promise<PhotoTypes.PhotoResponse<"image">>;
    pick(options: PhotoTypes.PickOptions<"image", true>): void;
    pick(options: PhotoTypes.PickOptions<"data", true>): void;
    pick(options: PhotoTypes.PickOptions<"image", false>): void;
    pick(options: PhotoTypes.PickOptions<"data", false>): void;
    pick(
        options?: Omit<PhotoTypes.PickOptions<"image", false>, "handler">,
    ): Promise<PhotoTypes.PickResponse<"image", false>>;
    pick(
        options: Omit<PhotoTypes.PickOptions<"data", false>, "handler">,
    ): Promise<PhotoTypes.PickResponse<"data", false>>;
    pick(
        options: Omit<PhotoTypes.PickOptions<"image", true>, "handler">,
    ): Promise<PhotoTypes.PickResponse<"image", true>>;
    pick(
        options: Omit<PhotoTypes.PickOptions<"data", true>, "handler">,
    ): Promise<PhotoTypes.PickResponse<"data", true>>;
    pick<F extends PhotoTypes.PhotoFormat, M extends boolean>(
        options: PhotoTypes.PickOptionsBase & {
            format: F;
            multi: M;
            selectionLimit?: number;
            handler: (resp: PhotoTypes.PickResponse<F, M>) => void;
        },
    ): void;
    pick<F extends PhotoTypes.PhotoFormat, M extends boolean>(
        options: PhotoTypes.PickOptionsBase & {
            format: F;
            multi: M;
            selectionLimit?: number;
        },
    ): Promise<PhotoTypes.PickResponse<F, M>>;
    pick<F extends PhotoTypes.PhotoFormat>(
        options: PhotoTypes.PickOptionsBase & {
            format: F;
            multi?: false;
            handler: (resp: PhotoTypes.PickResponse<F, false>) => void;
        },
    ): void;
    pick<F extends PhotoTypes.PhotoFormat>(
        options: PhotoTypes.PickOptionsBase & { format: F; multi?: false },
    ): Promise<PhotoTypes.PickResponse<F, false>>;
    pick<M extends boolean>(
        options: PhotoTypes.PickOptionsBase & {
            format?: "image";
            multi: M;
            selectionLimit?: number;
            handler: (resp: PhotoTypes.PickResponse<"image", M>) => void;
        },
    ): void;
    pick<M extends boolean>(
        options: PhotoTypes.PickOptionsBase & {
            format?: "image";
            multi: M;
            selectionLimit?: number;
        },
    ): Promise<PhotoTypes.PickResponse<"image", M>>;
    prompt(options: PhotoTypes.PromptOptions): void; // Only callback is supported
    scan(options: PhotoTypes.ScanOptions): void;
    scan(options?: Omit<PhotoTypes.ScanOptions, "handler">): Promise<PhotoTypes.ScanResponse>;
    save(options: PhotoTypes.SaveOptions): void; // Only callback is supported
    fetch(options: PhotoTypes.FetchOptions<"image">): void;
    fetch(options: PhotoTypes.FetchOptions<"data">): void;
    fetch(options?: Omit<PhotoTypes.FetchOptions<"image">, "handler">): Promise<UIImage[]>;
    fetch(options: Omit<PhotoTypes.FetchOptions<"data">, "handler">): Promise<NSData[]>;
    fetch<F extends PhotoTypes.PhotoFormat>(
        options: PhotoTypes.FetchOptionsBase & {
            format: F;
            handler: (values: F extends "image" ? UIImage[] : NSData[]) => void;
        },
    ): void;
    fetch<F extends PhotoTypes.PhotoFormat>(
        options: PhotoTypes.FetchOptionsBase & { format: F },
    ): Promise<F extends "image" ? UIImage[] : NSData[]>;
    delete(options?: PhotoTypes.DeleteOptions): void; // Only callback is supported
}

declare const $photo: JBPhoto;

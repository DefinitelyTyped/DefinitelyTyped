/// <reference types="node" />

declare namespace Exif {
    interface ExifData {
        image: {
            Artist?: string | undefined;
            Copyright?: string | undefined;
            ExifOffset?: number | undefined;
            ImageHeight?: number | undefined;
            ImageWidth?: number | undefined;
            Make?: string | undefined;
            Model?: string | undefined;
            ModifyDate?: string | undefined;
            Orientation?: number | undefined;
            ResolutionUnit?: number | undefined;
            Software?: string | undefined;
            XResolution?: number | undefined;
            YCbCrPositioning?: number | undefined;
            YResolution?: number | undefined;
        };
        thumbnail: {
            Compression?: number | undefined;
            Orientation?: number | undefined;
            ResolutionUnit?: number | undefined;
            ThumbnailLength?: number | undefined;
            ThumbnailOffset?: number | undefined;
            XResolution?: number | undefined;
            YCbCrPositioning?: number | undefined;
            YResolution?: number | undefined;
        };
        exif: {
            ApertureValue?: number | undefined;
            BrightnessValue?: number | undefined;
            ColorSpace?: number | undefined;
            ComponentsConfiguration?: Buffer | undefined;
            CompressedBitsPerPixel?: number | undefined;
            CreateDate?: string | undefined;
            DateTimeOriginal?: string | undefined;
            ExifImageHeight?: number | undefined;
            ExifImageWidth?: number | undefined;
            ExifVersion?: Buffer | undefined;
            ExposureCompensation?: number | undefined;
            ExposureMode?: number | undefined;
            ExposureProgram?: number | undefined;
            ExposureTime?: number | undefined;
            FileSource?: Buffer | undefined;
            Flash?: number | undefined;
            FlashpixVersion?: Buffer | undefined;
            FNumber?: number | undefined;
            FocalLength?: number | undefined;
            FocalLengthIn35mmFormat?: number | undefined;
            FocalPlaneResolutionUnit?: number | undefined;
            FocalPlaneXResolution?: number | undefined;
            FocalPlaneYResolution?: number | undefined;
            ImageUniqueID?: string | undefined;
            InteropOffset?: number | undefined;
            ISO?: number | undefined;
            LensMake?: string | undefined;
            LensModel?: string | undefined;
            MakerNote?: Buffer | undefined;
            MaxApertureValue?: number | undefined;
            MeteringMode?: number | undefined;
            SceneCaptureType?: number | undefined;
            SceneType?: Buffer | undefined;
            SensingMethod?: number | undefined;
            ShutterSpeedValue?: number | undefined;
            UserComment?: Buffer | undefined;
            WhiteBalance?: number | undefined;
        };
        /**
         * Entire GPS Tags from https://exiftool.org/TagNames/GPS.html are listed.
         * And their types are determined from http://www.exif.org/Exif2-2.PDF.
         */
        gps: {
            GPSAltitude?: number | undefined;
            GPSAltitudeRef?: number | undefined;
            GPSAreaInformation?: Buffer | undefined;
            GPSDateStamp?: string | undefined;
            GPSDestBearing?: number | undefined;
            GPSDestBearingRef?: string | undefined;
            GPSDestDistance?: number | undefined;
            GPSDestDistanceRef?: string | undefined;
            GPSDestLatitude?: number[] | undefined;
            GPSDestLatitudeRef?: string | undefined;
            GPSDestLongitude?: number[] | undefined;
            GPSDestLongitudeRef?: string | undefined;
            GPSDifferential?: number | undefined;
            GPSDOP?: number | undefined;
            GPSHPositioningError?: number | undefined;
            GPSImgDirection?: number | undefined;
            GPSImgDirectionRef?: string | undefined;
            GPSLatitude?: number[] | undefined;
            GPSLatitudeRef?: string | undefined;
            GPSLongitude?: number[] | undefined;
            GPSLongitudeRef?: string | undefined;
            GPSMapDatum?: string | undefined;
            GPSMeasureMode?: string | undefined;
            GPSProcessingMethod?: Buffer | undefined;
            GPSTimeStamp?: number[] | undefined;
            GPSSatellites?: string | undefined;
            GPSSpeed?: number | undefined;
            GPSSpeedRef?: string | undefined;
            GPSStatus?: string | undefined;
            GPSTrack?: number | undefined;
            GPSTrackRef?: string | undefined;
            GPSVersionId?: number[] | undefined;
        };
        interoperability: {
            InteropIndex?: string | undefined;
            InteropVersion?: Buffer | undefined;
        };
        makernote: {
            AutoBracketing?: number | undefined;
            BlurWarning?: number | undefined;
            ExposureWarning?: number | undefined;
            error?: string | undefined;
            FlashExposureComp?: number | undefined;
            FocusMode?: number | undefined;
            FocusWarning?: number | undefined;
            FujiFlashMode?: number | undefined;
            Macro?: number | undefined;
            Quality?: string | undefined;
            Sharpness?: number | undefined;
            SlowSync?: number | undefined;
            Version?: Buffer | undefined;
            WhiteBalance?: number | undefined;
        };
    }

    interface ExifOptions {
        agfaMaxEntries?: number | undefined;
        epsonMaxEntries?: number | undefined;
        /** node-exif corrects the thumbnail offset in order to have an offset from the start of the buffer/file. */
        fixThumbnailOffset?: boolean | undefined;
        fujifilmMaxEntries?: number | undefined;
        ifd0MaxEntries?: number | undefined;
        ifd1MaxEntries?: number | undefined;
        /**
         * The image to get Exif data from can be either a filesystem path or a Buffer.
         *
         * If `image` is not specified, the developer must call `loadImage()` to parse the image.
         */
        image?: string | Buffer | undefined;
        /** Specifies the maximum entries to be parsed */
        maxEntries?: number | undefined;
        maxGpsEntries?: number | undefined;
        maxInteroperabilityEntries?: number | undefined;
        noPadding?: boolean | undefined;
        olympusMaxEntries?: number | undefined;
        panasonicMaxEntries?: number | undefined;
        sanyoMaxEntries?: number | undefined;
        /** An object named "offsets" is added to exifData and contains lot of offsets needed to get thumbnail and other things. */
        tiffOffsets?: number | undefined;
    }

    type ExifImageCallback = (error: Error | null, data: ExifData) => void;
    type ExifCallback = (error: Error | null, data: ExifData, dataPath: string) => void;

    class ExifImage {
        constructor(options: ExifOptions | string | Buffer, callback: ExifImageCallback);
        constructor();
        loadImage(file: string | Buffer, callback: ExifImageCallback): void;
    }
}

declare function Exif(path: string, callback: Exif.ExifCallback): void;

export = Exif;

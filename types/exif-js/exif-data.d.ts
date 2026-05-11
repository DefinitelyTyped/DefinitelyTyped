import type { EXIF_STRINGS } from "./strings";
import type { EXIF_TAGS } from "./tags";

export namespace ExifData {
    /**
     * Type is especially Number, not number, because it has format of rational number (object)
     *  { numerator: number, denominator: number } which can be converted to number by calling Number(coord[0])
     */
    // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
    type Coord_DMS = [D: Number, M: Number, S: Number];
    type Coord_DMS_empty = [D: null, M: null, S: null];

    type AllDataMap = Record<EXIF_TAGS.ALL, any>;

    /**
     * Some tags with additional definition
     *
     * Most comments based on:
     * [This](https://www.imagekit.com/IK8Help/index.html?page=source%2Fcontrolreference%2Fimagekitcontrol%2Ffile%2Fexif%2Fpropertydatetimedigitized.htm)
     */
    interface FilledData extends AllDataMap {
        /**
         * The manufacturer of the recording equipment that generated the primary image
         *
         * Example: "Xiaomi"
         */
        Make: string;
        /**
         * The model name or model number of the equipment that generated the primary image
         *
         * Example: "Redmi Note 8 Pro"
         */
        Model: string;
        /**
         * Indicates the flash conditions at the time the image was captured
         *
         * Example: "Flash did not fire"
         */
        Flash: EXIF_STRINGS.Flash;
        /**
         * Values are 1 to 8 about image rotation;
         *
         * ![Image](EXIF_orientation.jpg)
         *
         *  - 1 - 0 degrees
         *  - 2 - Horizontal mirrored
         *  - 3 - Vertical mirrored
         *  - 4 - Vertical + Horizontal mirrored
         *  - 5 - 90deg rotated clockwise
         *  - 6 - 270deg rotated clockwise
         *  - 7 - 90deg rotated clockwise + Horizontal mirrored
         *  - 8 - 270deg rotated clockwise + Horizontal mirrored
         */
        Orientation: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

        /** Image width in px */
        ImageWidth: number;
        /** Image height in px */
        ImageHeight: number;
        /** Image size by Y in px */
        PixelYDimension: number;
        /** Image size by X in px */
        PixelXDimension: number;

        /**
         * Date string in format "YYYY:MM:DD HH:MM:SS"
         * The date and time that the primary image was created
         *
         * @see DateTimeOriginal
         *
         * Example: "2023:04:23 16:52:27"
         */
        DateTime: string;
        /**
         * Amount of ms as addition to DateTime
         *
         * Example: "768"
         */
        SubsecTime: string;

        /**
         * Date string in format "YYYY:MM:DD HH:MM:SS"
         * the DateTimeDigitized and the DateTimeOriginal properties refer to the time when the original image
         *  data was generated and when this data was stored as digital data.
         * If, for example, an image was captured by a DSC (Digital Still Camera) and at the same
         *  the file was recorded, then the DateTimeDigitized and the DateTimeOriginal will have the same contents.
         *
         * Example: "2023:04:23 16:52:27"
         */
        DateTimeOriginal: string;
        /**
         * Amount of ms as addition to DateTimeOriginal
         *
         * Example: "768"
         */
        SubsecTimeOriginal: string;

        /**
         * Date string in format "YYYY:MM:DD HH:MM:SS"
         *
         * @see DateTimeOriginal
         *
         * Example: "2023:04:23 16:52:27"
         */
        DateTimeDigitized: string;
        /**
         * Amount of ms as addition to DateTimeDigitized
         *
         * Example: "768"
         */
        SubsecTimeDigitized: string;

        /**
         * The latitude direction where the image was taken
         */
        GPSLatitudeRef: "\u0000" | "N" | "S";
        /**
         * The latitude in [DMS](https://en.wikipedia.org/wiki/Decimal_degrees#Example) format
         */
        GPSLatitude: Coord_DMS | Coord_DMS_empty;
        /**
         * The longitude direction where the image was taken
         */
        GPSLongitudeRef: "\u0000" | "E" | "W";
        /**
         * The longitude in [DMS](https://en.wikipedia.org/wiki/Decimal_degrees#Example) format
         */
        GPSLongitude: Coord_DMS | Coord_DMS_empty;

        /**
         * Date string in format "YYYY:MM:DD HH:MM:SS"
         * Could be a string of \u0000
         *
         * Example: "2023:04:23 16:52:27"
         */
        GPSDateStamp: string;
        GPSTimeStamp: [null, null, null];

        /**
         * Exif IFD is a set of tags for recording Exif-specific attribute information
         *
         * Example: 154
         */
        ExifIFDPointer: number;
        /**
         * It is the offset where the GPS Info is (Honestly, idk what does it mean)
         *
         * Example: 2887
         */
        GPSInfoIFDPointer: number;

        /**
         * [Wiki](https://en.wikipedia.org/wiki/F-number)
         *
         * Example: 1.89
         */
        FNumber: number;
        /**
         * [Wiki](https://en.wikipedia.org/wiki/Focal_length)
         *
         * Example: 5.43
         */
        FocalLength: number;
        /**
         * The shutter speed is in [APEX](https://en.wikipedia.org/wiki/APEX_system), the exposure time is in seconds.
         * The APEX shutter time is -log2(exposure time).
         *
         * @see ExposureTime
         *
         * Example: -9.62 with ExposureTime = 0.001265
         */
        ShutterSpeedValue: number;
        /**
         * The shutter speed is in [APEX](https://en.wikipedia.org/wiki/APEX_system), the exposure time is in seconds.
         * The APEX shutter time is -log2(exposure time).
         *
         * @see ShutterSpeedValue
         *
         * Example: 0.001265 with ShutterSpeedValue = -9.62
         */
        ExposureTime: number;
        /**
         * Indicates the ISO Speed and ISO Latitude of the camera or input device as specified in ISO 12232
         *
         * [Wiki](https://en.wikipedia.org/wiki/Film_speed)
         *
         * Example: 100
         */
        ISOSpeedRatings: number;
        /**
         * [Wiki](https://en.wikipedia.org/wiki/Aperture)
         *
         * Example: 1.84
         */
        ApertureValue: number;

        /**
         * Exif tags of thumbnail
         */
        thumbnail: Partial<FilledData>;

        ExposureProgram: EXIF_STRINGS.ExposureProgram;
        MeteringMode: EXIF_STRINGS.MeteringMode;
        LightSource: EXIF_STRINGS.LightSource;
        SensingMethod: EXIF_STRINGS.SensingMethod;
        SceneCaptureType: EXIF_STRINGS.SceneCaptureType;
        SceneType: EXIF_STRINGS.SceneType;
        CustomRendered: EXIF_STRINGS.CustomRendered;
        WhiteBalance: EXIF_STRINGS.WhiteBalance;
        GainControl: EXIF_STRINGS.GainControl;
        Contrast: EXIF_STRINGS.Contrast;
        Saturation: EXIF_STRINGS.Saturation;
        Sharpness: EXIF_STRINGS.Sharpness;
        SubjectDistanceRange: EXIF_STRINGS.SubjectDistanceRange;
        FileSource: EXIF_STRINGS.FileSource;

        /**
         * Combination of EXIF_STRINGS.Components
         *
         * @see EXIF_STRINGS.Components
         */
        ComponentsConfiguration: string;
    }

    type Data = Partial<FilledData>;
}

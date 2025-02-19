/**
 * 图片编辑 [1000+]
 * 接口声明: {"name": "system.image"}
 */
declare module "@system.image" {
    interface GetImageInfoOptions {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: (data: GetImageInfoSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         * |301|文件路径不存在|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetImageInfoSuccessOptions {
        /**
         * 图片地址
         */
        uri: string;
        /**
         * 图片的宽度，单位为 px
         */
        width: number;
        /**
         * 图片的高度，单位为 px
         */
        height: number;
        /**
         * 图片的大小，单位为 Byte
         */
        size: number;
    }

    /**
     * 获取图片信息
     */
    function getImageInfo(obj: GetImageInfoOptions): void;

    interface CompressImageOptions {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 图片的压缩质量，0-100 之间，默认是 75
         */
        quality?: number;
        /**
         * 尺寸压缩倍数，必须大于 0，尺寸会变为原图的 1/ratio 大小
         */
        ratio?: number;
        /**
         * 图片保存格式，支持 JPEG，PNG，WEBP 三种格式。默认使用 JPEG 格式
         */
        format?: "JPEG" | "PNG" | "WEBP";
        /**
         * 成功回调
         */
        success?: (data: CompressImageSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         * |301|文件路径不存在|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface CompressImageSuccessOptions {
        /**
         * 压缩后的图片地址
         */
        uri: string;
    }

    /**
     * 压缩图片
     * @param obj
     */
    function compressImage(obj: CompressImageOptions): void;

    interface ApplyOperationsOptions {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 编辑操作列表，按照先后顺序执行。如果未提供，则不会执行编辑操作，仅重新保存图片
         */
        operations?: ImageOperation[];
        /**
         * 图片的压缩质量，0-100 之间，默认是 75
         */
        quality?: number;
        /**
         * 图片保存格式，支持 JPEG，PNG，WEBP 三种格式。默认使用 JPEG 格式
         */
        format?: "JPEG" | "PNG" | "WEBP";
        /**
         * 成功回调
         */
        success?: (data: ApplyOperationsSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         * |301|文件路径不存在|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface CropOperation {
        action: "crop";
        /**
         * 裁剪的起始点的 x 坐标，默认是 0
         */
        x?: number;
        /**
         * 裁剪的起始点的 y 坐标，默认是 0
         */
        y?: number;
        /**
         * 裁剪的图片宽度
         */
        width: number;
        /**
         * 裁剪的图片高度
         */
        height: number;
    }

    interface ScaleOperation {
        action: "scale";
        /**
         * 宽度的缩放比率，缩放后宽度会变成原图的 scaleX 倍。默认是 1
         */
        scaleX?: number;
        /**
         * 高度的缩放比率，缩放后高度会变成原图的 scaleY 倍。默认是 1
         */
        scaleY?: number;
    }

    interface RotateOperation {
        action: "rotate";
        /**
         * 旋转角度
         */
        degree: number;
    }

    type ImageOperation = CropOperation | ScaleOperation | RotateOperation;

    interface ApplyOperationsSuccessOptions {
        /**
         * 生成的图片的地址
         */
        uri: string;
    }

    /**
     * 对图片按顺序执行编辑操作。
     * [1000+]
     * @description
     * 在顺序执行编辑操作列表中的操作时，上一步操作生成的结果会作为下一步操作的输入，坐标系也是以上一步操作生成的结果的左上角为坐标原点重新确定的。
     */
    function applyOperations(obj: ApplyOperationsOptions): void;

    interface EditImageOptions {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 用于限定裁剪结果的宽高比，该参数指定宽高比中宽度比率。例如：aspectRatioX为16，aspectRatioY为9，则限定裁剪结果必须是16:9的图
         * [1050+]
         */
        aspectRatioX?: number;
        /**
         * 用于限定裁剪结果的宽高比，该参数指定宽高比中宽度比率。例如：aspectRatioX为16，aspectRatioY为9，则限定裁剪结果必须是16:9的图
         * [1050+]
         */
        aspectRatioY?: number;
        /**
         * 成功回调
         */
        success?: (data: EditImageSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         * |301|文件路径不存在|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface EditImageSuccessOptions {
        /**
         * 生成的图片的地址
         */
        uri: string;
    }

    /**
     * 打开编辑器来编辑图片。目前支持选择图片范围并裁剪
     */
    function editImage(obj: EditImageOptions): void;

    interface GetExifAttributesOptions {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 成功回调
         */
        success?: (data: GetExifAttributesSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         * |301|文件路径不存在|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface GetExifAttributesSuccessOptions {
        /**
         * 图片地址
         */
        uri: string;
        /**
         * 图片的exif信息
         */
        attributes: ExifAttributes;
    }

    type ExifKey =
        | "Artist"
        | "BitsPerSample"
        | "Compression"
        | "Copyright"
        | "DateTime"
        | "ImageDescription"
        | "ImageLength"
        | "ImageWidth"
        | "JPEGInterchangeFormat"
        | "JPEGInterchangeFormatLength"
        | "Make"
        | "Model"
        | "Orientation"
        | "PhotometricInterpretation"
        | "PlanarConfiguration"
        | "PrimaryChromaticities"
        | "ReferenceBlackWhite"
        | "ResolutionUnit"
        | "RowsPerStrip"
        | "SamplesPerPixel"
        | "Software"
        | "StripByteCounts"
        | "StripOffsets"
        | "TransferFunction"
        | "WhitePoint"
        | "XResolution"
        | "YCbCrCoefficients"
        | "YCbCrPositioning"
        | "YCbCrSubSampling"
        | "YResolution"
        | "ApertureValue"
        | "BrightnessValue"
        | "CFAPattern"
        | "ColorSpace"
        | "ComponentsConfiguration"
        | "CompressedBitsPerPixel"
        | "Contrast"
        | "CustomRendered"
        | "DateTimeDigitized"
        | "DateTimeOriginal"
        | "DeviceSettingDescription"
        | "DigitalZoomRatio"
        | "ExifVersion"
        | "ExposureBiasValue"
        | "ExposureIndex"
        | "ExposureMode"
        | "ExposureProgram"
        | "ExposureTime"
        | "FNumber"
        | "FileSource"
        | "Flash"
        | "FlashEnergy"
        | "FlashpixVersion"
        | "FocalLength"
        | "FocalLengthIn35mmFilm"
        | "FocalPlaneResolutionUnit"
        | "FocalPlaneXResolution"
        | "FocalPlaneYResolution"
        | "GainControl"
        | "ISOSpeedRatings"
        | "ImageUniqueID"
        | "LightSource"
        | "MakerNote"
        | "MaxApertureValue"
        | "MeteringMode"
        | "NewSubfileType"
        | "OECF"
        | "PixelXDimension"
        | "PixelYDimension"
        | "RelatedSoundFile"
        | "Saturation"
        | "SceneCaptureType"
        | "SceneType"
        | "SensingMethod"
        | "Sharpness"
        | "ShutterSpeedValue"
        | "SpatialFrequencyResponse"
        | "SpectralSensitivity"
        | "SubfileType"
        | "SubSecTime"
        | "SubSecTimeDigitized"
        | "SubSecTimeOriginal"
        | "SubjectArea"
        | "SubjectDistance"
        | "SubjectDistanceRange"
        | "SubjectLocation"
        | "UserComment"
        | "WhiteBalance"
        | "GPSAltitude"
        | "GPSAltitudeRef"
        | "GPSAreaInformation"
        | "GPSDOP"
        | "GPSDateStamp"
        | "GPSDestBearing"
        | "GPSDestBearingRef"
        | "GPSDestDistance"
        | "GPSDestDistanceRef"
        | "GPSDestLatitude"
        | "GPSDestLatitudeRef"
        | "GPSDestLongitude"
        | "GPSDestLongitudeRef"
        | "GPSDifferential"
        | "GPSImgDirection"
        | "GPSImgDirectionRef"
        | "GPSLatitude"
        | "GPSLatitudeRef"
        | "GPSLongitude"
        | "GPSLongitudeRef"
        | "GPSMapDatum"
        | "GPSMeasureMode"
        | "GPSProcessingMethod"
        | "GPSSatellites"
        | "GPSSpeed"
        | "GPSSpeedRef"
        | "GPSStatus"
        | "GPSTimeStamp"
        | "GPSTrack"
        | "GPSTrackRef"
        | "GPSVersionID"
        | "InteroperabilityIndex"
        | "ThumbnailImageLength"
        | "ThumbnailImageWidth"
        | "DNGVersion"
        | "DefaultCropSize"
        | "ThumbnailImage"
        | "PreviewImageStart"
        | "PreviewImageLength"
        | "AspectFrame"
        | "SensorBottomBorder"
        | "SensorLeftBorder"
        | "SensorRightBorder"
        | "SensorTopBorder"
        | "ISO"
        | "JpgFromRaw";

    type ExifAttributes = Partial<Record<ExifKey, string | number>>;

    /**
     * 获取图片的exif信息。支持的格式：JPEG,DNG,CR2,NEF,NRW,ARW,RW2,ORF,PEF,SRW,RAF,HEIF
     */
    function getExifAttributes(obj: GetExifAttributesOptions): void;

    interface SetExifAttributesOptions {
        /**
         * 图片地址，可以是数据文件或应用内的资源。如果是应用内资源，必须使用绝对路径
         */
        uri: string;
        /**
         * 要设置的exif属性列表
         */
        attributes: ExifAttributes;
        /**
         * 成功回调
         */
        success?: (data: SetExifAttributesSuccessOptions) => void;
        /**
         * 失败回调
         * @description
         * |错误码|说明|
         * |---|---|
         * |202|参数错误|
         * |300|I/O 错误|
         * |301|文件路径不存在|
         */
        fail?: (data: any, code: number) => void;
        /**
         * 执行结束后的回调
         */
        complete?: () => void;
    }

    interface SetExifAttributesSuccessOptions {
        /**
         * 图片地址
         */
        uri: string;
    }

    /**
     * 设置图片的exif信息。设置操作会直接在所给图片上进行，不会生成新的图片。支持的格式：JPEG
     * [1040+]
     */
    function setExifAttributes(obj: SetExifAttributesOptions): void;
}

declare module "quickapp:@system.image" {
    export * from "@system.image";
}

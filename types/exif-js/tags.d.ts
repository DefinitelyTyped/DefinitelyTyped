export namespace EXIF_TAGS {
    type ExifTags =
        /*************************************
         * Version tags
         * **********************************/
        /** EXIF version */
        | "ExifVersion"
        /** Flashpix format version */
        | "FlashpixVersion"
        /*************************************
         * Colorspace tags
         ************************************/
        /** Color space information tag */
        | "ColorSpace"
        /*************************************
         * Image configuration
         ************************************/
        /** Valid width of meaningful image */
        | "PixelXDimension"
        /** Valid height of meaningful image */
        | "PixelYDimension"
        /** Information about channels */
        | "ComponentsConfiguration"
        /** Compressed bits per pixel */
        | "CompressedBitsPerPixel"
        /*************************************
         * User information
         ************************************/
        /** Any desired information written by the manufacturer */
        | "MakerNote"
        /** Comments by user */
        | "UserComment"
        /*************************************
         * Related file
         ************************************/
        /** Name of related sound file */
        | "RelatedSoundFile"
        /*************************************
         * Date and time
         ************************************/
        /** Date and time when the original image was generated */
        | "DateTimeOriginal"
        /** Date and time when the image was stored digitally */
        | "DateTimeDigitized"
        /** Fractions of seconds for DateTime */
        | "SubsecTime"
        /** Fractions of seconds for DateTimeOriginal */
        | "SubsecTimeOriginal"
        /** Fractions of seconds for DateTimeDigitized */
        | "SubsecTimeDigitized"
        /*************************************
         * Picture-taking conditions
         ************************************/
        /** Exposure time (in seconds) */
        | "ExposureTime"
        /** F number */
        | "FNumber"
        /** Exposure program */
        | "ExposureProgram"
        /** Spectral sensitivity */
        | "SpectralSensitivity"
        /** ISO speed rating */
        | "ISOSpeedRatings"
        /** Optoelectric conversion factor */
        | "OECF"
        /** Shutter speed */
        | "ShutterSpeedValue"
        /** Lens aperture */
        | "ApertureValue"
        /** Value of brightness */
        | "BrightnessValue"
        /** Exposure bias */
        | "ExposureBias"
        /** Smallest F number of lens */
        | "MaxApertureValue"
        /** Distance to subject in meters */
        | "SubjectDistance"
        /** Metering mode */
        | "MeteringMode"
        /** Kind of light source */
        | "LightSource"
        /** Flash status */
        | "Flash"
        /** Location and area of main subject */
        | "SubjectArea"
        /** Focal length of the lens in mm */
        | "FocalLength"
        /** Strobe energy in BCPS */
        | "FlashEnergy"
        /** Spatial frequency response */
        | "SpatialFrequencyResponse"
        /** Number of pixels in width direction per FocalPlaneResolutionUnit */
        | "FocalPlaneXResolution"
        /** Number of pixels in height direction per FocalPlaneResolutionUnit */
        | "FocalPlaneYResolution"
        /** Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution */
        | "FocalPlaneResolutionUnit"
        /** Location of subject in image */
        | "SubjectLocation"
        /** Exposure index selected on camera */
        | "ExposureIndex"
        /** Image sensor export type */
        | "SensingMethod"
        /** Image source (3 == DSC) */
        | "FileSource"
        /** Scene export type (1 == directly photographed) */
        | "Sceneexport type"
        /** Color filter array geometric pattern */
        | "CFAPattern"
        /** Special processing */
        | "CustomRendered"
        /** Exposure mode */
        | "ExposureMode"
        /** 1 = auto white balance, 2 = manual */
        | "WhiteBalance"
        /** Digital zoom ratio */
        | "DigitalZoomRation"
        /** Equivalent foacl length assuming 35mm film camera (in mm) */
        | "FocalLengthIn35mmFilm"
        /** export type of scene */
        | "SceneCaptureexport type"
        /** Degree of overall image gain adjustment */
        | "GainControl"
        /** Direction of contrast processing applied by camera */
        | "Contrast"
        /** Direction of saturation processing applied by camera */
        | "Saturation"
        /** Direction of sharpness processing applied by camera */
        | "Sharpness"
        /** Device setting description */
        | "DeviceSettingDescription"
        /** Distance to subject */
        | "SubjectDistanceRange"
        /*************************************
         * Other tags
         ************************************/
        /** Interoperability IFD Pointer */
        | "InteroperabilityIFDPointer"
        /** Identifier assigned uniquely to each image */
        | "ImageUniqueID";

    type TiffTags =
        | "ImageWidth"
        | "ImageHeight"
        | "ExifIFDPointer"
        | "GPSInfoIFDPointer"
        | "InteroperabilityIFDPointer"
        | "BitsPerSample"
        | "Compression"
        | "PhotometricInterpretation"
        | "Orientation"
        | "SamplesPerPixel"
        | "PlanarConfiguration"
        | "YCbCrSubSampling"
        | "YCbCrPositioning"
        | "XResolution"
        | "YResolution"
        | "ResolutionUnit"
        | "StripOffsets"
        | "RowsPerStrip"
        | "StripByteCounts"
        | "JPEGInterchangeFormat"
        | "JPEGInterchangeFormatLength"
        | "TransferFunction"
        | "WhitePoint"
        | "PrimaryChromaticities"
        | "YCbCrCoefficients"
        | "ReferenceBlackWhite"
        | "DateTime"
        | "ImageDescription"
        | "Make"
        | "Model"
        | "Software"
        | "Artist"
        | "Copyright";

    type GPSTags =
        | "GPSVersionID"
        | "GPSLatitudeRef"
        | "GPSLatitude"
        | "GPSLongitudeRef"
        | "GPSLongitude"
        | "GPSAltitudeRef"
        | "GPSAltitude"
        | "GPSTimeStamp"
        | "GPSSatellites"
        | "GPSStatus"
        | "GPSMeasureMode"
        | "GPSDOP"
        | "GPSSpeedRef"
        | "GPSSpeed"
        | "GPSTrackRef"
        | "GPSTrack"
        | "GPSImgDirectionRef"
        | "GPSImgDirection"
        | "GPSMapDatum"
        | "GPSDestLatitudeRef"
        | "GPSDestLatitude"
        | "GPSDestLongitudeRef"
        | "GPSDestLongitude"
        | "GPSDestBearingRef"
        | "GPSDestBearing"
        | "GPSDestDistanceRef"
        | "GPSDestDistance"
        | "GPSProcessingMethod"
        | "GPSAreaInformation"
        | "GPSDateStamp"
        | "GPSDifferential";

    /** EXIF 2.3 Spec */
    type IFD1Tags =
        | "ImageWidth"
        | "ImageHeight"
        | "BitsPerSample"
        | "Compression"
        | "PhotometricInterpretation"
        | "StripOffsets"
        | "Orientation"
        | "SamplesPerPixel"
        | "RowsPerStrip"
        | "StripByteCounts"
        | "XResolution"
        | "YResolution"
        | "PlanarConfiguration"
        | "ResolutionUnit"
        /** When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat") */
        | "JpegIFOffset"
        /** When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength") */
        | "JpegIFByteCount"
        | "YCbCrCoefficients"
        | "YCbCrSubSampling"
        | "YCbCrPositioning"
        | "ReferenceBlackWhite";

    type ALL = ExifTags | TiffTags | GPSTags | IFD1Tags;
}

export namespace DynamsoftEnums {
    /** Barcode Format */
    enum EnumBarcodeFormat {
        BF_ALL = -32505857,
        BF_AZTEC = 268435456,
        BF_CODABAR = 8,
        BF_CODE_39 = 1,
        BF_CODE_39_EXTENDED = 1024,
        BF_CODE_93 = 4,
        BF_CODE_128 = 2,
        BF_DATAMATRIX = 134217728,
        BF_EAN_8 = 64,
        BF_EAN_13 = 32,
        BF_GS1_COMPOSITE = -2147483648,
        BF_GS1_DATABAR = 260096,
        BF_GS1_DATABAR_EXPANDED = 32768,
        BF_GS1_DATABAR_EXPANDED_STACKED = 65536,
        BF_GS1_DATABAR_LIMITED = 131072,
        BF_GS1_DATABAR_OMNIDIRECTIONAL = 2048,
        BF_GS1_DATABAR_STACKED = 8192,
        BF_GS1_DATABAR_STACKED_OMNIDIRECTIONAL = 16384,
        BF_GS1_DATABAR_TRUNCATED = 4096,
        BF_INDUSTRIAL_25 = 512,
        BF_ITF = 16,
        BF_MAXICODE = 536870912,
        BF_MICRO_PDF417 = 524288,
        BF_MICRO_QR = 1073741824,
        BF_NULL = 0,
        BF_ONED = 2047,
        BF_PATCHCODE = 262144,
        BF_PDF417 = 33554432,
        BF_QR_CODE = 67108864,
        BF_UPC_A = 128,
        BF_UPC_E = 256
    }
    /** Barcode Format 2 */
    enum EnumBarcodeFormat_2 {
        BF2_AUSTRALIANPOST = 8388608,
        BF2_DOTCODE = 2,
        BF2_NONSTANDARD_BARCODE = 1,
        BF2_NULL = 0,
        BF2_PLANET = 4194304,
        BF2_POSTALCODE = 32505856,
        BF2_POSTNET = 2097152,
        BF2_RM4SCC = 16777216,
        BF2_USPSINTELLIGENTMAIL = 1048576
    }
    /** Barcode Color Mode */
    enum EnumBarcodeColourMode {
        BICM_DARK_LIGHT_MIXED = 16,
        BICM_DARK_ON_DARK = 4,
        BICM_DARK_ON_LIGHT = 1,
        BICM_DARK_ON_LIGHT_DARK_SURROUNDING = 32,
        BICM_LIGHT_ON_DARK = 2,
        BICM_LIGHT_ON, _LIGHT = 8,
        BICM_SKIP = 0,
    }
    /** Barcode Complement Mode */
    enum EnumBarcodeComplementMode {
        BCM_AUTO = 1,
        BCM_GENERAL = 2,
        BCM_SKIP = 0
    }
    /** OCR Languages */
    enum EnumDWT_OCRLanguage {
        OCRL_ENG = "eng",
        OCRL_ARA = "ara",
        OCRL_CHI_SIM = "chi_sim",
        OCRL_CHI_TRA = "chi_tra",
        OCRL_HIN = "hin",
        OCRL_URD = "urd",
        OCRL_SPA = "spa",
        OCRL_FRA = "fra",
        OCRL_MSA = "msa",
        OCRL_IND = "ind",
        OCRL_RUS = "rus",
        OCRL_BEN = "ben",
        OCRL_POR = "por",
        OCRL_PAN = "pan",
        OCRL_DEU = "deu",
        OCRL_JPN = "jpn",
        OCRL_FAS = "fas",
        OCRL_SWA = "swa",
        OCRL_JAV = "jav",
        OCRL_TEL = "tel",
        OCRL_TUR = "tur",
        OCRL_KOR = "kor",
        OCRL_MAR = "mar",
        OCRL_TAM = "tam",
        OCRL_VIE = "vie",
        OCRL_ITA = "ita",
        OCRL_THA = "tha"
    }
    /** OCR PageSet Mode */
    enum EnumDWT_OCRPageSetMode {
        OCRPSM_OSD_ONLY = 0,
        PSM_AUTO_OSD = 1,
        PSM_AUTO_ONLY = 2,
        PSM_AUTO = 3,
        PSM_SINGLE_COLUMN = 4,
        PSM_SINGLE_BLOCK_VERT_TEXT = 5,
        PSM_SINGLE_BLOCK = 6,
        PSM_SINGLE_LINE = 7,
        PSM_SINGLE_WORD = 8,
        PSM_CIRCLE_WORD = 9,
        PSM_SINGLE_CHAR = 10
    }
    /** OCR Output Format */
    enum EnumDWT_OCROutputFormat {
        OCROF_TEXT = 0,
        OCROF_PDFPLAINTEXT = 1,
        OCROF_PDFIMAGEOVERTEXT = 2,
        OCROF_PDFPLAINTEXT_PDFX = 3,
        OCROF_PDFIMAGEOVERTEXT_PDFX = 4
    }
    /** OCR Download Type */
    enum EnumDWT_OCRDownloadType {
        OCRDT_Dll = 0,
        OCRDT_LANGUAGE = 1
    }
    /** OCRPro Reconnition module */
    enum EnumDWT_OCRProRecognitionModule {
        OCRPM_AUTO = "AUTO",
        OCRPM_MOSTACCURATE = "MOSTACCURATE",
        OCRPM_BALANCED = "BALANCED",
        OCRPM_FASTEST = "FASTEST"
    }
    /** OCRPro Output Format */
    enum EnumDWT_OCRProOutputFormat {
        OCRPFT_TXTS = "TXTS",
        OCRPFT_TXTCSV = "TXTCSV",
        OCRPFT_TXTF = "TXTF",
        OCRPFT_XML = "XML",
        OCRPFT_IOTPDF = "IOTPDF",
        OCRPFT_IOTPDF_MRC = "IOTPDF_MRC"
    }
    /** OCRPro PDF Version */
    enum EnumDWT_OCRProPDFVersion {
        OCRPPDFV_0 = "1.0",
        OCRPPDFV_1 = "1.1",
        OCRPPDFV_2 = "1.2",
        OCRPPDFV_3 = "1.3",
        OCRPPDFV_4 = "1.4",
        OCRPPDFV_5 = "1.5",
        OCRPPDFV_6 = "1.6",
        OCRPPDFV_7 = "1.7"
    }
    /** OCRPro PDFA Version */
    enum EnumDWT_OCRProPDFAVersion {
        OCRPPDFAV_1A = "pdf/a-1a",
        OCRPPDFAV_1B = "pdf/a-1b",
        OCRPPDFAV_2A = "pdf/a-2a",
        OCRPPDFAV_2B = "pdf/a-2b",
        OCRPPDFAV_2U = "pdf/a-2u",
        OCRPPDFAV_3A = "pdf/a-3a",
        OCRPPDFAV_3B = "pdf/a-3b",
        OCRPPDFAV_3U = "pdf/a-3u"
    }
    /** OCRPro Type */
    enum EnumDWT_OCRProType {
        OCRDT_File = 0,
        OCRDT_Index = 1
    }
    /** OCRPro Find Text Flags */
    enum EnumDWT_OCRFindTextFlags {
        OCRFT_WHOLEWORD = 1,
        OCRFT_MATCHCASE = 2,
        OCRFT_FUZZYMATCH = 4
        // OCRFT_BACKWARD= 8
    }
    /** OCRPro Find Text Action */
    enum EnumDWT_OCRFindTextAction {
        OCRFT_HIGHLIGHT = 0,
        OCRFT_STRIKEOUT = 1,
        OCRFT_MARKFORREDACT = 2
    }
    enum EnumDWT_ConvertMode {
        CM_DEFAULT = 0,
        CM_RENDERALL = 1
    }
    enum EnumErrorCode {
        DBR_1D_LICENSE_INVALID = -10017,
        DBR_AZTEC_LICENSE_INVALID = -10041,
        DBR_BARCODE_FORMAT_INVALID = -10009,
        DBR_BPP_NOT_SUPPORTED = -10007,
        DBR_CUSTOM_MODULESIZE_INVALID = -10025,
        DBR_CUSTOM_REGION_INVALID = -10010,
        DBR_CUSTOM_SIZE_INVALID = -10024,
        DBR_DATAMATRIX_LICENSE_INVALID = -10020,
        DBR_DIB_BUFFER_INVALID = -10018,
        DBR_DOMAIN_NOT_MATCHED = -10039,
        DBR_DOTCODE_LICENSE_INVALID = -10061,
        DBR_DPM_LICENSE_INVALID = -10048,
        DBR_FILETYPE_NOT_SUPPORTED = -10006,
        DBR_FILE_NOT_FOUND = -10005,
        DBR_FRAME_DECODING_THREAD_EXISTS = -10049,
        DBR_GET_MODE_ARGUMENT_ERROR = -10055,
        DBR_GS1_COMPOSITE_LICENSE_INVALID = -10059,
        DBR_GS1_DATABAR_LICENSE_INVALID = -10058,
        DBR_IMAGE_READ_FAILED = -10012,
        DBR_INDEX_INVALID = -10008,
        DBR_IRT_LICENSE_INVALID = -10056,
        DBR_JSON_KEY_INVALID = -10032,
        DBR_JSON_NAME_KEY_MISSING = -10034,
        DBR_JSON_NAME_REFERENCE_INVALID = -10037,
        DBR_JSON_NAME_VALUE_DUPLICATED = -10035,
        DBR_JSON_PARSE_FAILED = -10030,
        DBR_JSON_TYPE_INVALID = -10031,
        DBR_JSON_VALUE_INVALID = -10033,
        DBR_LICENSEKEY_NOT_MATCHED = -10043,
        DBR_LICENSE_CONTENT_INVALID = -10052,
        DBR_LICENSE_DEVICE_RUNS_OUT = -10054,
        DBR_LICENSE_DLL_MISSING = -10042,
        DBR_LICENSE_EXPIRED = -10004,
        DBR_LICENSE_INIT_FAILED = -10045,
        DBR_LICENSE_INVALID = -10003,
        DBR_LICENSE_KEY_INVALID = -10053,
        DBR_MAXICODE_LICENSE_INVALID = -10057,
        DBR_MAX_BARCODE_NUMBER_INVALID = -10011,
        DBR_NO_MEMORY = -10001,
        DBR_NULL_REFERENCE = -10002,
        DBR_PAGE_NUMBER_INVALID = -10023,
        DBR_PARAMETER_VALUE_INVALID = -10038,
        DBR_PATCHCODE_LICENSE_INVALID = -10046,
        DBR_PDF417_LICENSE_INVALID = -10019,
        DBR_PDF_DLL_MISSING = -10022,
        DBR_PDF_READ_FAILED = -10021,
        DBR_POSTALCODE_LICENSE_INVALID = -10047,
        DBR_QR_LICENSE_INVALID = -10016,
        DBR_RECOGNITION_TIMEOUT = -10026,
        DBR_REQUESTED_FAILED = -10044,
        DBR_RESERVEDINFO_NOT_MATCHED = -10040,
        DBR_SET_MODE_ARGUMENT_ERROR = -10051,
        DBR_STOP_DECODING_THREAD_FAILED = -10050,
        DBR_SUCCESS = 0,
        DBR_SYSTEM_EXCEPTION = 1,
        DBR_TEMPLATE_NAME_INVALID = -10036,
        DBR_TIFF_READ_FAILED = -10013,
        DBR_UNKNOWN = -10000
    }
    /** Specifies the video rotate mode on a video capture device. */
    enum EnumDWT_VideoRotateMode {
        /** Don't rotate */
        VRM_NONE = 0,
        /** 90 deg Clockwise */
        VRM_90_DEGREES_CLOCKWISE = 1,
        /** 180 deg Clockwise */
        VRM_180_DEGREES_CLOCKWISE = 2,
        /** 270 deg Clockwise */
        VRM_270_DEGREES_CLOCKWISE = 3,
        /** Flip */
        VRM_FLIP_VERTICAL = 4,
        /** Mirror */
        VRM_FLIP_HORIZONTAL = 5
    }
    /** Specifies video properties on a video capture device. */
    enum EnumDWT_VideoProperty {
        /**
         * Specifies the brightness, also called the black level.
         * For NTSC, the value is expressed in IRE units * 100.
         * For non-NTSC sources, the units are arbitrary, with zero
         * representing blanking and 10,000 representing pure white.
         * Values range from -10,000 to 10,000.
         */
        VP_BRIGHTNESS = 0,
        /** Specifies the contrast, expressed as gain factor * 100. Values range from zero to 10,000. */
        VP_CONTRAST = 1,
        /** Specifies the hue, in degrees * 100. Values range from -180,000 to 180,000 (-180 to +180 degrees). */
        VP_HUE = 2,
        /** Specifies the saturation. Values range from 0 to 10,000. */
        VP_SATURATION = 3,
        /** Specifies the sharpness. Values range from 0 to 100. */
        VP_SHARPNESS = 4,
        /** Specifies the gamma, as gamma * 100. Values range from 1 to 500. */
        VP_GAMMA = 5,
        /** Specifies the color enable setting. The possible values are 0 (off) and 1 (on). */
        VP_COLORENABLE = 6,
        /** Specifies the white balance, as a color temperature in degrees Kelvin. The range of values depends on the device. */
        VP_WHITEBALANCE = 7,
        /** Specifies the backlight compensation setting. Possible values are 0 (off) and 1 (on). */
        VP_BACKLIGHTCOMPENSATION = 8,
        /**
         * Specifies the gain adjustment. Zero is normal.
         * Positive values are brighter and negative values are darker.
         * The range of values depends on the device.
         */
        VP_GAIN = 9
    }

    /** Specifies a setting on a camera. */
    enum EnumDWT_CameraControlProperty {
        /**
         * Specifies the camera's pan setting, in degrees.
         * Values range from -180 to +180, with the default set to zero.
         * Positive values are clockwise from the origin (the camera rotates clockwise when viewed from above),
         * and negative values are counterclockwise from the origin.
         */
        CCP_PAN = 0,
        /**
         * Specifies the camera's tilt setting, in degrees. Values range from -180 to +180, with the default set to zero.
         * Positive values point the imaging plane up, and negative values point the imaging plane down.
         */
        CCP_TILT = 1,
        /**
         * Specifies the camera's roll setting, in degrees. Values range from -180 to +180, with the default set to zero.
         * Positive values cause a clockwise rotation of the camera along the image-viewing axis, and negative values cause a counterclockwise rotation of the camera.
         */
        CCP_ROLL = 2,
        /** Specifies the camera's zoom setting, in millimeters. Values range from 10 to 600, and the default is specific to the device. */
        CCP_ZOOM = 3,
        /**
         * Specifies the exposure setting, in log base 2 seconds. In other words, for values less than zero, the exposure time is 1/2^n seconds,
         * and for values zero or above, the exposure time is 2^n seconds. For example=
         * Value    Seconds
         * -3    1/8
         * -2    1/4
         * -1    1/2
         * 0    1
         * 1    2
         * 2    4
         */
        CCP_EXPOSURE = 4,
        /** Specifies the camera's iris setting, in units of fstop* 10. */
        CCP_IRIS = 5,
        /**
         * Specifies the camera's focus setting, as the distance to the optimally focused target, in millimeters.
         * The range and default value are specific to the device.
         */
        CCP_FOCUS = 6
    }
    /** Border Styles */
    enum EnumDWT_BorderStyle {
        /** No border. */
        TWBS_NONE = 0,
        /** Flat border. */
        TWBS_SINGLEFLAT = 1,
        /** 3D border.   */
        TWBS_SINGLE3D = 2
    }
    /** Capabilities */
    enum EnumDWT_Cap {
        /** Nothing. */
        CAP_NONE = 0,
        /** The application is willing to accept this number of images. */
        CAP_XFERCOUNT = 1,
        /**
         * Allows the application and Source to identify which compression schemes they have in
         * common for Buffered Memory and File transfers.
         * Note for File transfers=
         * Since only certain file formats support compression, this capability must be negotiated after
         * setting the desired file format with ICAP_IMAGEFILEFORMAT.
         */
        ICAP_COMPRESSION = 256,
        /** The type of pixel data that a Source is capable of acquiring (for example, black and white, gray, RGB, etc.). */
        ICAP_PIXELTYPE = 257,
        /**
         * Unless a quantity is dimensionless or uses a specified unit of measure, ICAP_UNITS determines
         * the unit of measure for all quantities.
         */
        ICAP_UNITS = 258,
        /** Allows the application and Source to identify which transfer mechanisms the source supports. */
        ICAP_XFERMECH = 259,
        /** The name or other identifying information about the Author of the image. It may include a copyright string. */
        CAP_AUTHOR = 4096,
        /** A general note about the acquired image. */
        CAP_CAPTION = 4097,
        /**
         * If TRUE, Source must acquire data from the document feeder acquire area and other feeder
         * capabilities can be used. If FALSE, Source must acquire data from the non-feeder acquire area
         * and no other feeder capabilities can be used.
         */
        CAP_FEEDERENABLED = 4098,
        /** Reflect whether there are documents loaded in the Source's feeder. */
        CAP_FEEDERLOADED = 4099,
        /**
         * The date and time the image was acquired.
         * Stored in the form "YYYY/MM/DD HH=mm=SS.sss" where YYYY is the year, MM is the
         * numerical month, DD is the numerical day, HH is the hour, mm is the minute, SS is the second,
         * and sss is the millisecond.
         */
        CAP_TIMEDATE = 4100,
        /**
         * Returns a list of all the capabilities for which the Source will answer inquiries. Does not indicate
         * which capabilities the Source will allow to be set by the application. Some capabilities can only
         * be set if certain setup work has been done so the Source cannot globally answer which
         * capabilities are "set-able."
         */
        CAP_SUPPORTEDCAPS = 4101,
        /** Allows the application and Source to negotiate capabilities to be used in States 5 and 6. */
        CAP_EXTENDEDCAPS = 4102,
        /**
         * If TRUE, the Source will automatically feed the next page from the document feeder after the
         * number of frames negotiated for capture from each page are acquired. CAP_FEEDERENABLED
         * must be TRUE to use this capability.
         */
        CAP_AUTOFEED = 4103,
        /**
         * If TRUE, the Source will eject the current page being acquired from and will leave the feeder
         * acquire area empty.
         * If CAP_AUTOFEED is TRUE, a fresh page will be advanced.
         * CAP_FEEDERENABLED must equal TRUE to use this capability.
         * This capability must have been negotiated as an extended capability to be used in States 5 and 6.
         */
        CAP_CLEARPAGE = 4104,
        /**
         * If TRUE, the Source will eject the current page and advance the next page in the document feeder
         * into the feeder acquire area.
         * If CAP_AUTOFEED is TRUE, the same action just described will occur and CAP_AUTOFEED will
         * remain active.
         * CAP_FEEDERENABLED must equal TRUE to use this capability.
         * This capability must have been negotiated as an extended capability to be used in States 5 and 6.
         */
        CAP_FEEDPAGE = 4105,
        /**
         * If TRUE, the Source will return the current page to the input side of the document feeder and
         * feed the last page from the output side of the feeder back into the acquisition area.
         * If CAP_AUTOFEED is TRUE, automatic feeding will continue after all negotiated frames from this
         * page are acquired.
         * CAP_FEEDERENABLED must equal TRUE to use this capability.
         * This capability must have been negotiated as an extended capability to be used in States 5 and 6.
         */
        CAP_REWINDPAGE = 4106,
        /**
         * If TRUE, the Source will display a progress indicator during acquisition and transfer, regardless
         * of whether the Source's user interface is active. If FALSE, the progress indicator will be
         * suppressed if the Source's user interface is inactive.
         * The Source will continue to display device-specific instructions and error messages even with
         * the Source user interface and progress indicators turned off.
         */
        CAP_INDICATORS = 4107,
        /**
         * Returns a list of all the capabilities for which the Source will answer inquiries. Does not indicate
         * which capabilities the Source will allow to be set by the application. Some capabilities can only
         * be set if certain setup work has been done so the Source cannot globally answer which
         * capabilities are "set-able."
         */
        CAP_SUPPORTEDCAPSEXT = 4108,
        /** This capability determines whether the device has a paper sensor that can detect documents on the ADF or Flatbed. */
        CAP_PAPERDETECTABLE = 4109,
        /**
         * If TRUE, indicates that this Source supports acquisition with the UI disabled; i.e.,
         * TW_USERINTERFACE's ShowUI field can be set to FALSE. If FALSE, indicates that this Source
         * can only support acquisition with the UI enabled.
         */
        CAP_UICONTROLLABLE = 4110,
        /**
         * If TRUE, the physical hardware (e.g., scanner, digital camera, image database, etc.) that
         * represents the image source is attached, powered on, and communicating.
         */
        CAP_DEVICEONLINE = 4111,
        /**
         * This capability is intended to boost the performance of a Source. The fundamental assumption
         * behind AutoScan is that the device is able to capture the number of images indicated by the
         * value of CAP_XFERCOUNT without waiting for the Application to request the image transfers.
         * This is only possible if the device has internal buffers capable of caching the images it captures.
         * The default behavior is undefined, because some high volume devices are incapable of anything
         * but CAP_AUTOSCAN being equal to TRUE. However, if a Source supports FALSE, it should use it
         * as the mandatory default, since this best describes the behavior of pre-1.8 TWAIN Applications.
         */
        CAP_AUTOSCAN = 4112,
        /**
         * Allows an application to request the delivery of thumbnail representations for the set of images
         * that are to be delivered.
         * Setting CAP_THUMBNAILSENABLED to TRUE turns on thumbnail mode. Images transferred
         * thereafter will be sent at thumbnail size (exact thumbnail size is determined by the Data Source).
         * Setting this capability to FALSE turns thumbnail mode off and returns full size images.
         */
        CAP_THUMBNAILSENABLED = 4113,
        /**
         * This indicates whether the scanner supports duplex. If so, it further indicates whether one-path
         * or two-path duplex is supported.
         */
        CAP_DUPLEX = 4114,
        /**
         * The user can set the duplex option to be TRUE or FALSE. If TRUE, the scanner scans both sides
         * of a paper; otherwise, the scanner will scan only one side of the image.
         */
        CAP_DUPLEXENABLED = 4115,
        /** Allows an application to query a source to see if it implements the new user interface settings dialog.  */
        CAP_ENABLEDSUIONLY = 4116,
        CAP_CUSTOMDSDATA = 4117,
        /**
         * Allows the application to specify the starting endorser / imprinter number. All other endorser/
         * imprinter properties should be handled through the data source's user interface.
         * The user can set the starting number for the endorser.
         */
        CAP_ENDORSER = 4118,
        /** Turns specific audible alarms on and off. */
        CAP_ALARMS = 4120,
        /**
         * The volume of a device's audible alarm. Note that this control affects the volume of all alarms;
         * no specific volume control for individual types of alarms is provided.
         */
        CAP_ALARMVOLUME = 4121,
        /**
         * The number of images to automatically capture. This does not refer to the number of images to
         * be sent to the Application, use CAP_XFERCOUNT for that.
         */
        CAP_AUTOMATICCAPTURE = 4122,
        /**
         * For automatic capture, this value selects the number of milliseconds before the first picture is to
         * be taken, or the first image is to be scanned.
         */
        CAP_TIMEBEFOREFIRSTCAPTURE = 4123,
        /** For automatic capture, this value selects the milliseconds to wait between pictures taken, or images scanned. */
        CAP_TIMEBETWEENCAPTURES = 4124,
        /** CapGet() reports the presence of data in the scanner's buffers. CapSet() with a value of TWCB_CLEAR immediately clears the buffers. */
        CAP_CLEARBUFFERS = 4125,
        /** Describes the number of pages that the scanner can buffer when CAP_AUTOSCAN is enabled. */
        CAP_MAXBATCHBUFFERS = 4126,
        /**
         * The date and time of the device's clock.
         * Managed in the form "YYYY/MM/DD HH=mm=SS=sss" where YYYY is the year, MM is the
         * numerical month, DD is the numerical day, HH is the hour, mm is the minute, SS is the second,
         * and sss is the millisecond.
         */
        CAP_DEVICETIMEDATE = 4127,
        /** CapGet() reports the kinds of power available to the device. CapGetCurrent() reports the current power supply in use. */
        CAP_POWERSUPPLY = 4128,
        /** This capability queries the Source for UI support for preview mode. If TRUE, the Source supports preview UI. */
        CAP_CAMERAPREVIEWUI = 4129,
        /**
         * A string containing the serial number of the currently selected device in the Source. Multiple
         * devices may all report the same serial number.
         */
        CAP_SERIALNUMBER = 4132,
        /**
         * CapGet() returns the current list of available printer devices, along with the one currently being used for negotiation.
         * CapSet() selects the current device for negotiation, and optionally constrains the list.
         * Top/Bottom refers to duplex devices, and indicates if the printer is writing on the top or the bottom of the sheet of paper.
         * Simplex devices use the top settings. Before/After indicates whether printing occurs before or after the sheet of paper has been scanned.
         */
        CAP_PRINTER = 4134,
        /** Turns the current CAP_PRINTER device on or off. */
        CAP_PRINTERENABLED = 4135,
        /** The User can set the starting number for the current CAP_PRINTER device. */
        CAP_PRINTERINDEX = 4136,
        /**
         * Specifies the appropriate current CAP_PRINTER device mode.
         * Note=
         * O TWPM_SINGLESTRING specifies that the printed text will consist of a single string.
         * O TWPM _MULTISTRING specifies that the printed text will consist of an enumerated list of
         * strings to be printed in order.
         * O TWPM _COMPOUNDSTRING specifies that the printed string will consist of a compound of a
         * String followed by a value followed by a suffix string.
         */
        CAP_PRINTERMODE = 4137,
        /**
         * Specifies the string(s) that are to be used in the string component when the current
         * CAP_PRINTER device is enabled.
         */
        CAP_PRINTERSTRING = 4138,
        /** Specifies the string that shall be used as the current CAP_PRINTER device's suffix. */
        CAP_PRINTERSUFFIX = 4139,
        /**
         * Allows Application and Source to identify which languages they have in common for the exchange of string data,
         * and to select the language of the internal UI. Since the TWLG_xxxx codes include language and country data, there is no separate
         * capability for selecting the country.
         */
        CAP_LANGUAGE = 4140,
        /**
         * Helps the Application determine any special actions it may need to take when negotiating
         * frames with the Source. Allowed values are listed in <see cref="TWCapFeederAlignment"/>.
         * TWFA_NONE= The alignment is free-floating. Applications should assume
         * that the origin for frames is on the left.
         * TWFA_LEFT= The alignment is to the left.
         * TWFA_CENTER= The alignment is centered. This means that the paper will
         * be fed in the middle of the ICAP_PHYSICALWIDTH of the
         * device. If this is set, then the Application should calculate
         * any frames with a left offset of zero.
         * TWFA_RIGHT= The alignment is to the right.
         */
        CAP_FEEDERALIGNMENT = 4141,
        /**
         * TWFO_FIRSTPAGEFIRST if the feeder starts with the top of the first page.
         * TWFO_LASTPAGEFIRST is the feeder starts with the top of the last page.
         */
        CAP_FEEDERORDER = 4142,
        /**
         * Indicates whether the physical hardware (e.g. scanner, digital camera) is capable of acquiring
         * multiple images of the same page without changes to the physical registration of that page.
         */
        CAP_REACQUIREALLOWED = 4144,
        /** The minutes of battery power remaining to the device. */
        CAP_BATTERYMINUTES = 4146,
        /** When used with CapGet(), return the percentage of battery power level on camera. If -1 is returned, it indicates that the battery is not present.  */
        CAP_BATTERYPERCENTAGE = 4147,
        /** Added 1.91  */
        CAP_CAMERASIDE = 4148,
        /** Added 1.91   */
        CAP_SEGMENTED = 4149,
        /** Added 2.0  */
        CAP_CAMERAENABLED = 4150,
        /** Added 2.0    */
        CAP_CAMERAORDER = 4151,
        /** Added 2.0  */
        CAP_MICRENABLED = 4152,
        /** Added 2.0   */
        CAP_FEEDERPREP = 4153,
        /** Added 2.0  */
        CAP_FEEDERPOCKET = 4154,
        /** Added 2.1  */
        CAP_AUTOMATICSENSEMEDIUM = 4155,
        /** Added 2.1  */
        CAP_CUSTOMINTERFACEGUID = 4156,
        /** TRUE enables and FALSE disables the Source's Auto-brightness function (if any). */
        ICAP_AUTOBRIGHT = 4352,
        /** The brightness values available within the Source. */
        ICAP_BRIGHTNESS = 4353,
        /** The contrast values available within the Source. */
        ICAP_CONTRAST = 4355,
        /** Specifies the square-cell halftone (dithering) matrix the Source should use to halftone the image. */
        ICAP_CUSTHALFTONE = 4356,
        /** Specifies the exposure time used to capture the image, in seconds. */
        ICAP_EXPOSURETIME = 4357,
        /**
         * Describes the color characteristic of the subtractive filter applied to the image data.
         * Multiple filters may be applied to a single acquisition.
         */
        ICAP_FILTER = 4358,
        /** Specifies whether or not the image was acquired using a flash. */
        ICAP_FLASHUSED = 4359,
        /** Gamma correction value for the image data. */
        ICAP_GAMMA = 4360,
        /** A list of names of the halftone patterns available within the Source. */
        ICAP_HALFTONES = 4361,
        /**
         * Specifies which value in an image should be interpreted as the lightest "highlight." All values
         * "lighter" than this value will be clipped to this value. Whether lighter values are smaller or
         * larger can be determined by examining the Current value of ICAP_PIXELFLAVOR.
         */
        ICAP_HIGHLIGHT = 4362,
        /**
         * Informs the application which file formats the Source can generate (CapGet()). Tells the Source which file formats the application can handle (CapSet()).
         * TWFF_TIFF Used for document
         * TWFF_PICT Native Macintosh
         * TWFF_BMP Native Microsoft
         * TWFF_XBM Used for document
         * TWFF_JFIF Wrapper for JPEG
         * TWFF_FPX FlashPix, used with digital
         * TWFF_TIFFMULTI Multi-page TIFF files
         * TWFF_PNG An image format standard intended for use on the web, replaces GIF
         * TWFF_SPIFF A standard from JPEG, intended to replace JFIF, also supports JBIG
         * TWFF_EXIF File format for use with digital cameras.
         */
        ICAP_IMAGEFILEFORMAT = 4364,
        /** TRUE means the lamp is currently, or should be set to ON. Sources may not support CapSet() operations.  */
        ICAP_LAMPSTATE = 4365,
        /** Describes the general color characteristic of the light source used to acquire the image. */
        ICAP_LIGHTSOURCE = 4366,
        /**
         * Defines which edge of the "paper" the image's "top" is aligned with. This information is used to adjust the frames to match the
         * scanning orientation of the paper. For instance, if an ICAP_SUPPORTEDSIZE of TWSS_ISOA4 has been negotiated,
         * and ICAP_ORIENTATION is set to TWOR_LANDSCAPE, then the Source must rotate the frame it downloads to the scanner to reflect the
         * orientation of the paper. Please note that setting ICAP_ORIENTATION does not affect the values reported by ICAP_FRAMES;
         * it just causes the Source to use them in a different way. The upper-left of the image is defined as the location where both the primary and
         * secondary scans originate. (The X axis is the primary scan direction and the Y axis is the secondary scan direction.)
         * For a flatbed scanner, the light bar moves in the secondary scan direction. For a handheld scanner, the scanner is drug in the
         * secondary scan direction. For a digital camera, the secondary direction is the vertical axis when the viewed image is considered upright.
         */
        ICAP_ORIENTATION = 4368,
        /** The maximum physical width (X-axis) the Source can acquire (measured in units of ICAP_UNITS). */
        ICAP_PHYSICALWIDTH = 4369,
        /** The maximum physical height (Y-axis) the Source can acquire (measured in units of ICAP_UNITS). */
        ICAP_PHYSICALHEIGHT = 4370,
        /**
         * Specifies which value in an image should be interpreted as the darkest "shadow." All values
         * "darker" than this value will be clipped to this value.
         */
        ICAP_SHADOW = 4371,
        /** The list of frames the Source will acquire on each page. */
        ICAP_FRAMES = 4372,
        /**
         * The native optical resolution along the X-axis of the device being controlled by the Source. Most
         * devices will respond with a single value (TW_ONEVALUE).
         * This is NOT a list of all resolutions that can be generated by the device. Rather, this is the
         * resolution of the device's optics. Measured in units of pixels per unit as defined by
         * ICAP_UNITS (pixels per TWUN_PIXELS yields dimensionless data).
         */
        ICAP_XNATIVERESOLUTION = 4374,
        /**
         * The native optical resolution along the Y-axis of the device being controlled by the Source.
         * Measured in units of pixels per unit as defined by ICAP_UNITS (pixels per TWUN_PIXELS
         * yields dimensionless data).
         */
        ICAP_YNATIVERESOLUTION = 4375,
        /**
         * All the X-axis resolutions the Source can provide.
         * Measured in units of pixels per unit as defined by ICAP_UNITS (pixels per TWUN_PIXELS
         * yields dimensionless data). That is, when the units are TWUN_PIXELS, both
         * ICAP_XRESOLUTION and ICAP_YRESOLUTION shall report 1 pixel/pixel. Some data sources
         * like to report the actual number of pixels that the device reports, but that response is more
         * appropriate in ICAP_PHYSICALHEIGHT and ICAP_PHYSICALWIDTH.
         */
        ICAP_XRESOLUTION = 4376,
        /**
         * All the Y-axis resolutions the Source can provide.
         * Measured in units of pixels per unit as defined by ICAP_UNITS (pixels per TWUN_PIXELS
         * yields dimensionless data). That is, when the units are TWUN_PIXELS, both
         * ICAP_XRESOLUTION and ICAP_YRESOLUTION shall report 1 pixel/pixel. Some data sources
         * like to report the actual number of pixels that the device reports, but that response is more
         * appropriate in ICAP_PHYSICALHEIGHT and ICAP_PHYSICALWIDTH.
         */
        ICAP_YRESOLUTION = 4377,
        /**
         * The maximum number of frames the Source can provide or the application can accept per page.
         * This is a bounding capability only. It does not establish current or future behavior.
         */
        ICAP_MAXFRAMES = 4378,
        /** This is used with buffered memory transfers. If TRUE, Source can provide application with tiled image data. */
        ICAP_TILES = 4379,
        /**
         * Specifies how the bytes in an image are filled by the Source. TWBO_MSBFIRST indicates that the leftmost bit in the byte (usually bit 7) is
         * the byte's Most Significant Bit.
         */
        ICAP_BITORDER = 4380,
        /**
         * Used for CCITT Group 3 2-dimensional compression. The 'K' factor indicates how often the
         * new compression baseline should be re-established. A value of 2 or 4 is common in facsimile
         * communication. A value of zero in this field will indicate an infinite K factor—the baseline is
         * only calculated at the beginning of the transfer.
         */
        ICAP_CCITTKFACTOR = 4381,
        /** Describes whether the image was captured transmissively or reflectively. */
        ICAP_LIGHTPATH = 4382,
        /** Sense of the pixel whose numeric value is zero (minimum data value).  */
        ICAP_PIXELFLAVOR = 4383,
        /**
         * Allows the application and Source to identify which color data formats are available. There are
         * two options, "planar" and "chunky."
         */
        ICAP_PLANARCHUNKY = 4384,
        /**
         * How the Source can/should rotate the scanned image data prior to transfer. This doesn't use
         * ICAP_UNITS. It is always measured in degrees. Any applied value is additive with any
         * rotation specified in ICAP_ORIENTATION.
         */
        ICAP_ROTATION = 4385,
        /**
         * For devices that support fixed frame sizes.
         * Defined sizes match typical page sizes. This specifies the size(s) the Source can/should use to acquire image data.
         */
        ICAP_SUPPORTEDSIZES = 4386,
        /**
         * Specifies the dividing line between black and white. This is the value the Source will use to
         * threshold, if needed, when ICAP_PIXELTYPE=TWPT_BW.
         * The value is normalized so there are no units of measure associated with this ICAP.
         */
        ICAP_THRESHOLD = 4387,
        /**
         * All the X-axis scaling values available. A value of '1.0' is equivalent to 100% scaling.
         * Do not use values less than or equal to zero.
         */
        ICAP_XSCALING = 4388,
        /**
         * All the Y-axis scaling values available. A value of '1.0' is equivalent to 100% scaling. Do not use values less than or equal to zero.
         * There are no units inherent with this data as it is normalized to 1.0 being "unscaled."
         */
        ICAP_YSCALING = 4389,
        /** Used for CCITT data compression only. Indicates the bit order representation of the stored compressed codes. */
        ICAP_BITORDERCODES = 4390,
        /**
         * Used only for CCITT data compression. Specifies whether the compressed codes' pixel "sense"
         * will be inverted from the Current value of ICAP_PIXELFLAVOR prior to transfer.
         */
        ICAP_PIXELFLAVORCODES = 4391,
        /**
         * Allows the application and Source to agree upon a common set of color descriptors that are
         * made available by the Source. This ICAP is only useful for JPEG-compressed buffered memory image transfers.
         */
        ICAP_JPEGPIXELTYPE = 4392,
        /** Used only with CCITT data compression. Specifies the minimum number of words of compressed codes (compressed data) to be transmitted per line. */
        ICAP_TIMEFILL = 4394,
        /**
         * Specifies the pixel bit depths for the Current value of ICAP_PIXELTYPE. For example, when
         * using ICAP_PIXELTYPE=TWPT_GRAY, this capability specifies whether this is 8-bit gray or 4-bit gray.
         * This depth applies to all the data channels (for instance, the R, G, and B channels will all have
         * this same bit depth for RGB data).
         */
        ICAP_BITDEPTH = 4395,
        /**
         * Specifies the Reduction Method the Source should use to reduce the bit depth of the data. Most
         * commonly used with ICAP_PIXELTYPE=TWPT_BW to reduce gray data to black and white.
         */
        ICAP_BITDEPTHREDUCTION = 4396,
        /**
         * If TRUE the Source will issue a MSG_XFERREADY before starting the scan.
         * Note= The Source may need to scan the image before initiating the transfer.
         * This is the case if the scanned image is rotated or merged with another scanned image.
         */
        ICAP_UNDEFINEDIMAGESIZE = 4397,
        /**
         * Allows the application to query the data source to see if it supports extended image attribute capabilities,
         * such as Barcode Recognition, Shaded Area Detection and Removal, Skew detection and Removal, and so on.
         */
        ICAP_EXTIMAGEINFO = 4399,
        /** Allows the source to define the minimum height (Y-axis) that the source can acquire. */
        ICAP_MINIMUMHEIGHT = 4400,
        /** Allows the source to define theminimum width (X-axis) that the source can acquire. */
        ICAP_MINIMUMWIDTH = 4401,
        /**
         * Use this capability to have the Source discard blank images. The Application never sees these
         * images during the scanning session.
         * TWBP_DISABLE – this must be the default state for the Source. It indicates that all images will
         * be delivered to the Application, none of them will be discarded.
         * TWBP_AUTO – if this is used, then the Source will decide if an image is blank or not and discard
         * as appropriate.
         * If the specified value is a positive number in the range 0 to 231–1, then this capability will use it
         * as the byte size cutoff point to identify which images are to be discarded. If the size of the image
         * is less than or equal to this value, then it will be discarded. If the size of the image is greater
         * than this value, then it will be kept so that it can be transferred to the Application.
         */
        ICAP_AUTODISCARDBLANKPAGES = 4404,
        /**
         * Flip rotation is used to properly orient images that flip orientation every other image.
         * TWFR_BOOK The images to be scanned are viewed in book form, flipping each page from left to right or right to left.
         * TWFR_FANFOLD The images to be scanned are viewed in fanfold paper style, flipping each page up or down.
         */
        ICAP_FLIPROTATION = 4406,
        /** Turns bar code detection on and off. */
        ICAP_BARCODEDETECTIONENABLED = 4407,
        /** Provides a list of bar code types that can be detected by the current Data Source. */
        ICAP_SUPPORTEDBARCODETYPES = 4408,
        /** The maximum number of supported search priorities. */
        ICAP_BARCODEMAXSEARCHPRIORITIES = 4409,
        /** A prioritized list of bar code types dictating the order in which bar codes will be sought. */
        ICAP_BARCODESEARCHPRIORITIES = 4410,
        /** Restricts bar code searching to certain orientations, or prioritizes one orientation over the other. */
        ICAP_BARCODESEARCHMODE = 4411,
        /** Restricts the number of times a search will be retried if none are found on each page. */
        ICAP_BARCODEMAXRETRIES = 4412,
        /** Restricts the total time spent on searching for a bar code on each page. */
        ICAP_BARCODETIMEOUT = 4413,
        /** When used with CapGet(), returns all camera supported lens zooming range.  */
        ICAP_ZOOMFACTOR = 4414,
        /** Turns patch code detection on and off. */
        ICAP_PATCHCODEDETECTIONENABLED = 4415,
        /** A list of patch code types that may be detected by the current Data Source. */
        ICAP_SUPPORTEDPATCHCODETYPES = 4416,
        /** The maximum number of supported search priorities. */
        ICAP_PATCHCODEMAXSEARCHPRIORITIES = 4417,
        /** A prioritized list of patch code types dictating the order in which patch codes will be sought. */
        ICAP_PATCHCODESEARCHPRIORITIES = 4418,
        /** Restricts patch code searching to certain orientations, or prioritizes one orientation over the other. */
        ICAP_PATCHCODESEARCHMODE = 4419,
        /** Restricts the number of times a search will be retried if none are found on each page. */
        ICAP_PATCHCODEMAXRETRIES = 4420,
        /** Restricts the total time spent on searching for a patch code on each page. */
        ICAP_PATCHCODETIMEOUT = 4421,
        /**
         * For devices that support flash. CapSet() selects the flash to be used (if any). CapGet() reports the current setting.
         * This capability replaces ICAP_FLASHUSED, which is only able to negotiate the flash being on or off.
         */
        ICAP_FLASHUSED2 = 4422,
        /** For devices that support image enhancement filtering. This capability selects the algorithm used to improve the quality of the image. */
        ICAP_IMAGEFILTER = 4423,
        /** For devices that support noise filtering. This capability selects the algorithm used to remove noise. */
        ICAP_NOISEFILTER = 4424,
        /**
         * Overscan is used to scan outside of the boundaries described by ICAP_FRAMES, and is used to help acquire image data that
         * may be lost because of skewing.
         * This is primarily of use for transport scanners which rely on edge detection to begin scanning.
         * If overscan is supported, then the device is capable of scanning in the inter-document gap to get the skewed image information.
         */
        ICAP_OVERSCAN = 4425,
        /** Turns automatic border detection on and off. */
        ICAP_AUTOMATICBORDERDETECTION = 4432,
        /** Turns automatic deskew correction on and off. */
        ICAP_AUTOMATICDESKEW = 4433,
        /**
         * When TRUE this capability depends on intelligent features within the Source to automatically
         * rotate the image to the correct position.
         */
        ICAP_AUTOMATICROTATE = 4434,
        /** Added 1.9  */
        ICAP_JPEGQUALITY = 4435,
        /** Added 1.91   */
        ICAP_FEEDERTYPE = 4436,
        /** Added 1.91  */
        ICAP_ICCPROFILE = 4437,
        /** Added 2.0   */
        ICAP_AUTOSIZE = 4438,
        /** Added 2.1  */
        ICAP_AUTOMATICCROPUSESFRAME = 4439,
        /** Added 2.1  */
        ICAP_AUTOMATICLENGTHDETECTION = 4440,
        /** Added 2.1  */
        ICAP_AUTOMATICCOLORENABLED = 4441,
        /** Added 2.1  */
        ICAP_AUTOMATICCOLORNONCOLORPIXELTYPE = 4442,
        /** Added 2.1  */
        ICAP_COLORMANAGEMENTENABLED = 4443,
        /** Added 2.1  */
        ICAP_IMAGEMERGE = 4444,
        /** Added 2.1  */
        ICAP_IMAGEMERGEHEIGHTTHRESHOLD = 4445,
        /** Added 2.1   */
        ICAP_SUPPORTEDEXTIMAGEINFO = 4446
    }
    /** ICAP_BITORDER values. */
    enum EnumDWT_CapBitOrder {
        TWBO_LSBFIRST = 0,
        /** Indicates that the leftmost bit in the byte (usually bit 7) is the byte's Most Significant Bit. */
        TWBO_MSBFIRST = 1
    }
    /** ICAP_BITDEPTHREDUCTION values. */
    enum EnumDWT_CapBitdepthReduction {
        TWBR_THRESHOLD = 0,
        TWBR_HALFTONE = 1,
        TWBR_CUSTHALFTONE = 2,
        TWBR_DIFFUSION = 3
    }
    /** CAP_FEEDERALIGNMENT values. */
    enum EnumDWT_CapFeederAlignment {
        /** The alignment is free-floating. Applications should assume that the origin for frames is on the left. */
        TWFA_NONE = 0,
        /** The alignment is to the left. */
        TWFA_LEFT = 1,
        /**
         * The alignment is centered. This means that the paper will be fed in the middle of
         * the ICAP_PHYSICALWIDTH of the device. If this is set, then the Application should
         * calculate any frames with a left offset of zero.
         */
        TWFA_CENTER = 2,
        /** The alignment is to the right. */
        TWFA_RIGHT = 3
    }
    /** CAP_FEEDERORDER values. */
    enum EnumDWT_CapFeederOrder {
        /** The feeder starts with the top of the first page. */
        TWFO_FIRSTPAGEFIRST = 0,
        /** The feeder starts with the top of the last page. */
        TWFO_LASTPAGEFIRST = 1
    }
    /** ICAP_FILTER values. */
    enum EnumDWT_CapFilterType {
        TWFT_RED = 0,
        TWFT_GREEN = 1,
        TWFT_BLUE = 2,
        TWFT_NONE = 3,
        TWFT_WHITE = 4,
        TWFT_CYAN = 5,
        TWFT_MAGENTA = 6,
        TWFT_YELLOW = 7,
        TWFT_BLACK = 8
    }
    /** ICAP_FLASHUSED2 values. */
    enum EnumDWT_CapFlash {
        TWFL_NONE = 0,
        TWFL_OFF = 1,
        TWFL_ON = 2,
        TWFL_AUTO = 3,
        TWFL_REDEYE = 4
    }
    /** ICAP_FLIPROTATION values. */
    enum EnumDWT_CapFlipRotation {
        /** The images to be scanned are viewed in book form, flipping each page from left to right or right to left. */
        TWFR_BOOK = 0,
        /** The images to be scanned are viewed in fanfold paper style, flipping each page up or down. */
        TWFR_FANFOLD = 1
    }
    /** ICAP_IMAGEFILTER values. */
    enum EnumDWT_CapImageFilter {
        TWIF_NONE = 0,
        TWIF_AUTO = 1,
        /** Good for halftone images. */
        TWIF_LOWPASS = 2,
        /** Good for improving text. */
        TWIF_BANDPASS = 3,
        /** Good for improving fine lines. */
        TWIF_HIGHPASS = 4,
        TWIF_TEXT = 3,
        TWIF_FINELINE = 4
    }
    /** CAP_LANGUAGE values. */
    enum EnumDWT_CapLanguage {
        /** Danish      */
        TWLG_DAN = 0,
        /** Dutch       */
        TWLG_DUT = 1,
        /** International English   */
        TWLG_ENG = 2,
        /** French Canadian         */
        TWLG_FCF = 3,
        /** Finnish     */
        TWLG_FIN = 4,
        /** French      */
        TWLG_FRN = 5,
        /** German      */
        TWLG_GER = 6,
        /** Icelandic   */
        TWLG_ICE = 7,
        /** Italian      */
        TWLG_ITN = 8,
        /** Norwegian   */
        TWLG_NOR = 9,
        /** Portuguese  */
        TWLG_POR = 10,
        /** Spanish     */
        TWLG_SPA = 11,
        /** Swedish     */
        TWLG_SWE = 12,
        /** U.S. English            */
        TWLG_USA = 13,
        /** Added for 1.8  */
        TWLG_USERLOCALE = -1,
        TWLG_AFRIKAANS = 14,
        TWLG_ALBANIA = 15,
        TWLG_ARABIC = 16,
        TWLG_ARABIC_ALGERIA = 17,
        TWLG_ARABIC_BAHRAIN = 18,
        TWLG_ARABIC_EGYPT = 19,
        TWLG_ARABIC_IRAQ = 20,
        TWLG_ARABIC_JORDAN = 21,
        TWLG_ARABIC_KUWAIT = 22,
        TWLG_ARABIC_LEBANON = 23,
        TWLG_ARABIC_LIBYA = 24,
        TWLG_ARABIC_MOROCCO = 25,
        TWLG_ARABIC_OMAN = 26,
        TWLG_ARABIC_QATAR = 27,
        TWLG_ARABIC_SAUDIARABIA = 28,
        TWLG_ARABIC_SYRIA = 29,
        TWLG_ARABIC_TUNISIA = 30,
        /** United Arabic Emirates  */
        TWLG_ARABIC_UAE = 31,
        TWLG_ARABIC_YEMEN = 32,
        TWLG_BASQUE = 33,
        TWLG_BYELORUSSIAN = 34,
        TWLG_BULGARIAN = 35,
        TWLG_CATALAN = 36,
        TWLG_CHINESE = 37,
        TWLG_CHINESE_HONGKONG = 38,
        /** People's Republic of China  */
        TWLG_CHINESE_PRC = 39,
        TWLG_CHINESE_SINGAPORE = 40,
        TWLG_CHINESE_SIMPLIFIED = 41,
        TWLG_CHINESE_TAIWAN = 42,
        TWLG_CHINESE_TRADITIONAL = 43,
        TWLG_CROATIA = 44,
        TWLG_CZECH = 45,
        TWLG_DANISH = 0,
        TWLG_DUTCH = 1,
        TWLG_DUTCH_BELGIAN = 46,
        TWLG_ENGLISH = 2,
        TWLG_ENGLISH_AUSTRALIAN = 47,
        TWLG_ENGLISH_CANADIAN = 48,
        TWLG_ENGLISH_IRELAND = 49,
        TWLG_ENGLISH_NEWZEALAND = 50,
        TWLG_ENGLISH_SOUTHAFRICA = 51,
        TWLG_ENGLISH_UK = 52,
        TWLG_ENGLISH_USA = 13,
        TWLG_ESTONIAN = 53,
        TWLG_FAEROESE = 54,
        TWLG_FARSI = 55,
        TWLG_FINNISH = 4,
        TWLG_FRENCH = 5,
        TWLG_FRENCH_BELGIAN = 56,
        TWLG_FRENCH_CANADIAN = 3,
        TWLG_FRENCH_LUXEMBOURG = 57,
        TWLG_FRENCH_SWISS = 58,
        TWLG_GERMAN = 6,
        TWLG_GERMAN_AUSTRIAN = 59,
        TWLG_GERMAN_LUXEMBOURG = 60,
        TWLG_GERMAN_LIECHTENSTEIN = 61,
        TWLG_GERMAN_SWISS = 62,
        TWLG_GREEK = 63,
        TWLG_HEBREW = 64,
        TWLG_HUNGARIAN = 65,
        TWLG_ICELANDIC = 7,
        TWLG_INDONESIAN = 66,
        TWLG_ITALIAN = 8,
        TWLG_ITALIAN_SWISS = 67,
        TWLG_JAPANESE = 68,
        TWLG_KOREAN = 69,
        TWLG_KOREAN_JOHAB = 70,
        TWLG_LATVIAN = 71,
        TWLG_LITHUANIAN = 72,
        TWLG_NORWEGIAN = 9,
        TWLG_NORWEGIAN_BOKMAL = 73,
        TWLG_NORWEGIAN_NYNORSK = 74,
        TWLG_POLISH = 75,
        TWLG_PORTUGUESE = 10,
        TWLG_PORTUGUESE_BRAZIL = 76,
        TWLG_ROMANIAN = 77,
        TWLG_RUSSIAN = 78,
        TWLG_SERBIAN_LATIN = 79,
        TWLG_SLOVAK = 80,
        TWLG_SLOVENIAN = 81,
        TWLG_SPANISH = 11,
        TWLG_SPANISH_MEXICAN = 82,
        TWLG_SPANISH_MODERN = 83,
        TWLG_SWEDISH = 12,
        TWLG_THAI = 84,
        TWLG_TURKISH = 85,
        TWLG_UKRANIAN = 86,
        /** More stuff added for 1.8  */
        TWLG_ASSAMESE = 87,
        TWLG_BENGALI = 88,
        TWLG_BIHARI = 89,
        TWLG_BODO = 90,
        TWLG_DOGRI = 91,
        TWLG_GUJARATI = 92,
        TWLG_HARYANVI = 93,
        TWLG_HINDI = 94,
        TWLG_KANNADA = 95,
        TWLG_KASHMIRI = 96,
        TWLG_MALAYALAM = 97,
        TWLG_MARATHI = 98,
        TWLG_MARWARI = 99,
        TWLG_MEGHALAYAN = 100,
        TWLG_MIZO = 101,
        TWLG_NAGA = 102,
        TWLG_ORISSI = 103,
        TWLG_PUNJABI = 104,
        TWLG_PUSHTU = 105,
        TWLG_SERBIAN_CYRILLIC = 106,
        TWLG_SIKKIMI = 107,
        TWLG_SWEDISH_FINLAND = 108,
        TWLG_TAMIL = 109,
        TWLG_TELUGU = 110,
        TWLG_TRIPURI = 111,
        TWLG_URDU = 112,
        TWLG_VIETNAMESE = 113
    }
    /** ICAP_LIGHTPATH values. */
    enum EnumDWT_CapLightPath {
        TWLP_REFLECTIVE = 0,
        TWLP_TRANSMISSIVE = 1
    }
    /** ICAP_LIGHTSOURCE values. */
    enum EnumDWT_CapLightSource {
        TWLS_RED = 0,
        TWLS_GREEN = 1,
        TWLS_BLUE = 2,
        TWLS_NONE = 3,
        TWLS_WHITE = 4,
        TWLS_UV = 5,
        TWLS_IR = 6
    }
    /** ICAP_NOISEFILTER values. */
    enum EnumDWT_CapNoiseFilter {
        TWNF_NONE = 0,
        TWNF_AUTO = 1,
        TWNF_LONEPIXEL = 2,
        TWNF_MAJORITYRULE = 3
    }
    /** ICAP_ORIENTATION values. */
    enum EnumDWT_CapORientation {
        TWOR_ROT0 = 0,
        TWOR_ROT90 = 1,
        TWOR_ROT180 = 2,
        TWOR_ROT270 = 3,
        TWOR_PORTRAIT = 0,
        TWOR_LANDSCAPE = 3,
        /** 2.0  */
        TWOR_AUTO = 4,
        /** 2.0  */
        TWOR_AUTOTEXT = 5,
        /** 2.0  */
        TWOR_AUTOPICTURE = 6
    }
    /** ICAP_OVERSCAN values. */
    enum EnumDWT_CapOverscan {
        TWOV_NONE = 0,
        TWOV_AUTO = 1,
        TWOV_TOPBOTTOM = 2,
        TWOV_LEFTRIGHT = 3,
        TWOV_ALL = 4
    }
    /** ICAP_PIXELFLAVOR values. */
    enum EnumDWT_CapPixelFlavor {
        /** Zero pixel represents darkest shade. zero pixel represents darkest shade   */
        TWPF_CHOCOLATE = 0,
        /** Zero pixel represents lightest shade. zero pixel represents lightest shade  */
        TWPF_VANILLA = 1
    }
    /** ICAP_PLANARCHUNKY values. */
    enum EnumDWT_CapPlanarChunky {
        TWPC_CHUNKY = 0,
        TWPC_PLANAR = 1
    }
    /** CAP_PRINTER values. */
    enum EnumDWT_CapPrinter {
        TWPR_IMPRINTERTOPBEFORE = 0,
        TWPR_IMPRINTERTOPAFTER = 1,
        TWPR_IMPRINTERBOTTOMBEFORE = 2,
        TWPR_IMPRINTERBOTTOMAFTER = 3,
        TWPR_ENDORSERTOPBEFORE = 4,
        TWPR_ENDORSERTOPAFTER = 5,
        TWPR_ENDORSERBOTTOMBEFORE = 6,
        TWPR_ENDORSERBOTTOMAFTER = 7
    }
    /** CAP_PRINTERMODE values. */
    enum EnumDWT_CapPrinterMode {
        /** Specifies that the printed text will consist of a single string. */
        TWPM_SINGLESTRING = 0,
        /** Specifies that the printed text will consist of an enumerated list of strings to be printed in order. */
        TWPM_MULTISTRING = 1,
        /** Specifies that the printed string will consist of a compound of a String followed by a value followed by a suffix string. */
        TWPM_COMPOUNDSTRING = 2
    }
    /** TWAIN Supported sizes. */
    enum EnumDWT_CapSupportedSizes {
        /** 0 */
        TWSS_NONE = 0,
        /** 1 */
        TWSS_A4LETTER = 1,
        /** 2 */
        TWSS_B5LETTER = 2,
        /** 3 */
        TWSS_USLETTER = 3,
        /** 4 */
        TWSS_USLEGAL = 4,
        /**
         * Added 1.5
         * 5
         */
        TWSS_A5 = 5,
        /** 6 */
        TWSS_B4 = 6,
        /** 7 */
        TWSS_B6 = 7,
        /**
         * Added 1.7
         * 9
         */
        TWSS_USLEDGER = 9,
        /** 10 */
        TWSS_USEXECUTIVE = 10,
        /** 11 */
        TWSS_A3 = 11,
        /** 12 */
        TWSS_B3 = 12,
        /** 13 */
        TWSS_A6 = 13,
        /** 14 */
        TWSS_C4 = 14,
        /** 15 */
        TWSS_C5 = 15,
        /** 16 */
        TWSS_C6 = 16,
        /**
         * Added 1.8
         * 17
         */
        TWSS_4A0 = 17,
        /** 18 */
        TWSS_2A0 = 18,
        /** 19 */
        TWSS_A0 = 19,
        /** 20 */
        TWSS_A1 = 20,
        /** 21 */
        TWSS_A2 = 21,
        /** 1 */
        TWSS_A4 = 1,
        /** 22 */
        TWSS_A7 = 22,
        /** 23 */
        TWSS_A8 = 23,
        /** 24 */
        TWSS_A9 = 24,
        /** 25 */
        TWSS_A10 = 25,
        /** 26 */
        TWSS_ISOB0 = 26,
        /** 27 */
        TWSS_ISOB1 = 27,
        /** 28 */
        TWSS_ISOB2 = 28,
        /** 12 */
        TWSS_ISOB3 = 12,
        /** 6 */
        TWSS_ISOB4 = 6,
        /** 29 */
        TWSS_ISOB5 = 29,
        /** 7 */
        TWSS_ISOB6 = 7,
        /** 30 */
        TWSS_ISOB7 = 30,
        /** 31 */
        TWSS_ISOB8 = 31,
        /** 32 */
        TWSS_ISOB9 = 32,
        /** 33 */
        TWSS_ISOB10 = 33,
        /** 34 */
        TWSS_JISB0 = 34,
        /** 35 */
        TWSS_JISB1 = 35,
        /** 36 */
        TWSS_JISB2 = 36,
        /** 37 */
        TWSS_JISB3 = 37,
        /** 38 */
        TWSS_JISB4 = 38,
        /** 2 */
        TWSS_JISB5 = 2,
        /** 39 */
        TWSS_JISB6 = 39,
        /** 40 */
        TWSS_JISB7 = 40,
        /** 41 */
        TWSS_JISB8 = 41,
        /** 41 */
        TWSS_JISB9 = 42,
        /** 43 */
        TWSS_JISB10 = 43,
        /** 44 */
        TWSS_C0 = 44,
        /** 45 */
        TWSS_C1 = 45,
        /** 46 */
        TWSS_C2 = 46,
        /** 47 */
        TWSS_C3 = 47,
        /** 48 */
        TWSS_C7 = 48,
        /** 49 */
        TWSS_C8 = 49,
        /** 50 */
        TWSS_C9 = 50,
        /** 51 */
        TWSS_C10 = 51,
        /** 52 */
        TWSS_USSTATEMENT = 52,
        /** 53 */
        TWSS_BUSINESSCARD = 53,
        /** 54. Added 2.1 */
        TWSS_MAXSIZE = 54
    }
    /**
     * Capabilities exist in many varieties but all have a Default Value, Current Value, and may have other values available that can be supported if selected.
     * To help categorize the supported values into clear structures, TWAIN defines four types of containers for capabilities =
     * TW_ONEVALUE, TW_ARRAY, TW_RANGE and TW_ENUMERATION.
     */
    enum EnumDWT_CapType {
        /** Nothing. */
        TWON_NONE = 0,
        /**
         * A rectangular array of values that describe a logical item. It is similar to the TW_ONEVALUE because the current and default values are the same and
         * there are no other values to select from. For example, a list of the names, such as the supported capabilities list returned by the CAP_SUPPORTEDCAPS
         * capability, would use this type of container.
         */
        TWON_ARRAY = 3,
        /**
         * This is the most general type because it defines a list of values from which the Current Value can be chosen.
         * The values do not progress uniformly through a range and there is not a consistent step size between the values.
         * For example, if a Source's resolution options do not occur in even step sizes then an enumeration would be used (for example, 150, 400, and 600).
         */
        TWON_ENUMERATION = 4,
        /**
         * A single value whose current and default values are coincident. The range of available values for this type of capability is simply this single value.
         * For example, a capability that indicates the presence of a document feeder could be of this type.
         */
        TWON_ONEVALUE = 5,
        /**
         * Many capabilities allow users to select their current value from a range of regularly spaced values.
         * The capability can specify the minimum and maximum acceptable values and the incremental step size between the values.
         * For example, resolution might be supported from 100 to 600 in steps of 50 (100, 150, 200, ..., 550, 600).
         */
        TWON_RANGE = 6
    }
    /** The kind of data stored in the container. */
    enum EnumDWT_CapValueType {
        TWTY_INT8 = 0,
        /** Means Item is a TW_INT16   */
        TWTY_INT16 = 1,
        /** Means Item is a TW_INT32   */
        TWTY_INT32 = 2,
        /** Means Item is a TW_UINT8   */
        TWTY_UINT8 = 3,
        /** Means Item is a TW_UINT16  */
        TWTY_UINT16 = 4,
        /** Means Item is a TW_int  */
        TWTY_int = 5,
        /** Means Item is a TW_BOOL    */
        TWTY_BOOL = 6,
        /** Means Item is a TW_FIX32   */
        TWTY_FIX32 = 7,
        /** Means Item is a TW_FRAME   */
        TWTY_FRAME = 8,
        /** Means Item is a TW_STR32   */
        TWTY_STR32 = 9,
        /** Means Item is a TW_STR64   */
        TWTY_STR64 = 10,
        /** Means Item is a TW_STR128  */
        TWTY_STR128 = 11,
        /** Means Item is a TW_STR255  */
        TWTY_STR255 = 12
    }
    /**
     * TWAIN compression types.
     */
    enum EnumDWT_CompressionType {
        TWCP_BITFIELDS = 12,
        TWCP_GROUP4 = 5,
        TWCP_GROUP31D = 2,
        TWCP_GROUP31DEOL = 3,
        TWCP_GROUP32D = 4,
        TWCP_JBIG = 8,
        TWCP_JPEG = 6,
        TWCP_JPEG2000 = 14,
        TWCP_LZW = 7,
        TWCP_NONE = 0,
        TWCP_PACKBITS = 1,
        TWCP_PNG = 9,
        TWCP_RLE4 = 10,
        TWCP_RLE8 = 11,
        TWCP_ZIP = 13
    }
    /** ICAP_DUPLEX values. */
    enum EnumDWT_DUPLEX {
        TWDX_NONE = 0,
        TWDX_1PASSDUPLEX = 1,
        TWDX_2PASSDUPLEX = 2
    }
    /** Data source status. */
    enum EnumDWT_DataSourceStatus {
        /** Indicate the data source is closed.  */
        TWDSS_CLOSED = 0,
        /** Indicate the data source is opened. */
        TWDSS_OPENED = 1,
        /** Indicate the data source is enabled.  */
        TWDSS_ENABLED = 2,
        /** Indicate the data source is acquiring image. */
        TWDSS_ACQUIRING = 3
    }
    /**
     * Driver Type
     */
    enum EnumDWT_Driver {
        ICA = 3,
        SANE = 3,
        TWAIN = 0,
        TWAIN_AND_ICA = 4,
        TWAIN_AND_TWAIN64 = 4,
        TWAIN64 = 5
    }
    /** ICAP_IMAGEFILEFORMAT values. */
    enum EnumDWT_FileFormat {
        /** Used for document imaging. Tagged Image File Format */
        TWFF_TIFF = 0,
        /** Native Macintosh format. Macintosh PICT    */
        TWFF_PICT = 1,
        /** Native Microsoft format. Windows Bitmap */
        TWFF_BMP = 2,
        /** Used for document imaging. X-Windows Bitmap */
        TWFF_XBM = 3,
        /** Wrapper for JPEG images. JPEG File Interchange Format */
        TWFF_JFIF = 4,
        /** FlashPix, used with digital cameras. Flash Pix */
        TWFF_FPX = 5,
        /** Multi-page TIFF files. Multi-page tiff file */
        TWFF_TIFFMULTI = 6,
        /** An image format standard intended for use on the web, replaces GIF. */
        TWFF_PNG = 7,
        /** A standard from JPEG, intended to replace JFIF, also supports JBIG. */
        TWFF_SPIFF = 8,
        /** File format for use with digital cameras. */
        TWFF_EXIF = 9,
        /** A file format from Adobe. 1.91 NB= this is not PDF/A  */
        TWFF_PDF = 10,
        /** A file format from the Joint Photographic Experts Group. 1.91 */
        TWFF_JP2 = 11,
        /** 1.91 */
        TWFF_JPN = 12,
        /** 1.91 */
        TWFF_JPX = 13,
        /** A file format from LizardTech. 1.91 */
        TWFF_DEJAVU = 14,
        /** A file format from Adobe. 2.0 */
        TWFF_PDFA = 15,
        /** 2.1 Adobe PDF/A, Version 2 */
        TWFF_PDFA2 = 16
    }
    /** Fit window type */
    enum EnumDWT_FitWindowType {
        /** Fit the image to the width and height of the window */
        enumFitWindow = 0,
        /** Fit the image to the height of the window */
        enumFitWindowHeight = 1,
        /** Fit the image to the width of the window */
        enumFitWindowWidth = 2
    }
    /** Image type */
    enum EnumDWT_ImageType {
        /** Native Microsoft format. */
        IT_BMP = 0,
        /** JPEG format. */
        IT_JPG = 1,
        /** Tagged Image File Format. */
        IT_TIF = 2,
        /** An image format standard intended for use on the web, replaces GIF. */
        IT_PNG = 3,
        /** A file format from Adobe. */
        IT_PDF = 4,
        /** All supported formats which are bmp, jpg, tif, png and pdf */
        IT_ALL = 5,
        IT_MULTIPAGE_PDF = 7,
        IT_MULTIPAGE_TIF = 8
    }
    enum EnumDWT_InitMsg {
        Info = 1,
        Error = 2,
        NotInstalledError = 3,
        DownloadError = 4,
        DownloadNotRestartError = 5
    }
    /** The method to do interpolation. */
    enum EnumDWT_InterpolationMethod {
        IM_NEARESTNEIGHBOUR = 1,
        IM_BILINEAR = 2,
        IM_BICUBIC = 3,
        IM_BESTQUALITY = 5
    }
    enum EnumDWT_Language {
        English = 0,
        French = 1,
        Arabic = 2,
        Spanish = 3,
        Portuguese = 4,
        German = 5,
        Italian = 6,
        Russian = 7,
        Chinese = 8
    }
    /** TWEI_MAGTYPE values. (MD_ means Mag Type) Added 2.0  */
    enum EnumDWT_MagType {
        /** Added 2.0  */
        TWMD_MICR = 0,
        /** added 2.1   */
        TWMD_RAW = 1,
        /** added 2.1  */
        TWMD_INVALID = 2
    }
    /**
     * For query the operation that are supported by the data source on a capability .
     * Application gets these through DG_CONTROL/DAT_CAPABILITY/MSG_QUERYSUPPORT
     */
    enum EnumDWT_MessageType {
        TWQC_GET = 1,
        TWQC_SET = 2,
        TWQC_GETDEFAULT = 4,
        TWQC_GETCURRENT = 8,
        TWQC_RESET = 16
    }
    /**
     * Mouse cursor shape.
     */
    enum EnumDWT_MouseShape {
        Default = 0,
        Hand = 1,
        Crosshair = 2,
        Zoom = 3
    }
    /** PDF file compression type. */
    enum EnumDWT_PDFCompressionType {
        /** Auto mode. */
        PDF_AUTO = 0,
        /** CCITT Group 3 fax encoding. */
        PDF_FAX3 = 1,
        /** CCITT Group 4 fax encoding */
        PDF_FAX4 = 2,
        /** Lempel Ziv and Welch */
        PDF_LZW = 3,
        /** CCITT modified Huffman RLE. */
        PDF_RLE = 4,
        /** JPEG compression. */
        PDF_JPEG = 5
    }
    /** ICAP_PIXELTYPE values (PT_ means Pixel Type) */
    enum EnumDWT_PixelType {
        TWPT_BW = 0,
        TWPT_GRAY = 1,
        TWPT_RGB = 2,
        TWPT_PALLETE = 3,
        TWPT_CMY = 4,
        TWPT_CMYK = 5,
        TWPT_YUV = 6,
        TWPT_YUVK = 7,
        TWPT_CIEXYZ = 8,
        TWPT_LAB = 9,
        TWPT_SRGB = 10,
        TWPT_SCRGB = 11,
        TWPT_INFRARED = 16
    }
    enum EnumDWT_PlatformType {
        /// Fit the image to the width and height of the window
        enumWindow = 0,
        /// Fit the image to the height of the window
        enumMac = 1,
        /// Fit the image to the width of the window
        enumLinux = 2
    }
    enum EnumDWT_ShowMode {
        /** Activates the window and displays it in its current size and position. */
        SW_ACTIVE = 0,
        /** Maximizes the window */
        SW_MAX = 1,
        /** Minimize the window */
        SW_MIN = 2,
        /** Close the latest opened editor window */
        SW_CLOSE = 3,
        /** Check whether a window exists */
        SW_IFLIVE = 4
    }
    /** TIFF file compression type. */
    enum EnumDWT_TIFFCompressionType {
        /** Auto mode. */
        TIFF_AUTO = 0,
        /** Dump mode. */
        TIFF_NONE = 1,
        /** CCITT modified Huffman RLE. */
        TIFF_RLE = 2,
        /** CCITT Group 3 fax encoding. */
        TIFF_FAX3 = 3,
        /** CCITT T.4 (TIFF 6 name). */
        TIFF_T4 = 3,
        /** CCITT Group 4 fax encoding */
        TIFF_FAX4 = 4,
        /** CCITT T.6 (TIFF 6 name). */
        TIFF_T6 = 4,
        /** Lempel Ziv and Welch */
        TIFF_LZW = 5,
        TIFF_JPEG = 7,
        TIFF_PACKBITS = 32773
    }
    /** ICAP_XFERMECH values. */
    enum EnumDWT_TransferMode {
        /**
         * Native transfers require the data to be transferred to a single large block of RAM. Therefore,
         * they always face the risk of having an inadequate amount of RAM available to perform the transfer successfully.
         */
        TWSX_NATIVE = 0,
        /** Disk File Mode Transfers. */
        TWSX_FILE = 1,
        /** Buffered Memory Mode Transfers. */
        TWSX_MEMORY = 2/*,*/
        /**
         * added 1.91 , not supported in DWT yet
         */
        // TWSX_MEMFILE  = 4
    }
    /** ICAP_UNITS values. */
    enum EnumDWT_UnitType {
        TWUN_INCHES = 0,
        TWUN_CENTIMETERS = 1,
        TWUN_PICAS = 2,
        TWUN_POINTS = 3,
        TWUN_TWIPS = 4,
        TWUN_PIXELS = 5,
        TWUN_MILLIMETERS = 6
    }
    enum EnumDWT_UploadDataFormat {
        Binary = 0,
        Base64 = 1
    }
    enum Enum_ErrorMessage {
        FILE_STREAM_ERROR = "File Stream Error= ",
        PARAMETER_TYPE_ERROR = "Parameter Type not Supported= ",
        TIMEOUT = "Timeout no Response= "
    }
    enum Enum_ImageType {
        IT_ALL = 5,
        IT_BMP = 0,
        IT_DIB = -1,
        IT_JPG = 1,
        IT_PNG = 3,
        IT_RGBA = -2,
    }
    enum Enum_ReturnType {
        RT_AUTO = -1,
        RT_BASE64 = 2,
        RT_BINARY = 1,
    }
    enum EnumAccompanyingTextRecognitionMode {
        ATRM_GENERAL = 1,
        ATRM_SKIP = 0,
    }
    enum EnumBinarizationMode {
        BM_AUTO = 1,
        BM_LOCAL_BLOCK = 2,
        BM_SKIP = 0
    }
    enum EnumClarityCalculationMethod {
        ECCM_CONTRAST = 1,
    }
    enum EnumClarityFilterMode {
        CFM_GENERAL = 1
    }
    enum EnumColourClusteringMode {
        CCM_AUTO = 1,
        CCM_GENERAL_HSV = 2,
        CCM_SKIP = 0,
    }
    enum EnumColourConversionMode {
        CICM_GENERAL = 1,
        CICM_SKIP = 0,
    }
    enum EnumConflictMode {
        CM_IGNORE = 1,
        CM_OVERWRITE = 2,
    }
    enum EnumDeformationResistingMode {
        DRM_AUTO = 1,
        DRM_GENERAL = 2,
        DRM_SKIP = 0,
    }
    enum EnumDPMCodeReadingMode {
        DPMCRM_AUTO = 1,
        DPMCRM_GENERAL = 2,
        DPMCRM_SKIP = 0
    }
    enum EnumGrayscaleTransformationMode {
        GTM_INVERTED = 1,
        GTM_ORIGINAL = 2,
        GTM_SKIP = 0
    }
    enum EnumImagePixelFormat {
        IPF_ABGR_8888 = 10,
        IPF_ABGR_16161616 = 11,
        IPF_ARGB_8888 = 7,
        IPF_ARGB_16161616 = 9,
        IPF_BGR_888 = 12,
        IPF_Binary = 0,
        IPF_BinaryInverted = 1,
        IPF_GrayScaled = 2,
        IPF_NV21 = 3,
        IPF_RGB_555 = 5,
        IPF_RGB_565 = 4,
        IPF_RGB_888 = 6,
        IPF_RGB_161616 = 8
    }
    enum EnumImagePreprocessingMode {
        IPM_AUTO = 1,
        IPM_GENERAL = 2,
        IPM_GRAY_EQUALIZE = 4,
        IPM_GRAY_SMOOTH = 8,
        IPM_MORPHOLOGY = 32,
        IPM_SHARPEN_SMOOTH = 16,
        IPM_SKIP = 0
    }
    enum EnumIMResultDataType {
        IMRDT_CONTOUR = 2,
        IMRDT_IMAGE = 1,
        IMRDT_LINESEGMENT = 4,
        IMRDT_LOCALIZATIONRESULT = 8,
        IMRDT_QUADRILATERAL = 32,
        IMRDT_REGIONOFINTEREST = 16
    }
    enum EnumIntermediateResultSavingMode {
        IRSM_BOTH = 4,
        IRSM_FILESYSTEM = 2,
        IRSM_MEMORY = 1
    }
    enum EnumIntermediateResultType {
        IRT_BINARIZED_IMAGE = 64,
        IRT_COLOUR_CLUSTERED_IMAGE = 2,
        IRT_COLOUR_CONVERTED_GRAYSCALE_IMAGE = 4,
        IRT_CONTOUR = 256,
        IRT_FORM = 1024,
        IRT_LINE_SEGMENT = 512,
        IRT_NO_RESULT = 0,
        IRT_ORIGINAL_IMAGE = 1,
        IRT_PREDETECTED_QUADRILATERAL = 8192,
        IRT_PREDETECTED_REGION = 16,
        IRT_PREPROCESSED_IMAGE = 32,
        IRT_SEGMENTATION_BLOCK = 2048,
        IRT_TEXT_ZONE = 128,
        IRT_TRANSFORMED_GRAYSCALE_IMAGE = 8,
        IRT_TYPED_BARCODE_ZONE = 4096
    }
    enum EnumLocalizationMode {
        LM_AUTO = 1,
        LM_CONNECTED_BLOCKS = 2,
        LM_LINES = 8,
        LM_SCAN_DIRECTLY = 16,
        LM_SKIP = 0,
        LM_STATISTICS = 4,
        LM_STATISTICS_MARKS = 32,
        LM_STATISTICS_POSTAL_CODE = 64
    }
    enum EnumPDFReadingMode {
        PDFRM_AUTO = 2,
        PDFRM_RASTER = 1,
        PDFRM_VECTOR = 4
    }
    enum EnumQRCodeErrorCorrectionLevel {
        QRECL_ERROR_CORRECTION_H = 0,
        QRECL_ERROR_CORRECTION_L = 1,
        QRECL_ERROR_CORRECTION_M = 2,
        QRECL_ERROR_CORRECTION_Q = 3
    }
    enum EnumRegionPredetectionMode {
        RPM_AUTO = 1,
        RPM_GENERAL = 2,
        RPM_GENERAL_GRAY_CONTRAST = 8,
        RPM_GENERAL_HSV_CONTRAST = 16,
        RPM_GENERAL_RGB_CONTRAST = 4,
        RPM_SKIP = 0
    }
    enum EnumResultCoordinateType {
        RCT_PERCENTAGE = 2,
        RCT_PIXEL = 1
    }
    enum EnumResultType {
        RT_CANDIDATE_TEXT = 2,
        RT_PARTIAL_TEXT = 3,
        RT_RAW_TEXT = 1,
        RT_STANDARD_TEXT = 0
    }
    enum EnumScaleUpMode {
        SUM_AUTO = 1,
        SUM_LINEAR_INTERPOLATION = 2,
        SUM_NEAREST_NEIGHBOUR_INTERPOLATION = 4,
        SUM_SKIP = 0
    }
    enum EnumTerminatePhase {
        TP_BARCODE_LOCALIZED = 8,
        TP_BARCODE_RECOGNIZED = 32,
        TP_BARCODE_TYPE_DETERMINED = 16,
        TP_IMAGE_BINARIZED = 4,
        TP_IMAGE_PREPROCESSED = 2,
        TP_REGION_PREDETECTED = 1
    }
    enum EnumTextAssistedCorrectionMode {
        TACM_AUTO = 1,
        TACM_SKIP = 0,
        TACM_VERIFYING = 2,
        TACM_VERIFYING_PATCHING = 4
    }
    enum EnumTextFilterMode {
        TFM_AUTO = 1,
        TFM_GENERAL_CONTOUR = 2,
        TFM_SKIP = 0
    }
    enum EnumTextResultOrderMode {
        TROM_CONFIDENCE = 1,
        TROM_FORMAT = 4,
        TROM_POSITION = 2,
        TROM_SKIP = 0
    }
    enum EnumTextureDetectionMode {
        TDM_AUTO = 1,
        TDM_GENERAL_WIDTH_CONCENTRATION = 2,
        TDM_SKIP = 0
    }
}

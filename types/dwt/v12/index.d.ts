/*!
* Dynamsoft WebTwain JavaScript Intellisense
* Product: Dynamsoft Web Twain
* Web Site: http://www.dynamsoft.com
*
* Copyright 2017, Dynamsoft Corporation
* Author: Dynamsoft Support Team
* Version: 12.3
*/

/**
 * @namespace Dynamsoft
 */
declare namespace Dynamsoft {
    namespace WebTwainEnv {
        function GetWebTwain(cid: string): WebTwain;
        function RegisterEvent(event: string, fn: () => void): void;
    }
}

/** ICAP_PIXELTYPE values (PT_ means Pixel Type) */
declare enum EnumDWT_PixelType {
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
    TWPT_INFRARED = 16,
}

declare enum EnumDWT_BorderStyle {
    /** No border. */
    TWBS_NONE = 0,
    /** Flat border. */
    TWBS_SINGLEFLAT = 1,
    /** 3D border.   */
    TWBS_SINGLE3D = 2,
}

/** For query the operation that are supported by the data source on a capability .
 *  Application gets these through DG_CONTROL/DAT_CAPABILITY/MSG_QUERYSUPPORT
 */
declare enum EnumDWT_MessageType {
    TWQC_GET = 1,
    TWQC_SET = 2,
    TWQC_GETDEFAULT = 4,
    TWQC_GETCURRENT = 8,
    TWQC_RESET = 16,
}

/** Capabilities */
declare enum EnumDWT_Cap {
    /** Nothing. */
    CAP_NONE = 0,
    /** The application is willing to accept this number of images. */
    CAP_XFERCOUNT = 1,
    /** Allows the application and Source to identify which compression schemes they have in
     *  common for Buffered Memory and File transfers.
     *  Note for File transfers:
     *  Since only certain file formats support compression, this capability must be negotiated after
     *  setting the desired file format with ICAP_IMAGEFILEFORMAT.
     */
    ICAP_COMPRESSION = 256,
    /** The type of pixel data that a Source is capable of acquiring (for example, black and white, gray, RGB, etc.). */
    ICAP_PIXELTYPE = 257,
    /** Unless a quantity is dimensionless or uses a specified unit of measure, ICAP_UNITS determines
     *  the unit of measure for all quantities.
     */
    ICAP_UNITS = 258,
    /** Allows the application and Source to identify which transfer mechanisms the source supports. */
    ICAP_XFERMECH = 259,
    /** The name or other identifying information about the Author of the image. It may include a copyright string. */
    CAP_AUTHOR = 4096,
    /** A general note about the acquired image. */
    CAP_CAPTION = 4097,
    /** If TRUE, Source must acquire data from the document feeder acquire area and other feeder
     *  capabilities can be used. If FALSE, Source must acquire data from the non-feeder acquire area
     *  and no other feeder capabilities can be used.
     */
    CAP_FEEDERENABLED = 4098,
    /** Reflect whether there are documents loaded in the Source's feeder. */
    CAP_FEEDERLOADED = 4099,
    /** The date and time the image was acquired.
     *  Stored in the form "YYYY/MM/DD HH:mm:SS.sss" where YYYY is the year, MM is the
     *  numerical month, DD is the numerical day, HH is the hour, mm is the minute, SS is the second,
     *  and sss is the millisecond.
     */
    CAP_TIMEDATE = 4100,
    /** Returns a list of all the capabilities for which the Source will answer inquiries. Does not indicate
     *  which capabilities the Source will allow to be set by the application. Some capabilities can only
     *  be set if certain setup work has been done so the Source cannot globally answer which
     *  capabilities are "set-able."
     */
    CAP_SUPPORTEDCAPS = 4101,
    /** Allows the application and Source to negotiate capabilities to be used in States 5 and 6. */
    CAP_EXTENDEDCAPS = 4102,
    /** If TRUE, the Source will automatically feed the next page from the document feeder after the
     *  number of frames negotiated for capture from each page are acquired. CAP_FEEDERENABLED
     *  must be TRUE to use this capability.
     */
    CAP_AUTOFEED = 4103,
    /** If TRUE, the Source will eject the current page being acquired from and will leave the feeder
     *  acquire area empty.
     *  If CAP_AUTOFEED is TRUE, a fresh page will be advanced.
     *  CAP_FEEDERENABLED must equal TRUE to use this capability.
     *  This capability must have been negotiated as an extended capability to be used in States 5 and 6.
     */
    CAP_CLEARPAGE = 4104,
    /** If TRUE, the Source will eject the current page and advance the next page in the document feeder
     *  into the feeder acquire area.
     *  If CAP_AUTOFEED is TRUE, the same action just described will occur and CAP_AUTOFEED will
     *  remain active.
     *  CAP_FEEDERENABLED must equal TRUE to use this capability.
     *  This capability must have been negotiated as an extended capability to be used in States 5 and 6.
     */
    CAP_FEEDPAGE = 4105,
    /** If TRUE, the Source will return the current page to the input side of the document feeder and
     *  feed the last page from the output side of the feeder back into the acquisition area.
     *  If CAP_AUTOFEED is TRUE, automatic feeding will continue after all negotiated frames from this
     *  page are acquired.
     *  CAP_FEEDERENABLED must equal TRUE to use this capability.
     *  This capability must have been negotiated as an extended capability to be used in States 5 and 6.
     */
    CAP_REWINDPAGE = 4106,
    /** If TRUE, the Source will display a progress indicator during acquisition and transfer, regardless
     *  of whether the Source's user interface is active. If FALSE, the progress indicator will be
     *  suppressed if the Source's user interface is inactive.
     *  The Source will continue to display device-specific instructions and error messages even with
     *  the Source user interface and progress indicators turned off.
     */
    CAP_INDICATORS = 4107,
    /** Returns a list of all the capabilities for which the Source will answer inquiries. Does not indicate
     *  which capabilities the Source will allow to be set by the application. Some capabilities can only
     *  be set if certain setup work has been done so the Source cannot globally answer which
     *  capabilities are "set-able."
     */
    CAP_SUPPORTEDCAPSEXT = 4108,
    /** This capability determines whether the device has a paper sensor that can detect documents on the ADF or Flatbed. */
    CAP_PAPERDETECTABLE = 4109,
    /** If TRUE, indicates that this Source supports acquisition with the UI disabled; i.e.,
     *  TW_USERINTERFACE's ShowUI field can be set to FALSE. If FALSE, indicates that this Source
     *  can only support acquisition with the UI enabled.
     */
    CAP_UICONTROLLABLE = 4110,
    /** If TRUE, the physical hardware (e.g., scanner, digital camera, image database, etc.) that
     *  represents the image source is attached, powered on, and communicating.
     */
    CAP_DEVICEONLINE = 4111,
    /** This capability is intended to boost the performance of a Source. The fundamental assumption
     *  behind AutoScan is that the device is able to capture the number of images indicated by the
     *  value of CAP_XFERCOUNT without waiting for the Application to request the image transfers.
     *  This is only possible if the device has internal buffers capable of caching the images it captures.
     *  The default behavior is undefined, because some high volume devices are incapable of anything
     *  but CAP_AUTOSCAN being equal to TRUE. However, if a Source supports FALSE, it should use it
     *  as the mandatory default, since this best describes the behavior of pre-1.8 TWAIN Applications.
     */
    CAP_AUTOSCAN = 4112,
    /** Allows an application to request the delivery of thumbnail representations for the set of images
     *  that are to be delivered.
     *  Setting CAP_THUMBNAILSENABLED to TRUE turns on thumbnail mode. Images transferred
     *  thereafter will be sent at thumbnail size (exact thumbnail size is determined by the Data Source).
     *  Setting this capability to FALSE turns thumbnail mode off and returns full size images.
     */
    CAP_THUMBNAILSENABLED = 4113,
    /** This indicates whether the scanner supports duplex. If so, it further indicates whether one-path
     *  or two-path duplex is supported.
     */
    CAP_DUPLEX = 4114,
    /** The user can set the duplex option to be TRUE or FALSE. If TRUE, the scanner scans both sides
     *  of a paper; otherwise, the scanner will scan only one side of the image.
     */
    CAP_DUPLEXENABLED = 4115,
    /** Allows an application to query a source to see if it implements the new user interface settings dialog.  */
    CAP_ENABLEDSUIONLY = 4116,
    CAP_CUSTOMDSDATA = 4117,
    /** Allows the application to specify the starting endorser / imprinter number. All other endorser/
     *  imprinter properties should be handled through the data source's user interface.
     *  The user can set the starting number for the endorser.
     */
    CAP_ENDORSER = 4118,
    /** Turns specific audible alarms on and off. */
    CAP_ALARMS = 4120,
    /** The volume of a device's audible alarm. Note that this control affects the volume of all alarms;
     *  no specific volume control for individual types of alarms is provided.
     */
    CAP_ALARMVOLUME = 4121,
    /** The number of images to automatically capture. This does not refer to the number of images to
     *  be sent to the Application, use CAP_XFERCOUNT for that.
     */
    CAP_AUTOMATICCAPTURE = 4122,
    /** For automatic capture, this value selects the number of milliseconds before the first picture is to
     *  be taken, or the first image is to be scanned.
     */
    CAP_TIMEBEFOREFIRSTCAPTURE = 4123,
    /** For automatic capture, this value selects the milliseconds to wait between pictures taken, or images scanned. */
    CAP_TIMEBETWEENCAPTURES = 4124,
    /** CapGet() reports the presence of data in the scanner's buffers. CapSet() with a value of TWCB_CLEAR immediately clears the buffers. */
    CAP_CLEARBUFFERS = 4125,
    /** Describes the number of pages that the scanner can buffer when CAP_AUTOSCAN is enabled. */
    CAP_MAXBATCHBUFFERS = 4126,
    /** The date and time of the device's clock.
     *  Managed in the form "YYYY/MM/DD HH:mm:SS:sss" where YYYY is the year, MM is the
     *  numerical month, DD is the numerical day, HH is the hour, mm is the minute, SS is the second,
     *  and sss is the millisecond.
     */
    CAP_DEVICETIMEDATE = 4127,
    /** CapGet() reports the kinds of power available to the device. CapGetCurrent() reports the current power supply in use. */
    CAP_POWERSUPPLY = 4128,
    /** This capability queries the Source for UI support for preview mode. If TRUE, the Source supports preview UI. */
    CAP_CAMERAPREVIEWUI = 4129,
    /** A string containing the serial number of the currently selected device in the Source. Multiple
     *  devices may all report the same serial number.
     */
    CAP_SERIALNUMBER = 4132,
    /** CapGet() returns the current list of available printer devices, along with the one currently being used for negotiation.
     *  CapSet() selects the current device for negotiation, and optionally constrains the list.
     *  Top/Bottom refers to duplex devices, and indicates if the printer is writing on the top or the bottom of the sheet of paper.
     *  Simplex devices use the top settings. Before/After indicates whether printing occurs before or after the sheet of paper has been scanned.
     */
    CAP_PRINTER = 4134,
    /** Turns the current CAP_PRINTER device on or off. */
    CAP_PRINTERENABLED = 4135,
    /** The User can set the starting number for the current CAP_PRINTER device. */
    CAP_PRINTERINDEX = 4136,
    /** Specifies the appropriate current CAP_PRINTER device mode.
     *  Note:
     *  O TWPM_SINGLESTRING specifies that the printed text will consist of a single string.
     *  O TWPM _MULTISTRING specifies that the printed text will consist of an enumerated list of
     *    strings to be printed in order.
     *  O TWPM _COMPOUNDSTRING specifies that the printed string will consist of a compound of a
     *    String followed by a value followed by a suffix string.
     */
    CAP_PRINTERMODE = 4137,
    /** Specifies the string(s) that are to be used in the string component when the current
     *  CAP_PRINTER device is enabled.
     */
    CAP_PRINTERSTRING = 4138,
    /** Specifies the string that shall be used as the current CAP_PRINTER device's suffix. */
    CAP_PRINTERSUFFIX = 4139,
    /** Allows Application and Source to identify which languages they have in common for the exchange of string data,
     *  and to select the language of the internal UI. Since the TWLG_xxxx codes include language and country data, there is no separate
     *  capability for selecting the country.
     */
    CAP_LANGUAGE = 4140,
    /** Helps the Application determine any special actions it may need to take when negotiating
     *  frames with the Source. Allowed values are listed in <see cref="TWCapFeederAlignment"/>.
     *  TWFA_NONE: The alignment is free-floating. Applications should assume
     *  that the origin for frames is on the left.
     *  TWFA_LEFT: The alignment is to the left.
     *  TWFA_CENTER: The alignment is centered. This means that the paper will
     *  be fed in the middle of the ICAP_PHYSICALWIDTH of the
     *  device. If this is set, then the Application should calculate
     *  any frames with a left offset of zero.
     *  TWFA_RIGHT: The alignment is to the right.
     */
    CAP_FEEDERALIGNMENT = 4141,
    /** TWFO_FIRSTPAGEFIRST if the feeder starts with the top of the first page.
     *  TWFO_LASTPAGEFIRST is the feeder starts with the top of the last page.
     */
    CAP_FEEDERORDER = 4142,
    /** Indicates whether the physical hardware (e.g. scanner, digital camera) is capable of acquiring
     *  multiple images of the same page without changes to the physical registration of that page.
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
    /** Describes the color characteristic of the subtractive filter applied to the image data. Multiple
     *  filters may be applied to a single acquisition.
     */
    ICAP_FILTER = 4358,
    /** Specifies whether or not the image was acquired using a flash. */
    ICAP_FLASHUSED = 4359,
    /** Gamma correction value for the image data. */
    ICAP_GAMMA = 4360,
    /** A list of names of the halftone patterns available within the Source. */
    ICAP_HALFTONES = 4361,
    /** Specifies which value in an image should be interpreted as the lightest "highlight." All values
     *  "lighter" than this value will be clipped to this value. Whether lighter values are smaller or
     *  larger can be determined by examining the Current value of ICAP_PIXELFLAVOR.
     */
    ICAP_HIGHLIGHT = 4362,
    /** Informs the application which file formats the Source can generate (CapGet()). Tells the Source which file formats the application can handle (CapSet()).
     *  TWFF_TIFF Used for document
     *  TWFF_PICT Native Macintosh
     *  TWFF_BMP Native Microsoft
     *  TWFF_XBM Used for document
     *  TWFF_JFIF Wrapper for JPEG
     *  TWFF_FPX FlashPix, used with digital
     *  TWFF_TIFFMULTI Multi-page TIFF files
     *  TWFF_PNG An image format standard intended for use on the web, replaces GIF
     *  TWFF_SPIFF A standard from JPEG, intended to replace JFIF, also supports JBIG
     *  TWFF_EXIF File format for use with digital cameras.
     */
    ICAP_IMAGEFILEFORMAT = 4364,
    /** TRUE means the lamp is currently, or should be set to ON. Sources may not support CapSet() operations.  */
    ICAP_LAMPSTATE = 4365,
    /** Describes the general color characteristic of the light source used to acquire the image. */
    ICAP_LIGHTSOURCE = 4366,
    /** Defines which edge of the "paper" the image's "top" is aligned with. This information is used to adjust the frames to match the
     *  scanning orientation of the paper. For instance, if an ICAP_SUPPORTEDSIZE of TWSS_ISOA4 has been negotiated,
     *  and ICAP_ORIENTATION is set to TWOR_LANDSCAPE, then the Source must rotate the frame it downloads to the scanner to reflect the
     *  orientation of the paper. Please note that setting ICAP_ORIENTATION does not affect the values reported by ICAP_FRAMES;
     *  it just causes the Source to use them in a different way. The upper-left of the image is defined as the location where both the primary and
     *  secondary scans originate. (The X axis is the primary scan direction and the Y axis is the secondary scan direction.)
     *  For a flatbed scanner, the light bar moves in the secondary scan direction. For a handheld scanner, the scanner is drug in the
     *  secondary scan direction. For a digital camera, the secondary direction is the vertical axis when the viewed image is considered upright.
     */
    ICAP_ORIENTATION = 4368,
    /** The maximum physical width (X-axis) the Source can acquire (measured in units of ICAP_UNITS). */
    ICAP_PHYSICALWIDTH = 4369,
    /** The maximum physical height (Y-axis) the Source can acquire (measured in units of ICAP_UNITS). */
    ICAP_PHYSICALHEIGHT = 4370,
    /** Specifies which value in an image should be interpreted as the darkest "shadow." All values
     *  "darker" than this value will be clipped to this value.
     */
    ICAP_SHADOW = 4371,
    /** The list of frames the Source will acquire on each page. */
    ICAP_FRAMES = 4372,
    /** The native optical resolution along the X-axis of the device being controlled by the Source. Most
     *  devices will respond with a single value (TW_ONEVALUE).
     *  This is NOT a list of all resolutions that can be generated by the device. Rather, this is the
     *  resolution of the device's optics. Measured in units of pixels per unit as defined by
     *  ICAP_UNITS (pixels per TWUN_PIXELS yields dimensionless data).
     */
    ICAP_XNATIVERESOLUTION = 4374,
    /** The native optical resolution along the Y-axis of the device being controlled by the Source.
     *  Measured in units of pixels per unit as defined by ICAP_UNITS (pixels per TWUN_PIXELS
     *  yields dimensionless data).
     */
    ICAP_YNATIVERESOLUTION = 4375,
    /** All the X-axis resolutions the Source can provide.
     *  Measured in units of pixels per unit as defined by ICAP_UNITS (pixels per TWUN_PIXELS
     *  yields dimensionless data). That is, when the units are TWUN_PIXELS, both
     *  ICAP_XRESOLUTION and ICAP_YRESOLUTION shall report 1 pixel/pixel. Some data sources
     *  like to report the actual number of pixels that the device reports, but that response is more
     *  appropriate in ICAP_PHYSICALHEIGHT and ICAP_PHYSICALWIDTH.
     */
    ICAP_XRESOLUTION = 4376,
    /** All the Y-axis resolutions the Source can provide.
     *  Measured in units of pixels per unit as defined by ICAP_UNITS (pixels per TWUN_PIXELS
     *  yields dimensionless data). That is, when the units are TWUN_PIXELS, both
     *  ICAP_XRESOLUTION and ICAP_YRESOLUTION shall report 1 pixel/pixel. Some data sources
     *  like to report the actual number of pixels that the device reports, but that response is more
     *  appropriate in ICAP_PHYSICALHEIGHT and ICAP_PHYSICALWIDTH.
     */
    ICAP_YRESOLUTION = 4377,
    /** The maximum number of frames the Source can provide or the application can accept per page.
     *  This is a bounding capability only. It does not establish current or future behavior.
     */
    ICAP_MAXFRAMES = 4378,
    /** This is used with buffered memory transfers. If TRUE, Source can provide application with tiled image data. */
    ICAP_TILES = 4379,
    /** Specifies how the bytes in an image are filled by the Source. TWBO_MSBFIRST indicates that the leftmost bit in the byte (usually bit 7) is
     *  the byte's Most Significant Bit.
     */
    ICAP_BITORDER = 4380,
    /** Used for CCITT Group 3 2-dimensional compression. The 'K' factor indicates how often the
     *  new compression baseline should be re-established. A value of 2 or 4 is common in facsimile
     *  communication. A value of zero in this field will indicate an infinite K factor—the baseline is
     *  only calculated at the beginning of the transfer.
     */
    ICAP_CCITTKFACTOR = 4381,
    /** Describes whether the image was captured transmissively or reflectively. */
    ICAP_LIGHTPATH = 4382,
    /** Sense of the pixel whose numeric value is zero (minimum data value).  */
    ICAP_PIXELFLAVOR = 4383,
    /** Allows the application and Source to identify which color data formats are available. There are
     *  two options, "planar" and "chunky."
     */
    ICAP_PLANARCHUNKY = 4384,
    /** How the Source can/should rotate the scanned image data prior to transfer. This doesn't use
     *  ICAP_UNITS. It is always measured in degrees. Any applied value is additive with any
     *  rotation specified in ICAP_ORIENTATION.
     */
    ICAP_ROTATION = 4385,
    /** For devices that support fixed frame sizes.
     *  Defined sizes match typical page sizes. This specifies the size(s) the Source can/should use to acquire image data.
     */
    ICAP_SUPPORTEDSIZES = 4386,
    /** Specifies the dividing line between black and white. This is the value the Source will use to
     *  threshold, if needed, when ICAP_PIXELTYPE:TWPT_BW.
     *  The value is normalized so there are no units of measure associated with this ICAP.
     */
    ICAP_THRESHOLD = 4387,
    /** All the X-axis scaling values available. A value of '1.0' is equivalent to 100% scaling. Do not use values less than or equal to zero. */
    ICAP_XSCALING = 4388,
    /** All the Y-axis scaling values available. A value of '1.0' is equivalent to 100% scaling. Do not use values less than or equal to zero.
     *  There are no units inherent with this data as it is normalized to 1.0 being "unscaled."
     */
    ICAP_YSCALING = 4389,
    /** Used for CCITT data compression only. Indicates the bit order representation of the stored compressed codes. */
    ICAP_BITORDERCODES = 4390,
    /** Used only for CCITT data compression. Specifies whether the compressed codes' pixel "sense"
     *  will be inverted from the Current value of ICAP_PIXELFLAVOR prior to transfer.
     */
    ICAP_PIXELFLAVORCODES = 4391,
    /** Allows the application and Source to agree upon a common set of color descriptors that are
     *  made available by the Source. This ICAP is only useful for JPEG-compressed buffered memory image transfers.
     */
    ICAP_JPEGPIXELTYPE = 4392,
    /** Used only with CCITT data compression. Specifies the minimum number of words of compressed codes (compressed data) to be transmitted per line. */
    ICAP_TIMEFILL = 4394,
    /** Specifies the pixel bit depths for the Current value of ICAP_PIXELTYPE. For example, when
     *  using ICAP_PIXELTYPE:TWPT_GRAY, this capability specifies whether this is 8-bit gray or 4-bit gray.
     *  This depth applies to all the data channels (for instance, the R, G, and B channels will all have
     *  this same bit depth for RGB data).
     */
    ICAP_BITDEPTH = 4395,
    /** Specifies the Reduction Method the Source should use to reduce the bit depth of the data. Most
     *  commonly used with ICAP_PIXELTYPE:TWPT_BW to reduce gray data to black and white.
     */
    ICAP_BITDEPTHREDUCTION = 4396,
    /** If TRUE the Source will issue a MSG_XFERREADY before starting the scan.
     *  Note: The Source may need to scan the image before initiating the transfer. This is the case if
     *  the scanned image is rotated or merged with another scanned image.
     */
    ICAP_UNDEFINEDIMAGESIZE = 4397,
    /** Allows the application to query the data source to see if it supports extended image attribute capabilities,
     *  such as Barcode Recognition, Shaded Area Detection and Removal, Skew detection and Removal, and so on.
     */
    ICAP_EXTIMAGEINFO = 4399,
    /** Allows the source to define the minimum height (Y-axis) that the source can acquire. */
    ICAP_MINIMUMHEIGHT = 4400,
    /** Allows the source to define theminimum width (X-axis) that the source can acquire. */
    ICAP_MINIMUMWIDTH = 4401,
    /** Use this capability to have the Source discard blank images. The Application never sees these
     *  images during the scanning session.
     *  TWBP_DISABLE – this must be the default state for the Source. It indicates that all images will
     *  be delivered to the Application, none of them will be discarded.
     *  TWBP_AUTO – if this is used, then the Source will decide if an image is blank or not and discard
     *  as appropriate.
     *  If the specified value is a positive number in the range 0 to 231–1, then this capability will use it
     *  as the byte size cutoff point to identify which images are to be discarded. If the size of the image
     *  is less than or equal to this value, then it will be discarded. If the size of the image is greater
     *  than this value, then it will be kept so that it can be transferred to the Application.
     */
    ICAP_AUTODISCARDBLANKPAGES = 4404,
    /** Flip rotation is used to properly orient images that flip orientation every other image.
     *  TWFR_BOOK The images to be scanned are viewed in book form, flipping each page from left to right or right to left.
     *  TWFR_FANFOLD The images to be scanned are viewed in fanfold paper style, flipping each page up or down.
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
    /** For devices that support flash. CapSet() selects the flash to be used (if any). CapGet() reports the current setting.
     *  This capability replaces ICAP_FLASHUSED, which is only able to negotiate the flash being on or off.
     */
    ICAP_FLASHUSED2 = 4422,
    /** For devices that support image enhancement filtering. This capability selects the algorithm used to improve the quality of the image. */
    ICAP_IMAGEFILTER = 4423,
    /** For devices that support noise filtering. This capability selects the algorithm used to remove noise. */
    ICAP_NOISEFILTER = 4424,
    /** Overscan is used to scan outside of the boundaries described by ICAP_FRAMES, and is used to help acquire image data that
     *  may be lost because of skewing.
     *  This is primarily of use for transport scanners which rely on edge detection to begin scanning.
     *  If overscan is supported, then the device is capable of scanning in the inter-document gap to get the skewed image information.
     */
    ICAP_OVERSCAN = 4425,
    /** Turns automatic border detection on and off. */
    ICAP_AUTOMATICBORDERDETECTION = 4432,
    /** Turns automatic deskew correction on and off. */
    ICAP_AUTOMATICDESKEW = 4433,
    /** When TRUE this capability depends on intelligent features within the Source to automatically
     *  rotate the image to the correct position.
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
    ICAP_SUPPORTEDEXTIMAGEINFO = 4446,
}

/** Capabilities exist in many varieties but all have a Default Value, Current Value, and may have other values available that can be supported if selected.
 *  To help categorize the supported values into clear structures, TWAIN defines four types of containers for capabilities =
 *  TW_ONEVALUE, TW_ARRAY, TW_RANGE and TW_ENUMERATION.
 */
declare enum EnumDWT_CapType {
    /** Nothing. */
    TWON_NONE = 0,
    /** A rectangular array of values that describe a logical item. It is similar to the TW_ONEVALUE because the current and default values are the same and
     *  there are no other values to select from. For example, a list of the names, such as the supported capabilities list returned by the CAP_SUPPORTEDCAPS
     *  capability, would use this type of container.
     */
    TWON_ARRAY = 3,
    /** This is the most general type because it defines a list of values from which the Current Value can be chosen.
     *  The values do not progress uniformly through a range and there is not a consistent step size between the values.
     *  For example, if a Source's resolution options do not occur in even step sizes then an enumeration would be used (for example, 150, 400, and 600).
     */
    TWON_ENUMERATION = 4,
    /** A single value whose current and default values are coincident. The range of available values for this type of capability is simply this single value.
     *  For example, a capability that indicates the presence of a document feeder could be of this type.
     */
    TWON_ONEVALUE = 5,
    /** Many capabilities allow users to select their current value from a range of regularly spaced values.
     *  The capability can specify the minimum and maximum acceptable values and the incremental step size between the values.
     *  For example, resolution might be supported from 100 to 600 in steps of 50 (100, 150, 200, ..., 550, 600).
     */
    TWON_RANGE = 6,
}

/** ICAP_XFERMECH values. */
declare enum EnumDWT_TransferMode {
    /** Native transfers require the data to be transferred to a single large block of RAM. Therefore,
     *  they always face the risk of having an inadequate amount of RAM available to perform the transfer successfully.
     */
    TWSX_NATIVE = 0,
    /** Disk File Mode Transfers. */
    TWSX_FILE = 1,
    /** Buffered Memory Mode Transfers. */
    TWSX_MEMORY = 2,
    /** added 1.91 */
    TWSX_MEMFILE = 4,
}

/** ICAP_IMAGEFILEFORMAT values. */
declare enum EnumDWT_FileFormat {
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
    /** A file format from Adobe. 1.91 NB: this is not PDF/A  */
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
    TWFF_PDFA2 = 16,
}

/** TIFF file compression type. */
declare enum EnumDWT_TIFFCompressionType {
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
    TIFF_PACKBITS = 32773,
}

/** The method to do interpolation. */
declare enum EnumDWT_InterpolationMethod {
    IM_NEARESTNEIGHBOUR = 1,
    IM_BILINEAR = 2,
    IM_BICUBIC = 3,
    IM_BESTQUALITY = 5,
}

/** Image type */
declare enum EnumDWT_ImageType {
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
    IT_ALL = 5,
}

/** PDF file compression type. */
declare enum EnumDWT_PDFCompressionType {
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
    PDF_JPEG = 5,
}

declare enum EnumDWT_ShowMode {
    /** Activates the window and displays it in its current size and position. */
    SW_ACTIVE = 0,
    /** Maximizes the window */
    SW_MAX = 1,
    /** Minimize the window */
    SW_MIN = 2,
    /** Close the latest opened editor window */
    SW_CLOSE = 3,
    /** Check whether a window exists */
    SW_IFLIVE = 4,
}

/** The kind of data stored in the container. */
declare enum EnumDWT_CapValueType {
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
    TWTY_STR255 = 12,
}

/** ICAP_UNITS values. */
declare enum EnumDWT_UnitType {
    TWUN_INCHES = 0,
    TWUN_CENTIMETERS = 1,
    TWUN_PICAS = 2,
    TWUN_POINTS = 3,
    TWUN_TWIPS = 4,
    TWUN_PIXELS = 5,
    TWUN_MILLIMETERS = 6,
}

/** ICAP_DUPLEX values. */
declare enum EnumDWT_DUPLEX {
    TWDX_NONE = 0,
    TWDX_1PASSDUPLEX = 1,
    TWDX_2PASSDUPLEX = 2,
}

/** CAP_LANGUAGE values. */
declare enum EnumDWT_CapLanguage {
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
    TWLG_VIETNAMESE = 113,
}

/** TWAIN Supported sizes. */
declare enum EnumDWT_CapSupportedSizes {
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
    /** Added 1.5
     *  5
     */
    TWSS_A5 = 5,
    /** 6 */
    TWSS_B4 = 6,
    /** 7 */
    TWSS_B6 = 7,
    /** Added 1.7
     *  9
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
    /** Added 1.8
     *  17
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
    TWSS_MAXSIZE = 54,
}

/** CAP_FEEDERALIGNMENT values. */
declare enum EnumDWT_CapFeederAlignment {
    /** The alignment is free-floating. Applications should assume that the origin for frames is on the left. */
    TWFA_NONE = 0,
    /** The alignment is to the left. */
    TWFA_LEFT = 1,
    /** The alignment is centered. This means that the paper will be fed in the middle of the ICAP_PHYSICALWIDTH of the
     *  device. If this is set, then the Application should calculate any frames with a left offset of zero.
     */
    TWFA_CENTER = 2,
    /** The alignment is to the right. */
    TWFA_RIGHT = 3,
}
/** CAP_FEEDERORDER values. */
declare enum EnumDWT_CapFeederOrder {
    /** The feeder starts with the top of the first page. */
    TWFO_FIRSTPAGEFIRST = 0,
    /** The feeder starts with the top of the last page. */
    TWFO_LASTPAGEFIRST = 1,
}

/** CAP_PRINTER values. */
declare enum EnumDWT_CapPrinter {
    TWPR_IMPRINTERTOPBEFORE = 0,
    TWPR_IMPRINTERTOPAFTER = 1,
    TWPR_IMPRINTERBOTTOMBEFORE = 2,
    TWPR_IMPRINTERBOTTOMAFTER = 3,
    TWPR_ENDORSERTOPBEFORE = 4,
    TWPR_ENDORSERTOPAFTER = 5,
    TWPR_ENDORSERBOTTOMBEFORE = 6,
    TWPR_ENDORSERBOTTOMAFTER = 7,
}

/** CAP_PRINTERMODE values. */
declare enum EnumDWT_CapPrinterMode {
    /** Specifies that the printed text will consist of a single string. */
    TWPM_SINGLESTRING = 0,
    /** Specifies that the printed text will consist of an enumerated list of strings to be printed in order. */
    TWPM_MULTISTRING = 1,
    /** Specifies that the printed string will consist of a compound of a String followed by a value followed by a suffix string. */
    TWPM_COMPOUNDSTRING = 2,
}

/** ICAP_BITDEPTHREDUCTION values. */
declare enum EnumDWT_CapBitdepthReduction {
    TWBR_THRESHOLD = 0,
    TWBR_HALFTONE = 1,
    TWBR_CUSTHALFTONE = 2,
    TWBR_DIFFUSION = 3,
}

/** ICAP_BITORDER values. */
declare enum EnumDWT_CapBitOrder {
    TWBO_LSBFIRST = 0,
    /** Indicates that the leftmost bit in the byte (usually bit 7) is the byte's Most Significant Bit. */
    TWBO_MSBFIRST = 1,
}

/** ICAP_FILTER values. */
declare enum EnumDWT_CapFilterType {
    TWFT_RED = 0,
    TWFT_GREEN = 1,
    TWFT_BLUE = 2,
    TWFT_NONE = 3,
    TWFT_WHITE = 4,
    TWFT_CYAN = 5,
    TWFT_MAGENTA = 6,
    TWFT_YELLOW = 7,
    TWFT_BLACK = 8,
}

/** ICAP_FLASHUSED2 values. */
declare enum EnumDWT_CapFlash {
    TWFL_NONE = 0,
    TWFL_OFF = 1,
    TWFL_ON = 2,
    TWFL_AUTO = 3,
    TWFL_REDEYE = 4,
}

/** ICAP_FLIPROTATION values. */
declare enum EnumDWT_CapFlipRotation {
    /** The images to be scanned are viewed in book form, flipping each page from left to right or right to left. */
    TWFR_BOOK = 0,
    /** The images to be scanned are viewed in fanfold paper style, flipping each page up or down. */
    TWFR_FANFOLD = 1,
}

/** ICAP_IMAGEFILTER values. */
declare enum EnumDWT_CapImageFilter {
    TWIF_NONE = 0,
    TWIF_AUTO = 1,
    /** Good for halftone images. */
    TWIF_LOWPASS = 2,
    /** Good for improving text. */
    TWIF_BANDPASS = 3,
    /** Good for improving fine lines. */
    TWIF_HIGHPASS = 4,
    TWIF_TEXT = 3,
    TWIF_FINELINE = 4,
}

/** ICAP_LIGHTPATH values. */
declare enum EnumDWT_CapLightPath {
    TWLP_REFLECTIVE = 0,
    TWLP_TRANSMISSIVE = 1,
}

/** ICAP_LIGHTSOURCE values. */
declare enum EnumDWT_CapLightSource {
    TWLS_RED = 0,
    TWLS_GREEN = 1,
    TWLS_BLUE = 2,
    TWLS_NONE = 3,
    TWLS_WHITE = 4,
    TWLS_UV = 5,
    TWLS_IR = 6,
}

/** TWEI_MAGTYPE values. (MD_ means Mag Type) Added 2.0  */
declare enum EnumDWT_MagType {
    /** Added 2.0  */
    TWMD_MICR = 0,
    /** added 2.1   */
    TWMD_RAW = 1,
    /** added 2.1  */
    TWMD_INVALID = 2,
}

/** ICAP_NOISEFILTER values. */
declare enum EnumDWT_CapNoiseFilter {
    TWNF_NONE = 0,
    TWNF_AUTO = 1,
    TWNF_LONEPIXEL = 2,
    TWNF_MAJORITYRULE = 3,
}

/** ICAP_ORIENTATION values. */
declare enum EnumDWT_CapORientation {
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
    TWOR_AUTOPICTURE = 6,
}

/** ICAP_OVERSCAN values. */
declare enum EnumDWT_CapOverscan {
    TWOV_NONE = 0,
    TWOV_AUTO = 1,
    TWOV_TOPBOTTOM = 2,
    TWOV_LEFTRIGHT = 3,
    TWOV_ALL = 4,
}

/** ICAP_PIXELFLAVOR values. */
declare enum EnumDWT_CapPixelFlavor {
    /** Zero pixel represents darkest shade. zero pixel represents darkest shade   */
    TWPF_CHOCOLATE = 0,
    /** Zero pixel represents lightest shade. zero pixel represents lightest shade  */
    TWPF_VANILLA = 1,
}

/** ICAP_PLANARCHUNKY values. */
declare enum EnumDWT_CapPlanarChunky {
    TWPC_CHUNKY = 0,
    TWPC_PLANAR = 1,
}

/** Data source status. */
declare enum EnumDWT_DataSourceStatus {
    /** Indicate the data source is closed.  */
    TWDSS_CLOSED = 0,
    /** Indicate the data source is opened. */
    TWDSS_OPENED = 1,
    /** Indicate the data source is enabled.  */
    TWDSS_ENABLED = 2,
    /** Indicate the data source is acquiring image. */
    TWDSS_ACQUIRING = 3,
}

/** Fit window type */
declare enum EnumDWT_FitWindowType {
    /** Fit the image to the width and height of the window */
    enumFitWindow = 0,
    /** Fit the image to the height of the window */
    enumFitWindowHeight = 1,
    /** Fit the image to the width of the window */
    enumFitWindowWidth = 2,
}

declare enum EnumDWT_UploadDataFormat {
    Binary = 0,
    Base64 = 1,
}

declare enum EnumDWT_MouseShape {
    Default = 0,
    Hand = 1,
    Crosshair = 2,
    Zoom = 3,
}

/** */
// properties (get/set) / sync functions
interface WebTwain {
    /**
     * Returns or sets whether multi-page selection is supported.
     */
    AllowMultiSelect: boolean;

    /**
     * [Deprecated.] Returns or sets whether allowing the plugin to send authentication request. The default value of this property is TRUE.
     */
    AllowPluginAuthentication: boolean;

    /**
     * [Deprecated.] Returns or sets whether the async mode is activated. With this mode, Dynamic Web TWAIN is able to upload/download files via HTTP/FTP asynchronously. The default value is false.
     */
    AsyncMode: boolean;

    /**
     * Returns or sets the background color of the main control. It is a value specifying the 24-bit RGB value.
     */
    BackgroundColor: number;

    /**
     * Returns or sets the fill color of the selected area of an image when it is cut, erased or rotated. It is a value specifying the 24-bit RGB value.
     */
    BackgroundFillColor: number;

    /**
     * [Deprecated.] Returns the number of barcode detected in an image.
     */
    BarcodeCount: number;

    /**
     * Returns or sets the pixel bit depths for the current value of PixelType property. This is a runtime property.
     */
    BitDepth: number;

    /**
     * Returns the current deviation of the pixels in the image.
     */
    BlankImageCurrentStdDev: number;

    /**
     * Returns or sets the standard deviation of the pixels in the image.
     */
    BlankImageMaxStdDev: number;

    /**
     * Returns or sets the dividing line between black and white. The default value is 128.
     */
    BlankImageThreshold: number;

    /**
     * [Deprecated.] Returns or sets the border style.
     */
    BorderStyle: EnumDWT_BorderStyle;

    /**
     * Returns or sets the brightness values available within the Source. This is a runtime property.
     */
    Brightness: number;

    /**
     * [Deprecated.] Sets or returns whether brokerprocess is enabled for scanning.
     */
    BrokerProcessType: number;

    /**
     * Sets or returns how much physical memory is allowed for storing images currently loaded in Dynamic Web TWAIN. Once the limit is reached, images will be cached on the hard disk.
     */
    BufferMemoryLimit: number;

    /**
     * Specifies the capabiltiy to be negotiated. This is a runtime property.
     */
    Capability: EnumDWT_Cap;

    /**
     * Sets or returns the index (0-based) of a list to indicate the Current Value when the value of the CapType property is TWON_ENUMERATION. If the data type of the capability is String, the list is in CapItemsString property. For other data types, the list is in CapItems property. This is a runtime property.
     */
    CapCurrentIndex: number;

    /**
     * Sets or returns the current value in a range when the value of the CapType property is TWON_RANGE. This is a runtime property.
     */
    CapCurrentValue: number;

    /**
     * Returns the index (0-based) of a list to indicate the Default Value when the value of the CapType property is TWON_ENUMERATION. If the data type of the capability is String, the list is in CapItemsString property. For other data types, the list is in CapItems property. This is a runtime, read-only property.
     */
    CapDefaultIndex: number;

    /**
     * Returns the default value in a range when the value of the CapType property is TWON_RANGE. This is a runtime, read-only property.
     */
    CapDefaultValue: number;

    /**
     * Sets or returns the maximum value in a range when the value of the CapType property is TWON_RANGE. This is a runtime property.
     */
    CapMaxValue: number;

    /**
     * Sets or returns the minimum value in a range when the value of the CapType property is TWON_RANGE. This is a runtime property.
     */
    CapMinValue: number;

    /**
     * [Deprecated.] Sets or returns how many items are in the list when the value of the CapType property is TWON_ARRAY or TWON_ENUMERATION. For String data type, the list is in CapItemsString property. For other data types, the list is in CapItems property. This is a runtime property.
     */
    CapNumItems: number;

    /**
     * [Deprecated.] Replaced by GetCapItemsString method and SetCapItemsString method.
     */
    CapItemsString: string;

    /**
     * Sets or returns the step size in a range when the value of the CapType property is TWON_RANGE. This is a runtime property.
     */
    CapStepSize: number;

    /**
     * Sets or returns the type of capability container used to exchange capability information between application and source. This is a runtime property.
     */
    CapType: EnumDWT_CapType;

    /**
     * Returns or sets the value of the capability specified by Capability property when the value of the CapType property is TWON_ONEVALUE. This is a runtime property.
     */
    CapValue: number;

    /**
     * Sets or returns the string value for a capability when the value of the CapType property is TWON_ONEVALUE. This is a runtime property.
     */
    CapValueString: string;

    /**
     * Sets or returns the value type for reading the value of a capability. This is a runtime property.
     */
    CapValueType: number;

    /**
     * Returns or sets the contrast values available within the Source. This is a runtime property.
     */
    Contrast: number;

    /**
     * Sets or returns the product name string for the application identity.
     */
    ProductName: string;

    /**
     * Returns or sets current index of image in buffer. This is a runtime property.
     */
    CurrentImageIndexInBuffer: number;

    /**
     * Returns the device name of current source. This is a runtime, read-only property.
     */
    CurrentSourceName: string;

    /**
     * Returns the value indicating the data source status. This is a runtime, read-only property.
     */
    DataSourceStatus: number;

    /**
     * Returns the device name of default source. This is a runtime, read-only property.
     */
    DefaultSourceName: string;

    /**
     * Returns whether the source supports duplex. If so, it further returns the level of duplex the Source supports (one pass or two pass duplex). This is a runtime, read-only property.
     */
    Duplex: number;

    /**
     * [Deprecated.] Returns or sets whether the user can zoom image using hot key.
     */
    EnableInteractiveZoom: boolean;

    /**
     * Returns the error code. This is a runtime, read-only property.
     */
    ErrorCode: number;

    /**
     * Returns the error string. This is a runtime, read-only property.
     */
    ErrorString: string;

    /**
     * Returns or sets whether to resize the image to fit the image to the width or height of the window. To use the property, the view mode should be set to -1 by -1. You can use SetViewMode method to set the view mode.
     */
    FitWindowType: EnumDWT_FitWindowType;

    /**
     * Returns or sets the password used to log into the FTP server.
     */
    FTPPassword: string;

    /**
     * Returns or sets the port number of the FTP server.
     */
    FTPPort: number;

    /**
     * Returns or sets the user name used to log into the FTP server.
     */
    FTPUserName: string;

    /**
     * Returns how many images are in buffer. This is a runtime, read-only property.
     */
    HowManyImagesInBuffer: number;

    /**
     * Specifies the field name of uploaded image through POST.
     */
    HttpFieldNameOfUploadedImage: string;

    /**
     * [Deprecated.] Sets or returns the password used to log into the HTTP server.
     */
    HTTPPassword: string;

    /**
     * Returns or sets the port number of the HTTP server.
     */
    HTTPPort: number;

    /**
     * Returns the response string from the HTTP server if an error occurs for HTTPUploadThroughPost() method. This is a runtime, read-only property.
     */
    HTTPPostResponseString: string;

    /**
     * [Deprecated.] Returns or sets the user name used to log into the HTTP server.
     */
    HTTPUserName: string;

    /**
     * Returns or sets whether the feature of disk caching is enabled.
     */
    IfAllowLocalCache: boolean;

    /**
     * Returns or sets whether insert or append new scanned images.
     */
    IfAppendImage: boolean;

    /**
     * Returns or sets whether the Source's Auto-brightness function is enabled. This is a runtime property.
     */
    IfAutoBright: boolean;

    /**
     * Returns or sets whether the data source (scanner) will discard blank images during scanning. The property works only if the device and its driver support discarding blank pages. You can find whether your device supports this capbility from its user manual. Or, you can use the built-in methods of Dynamic Web TWAIN to detect blank images: IsBlankImage, IsBlankImageEx.
     */
    IfAutoDiscardBlankpages: boolean;

    /**
     * Returns or sets whether the Source enable automatic document feeding process. This is a runtime property.
     */
    IfAutoFeed: boolean;

    /**
     * Turns automatic border detection on and off. The property works only if the device and its driver support detecting the border automatically. You can find whether your device supports this capbility from its user manual.
     */
    IfAutomaticBorderDetection: boolean;

    /**
     * Turns automatic skew correction on and off.
     */
    IfAutomaticDeskew: boolean;

    /**
     * Returns or sets whether the Source enables the automatic document scanning process. This is a runtime property.
     */
    IfAutoScan: boolean;

    /**
     * Returns or sets whether close the Data Source User Interface after acquire all images. Default value of this property is FALSE.
     */
    IfDisableSourceAfterAcquire: boolean;

    /**
     * Returns or sets whether the Source supports duplex. If TRUE, the scanner scans both sides of a paper; otherwise, the scanner will scan only one side of the image. This is a runtime property.
     */
    IfDuplexEnabled: boolean;

    /**
     * Returns or sets whether the Automatic Document Feeder (ADF) is enabled. This is a runtime property.
     */
    IfFeederEnabled: boolean;

    /**
     * Returns whether or not there are documents loaded in the Source's feeder when IfFeederEnabled and IfPaperDetectable are TRUE. This is a runtime, read-only property.
     */
    IfFeederLoaded: boolean;

    /**
     * Returns or sets whether to resize the image to fit the size of window when the view mode is set to -1 by -1. You can use SetViewMode method to set the view mode.
     */
    IfFitWindow: boolean;

    /**
     * [Deprecated.] Returns or sets whether the UI (User Interface) of Source runs in modal state. Default value of this property is TRUE.
     */
    IfModalUI: boolean;

    /**
     * Sets or returns whether Dynamic Web TWAIN uses  Graphics Device Interface (GDI) when decoding images.
     */
    IfOpenImageWithGDIPlus: boolean;

    /**
     * Returns the value whether the Source has a paper sensor that can detect documents on the ADF or Flatbed. This is a runtime, read-only property.
     */
    IfPaperDetectable: boolean;

    /**
     * Returns or sets whether FTP passive mode is enabled.
     */
    IfPASVMode: boolean;

    /**
     * [Deprecated.] Returns or sets whether communicate with device in a separate thread. Default value of this property is FALSE.
     */
    IfScanInNewThread: boolean;

    /**
     * Sets or returns whether to show the cancel dialog when uploading images to server.
     */
    IfShowCancelDialogWhenImageTransfer: boolean;

    /**
     * Returns or sets whether to show the file dialog box when saving scanned images or loading images from local folder.
     */
    IfShowFileDialog: boolean;

    /**
     * Returns or sets whether the Source displays a progress indicator during acquisition and transfer, regardless of whether the Source's user interface is active. This is a runtime property.
     */
    IfShowIndicator: boolean;

    /**
     * [Deprecated.] Returns or sets whether the driver of the printer displays the User Interface.
     */
    IfShowPrintUI: boolean;

    /**
     * Returns or sets whether the progress bar will be displayed during the transaction. This is a runtime property.
     */
    IfShowProgressBar: boolean;

    /**
     * Returns or sets whether the Source displays the User Interface.
     */
    IfShowUI: boolean;

    /**
     * Returns or sets whether SSL is used when uploading or downloading images.
     */
    IfSSL: boolean;

    /**
     * Return or sets whether the Source allows to save many images in one TIFF file. The default value is FALSE.
     */
    IfTiffMultiPage: boolean;

    /**
     * Returns whether the Source supports acquisition with the UI (User Interface) disabled. If FALSE, indicates that this Source can only support acquisition with the UI enabled. This is a runtime, read-only property.
     */
    IfUIControllable: boolean;

    /**
     * Sets or returns whether Dynamic Web TWAIN uses the new TWAIN Data Source Manager (TWAINDSM.dll) when acquiring images from TWAIN devices.
     */
    IfUseTwainDSM: boolean;

    /**
     * Specifies whether or not to automatically scroll to the last image or stay on the current image when loading or acquiring images
     */
    IfAutoScroll: boolean;

    /**
     * [Deprecated.] The number of bits in each image pixel (or bit depth). This is a runtime, read-only property.
     */
    ImageBitsPerPixel: number;

    /**
     * Returns or sets whether a TWAIN driver or Native Scan of Mac OS X is used for document scanning. This property works for Mac edition only.
     */
    ImageCaptureDriverType: number;

    /**
     * [Deprecated.] Returns or sets whether the image enumerator is enabled in Image Editor.
     */
    ImageEditorIfEnableEnumerator: boolean;

    /**
     * [Deprecated.] Returns or sets whether the Image Editor is a modal window.
     */
    ImageEditorIfModal: boolean;

    /**
     * [Deprecated.] Returns or sets whether the Image Editor is read-only.
     */
    ImageEditorIfReadonly: boolean;

    /**
     * [Deprecated.] Returns or sets the title of Image Editor window.
     */
    ImageEditorWindowTitle: string;

    /**
     * Returns the document number of the current image. This is a runtime, read-only property.
     */
    ImageLayoutDocumentNumber: number;

    /**
     * Returns the value of the bottom-most edge of the current image frame (in Unit). This is a read-only runtime property.
     */
    ImageLayoutFrameBottom: number;

    /**
     * Returns the value of the left-most edge of the current image frame (in Unit). This is a runtime, read-only property.
     */
    ImageLayoutFrameLeft: number;

    /**
     * Returns the frame number of the current image. This is a runtime, read-only property.
     */
    ImageLayoutFrameNumber: number;

    /**
     * Returns the value of the right-most edge of the current image frame (in Unit). This is a runtime, read-only property.
     */
    ImageLayoutFrameRight: number;

    /**
     * Returns the value of the top-most edge of the current image frame (in Unit). This is a runtime, read-only property.
     */
    ImageLayoutFrameTop: number;

    /**
     * Returns the page number of the current image. This is a runtime, read-only property.
     */
    ImageLayoutPageNumber: number;

    /**
     * [Deprecated.] Returns how tall/long, in pixels, the image is. This is a runtime, read-only property.
     */
    ImageLength: number;

    /**
     * Returns or sets the margin between images when multiple images are displayed in Dynamic Web TWAIN.
     */
    ImageMargin: number;

    /**
     * Returns the pixel type of the current image. This is a runtime, read-only property. Please note the property is only valid in OnPreTransfer and OnPostTransfer event.
     */
    ImagePixelType: EnumDWT_PixelType;

    /**
     * [Deprecated.] Returns how width, in pixels, the image is. This is a runtime, read-only property.
     */
    ImageWidth: number;

    /**
     * [Deprecated.] Returns the X resolution of the current image. X resolution is the number of pixels per Unit in the horizontal direction. This is a runtime, read-only property.
     */
    ImageXResolution: number;

    /**
     * [Deprecated.] Returns the Y resolution of the current image. Y resolution is the number of pixels per Unit in the vertical direction. This is a runtime, read-only property.
     */
    ImageYResolution: number;

    /**
     * Returns or sets the quality of JPEG files and PDF files using JPEG compression.
     */
    JPEGQuality: number;

    /**
     * Returns or sets the log level for debugging.
     */
    LogLevel: number;

    /**
     * Return the magnetic data if the scanner support magnetic data recognition.
     */
    MagData: string;

    /**
     * Return the magnetic type if the scanner support magnetic data recognition.
     */
    MagType: number;

    /**
     * Sets or returns the manufacture string for the application identity.
     */
    Manufacturer: string;

    /**
     * Returns or sets the maximum number of images can be held in buffer.
     */
    MaxImagesInBuffer: number;

    /**
     * [Deprecated.] Returns or sets how many threads can be used when you upload files through POST.
     */
    MaxInternetTransferThreads: number;

    /**
     * Sets or returns the maximum allowed size when Dynamic Web TWAIN uploads a document.
     */
    MaxUploadImageSize: number;

    /**
     * Returns or sets the shape of the mouse.
     */
    MouseShape: boolean;

    /**
     * Returns the X co-ordinate of the mouse. This is a runtime property.
     */
    MouseX: number;

    /**
     * Returns the Y co-ordinate of the mouse. This is a runtime property.
     */
    MouseY: number;

    /**
     * Returns or sets the page size(s) the Source can/should use to acquire image data. This is a runtime property.
     */
    PageSize: number;

    /**
     * Returns or sets the name of the person who creates the PDF document.
     */
    PDFAuthor: string;

    /**
     * Returns or sets the compression type of PDF files. This is a runtime property.
     */
    PDFCompressionType: EnumDWT_PDFCompressionType;

    /**
     * Returns or sets the date when the PDF document is created.
     */
    PDFCreationDate: string;

    /**
     * Returns or sets the name of the application that created the original document, if the PDF document is converted from another form.
     */
    PDFCreator: string;

    /**
     * Returns or sets the keywords associated with the PDF document.
     */
    PDFKeywords: string;

    /**
     * Returns or sets the date when the PDF document is last modified.
     */
    PDFModifiedDate: string;

    /**
     * Returns or sets the name of the application that converted the PDF document from its native.
     */
    PDFProducer: string;

    /**
     * Returns or sets the subject of the PDF document.
     */
    PDFSubject: string;

    /**
     * Returns or sets the title of the PDF document.
     */
    PDFTitle: string;

    /**
     * Returns or sets the value of the PDF version.
     */
    PDFVersion: string;

    /**
     * Returns the number of transfers the Source is ready to supply, upon demand. This is a runtime, read-only property.
     */
    PendingXfers: number;

    /**
     * Returns or sets the pixel flavor for acquired images. This is a runtime property.
     */
    PixelFlavor: number;

    /**
     * Returns or sets the pixel type of current data source. This is a runtime property. Using this property after calling OpenSource() method and before calling AcquireImage().
     */
    PixelType: EnumDWT_PixelType;

    /**
     * Sets or returns the product family string for the application identity.
     */
    ProductFamily: string;

    /**
     * Sets the product key. A product key is generated in Licensing Tool which is intalled with Dynamic Web TWAIN. Each product key corresponds with a license.
     */
    ProductKey: string;

    /**
     * [Deprecated.] Returns or sets the name of the proxy server.
     */
    ProxyServer: string;

    /**
     * Returns or sets the current resolution for acquired images. This is a runtime property.
     */
    Resolution: number;

    /**
     * Returns or sets how many scanned images are selected.
     */
    SelectedImagesCount: number;

    /**
     * Returns or sets the border color of the selected image. It is a value specifying the 24-bit RGB value.
     */
    SelectionImageBorderColor: number;

    /**
     * Specifies a fixed aspect ratio to be used for selecting an area.
     */
    SelectionRectAspectRatio: number;

    /**
     * Returns how many sources are installed in the system. This is a runtime, read-only property.
     */
    SourceCount: number;

    /**
     * [Deprecated.] Replaced by GetSourceNameItems method.
     */
    SourceNameItems: string;

    /**
     * [Deprecated.]
     */
    GetSourceNames: string;

    /**
     * Returns or sets the compression type of TIFF files. This is a runtime property.
     */
    TIFFCompressionType: EnumDWT_TIFFCompressionType;

    /**
     * Sets or returns the transfer mode.
     */
    TransferMode: EnumDWT_TransferMode;

    /**
     * Returns or sets the unit of measure. This is a runtime property.
     */
    Unit: number;

    /**
     * Sets or returns the version info string for the application identity.
     */
    VersionInfo: string;

    /**
     * Returns and sets the number of images you are willing to transfer per session. This is a runtime property.
     */
    XferCount: number;

    /**
     * Returns or sets zoom factor for the image, only valid When the view mode is set to -1 by -1.
     */
    Zoom: number;

    /**
     * Binds a specified function to an event, so that the function gets called whenever the event fires.
     * @method WebTwain#RegisterEvent
     * @param {string} name the name of the event that the function is bound to.
     * @param {object} evt specifies the function to call when event fires.
     * @return {bool}
     */
    RegisterEvent(name: string, evt: object): boolean;

    // --- SCAN start --

    /**
     * Cancels all pending transfers.
     * @method WebTwain#CancelAllPendingTransfers
     * @return {bool}
     */
    CancelAllPendingTransfers(): boolean;

    /**
     * Closes Data Source.
     * @method WebTwain#CloseSource
     * @return {bool}
     */
    CloseSource(): boolean;

    /**
     * Closes and unloads Data Source Manager.
     * @method WebTwain#CloseSourceManager
     * @return {bool}
     */
    CloseSourceManager(): boolean;

    /**
     * Disable the source. If the source's user interface is displayed when the source is enabled, it will be closed.
     * @method WebTwain#DisableSource
     * @return {bool}
     */
    DisableSource(): boolean;

    /**
     * Sets the Source to eject the current page and advance the next page in the document feeder into the feeder acquire area when IfFeederEnabled is TRUE.
     * @method WebTwain#FeedPage
     * @return {bool}
     */
    FeedPage(): boolean;

    /**
     * Retrieve the device type of the currently selected data source, it might be a scanner, a web camera, etc.
     * @method WebTwain#GetDeviceType
     * @return {int}
     */
    GetDeviceType(): number;

    /**
     * Get the source name according to the source index.
     * @method WebTwain#GetSourceNameItems
     * @param {short} index int index. Index is 0-based and can not be greater than SourceCount property.
     * @return {string}
     */
    GetSourceNameItems(index: number): string;

    /**
     * Loads the specified Source into main memory and causes its initialization,
     * placing Dynamic Web TWAIN into Capability Negotiation state. If no source is
     * specified (no SelectSource() or SelectSourceByIndex() is called), opens the default source.
     * @method WebTwain#OpenSource
     * @return {bool}
     */
    OpenSource(): boolean;

    /**
     * Loads and opens Data Source Manager.
     * @method WebTwain#OpenSourceManager
     * @return {bool}
     */
    OpenSourceManager(): boolean;

    /**
     * Reverts the current image layout to the Data Source's default.
     * @method WebTwain#ResetImageLayout
     * @return {bool}
     */
    ResetImageLayout(): boolean;

    /**
     * Sets the Source to return the current page to the input side of the document feeder and
     * feed the last page from the outside of the feeder back into the acquisition area if IfFeederEnabled is TRUE.
     * @method WebTwain#RewindPage
     * @return {bool}
     */
    RewindPage(): boolean;

    /**
     * Brings up the TWAIN Data Source Manager's Source Selection User Interface (UI)
     * so that user can choose which Data Source to be the current Source.
     * @method WebTwain#SelectSource
     * @return {bool}
     */
    SelectSource(): boolean;

    /**
     * Selects the index-the source in SourceNameItems property as the current source.
     * @method WebTwain#SelectSourceByIndex
     * @param {short} index It is the index of SourceNameItems property.
     * @return {bool}
     */
    SelectSourceByIndex(index: number): boolean;

    /**
     * Sets file name and file format information used in File Transfer Mode.
     * @method WebTwain#SetFileXferInfo
     * @param {string} fileName the name of the file to be used in transfer.
     * @param {EnumDWT_FileFormat} fileFormat an enumerated value indicates the format of the image.
     * @return {bool}
     */
    SetFileXferInfo(fileName: string, fileFormat: EnumDWT_FileFormat): boolean;

    /**
     * Sets the left, top, right, and bottom sides of the image layout rectangle for the current Data Source.
     * @method WebTwain#SetImageLayout
     * @param {float} left specifies the floating point number for the left side of the image layout rectangle.
     * @param {float} top specifies the floating point number for the top side of the image layout rectangle.
     * @param {float} right specifies the floating point number for the right side of the image layout rectangle.
     * @param {float} bottom specifies the floating point number for the bottom side of the image layout rectangle.
     * @return {bool}
     */
    SetImageLayout(left: number, top: number, right: number, bottom: number): boolean;

    /**
     * Clears all the web forms which are used for image uploading.
     * @method WebTwain#ClearAllHTTPFormField
     * @return {bool}
     */
    ClearAllHTTPFormField(): boolean;

    /**
     * Clears the content of all custom tiff tags.
     * @method WebTwain#ClearTiffCustomTag
     * @return {void}
     */
    ClearTiffCustomTag(): void;

    /**
     * Check whether a certain file exists on the local disk.
     * @method WebTwain#FileExists
     * @param {string} localFile specifies the absolute path of the local file.
     * @return {bool}
     */
    FileExists(localFile: string): boolean;

    /**
     * Downloads an image from the FTP server.
     * @method WebTwain#FTPDownload
     * @param {string} FTPServer the name of the FTP server.
     * @param {string} FTPRemoteFile the name of the file to be downloaded. It should be the relative path of the file on the FTP server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    FTPDownload(
        FTPServer: string,
        FTPRemoteFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Directly download a file from the FTP server to local disk without loading it into Dynamic Web TWAIN.
     * @method WebTwain#FTPDownloadDirectly
     * @param {string} FTPServer the name of the FTP server.
     * @param {string} FTPRemoteFile the name of the file to be downloaded. It should be the relative path of the file on the FTP server.
     * @param {string} localFile specify a full path to store the file.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    FTPDownloadDirectly(
        FTPServer: string,
        FTPRemoteFile: string,
        localFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Downloads an image from the FTP server.
     * @method WebTwain#FTPDownloadEx
     * @param {string} FTPServer the name of the FTP server.
     * @param {string} FTPRemoteFile the name of the file to be downloaded. It should be the relative path of the file on the FTP server.
     * @param {EnumDWT_ImageType} lImageType simage format of the file to be downloaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    FTPDownloadEx(
        FTPServer: string,
        FTPRemoteFile: string,
        lImageType: EnumDWT_ImageType,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads the image of a specified index in the buffer to the FTP server.
     * @method WebTwain#FTPUpload
     * @param {string} FTPServer the name of the FTP server.
     * @param {short} sImageIndex specifies the index of the image in the buffer. The index is 0-based.
     * @param {string} FTPRemoteFile the name of the file to be created on the FTP server. It should be a relative path on the FTP server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    FTPUpload(
        FTPServer: string,
        sImageIndex: number,
        FTPRemoteFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Directly upload a specific file to the FTP server without loading it into Dynamic Web TWAIN.
     * @method WebTwain#FTPUploadDirectly
     * @param {string} FTPServer the name of the FTP server.
     * @param {string} localFile specify the the full path of a local file.
     * @param {string} FTPRemoteFile the name of the file to be created on the FTP server. It should be a relative path on the FTP server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    FTPUploadDirectly(
        FTPServer: string,
        localFile: string,
        FTPRemoteFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads the image of a specified index in the buffer to the FTP server as a specified image format.
     * @method WebTwain#FTPUploadEx
     * @param {string} FTPServer the name of the FTP server.
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {string} FTPRemoteFile the name of the file to be created on the FTP server. It should be a relative path on the FTP server.
     * @param {EnumDWT_ImageType} lImageType the image format of the file to be created on the FTP server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    FTPUploadEx(
        FTPServer: string,
        sImageIndex: number,
        FTPRemoteFile: string,
        lImageType: EnumDWT_ImageType,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads all images in buffer to the FTP server as Multi-Page TIFF.
     * @method WebTwain#FTPUploadAllAsMultiPageTIFF
     * @param {string} FTPServer  the name of the FTP server.
     * @param {string} FTPRemoteFile the name of the image to be uploaded. It should be a relative path on the FTP server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    FTPUploadAllAsMultiPageTIFF(
        FTPServer: string,
        FTPRemoteFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads all images in buffer to the FTP server as Multi-Page PDF.
     * @method WebTwain#FTPUploadAllAsPDF
     * @param {string} FTPServer the name of the FTP server.
     * @param {string} FTPRemoteFile the name of the image to be uploaded. It should be a relative path on the FTP server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    FTPUploadAllAsPDF(
        FTPServer: string,
        FTPRemoteFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads the selected images in buffer to the FTP server as Multi-Page PDF.
     * @method WebTwain#FTPUploadAsMultiPagePDF
     * @param {string} FTPServer the name of the FTP server.
     * @param {string} FTPRemoteFile the name of the image to be uploaded. It should be a relative path on the FTP server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    FTPUploadAsMultiPagePDF(
        FTPServer: string,
        FTPRemoteFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads the selected images in buffer to the FTP server as Multi-Page TIFF.
     * @method WebTwain#FTPUploadAsMultiPageTIFF
     * @param {string} FTPServer the name of the FTP server.
     * @param {string} FTPRemoteFile the name of the image to be uploaded. It should be a relative path on the FTP server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    FTPUploadAsMultiPageTIFF(
        FTPServer: string,
        FTPRemoteFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Downloads an image from the HTTP server.
     * @method WebTwain#HTTPDownload
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {string} HTTPRemoteFile the name of the image to be downloaded. It should be the relative path of the file on the HTTP server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPDownload(
        HTTPServer: string,
        HTTPRemoteFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Directly downloads a file from the HTTP server to a local disk without loading it into Dynamic Web TWAIN.
     * @method WebTwain#HTTPDownloadDirectly
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {string} HTTPRemoteFile The relative path of the file on the HTTP server.
     * @param {string} localFile specify the location to store the downloaded file.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPDownloadDirectly(
        HTTPServer: string,
        HTTPRemoteFile: string,
        localFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Downloads an image from the HTTP server.
     * @method WebTwain#HTTPDownloadEx
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {string} HTTPRemoteFile the relative path of the file on the HTTP server, or path to an action page (with necessary parameters) which gets and sends back the image stream to the client (please check the sample for more info)
     * @param {EnumDWT_ImageType} lImageType the image format of the file to be downloaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPDownloadEx(
        HTTPServer: string,
        HTTPRemoteFile: string,
        lImageType: EnumDWT_ImageType,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     *  Download an image from the server using a HTTP Post call.
     * @method WebTwain#HTTPDownloadThroughPost
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {string} HTTPRemoteFile the relative path of the file on the HTTP server, or path to an action page (with necessary parameters) which gets and sends back the image stream to the client (please check the sample for more info)
     * @param {EnumDWT_ImageType} lImageType the image format of the file to be downloaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the download succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the download fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPDownloadThroughPost(
        HTTPServer: string,
        HTTPRemoteFile: string,
        lImageType: EnumDWT_ImageType,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads the image of a specified index in the buffer to the HTTP server through the HTTP POST method.
     * @method WebTwain#HTTPUploadThroughPost
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {string} ActionPage the specified page for posting image files. This is the relative path of the page, not the absolute path. For example: "upload.asp", not "http://www.webserver.com/upload.asp".
     * @param {string} fileName the name of the image to be uploaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnHttpUploadSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnHttpUploadFailure.
     * @return {bool}
     */
    HTTPUploadThroughPost(
        HTTPServer: string,
        sImageIndex: number,
        ActionPage: string,
        fileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Directly upload a specific local file to the HTTP server through the HTTP POST method without loading it into Dynamic Web TWAIN.
     * @method WebTwain#HTTPUploadThroughPostDirectly
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {string} localFile specifies the path of a local file .
     * @param {string} ActionPage the specified page for posting files. This is the relative path of the page, not the absolute path. For example: "upload.asp", not "http://www.webserver.com/upload.asp".
     * @param {string} fileName the name of the file to be uploaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnHttpUploadSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnHttpUploadFailure.
     * @return {bool}
     */
    HTTPUploadThroughPostDirectly(
        HTTPServer: string,
        localFile: string,
        ActionPage: string,
        fileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads the image of a specified index in the buffer to the HTTP server as a specified image format through the HTTP POST method.
     * @method WebTwain#HTTPUploadThroughPostEx
     * @param {string} HTTPServer  the name of the HTTP server.
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {string} ActionPage the specified page for posting image files. This is the relative path of the page, not the absolute path. For example: "upload.asp", not "http://www.webserver.com/upload.asp".
     * @param {string} fileName the name of the image to be uploaded.
     * @param {EnumDWT_ImageType} lImageType the image format of the file to be created on the HTTP server.s
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnHttpUploadSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnHttpUploadFailure.
     * @return {bool}
     */
    HTTPUploadThroughPostEx(
        HTTPServer: string,
        sImageIndex: number,
        ActionPage: string,
        fileName: string,
        lImageType: EnumDWT_ImageType,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads all images in the buffer to the HTTP server through the HTTP Post method as a Multi-Page TIFF.
     * @method WebTwain#HTTPUploadAllThroughPostAsMultiPageTIFF
     * @param {string} HTTPServer  the name of the HTTP server.
     * @param {string} ActionPage the specified page for posting image files. This is the relative path of the page, not the absolute path. For example: "upload.asp", not "http://www.webserver.com/upload.asp".
     * @param {string} fileName the name of the image to be uploaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnHttpUploadSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnHttpUploadFailure.
     * @return {bool}
     */
    HTTPUploadAllThroughPostAsMultiPageTIFF(
        HTTPServer: string,
        ActionPage: string,
        fileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads the selected images in the buffer to the HTTP server through the HTTP Post method as a Multi-Page TIFF.
     * @method WebTwain#HTTPUploadThroughPostAsMultiPageTIFF
     * @param {string} HTTPServer  the name of the HTTP server.
     * @param {string} ActionPage the specified page for posting image files. This is the relative path of the page, not the absolute path. For example: "upload.asp", not "http://www.webserver.com/upload.asp".
     * @param {string} fileName the name of the image to be uploaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnHttpUploadSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnHttpUploadFailure.
     * @return {bool}
     */
    HTTPUploadThroughPostAsMultiPageTIFF(
        HTTPServer: string,
        ActionPage: string,
        fileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads all images in the buffer to the HTTP server through HTTP Post method as a Multi-Page PDF.
     * @method WebTwain#HTTPUploadAllThroughPostAsPDF
     * @param {string} HTTPServer  the name of the HTTP server.
     * @param {string} ActionPage the specified page for posting image files. This is the relative path of the page, not the absolute path. For example: "upload.asp", not "http://www.webserver.com/upload.asp".
     * @param {string} fileName the name of the image to be uploaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnHttpUploadSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnHttpUploadFailure.
     * @return {bool}
     */
    HTTPUploadAllThroughPostAsPDF(
        HTTPServer: string,
        ActionPage: string,
        fileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Uploads the selected images in the buffer to the HTTP server through the HTTP Post method as a Multi-Page PDF.
     * @method WebTwain#HTTPUploadThroughPostAsMultiPagePDF
     * @param {string} HTTPServer  the name of the HTTP server.
     * @param {string} ActionPage the specified page for posting image files. This is the relative path of the page, not the absolute path. For example: "upload.asp", not "http://www.webserver.com/upload.asp".
     * @param {string} fileName the name of the image to be uploaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnHttpUploadSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnHttpUploadFailure.
     * @return {bool}
     */
    HTTPUploadThroughPostAsMultiPagePDF(
        HTTPServer: string,
        ActionPage: string,
        fileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * [Deprecated.] Directly uploads a specific local file to the HTTP server through the HTTP PUT method without loading it into Dynamic Web TWAIN.
     * @method WebTwain#HTTPUploadThroughPutDirectly
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {string} localFile specifies the path of a local file.
     * @param {string} RemoteFileName the name of the file to be created on the HTTP server. It should a relative path on the web server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPUploadThroughPutDirectly(
        HTTPServer: string,
        localFile: string,
        RemoteFileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * [Deprecated.] Uploads the image of a specified index in the buffer to the HTTP server through the HTTP PUT method.
     * @method WebTwain#HTTPUploadThroughPut
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {string} RemoteFileName the name of the image to be created on the HTTP server. It should a relative path on the web server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPUploadThroughPut(
        HTTPServer: string,
        sImageIndex: number,
        RemoteFileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * [Deprecated.] Uploads the image of a specified index in the buffer to the HTTP server as a specified image format through the HTTP PUT method.
     * @method WebTwain#HTTPUploadThroughPutEx
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {string} RemoteFileName the name of the file to be created on the HTTP server. It should a relative path on the web server.
     * @param {EnumDWT_ImageType} lImageType the image format of the file to be created on the HTTP server.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPUploadThroughPutEx(
        HTTPServer: string,
        sImageIndex: number,
        RemoteFileName: string,
        lImageType: EnumDWT_ImageType,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * [Deprecated.] Uploads all images in the buffer to the HTTP server through the HTTP Put method as a Multi-Page TIFF.
     * @method WebTwain#HTTPUploadAllThroughPutAsMultiPageTIFF
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {string} RemoteFileName the name of the image to be uploaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPUploadAllThroughPutAsMultiPageTIFF(
        HTTPServer: string,
        RemoteFileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * [Deprecated.] Uploads the selected images in the buffer to the HTTP server through the HTTP Put method as a Multi-Page TIFF.
     * @method WebTwain#HTTPUploadThroughPutAsMultiPageTIFF
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {string} RemoteFileName the name of the image to be uploaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPUploadThroughPutAsMultiPageTIFF(
        HTTPServer: string,
        RemoteFileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * [Deprecated.] Uploads all images in the buffer to the HTTP server through the HTTP Put method as a Multi-Page PDF.
     * @method WebTwain#HTTPUploadAllThroughPutAsPDF
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {string} RemoteFileName the name of the image to be uploaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPUploadAllThroughPutAsPDF(
        HTTPServer: string,
        RemoteFileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * [Deprecated.] Uploads the selected images in the buffer to the HTTP server through the HTTP Put method as a Multi-Page PDF.
     * @method WebTwain#HTTPUploadThroughPutAsMultiPagePDF
     * @param {string} HTTPServer the name of the HTTP server.
     * @param {string} RemoteFileName the name of the image to be uploaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPUploadThroughPutAsMultiPagePDF(
        HTTPServer: string,
        RemoteFileName: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Configures how segmented upload is done.
     * @method WebTwain#SetUploadSegment
     * @param {int} segmentUploadThreshold specifies the threshold (in MB) over which segmented upload will be invoked.
     * @param {int} moduleSize specifies the size of each segment (in KB).
     * @return {bool}
     */
    SetUploadSegment(segmentUploadThreshold: number, moduleSize: number): boolean;

    /**
     * Uploads the images specified by the indices to the HTTP server.
     * @method WebTwain#HTTPUpload
     * @param {string} url the url where the images are sent in a POST request.
     * @param {Array} indices indices specifies which images are to be uploaded.
     * @param {EnumDWT_ImageType} enumImageType the image format in which the images are to be uploaded.
     * @param {EnumDWT_UploadDataFormat} dataFormat whether to upload the images as binary or a base64-based string.
     * @param {function} asyncSuccessFunc the function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} asyncFailureFunc the function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    HTTPUpload(
        url: string,
        indices: number[],
        enumImageType: EnumDWT_ImageType,
        dataFormat: EnumDWT_UploadDataFormat,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Loads a DIB format image from Clipboard into the Dynamic Web TWAIN.
     * @method WebTwain#LoadDibFromClipboard
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the loading succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the loading fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    LoadDibFromClipboard(
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Loads an image into the Dynamic Web TWAIN.
     * @method WebTwain#LoadImage
     * @param {string} localFile the name of the image to be loaded. It should be the absolute path of the image file on the local disk.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the loading succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the loading fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    LoadImage(
        localFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Loads an image into the Dynamic Web TWAIN.
     * @method WebTwain#LoadImageEx
     * @param {string} localFile the name of the image to be loaded. It should be the absolute path of the image file on the local disk.
     * @param {EnumDWT_ImageType} lImageType the image format of the file to be loaded.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the loading succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the loading fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    LoadImageEx(
        localFile: string,
        lImageType: EnumDWT_ImageType,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Loads image from a base64 byte array with the specified file format.
     * @method WebTwain#LoadImageFromBase64Binary
     * @param {string} bry specifies the base64 string data.
     * @param {EnumDWT_ImageType} lImageType specifies the file format.
     * @return {bool}
     */
    LoadImageFromBase64Binary(bry: string, lImageType: EnumDWT_ImageType): boolean;

    /**
     * [Deprecated.] Loads image from a byte array with the specified file format.
     * @method WebTwain#LoadImageFromBytes
     * @param {int} lBufferSize Specifies the buffer size.
     * @param {Array} buffer A byte array of the image data.
     * @param {EnumDWT_ImageType} lImageType Specifies the file format.
     * @return {bool}
     */
    LoadImageFromBytes(lBufferSize: number, buffer: number[], lImageType: EnumDWT_ImageType): boolean;

    /**
     * Saves all images in buffer as a MultiPage TIFF file.
     * @method WebTwain#SaveAllAsMultiPageTIFF
     * @param {string} localFile the name of the MultiPage TIFF file to be saved. It should be an absolute path on the local disk.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the saving succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the saving fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    SaveAllAsMultiPageTIFF(
        localFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Saves all images in buffer as a Multi-Page PDF file.
     * @method WebTwain#SaveAllAsPDF
     * @param {string} localFile the name of the Multi-Page PDF file to be saved. It should be an absolute path on the local disk.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the saving succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the saving fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    SaveAllAsPDF(
        localFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Saves the image of a specified index in buffer as a BMP file.
     * @method WebTwain#SaveAsBMP
     * @param {string} localFile the name of the BMP file to be saved. It should be an absolute path on the local disk.
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    SaveAsBMP(localFile: string, sImageIndex: number): boolean;

    /**
     * Saves the image of a specified index in buffer as a JPEG file.
     * @method WebTwain#SaveAsJPEG
     * @param {string} localFile the name of the JPEG file to be saved. It should be an absolute path on the local disk.
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    SaveAsJPEG(localFile: string, sImageIndex: number): boolean;

    /**
     * Saves the image of a specified index in buffer as a PDF file.
     * @method WebTwain#SaveAsPDF
     * @param {string} localFile the name of the JPEG file to be saved. It should be an absolute path on the local disk.
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    SaveAsPDF(localFile: string, sImageIndex: number): boolean;

    /**
     * Saves the image of a specified index in buffer as a PNG file.
     * @method WebTwain#SaveAsPNG
     * @param {string} localFile the name of the JPEG file to be saved. It should be an absolute path on the local disk.
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    SaveAsPNG(localFile: string, sImageIndex: number): boolean;

    /**
     * Saves the image of a specified index in buffer as a TIFF file.
     * @method WebTwain#SaveAsTIFF
     * @param {string} localFile the name of the JPEG file to be saved. It should be an absolute path on the local disk.
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    SaveAsTIFF(localFile: string, sImageIndex: number): boolean;

    /**
     * Saves the selected images in buffer as a Multipage PDF file.
     * @method WebTwain#SaveSelectedImagesAsMultiPagePDF
     * @param {string} localFile  the name of the MultiPage PDF file to be saved. It should be an absolute path on the local disk.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the saving succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the saving fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    SaveSelectedImagesAsMultiPagePDF(
        localFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Saves the selected images in buffer as a Multipage TIFF file.
     * @method WebTwain#SaveSelectedImagesAsMultiPageTIFF
     * @param {string} localFile  the name of the MultiPage TIFF file to be saved. It should be an absolute path on the local disk.
     * @param {function} optionalAsyncSuccessFunc optional. The function to call when the saving succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} optionalAsyncFailureFunc optional. The function to call when the saving fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    SaveSelectedImagesAsMultiPageTIFF(
        localFile: string,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Saves the selected images in buffer to base64 string.
     * @method WebTwain#SaveSelectedImagesToBase64Binary
     * @return {string}
     */
    SaveSelectedImagesToBase64Binary(): string;

    /**
     * [Deprecated.] Saves the selected images in buffer to a byte array in the specified file format.
     * @method WebTwain#SaveSelectedImagesToBytes
     * @param {int} bufferSize specified the buffer size.
     * @param {Array} buffer A byte array of the image data.
     * @return {int}
     */
    SaveSelectedImagesToBytes(bufferSize: number, buffer: number[]): number;

    /**
     * [Deprecated.] Sets current cookie into the Http Header to be used when uploading scanned images through POST.
     * @method WebTwain#SetCookie
     * @param {string} cookie  the cookie on current page.
     * @return {void}
     */
    SetCookie(cookie: string): void;

    /**
     * Sets a text parameter as a filed in a web form. This form is maintained by the component itself (meaning it's not on the page). All fields in this form will be passed to the server when uploading images.
     * @method WebTwain#SetHTTPFormField
     * @param {string} FieldName specifies the name of a text field in web form.
     * @param {string} FieldValue specifies the value of a text field in web form.
     * @return {bool}
     */
    SetHTTPFormField(FieldName: string, FieldValue: string): boolean;

    /**
     * Sets a custom tiff tag. Currently you can set up to 32 tags. The string to be set in a tag can be encoded with base64.
     * @method WebTwain#SetTiffCustomTag
     * @param {int} tag specifies the tag identifier. The value should be between 600 and 700.
     * @param {string} content the string to be set for this tag. The string will be written to the .tiff file when you save/upload it. If the string is base64 encoded, we'll decode it before writing it.
     * @param {bool} base64Str if you'd like to encode the string with base64, set this to true. Otherwise, the string will be plin text.
     * @return {bool}
     */
    SetTiffCustomTag(tag: number, content: string, base64Str: boolean): boolean;

    /**
     * Show save file dialog or show open file dialog.
     * @method WebTwain#ShowFileDialog
     * @param {bool} SaveDialog True -- show save file dialog, False -- show open file dialog.
     * @param {string} Filter The filter name specifies the filter pattern (for example, "*.TXT"). To specify multiple filter patterns for a single display string, use a semicolon to separate the patterns (for example, "*.TXT;*.DOC;*.BAK"). A pattern string can be a combination of valid file name characters and the asterisk (*) wildcard character. Do not include spaces in the pattern string. To retrieve a shortcut's target without filtering, use the string "All Files\0*.*\0\0", but the program will replace  "\0" with "|" automatically.
     * @param {int} FilterIndex The index of the currently selected filter in the File Types control. The buffer pointed to by Filter contains pairs of strings that define the filters. The index is 0-based.
     * @param {string} DefExtension Define the default extension. GetOpenFileName and GetSaveFileName append this extension to the file name only if the user fails to type an extension. If this member is NULL and the user fails to type an extension, no extension is appended.
     * @param {string} InitialDir The initial directory. The algorithm for selecting the initial directory varies on different platforms.
     * @param {bool} AllowMultiSelect True -- allows users to select more than one file, False -- only allows to select one file.
     * @param {bool} OverwritePrompt True -- If a file already exists with the same name, the old file will be simply overwritten, False -- not allows to save and overwrite a same name file.
     * @param {int} Flags If this parameter equals 0, the program will be initiated with the default flags, otherwise initiated with the cumstom value and paramters "AllowMultiSelect" and "OverwritePrompt" will be useless.
     * @return {bool}
     */
    ShowFileDialog(
        SaveDialog: boolean,
        Filter: string,
        FilterIndex: number,
        DefExtension: string,
        InitialDir: string,
        AllowMultiSelect: boolean,
        OverwritePrompt: boolean,
        Flags: number,
    ): boolean;

    /**
     * Gets information of the capability specified by the Capability property.
     * @method WebTwain#CapGet
     * @return {bool}
     */
    CapGet(): boolean;

    /**
     * Returns the Source's current Value for the specified capability.
     * @method WebTwain#CapGetCurrent
     * @return {bool}
     */
    CapGetCurrent(): boolean;

    /**
     * Returns the Source's Default Value for the specified capability. This is the Source's preferred default value.
     * @method WebTwain#CapGetDefault
     * @return {bool}
     */
    CapGetDefault(): boolean;

    /**
     * Returns the value of the bottom-most edge of the specified frame.
     * @method WebTwain#CapGetFrameBottom
     * @param {short} index specifies the value of which frame to get. The index is 0-based.
     * @return {float}
     */
    CapGetFrameBottom(index: number): number;

    /**
     * Returns the value (in Unit) of the left-most edge of the specified frame.
     * @method WebTwain#CapGetFrameLeft
     * @param {short} index specifies the value of which frame to get. The index is 0-based.
     * @return {float}
     */
    CapGetFrameLeft(index: number): number;

    /**
     * Returns the value (in Unit) of the left-most edge of the specified frame.
     * @method WebTwain#CapGetFrameRight
     * @param {short} index specifies the value of which frame to get. The index is 0-based.
     * @return {float}
     */
    CapGetFrameRight(index: number): number;

    /**
     * Returns the value (in Unit) of the top-most edge of the specified frame.
     * @method WebTwain#CapGetFrameTop
     * @param {short} index specifies the value of which frame to get. The index is 0-based.
     * @return {float}
     */
    CapGetFrameTop(index: number): number;

    /**
     * Queries whether the Source supports a particular operation on the capability.
     * @method WebTwain#CapIfSupported
     * @param {EnumDWT_MessageType} messageType specifies the type of capability operation.
     * @return {bool}
     */
    CapIfSupported(messageType: EnumDWT_MessageType): boolean;

    /**
     * Changes the Current Value of the capability specified by Capability property back to its power-on value.
     * @method WebTwain#CapReset
     * @return {bool}
     */
    CapReset(): boolean;

    /**
     * Sets the current capability using the container type specified by CapType property. The current capability is specified by Capability property.
     * @method WebTwain#CapSet
     * @return {bool}
     */
    CapSet(): boolean;

    /**
     * Sets the values of the specified frame.
     * @method WebTwain#CapSetFrame
     * @param {short} index  specifies the values of which frame to set. The index is 0-based.
     * @param {float} left the value (in Unit) of the left-most edge of the specified frame.
     * @param {float} top the value (in Unit) of the top-most edge of the specified frame.
     * @param {float} right  the value (in Unit) of the right-most edge of the specified frame.
     * @param {float} bottom  the value (in Unit) of the bottom-most edge of the specified frame.
     * @return {bool}
     */
    CapSetFrame(index: number, left: number, top: number, right: number, bottom: number): boolean;

    /**
     * Get the cap item value of the capability specified by Capability property, when the value of the CapType property is TWON_ARRAY or TWON_ENUMERATION.
     * @method WebTwain#GetCapItems
     * @param {int} index Index is 0-based. It is the index of the cap item.
     * @return {double}
     */
    GetCapItems(index: number): number;

    /**
     * Returns the cap item value of the capability specified by Capability property, when the value of the CapType property is TWON_ARRAY or TWON_ENUMERATION.
     * @method WebTwain#GetCapItemsString
     * @param {int} index Index is 0-based. It is the index of the cap item.
     * @return {string}
     */
    GetCapItemsString(index: number): string;

    /**
     * Set the value of the specified cap item.
     * @method WebTwain#SetCapItems
     * @param {int} index Index is 0-based. It is the index of the cap item.
     * @param {double} newVal The Double type of CapItems property is used to present Double, Single(float), Long, int and even boolean types. For string type, please use CapItemsstring property.
     * @return {void}
     */
    SetCapItems(index: number, newVal: number): void;

    /**
     * Set the cap item value of the capability specified by Capability property, when the value of the CapType property is TWON_ARRAY or TWON_ENUMERATION.
     * @method WebTwain#SetCapItemsString
     * @param {int} index Index is 0-based. It is the index of the cap item.
     * @param {string} newVal The new value to be set.
     * @return {void}
     */
    SetCapItemsString(index: number, newVal: string): void;
    // --- SCAN end --

    // --- View & Edit start --

    /**
     * Add text on an image.
     * @method WebTwain#AddText
     * @param {short} sImageIndex  the index of the image that you want to add text to.
     * @param {int} x the x coordinate for the text.
     * @param {int} y the y coordinate for the text.
     * @param {string} text the content of the text that you want to add.
     * @param {int} txtColor  the color for the text.
     * @param {int} backgroundColor  the background color.
     * @param {float} backgroundRoundRadius ranging from 0 to 0.5. Please NOTE that MAC version does not support this parameter.
     * @param {float} backgroundOpacity specifies the opacity of the background of the added text, it ranges from 0 to 1.0. Please NOTE that Mac version only supports value 0 and 1
     * @return {bool}
     */
    AddText(
        sImageIndex: number,
        x: number,
        y: number,
        text: string,
        txtColor: number,
        backgroundColor: number,
        backgroundRoundRadius: number,
        backgroundOpacity: number,
    ): boolean;

    /**
     * Create the font for adding text using the method AddText.
     * @method WebTwain#CreateTextFont
     * @param {int} height Specifies the desired height (in logical units) of the font.The absolute value of nHeight must not exceed 16,384 device units after it is converted.For all height comparisons, the font mapper looks for the largest font that does not exceed the requested size or the smallest font if all the fonts exceed the requested size.
     * @param {int} width Specifies the average width (in logical units) of characters in the font. If Width is 0, the aspect ratio of the device will be matched against the digitization aspect ratio of the available fonts to find the closest match, which is determined by the absolute value of the difference.
     * @param {int} escapement Specifies the angle (in 0.1-degree units) between the escapement vector and the x-axis of the display surface. The escapement vector is the line through the origins of the first and last characters on a line. The angle is measured counterclockwise from the x-axis.
     * @param {int} orientation Specifies the angle (in 0.1-degree units) between the baseline of a character and the x-axis.The angle is measured counterclockwise from the x-axis for coordinate systems in which the y-direction is down and clockwise from the x-axis for coordinate systems in which the y-direction is up.
     * @param {int} weight Specifies the font weight (in inked pixels per 1000). The described valuesare approximate; the actual appearance depends on the typeface. Some fonts haveonly FW_NORMAL, FW_REGULAR, and FW_BOLD weights. If FW_DONTCARE is specified, a default weight is used.
     * @param {short} italic  Specifies an italic font if set to TRUE.
     * @param {short} underline Specifies an underlined font if set to TRUE.
     * @param {short} strikeOut A strikeout font if set to TRUE.
     * @param {short} charSet Specifies the font's character set. The OEM character set is system-dependent. Fonts with other character sets may exist in the system. An application that uses a font with an unknown character set must not attempt to translate or interpret strings that are to be rendered with that font.
     * @param {short} outputPrecision Specifies the desired output precision. The output precision defines how closely the output must match the requested font's height, width, character orientation, escapement, and pitch.
     * @param {short} clipPrecision Specifies the desired clipping precision. The clipping precision defines how to clip characters that are partially outside the clipping region.
     * @param {short} quality Specifies the font's output quality, which defines how carefully the GDI must attempt to match the logical-font attributes to those of an actual physical font.
     * @param {short} pitchAndFamily  The pitch and family of the font.
     * @param {string} faceName   the typeface name, the length of this string must not exceed 32 characters, including the terminating null character.
     * @return {bool}
     */
    CreateTextFont(
        height: number,
        width: number,
        escapement: number,
        orientation: number,
        weight: number,
        italic: number,
        underline: number,
        strikeOut: number,
        charSet: number,
        outputPrecision: number,
        clipPrecision: number,
        quality: number,
        pitchAndFamily: number,
        faceName: string,
    ): boolean;

    /**
     * Copies the image of a specified index in buffer to clipboard in DIB format.
     * @method WebTwain#CopyToClipboard
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    CopyToClipboard(sImageIndex: number): boolean;

    /**
     * Clears the specified area of a specified image, and fill the area with the fill color.
     * @method WebTwain#Erase
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {int} left specifies the x-coordinate of the upper-left corner of the rectangle.
     * @param {int} top specifies the y-coordinate of the upper-left corner of the rectangle.
     * @param {int} right specifies the x-coordinate of the lower-right corner of the rectangle.
     * @param {int} bottom specifies the y-coordinate of the lower-right corner of the rectangle.
     * @return {bool}
     */
    Erase(sImageIndex: number, left: number, top: number, right: number, bottom: number): boolean;

    /**
     * Returns the pixel bit depth of the selected image.
     * @method WebTwain#GetImageBitDepth
     * @param {short} sImageIndex specifies the index of image. The index is 0-based.
     * @return {short}
     */
    GetImageBitDepth(sImageIndex: number): number;

    /**
     * Returns the width (pixels) of the selected image. This is a read-only property.
     * @method WebTwain#GetImageWidth
     * @param {short} sImageIndex specifies the index of image. The index is 0-based.
     * @return {int}
     */
    GetImageWidth(sImageIndex: number): number;

    /**
     * Returns the height (pixels) of the selected image. This is a read-only property.
     * @method WebTwain#GetImageHeight
     * @param {short} sImageIndex specifies the index of image. The index is 0-based.
     * @return {int}
     */
    GetImageHeight(sImageIndex: number): number;

    /**
     * Returns the file size of the new image resized from the image of a specified index in buffer.
     * @method WebTwain#GetImageSize
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {int} iWidth specifies the pixel width of the new image.
     * @param {int} iHeight specifies the pixel height of the new image.
     * @return {double}
     */
    GetImageSize(sImageIndex: number, iWidth: number, iHeight: number): number;

    /**
     * Pre-calculate the file size of the local image file that is saved from an image of a specified index in buffer.
     * @method WebTwain#GetImageSizeWithSpecifiedType
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {short} sImageType specifies the type of an image file..
     * @return {int}
     */
    GetImageSizeWithSpecifiedType(sImageIndex: number, sImageType: number): number;

    /**
     * Return the horizontal resolution of the specified image.
     * @method WebTwain#GetImageXResolution
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {int}
     */
    GetImageXResolution(sImageIndex: number): number;

    /**
     * Return the vertical resolution of the specified image.
     * @method WebTwain#GetImageYResolution
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {int}
     */
    GetImageYResolution(sImageIndex: number): number;

    /**
     * Returns the index of the selected image.
     * @method WebTwain#GetSelectedImageIndex
     * @param {short} sSelectedIndex specifies the index of the selected image.
     * @return {short}
     */
    GetSelectedImageIndex(sSelectedIndex: number): number;

    /**
     * You can use the method to select images programatically which is ususally done by mouse clicking.
     * @method WebTwain#SetSelectedImageIndex
     * @param {short} sSelectedIndex this is the index of an array that holds the indices of selected images.
     * @param {short} newVal specifies the index of an image that you want to select.
     * @return {void}
     */
    SetSelectedImageIndex(selectedIndex: number, newVal: number): void;

    /**
     * Pre-calculate the file size of the local image file that is saved from the selected images in buffer.
     * @method WebTwain#GetSelectedImagesSize
     * @param {int} iImageType specifies the type of an image file.
     * @return {int}
     */
    GetSelectedImagesSize(iImageType: number): number;

    /**
     * Check the skew angle of an image by its index in buffer.
     * @method WebTwain#GetSkewAngle
     * @param {short} sImageIndex the index of the image in the buffer.
     * @return {double}
     */
    GetSkewAngle(sImageIndex: number): number;

    /**
     * Check the skew angle of a rectangular part of an image by its index in buffer.
     * @method WebTwain#GetSkewAngleEx
     * @param {short} sImageIndex the index of the image in the buffer.
     * @param {int} left specifies the x-coordinate of the upper-left corner of the rectangle.
     * @param {int} top specifies the y-coordinate of the upper-left corner of the rectangle.
     * @param {int} right specifies the x-coordinate of the lower-right corner of the rectangle.
     * @param {int} bottom specifies the y-coordinate of the lower-right corner of the rectangle.
     * @return {double}
     */
    GetSkewAngleEx(sImageIndex: number, left: number, top: number, right: number, bottom: number): number;

    /**
     * [Deprecated.] Detects whether a certain area on an image is blank.
     * @method WebTwain#IsBlankImageEx
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {int} left specifies the x-coordinate of the upper-left corner of the rectangle.
     * @param {int} top specifies the y-coordinate of the upper-left corner of the rectangle.
     * @param {int} right specifies the x-coordinate of the lower-right corner of the rectangle.
     * @param {int} bottom specifies the y-coordinate of the lower-right corner of the rectangle.
     * @param {bool} bFuzzyMatch specifies whether use fuzzy matching when detecting.
     * @return {bool}
     */
    IsBlankImageEx(
        sImageIndex: number,
        left: number,
        top: number,
        right: number,
        bottom: number,
        bFuzzyMatch: boolean,
    ): boolean;

    /**
     * Mirrors the image of a specified index in buffer.
     * @method WebTwain#Mirror
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    Mirror(sImageIndex: number): boolean;

    /**
     * Decorates image of a specified index in buffer with rectangles of transparent color.
     * @method WebTwain#OverlayRectangle
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {int} left specifies the x-coordinate of the upper-left corner of the rectangle.
     * @param {int} top specifies the y-coordinate of the upper-left corner of the rectangle.
     * @param {int} right specifies the x-coordinate of the lower-right corner of the rectangle.
     * @param {int} bottom specifies the y-coordinate of the lower-right corner of the rectangle.
     * @param {int} color Specifies the fill color of the rectangle. The byte-ordering of the RGB value is 0xBBGGRR. BB represents blue, GG represents green, RR represents red.
     * @param {float} fOpacity Specifies the opacity of the rectangle. The value represents opacity. 1.0 is 100% opaque and 0.0 is totally transparent.
     * @return {bool}
     */
    OverlayRectangle(
        sImageIndex: number,
        left: number,
        top: number,
        right: number,
        bottom: number,
        color: number,
        fOpacity: number,
    ): boolean;

    /**
     * Removes all images in buffer.
     * @method WebTwain#RemoveAllImages
     * @return {void}
     */
    RemoveAllImages(): void;

    /**
     * Removes selected images in buffer.
     * @method WebTwain#RemoveAllSelectedImages
     * @return {bool}
     */
    RemoveAllSelectedImages(): boolean;

    /**
     * Removes the image of a specified index in buffer.
     * @method WebTwain#RemoveImage
     * @param {short} sImageIndexToBeDeleted  specifies the index of the image to be deleted  in buffer. The index is 0-based.
     * @return {bool}
     */
    RemoveImage(sImageIndexToBeDeleted: number): boolean;

    // Image Operate
    /**
     * Rotates the image of a specified index in buffer by specified angle.
     * @method WebTwain#Rotate
     * @param {short} sImageIndex  specifies the index of image in buffer. The index is 0-based.
     * @param {float} fAngle  Specifies the rotation angle.
     * @param {bool} bKeepSize Keep size or not.
     * @return {bool}
     */
    Rotate(sImageIndex: number, fAngle: number, bKeepSize: boolean): boolean;

    /**
     * Rotates the image of a specified index in buffer by specified angle.
     * @method WebTwain#RotateEx
     * @param {short} sImageIndex  specifies the index of image in buffer. The index is 0-based.
     * @param {float} fAngle  Specifies the rotation angle.
     * @param {bool} bKeepSize Keep size or not.
     * @param {EnumDWT_InterpolationMethod} newVal specifies the method to do interpolation.
     * @return {bool}
     */
    RotateEx(sImageIndex: number, fAngle: number, bKeepSize: boolean, newVal: EnumDWT_InterpolationMethod): boolean;

    /**
     * Rotates the image of a specified index in buffer by 90 degrees counter-clockwise.
     * @method WebTwain#RotateLeft
     * @param {short} sImageIndex  specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    RotateLeft(sImageIndex: number): boolean;

    /**
     * Rotates the image of a specified index in buffer by 90 degrees clockwise.
     * @method WebTwain#RotateRight
     * @param {short} sImageIndex  specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    RotateRight(sImageIndex: number): boolean;

    /**
     * Changes width and height of the image of a specified index in the buffer. Please note the file size of the image will be changed proportionately.
     * @method WebTwain#ChangeImageSize
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {int} iNewWidth  specifies the pixel width of the new image.
     * @param {int} iNewHeight specifies the pixel height of the new image.
     * @param {EnumDWT_InterpolationMethod} newVal specifies the method to do interpolation.
     * @return {bool}
     */
    ChangeImageSize(
        sImageIndex: number,
        iNewWidth: number,
        iNewHeight: number,
        newVal: EnumDWT_InterpolationMethod,
    ): boolean;

    /**
     * Flips the image of a specified index in buffer.
     * @method WebTwain#Flip
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    Flip(sImageIndex: number): boolean;

    /**
     * Crops the image of a specified index in buffer.
     * @method WebTwain#Crop
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {int} left specifies the x-coordinate of the upper-left corner of the rectangle.
     * @param {int} top specifies the y-coordinate of the upper-left corner of the rectangle.
     * @param {int} right specifies the x-coordinate of the lower-right corner of the rectangle.
     * @param {int} bottom specifies the y-coordinate of the lower-right corner of the rectangle.
     * @return {bool}
     */
    Crop(sImageIndex: number, left: number, top: number, right: number, bottom: number): boolean;

    /**
     * Crops the image of a specified index in buffer to clipboard in DIB format.
     * @method WebTwain#CropToClipboard
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {int} left specifies the x-coordinate of the upper-left corner of the rectangle.
     * @param {int} top specifies the y-coordinate of the upper-left corner of the rectangle.
     * @param {int} right specifies the x-coordinate of the lower-right corner of the rectangle.
     * @param {int} bottom specifies the y-coordinate of the lower-right corner of the rectangle.
     * @return {bool}
     */
    CropToClipboard(sImageIndex: number, left: number, top: number, right: number, bottom: number): boolean;

    /**
     * Cuts the image data in the specified area to the system clipboard in DIB format.
     * @method WebTwain#CutFrameToClipboard
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {int} left specifies the x-coordinate of the upper-left corner of the rectangle.
     * @param {int} top specifies the y-coordinate of the upper-left corner of the rectangle.
     * @param {int} right specifies the x-coordinate of the lower-right corner of the rectangle.
     * @param {int} bottom specifies the y-coordinate of the lower-right corner of the rectangle.
     * @return {bool}
     */
    CutFrameToClipboard(sImageIndex: number, left: number, top: number, right: number, bottom: number): boolean;

    /**
     * Cuts the image of a specified index in buffer to clipboard in DIB format.
     * @method WebTwain#CutToClipboard
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    CutToClipboard(sImageIndex: number): boolean;

    /**
     * Change the DPI (dots per inch) for the specified image.
     * @method WebTwain#SetDPI
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {int} xResolution The horizontal resolution.
     * @param {int} yResolution The vertical resolution.
     * @param {bool} bResampleImage Whether to resample the image. (The image size will be changed if this is set to true).
     * @param {EnumDWT_InterpolationMethod} newVal specifies the method to do interpolation.
     * @return {bool}
     */
    SetDPI(
        sImageIndex: number,
        xResolution: number,
        yResolution: number,
        bResampleImage: boolean,
        newVal: EnumDWT_InterpolationMethod,
    ): boolean;

    /**
     * Sets the view mode that images are displayed in Dynamic Web TWAIN. You can use this method to display multiple images in Dynamic Web TWAIN.
     * @method WebTwain#SetViewMode
     * @param {short} sHorizontalImageCount  specifies how many columns can be displayed in Dynamic Web TWAIN.
     * @param {short} sVerticalImageCount specifies how many rows can be displayed in Dynamic Web TWAIN..
     * @return {void}
     */
    SetViewMode(sHorizontalImageCount: number, sVerticalImageCount: number): void;

    /**
     * Moves a specified image.
     * @method WebTwain#MoveImage
     * @param {short} sSourceImageIndex Specifies the source index of image in buffer. The index is 0-based.
     * @param {short} sTargetImageIndex Specifies the target index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    MoveImage(sSourceImageIndex: number, sTargetImageIndex: number): boolean;

    /**
     * Switchs two images of specified indices in buffer.
     * @method WebTwain#SwitchImage
     * @param {short} sImageIndex1 specifies the index of image in buffer. The index is 0-based.
     * @param {short} sImageIndex2 specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    SwitchImage(sImageIndex1: number, sImageIndex2: number): boolean;

    /**
     * Shows the GUI of Image Printer.
     * @method WebTwain#Print
     * @return {bool}
     */
    Print(): boolean;
    // --- View & Edit end --

    // --- Upload & Save  end --

    // --- Others ---
    /**
     * Shows the GUI of Image Editor.
     * @method WebTwain#ShowImageEditor
     * @return {bool}
     */
    ShowImageEditor(): boolean;

    /**
     * Unbinds an event from the specified function, so that the function stops receiving notifications when the event fires.
     * @method WebTwain#UnregisterEvent
     * @param {string} name the name of the event.
     * @param {object} evt specified the function to be unbound.
     * @return {bool}
     */
    UnregisterEvent(name: string, evt: object): boolean;
    // --- Others end ---

    /**
     * Enables the source to accept image.
     * @method WebTwain#EnableSource
     * @return {bool}
     */
    EnableSource(): boolean;

    /**
     * Displays the source's built-in interface to acquire image.
     * @method WebTwain#AcquireImage
     * @param {object} optionalDeviceConfig  a JS object used to set up the device for image acquisition.
     * @param {function} asyncSuccessFunc the function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} asyncFailureFunc the function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    AcquireImage(
        optionalDeviceConfig?: object,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    // start from 10.0
    /**
     * Change the width of an image in buffer.
     * @method WebTwain#SetImageWidth
     * @param {short} sImageIndex  specifies which image you'd like to change.
     * @param {int} iNewWidth specifies how wide you'd like to change the image.
     * @return {bool}
     */
    SetImageWidth(sImageIndex: number, iNewWidth: number): boolean;

    //  Set custom DS data (DAT_CUSTOMDSDATA), the input string is encoded with base64
    /**
     * Sets custom DS data to be used for scanning, the input string is encoded with base64. Custom DS data means a specific scanning profile.
     * @method WebTwain#SetCustomDSDataEx
     * @param {string} value the input string which is encoded with base64.
     * @return {bool}
     */
    SetCustomDSDataEx(value: string): boolean;

    //  Set custom DS data, load data from the specified file
    /**
     * Sets custom DS data to be used for scanning, the data is stored in a file. Custom DS data means a specific scanning profile.
     * @method WebTwain#SetCustomDSData
     * @param {string} fileName the absolute path of the file where the custom data source data is stored.
     * @return {bool}
     */
    SetCustomDSData(fileName: string): boolean;

    // Get custom DS data, and returned string  is encoded with base64
    /**
     * Gets custom DS data, the returned string is base64 encoded.
     * @method WebTwain#GetCustomDSDataEx
     * @return {string}
     */
    GetCustomDSDataEx(): string;

    // Get custom DS data, and save the data to the specified file
    /**
     * Gets custom DS data and save the data in a specified file.
     * @method WebTwain#GetCustomDSData
     * @param {string} fileName  the path of the file used for storing custom DS data.
     * @return {bool}
     */
    GetCustomDSData(fileName: string): boolean;

    /**
     * Changes the bitdepth of a specified image.
     * @method WebTwain#ChangeBitDepth
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {short} sBitDepth specifies the target bit depth.
     * @param {bool} bHighQuality specifies whether or not to keep high quality while changing the bit depth. When it's true, it takes more time.
     * @return {bool}
     */
    ChangeBitDepth(sImageIndex: number, sBitDepth: number, bHighQuality: boolean): boolean;

    /**
     * Changes a specified image to gray scale.
     * @method WebTwain#ConvertToGrayScale
     * @param {short} sIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    ConvertToGrayScale(sIndex: number): boolean;

    /**
     * [Deprecated.] Shows the GUI of Image Editor with custom settings.
     * @method WebTwain#ShowImageEditorEx
     * @param {int} x specifies the new position of the left top corner of the window.
     * @param {int} y specifies the new position of the left top corner of the window.
     * @param {int} cx specifies the width of the window.
     * @param {int} cy specifies the height of the window.
     * @param {int} nCmdShow specifices how the window should be shown.
     * @return {bool}
     */
    ShowImageEditorEx(x: number, y: number, cx: number, cy: number, nCmdShow: number): boolean;

    /**
     * [Deprecated.] Detects whether an image is blank.
     * @method WebTwain#IsBlankImage
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    IsBlankImage(sImageIndex: number): boolean;

    /**
     * Detects whether a specific image is blank.
     * @method WebTwain#IsBlankImageExpress
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @return {bool}
     */
    IsBlankImageExpress(sImageIndex: number): boolean;

    /**
     * [Deprecated.] Detects whether a specific image is blank.
     * @method WebTwain#GetBarcodeInfo
     * @param {int} barcodeInfoType Defined in TWAIN Specification.
     * @param {int} barcodeIndex Specifies which barcode to check. The index is 0-based.
     * @return {object}
     */
    GetBarcodeInfo(barcodeInfoType: number, barcodeIndex: number): object;

    /**
     * [Deprecated.] Gets the content from a specified barcode.
     * @method WebTwain#GetBarcodeText
     * @param {int} barcodeIndex Specifies which barcode to check. The index is 0-based.
     * @return {bool}
     */
    GetBarcodeText(barcodeIndex: number): boolean;

    /**
     * Sets the default source to use. It's only valid when IfUseTWAINDSM is set to true.
     * @method WebTwain#SetDefaultSource
     * @param {short} sImageIndex specifies the index of the default source. The index is 0-based.
     * @return {bool}
     */
    SetDefaultSource(sImageIndex: number): boolean;

    /**
     * Draws a rectangle on the viewer which represents the selected area.
     * @method WebTwain#SetSelectedImageArea
     * @param {short} sImageIndex specifies the index of image in buffer. The index is 0-based.
     * @param {int} left The X axis of the left border.
     * @param {int} top The Y axis of the top border.
     * @param {int} right The X axis of the right border.
     * @param {int} bottom The Y axis of the bottom border.
     * @return {bool}
     */
    SetSelectedImageArea(sImageIndex: number, left: number, top: number, right: number, bottom: number): boolean;

    /**
     * Converts the images specified by the indices to base64.
     * @method WebTwain#ConvertToBase64
     * @param {Array} indices indices specifies which images are to be converted to base64.
     * @param {EnumDWT_ImageType} enumImageType the image format in which the images are to be converted to base64.
     * @param {function} asyncSuccessFunc the function to call when the upload succeeds. Please refer to the function prototype OnSuccess.
     * @param {function} asyncFailureFunc the function to call when the upload fails. Please refer to the function prototype OnFailure.
     * @return {bool}
     */
    ConvertToBase64(
        indices: number[],
        enumImageType: EnumDWT_ImageType,
        optionalAsyncSuccessFunc?: () => void,
        optionalAsyncFailureFunc?: (errorCode: number, errorString: string) => void,
    ): boolean;

    /**
     * Returns the direct URL of an image specified by index, if iWidth or iHeight is set to -1, you get the original image, otherwise you get the image with specified iWidth or iHeight while keeping the same aspect ratio.
     * @method WebTwain#GetImageURL
     * @param {short} index the index of the image.
     * @param {int} iWidth the width of the image.
     * @param {int} iHeight the height of the image.
     * @return {string}
     */
    GetImageURL(index: number, iWidth: number, iHeight: number): string;

    /**
     * Sets a header for the current HTTP Post request.
     * @method WebTwain#SetHTTPHeader
     * @param {string} key the key of the header.
     * @param {string} value the value of the header.
     * @return {bool}
     */
    SetHTTPHeader(key: string, value: string): boolean;
}

/**
 * The method to use for image interpolation
 */
export declare enum ResampleMethod {
    /**
     * Choose best option automatically
     */
    AUTOMATIC = "bicubicAutomatic",
    /**
     * Bicubic interpolation
     */
    BICUBIC = "bicubic",
    /**
     * Apply a sharpening mask
     */
    BICUBICSHARPER = "bicubicSharper",
    /**
     * Apply a smoothing mask
     */
    BICUBICSMOOTHER = "bicubicSmoother",
    /**
     * Bilinear interpolate
     */
    BILINEAR = "bilinear",
    /**
     * Determine value based on nearest neighbor
     */
    NEARESTNEIGHBOR = "nearestNeighbor",
    /**
     * Duplicates pixels
     */
    NONE = "none",
    /**
     * Attempt to preserve details by using machine learning
     */
    PRESERVEDETAILS = "preserveDetailsUpscale",
    /**
     * Using deep learning, predict what the picture will look like larger
     */
    DEEPUPSCALE = "deepUpscale"
}
export declare enum SaveMethod {
    /**
     * Saves the current document at the current format
     */
    SAVE = "save",
    /**
     * Changes the format of document, changing the file
     */
    SAVEAS = "saveAs",
    /**
     * Creates a copy of the document in the new format
     */
    SAVEASCOPY = "saveAsCopy"
}
/** The policy for closing a document */
export declare enum SaveOptions {
    /**
     * Will close document without saving, discarding changes
     */
    DONOTSAVECHANGES = 0,
    /**
     * Will ask the user if they'd like to save changes, blocking the script
     */
    PROMPTTOSAVECHANGES = 1,
    /**
     * Will save all existing changes before closing, prompting if document is not saved yet
     */
    SAVECHANGES = 2
}
/**
 * Number of bits per channel (also called pixel depth or color depth).
 *
 * The number selected indicates the exponent of 2.
 */
export declare const enum BMPDepthType {
    ONE = "bitDepth1",
    FOUR = "bitDepth4",
    EIGHT = "bitDepth8",
    SIXTEEN = "bitDepth16",
    TWENTYFOUR = "bitDepth24",
    THIRTYTWO = "bitDepth32"
}
export declare const enum OperatingSystem {
    WINDOWS = "windows",
    OS2 = "OS2"
}
/**
 * The option with which to save a JPEG file.
 */
export declare const enum JPEGFormatOptions {
    /**
     * Format recognized by most web browsers.
     */
    STANDARDBASELINE = "standardbaseline",
    /**
     * Displays a series of increasing detailed scans as the image downloads.
     */
    PROGRESSIVE = "progressive",
    /**
     * Optimized color and a slightly reduced file size.
     */
    OPTIMIZEDBASELINE = "optimizedbaseline"
}
/**
 * The color to use to fill anti-aliased edges
 * adjacent to transparent areas of the image.
 * When transparency is turned off for an image,
 * the matte color is applied to transparent areas.
 */
export declare const enum MatteColor {
    BACKGROUND = "backgroundColor",
    BLACK = "black",
    FOREGROUND = "foregroundColor",
    NETSCAPE = "netscapeGray",
    SEMIGRAY = "gray50",
    WHITE = "white"
}
/**
 * The type of dithering
 */
export declare const enum Dither {
    DIFFUSION = "diffusion",
    PATTERN = "pattern",
    NOISE = "blue"
}
/**
 * The type of colors to be included the color
 * table regardless of their usage
 */
export declare const enum ForcedColors {
    /** None */
    NONE = "none",
    /** Pure black and pure white */
    BLACKANDWHITE = "blackAndWhite",
    /**
     * Red, green, blue, cyan, magenta, yellow, black, and white.
     */
    PRIMARIES = "primaries",
    /**
     * The 216 web-safe colors
     */
    WEB = "web"
}
/**
 * The palette type to use
 */
export declare const enum PaletteType {
    EXACT = "exact",
    MACOSPALETTE = "macintoshSystem",
    WINDOWSPALETTE = "windowsSystem",
    WEBPALETTE = "web",
    UNIFORM = "uniform",
    LOCALPERCEPTUAL = "perceptual",
    LOCALSELECTIVE = "selective",
    LOCALADAPTIVE = "adaptive",
    MASTERPERCEPTUAL = "masterPerceptual",
    MASTERSELECTIVE = "masterSelective",
    MASTERADAPTIVE = "masterAdaptive",
    PREVIOUSPALETTE = "previous"
}
/**
 * Compression method for saving a PNG file
 */
export declare const enum PNGMethod {
    QUICK = "quick",
    MODERATE = "moderate",
    THOROUGH = "thorough"
}
/**
 * The point around which to transform an object.
 *
 * This is the point that does not move when an object is rotated or resized
 */
export declare enum AnchorPosition {
    BOTTOMCENTER = "bottom-center",
    BOTTOMLEFT = "bottom-left",
    BOTTOMRIGHT = "bottom-right",
    MIDDLECENTER = "middle-center",
    MIDDLELEFT = "middle-left",
    MIDDLERIGHT = "middle-right",
    TOPCENTER = "top-center",
    TOPLEFT = "top-left",
    TOPRIGHT = "top-right"
}
/**
 * Options for layer list label colors
 */
export declare const enum LabelColors {
    RED = "red",
    ORANGE = "orange",
    YELLOW = "yellowColor",
    GREEN = "green",
    BLUE = "blue",
    VIOLET = "violet",
    GRAY = "gray"
}
/**
 * Blending mode
 */
export declare const enum BlendMode {
    NORMAL = "normal",
    DISSOLVE = "dissolve",
    DARKEN = "darken",
    MULTIPLY = "multiply",
    COLORBURN = "colorBurn",
    LINEARBURN = "linearBurn",
    DARKERCOLOR = "darkerColor",
    LIGHTEN = "lighten",
    SCREEN = "screen",
    COLORDODGE = "colorDodge",
    LINEARDODGE = "linearDodge",
    LIGHTERCOLOR = "lighterColor",
    OVERLAY = "overlay",
    SOFTLIGHT = "softLight",
    HARDLIGHT = "hardLight",
    VIVIDLIGHT = "vividLight",
    LINEARLIGHT = "linearLight",
    PINLIGHT = "pinLight",
    HARDMIX = "hardMix",
    DIFFERENCE = "difference",
    EXCLUSION = "exclusion",
    SUBTRACT = "blendSubtraction",
    DIVIDE = "blendDivide",
    HUE = "hue",
    SATURATION = "saturation",
    COLOR = "color",
    LUMINOSITY = "luminosity"
}
/**
 * Color Modes available for new document
 */
export declare const enum NewDocumentMode {
    BITMAP = "bitmapMode",
    GRAYSCALE = "grayscaleMode",
    RGB = "RGBColorMode",
    CMYK = "CMYKColorMode",
    LAB = "labColorMode"
}
/**
 * Fill methods available for the new document background
 */
export declare const enum DocumentFill {
    WHITE = "white",
    BLACK = "black",
    BACKGROUNDCOLOR = "backgroundColor",
    TRANSPARENT = "transparent",
    COLOR = "color"
}
export declare const enum LayerKind {
    BLACKANDWHITE = "blackAndWhite",
    BRIGHTNESSCONTRAST = "brightnessContrast",
    CHANNELMIXER = "channelMixer",
    COLORBALANCE = "colorBalance",
    CURVES = "curves",
    EXPOSURE = "exposure",
    GRADIENTFILL = "gradientFill",
    GRADIENTMAP = "gradientMap",
    HUESATURATION = "hueSaturation",
    INVERSION = "inversion",
    LEVELS = "levels",
    NORMAL = "pixel",
    PATTERNFILL = "pattern",
    PHOTOFILTER = "photoFilter",
    POSTERIZE = "posterize",
    SELECTIVECOLOR = "selectiveColor",
    SMARTOBJECT = "smartObject",
    SOLIDFILL = "solidColor",
    TEXT = "text",
    THRESHOLD = "threshold",
    LAYER3D = "threeD",
    VIBRANCE = "vibrance",
    VIDEO = "video",
    GROUP = "group",
    COLORLOOKUP = "colorLookup"
}

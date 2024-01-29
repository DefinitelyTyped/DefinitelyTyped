/**
 * To use any constant, import the `constants` object from the photoshop module first.
 *
 * ```javascript
 * const {app, constants} = require("photoshop");
 *
 * await app.activeDocument.resizeImage(
 *     800, 600, 100,
 *     constants.InterpolationMethod.AUTOMATIC
 * );
 * ```
 */
/**
 * The method to use for bitmap interpolation.
 *
 * Pass to
 * - [[PreferencesGeneral.imageInterpolation]]
 * - [[Layer.scale]]()
 * - [[Layer.skew]]()
 * - [[Layer.rotate]]()
 * - [[Selection.resizeBoundary]]()
 * - [[Selection.rotateBoundary]]()
 *
 * @minVersion 24.0
 */
export declare enum InterpolationMethod {
    /**
     * Choose best bicubic option automatically
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
}
/**
 * The method to use for document interpolation
 *
 * Pass to [[Document.resizeImage]]()
 *
 * @minVersion 22.5
 */
export declare enum ResampleMethod {
    /**
     * Choose best bicubic option automatically
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
     * Attempt to preserve details by using machine learning
     */
    PRESERVEDETAILS = "preserveDetailsUpscale",
    /**
     * Using deep learning, predict what the picture will look like larger.
     */
    DEEPUPSCALE = "deepUpscale",
    /**
     * Changes image resolution value without affecting document dimension
     *
     * Currently unsupported**
     */
    NONE = "none",
}
/**
 * The type of save operation.
 * @minVersion 22.5
 */
export declare enum SaveMethod {
    /**
     * Saves the current document at the current format.
     */
    SAVE = "save",
    /**
     * Changes the format of document, changing the file.
     */
    SAVEAS = "saveAs",
    /**
     * Creates a copy of the document in the new format.
     */
    SAVEASCOPY = "saveAsCopy",
}
/**
 * The policy for handling new changes upon closing a document.
 * @minVersion 22.5
 */
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
    SAVECHANGES = 2,
}
/**
 * Number of bits per channel (also called pixel depth or color depth).
 *
 * The number selected indicates the exponent of 2.
 * @minVersion 22.5
 */
export declare enum BMPDepthType {
    ONE = "bitDepth1",
    FOUR = "bitDepth4",
    EIGHT = "bitDepth8",
    SIXTEEN = "bitDepth16",
    TWENTYFOUR = "bitDepth24",
    THIRTYTWO = "bitDepth32",
}
/**
 * The number of bits per color channel.
 * @minVersion 23.0
 */
export declare enum BitsPerChannelType {
    ONE = "bitDepth1",
    EIGHT = "bitDepth8",
    SIXTEEN = "bitDepth16",
    THIRTYTWO = "bitDepth32",
}
/**
 * The source to use for the depth map. Pass to
 * [[Layer.applyLensBlur]]().
 * @minVersion 23.5
 */
export declare enum DepthMapSource {
    IMAGEHIGHLIGHT = "imageHighlight",
    LAYERMASK = "layerMask",
    NONE = "none",
    TRANSPARENCYCHANNEL = "transparency",
}
/**
 * The target operating system in [[BMPSaveOptions]].
 * @minVersion 22.5
 */
export declare enum OperatingSystem {
    WINDOWS = "windows",
    OS2 = "OS2",
}
/**
 * The option with which to save a JPEG file.
 * @minVersion 22.5
 */
export declare enum JPEGFormatOptions {
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
    OPTIMIZEDBASELINE = "optimizedbaseline",
}
/**
 * The color to use to fill anti-aliased edges
 * adjacent to transparent areas of the image.
 * When transparency is turned off for an image,
 * the matte color is applied to transparent areas.
 *
 * @extendscript MatteType
 * @minVersion 22.5
 */
export declare enum MatteColor {
    BACKGROUND = "backgroundColor",
    BLACK = "black",
    FOREGROUND = "foregroundColor",
    NETSCAPE = "netscapeGray",
    SEMIGRAY = "gray50",
    WHITE = "white",
}
/**
 * The type of dithering
 * @minVersion 22.5
 */
export declare enum Dither {
    DIFFUSION = "diffusion",
    PATTERN = "pattern",
    NOISE = "blue",
    NONE = "none",
}
/**
 * The type of colors to be included the color
 * table regardless of their usage
 * @minVersion 22.5
 */
export declare enum ForcedColors {
    /**
     * None
     */
    NONE = "none",
    /**
     * Pure black and pure white
     */
    BLACKANDWHITE = "blackAndWhite",
    /**
     * Red, green, blue, cyan, magenta, yellow, black, and white.
     */
    PRIMARIES = "primaries",
    /**
     * The 216 web-safe colors
     */
    WEB = "web",
}
/**
 * The palette type to use
 * @minVersion 22.5
 */
export declare enum Palette {
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
    PREVIOUSPALETTE = "previous",
}
/**
 * Compression method for saving a PNG file
 * @minVersion 22.5
 */
export declare enum PNGMethod {
    QUICK = "quick",
    MODERATE = "moderate",
    THOROUGH = "thorough",
}
/**
 * The point around which to transform an object.
 *
 * This is the point that does not move when an object is rotated or resized
 * @minVersion 22.5
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
    TOPRIGHT = "top-right",
}
/**
 * Type of pixels to trim around an image, passed to [[Document.trim]].
 * @minVersion 23.0
 */
export declare enum TrimType {
    /**
     * Bottom right pixel color.
     */
    BOTTOMRIGHT = "bottom-right",
    /**
     * Top left pixel color.
     */
    TOPLEFT = "top-left",
    /**
     * Transparent pixels.
     */
    TRANSPARENT = "transparent",
}
/**
 * Options for layer list label colors
 * @minVersion 22.5
 */
export declare enum LabelColors {
    RED = "red",
    ORANGE = "orange",
    YELLOW = "yellowColor",
    GREEN = "grain",
    BLUE = "blue",
    VIOLET = "violet",
    GRAY = "gray",
    NONE = "none",
}
/**
 * Blending mode
 * @minVersion 22.5
 */
export declare enum BlendMode {
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
    LUMINOSITY = "luminosity",
    PASSTHROUGH = "passThrough",
}
/**
 * The kind of blending used in a fill or stroke operation.
 * Pass to [[PathItem.fillPath]]()
 * @minVersion 23.3
 */
export declare enum ColorBlendMode {
    BEHIND = "behind",
    CLEAR = "clearEnum",
    COLOR = "color",
    COLORBURN = "colorBurn",
    COLORDODGE = "colorDodge",
    DARKEN = "darken",
    DARKERCOLOR = "darkerColor",
    DIFFERENCE = "difference",
    DISSOLVE = "dissolve",
    EXCLUSION = "exclusion",
    HARDLIGHT = "hardLight",
    HARDMIXBLEND = "hardMix",
    HUE = "hue",
    LIGHTEN = "lighten",
    LIGHTERCOLOR = "lighterColor",
    LINEARBURN = "linearBurn",
    LINEARDODGE = "linearDodge",
    LINEARLIGHT = "linearLight",
    LUMINOSITY = "luminosity",
    MULTIPLY = "multiply",
    NORMAL = "normal",
    OVERLAY = "overlay",
    PINLIGHT = "pinLight",
    SATURATION = "saturation",
    SCREEN = "screen",
    SOFTLIGHT = "softLight",
    VIVIDLIGHT = "vividLight",
}
/**
 * The kind of blending used in a [[Document.calculations]] operation.
 * @minVersion 24.5
 */
export declare enum CalculationsBlendMode {
    NORMAL = "normal",
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
    ADD = "add",
    SUBTRACT = "subtract",
    DIFFERENCE = "difference",
    EXCLUSION = "exclusion",
    DIVIDE = "blendDivide",
}
/**
 * The kind of blending used in a [[Layer.applyImage]] operation.
 * @minVersion 24.5
 */
export declare enum ApplyImageBlendMode {
    NORMAL = "normal",
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
    ADD = "add",
    SUBTRACT = "subtract",
    DIFFERENCE = "difference",
    EXCLUSION = "exclusion",
    DIVIDE = "blendDivide",
}
/**
 * Color mode of an open document. See also [[Document.mode]] and [[Document.changeMode]]
 * @minVersion 22.5
 */
export declare enum DocumentMode {
    BITMAP = "bitmapMode",
    CMYK = "CMYKColorMode",
    DUOTONE = "duotoneMode",
    GRAYSCALE = "grayscaleMode",
    INDEXEDCOLOR = "indexedColorMode",
    LAB = "labColorMode",
    MULTICHANNEL = "multichannelMode",
    RGB = "RGBColorMode",
}
/**
 * Color Modes available for new document
 * @minVersion 22.5
 */
export declare enum NewDocumentMode {
    BITMAP = "bitmapMode",
    GRAYSCALE = "grayscaleMode",
    RGB = "RGBColorMode",
    CMYK = "CMYKColorMode",
    LAB = "labColorMode",
}
/**
 * Valid Units for convertUnits method, used in [[Photoshop.convertUnits]]
 * @minVersion 23.4
 */
export declare enum Units {
    CM = "cm",
    INCHES = "in",
    MM = "mm",
    PICAS = "pc",
    PIXELS = "px",
    POINTS = "pt",
}
/**
 * The new color profile or mode for a document, specified in [[Document.changeMode]]
 *
 * NOTE: Color images must be changed to GRAYSCALE mode before you can change them to BITMAP mode.
 * @minVersion 22.5
 */
export declare enum ChangeMode {
    BITMAP = "bitmapMode",
    CMYK = "CMYKColorMode",
    GRAYSCALE = "grayscaleMode",
    INDEXEDCOLOR = "indexedColorMode",
    LAB = "labColorMode",
    MULTICHANNEL = "multichannelMode",
    RGB = "RGBColorMode",
}
/**
 * Fill methods available for the new document background
 * @minVersion 22.5
 */
export declare enum DocumentFill {
    WHITE = "white",
    BLACK = "black",
    BACKGROUNDCOLOR = "backgroundColor",
    TRANSPARENT = "transparent",
    COLOR = "color",
}
/**
 * Kinds of different layers in a document
 * @minVersion 22.5
 */
export declare enum LayerKind {
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
    COLORLOOKUP = "colorLookup",
}
/**
 * Placement modes for Layer.move method
 * @minVersion 22.5
 */
export declare enum ElementPlacement {
    /**
     * Place above a layer, above group if group layer
     */
    PLACEBEFORE = "placeBefore",
    /**
     * Place at the top
     */
    PLACEATBEGINNING = "placeAtBeginning",
    /**
     * Place at the bottom, above background if background layer exists
     */
    PLACEATEND = "placeAtEnd",
    /**
     * Place below a layer, below group if group layer
     */
    PLACEAFTER = "placeAfter",
    /**
     * Place inside a group layer, throws error if not group layer
     */
    PLACEINSIDE = "placeInside",
}
/**
 * Type of color profile used to manage a document, used in [[Document.colorProfileType]]
 * @minVersion 22.5
 */
export declare enum ColorProfileType {
    /**
     * Set for all custom profiles
     */
    CUSTOM = "customEnum",
    /**
     * Set when document is not color managed
     */
    NONE = "none",
    /**
     * Set when document uses the working color profile
     */
    WORKING = "workingSpaceCode",
}
/**
 * Specifies the quality of an image you are converting to bitmap mode. Used in [[BitmapConversionOptions]]
 * @minVersion 22.5
 */
export declare enum BitmapConversionType {
    CUSTOMPATTERN = "customPattern",
    DIFFUSIONDITHER = "diffusionDither",
    HALFTHRESHOLD = "halfThreshold",
    HALFTONESCREEN = "halfToneScreen",
    PATTERNDITHER = "patternDither",
}
/**
 * Specifies the shape of the dots (ink deposits) in the halftone screen. Used in [[BitmapConversionOptions]]
 * @minVersion 22.5
 */
export declare enum BitmapHalfToneType {
    CROSS = "cross",
    DIAMOND = "diamond",
    ELLIPSE = "ellipse",
    LINE = "lineClass",
    ROUND = "round",
    SQUARE = "square",
}
/**
 * The rendering intent to use when converting from one color space to another with
 * [[Document.convertProfile]]
 * @minVersion 22.5
 */
export declare enum Intent {
    ABSOLUTECOLORIMETRIC = "absColorimetric",
    PERCEPTUAL = "image",
    RELATIVECOLORIMETRIC = "colorimetric",
    SATURATION = "graphics",
}
/**
 * Used in multiple places to represent orientation.
 *
 * Orientation of a guide in [[Guide.direction]]
 * @minVersion 22.5
 */
export declare enum Direction {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
}
/**
 * Used in multiple places to represent orientation
 * e.g., [[TextItem.orientation]]
 * @minVersion 24.1
 */
export declare enum Orientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
}
/**
 * The color model representing the current color space
 * of a [[SolidColor]] object.
 * @minVersion 22.5
 */
export declare enum ColorModel {
    GRAYSCALE = "grayScale",
    HSB = "HSBColorEnum",
    CMYK = "CMYKColorEnum",
    LAB = "labColor",
    RGB = "RGBColor",
    NONE = "noColor",
}
/**
 * The type of layer to get rasterized.
 * @minVersion 22.5
 */
export declare enum RasterizeType {
    ENTIRELAYER = "entire",
    FILLCONTENT = "content",
    LAYERCLIPPINGPATH = "clippingPath",
    LINKEDLAYERS = "linked",
    SHAPE = "shape",
    TEXTCONTENTS = "type",
    VECTORMASK = "vectorMask",
    PLACED = "placed",
    VIDEO = "video",
    LAYERSTYLE = "layerStyle",
}
/**
 * Controls the type of dialogs Photoshop displays
 * during API calls
 * @minVersion 22.5
 */
export declare enum DialogModes {
    /**
     * All dialogs will be shown
     */
    ALL = "display",
    /**
     * Dialogs will be shown only if Photoshop raises an error
     */
    ERROR = "silent",
    /**
     * All dialogs will be hidden, and bad calls will silently fail
     */
    NONE = "dontDisplay",
}
/**
 * Describes how the displacement map fits the
 * image if the image is not the same size as
 * the map. Pass to [[Layer.applyDisplace]].
 * @minVersion 23.5
 */
export declare enum DisplacementMapType {
    STRETCHTOFIT = "stretchToFit",
    TILE = "tile",
}
/**
 * The type of a color channel.
 * @minVersion 22.5
 */
export declare enum ChannelType {
    /**
     * Specific to document color mode
     */
    COMPONENT = "component",
    /**
     * Alpha channel where color indicates masked area
     */
    MASKEDAREA = "maskedAreas",
    /**
     * Alpha channel where color indicates selected area
     */
    SELECTEDAREA = "selectedAreas",
    /**
     * Alpha channel to store a spot color
     */
    SPOTCOLOR = "spot",
}
/**
 * Distribution model to use when applying an Add Noise filter. Pass to [[Layer.applyAddNoise]].
 * @minVersion 23.5
 */
export declare enum NoiseDistribution {
    GAUSSIAN = "gaussianDistribution",
    UNIFORM = "uniformDistribution",
}
/**
 * The type of field to eliminate. Pass to [[Layer.applyDeInterlace]].
 * @minVersion 23.5
 */
export declare enum EliminateFields {
    EVENFIELDS = "eliminateEvenFields",
    ODDFIELDS = "eliminateOddFields",
}
/**
 * Geometric options for shapes, such as the iris shape in the
 * Lens Blur filter. Pass to [[Layer.applyLensBlur]]().
 * @minVersion 23.5
 */
export declare enum Geometry {
    HEPTAGON = "heptagon",
    HEXAGON = "hexagon",
    OCTAGON = "octagon",
    PENTAGON = "pentagon",
    SQUARE = "square",
    TRIANGLE = "triangle",
}
/**
 * The method used for creating fields. Pass to [[Layer.applyDeInterlace]].
 * @minVersion 23.5
 */
export declare enum CreateFields {
    DUPLICATION = "createDroplet",
    INTERPOLATION = "createInterpolation",
}
/**
 * The type of a [[PathItem]]
 * @minVersion 23.5
 */
export declare enum PathKind {
    DUPLICATE = "duplicate",
    INTERPOLATE = "interpolate",
    CLIPPINGPATH = "clippingPathEPS",
    NORMALPATH = "normalPath",
    TEXTMASK = "textShape",
    VECTORMASK = "vectorMask",
    WORKPATH = "workPathIndex",
}
/**
 * The selection behavior when a selection already exists.
 * Used in [[PathItem.makeSelection]](), [[Selection.saveTo]]() and [[Selection.load]]()
 * @minVersion 23.3
 */
export declare enum SelectionType {
    /**
     * Remove the selection from the already selected area
     */
    DIMINISH = "subtractFrom",
    /**
     * Add the selection to an already selected area
     */
    EXTEND = "addTo",
    /**
     * Make the selection only the area where the new selection intersectes the already selected area
     */
    INTERSECT = "intersectWith",
    /**
     * Replace the selected area
     */
    REPLACE = "set",
}
/**
 * The tool to use with [[PathItem.strokePath]]()
 * @minVersion 23.3
 */
export declare enum ToolType {
    ARTHISTORYBRUSH = "artBrushTool",
    BACKGROUNDERASER = "backgroundEraserTool",
    BLUR = "blurTool",
    BRUSH = "paintbrushTool",
    BURN = "burnInTool",
    CLONESTAMP = "cloneStampTool",
    COLORREPLACEMENTTOOL = "colorReplacementBrushTool",
    DODGE = "dodgeTool",
    ERASER = "eraserTool",
    HEALINGBRUSH = "magicStampTool",
    HISTORYBRUSH = "historyBrushTool",
    PATTERNSTAMP = "patternStampTool",
    PENCIL = "pencilTool",
    SHARPEN = "sharpenTool",
    SMUDGE = "smudgeTool",
    SPONGE = "saturationTool",
}
/**
 * The role a [[PathPoint]] plays in a [[PathItem]]
 * @minVersion 23.3
 */
export declare enum PointKind {
    CORNERPOINT = "cornerPoint",
    SMOOTHPOINT = "smoothPoint",
}
/**
 * How to combine the shapes if the destination path already has a selection.
 *
 * Set for [[SubPathInfo.operation]], stored in the resulting [[SubPathItem]]
 * @minVersion 23.3
 */
export declare enum ShapeOperation {
    SHAPEADD = "add",
    SHAPEINTERSECT = "intersect",
    SHAPESUBTRACT = "subtract",
    SHAPEXOR = "xor",
}
/**
 * The type of texture or glass surface image to load for a texturizer
 * or glass filter. Pass to [[Layer.applyGlassEffect]]().
 * @minVersion 23.5
 */
export declare enum TextureType {
    BLOCKS = "texTypeBlocks",
    CANVAS = "texTypeCanvas",
    FROSTED = "texTypeFrosted",
    TINYLENS = "texTypeTinyLens",
}
/**
 * How to treat undistorted areas or areas left blank in an image
 * to which a filter in the Distort category has been applied. Pass
 * to [[Layer.applyDisplace]](), [[Layer.applyShear]](), [[Layer.applyWave]]()
 * @minVersion 23.5
 */
export declare enum UndefinedAreas {
    REPEATEDGEPIXELS = "repeatEdgePixels",
    WRAPAROUND = "wrapAround",
}
/**
 * The kind of polar conversion.
 * Pass to [[Layer.applyPolarCoordinates]]().
 * @minVersion 23.5
 */
export declare enum PolarConversionType {
    /**
     * The distortion applied will take the input pixel grid as polar coordinates
     * and convert them to rectangular coordinates.
     */
    POLARTORECTANGULAR = "polarToRect",
    /**
     * The distortion applied will take the input pixel grid as rectangular coordinates
     * and convert them to polar coordinates.
     */
    RECTANGULARTOPOLAR = "rectToPolar",
}
/**
 * Radial blur comes in two flavors: spin and zoom.
 * Spin provides the effect of pinning the image at the designated center and rotating it.
 * Zoom provides the effect of motion towards the designated center point.
 * Pass to [[Layer.applyRadialBlur]]().
 *
 * @ignore - ignored because this filter is not yet implemented
 */
export declare enum RadialBlurMethod {
    SPIN = "spin",
    ZOOM = "zoom",
}
/**
 * The radial blur quality.
 * Pass to [[Layer.applyRadialBlur]]().
 *
 * @ignore - ignored because this filter is not yet implemented
 */
export declare enum RadialBlurQuality {
    DRAFT = "draft",
    GOOD = "good",
    BEST = "best",
}
/**
 * The size of undulations.
 * Pass to [[Layer.applyRipple]]().
 * @minVersion 23.5
 */
export declare enum RippleSize {
    LARGE = "large",
    MEDIUM = "mediumQuality",
    SMALL = "small",
}
/**
 * The smart blur quality.
 * Pass to [[Layer.applySmartBlur]]().
 * @minVersion 23.5
 */
export declare enum SmartBlurQuality {
    HIGH = "smartBlurQualityHigh",
    LOW = "smartBlurQualityLow",
    MEDIUM = "smartBlurQualityMedium",
}
/**
 * The method to use for smart blurring.
 * Pass to [[Layer.applySmartBlur]]().
 * @minVersion 23.5
 */
export declare enum SmartBlurMode {
    EDGEONLY = "smartBlurModeEdgeOnly",
    NORMAL = "smartBlurModeNormal",
    OVERLAYEDGE = "smartBlurModeOverlayEdge",
}
/**
 * The curve (or stretch shape) to use for the distortion.
 * Pass to [[Layer.applySpherize]]().
 * @minVersion 23.5
 */
export declare enum SpherizeMode {
    HORIZONTAL = "horizontalOnly",
    NORMAL = "normal",
    VERTICAL = "verticalOnly",
}
/**
 * The type of wave.
 * Pass to [[Layer.applyWave]]().
 * @minVersion 23.5
 */
export declare enum WaveType {
    SINE = "waveSine",
    SQUARE = "waveSquare",
    TRIANGULAR = "waveTriangle",
}
/**
 * The method of zigzagging.
 * Pass to [[Layer.applyZigZag]]().
 * @minVersion 23.5
 */
export declare enum ZigZagType {
    AROUNDCENTER = "aroundCenter",
    OUTFROMCENTER = "outFromCenter",
    PONDRIPPLES = "pondRipples",
}
/**
 * The type of Lens to use. Pass to [[Layer.applyLensFlare]]().
 * @minVersion 23.5
 */
export declare enum LensType {
    MOVIEPRIME = "panaVision",
    PRIME105 = "nikon105",
    PRIME35 = "nikon",
    ZOOMLENS = "zoom",
}
/**
 * Favor the promotion of either corners or curves.
 * Pass to [[Layer.applyMaximum]]() and [[Layer.applyMinimum]]().
 * @minVersion 23.5
 */
export declare enum PreserveShape {
    SQUARENESS = "squareness",
    ROUNDNESS = "roundness",
}
/**
 * Method to use to fill the empty space left by offsetting an image or selection.
 * Pass to [[Layer.applyOffset]]()
 * @minVersion 23.5
 */
export declare enum OffsetUndefinedAreas {
    SETTOBACKGROUND = "background",
    REPEATEDGEPIXELS = "repeat",
    WRAPAROUND = "wrap",
}
/**
 * Sample size for the EyeDropper tool and ColorSampler instances.
 *
 * @minVersion 24.0
 */
export declare enum SampleSize {
    POINTSAMPLE = 0,
    SAMPLE3X3 = 1,
    SAMPLE5X5 = 2,
    SAMPLE11X11 = 5,
    SAMPLE31X31 = 15,
    SAMPLE51X51 = 25,
    SAMPLE101X101 = 50,
}
/**
 * The application's behavior regarding image previews.
 * Pass to [[PreferencesFileHandling.imagePreviews]]
 * @minVersion 24.0
 */
export declare enum SavePreview {
    /**
     * Always save the item with the file.
     */
    ALWAYSSAVE = "queryAlways",
    /**
     * Prompt the user whether to save the item with the file.
     */
    ASKWHENSAVING = "queryAsk",
    /**
     * Never save the item with the file.
     */
    NEVERSAVE = "queryNever",
}
/**
 * The kind of color picker dialog to use.
 * Pass to [[PreferencesGeneral.colorPicker]]
 * @minVersion 24.0
 */
export declare enum ColorPicker {
    /**
     * The Adobe Color Picker.
     */
    ADOBE = "photoshopPicker",
    /**
     * The built-in Apple or Windows color picker.
     */
    OSNATIVE = "systemPicker",
    /**
     * The built-in Windows color picker.
     */
    PLUGIN = "pluginPicker",
}
/**
 * The history log edit options.
 * Pass to [[PreferencesHistory.editLogItems]]
 * @minVersion 24.0
 */
export declare enum EditLogItemsType {
    /**
     * Includes the text that appears in the History panel in addition to the Sessions information.
     */
    CONCISE = "concise",
    /**
     * Includes the text that appears in the Actions panel in addition to the Concise information.
     * If you need a complete history of all changes made to files, choose Detailed.
     */
    DETAILED = "detailed",
    /**
     * Keeps a record of each time you start or quit
     * Photoshop and each time you open and close files (each image’s filename is included).
     * Does not include any information about edits made to the file.
     */
    SESSIONONLY = "session",
}
/**
 * The size of grid squares.
 * Pass to [[PreferencesTransparencyAndGamut.gridSize]]
 * @minVersion 24.0
 */
export declare enum GridSize {
    /**
     * Large grid squares.
     */
    LARGE = "large",
    /**
     * Medium grid squares.
     */
    MEDIUM = "medium",
    /**
     * No grid is displayed.
     */
    NONE = "none",
    /**
     * Small grid squares.
     */
    SMALL = "small",
}
/**
 * The line style for nonprinting grids displayed over images.
 * Pass to [[PreferencesGuidesGridsAndSlices.gridStyle]]
 * @minVersion 24.0
 */
export declare enum GridLineStyle {
    DASHED = "dashedLines",
    DOTTED = "dots",
    SOLID = "lens",
}
/**
 * The line style for nonprinting guides displayed over images.
 * Pass to [[PreferencesGuidesGridsAndSlices.guideStyle]]
 * @minVersion 24.0
 */
export declare enum GuideLineStyle {
    DASHED = "dashedLines",
    SOLID = "lens",
}
/**
 * The permission state for queries.
 * Pass to [[PreferencesFileHandling.maximizeCompatibility]]
 * @minVersion 24.0
 */
export declare enum MaximizeCompatibility {
    /**
     * Always maximize compatibility.
     */
    ALWAYS = "queryAlways",
    /**
     * Always ask about maximize compatibility.
     */
    ASK = "queryAsk",
    /**
     * Never ask about maximize compatibility.
     */
    NEVER = "queryNever",
}
/**
 * The style of the cursors for the following tools: Marquee, Lasso, Polygonal Lasso, Magic Wand, Crop, Slice,
 * Patch Eyedropper, Pen, Gradient, Line, Paint Bucket, Magnetic Lasso, Magnetic Pen, Freeform Pen,
 * Measure, and Color Sampler.
 * Pass to [[PreferencesCursors.otherCursors]]
 * @minVersion 24.0
 */
export declare enum OtherCursors {
    /**
     * Use crosshair cursors for tools.
     */
    PRECISE = "precise",
    /**
     * Use small iconic cursors for tools.
     */
    STANDARD = "standard",
}
/**
 * The style of the cursors for the following tools: Eraser, Pencil, Paintbrush, Healing Brush,
 * Rubber Stamp, Pattern Stamp, Smudge, Blur, Sharpen, Dodge, Burn, Sponge.
 * Pass to [[PreferencesCursors.paintingCursors]]
 * @minVersion 24.0
 */
export declare enum PaintingCursors {
    /**
     * Use the full size of the brush regardless of brush opacity
     */
    FULLSIZE = "fullSize",
    /**
     * Displays cursors as brush shapes representing the size of the current brush
     * where boundaries have 50% brush opacity
     */
    BRUSHSIZE = "brushSize",
    /**
     * Use crosshair cursors when painting.
     */
    PRECISE = "precise",
    /**
     * Use small iconic cursors when painting.
     */
    STANDARD = "standard",
}
/**
 * The point/pica size: either 72 or 72.27 points per inch.
 * Pass to [[PreferencesUnitsAndRulers.pointSize]]
 * @minVersion 24.0
 */
export declare enum PointType {
    /**
     * 72 points per inch.
     */
    POSTSCRIPT = "POSTSCRIPT",
    /**
     * 72.27 points per inch.
     */
    TRADITIONAL = "TRADITIONAL",
}
/**
 * Options for logging the history items.
 * Pass to [[PreferencesHistory.saveLogItems]]
 * @minVersion 24.0
 */
export declare enum SaveLogItemsType {
    /**
     * Save history log in a text file.
     */
    LOGFILE = "textFile",
    /**
     * Save history log in file metadata and a text file.
     */
    LOGFILEANDMETADATA = "both",
    /**
     * Save history log in file metadata.
     */
    METADATA = "metadata",
}
/**
 * Font size in panels and dialogs.
 * Pass to [[PreferencesInterface.textFontSize]]
 * @minVersion 24.0
 */
export declare enum FontSize {
    /**
     * Tiny size.
     */
    TINY = "preferTinyPaletteFontType",
    /**
     * Large size.
     */
    LARGE = "preferLargePaletteFontType",
    /**
     * Medium size.
     */
    MEDIUM = "preferMediumPaletteFontType",
    /**
     * Small size.
     */
    SMALL = "preferSmallPaletteFontType",
}
/**
 * The measurement unit for type.
 * Pass to [[PreferencesUnitsAndRulers.typeUnits]]
 * @minVersion 24.0
 */
export declare enum TypeUnits {
    MILLIMETERS = "rulerMm",
    PIXELS = "rulerPixels",
    POINTS = "rulerPoints",
}
/**
 * The measurement unit for ruler increments.
 * Pass to [[PreferencesUnitsAndRulers.rulerUnits]]
 * @minVersion 24.0
 */
export declare enum RulerUnits {
    CENTIMETERS = "rulerCm",
    INCHES = "rulerInches",
    MILLIMETERS = "rulerMm",
    PERCENT = "rulerPercent",
    PICAS = "rulerPicas",
    PIXELS = "rulerPixels",
    POINTS = "rulerPoints",
}
/**
 * Options for changing user interface of Character and Paragraph panels.
 * This option is not in Preferences dialog but instead it is located in: Main menu > Type > Language Options
 * Pass to [[PreferencesType.showTextFeatures]]
 * @minVersion 24.0
 */
export declare enum TypeInterfaceFeatures {
    DEFAULT = "defaultTextInterface",
    EASTASIAN = "advancedAsianInterface",
    MIDDLEEASTERN = "middleEasternInterface",
}
/**
 * The result of [[Document.calculations]] can go into a new document,
 *  a new channel in the active document, or a new selection in the active document.
 * @minVersion 24.5
 */
export declare enum CalculationsResult {
    NEWDOCUMENT = "document",
    NEWCHANNEL = "channel",
    SELECTION = "selection",
}
/**
 * Special channels used in [[Document.calculations]].
 * @minVersion 24.5
 */
export declare enum CalculationsChannel {
    TRANSPARENCY = "transparencyEnum",
    SELECTION = "selection",
    GRAY = "gray",
}
/**
 * Special channels used in [[Layer.applyImage]].
 * @minVersion 24.5
 */
export declare enum ApplyImageChannel {
    TRANSPARENCY = "transparencyEnum",
    SELECTION = "selection",
    RGB = "RGB",
    CMYK = "CMYK",
    LAB = "lab",
}
/**
 * Use merged layers as a source in [Document.calculations]].
 * @minVersion 24.5
 */
export declare enum CalculationsLayer {
    MERGED = "merged",
}
/**
 * Use merged layers as a source in [[Layer.applyImage]].
 * @minVersion 24.5
 */
export declare enum ApplyImageLayer {
    MERGED = "merged",
}
/**
 * Method to use to smooth edges by softening the color transition between edge pixels
 * and the background. Used in a [[CharacterStyle.antiAliasMethod]]
 * @minVersion 24.1
 */
export declare enum AntiAlias {
    NONE = "antiAliasNone",
    SHARP = "antiAliasSharp",
    CRISP = "antiAliasCrisp",
    STRONG = "antiAliasStrong",
    SMOOTH = "antiAliasSmooth",
}
/**
 * The warp style to use with Text. Used in a [[WarpStyle.style]]
 * @minVersion 24.1
 */
export declare enum WarpStyle {
    ARC = "warpArc",
    ARCH = "warpArch",
    ARCLOWER = "warpArcLower",
    ARCUPPER = "warpArcUpper",
    BULGE = "warpBulge",
    FISH = "warpFish",
    FISHEYE = "warpFisheye",
    FLAG = "warpFlag",
    INFLATE = "warpInflate",
    NONE = "warpNone",
    RISE = "warpRise",
    SHELLLOWER = "warpShellLower",
    SHELLUPPER = "warpShellUpper",
    SQUEEZE = "warpSqueeze",
    TWIST = "warpTwist",
    WAVE = "warpWave",
}
/**
 * The type of kerning to use for characters. Used in [[CharacterStyle.autoKerning]]
 * @minVersion 24.1
 */
export declare enum AutoKernType {
    MANUAL = "manual",
    METRICS = "metricsKern",
    OPTICAL = "opticalKern",
}
/**
 * The capitalization style to use in text. Used in [[CharacterStyle.capitalization]]
 * @minVersion 24.1
 */
export declare enum TextCase {
    ALLCAPS = "allCaps",
    NORMAL = "normal",
    SMALLCAPS = "smallCaps",
}
/**
 * The baseline style to use in text. Used in [[CharacterStyle.baseline]]
 * @minVersion 24.1
 */
export declare enum Baseline {
    NORMAL = "normal",
    SUPERSCRIPT = "superScript",
    SUBSCRIPT = "subScript",
}
/**
 * The underline style to use in text. Used in [[CharacterStyle.underline]]
 * @minVersion 24.1
 */
export declare enum Underline {
    NONE = "underlineOff",
    RIGHTINVERTICAL = "underlineOnRightInVertical",
    LEFTINVERTICAL = "underlineOnLeftInVertical",
}
/**
 * The language to use for text. Used in [[CharacterStyle.language]]
 * @minVersion 24.1
 */
export declare enum Language {
    ENGLISHUSA = "englishLanguage",
    ENGLISHUK = "ukenglishLanguage",
    ENGLISHCANADA = "canadianEnglishLanguage",
    FINNISH = "finnishLanguage",
    FRENCH = "standardFrenchLanguage",
    CANADIANFRENCH = "canadianFrenchLanguage",
    GERMAN = "standardGermanLanguage",
    GERMAN1996 = "germanLanguageReformed1996",
    OLDGERMAN = "oldGermanLanguage",
    SWISSGERMAN = "swissGermanLanguage",
    OLDSWISSGERMAN = "swissGermanLanguageOldRules",
    ITALIAN = "italianLanguage",
    NORWEGIAN = "bokmalNorwegianLanguage",
    NYNORSKNORWEGIAN = "nynorskNorwegianLanguage",
    PORTUGUESE = "standardPortugueseLanguage",
    BRAZILLIANPORTUGUESE = "brazilianPortugueseLanguage",
    SPANISH = "spanishLanguage",
    SWEDISH = "swedishLanguage",
    DUTCH = "dutchLanguage",
    OLDDUTCH = "kdutchLanguageOldRules",
    DANISH = "danishLanguage",
    RUSSIAN = "russianLanguage",
    SERBIAN = "serbianLanguage",
    CZECH = "czechLanguage",
    POLISH = "polishLanguage",
    GREEK = "greekLanguage",
    TURKISH = "turkishLanguage",
    ICELANDIC = "icelandicLanguage",
    HUNGARIAN = "hungarianLanguage",
    CATALAN = "catalanLanguage",
    CROATIAN = "croatianLanguage",
    ROMANIAN = "romanianLanguage",
    UKRAINIAN = "ukranianLanguage",
    SLOVENIAN = "slovenianLanguage",
    BULGARIAN = "bulgarianLanguage",
    LATVIAN = "latvianLanguage",
    LITHUANIAN = "lithuanianLanguage",
    ESTONIAN = "estonianLanguage",
    SLOVAK = "slovakLanguage",
    CHINESE = "chineseLanguage",
    JAPANESE = "japaneseLanguage",
    ARABIC = "arabicLanguage",
    HEBREW = "hebrewLanguage",
    HINDI = "hindiLanguage",
    BANGLAINDIA = "bengaliIndiaLanguage",
    TAMIL = "tamilLanguage",
    MALAYALAM = "malayalamLanguage",
    TELUGU = "teluguLanguage",
    KANNADA = "kannadaLanguage",
    GUJARATI = "gujaratiLanguage",
    MARATHI = "marathiLanguage",
    PUNJABI = "punjabiLanguage",
    ODIA = "oriyaLanguage",
    THAI = "thaiLanguage",
    KHMER = "khmerLanguage",
    BURMESE = "burmeseLanguage",
    LAO = "laoLanguage",
    SINHALESE = "sinhaleseLanguage",
    INDONESIAN = "indonesianLanguage",
}
/**
 * The placement of paragraph text within the bounding box.
 * Used in [[ParagraphStyle.justification]]
 * @minVersion 24.1
 */
export declare enum Justification {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
    LEFTJUSTIFIED = "justifyLeft",
    CENTERJUSTIFIED = "justifyCenter",
    RIGHTJUSTIFIED = "justifyRight",
    FULLYJUSTIFIED = "justifyAll",
}
/**
 * The text strikethrough style to use in text. Used in [[CharacterStyle.strikeThrough]]
 * @minVersion 24.1
 */
export declare enum StrikeThrough {
    STRIKEBOX = "eMBoxStrikethroughOn",
    STRIKEHEIGHT = "xHeightStrikethroughOn",
    STRIKEOFF = "strikethroughOff",
}
/**
 * The character alignment to use in text.
 * Used in [[CharacterStyle.characterAlignment]]
 * @minVersion 24.1
 */
export declare enum CharacterAlignment {
    ROMAN = "roman",
    EMBOXTOPRIGHT = "top",
    EMBOXCENTER = "center",
    EMBOXBOTTOMLEFT = "bottom",
    ICFBOXTOPRIGHT = "icftop",
    ICFBOTTOMLEFT = "icfbottom",
}
/**
 * The paragraph layout to use in text.
 * Used in [[ParagraphStyle.layoutMode]]
 * @minVersion 24.1
 */
export declare enum ParagraphLayout {
    LATINEASTASIAN = "textLatinCJKComposer",
    WORLDREADY = "textOptycaComposer",
}
/**
 * The paragraph features to use in text.
 * Used in [[ParagraphStyle.features]]
 * @minVersion 24.1
 */
export declare enum ParagraphFeatures {
    DEFAULT = "defaultTextInterface",
    EASTASIAN = "advancedAsianInterface",
    MIDDLEASTERN = "middleEasternInterface",
}
/**
 * Text flow direction (Middle Eastern features).
 * Used in [[CharacterStyle.middleEasternTextDirection]]
 * @minVersion 24.1
 */
export declare enum MiddleEasternTextDirection {
    DEFAULT = "dirOverrideDefault",
    LEFTTORIGHT = "dirOverrideLTR",
    RIGHTTOLEFT = "dirOverrideRTL",
}
/**
 * Digit type to use in text (Middle Eastern features).
 * Used in [[CharacterStyle.middleEasternDigitsType]]
 * @minVersion 24.1
 */
export declare enum MiddleEasternDigitsType {
    LTRARABIC = "arabicDigits",
    RTLARABIC = "RTLarabicDigits",
    HINDI = "hindiDigits",
    FARSI = "farsiDigits",
}
/**
 * The width of kashida (tatweel) character
 * Used in [[ParagraphStyle.kashidaWidth]]
 * @minVersion 24.1
 */
export declare enum KashidaWidthType {
    NONE = "kashidaWidthNone",
    SHORT = "kashidaWidthSmall",
    MEDIUM = "kashidaWidthMedium",
    LONG = "kashidaWidthLong",
    STYLISTIC = "kashidaWidthStylistic",
}
/**
 * Line breaking rules in Japanese text
 * Used in [[ParagraphStyle.kinsoku]]
 * @minVersion 24.1
 */
export declare enum Kinsoku {
    NONE = "None",
    JISWEAK = "Soft",
    JISMAXIMUM = "Hard",
}
/**
 * Spacing between punctuation, symbols, numbers,
 * and other character classes in Japanese text
 * Used in [[ParagraphStyle.mojikumi]]
 * @minVersion 24.1
 */
export declare enum Mojikumi {
    NONE = "None",
    SET1 = "Photoshop6MojiKumiSet1",
    SET2 = "Photoshop6MojiKumiSet2",
    SET3 = "Photoshop6MojiKumiSet3",
    SET4 = "Photoshop6MojiKumiSet4",
}

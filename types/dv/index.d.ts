// Type definitions for dv 2.1
// Project: https://github.com/creatale/node-dv
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

export interface Box {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface Point {
    x: number;
    y: number;
}

export interface Segment {
    p1: Point;
    p2: Point;
    error: number;
}

export interface Skew {
    angle: number;
    confidence: number;
}

export interface Component {
    x: number;
    y: number;
    width: number;
    height: number;
}

export class Image {
    /**
     *  Creates a copy of otherImage.
     */
    constructor(otherImage: Image);
    /**
     * Creates a 32 bit imagen from three 8 bit images, where each image represents one channel of RGB or HSV.
     */
    constructor(image1: Image, image2: Image, image3: Image);
    /**
     * Creates an empty image with the specified dimensions (!!! note: this constructor is experimental and likely to change).
     */
    constructor(width: number, height: number, depth: number);
    /**
     * Creates an image from a Buffer object, that contains the PNG/JPG encoded image.
     */
    constructor(type: 'png' | 'jpg', buffer: Buffer);
    constructor(type: 'rgba' | 'rgb' | 'gray', buffer: Buffer, width: number, height: number);

    readonly width: number;
    readonly height: number;
    /**
     * The depth of the image in bits per pixel, i.e. one of 32 (color), 8 (grayscale) or 1 (monochrome).
     */
    readonly depth: number;

    /**
     * Returns the (boolean) inverse of this image.
     */
    invert(): Image;
    /**
     * Returns the (boolean) union of two images with equal depth, aligning them to the upper left corner.
     */
    or(otherImage: Image): Image;
    /**
     * Returns the (boolean) difference of two images with equal depth, aligning them to the upper left corner.
     */
    and(otherImage: Image): Image;
    /**
     * Returns the (boolean) exclusive disjunction of two images with equal depth, aligning them to the upper left corner.
     */
    xor(otherImage: Image): Image;
    /**
     * If the images are monochrome, dispatches to Leptonica's pixOr. Otherwise, returns the channelwise addition of b to a, clipped at 255.
     */
    add(otherImage: Image): Image;

    /**
     * If the images are monochrome, dispatches to Leptonica's pixSubtract and is equivalent to a.and(b.invert()).
     * For grayscale images, returns the pixelwise subtraction of b from a, clipped at zero.
     * For color, the entire RGB value is subtracted instead of doing channelwise subtraction (ask Leptonica why).
     * @example:
     * redness = colorImage.toGray(1, 0, 0).subtract(colorImage.toGray(0, 0.5, 0.5))
     */
    subtract(otherImage: Image): Image;
    /**
     * Applies a convoltuion kernel with the specified dimensions. Image convolution is an operation where each destination pixel is computed based on a weighted sum of a set of nearby source pixels.
     */
    convolve(halfWidth: number, halfHeight: number): Image;

    /**
     * Unsharp Masking creates an unsharp mask using halfWidth.
     * The fraction determines how much of the edge is added back into image.
     * The resulting image appears clearer, but it is generally less accurate.
     */
    unsharp(halfWidth: number, fraction: number): Image;
    /**
     * Rotates the image around its center by the specified angle in degrees.
     */
    rotate(angle: number): Image;
    /**
     * Scales an image proportionally by scale (1.0 = 100%).
     */
    scale(scale: number): Image;

    /**
     * Scales an image by scaleX and scaleY (1.0 = 100%).
     */
    scale(scaleX: number, scaleY: number): Image;

    /**
     * Crops an image from this image by the specified rectangle and returns the resulting image.
     */
    crop(box: Box): Image;
    crop(x: number, y: number, width: number, height: number): Image;
    /**
     * Creates a mask by testing if pixels (RGB, HSV, ...) are between lower and upper. Formally speaking:
     * lower1 ≤ pixel1 ≤ upper1
     * ∧ lower2 ≤ pixel2 ≤ upper2
     * ∧ lower3 ≤ pixel3 ≤ upper3
     */
    inRange(lower1: number, lower2: number, lower3: number, upper1: number, upper2: number, upper3: number): Image;
    /**
     * Only available for grayscale images. Returns the histogram in an array of length 256, where each entry represents the fraction (0.0 to 1.0) of that color in the image.
     * The mask parameter is optional and must be a monochrome image of same width and height; only pixels where mask is 0 will be counted.
     */
    histogram(mask?: Image): Image;
    /**
     * Computes the horizontal or vertical projection of an 1bpp or 8bpp image.
     */
    projection(mode: 'horizontal' | 'vertical'): number[];
    /**
     * Sets the specified value to each pixel set in the mask.
     */
    setMasked(mask: Image, value: number): Image;
    /**
     * Available for grayscale and color images. Channelwise maps each pixel of image using mapping, which must be an array of length 256 with integer values between 0 and 255.
     * !!! !!! Note: this function actually changes the image!
     * The mask parameter is optional and must be a monochrome image of same width and height; only pixels where mask is 0 will be modified.
     */
    applyCurve(mapping: number[], mask?: Image): this;
    /**
     * Applies a rank (0.0 ... 1.0) filter of the specified width
     * and height (think of it as radius) to this image
     * and returns the result.
     * If you set rank to 0.5 you'll get a Median Filter.
     * Note that this type of filter works best with odd sizes like 3 or 5.
     */
    rankFilter(width: number, height: number, rank: number): Image;
    /**
     * Color image quantization using an octree based algorithm.
     * colors must be between 2 and 256.
     * Note that support for the resulting palette image is highly experimental at this point;
     * only toGray() and toBuffer('png') are guaranteed to work.
     */
    octreeColorQuant(colors: number): Image;
    /**
     * Color image quantization using median cut algorithm.
     * colors must be between 2 and 256.
     * Note that support for the resulting palette image is highly experimental at this point;
     * only toGray() and toBuffer('png') are guaranteed to work.
     */
    medianCutQuant(colors: number): Image;
    /**
     * Converts a grayscale image to monochrome using a global threshold. value must be between 0 and 255.
     */
    threshold(value: number): Image;
    /**
     * Converts an image to grayscale using default settings. Can be used to convert monochrome images back to grayscale.
     */
    toGray(): Image;
    /**
     * Converts an RGB image to grayscale using the specified widths for each channel.
     */
    toGray(redWeight: number, greenWeight: number, blueWeight: number): Image;
    /**
     * Converts an RGB image to grayscale by selecting either the 'min' or 'max' channel.
     * This can act as a simple color filter: 'max' maps colored pixels towards white,
     * while 'min' maps colored pixels towards black.
     */
    toGray(selector: 'min' | 'max'): Image;
    /**
     * Converts a grayscale image to a color image.
     */
    toColor(): Image;
    /**
     * Converts from RGB to HSV color space. HSV has the following ranges:
     * Hue: [0 .. 239]
     * Saturation: [0 .. 255]
     * Value: [0 .. 255]
     */
    toHSV(): Image;
    /**
     * Converts from HSV to RGB color space.
     */
    toRGB(): Image;
    /**
     * Applies an Erode Filter and returns the result.
     */
    erode(width: number, height: number): Image;
    /**
     * Applies a Dilate Filter and returns the result.
     */
    dilate(width: number, height: number): Image;
    /**
     * Applies an Open Filter and returns the result.
     */
    open(width: number, height: number): Image;
    /**
     * Applies a Close Filter and returns the result.
     */
    close(width: number, height: number): Image;
    /**
     * Applies morphological thinning of type (fg or bg) with the specified connectivitiy (4 or 8) and maxIterations (0 to iterate until complete).
     */
    thin(type: 'fg' | 'bg', connectivity: number, maxIterations: number): Image;
    /**
     * Scales an 8bpp image for maximum dynamic range. scale must be either log or linear.
     */
    maxDynamicRange(scale: 'log' | 'linear'): Image;
    /**
     * Applies Otsu's Method for computing the threshold of a grayscale image.
     * It computes a threshold for each tile of the specified size and performs the threshold operation,
     * resulting in a binary image for each tile. These are stitched into the final result.
     * The smooth size controls the a convolution kernel applied to threshold array (use 0 for no smoothing).
     * The score factor controls the fraction of the max. Otsu score (typically 0.1; use 0.0 for standard Otsu).
     */
    otsuAdaptiveThreshold(tileWidth: number, tileHeight: number, smoothWidth: number, smoothHeight: number, scoreFactor: number): Image;
    /**
     * Detects Line Segments with the specified accuracy (3 is a good start). The number of found line segments can be limited using maxLineSegments (0 is unlimited).
     */
    lineSegments(accuracy: number, maxLineSegments: number, useWeightedMeanShift: boolean): Segment[];
    /**
     * Only available for monochrome images. Tries to find the skew of this image. The resulting angle is in degree. The confidence is between 0.0 and 1.0.
     */
    findSkew(): Skew;
    /**
     * Only available for monochrome images. Tries to extract connected components (think of flood fill). The connectivity can be specified as 4 or 8 directions.
     */
    connectedComponents(connectivity: 4 | 8): Component[];
    /**
     * The Distance Function works on 1bpp images. It labels each pixel with the largest distance between this and any other pixel in its connected component. The connectivity is either 4 or 8.
     */
    distanceFunction(connectivity: 4 | 8): Image;
    /**
     * !!! Note: this function actually changes the image!
     * Fills a specified rectangle with white.
     */
    clearBox(box: Box): this;
    clearBox(x: number, y: number, width: number, height: number): this;
    /**
     * !!! Note: this function actually changes the image!
     * Draws a filled rectangle to this image with the specified value. Works for 8bpp and 1bpp images.
     */
    fillBox(box: Box, value: number): this;
    fillBox(x: number, y: number, width: number, height: number, value: number): this;
    /**
     * !!! Note: this function actually changes the image!
     * Draws a filled rectangle to this image in the specified color with an optional blending parameter (0.0: transparent; 1.0: no transparency).
     */
    fillBox(box: Box, r: number, g: number, b: number, fraction?: number): this;
    fillBox(x: number, y: number, width: number, height: number, r: number, g: number, b: number, fraction?: number): this;
    /**
     * !!! Note: this function actually changes the image!
     * Draws a rectangle to this image with the specified border. The possible pixel manipulating operations are set, clear and flip.
     */
    drawBox(box: Box, borderWidth: number, operation: 'set' | 'clear' | 'flip'): this;
    drawBox(x: number, y: number, width: number, height: number, borderWidth: number, operation: 'set' | 'clear' | 'flip'): this;
    /**
     * !!! Note: this function actually changes the image!
     * Draws a rectangle to this image with the specified border in the specified color with an optional blending parameter (0.0: transparent; 1.0: no transparency).
     */
    drawBox(box: Box, borderWidth: number, red: number, green: number, blue: number, frac?: number): this;
    drawBox(x: number, y: number, width: number, height: number, borderWidth: number, red: number, green: number, blue: number, frac?: number): this;
    /**
     * !!! Note: this function actually changes the image!
     * Draws a line between p1 and p2 to this image with the specified line width. The possible pixel manipulating operations are set, clear and flip.
     */
    drawLine(p1: Point, p2: Point, width: number, operation: 'set' | 'clear' | 'flip'): this;
    /**
     * !!! Note: this function actually changes the image!
     * Draws a line between p1 and p2 to this image with the specified line width in the specified color with an optional blending parameter (0.0: transparent; 1.0: no transparency).
     */
    drawLine(p1: Point, p2: Point, width: number, red: number, green: number, blue: number, frac?: number): this;
    /**
     * !!! Note: this function actually changes the image!
     * Draws an image to this image with the specified destination box.
     */
    drawImage(image: Image, box: Box): this;
    drawImage(image: Image, x: number, y: number, width: number, height: number): this;
    /**
     * Converts the Image in the specified format to a buffer.
     * Specifying raw returns the raw image data as buffer.
     * For color images, the result contains three bytes per pixel in the order R, G, B;
     * for grayscale and monochrome images, it contains one byte per pixel.
     * Specifying png returns a PNG encoded image as buffer.
     * Specifying jpg returns a JPG encoded image as buffer.
     */
    toBuffer(format?: 'raw' | 'png' | 'jpg'): Buffer;
}

export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface Region {
    box: Box;
    text: string;
    confidence: number;
}

export type Paragaph = Region;

export interface Textline {
    box: Box;
}

export type Word = Region;

export interface Choice {
    text: string;
    confidence: number;
}

export interface Symbol extends Region {
    choices: Choice[];
}

export type Text = Choice;

/**
 * A Tesseract object represents an optical character recognition engine, that reads text using Tesseract from an image.
 * Tesseract supports many langauges and fonts (see Tesseract/Downloads).
 * New language files have to be installed in node-dv/tessdata.
 */
export class Tesseract {
    /**
     * Creates a Tesseract engine with language set to english.
     */
    constructor();
    constructor(datapath: string);
    /**
     * Creates a Tesseract engine with the specified language.
     */
    constructor(lang: string, image: Image);
    /**
     * Creates a Tesseract engine with the specified language and image.
     */
    constructor(datapath: string, lang: string, image: Image);

    /**
     * Accessor for the input image.
     */
    image: Image;
    /**
     * Accessor for the rectangle that specifies a "visible" area on the image.
     */
    rectangle: Rect;
    /**
     * Accessor for the page segmentation mode.
     */
    pageSegMode: 'osd_only' | 'auto_osd' | 'auto_only' | 'auto'
        | 'single_column' | 'single_block_vert_text' | 'single_block'
        | 'single_line' | 'single_word' | 'circle_word' | 'single_char'
        | 'sparse_text' | 'sparse_text_osd';
    [key: string]: unknown;

    /**
     * Clears the tesseract image and its last results.
     */
    clear(): void;
    /**
     * Clears all adaptive classifiers (use this when results vary during scanning).
     */
    clearAdaptiveClassifier(): void;
    /**
     * Returns the binarized image Tesseract uses for its recognition.
     */
    thresholdImage(): Image;
    /**
     * Returns an array of objects, You can omit text information by setting recognize = false, which is considerably faster.
     */
    findRegions(recognize: boolean): Region[];
    /**
     * Returns an array of objects, You can omit text information by setting recognize = false, which is considerably faster.
     */
    findParagraphs(recognize: boolean): Paragaph[];
    /**
     * Returns an array of objects, You can omit text information by setting recognize = false, which is considerably faster.
     */
    findTextLines(recognize: boolean): Textline[];
    /**
     * Returns an array of objects, You can omit text information by setting recognize = false, which is considerably faster.
     */
    findWords(recognize: boolean): Word[];
    /**
     * Returns an array of objects, You can omit text information by setting recognize = false, which is considerably faster.
     */
    findSymbols(recognize: boolean): symbol[];
    /**
     * Returns text in the specified format. Valid formats are: plain, unlv.
     */
    findText(format: 'plain' | 'unlv', withConfidence?: boolean): string;
    findText(format: 'hocr' | 'box', pageNumber: number): string;
}

export interface Barcodeformat {
    QR_CODE: boolean;
    DATA_MATRIX: boolean;
    PDF_417: boolean;
    UPC_E: boolean;
    UPC_A: boolean;
    EAN_8: boolean;
    EAN_13: boolean;
    CODE_128: boolean;
    CODE_39: boolean;
    ITF: boolean;
    AZTEC: boolean;
}

export interface BarCode {
    type: string;
    data: string;
    buffer: Buffer;
    points: Point[];
}

/**
 * A ZXing object represents a barcode reader. By default it attempts to decode all barcode formats that ZXing supports.
 */
export class ZXing {
    constructor(image?: Image);

    /**
     * Accessor for the input image this barcode reader operates on.
     */
    image: Image;
    /**
     * List of barcodes the reader tries to find. It's specified as an object and missing properties account as false
     */
    formats: Barcodeformat;
    /**
     * If try harder is enabled, the barcode reader spends more time trying to find a barcode (optimize for accuracy, not speed).
     */
    tryHarder: boolean;
    /**
     * Returns the first barcode found as an object with the following format:
     */
    findCode(): BarCode;
    /**
     * enotes the barcodes type.
     */
    readonly type: 'None' | 'QR_CODE' | 'DATA_MATRIX' | 'PDF_417' | 'UPC_E' | 'UPC_A' | 'EAN_8' | 'EAN_13' | 'CODE_128' | 'CODE_39' | 'ITF' | 'AZTEC';
    /**
     * denotes the stringified data read from the barcode.
     */
    readonly data: string;
    /**
     * denotes the decoded binary data of the barcode before conversion into another character encoding.
     */
    readonly buffer: Buffer;
    /**
     * denotes the points in pixels which were used by the barcode reader to detect the barcode.
     */
    readonly points: Point[];
}

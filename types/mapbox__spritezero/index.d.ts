/**
 * Small opinionated sprites.
 */

/**
 * Decrease accuracy of floating-point numbers
 * in path data keeping a specified number of decimals.
 * Smart rounds values like 2.3491 to 2.35 instead of 2.349.
 * Doesn't apply "smartness" if the number precision fits already.
 *
 * Taken from svgo at {@link https://github.com/svg/svgo/blob/72db8eb/plugins/convertPathData.js#L773}
 */
export function strongRound(value: number, precision?: number): number;

/**
 * Parses a SVG document and extracts metadata from its shapes and paths.
 */
export function extractMetadata(img: ImageObject, callback: ExtractCallback): Metadata;

/**
 * Pack a list of images with width and height into a sprite layout.
 */
export function generateLayout(
    options: GenerateLayoutOptions,
    callback: GenerateLayoutCallback,
): DataLayout | ImgLayout;

/**
 * Validates metadata that is parsed from an SVG metadata
 */
export function validateMetadata(img: ImageSize, metadata: Metadata): null | Error;

/**
 * Generate a PNG image with positioned icons on a sprite.
 */
export function generateImage(layout: ImgLayout, callback: GenerateImageCallback): void;

export interface ImageObject {
    /** A string of the SVG. */
    svg?: Buffer | string | undefined;
    /** Ratio of a 72dpi screen pixel to the destination pixel density */
    pixelRatio?: number | undefined;
}

export interface ExtractCallback {
    (err: Error | null, metadata: Metadata): void;
}

/**
 * A Metadata objects stores information about how an image can be stretched in a non-linear.
 * The keys of the Object are the icon ids. The values of the Object are the structured data about each icon
 */
export interface Metadata {
    [id: string]: Array<number | number[]>;
}

export interface GenerateLayoutOptions {
    imgs: Array<{
        svg: Buffer;
        id: string;
    }>;
    /** Ratio of a 72dpi screen pixel to the destination pixel density */
    pixelRatio: number;
    /** If true, generate DataLayout ; if false, generate ImgLayout */
    format: boolean;
    /** overrides the max_size in mapnik */
    maxIconSize?: number | undefined;
    /** filters out icons that mapnik says are too big */
    removeOversizedIcons?: boolean | undefined;
}

export interface GenerateLayoutCallback {
    (err: Error | null, layout: DataLayout | ImgLayout): void;
}

/**
 * A DataLayout Object contains all the metadata about the contents of the sprite.
 * This data can be exported to a JSON sprite manifest file.
 * The keys of the Object are the icon ids.
 * The values of the Object are the structured data about each icon.
 */
export interface DataLayout {
    [id: string]: StructuredData;
}

export interface StructuredData {
    width: number;
    height: number;
    pixelRatio: number;
    x: number;
    y: number;
}

/**
 * A ImgLayout Object contains the array of image items along with dimensions
 * and a buffer of image data that can be used for generating the output image
 */
export interface ImgLayout {
    width: number;
    height: number;
    items: ImageItem[];
}

export interface ImageItem extends ImageSize {
    x: number;
    y: number;
    buffer: string;
}

/**
 *  An image object with width and height .
 */
export interface ImageSize {
    width: number;
    height: number;
}

export interface GenerateImageCallback {
    (err: Error | null, img: Buffer): void;
}

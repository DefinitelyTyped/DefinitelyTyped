/// <reference path="compareImages.d.ts" />

declare global {
    // workaround for the Buffer type as referencing all node types breaks dependent projects
    interface Buffer extends Uint8Array {}
}

export = Resemble;
export as namespace resemble;

/**
 * Retrieve basic analysis for a single image (add compareTo to compare with another).
 *
 * @param image - The image to analyze. Accepts a URL to an image, a Data URI, a ImageData object, or a Buffer.
 */
declare function Resemble(image: string | ImageData | Buffer): Resemble.Analysis;

declare namespace Resemble {
    interface Analysis {
        /**
         * Run the analysis on this image and get the result
         */
        onComplete(callback: (result: AnalysisResult) => void): void;

        /**
         * Compare this image to another image, to get resemblance data
         */
        compareTo(fileData: string | ImageData | Buffer): Comparison;

        /**
         * Set the resemblance image output style
         */
        outputSettings(settings: OutputSettings): Analysis;
    }

    interface AnalysisResult {
        red: number;
        green: number;
        blue: number;
        brightness: number;
        white: number;
        black: number;
    }

    interface Comparison {
        /**
         * Run the analysis and get the comparison result
         */
        onComplete(callback: (data: ComparisonResult) => void): Comparison;

        /**
         * Set the resemblance image output style
         */
        outputSettings(settings: OutputSettings): Comparison;

        /**
         * Ignore nothing when comparing images
         *
         * This will disable ignoreAntialiasing and ignoreColors.
         */
        ignoreNothing(): Comparison;

        /**
         * Ignore as less as possible when comparing images
         *
         * This will disable ignoreAntialiasing and ignoreColors.
         */
        ignoreLess(): Comparison;

        /**
         * Ignore alpha channel when comparing images
         *
         * This will disable ignoreAntialiasing and ignoreColors.
         */
        ignoreAlpha(): Comparison;

        /**
         * Ignore antialiasing when comparing images
         *
         * This will disable ignoreColors.
         */
        ignoreAntialiasing(): Comparison;

        /**
         * Ignore colors when comparing images
         *
         * This will diable ignoreAntialiasing.
         */
        ignoreColors(): Comparison;

        /**
         * Redo the comparison (with the new settings)
         */
        repaint(): Comparison;

        /**
         * Use images' original size
         */
        useOriginalSize(): Comparison;

        /**
         * Scale second image to dimensions of the first one
         */
        scaleToSameSize(): Comparison;

        setCustomTolerance(customSettings: Tolerance): void;
        setReturnEarlyThreshold(threshold: number): Comparison;
    }

    interface ComparisonResult {
        /**
         * Error information if error encountered
         *
         * Note: If error encountered, other properties will be undefined
         */
        error?: unknown | undefined;

        /**
         * Time consumed by the comparison (in milliseconds)
         */
        analysisTime: number;

        /**
         * Do the two images have the same dimensions?
         */
        isSameDimensions: boolean;

        /**
         * The difference in width and height between the dimensions of the two compared images
         */
        dimensionDifference: {
            width: number;
            height: number;
        };

        /**
         * The percentage of pixels which do not match between the images
         */
        rawMisMatchPercentage: number;

        /**
         * Same as `rawMisMatchPercentage` but fixed to 2-digit after the decimal point
         */
        misMatchPercentage: number;

        diffBounds: Box;

        /**
         * Get a data URL for the comparison image
         */
        getImageDataUrl(): string;

        /**
         * Get data buffer
         */
        getBuffer?: (includeOriginal: boolean) => Buffer;
    }

    interface OutputSettings {
        errorColor?:
            | {
                red: number;
                green: number;
                blue: number;
            }
            | undefined;
        errorType?: OutputErrorType | undefined;
        errorPixel?: ((px: number[], offset: number, d1: Color, d2: Color) => void) | undefined;
        transparency?: number | undefined;
        largeImageThreshold?: number | undefined;
        useCrossOrigin?: boolean | undefined;
        boundingBox?: Box | undefined;
        ignoredBox?: Box | undefined;
        boundingBoxes?: Box[] | undefined;
        ignoredBoxes?: Box[] | undefined;
        ignoreAreasColoredWith?: Color | undefined;
    }

    interface Box {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }

    interface Color {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    interface Tolerance {
        red?: number;
        green?: number;
        blue?: number;
        alpha?: number;
        minBrightness?: number;
        maxBrightness?: number;
    }

    interface ComparisonOptions {
        output?: OutputSettings | undefined;
        returnEarlyThreshold?: number | undefined;
        scaleToSameSize?: boolean | undefined;
        ignore?: ComparisonIgnoreOption | ComparisonIgnoreOption[] | undefined;
        tolerance?: Tolerance | undefined;
    }

    type OutputErrorType = "flat" | "movement" | "flatDifferenceIntensity" | "movementDifferenceIntensity" | "diffOnly";

    type ComparisonCallback = (err: unknown, data: ComparisonResult) => void;

    type ComparisonIgnoreOption = "nothing" | "less" | "antialiasing" | "colors" | "alpha";

    function compare(
        image1: string | ImageData | Buffer,
        image2: string | ImageData | Buffer,
        options: ComparisonOptions | ComparisonCallback,
        callback: ComparisonCallback,
    ): void;

    /**
     * Set the resemblance image output style
     */
    function outputSettings(settings: OutputSettings): typeof Resemble;
}

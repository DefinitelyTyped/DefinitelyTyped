// Type definitions for Resemble.js v3.2.5
// Project: https://github.com/rsmbl/Resemble.js
// Definitions by: Tim Perry <https://github.com/pimterry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare global {
    // workaround for the Buffer type as referencing all node types breaks dependent projects
    interface Buffer extends Uint8Array {}
}

export = Resemble;
export as namespace resemble;

/**
 * Retrieve basic analysis for a single image (add compareTo to compare with another).
 */
declare function Resemble(image: string | ImageData | Buffer): Resemble.ResembleAnalysis;

declare namespace Resemble {
    /**
     * Set the resemblance image output style
     */
    function outputSettings(settings: OutputSettings): typeof Resemble;

    interface OutputSettings {
        errorColor?: {
            red: number;
            green: number;
            blue: number;
        };
        errorType?: 'flat' | 'movement' | 'flatDifferenceIntensity' | 'movementDifferenceIntensity' | 'diffOnly';
        errorPixel?: (px: number[], offset: number, d1: ResembleColor, d2: ResembleColor) => void;
        transparency?: number;
        largeImageThreshold?: number;
        useCrossOrigin?: boolean;
        boundingBox?: ResembleBox;
        ignoredBox?: ResembleBox;
        boundingBoxes?: ResembleBox[];
        ignoredBoxes?: ResembleBox[];
        ignoreAreasColoredWith?: ResembleColor;
    }

    interface ResembleAnalysis {
        /**
         * Run the analysis on this image and get the result
         */
        onComplete(callback: (result: ResembleAnalysisResult) => void): void;

        /**
         * Compare this image to another image, to get resemblance data
         */
        compareTo(fileData: string | ImageData | Buffer): ResembleComparison;
    }

    interface ResembleAnalysisResult {
        red: number;
        green: number;
        blue: number;
        brightness: number;
    }

    interface ResembleComparison {
        /**
         * Run the analysis and get the comparison result
         */
        onComplete(callback: (result: ResembleComparisonResult) => void): void;

        ignoreNothing(): ResembleComparison;
        ignoreAntialiasing(): ResembleComparison;
        ignoreColors(): ResembleComparison;
        ignoreAlpha(): ResembleComparison;
        ignoreLess(): ResembleComparison;
        repaint(): ResembleComparison;

        useOriginalSize(): ResembleComparison;
        scaleToSameSize(): ResembleComparison;

        setReturnEarlyThreshold(threshold: number): ResembleComparison;
    }

    interface ResembleComparisonResult {
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
         * Get a data URL for the comparison image
         */
        getImageDataUrl(): string;

        /**
         * The percentage of pixels which do not match between the images
         */
        misMatchPercentage: string;

        diffBounds: {
            top: number;
            left: number;
            bottom: number;
            right: number;
        };

        analysisTime: number;
    }

    interface ResembleBox {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }

    interface ResembleColor {
        r: number;
        g: number;
        b: number;
        a: number;
    }

    function compare(
        image1: string | Buffer,
        image2: string | Buffer,
        options: ResembleSingleCallbackComparisonOptions,
        callback: (err: unknown, data: ResembleSingleCallbackComparisonResult) => void,
    ): void;

    function compareImages(
        image1: string | Buffer,
        image2: string | Buffer,
        options: ResembleSingleCallbackComparisonOptions,
    ): Promise<ResembleSingleCallbackComparisonResult>;

    interface ResembleSingleCallbackComparisonOptions {
        output?: OutputSettings;
        returnEarlyThreshold?: number;
        scaleToSameSize?: boolean;
        ignore?: 'nothing' | 'less' | 'antialiasing' | 'colors' | 'alpha';
    }

    interface ResembleSingleCallbackComparisonResult extends ResembleComparisonResult {
        getBuffer: () => Buffer;
    }
}

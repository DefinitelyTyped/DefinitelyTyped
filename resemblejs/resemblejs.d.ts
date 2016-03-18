// Type definitions for Resemble.js v1.3.0
// Project: http://huddle.github.io/Resemble.js/
// Definitions by: Tim Perry <https://github.com/pimterry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Resemble {
  interface ResembleStatic {
    /**
     * Retrieve basic analysis for a single image (add compareTo to compare with another).
     */
    (image: string|ImageData): ResembleAnalysis;

    /**
     * Set the resemblance image output style
     */
    outputSettings(settings: OutputSettings): ResembleStatic;
  }

  interface OutputSettings {
    errorColor: {
      red: number;
      green: number;
      blue: number;
    };
    errorType: string;
    transparency: number;
    largeImageThreshold: number;
  }

  interface ResembleAnalysis {
    /**
     * Run the analysis on this image and get the result
     */
    onComplete(callback: (result: ResembleAnalysisResult) => void): void;

    /**
     * Compare this image to another image, to get resemblance data
     */
    compareTo(fileData: string|ImageData): ResembleComparison;
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
    repaint(): ResembleComparison;

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
    misMatchPercentage: number;

    diffBounds: {
      top: number;
      left: number;
      bottom: number;
      right: number;
    };

    analysisTime: number;
  }
}

declare var resemble: Resemble.ResembleStatic;

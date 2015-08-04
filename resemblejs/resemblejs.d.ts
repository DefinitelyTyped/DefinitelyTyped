// Type definitions for Resemble.js v1.3.0
// Project: http://huddle.github.io/Resemble.js/
// Definitions by: Tim Perry <https://github.com/pimterry>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Resemble {
  interface ResembleStatic {
    (image: string|ImageData): ResembleAnalysis;
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
    onComplete(callback: (result: ResembleAnalysisResult) => void): void;
    compareTo(fileData: string|ImageData): ResembleComparison;
  }

  interface ResembleAnalysisResult {
    red: number;
    green: number;
    blue: number;
    brightness: number;
  }

  interface ResembleComparison {
    onComplete(callback: (result: ResembleComparisonResult) => void): void;

    ignoreNothing(): ResembleComparison;
    ignoreAntialiasing(): ResembleComparison;
    ignoreColors(): ResembleComparison;
    repaint(): ResembleComparison;

  }

  interface ResembleComparisonResult {
    isSameDimensions: boolean;
    dimensionDifference: {
      width: number;
      height: number;
    };

    getImageDataUrl(): string;

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

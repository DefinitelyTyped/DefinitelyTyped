// Type definitions for detect-character-encoding 0.6.0
// Project: https://github.com/sonicdoe/detect-character-encoding
// Definitions by: duduluu <https://github.com/duduluu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="node"/>
declare function detector(buf: Buffer): detector.DetectingResult;

declare namespace detector {
  interface DetectingResult {
    encoding: string;
    confidence: number;
  }
}

export = detector;

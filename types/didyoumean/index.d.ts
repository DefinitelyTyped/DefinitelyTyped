// Type definitions for didyoumean 1.2
// Project: https://github.com/dcporter/didyoumean.js
// Definitions by: James George <https://github.com/jamesgeorge007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

export = didYouMean;

declare function didYouMean(str: string, list: string[], key?: string): string | string[];

declare namespace didYouMean {
    let caseSensitive: boolean;

    let nullResultValue: any;

    let returnFirstMatch: boolean;

    let returnWinningObject: boolean;

    let threshold: number;

    let thresholdAbsolute: number;
}

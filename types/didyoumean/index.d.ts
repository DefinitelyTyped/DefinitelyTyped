// Type definitions for didyoumean 1.2.1
// Project: https://github.com/dcporter/didyoumean
// Definitions by: James George <https://github.com/jamesgeorge007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function didyoumean(str: any, list: any, key: any): any;

export interface didyoumean {
    const caseSensitive: boolean;

    const nullResultValue: any;

    const prototype: {
    };

    const returnFirstMatch: boolean;

    const returnWinningObject: any;

    const threshold: number;

    const thresholdAbsolute: number;

}


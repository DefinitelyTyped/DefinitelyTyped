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

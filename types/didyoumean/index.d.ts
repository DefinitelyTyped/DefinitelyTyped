export = didYouMean;

declare function didYouMean(str: string, list: string[] | Array<Record<string, string>>, key?: string): string | null;

declare namespace didYouMean {
    let caseSensitive: boolean;
    let nullResultValue: any;
    let returnFirstMatch: boolean;
    let returnWinningObject: boolean | null;
    let threshold: number | null;
    let thresholdAbsolute: number | null;
}

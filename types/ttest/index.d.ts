interface TTestOptions {
    mu: number;
    varEqual: boolean;
    alpha: number;
    alternative: 'not equal' | 'less' | 'greater';
}

interface TTestResult {
    testValue: () => number;
    pValue: () => number;
    confidence: () => [number, number];
    valid: () => boolean;
    freedom: () => number;
}

type TTestFn = (left: ReadonlyArray<number>, right: ReadonlyArray<number>, options?: Partial<TTestOptions>) => TTestResult;

declare var ttest: TTestFn;

export default ttest;

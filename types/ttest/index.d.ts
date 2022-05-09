// Type definitions for ttest 4.0
// Project: https://github.com/AndreasMadsen/ttest
// Definitions by: Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = ttest;

declare function ttest(left: number[], options?: Omit<ttest.Options, 'varEqual'>): ttest.TTest;
declare function ttest(left: number[], right: number[], options?: ttest.Options): ttest.TTest;

declare namespace ttest {
    interface Options {
        mu?: number;
        varEqual?: boolean;
        alpha?: number;
        alternative?: 'less' | 'greater' | 'not equal';
    }

    interface TTest {
        testValue: () => number;
        pValue: () => number;
        confidence: () => number[];
        valid: () => boolean;
        freedom: () => number;
    }
}

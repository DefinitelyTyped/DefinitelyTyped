// Type definitions for summary 1.0.0
// Project: https://github.com/AndreasMadsen/summary
// Definitions by: Volodymyr Saakian <https://github.com/lossless1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ISummary extends Function {
    data(): ReadonlyArray<number>;
    sort(): ReadonlyArray<number>;
    size(): number;
    sum(): number;
    mode(): number;
    mean(): number;
    quartile(num: number): number;
    median(): number;
    variance(): number;
    sd(): number;
    max(): number;
    min(): number;
}

declare module 'summary' {
    function Summary(data: ReadonlyArray<number>, isSorted?: boolean): ISummary;

    export = Summary;
}

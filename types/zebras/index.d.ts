declare module "zebras" {
    // Data types

    type df = object[];

    // IO

    function readCSV(filepath: string): df;
    function toCSV(df: df, filepath: string): void;
    function print(df: df): string;
    function printHead(n: number, df: df): string;
    function printTail(n: number, df: df): string;

    // Manipulation
    function head(n: number, df: df): df;
    function tail(n: number, df: df): df;
    function filter(func: (o: object) => boolean, df: df): df;
    function sort(func: (a: any, b: any) => number, df: df): df;
    function sortByCol(col: string, direction: string, df: df): df;
    function parseNums(cols: string[], df: df): df;
    function parseDates(cols: string[], df: df): df;
    function pickCols(cols: string[], df: df): df;
    function dropCol(col: string, df: df): df;
    function getCol(col: string, df: df): number[];
    function slice(start: number, end: number, df: df): df;
    function concat(df1: df, df2: df): df;
    function addCol(col: string, arr: any[], df: df): df;
    function deriveCol(func: (o: object) => any, df: df): any[];
    function merge(
        dfLeft: df,
        dfRight: df,
        leftOn: string,
        rightOn: string,
        leftSuffix: string,
        rightSuffix: string
    ): df;

    // Analysis
    function mean(arr: number[]): number;
    function median(arr: number[]): number;
    function std(arr: number[]): number;
    function skew(arr: number[]): number;
    function kurt(arr: number[]): number;
    function pctChange(arr: number[]): number[];
    function corr(arr1: number[], arr2: number[]): number;
    function pipe(funcs: any[], df: df): any;
    function groupBy(func: (o: object) => any, df: df): object;
    function unique(arr: number[]): number[];
    function sum(arr: number[]): number;
    function prod(arr: number[]): number;
    function min(arr: number[]): number;
    function max(arr: number[]): number;
    function getRange(arr: number[]): number[];
    function countUnique(arr: number[]): number;
    function valueCounts(arr: number[]): object;
    function diff(arr: number[]): number[];
    function rolling(func: (arr: number[]) => number, n: number, arr: number[]): number[];
    function cumulative(func: (arr: number[]) => number, arr: number[]): number[];
    function describe(arr: number[]): df;
    function gbSum(col: string, groupByObj: object): df;
    function gbMean(col: string, groupByObj: object): df;
    function gbStd(col: string, groupByObj: object): df;
    function gbCount(col: string, groupByObj: object): df;
    function gbMin(col: string, groupByObj: object): df;
    function gbMax(col: string, groupByObj: object): df;
    function gbDescribe(col: string, groupByObj: object): df;
}

declare module "compliance" {}

// Type definitions for zebras 0.0
// Project: https://github.com/nickslevine/zebras
// Definitions by: Nick Levine <https://github.com/nickslevine/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Data types

export type df = ReadonlyArray<object>;

// IO

export function readCSV(filepath: string): df;
export function toCSV(df: df, filepath: string): void;
export function print(df: df): string;
export function printHead(n: number, df: df): string;
export function printTail(n: number, df: df): string;

// Manipulation
export function head(n: number, df: df): df;
export function tail(n: number, df: df): df;
export function filter(func: (o: object) => boolean, df: df): df;
export function sort(func: (a: any, b: any) => number, df: df): df;
export function sortByCol(col: string, direction: string, df: df): df;
export function parseNums(cols: ReadonlyArray<string>, df: df): df;
export function parseDates(cols: ReadonlyArray<string>, df: df): df;
export function pickCols(cols: ReadonlyArray<string>, df: df): df;
export function dropCol(col: string, df: df): df;
export function getCol(col: string, df: df): ReadonlyArray<number>;
export function slice(start: number, end: number, df: df): df;
export function concat(df1: df, df2: df): df;
export function addCol(col: string, arr: any[], df: df): df;
export function deriveCol(func: (o: object) => any, df: df): any[];
export function merge(
    dfLeft: df,
    dfRight: df,
    leftOn: string,
    rightOn: string,
    leftSuffix: string,
    rightSuffix: string
): df;

// Analysis
export function mean(arr: ReadonlyArray<number>): number;
export function median(arr: ReadonlyArray<number>): number;
export function std(arr: ReadonlyArray<number>): number;
export function skew(arr: ReadonlyArray<number>): number;
export function kurt(arr: ReadonlyArray<number>): number;
export function pctChange(arr: ReadonlyArray<number>): ReadonlyArray<number>;
export function corr(arr1: ReadonlyArray<number>, arr2: ReadonlyArray<number>): number;
export function pipe(funcs: any[], df: df): any;
export function groupBy(func: (o: object) => any, df: df): object;
export function unique(arr: ReadonlyArray<number>): ReadonlyArray<number>;
export function sum(arr: ReadonlyArray<number>): number;
export function prod(arr: ReadonlyArray<number>): number;
export function min(arr: ReadonlyArray<number>): number;
export function max(arr: ReadonlyArray<number>): number;
export function getRange(arr: ReadonlyArray<number>): ReadonlyArray<number>;
export function countUnique(arr: ReadonlyArray<number>): number;
export function valueCounts(arr: ReadonlyArray<number>): object;
export function diff(arr: ReadonlyArray<number>): ReadonlyArray<number>;
export function rolling(func: (arr: ReadonlyArray<number>) => number, n: number, arr: ReadonlyArray<number>): ReadonlyArray<number>;
export function cumulative(func: (arr: ReadonlyArray<number>) => number, arr: ReadonlyArray<number>): ReadonlyArray<number>;
export function describe(arr: ReadonlyArray<number>): df;
export function gbSum(col: string, groupByObj: object): df;
export function gbMean(col: string, groupByObj: object): df;
export function gbStd(col: string, groupByObj: object): df;
export function gbCount(col: string, groupByObj: object): df;
export function gbMin(col: string, groupByObj: object): df;
export function gbMax(col: string, groupByObj: object): df;
export function gbDescribe(col: string, groupByObj: object): df;

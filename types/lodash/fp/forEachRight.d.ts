import _ = require("../index");

declare namespace Lodash {
    interface ForEachRight {
        (): ForEachRight;
        <T>(iteratee: _.ArrayIterator<T, any>): ForEachRight1x1<T>;
        <T>(iteratee: _.ArrayIterator<T, any>, collection: T[]): T[];
        (iteratee: _.StringIterator<any>): ForEachRight2x1;
        (iteratee: _.StringIterator<any>, collection: string): string;
        <T>(iteratee: _.ListIterator<T, any>): ForEachRight3x1<T>;
        <T>(iteratee: _.ListIterator<T, any>, collection: _.List<T>): _.List<T>;
        <T extends object>(iteratee: _.ObjectIterator<T, any>): ForEachRight4x1<T>;
        <T extends object>(iteratee: _.ObjectIterator<T, any>, collection: T): T;
        <T, TArray extends T[] | null | undefined>(iteratee: _.ArrayIterator<T, any>, collection: TArray & (T[] | null | undefined)): TArray;
        <TString extends string | null | undefined>(iteratee: _.StringIterator<any>, collection: TString): TString;
        <T, TList extends _.List<T>(iteratee: _.ListIterator<T, any>, collection: TList & (_.List<T> | null | undefined)): TList;
        <T extends object>(iteratee: _.ObjectIterator<T, any>, collection: T | null | undefined): T | null | undefined;
    }
    interface ForEachRight1x1<T> {
        (): ForEachRight1x1<T>;
        (collection: T[]): T[];
        (collection: TArray & (T[] | null | undefined)): TArray;
    }
    interface ForEachRight2x1 {
        (): ForEachRight2x1;
        (collection: string): string;
        (collection: TString): TString;
    }
    interface ForEachRight3x1<T> {
        (): ForEachRight3x1<T>;
        (collection: _.List<T>): _.List<T>;
        (collection: TList & (_.List<T> | null | undefined)): TList;
    }
    interface ForEachRight4x1<T extends object> {
        (): ForEachRight4x1<T>;
        (collection: T): T;
        (collection: T | null | undefined): T | null | undefined;
    }
}

declare const forEachRight: Lodash.ForEachRight;
export = forEachRight;

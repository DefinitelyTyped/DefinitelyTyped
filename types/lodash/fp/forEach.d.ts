import _ = require("../index");

declare namespace Lodash {
    interface ForEach {
        (): ForEach;
        <T>(iteratee: _.ArrayIterator<T, any>): ForEach1x1<T>;
        <T>(iteratee: _.ArrayIterator<T, any>, collection: T[]): T[];
        (iteratee: _.StringIterator<any>): ForEach2x1;
        (iteratee: _.StringIterator<any>, collection: string): string;
        <T>(iteratee: _.ListIterator<T, any>): ForEach3x1<T>;
        <T>(iteratee: _.ListIterator<T, any>, collection: _.List<T>): _.List<T>;
        <T extends object>(iteratee: _.ObjectIterator<T, any>): ForEach4x1<T>;
        <T extends object>(iteratee: _.ObjectIterator<T, any>, collection: T): T;
        <T, TArray extends T[] | null | undefined>(iteratee: _.ArrayIterator<T, any>, collection: TArray & (T[] | null | undefined)): TArray;
        <TString extends string | null | undefined>(iteratee: _.StringIterator<any>, collection: TString): TString;
        <T, TList extends _.List<T>(iteratee: _.ListIterator<T, any>, collection: TList & (_.List<T> | null | undefined)): TList;
        <T extends object>(iteratee: _.ObjectIterator<T, any>, collection: T | null | undefined): T | null | undefined;
    }
    interface ForEach1x1<T> {
        (): ForEach1x1<T>;
        (collection: T[]): T[];
        (collection: TArray & (T[] | null | undefined)): TArray;
    }
    interface ForEach2x1 {
        (): ForEach2x1;
        (collection: string): string;
        (collection: TString): TString;
    }
    interface ForEach3x1<T> {
        (): ForEach3x1<T>;
        (collection: _.List<T>): _.List<T>;
        (collection: TList & (_.List<T> | null | undefined)): TList;
    }
    interface ForEach4x1<T extends object> {
        (): ForEach4x1<T>;
        (collection: T): T;
        (collection: T | null | undefined): T | null | undefined;
    }
}

declare const forEach: Lodash.ForEach;
export = forEach;

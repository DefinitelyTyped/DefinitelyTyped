// Type definitions for jshashset 3.0
// Project: http://www.timdown.co.uk/jshashtable/jshashset.html
// Definitions by: Sergey Gerasimov <https://github.com/gerich-home/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="hashtable" />

interface IHashSet<TValue>
{
    add(value: TValue): void;
    addAll(arr: TValue[]): void;
    contains(value: TValue): boolean;

    clear(): void;
    isEmpty(): boolean; values(): TValue[];

    remove(value: TValue): void;
    size(): number;

    clone(): IHashSet<TValue>;

    isSubsetOf(set: IHashSet<TValue>): boolean;
    intersection(set: IHashSet<TValue>): IHashSet<TValue>;
    union(set: IHashSet<TValue>): IHashSet<TValue>;
    complement(set: IHashSet<TValue>): IHashSet<TValue>;
}

interface IHashSetStatic {
    new <TValue>(): IHashSet<TValue>;
    new <TValue>(options: IHashtableOptions<TValue>): IHashSet<TValue>;
    new <TValue>(hashCode?: (value: TValue) => any, equals?: (value1: TValue, value2: TValue) => boolean): IHashSet<TValue>;
}

declare var HashSet: IHashSetStatic;

declare module "hashset" {
    export = HashSet;
}
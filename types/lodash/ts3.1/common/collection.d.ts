import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        countBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<number>;
        countBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIteratee<T[keyof T]>): Dictionary<number>;
    }
    interface Object<T> {
        countBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<number>>;
    }
    interface String {
        countBy(iteratee?: ValueIteratee<string>): Object<Dictionary<number>>;
    }
    interface Collection<T> {
        countBy(iteratee?: ValueIteratee<T>): Object<Dictionary<number>>;
    }
    interface ObjectChain<T> {
        countBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<number>>;
    }
    interface StringChain {
        countBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<number>>;
    }
    interface CollectionChain<T> {
        countBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<number>>;
    }
    interface LoDashStatic {
        each: LoDashStatic['forEach'];
    }
    interface String {
        each: String['forEach'];
    }
    interface Collection<T> {
        each: Collection<T>['forEach'];
    }
    interface Object<T> {
        each: Object<T>['forEach'];
    }
    interface StringChain {
        each: StringChain['forEach'];
    }
    interface CollectionChain<T> {
        each: CollectionChain<T>['forEach'];
    }
    interface ObjectChain<T> {
        each: ObjectChain<T>['forEach'];
    }
    interface LoDashStatic {
        eachRight: LoDashStatic["forEachRight"];
    }
    interface String {
        eachRight: String['forEachRight'];
    }
    interface Collection<T> {
        eachRight: Collection<T>['forEachRight'];
    }
    interface Object<T> {
        eachRight: Object<T>['forEachRight'];
    }
    interface StringChain {
        eachRight: StringChain['forEachRight'];
    }
    interface CollectionChain<T> {
        eachRight: CollectionChain<T>['forEachRight'];
    }
    interface ObjectChain<T> {
        eachRight: ObjectChain<T>['forEachRight'];
    }
    interface LoDashStatic {
        every<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean;
        every<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface Collection<T> {
        every(predicate?: ListIterateeCustom<T, boolean>): boolean;
    }
    interface Object<T> {
        every(predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface CollectionChain<T> {
        every(predicate?: ListIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface ObjectChain<T> {
        every(predicate?: ObjectIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        filter(collection: string | null | undefined, predicate?: StringIterator<boolean>): string[];
        filter<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>): S[];
        filter<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[];
        filter<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>): S[];
        filter<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): Array<T[keyof T]>;
    }
    interface String {
        filter(predicate?: StringIterator<boolean>): Collection<string>;
    }
    interface Collection<T> {
        filter<S extends T>(predicate: ListIteratorTypeGuard<T, S>): Collection<S>;
        filter(predicate?: ListIterateeCustom<T, boolean>): Collection<T>;
    }
    interface Object<T> {
        filter<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>): Collection<S>;
        filter(predicate?: ObjectIterateeCustom<T, boolean>): Collection<T[keyof T]>;
    }
    interface StringChain {
        filter(predicate?: StringIterator<boolean>): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        filter<S extends T>(predicate: ListIteratorTypeGuard<T, S>): CollectionChain<S>;
        filter(predicate?: ListIterateeCustom<T, boolean>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        filter<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>): CollectionChain<S>;
        filter(predicate?: ObjectIterateeCustom<T, boolean>): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        find<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        find<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
        find<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        find<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface Collection<T> {
        find<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        find(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
    }
    interface Object<T> {
        find< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        find(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface CollectionChain<T> {
        find< S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        find(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T|undefined>;
    }
    interface ObjectChain<T> {
        find< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        find(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T[keyof T]|undefined>;
    }
    interface LoDashStatic {
        findLast<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        findLast<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
        findLast<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        findLast<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface Collection<T> {
        findLast<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        findLast(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
    }
    interface Object<T> {
        findLast< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        findLast(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface CollectionChain<T> {
        findLast< S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        findLast(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T|undefined>;
    }
    interface ObjectChain<T> {
        findLast< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        findLast(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T[keyof T]|undefined>;
    }
    interface LoDashStatic {
        flatMap<T>(collection: Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined): T[];
        flatMap(collection: object | null | undefined): any[];
        flatMap<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, Many<TResult>>): TResult[];
        flatMap<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, Many<TResult>>): TResult[];
        flatMap(collection: object | null | undefined, iteratee: string): any[];
        flatMap(collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface String {
        flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): Collection<TResult>;
        flatMap(): Collection<string>;
    }
    interface Collection<T> {
        flatMap<TResult = any>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): Collection<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): Collection<boolean>;
        flatMap(): T extends Many<infer U> ? Collection<U> : Collection<T>;
    }
    interface Object<T> {
        flatMap<TResult = any>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): Collection<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): Collection<boolean>;
        flatMap(): Collection<T[keyof T]>;
    }
    interface StringChain {
        flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): CollectionChain<TResult>;
        flatMap(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        flatMap<TResult = any>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): CollectionChain<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        flatMap(): T extends Many<infer U> ? CollectionChain<U> : CollectionChain<T>;
    }
    interface ObjectChain<T> {
        flatMap<TResult = any>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): CollectionChain<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        flatMap(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        flatMapDeep<T>(collection: Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined): T[];
        flatMapDeep<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        flatMapDeep<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        flatMapDeep(collection: object | null | undefined, iteratee: string): any[];
        flatMapDeep(collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface String {
        flatMapDeep<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>): Collection<TResult>;
        flatMapDeep(): Collection<string>;
    }
    interface Collection<T> {
        flatMapDeep<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): Collection<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): Collection<boolean>;
        flatMapDeep(): Collection<T>;
    }
    interface Object<T> {
        flatMapDeep<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): Collection<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): Collection<boolean>;
        flatMapDeep(): Collection<T[keyof T]>;
    }
    interface StringChain {
        flatMapDeep<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>): CollectionChain<TResult>;
        flatMapDeep(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        flatMapDeep<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): CollectionChain<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        flatMapDeep(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        flatMapDeep<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): CollectionChain<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        flatMapDeep(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        flatMapDepth<T>(collection: Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined): T[];
        flatMapDepth<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): TResult[];
        flatMapDepth<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): TResult[];
        flatMapDepth(collection: object | null | undefined, iteratee: string, depth?: number): any[];
        flatMapDepth(collection: object | null | undefined, iteratee: object, depth?: number): boolean[];
    }
    interface String {
        flatMapDepth<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): Collection<TResult>;
        flatMapDepth(depth?: number): Collection<string>;
    }
    interface Collection<T> {
        flatMapDepth<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): Collection<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): Collection<boolean>;
        flatMapDepth(depth?: number): Collection<T>;
    }
    interface Object<T> {
        flatMapDepth<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): Collection<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): Collection<boolean>;
        flatMapDepth(depth?: number): Collection<T[keyof T]>;
    }
    interface StringChain {
        flatMapDepth<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): CollectionChain<TResult>;
        flatMapDepth(depth?: number): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        flatMapDepth<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): CollectionChain<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): CollectionChain<boolean>;
        flatMapDepth(depth?: number): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        flatMapDepth<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): CollectionChain<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): CollectionChain<boolean>;
        flatMapDepth(depth?: number): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        forEach<T>(collection: T[], iteratee?: ArrayIterator<T, any>): T[];
        forEach(collection: string, iteratee?: StringIterator<any>): string;
        forEach<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>;
        forEach<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T;
        forEach<T, TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined), iteratee?: ArrayIterator<T, any>): TArray;
        forEach<TString extends string | null | undefined>(collection: TString, iteratee?: StringIterator<any>): TString;
        forEach<T, TList extends List<T> | null | undefined>(collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any>): TList;
        forEach<T extends object>(collection: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface String {
        forEach(iteratee?: StringIterator<any>): String;
    }
    interface Object<T> {
        forEach(iteratee?: ObjectIterator<T, any>): Object<T>;
    }
    interface Collection<T> {
        forEach(iteratee?: ListIterator<T, any>): Collection<T>;
    }
    interface StringChain {
        forEach(iteratee?: StringIterator<any>): StringChain;
    }
    interface ObjectChain<T> {
        forEach(iteratee?: ObjectIterator<T, any>): ObjectChain<T>;
    }
    interface CollectionChain<T> {
        forEach(iteratee?: ListIterator<T, any>): CollectionChain<T>;
    }
    interface LoDashStatic {
        forEachRight<T>(collection: T[], iteratee?: ArrayIterator<T, any>): T[];
        forEachRight(collection: string, iteratee?: StringIterator<any>): string;
        forEachRight<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>;
        forEachRight<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T;
        forEachRight<T, TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined), iteratee?: ArrayIterator<T, any>): TArray;
        forEachRight<TString extends string | null | undefined>(collection: TString, iteratee?: StringIterator<any>): TString;
        forEachRight<T, TList extends List<T> | null | undefined>(collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any>): TList;
        forEachRight<T extends object>(collection: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface String {
        forEachRight(iteratee?: StringIterator<any>): String;
    }
    interface Object<T> {
        forEachRight(iteratee?: ObjectIterator<T, any>): Object<T>;
    }
    interface Collection<T> {
        forEachRight(iteratee?: ListIterator<T, any>): Collection<T>;
    }
    interface StringChain {
        forEachRight(iteratee?: StringIterator<any>): StringChain;
    }
    interface ObjectChain<T> {
        forEachRight(iteratee?: ObjectIterator<T, any>): ObjectChain<T>;
    }
    interface CollectionChain<T> {
        forEachRight(iteratee?: ListIterator<T, any>): CollectionChain<T>;
    }
    interface LoDashStatic {
        groupBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<T[]>;
        groupBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIteratee<T[keyof T]>): Dictionary<Array<T[keyof T]>>;
    }
    interface String {
        groupBy(iteratee?: ValueIteratee<string>): Object<Dictionary<string>>;
    }
    interface Collection<T> {
        groupBy(iteratee?: ValueIteratee<T>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        groupBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<Array<T[keyof T]>>>;
    }
    interface StringChain {
        groupBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string>>;
    }
    interface CollectionChain<T> {
        groupBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        groupBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<Array<T[keyof T]>>>;
    }
    interface LoDashStatic {
        includes<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, target: T, fromIndex?: number): boolean;
    }
    interface Object<T> {
        includes(target: T[keyof T], fromIndex?: number): boolean;
    }
    interface Collection<T> {
        includes(target: T, fromIndex?: number): boolean;
    }
    interface ObjectChain<T> {
        includes(target: T[keyof T], fromIndex?: number): PrimitiveChain<boolean>;
    }
    interface CollectionChain<T> {
        includes(target: T, fromIndex?: number): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        invokeMap(collection: object | null | undefined, methodName: string, ...args: any[]): any[];
        invokeMap<TResult>(collection: object | null | undefined, method: (...args: any[]) => TResult, ...args: any[]): TResult[];
    }
    interface LoDashImplicitWrapper<TValue> {
        invokeMap(methodName: string, ...args: any[]): Collection<any>;
        invokeMap<TResult>(method: (...args: any[]) => TResult, ...args: any[]): Collection<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        invokeMap(methodName: string, ...args: any[]): CollectionChain<any>;
        invokeMap<TResult>(method: (...args: any[]) => TResult, ...args: any[]): CollectionChain<TResult>;
    }
    interface LoDashStatic {
        keyBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIterateeCustom<T, PropertyName>): Dictionary<T>;
        keyBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): Dictionary<T[keyof T]>;
    }
    interface String {
        keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): Object<Dictionary<string>>;
    }
    interface Collection<T> {
        keyBy(iteratee?: ValueIterateeCustom<T, PropertyName>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        keyBy(iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): Object<Dictionary<T[keyof T]>>;
    }
    interface StringChain {
        keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): ObjectChain<Dictionary<string>>;
    }
    interface CollectionChain<T> {
        keyBy(iteratee?: ValueIterateeCustom<T, PropertyName>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        keyBy(iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): ObjectChain<Dictionary<T[keyof T]>>;
    }
    interface LoDashStatic {
        map<T, TResult>(collection: T[] | null | undefined, iteratee: ArrayIterator<T, TResult>): TResult[];
        map<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, TResult>): TResult[];
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined): T[];
        map<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, TResult>): TResult[];
        map<T, K extends keyof T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: K): Array<T[K]>;
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: string): any[];
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: object): boolean[];
    }

    interface String {
        map<TResult>(iteratee: StringIterator<TResult>): Collection<TResult>;
        map(): Collection<string>;
    }
    interface Collection<T> {
        map<K extends keyof T>(key: K): Collection<T[K]>;
        map<TResult>(iteratee: ListIterator<T, TResult>): Collection<TResult>;
        map(iteratee: PropertyName): Collection<any>;
        map(iteratee: [PropertyName, any] | object): Collection<boolean>;
        map(): Collection<T>;
    }
    interface Object<T> {
        map<K extends keyof T[keyof T]>(key: K): Collection<T[keyof T][K]>;
        map<TResult>(iteratee: ObjectIterator<T, TResult>): Collection<TResult>;
        map(iteratee: PropertyName): Collection<any>;
        map(iteratee: [PropertyName, any] | object): Collection<boolean>;
        map(): Collection<T[keyof T]>;
    }
    interface StringChain {
        map<TResult>(iteratee: StringIterator<TResult>): CollectionChain<TResult>;
        map(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        map<K extends keyof T>(key: K): CollectionChain<T[K]>;
        map<TResult>(iteratee: ListIterator<T, TResult>): CollectionChain<TResult>;
        map(iteratee: PropertyName): CollectionChain<any>;
        map(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        map(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        map<K extends keyof T[keyof T]>(key: K): CollectionChain<T[keyof T][K]>;
        map<TResult>(iteratee: ObjectIterator<T, TResult>): CollectionChain<TResult>;
        map(iteratee: PropertyName): CollectionChain<any>;
        map(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        map(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        orderBy<T>(collection: List<T> | null | undefined, iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): T[];
        orderBy<T>(collection: List<T> | null | undefined, iteratees?: Many<ListIteratee<T>>, orders?: Many<boolean|"asc"|"desc">): T[];
        orderBy<T extends object>(collection: T | null | undefined, iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): Array<T[keyof T]>;
        orderBy<T extends object>(collection: T | null | undefined, iteratees?: Many<ObjectIteratee<T>>, orders?: Many<boolean|"asc"|"desc">): Array<T[keyof T]>;
    }
    interface Collection<T> {
        orderBy(iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): Collection<T>;
    }
    interface Object<T> {
        orderBy(iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): Collection<T[keyof T]>;
    }
    interface CollectionChain<T> {
        orderBy(iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        orderBy(iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        partition<T>(collection: List<T> | null | undefined, callback: ValueIteratee<T>): [T[], T[]];
        partition<T extends object>(collection: T | null | undefined, callback: ValueIteratee<T[keyof T]>): [Array<T[keyof T]>, Array<T[keyof T]>];
    }
    interface String {
        partition(callback: StringIterator<NotVoid>): LoDashImplicitWrapper<[string[], string[]]>;
    }
    interface Collection<T> {
        partition(callback: ValueIteratee<T>): LoDashImplicitWrapper<[T[], T[]]>;
    }
    interface Object<T> {
        partition(callback: ValueIteratee<T[keyof T]>): LoDashImplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }
    interface StringChain {
        partition(callback: StringIterator<NotVoid>): LoDashExplicitWrapper<[string[], string[]]>;
    }
    interface CollectionChain<T> {
        partition(callback: ValueIteratee<T>): LoDashExplicitWrapper<[T[], T[]]>;
    }
    interface ObjectChain<T> {
        partition(callback: ValueIteratee<T[keyof T]>): LoDashExplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }
    interface LoDashStatic {
        reduce<T, TResult>(collection: T[] | null | undefined, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult): TResult;
        reduce<T, TResult>(collection: List<T> | null | undefined, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        reduce<T extends object, TResult>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        reduce<T>(collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]>): T | undefined;
        reduce<T>(collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>>): T | undefined;
        reduce<T extends object>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface Collection<T> {
        reduce<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        reduce(callback: MemoListIterator<T, T, List<T>>): T | undefined;
    }
    interface Object<T> {
        reduce<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        reduce(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface CollectionChain<T> {
        reduce<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): ExpChain<TResult>;
        reduce(callback: MemoListIterator<T, T, List<T>>): ExpChain<T | undefined>;
    }
    interface ObjectChain<T> {
        reduce<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): ExpChain<TResult>;
        reduce(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): ExpChain<T[keyof T] | undefined>;
    }
    interface LoDashStatic {
        reduceRight<T, TResult>(collection: T[] | null | undefined, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult): TResult;
        reduceRight<T, TResult>(collection: List<T> | null | undefined, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        reduceRight<T extends object, TResult>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        reduceRight<T>(collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]>): T | undefined;
        reduceRight<T>(collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>>): T | undefined;
        reduceRight<T extends object>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface Collection<T> {
        reduceRight<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        reduceRight(callback: MemoListIterator<T, T, List<T>>): T | undefined;
    }
    interface Object<T> {
        reduceRight<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        reduceRight(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface CollectionChain<T> {
        reduceRight<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): ExpChain<TResult>;
        reduceRight(callback: MemoListIterator<T, T, List<T>>): ExpChain<T | undefined>;
    }
    interface ObjectChain<T> {
        reduceRight<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): ExpChain<TResult>;
        reduceRight(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): ExpChain<T[keyof T] | undefined>;
    }
    interface LoDashStatic {
        reject(collection: string | null | undefined, predicate?: StringIterator<boolean>): string[];
        reject<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[];
        reject<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): Array<T[keyof T]>;
    }
    interface String {
        reject(predicate?: StringIterator<boolean>): Collection<string>;
    }
    interface Collection<T> {
        reject(predicate?: ListIterateeCustom<T, boolean>): Collection<T>;
    }
    interface Object<T> {
        reject(predicate?: ObjectIterateeCustom<T, boolean>): Collection<T[keyof T]>;
    }
    interface StringChain {
        reject(predicate?: StringIterator<boolean>): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        reject(predicate?: ListIterateeCustom<T, boolean>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        reject(predicate?: ObjectIterateeCustom<T, boolean>): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        sample<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined): T | undefined;
        sample<T extends object>(collection: T | null | undefined): T[keyof T] | undefined;
    }
    interface String {
        sample(): string | undefined;
    }
    interface Collection<T> {
        sample(): T | undefined;
    }
    interface Object<T> {
        sample(): T[keyof T] | undefined;
    }
    interface StringChain {
        sample(): StringChain;
    }
    interface CollectionChain<T> {
        sample(): LoDashExplicitWrapper<T | undefined>;
    }
    interface ObjectChain<T> {
        sample(): LoDashExplicitWrapper<T[keyof T] | undefined>;
    }
    interface LoDashStatic {
        sampleSize<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, n?: number): T[];
        sampleSize<T extends object>(collection: T | null | undefined, n?: number): Array<T[keyof T]>;
    }
    interface String {
        sampleSize(n?: number): Collection<string>;
    }
    interface Collection<T> {
        sampleSize(n?: number): Collection<T>;
    }
    interface Object<T> {
        sampleSize(n?: number): Collection<T[keyof T]>;
    }
    interface StringChain {
        sampleSize(n?: number): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        sampleSize(n?: number): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        sampleSize(n?: number): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        shuffle<T>(collection: List<T> | null | undefined): T[];
        shuffle<T extends object>(collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface String {
        shuffle(): Collection<string>;
    }
    interface Collection<T> {
        shuffle(): Collection<T>;
    }
    interface Object<T> {
        shuffle(): Collection<T[keyof T]>;
    }
    interface StringChain {
        shuffle(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        shuffle(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        shuffle(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        size(collection: object | string | null | undefined): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        size(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        size(): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        some<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean;
        some<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface Collection<T> {
        some(predicate?: ListIterateeCustom<T, boolean>): boolean;
    }
    interface Object<T> {
        some(predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface CollectionChain<T> {
        some(predicate?: ListIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface ObjectChain<T> {
        some(predicate?: ObjectIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        sortBy<T>(collection: List<T> | null | undefined, ...iteratees: Array<Many<ListIteratee<T>>>): T[];
        sortBy<T extends object>(collection: T | null | undefined, ...iteratees: Array<Many<ObjectIteratee<T>>>): Array<T[keyof T]>;
    }
    interface Collection<T> {
        sortBy(...iteratees: Array<Many<ListIteratee<T>>>): Collection<T>;
    }
    interface Object<T> {
        sortBy(...iteratees: Array<Many<ObjectIteratee<T>>>): Collection<T[keyof T]>;
    }
    interface CollectionChain<T> {
        sortBy(...iteratees: Array<Many<ListIteratee<T>>>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        sortBy(...iteratees: Array<Many<ObjectIteratee<T>>>): CollectionChain<T[keyof T]>;
    }
}

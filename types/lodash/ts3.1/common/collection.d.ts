import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * @see _.countBy
         */
        countBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<number>;
        /**
         * @see _.countBy
         */
        countBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIteratee<T[keyof T]>): Dictionary<number>;
    }
    interface Object<T> {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<number>>;
    }
    interface String {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<string>): Object<Dictionary<number>>;
    }
    interface Collection<T> {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<T>): Object<Dictionary<number>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<number>>;
    }
    interface StringChain {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<number>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.countBy
         */
        countBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<number>>;
    }
    interface LoDashStatic {
        /**
         * @see _.each
         */
        each: LoDashStatic['forEach'];
    }
    interface String {
        /**
         * @see _.each
         */
        each: String['forEach'];
    }
    interface Collection<T> {
        /**
         * @see _.each
         */
        each: Collection<T>['forEach'];
    }
    interface Object<T> {
        /**
         * @see _.each
         */
        each: Object<T>['forEach'];
    }
    interface StringChain {
        /**
         * @see _.each
         */
        each: StringChain['forEach'];
    }
    interface CollectionChain<T> {
        /**
         * @see _.each
         */
        each: CollectionChain<T>['forEach'];
    }
    interface ObjectChain<T> {
        /**
         * @see _.each
         */
        each: ObjectChain<T>['forEach'];
    }
    interface LoDashStatic {
        /**
         * @see _.eachRight
         */
        eachRight: LoDashStatic["forEachRight"];
    }
    interface String {
        /**
         * @see _.eachRight
         */
        eachRight: String['forEachRight'];
    }
    interface Collection<T> {
        /**
         * @see _.eachRight
         */
        eachRight: Collection<T>['forEachRight'];
    }
    interface Object<T> {
        /**
         * @see _.eachRight
         */
        eachRight: Object<T>['forEachRight'];
    }
    interface StringChain {
        /**
         * @see _.eachRight
         */
        eachRight: StringChain['forEachRight'];
    }
    interface CollectionChain<T> {
        /**
         * @see _.eachRight
         */
        eachRight: CollectionChain<T>['forEachRight'];
    }
    interface ObjectChain<T> {
        /**
         * @see _.eachRight
         */
        eachRight: ObjectChain<T>['forEachRight'];
    }
    interface LoDashStatic {
        /**
         * @see _.every
         */
        every<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean;
        /**
         * @see _.every
         */
        every<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface Collection<T> {
        /**
         * @see _.every
         */
        every(predicate?: ListIterateeCustom<T, boolean>): boolean;
    }
    interface Object<T> {
        /**
         * @see _.every
         */
        every(predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface CollectionChain<T> {
        /**
         * @see _.every
         */
        every(predicate?: ListIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.every
         */
        every(predicate?: ObjectIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
         * @see _.filter
         */
        filter(collection: string | null | undefined, predicate?: StringIterator<boolean>): string[];
        /**
         * @see _.filter
         */
        filter<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>): S[];
        /**
         * @see _.filter
         */
        filter<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[];
        /**
         * @see _.filter
         */
        filter<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>): S[];
        /**
         * @see _.filter
         */
        filter<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): Array<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.filter
         */
        filter(predicate?: StringIterator<boolean>): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.filter
         */
        filter<S extends T>(predicate: ListIteratorTypeGuard<T, S>): Collection<S>;
        /**
         * @see _.filter
         */
        filter(predicate?: ListIterateeCustom<T, boolean>): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.filter
         */
        filter<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>): Collection<S>;
        /**
         * @see _.filter
         */
        filter(predicate?: ObjectIterateeCustom<T, boolean>): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.filter
         */
        filter(predicate?: StringIterator<boolean>): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.filter
         */
        filter<S extends T>(predicate: ListIteratorTypeGuard<T, S>): CollectionChain<S>;
        /**
         * @see _.filter
         */
        filter(predicate?: ListIterateeCustom<T, boolean>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.filter
         */
        filter<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>): CollectionChain<S>;
        /**
         * @see _.filter
         */
        filter(predicate?: ObjectIterateeCustom<T, boolean>): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * @see _.find
         */
        find<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.find
         */
        find<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
        /**
         * @see _.find
         */
        find<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.find
         */
        find<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface Collection<T> {
        /**
         * @see _.find
         */
        find<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.find
         */
        find(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
    }
    interface Object<T> {
        /**
         * @see _.find
         */
        find< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.find
         */
        find(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.find
         */
        find< S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        /**
         * @see _.find
         */
        find(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T|undefined>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.find
         */
        find< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        /**
         * @see _.find
         */
        find(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T[keyof T]|undefined>;
    }
    interface LoDashStatic {
        /**
         * @see _.findLast
         */
        findLast<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.findLast
         */
        findLast<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
        /**
         * @see _.findLast
         */
        findLast<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.findLast
         */
        findLast<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface Collection<T> {
        /**
         * @see _.findLast
         */
        findLast<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.findLast
         */
        findLast(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
    }
    interface Object<T> {
        /**
         * @see _.findLast
         */
        findLast< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        /**
         * @see _.findLast
         */
        findLast(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.findLast
         */
        findLast< S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        /**
         * @see _.findLast
         */
        findLast(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T|undefined>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.findLast
         */
        findLast< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): ExpChain<S|undefined>;
        /**
         * @see _.findLast
         */
        findLast(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): ExpChain<T[keyof T]|undefined>;
    }
    interface LoDashStatic {
        /**
         * @see _.flatMap
         */
        flatMap<T>(collection: Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined): T[];
        /**
         * @see _.flatMap
         */
        flatMap(collection: object | null | undefined): any[];
        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, Many<TResult>>): TResult[];
        /**
         * @see _.flatMap
         */
        flatMap<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, Many<TResult>>): TResult[];
        /**
         * @see _.flatMap
         */
        flatMap(collection: object | null | undefined, iteratee: string): any[];
        /**
         * @see _.flatMap
         */
        flatMap(collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface String {
        /**
         * @see _.flatMap
         */
        flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): Collection<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.flatMap
         */
        flatMap<TResult = any>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): Collection<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.flatMap
         */
        flatMap(): T extends Many<infer U> ? Collection<U> : Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.flatMap
         */
        flatMap<TResult = any>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): Collection<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.flatMap
         */
        flatMap(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.flatMap
         */
        flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): CollectionChain<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flatMap
         */
        flatMap<TResult = any>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): CollectionChain<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.flatMap
         */
        flatMap(): T extends Many<infer U> ? CollectionChain<U> : CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.flatMap
         */
        flatMap<TResult = any>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): CollectionChain<TResult>;
        /**
         * @see _.flatMap
         */
        flatMap(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.flatMap
         */
        flatMap(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T>(collection: Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined): T[];
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(collection: object | null | undefined, iteratee: string): any[];
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface String {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>): Collection<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): Collection<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): Collection<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>): CollectionChain<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): CollectionChain<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): CollectionChain<TResult>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.flatMapDeep
         */
        flatMapDeep(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T>(collection: Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined): T[];
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): TResult[];
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): TResult[];
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(collection: object | null | undefined, iteratee: string, depth?: number): any[];
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(collection: object | null | undefined, iteratee: object, depth?: number): boolean[];
    }
    interface String {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): Collection<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): Collection<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): Collection<boolean>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): Collection<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): Collection<boolean>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): CollectionChain<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): CollectionChain<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): CollectionChain<boolean>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): CollectionChain<TResult>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): CollectionChain<boolean>;
        /**
         * @see _.flatMapDepth
         */
        flatMapDepth(depth?: number): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * @see _.forEach
         */
        forEach<T>(collection: T[], iteratee?: ArrayIterator<T, any>): T[];
        /**
         * @see _.forEach
         */
        forEach(collection: string, iteratee?: StringIterator<any>): string;
        /**
         * @see _.forEach
         */
        forEach<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>;
        /**
         * @see _.forEach
         */
        forEach<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forEach
         */
        forEach<T, TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined), iteratee?: ArrayIterator<T, any>): TArray;
        /**
         * @see _.forEach
         */
        forEach<TString extends string | null | undefined>(collection: TString, iteratee?: StringIterator<any>): TString;
        /**
         * @see _.forEach
         */
        forEach<T, TList extends List<T> | null | undefined>(collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any>): TList;
        /**
         * @see _.forEach
         */
        forEach<T extends object>(collection: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface String {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: StringIterator<any>): String;
    }
    interface Object<T> {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: ObjectIterator<T, any>): Object<T>;
    }
    interface Collection<T> {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: ListIterator<T, any>): Collection<T>;
    }
    interface StringChain {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: StringIterator<any>): StringChain;
    }
    interface ObjectChain<T> {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: ObjectIterator<T, any>): ObjectChain<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.forEach
         */
        forEach(iteratee?: ListIterator<T, any>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.forEachRight
         */
        forEachRight<T>(collection: T[], iteratee?: ArrayIterator<T, any>): T[];
        /**
         * @see _.forEachRight
         */
        forEachRight(collection: string, iteratee?: StringIterator<any>): string;
        /**
         * @see _.forEachRight
         */
        forEachRight<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>;
        /**
         * @see _.forEachRight
         */
        forEachRight<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forEachRight
         */
        forEachRight<T, TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined), iteratee?: ArrayIterator<T, any>): TArray;
        /**
         * @see _.forEachRight
         */
        forEachRight<TString extends string | null | undefined>(collection: TString, iteratee?: StringIterator<any>): TString;
        /**
         * @see _.forEachRight
         */
        forEachRight<T, TList extends List<T> | null | undefined>(collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any>): TList;
        /**
         * @see _.forEachRight
         */
        forEachRight<T extends object>(collection: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface String {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: StringIterator<any>): String;
    }
    interface Object<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: ObjectIterator<T, any>): Object<T>;
    }
    interface Collection<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: ListIterator<T, any>): Collection<T>;
    }
    interface StringChain {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: StringIterator<any>): StringChain;
    }
    interface ObjectChain<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: ObjectIterator<T, any>): ObjectChain<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.forEachRight
         */
        forEachRight(iteratee?: ListIterator<T, any>): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.groupBy
         */
        groupBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<T[]>;
        /**
         * @see _.groupBy
         */
        groupBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIteratee<T[keyof T]>): Dictionary<Array<T[keyof T]>>;
    }
    interface String {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<string>): Object<Dictionary<string>>;
    }
    interface Collection<T> {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<T>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<Array<T[keyof T]>>>;
    }
    interface StringChain {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.groupBy
         */
        groupBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<Array<T[keyof T]>>>;
    }
    interface LoDashStatic {
        /**
         * @see _.includes
         */
        includes<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, target: T, fromIndex?: number): boolean;
    }
    interface Object<T> {
        /**
         * @see _.includes
         */
        includes(target: T[keyof T], fromIndex?: number): boolean;
    }
    interface Collection<T> {
        /**
         * @see _.includes
         */
        includes(target: T, fromIndex?: number): boolean;
    }
    interface ObjectChain<T> {
        /**
         * @see _.includes
         */
        includes(target: T[keyof T], fromIndex?: number): PrimitiveChain<boolean>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.includes
         */
        includes(target: T, fromIndex?: number): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
         * @see _.invokeMap
         */
        invokeMap(collection: object | null | undefined, methodName: string, ...args: any[]): any[];
        /**
         * @see _.invokeMap
         */
        invokeMap<TResult>(collection: object | null | undefined, method: (...args: any[]) => TResult, ...args: any[]): TResult[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.invokeMap
         */
        invokeMap(methodName: string, ...args: any[]): Collection<any>;
        /**
         * @see _.invokeMap
         */
        invokeMap<TResult>(method: (...args: any[]) => TResult, ...args: any[]): Collection<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.invokeMap
         */
        invokeMap(methodName: string, ...args: any[]): CollectionChain<any>;
        /**
         * @see _.invokeMap
         */
        invokeMap<TResult>(method: (...args: any[]) => TResult, ...args: any[]): CollectionChain<TResult>;
    }
    interface LoDashStatic {
        /**
         * @see _.keyBy
         */
        keyBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIterateeCustom<T, PropertyName>): Dictionary<T>;
        /**
         * @see _.keyBy
         */
        keyBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): Dictionary<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): Object<Dictionary<string>>;
    }
    interface Collection<T> {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<T, PropertyName>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): Object<Dictionary<T[keyof T]>>;
    }
    interface StringChain {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): ObjectChain<Dictionary<string>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<T, PropertyName>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.keyBy
         */
        keyBy(iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): ObjectChain<Dictionary<T[keyof T]>>;
    }
    interface LoDashStatic {
        /**
         * @see _.map
         */
        map<T, TResult>(collection: T[] | null | undefined, iteratee: ArrayIterator<T, TResult>): TResult[];
        /**
         * @see _.map
         */
        map<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, TResult>): TResult[];
        /**
         * @see _.map
         */
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined): T[];
        /**
         * @see _.map
         */
        map<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, TResult>): TResult[];
        /**
         * @see _.map
         */
        map<T, K extends keyof T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: K): Array<T[K]>;
        /**
         * @see _.map
         */
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: string): any[];
        /**
         * @see _.map
         */
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: object): boolean[];
    }

    interface String {
        /**
         * @see _.map
         */
        map<TResult>(iteratee: StringIterator<TResult>): Collection<TResult>;
        /**
         * @see _.map
         */
        map(): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.map
         */
        map<K extends keyof T>(key: K): Collection<T[K]>;
        /**
         * @see _.map
         */
        map<TResult>(iteratee: ListIterator<T, TResult>): Collection<TResult>;
        /**
         * @see _.map
         */
        map(iteratee: PropertyName): Collection<any>;
        /**
         * @see _.map
         */
        map(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.map
         */
        map(): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.map
         */
        map<K extends keyof T[keyof T]>(key: K): Collection<T[keyof T][K]>;
        /**
         * @see _.map
         */
        map<TResult>(iteratee: ObjectIterator<T, TResult>): Collection<TResult>;
        /**
         * @see _.map
         */
        map(iteratee: PropertyName): Collection<any>;
        /**
         * @see _.map
         */
        map(iteratee: [PropertyName, any] | object): Collection<boolean>;
        /**
         * @see _.map
         */
        map(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.map
         */
        map<TResult>(iteratee: StringIterator<TResult>): CollectionChain<TResult>;
        /**
         * @see _.map
         */
        map(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.map
         */
        map<K extends keyof T>(key: K): CollectionChain<T[K]>;
        /**
         * @see _.map
         */
        map<TResult>(iteratee: ListIterator<T, TResult>): CollectionChain<TResult>;
        /**
         * @see _.map
         */
        map(iteratee: PropertyName): CollectionChain<any>;
        /**
         * @see _.map
         */
        map(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.map
         */
        map(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.map
         */
        map<K extends keyof T[keyof T]>(key: K): CollectionChain<T[keyof T][K]>;
        /**
         * @see _.map
         */
        map<TResult>(iteratee: ObjectIterator<T, TResult>): CollectionChain<TResult>;
        /**
         * @see _.map
         */
        map(iteratee: PropertyName): CollectionChain<any>;
        /**
         * @see _.map
         */
        map(iteratee: [PropertyName, any] | object): CollectionChain<boolean>;
        /**
         * @see _.map
         */
        map(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * @see _.orderBy
         */
        orderBy<T>(collection: List<T> | null | undefined, iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): T[];
        /**
         * @see _.orderBy
         */
        orderBy<T>(collection: List<T> | null | undefined, iteratees?: Many<ListIteratee<T>>, orders?: Many<boolean|"asc"|"desc">): T[];
        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(collection: T | null | undefined, iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): Array<T[keyof T]>;
        /**
         * @see _.orderBy
         */
        orderBy<T extends object>(collection: T | null | undefined, iteratees?: Many<ObjectIteratee<T>>, orders?: Many<boolean|"asc"|"desc">): Array<T[keyof T]>;
    }
    interface Collection<T> {
        /**
         * @see _.orderBy
         */
        orderBy(iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.orderBy
         */
        orderBy(iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): Collection<T[keyof T]>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.orderBy
         */
        orderBy(iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.orderBy
         */
        orderBy(iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * @see _.partition
         */
        partition<T>(collection: List<T> | null | undefined, callback: ValueIteratee<T>): [T[], T[]];
        /**
         * @see _.partition
         */
        partition<T extends object>(collection: T | null | undefined, callback: ValueIteratee<T[keyof T]>): [Array<T[keyof T]>, Array<T[keyof T]>];
    }
    interface String {
        /**
         * @see _.partition
         */
        partition(callback: StringIterator<NotVoid>): LoDashImplicitWrapper<[string[], string[]]>;
    }
    interface Collection<T> {
        /**
         * @see _.partition
         */
        partition(callback: ValueIteratee<T>): LoDashImplicitWrapper<[T[], T[]]>;
    }
    interface Object<T> {
        /**
         * @see _.partition
         */
        partition(callback: ValueIteratee<T[keyof T]>): LoDashImplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }
    interface StringChain {
        /**
         * @see _.partition
         */
        partition(callback: StringIterator<NotVoid>): LoDashExplicitWrapper<[string[], string[]]>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.partition
         */
        partition(callback: ValueIteratee<T>): LoDashExplicitWrapper<[T[], T[]]>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.partition
         */
        partition(callback: ValueIteratee<T[keyof T]>): LoDashExplicitWrapper<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }
    interface LoDashStatic {
        /**
         * @see _.reduce
         */
        reduce<T, TResult>(collection: T[] | null | undefined, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult): TResult;
        /**
         * @see _.reduce
         */
        reduce<T, TResult>(collection: List<T> | null | undefined, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        /**
         * @see _.reduce
         */
        reduce<T extends object, TResult>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        /**
         * @see _.reduce
         */
        reduce<T>(collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]>): T | undefined;
        /**
         * @see _.reduce
         */
        reduce<T>(collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>>): T | undefined;
        /**
         * @see _.reduce
         */
        reduce<T extends object>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.reduce
         */
        reduce<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        /**
         * @see _.reduce
         */
        reduce(callback: MemoListIterator<T, T, List<T>>): T | undefined;
    }
    interface Object<T> {
        /**
         * @see _.reduce
         */
        reduce<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        /**
         * @see _.reduce
         */
        reduce(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.reduce
         */
        reduce<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): ExpChain<TResult>;
        /**
         * @see _.reduce
         */
        reduce(callback: MemoListIterator<T, T, List<T>>): ExpChain<T | undefined>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.reduce
         */
        reduce<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): ExpChain<TResult>;
        /**
         * @see _.reduce
         */
        reduce(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): ExpChain<T[keyof T] | undefined>;
    }
    interface LoDashStatic {
        /**
         * @see _.reduceRight
         */
        reduceRight<T, TResult>(collection: T[] | null | undefined, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult): TResult;
        /**
         * @see _.reduceRight
         */
        reduceRight<T, TResult>(collection: List<T> | null | undefined, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        /**
         * @see _.reduceRight
         */
        reduceRight<T extends object, TResult>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        /**
         * @see _.reduceRight
         */
        reduceRight<T>(collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]>): T | undefined;
        /**
         * @see _.reduceRight
         */
        reduceRight<T>(collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>>): T | undefined;
        /**
         * @see _.reduceRight
         */
        reduceRight<T extends object>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.reduceRight
         */
        reduceRight<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        /**
         * @see _.reduceRight
         */
        reduceRight(callback: MemoListIterator<T, T, List<T>>): T | undefined;
    }
    interface Object<T> {
        /**
         * @see _.reduceRight
         */
        reduceRight<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        /**
         * @see _.reduceRight
         */
        reduceRight(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.reduceRight
         */
        reduceRight<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): ExpChain<TResult>;
        /**
         * @see _.reduceRight
         */
        reduceRight(callback: MemoListIterator<T, T, List<T>>): ExpChain<T | undefined>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.reduceRight
         */
        reduceRight<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): ExpChain<TResult>;
        /**
         * @see _.reduceRight
         */
        reduceRight(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): ExpChain<T[keyof T] | undefined>;
    }
    interface LoDashStatic {
        /**
         * @see _.reject
         */
        reject(collection: string | null | undefined, predicate?: StringIterator<boolean>): string[];
        /**
         * @see _.reject
         */
        reject<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[];
        /**
         * @see _.reject
         */
        reject<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): Array<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.reject
         */
        reject(predicate?: StringIterator<boolean>): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.reject
         */
        reject(predicate?: ListIterateeCustom<T, boolean>): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.reject
         */
        reject(predicate?: ObjectIterateeCustom<T, boolean>): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.reject
         */
        reject(predicate?: StringIterator<boolean>): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.reject
         */
        reject(predicate?: ListIterateeCustom<T, boolean>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.reject
         */
        reject(predicate?: ObjectIterateeCustom<T, boolean>): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * @see _.sample
         */
        sample<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined): T | undefined;
        /**
         * @see _.sample
         */
        sample<T extends object>(collection: T | null | undefined): T[keyof T] | undefined;
    }
    interface String {
        /**
         * @see _.sample
         */
        sample(): string | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.sample
         */
        sample(): T | undefined;
    }
    interface Object<T> {
        /**
         * @see _.sample
         */
        sample(): T[keyof T] | undefined;
    }
    interface StringChain {
        /**
         * @see _.sample
         */
        sample(): StringChain;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sample
         */
        sample(): LoDashExplicitWrapper<T | undefined>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.sample
         */
        sample(): LoDashExplicitWrapper<T[keyof T] | undefined>;
    }
    interface LoDashStatic {
        /**
         * @see _.sampleSize
         */
        sampleSize<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, n?: number): T[];
        /**
         * @see _.sampleSize
         */
        sampleSize<T extends object>(collection: T | null | undefined, n?: number): Array<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.sampleSize
         */
        sampleSize(n?: number): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * @see _.shuffle
         */
        shuffle<T>(collection: List<T> | null | undefined): T[];
        /**
         * @see _.shuffle
         */
        shuffle<T extends object>(collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.shuffle
         */
        shuffle(): Collection<string>;
    }
    interface Collection<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.shuffle
         */
        shuffle(): CollectionChain<string>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.shuffle
         */
        shuffle(): CollectionChain<T[keyof T]>;
    }
    interface LoDashStatic {
        /**
         * @see _.size
         */
        size(collection: object | string | null | undefined): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.size
         */
        size(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.size
         */
        size(): PrimitiveChain<number>;
    }
    interface LoDashStatic {
        /**
         * @see _.some
         */
        some<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean;
        /**
         * @see _.some
         */
        some<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface Collection<T> {
        /**
         * @see _.some
         */
        some(predicate?: ListIterateeCustom<T, boolean>): boolean;
    }
    interface Object<T> {
        /**
         * @see _.some
         */
        some(predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface CollectionChain<T> {
        /**
         * @see _.some
         */
        some(predicate?: ListIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.some
         */
        some(predicate?: ObjectIterateeCustom<T, boolean>): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
         * @see _.sortBy
         */
        sortBy<T>(collection: List<T> | null | undefined, ...iteratees: Array<Many<ListIteratee<T>>>): T[];
        /**
         * @see _.sortBy
         */
        sortBy<T extends object>(collection: T | null | undefined, ...iteratees: Array<Many<ObjectIteratee<T>>>): Array<T[keyof T]>;
    }
    interface Collection<T> {
        /**
         * @see _.sortBy
         */
        sortBy(...iteratees: Array<Many<ListIteratee<T>>>): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.sortBy
         */
        sortBy(...iteratees: Array<Many<ObjectIteratee<T>>>): Collection<T[keyof T]>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sortBy
         */
        sortBy(...iteratees: Array<Many<ListIteratee<T>>>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.sortBy
         */
        sortBy(...iteratees: Array<Many<ObjectIteratee<T>>>): CollectionChain<T[keyof T]>;
    }
}

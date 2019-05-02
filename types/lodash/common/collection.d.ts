import _ = require("../index");
declare module "../index" {
    interface Stat {
        countBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<number>;
        countBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIteratee<T[keyof T]>): Dictionary<number>;
    }
    interface ImpO<T> {
        countBy(iteratee?: ValueIteratee<T[keyof T]>): Imp<Dictionary<number>>;
    }
    interface ImpS {
        countBy(iteratee?: ValueIteratee<string>): Imp<Dictionary<number>>;
    }
    interface ImpL<T> {
        countBy(iteratee?: ValueIteratee<T>): Imp<Dictionary<number>>;
    }
    interface ExpO<T> {
        countBy(iteratee?: ValueIteratee<T[keyof T]>): Exp<Dictionary<number>>;
    }
    interface ExpS {
        countBy(iteratee?: ValueIteratee<string>): Exp<Dictionary<number>>;
    }
    interface ExpL<T> {
        countBy(iteratee?: ValueIteratee<T>): Exp<Dictionary<number>>;
    }
    interface Stat {
        each: Stat['forEach'];
    }
    interface ImpS {
        each: ImpS['forEach'];
    }
    interface ImpL<T> {
        each: ImpL<T>['forEach'];
    }
    interface ImpO<T> {
        each: ImpO<T>['forEach'];
    }
    interface ExpS {
        each: ExpS['forEach'];
    }
    interface ExpL<T> {
        each: ExpL<T>['forEach'];
    }
    interface ExpO<T> {
        each: ExpO<T>['forEach'];
    }
    interface Stat {
        eachRight: Stat["forEachRight"];
    }
    interface ImpS {
        eachRight: ImpS['forEachRight'];
    }
    interface ImpL<T> {
        eachRight: ImpL<T>['forEachRight'];
    }
    interface ImpO<T> {
        eachRight: ImpO<T>['forEachRight'];
    }
    interface ExpS {
        eachRight: ExpS['forEachRight'];
    }
    interface ExpL<T> {
        eachRight: ExpL<T>['forEachRight'];
    }
    interface ExpO<T> {
        eachRight: ExpO<T>['forEachRight'];
    }
    interface Stat {
        every<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean;
        every<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface ImpU<T> {
        every(predicate?: DictionaryIteratee<unknown>): boolean;
    }
    interface ImpL<T> {
        every(predicate?: ListIterateeCustom<T, boolean>): boolean;
    }
    interface ImpO<T> {
        every(predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface ExpU<T> {
        every(predicate?: DictionaryIteratee<unknown>): boolean;
    }
    interface ExpL<T> {
        every(predicate?: ListIterateeCustom<T, boolean>): Exp<boolean>;
    }
    interface ExpO<T> {
        every(predicate?: ObjectIterateeCustom<T, boolean>): Exp<boolean>;
    }
    interface Stat {
        filter(collection: string | null | undefined, predicate?: StringIterator<boolean>): string[];
        filter<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>): S[];
        filter<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[];
        filter<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>): S[];
        filter<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): Array<T[keyof T]>;
    }
    interface ImpS {
        filter(predicate?: StringIterator<boolean>): ImpL<string>;
    }
    interface ImpL<T> {
        filter<S extends T>(predicate: ListIteratorTypeGuard<T, S>): ImpL<S>;
        filter(predicate?: ListIterateeCustom<T, boolean>): ImpL<T>;
    }
    interface ImpO<T> {
        filter<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>): ImpL<S>;
        filter(predicate?: ObjectIterateeCustom<T, boolean>): ImpL<T[keyof T]>;
    }
    interface ImpU<T> {
        filter(predicate?: DictionaryIteratee<unknown>): ImpU<T>;
    }
    interface ExpS {
        filter(predicate?: StringIterator<boolean>): ExpL<string>;
    }
    interface ExpL<T> {
        filter<S extends T>(predicate: ListIteratorTypeGuard<T, S>): ExpL<S>;
        filter(predicate?: ListIterateeCustom<T, boolean>): ExpL<T>;
    }
    interface ExpO<T> {
        filter<S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>): ExpL<S>;
        filter(predicate?: ObjectIterateeCustom<T, boolean>): ExpL<T[keyof T]>;
    }
    interface ExpU<T> {
        filter(predicate?: DictionaryIteratee<unknown>): ExpU<T>;
    }
    interface Stat {
        find<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        find<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
        find<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        find<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface ImpL<T> {
        find<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        find(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
    }
    interface ImpO<T> {
        find< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        find(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface ImpU<T> {
        find(predicate?: DictionaryIteratee<unknown>, fromIndex?: number): unknown;
    }
    interface ExpL<T> {
        find< S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): Exp<S|undefined>;
        find(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): Exp<T|undefined>;
    }
    interface ExpO<T> {
        find< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): Exp<S|undefined>;
        find(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): Exp<T[keyof T]|undefined>;
    }
    interface ExpU<T> {
        find(predicate?: DictionaryIteratee<unknown>, fromIndex?: number): ExpU<T>;
    }
    interface Stat {
        findLast<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        findLast<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
        findLast<T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        findLast<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface ImpL<T> {
        findLast<S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        findLast(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): T|undefined;
    }
    interface ImpO<T> {
        findLast< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): S|undefined;
        findLast(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): T[keyof T]|undefined;
    }
    interface ImpU<T> {
        findLast(predicate?: DictionaryIteratee<unknown>, fromIndex?: number): unknown;
    }
    interface ExpL<T> {
        findLast< S extends T>(predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number): Exp<S|undefined>;
        findLast(predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): Exp<T|undefined>;
    }
    interface ExpO<T> {
        findLast< S extends T[keyof T]>(predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number): Exp<S|undefined>;
        findLast(predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number): Exp<T[keyof T]|undefined>;
    }
    interface ExpU<T> {
        findLast(predicate?: DictionaryIteratee<unknown>, fromIndex?: number): ExpU<T>;
    }
    interface Stat {
        flatMap<T>(collection: Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined): T[];
        flatMap(collection: object | null | undefined): any[];
        flatMap<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, Many<TResult>>): TResult[];
        flatMap<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, Many<TResult>>): TResult[];
        flatMap(collection: object | null | undefined, iteratee: string): any[];
        flatMap(collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface ImpU<T> {
        flatMap(): T extends List<infer U> ? ImpL<U> : ImpL<T>;
        flatMap(iteratee: object): ImpL<boolean>;
        flatMap(iteratee: string): ImpL<any>;
        flatMap(): ImpL<any>;
    }
    interface ImpS {
        flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): ImpL<TResult>;
        flatMap(): ImpL<string>;
    }
    interface ImpL<T> {
        flatMap<TResult = any>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): ImpL<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        flatMap(): T extends Many<infer U> ? ImpL<U> : ImpL<T>;
    }
    interface ImpO<T> {
        flatMap<TResult = any>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): ImpL<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        flatMap(): ImpL<T[keyof T]>;
    }
    interface ExpU<T> {
        flatMap(): T extends List<infer U> ? ExpL<U> : ExpL<T>;
        flatMap(iteratee: object): ExpL<boolean>;
        flatMap(iteratee: string): ExpL<any>;
        flatMap(): ExpL<any>;
    }
    interface ExpS {
        flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): ExpL<TResult>;
        flatMap(): ExpL<string>;
    }
    interface ExpL<T> {
        flatMap<TResult = any>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): ExpL<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        flatMap(): T extends Many<infer U> ? ExpL<U> : ExpL<T>;
    }
    interface ExpO<T> {
        flatMap<TResult = any>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): ExpL<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        flatMap(): ExpL<T[keyof T]>;
    }
    interface Stat {
        flatMapDeep<T>(collection: Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined): T[];
        flatMapDeep<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        flatMapDeep<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>): TResult[];
        flatMapDeep(collection: object | null | undefined, iteratee: string): any[];
        flatMapDeep(collection: object | null | undefined, iteratee: object): boolean[];
    }
    interface ImpU<T> {
        flatMapDeep(): T extends List<infer U> ? ImpL<U> : ImpL<T>;
        flatMapDeep(iteratee: object): ImpL<boolean>;
        flatMapDeep(iteratee: string): ImpL<any>;
        flatMapDeep(): ImpL<any>;
    }
    interface ImpS {
        flatMapDeep<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>): ImpL<TResult>;
        flatMapDeep(): ImpL<string>;
    }
    interface ImpL<T> {
        flatMapDeep<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): ImpL<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        flatMapDeep(): ImpL<T>;
    }
    interface ImpO<T> {
        flatMapDeep<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): ImpL<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        flatMapDeep(): ImpL<T[keyof T]>;
    }
    interface ExpU<T> {
        flatMapDeep(): T extends List<infer U> ? ExpL<U> : ExpL<T>;
        flatMapDeep(iteratee: object): ExpL<boolean>;
        flatMapDeep(iteratee: string): ExpL<any>;
        flatMapDeep(): ExpL<any>;
    }
    interface ExpS {
        flatMapDeep<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>): ExpL<TResult>;
        flatMapDeep(): ExpL<string>;
    }
    interface ExpL<T> {
        flatMapDeep<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): ExpL<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        flatMapDeep(): ExpL<T>;
    }
    interface ExpO<T> {
        flatMapDeep<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): ExpL<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        flatMapDeep(): ExpL<T[keyof T]>;
    }
    interface Stat {
        flatMapDepth<T>(collection: Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined): T[];
        flatMapDepth<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): TResult[];
        flatMapDepth<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): TResult[];
        flatMapDepth(collection: object | null | undefined, iteratee: string, depth?: number): any[];
        flatMapDepth(collection: object | null | undefined, iteratee: object, depth?: number): boolean[];
    }
    interface ImpU<T> {
        flatMapDepth(depth?: number): T extends List<infer U> ? ImpL<U> : ImpL<T>;
        flatMapDepth(iteratee: object , depth?: number): ImpL<boolean>;
        flatMapDepth(iteratee: string , depth?: number): ImpL<any>;
        flatMapDepth(depth?: number): ImpL<any>;
    }
    interface ImpS {
        flatMapDepth<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): ImpL<TResult>;
        flatMapDepth(depth?: number): ImpL<string>;
    }
    interface ImpL<T> {
        flatMapDepth<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): ImpL<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): ImpL<boolean>;
        flatMapDepth(depth?: number): ImpL<T>;
    }
    interface ImpO<T> {
        flatMapDepth<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): ImpL<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): ImpL<boolean>;
        flatMapDepth(depth?: number): ImpL<T[keyof T]>;
    }
    interface ExpU<T> {
        flatMapDepth(depth?: number): T extends List<infer U> ? ExpL<U> : ExpL<T>;
        flatMapDepth(iteratee: object , depth?: number): ExpL<boolean>;
        flatMapDepth(iteratee: string , depth?: number): ExpL<any>;
        flatMapDepth(depth?: number): ExpL<any>;
    }
    interface ExpS {
        flatMapDepth<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): ExpL<TResult>;
        flatMapDepth(depth?: number): ExpL<string>;
    }
    interface ExpL<T> {
        flatMapDepth<TResult = any>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): ExpL<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): ExpL<boolean>;
        flatMapDepth(depth?: number): ExpL<T>;
    }
    interface ExpO<T> {
        flatMapDepth<TResult = any>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): ExpL<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): ExpL<boolean>;
        flatMapDepth(depth?: number): ExpL<T[keyof T]>;
    }
    interface Stat {
        forEach<T>(collection: T[], iteratee?: ArrayIterator<T, any>): T[];
        forEach(collection: string, iteratee?: StringIterator<any>): string;
        forEach<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>;
        forEach<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T;
        forEach<T, TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined), iteratee?: ArrayIterator<T, any>): TArray;
        forEach<TString extends string | null | undefined>(collection: TString, iteratee?: StringIterator<any>): TString;
        forEach<T, TList extends List<T> | null | undefined>(collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any>): TList;
        forEach<T extends object>(collection: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface ImpS {
        forEach(iteratee?: StringIterator<any>): ImpS;
    }
    interface ImpO<T> {
        forEach(iteratee?: ObjectIterator<T, any>): ImpO<T>;
    }
    interface ImpL<T> {
        forEach(iteratee?: ListIterator<T, any>): ImpL<T>;
    }
    interface ImpU<T> {
        forEach(iteratee?: ObjectIterator<unknown, any>): ImpU<T>;
    }
    interface ExpS {
        forEach(iteratee?: StringIterator<any>): ExpS;
    }
    interface ExpO<T> {
        forEach(iteratee?: ObjectIterator<T, any>): ExpO<T>;
    }
    interface ExpL<T> {
        forEach(iteratee?: ListIterator<T, any>): ExpL<T>;
    }
    interface ExpU<T> {
        forEach(iteratee?: ObjectIterator<unknown, any>): ExpU<T>;
    }
    interface Stat {
        forEachRight<T>(collection: T[], iteratee?: ArrayIterator<T, any>): T[];
        forEachRight(collection: string, iteratee?: StringIterator<any>): string;
        forEachRight<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>;
        forEachRight<T extends object>(collection: T, iteratee?: ObjectIterator<T, any>): T;
        forEachRight<T, TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined), iteratee?: ArrayIterator<T, any>): TArray;
        forEachRight<TString extends string | null | undefined>(collection: TString, iteratee?: StringIterator<any>): TString;
        forEachRight<T, TList extends List<T> | null | undefined>(collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any>): TList;
        forEachRight<T extends object>(collection: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface ImpS {
        forEachRight(iteratee?: StringIterator<any>): ImpS;
    }
    interface ImpO<T> {
        forEachRight(iteratee?: ObjectIterator<T, any>): ImpO<T>;
    }
    interface ImpL<T> {
        forEachRight(iteratee?: ListIterator<T, any>): ImpL<T>;
    }
    interface ImpU<T> {
        forEachRight(iteratee?: ObjectIterator<unknown, any>): ImpU<T>;
    }
    interface ExpS {
        forEachRight(iteratee?: StringIterator<any>): ExpS;
    }
    interface ExpO<T> {
        forEachRight(iteratee?: ObjectIterator<T, any>): ExpO<T>;
    }
    interface ExpL<T> {
        forEachRight(iteratee?: ListIterator<T, any>): ExpL<T>;
    }
    interface ExpU<T> {
        forEachRight(iteratee?: ObjectIterator<unknown, any>): ExpU<T>;
    }
    interface Stat {
        groupBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<T[]>;
        groupBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIteratee<T[keyof T]>): Dictionary<Array<T[keyof T]>>;
    }
    interface ImpS {
        groupBy(iteratee?: ValueIteratee<string>): Imp<Dictionary<string>>;
    }
    interface ImpL<T> {
        groupBy(iteratee?: ValueIteratee<T>): Imp<Dictionary<T>>;
    }
    interface ImpO<T> {
        groupBy(iteratee?: ValueIteratee<T[keyof T]>): Imp<Dictionary<Array<T[keyof T]>>>;
    }
    interface ImpU<T> {
        groupBy(iteratee?: ValueIteratee<unknown>): Imp<Dictionary<unknown>>;
    }
    interface ExpS {
        groupBy(iteratee?: ValueIteratee<string>): Exp<Dictionary<string>>;
    }
    interface ExpL<T> {
        groupBy(iteratee?: ValueIteratee<T>): Exp<Dictionary<T>>;
    }
    interface ExpO<T> {
        groupBy(iteratee?: ValueIteratee<T[keyof T]>): Exp<Dictionary<Array<T[keyof T]>>>;
    }
    interface ExpU<T> {
        groupBy(iteratee?: ValueIteratee<unknown>): Exp<Dictionary<unknown>>;
    }
    interface Stat {
        includes<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, target: T, fromIndex?: number): boolean;
    }
    interface ImpO<T> {
        includes(target: T[keyof T], fromIndex?: number): boolean;
    }
    interface ImpL<T> {
        includes(target: T, fromIndex?: number): boolean;
    }
    interface ExpO<T> {
        includes(target: T[keyof T], fromIndex?: number): Exp<boolean>;
    }
    interface ExpL<T> {
        includes(target: T, fromIndex?: number): Exp<boolean>;
    }
    interface Stat {
        invokeMap(collection: object | null | undefined, methodName: string, ...args: any[]): any[];
        invokeMap<TResult>(collection: object | null | undefined, method: (...args: any[]) => TResult, ...args: any[]): TResult[];
    }
    interface Imp<TValue> {
        invokeMap(methodName: string, ...args: any[]): ImpL<any>;
        invokeMap<TResult>(method: (...args: any[]) => TResult, ...args: any[]): ImpL<TResult>;
    }
    interface Exp<TValue> {
        invokeMap(methodName: string, ...args: any[]): ExpL<any>;
        invokeMap<TResult>(method: (...args: any[]) => TResult, ...args: any[]): ExpL<TResult>;
    }
    interface Stat {
        keyBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIterateeCustom<T, PropertyName>): Dictionary<T>;
        keyBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): Dictionary<T[keyof T]>;
    }
    interface ImpS {
        keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): Imp<Dictionary<string>>;
    }
    interface ImpL<T> {
        keyBy(iteratee?: ValueIterateeCustom<T, PropertyName>): Imp<Dictionary<T>>;
    }
    interface ImpO<T> {
        keyBy(iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): Imp<Dictionary<T[keyof T]>>;
    }
    interface ImpU<T> {
        keyBy(iteratee?: ValueIterateeCustom<unknown, PropertyName>): Imp<Dictionary<unknown>>;
    }
    interface ExpS {
        keyBy(iteratee?: ValueIterateeCustom<string, PropertyName>): Exp<Dictionary<string>>;
    }
    interface ExpL<T> {
        keyBy(iteratee?: ValueIterateeCustom<T, PropertyName>): Exp<Dictionary<T>>;
    }
    interface ExpO<T> {
        keyBy(iteratee?: ValueIterateeCustom<T[keyof T], PropertyName>): Exp<Dictionary<T[keyof T]>>;
    }
    interface ExpU<T> {
        keyBy(iteratee?: ValueIterateeCustom<unknown, PropertyName>): Exp<Dictionary<unknown>>;
    }
    interface Stat {
        map<T, TResult>(collection: T[] | null | undefined, iteratee: ArrayIterator<T, TResult>): TResult[];
        map<T, TResult>(collection: List<T> | null | undefined, iteratee: ListIterator<T, TResult>): TResult[];
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined): T[];
        map<T extends object, TResult>(collection: T | null | undefined, iteratee: ObjectIterator<T, TResult>): TResult[];
        map<T, K extends keyof T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: K): Array<T[K]>;
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: string): any[];
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: object): boolean[];
    }

    interface ImpS {
        map<TResult>(iteratee: StringIterator<TResult>): ImpL<TResult>;
        map(): ImpL<string>;
    }
    interface ImpL<T> {
        map<K extends keyof T>(key: K): ImpL<T[K]>;
        map<TResult>(iteratee: ListIterator<T, TResult>): ImpL<TResult>;
        map(iteratee: PropertyName): ImpL<any>;
        map(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        map(): ImpL<T>;
    }
    interface ImpO<T> {
        map<K extends keyof T[keyof T]>(key: K): ImpL<T[keyof T][K]>;
        map<TResult>(iteratee: ObjectIterator<T, TResult>): ImpL<TResult>;
        map(iteratee: PropertyName): ImpL<any>;
        map(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        map(): ImpL<T[keyof T]>;
    }
    interface ImpU<T> {
        map(iteratee: ObjectIterator<unknown, PropertyName>): ImpL<unknown>;
        map(iteratee?: string): ImpL<any>;
        map(iteratee?: object): ImpL<boolean>;
        map(): ImpL<unknown>;
    }
    interface ExpS {
        map<TResult>(iteratee: StringIterator<TResult>): ExpL<TResult>;
        map(): ExpL<string>;
    }
    interface ExpL<T> {
        map<K extends keyof T>(key: K): ExpL<T[K]>;
        map<TResult>(iteratee: ListIterator<T, TResult>): ExpL<TResult>;
        map(iteratee: PropertyName): ExpL<any>;
        map(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        map(): ExpL<T>;
    }
    interface ExpO<T> {
        map<K extends keyof T[keyof T]>(key: K): ExpL<T[keyof T][K]>;
        map<TResult>(iteratee: ObjectIterator<T, TResult>): ExpL<TResult>;
        map(iteratee: PropertyName): ExpL<any>;
        map(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        map(): ExpL<T[keyof T]>;
    }
    interface ExpU<T> {
        map(iteratee: ObjectIterator<unknown, PropertyName>): ExpL<unknown>;
        map(iteratee?: string): ExpL<any>;
        map(iteratee?: object): ExpL<boolean>;
        map(): ExpL<unknown>;
    }
    interface Stat {
        orderBy<T>(collection: List<T> | null | undefined, iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): T[];
        orderBy<T>(collection: List<T> | null | undefined, iteratees?: Many<ListIteratee<T>>, orders?: Many<boolean|"asc"|"desc">): T[];
        orderBy<T extends object>(collection: T | null | undefined, iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): Array<T[keyof T]>;
        orderBy<T extends object>(collection: T | null | undefined, iteratees?: Many<ObjectIteratee<T>>, orders?: Many<boolean|"asc"|"desc">): Array<T[keyof T]>;
    }
    interface ImpL<T> {
        orderBy(iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): ImpL<T>;
    }
    interface ImpO<T> {
        orderBy(iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): ImpL<T[keyof T]>;
    }
    interface ExpL<T> {
        orderBy(iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): ExpL<T>;
    }
    interface ExpO<T> {
        orderBy(iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc">): ExpL<T[keyof T]>;
    }
    interface Stat {
        partition<T>(collection: List<T> | null | undefined, callback: ValueIteratee<T>): [T[], T[]];
        partition<T extends object>(collection: T | null | undefined, callback: ValueIteratee<T[keyof T]>): [Array<T[keyof T]>, Array<T[keyof T]>];
    }
    interface ImpS {
        partition(callback: StringIterator<NotVoid>): Imp<[string[], string[]]>;
    }
    interface ImpL<T> {
        partition(callback: ValueIteratee<T>): Imp<[T[], T[]]>;
    }
    interface ImpO<T> {
        partition(callback: ValueIteratee<T[keyof T]>): Imp<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }
    interface ExpS {
        partition(callback: StringIterator<NotVoid>): Exp<[string[], string[]]>;
    }
    interface ExpL<T> {
        partition(callback: ValueIteratee<T>): Exp<[T[], T[]]>;
    }
    interface ExpO<T> {
        partition(callback: ValueIteratee<T[keyof T]>): Exp<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }
    interface Stat {
        reduce<T, TResult>(collection: T[] | null | undefined, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult): TResult;
        reduce<T, TResult>(collection: List<T> | null | undefined, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        reduce<T extends object, TResult>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        reduce<T>(collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]>): T | undefined;
        reduce<T>(collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>>): T | undefined;
        reduce<T extends object>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface ImpL<T> {
        reduce<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        reduce(callback: MemoListIterator<T, T, List<T>>): T | undefined;
    }
    interface ImpO<T> {
        reduce<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        reduce(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface ExpL<T> {
        reduce<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): Exp<TResult>;
        reduce(callback: MemoListIterator<T, T, List<T>>): Exp<T | undefined>;
    }
    interface ExpO<T> {
        reduce<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): Exp<TResult>;
        reduce(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): Exp<T[keyof T] | undefined>;
    }
    interface Stat {
        reduceRight<T, TResult>(collection: T[] | null | undefined, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult): TResult;
        reduceRight<T, TResult>(collection: List<T> | null | undefined, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        reduceRight<T extends object, TResult>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        reduceRight<T>(collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]>): T | undefined;
        reduceRight<T>(collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>>): T | undefined;
        reduceRight<T extends object>(collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface ImpL<T> {
        reduceRight<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): TResult;
        reduceRight(callback: MemoListIterator<T, T, List<T>>): T | undefined;
    }
    interface ImpO<T> {
        reduceRight<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): TResult;
        reduceRight(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): T[keyof T] | undefined;
    }
    interface ExpL<T> {
        reduceRight<TResult>(callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult): Exp<TResult>;
        reduceRight(callback: MemoListIterator<T, T, List<T>>): Exp<T | undefined>;
    }
    interface ExpO<T> {
        reduceRight<TResult>(callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult): Exp<TResult>;
        reduceRight(callback: MemoObjectIterator<T[keyof T], T[keyof T], T>): Exp<T[keyof T] | undefined>;
    }
    interface Stat {
        reject(collection: string | null | undefined, predicate?: StringIterator<boolean>): string[];
        reject<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[];
        reject<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): Array<T[keyof T]>;
    }
    interface ImpS {
        reject(predicate?: StringIterator<boolean>): ImpL<string>;
    }
    interface ImpL<T> {
        reject(predicate?: ListIterateeCustom<T, boolean>): ImpL<T>;
    }
    interface ImpO<T> {
        reject(predicate?: ObjectIterateeCustom<T, boolean>): ImpL<T[keyof T]>;
    }
    interface ExpS {
        reject(predicate?: StringIterator<boolean>): ExpL<string>;
    }
    interface ExpL<T> {
        reject(predicate?: ListIterateeCustom<T, boolean>): ExpL<T>;
    }
    interface ExpO<T> {
        reject(predicate?: ObjectIterateeCustom<T, boolean>): ExpL<T[keyof T]>;
    }
    interface Stat {
        sample<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined): T | undefined;
        sample<T extends object>(collection: T | null | undefined): T[keyof T] | undefined;
    }
    interface ImpS {
        sample(): string | undefined;
    }
    interface ImpL<T> {
        sample(): T | undefined;
    }
    interface ImpO<T> {
        sample(): T[keyof T] | undefined;
    }
    interface ExpS {
        sample(): Exp<string | undefined>;
    }
    interface ExpL<T> {
        sample(): Exp<T | undefined>;
    }
    interface ExpO<T> {
        sample(): Exp<T[keyof T] | undefined>;
    }
    interface Stat {
        sampleSize<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, n?: number): T[];
        sampleSize<T extends object>(collection: T | null | undefined, n?: number): Array<T[keyof T]>;
    }
    interface ImpS {
        sampleSize(n?: number): ImpL<string>;
    }
    interface ImpL<T> {
        sampleSize(n?: number): ImpL<T>;
    }
    interface ImpO<T> {
        sampleSize(n?: number): ImpL<T[keyof T]>;
    }
    interface ExpS {
        sampleSize(n?: number): ExpL<string>;
    }
    interface ExpL<T> {
        sampleSize(n?: number): ExpL<T>;
    }
    interface ExpO<T> {
        sampleSize(n?: number): ExpL<T[keyof T]>;
    }
    interface Stat {
        shuffle<T>(collection: List<T> | null | undefined): T[];
        shuffle<T extends object>(collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface ImpS {
        shuffle(): ImpL<string>;
    }
    interface ImpL<T> {
        shuffle(): ImpL<T>;
    }
    interface ImpO<T> {
        shuffle(): ImpL<T[keyof T]>;
    }
    interface ExpS {
        shuffle(): ExpL<string>;
    }
    interface ExpL<T> {
        shuffle(): ExpL<T>;
    }
    interface ExpO<T> {
        shuffle(): ExpL<T[keyof T]>;
    }
    interface Stat {
        size(collection: object | string | null | undefined): number;
    }
    interface Imp<TValue> {
        size(): number;
    }
    interface Exp<TValue> {
        size(): Exp<number>;
    }
    interface Stat {
        some<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean;
        some<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface ImpL<T> {
        some(predicate?: ListIterateeCustom<T, boolean>): boolean;
    }
    interface ImpO<T> {
        some(predicate?: ObjectIterateeCustom<T, boolean>): boolean;
    }
    interface ExpL<T> {
        some(predicate?: ListIterateeCustom<T, boolean>): Exp<boolean>;
    }
    interface ExpO<T> {
        some(predicate?: ObjectIterateeCustom<T, boolean>): Exp<boolean>;
    }
    interface Stat {
        sortBy<T>(collection: List<T> | null | undefined, ...iteratees: Array<Many<ListIteratee<T>>>): T[];
        sortBy<T extends object>(collection: T | null | undefined, ...iteratees: Array<Many<ObjectIteratee<T>>>): Array<T[keyof T]>;
    }
    interface ImpL<T> {
        sortBy(...iteratees: Array<Many<ListIteratee<T>>>): ImpL<T>;
    }
    interface ImpO<T> {
        sortBy(...iteratees: Array<Many<ObjectIteratee<T>>>): ImpL<T[keyof T]>;
    }
    interface ExpL<T> {
        sortBy(...iteratees: Array<Many<ListIteratee<T>>>): ExpL<T>;
    }
    interface ExpO<T> {
        sortBy(...iteratees: Array<Many<ObjectIteratee<T>>>): ExpL<T[keyof T]>;
    }
}

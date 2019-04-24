import _ = require("../index");
declare module "../index" {
    interface Stat {
        countBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): Dictionary<number>;
        countBy<T extends object>(collection: T | null | undefined, iteratee?: ValueIteratee<T[keyof T]>): Dictionary<number>;
    }
    interface ImpO<T> {
        countBy(iteratee?: ValueIteratee<T[keyof T]>): Imp<Dictionary<number>>;
    }
    interface Imp<TValue> {
        countBy(iteratee?: ValueIteratee<TValue>): Imp<Dictionary<number>>;
    }
    interface ExpO<T> {
        countBy( iteratee?: ValueIteratee<T[keyof T]> ): Exp<Dictionary<number>>;
    }
    interface Exp<TValue> {
        countBy(iteratee?: ValueIteratee<TValue>): Exp<Dictionary<number>>;
    }
    interface Stat {
        each: typeof _.forEach;
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
        eachRight: typeof _.forEachRight;
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
        every<T>( collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean> ): boolean;
        every<T extends object>( collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean> ): boolean;
    }
    interface ImpU {
        every(predicate?: DictionaryIteratee<unknown> ): boolean;
    }
    interface ImpL<T> {
        every( predicate?: ListIterateeCustom<T, boolean> ): boolean;
    }
    interface ImpO<T> {
        every( predicate?: ObjectIterateeCustom<T, boolean> ): boolean;
    }
    interface ExpU {
        every(predicate?: DictionaryIteratee<unknown> ): boolean;
    }
    interface ExpL<T> {
        every( predicate?: ListIterateeCustom<T, boolean> ): Exp<boolean>;
    }
    interface ExpO<T> {
        every( predicate?: ObjectIterateeCustom<T, boolean> ): Exp<boolean>;
    }
    interface Stat {
        filter( collection: string | null | undefined, predicate?: StringIterator<boolean> ): string[];
        filter<T, S extends T>( collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S> ): S[];
        filter<T>( collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean> ): T[];
        filter<T extends object, S extends T[keyof T]>( collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S> ): S[];
        filter<T extends object>( collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean> ): Array<T[keyof T]>;
    }
    interface ImpS {
        filter(predicate?: StringIterator<boolean> ): ImpL<string>;
    }
    interface ImpL<T> {
        filter<T, S extends T>( predicate: ListIteratorTypeGuard<T, S> ): ImpL<S>;
        filter<T>( predicate?: ListIterateeCustom<T, boolean> ): ImpL<T>;
    }
    interface ImpO<T> {
        filter<S extends T[keyof T]>( predicate: ObjectIteratorTypeGuard<T, S> ): ImpL<S>;
        filter( predicate?: ObjectIterateeCustom<T, boolean> ): ImpL<T[keyof T]>;
    }
    interface ImpU {
        filter(predicate?: DictionaryIteratee<unknown> ): ImpU;
    }
    interface ExpS {
        filter(predicate?: StringIterator<boolean> ): ExpL<string>;
    }
    interface ExpL<T> {
        filter<T, S extends T>( predicate: ListIteratorTypeGuard<T, S> ): ExpL<S>;
        filter<T>( predicate?: ListIterateeCustom<T, boolean> ): ExpL<T>;
    }
    interface ExpO<T> {
        filter<S extends T[keyof T]>( predicate: ObjectIteratorTypeGuard<T, S> ): ExpL<S>;
        filter( predicate?: ObjectIterateeCustom<T, boolean> ): ExpL<T[keyof T]>;
    }
    interface ExpU {
        filter(predicate?: DictionaryIteratee<unknown> ): ExpU;
    }
    interface Stat {
        find<T, S extends T>( collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number ): S|undefined;
        find<T>( collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): T|undefined;
        find<T extends object, S extends T[keyof T]>( collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number ): S|undefined;
        find<T extends object>( collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number ): T[keyof T]|undefined;
    }
    interface ImpL<T> {
        find<S extends T>( predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number ): S|undefined;
        find( predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): T|undefined;
    }
    interface ImpO<T> {
        find< S extends T[keyof T]>( predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number ): S|undefined;
        find( predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number ): T[keyof T]|undefined;
    }
    interface ImpU {
        find(predicate?: DictionaryIteratee<unknown>, fromIndex?: number ): unknown;
    }
    interface ExpL<T> {
        find< S extends T>( predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number ): Exp<S|undefined>;
        find( predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): Exp<T|undefined>;
    }
    interface ExpO<T> {
        find< S extends T[keyof T]>( predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number ): Exp<S|undefined>;
        find( predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number ): Exp<T[keyof T]|undefined>;
    }
    interface ExpU {
        find(predicate?: DictionaryIteratee<unknown>, fromIndex?: number ): ExpU;
    }
    interface Stat {
        findLast<T, S extends T>( collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number ): S|undefined;
        findLast<T>( collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): T|undefined;
        findLast<T extends object, S extends T[keyof T]>( collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number ): S|undefined;
        findLast<T extends object>( collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number ): T[keyof T]|undefined;
    }
    interface ImpL<T> {
        findLast<S extends T>( predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number ): S|undefined;
        findLast( predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): T|undefined;
    }
    interface ImpO<T> {
        findLast< S extends T[keyof T]>( predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number ): S|undefined;
        findLast( predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number ): T[keyof T]|undefined;
    }
    interface ImpU {
        findLast(predicate?: DictionaryIteratee<unknown>, fromIndex?: number ): unknown;
    }
    interface ExpL<T> {
        findLast< S extends T>( predicate: ListIteratorTypeGuard<T, S>, fromIndex?: number ): Exp<S|undefined>;
        findLast( predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number ): Exp<T|undefined>;
    }
    interface ExpO<T> {
        findLast< S extends T[keyof T]>( predicate: ObjectIteratorTypeGuard<T, S>, fromIndex?: number ): Exp<S|undefined>;
        findLast( predicate?: ObjectIterateeCustom<T, boolean>, fromIndex?: number ): Exp<T[keyof T]|undefined>;
    }
    interface ExpU {
        findLast(predicate?: DictionaryIteratee<unknown>, fromIndex?: number ): ExpU;
    }
    interface Stat {
        flatMap<T>( collection: Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined ): T[];
        flatMap( collection: object | null | undefined ): any[];
        flatMap<T, TResult>( collection: List<T> | null | undefined, iteratee: ListIterator<T, Many<TResult>> ): TResult[];
        flatMap<T extends object, TResult>( collection: T | null | undefined, iteratee: ObjectIterator<T, Many<TResult>> ): TResult[];
        flatMap( collection: object | null | undefined, iteratee: string ): any[];
        flatMap( collection: object | null | undefined, iteratee: object ): boolean[];
    }
    interface ImpU {
        flatMap<T>(this: Imp<Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined>): ImpL<T>;
        flatMap( iteratee: object ): ImpL<boolean>;
        flatMap( iteratee: string ): ImpL<any>;
        flatMap(): ImpL<any>;
    }
    interface ImpS {
        flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): ImpL<TResult>;
        flatMap(): ImpL<string>;
    }
    interface ImpL<T> {
        flatMap<TResult>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): ImpL<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        flatMap(): ImpL<T>;
    }
    interface ImpO<T> {
        flatMap<TResult>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): ImpL<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        flatMap(): ImpL<T[keyof T]>;
    }
    interface ExpU {
        flatMap<T>(this: Exp<Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined>): ExpL<T>;
        flatMap( iteratee: object ): ExpL<boolean>;
        flatMap( iteratee: string ): ExpL<any>;
        flatMap(): ExpL<any>;
    }
    interface ExpS {
        flatMap<TResult>(iteratee: StringIterator<Many<TResult>>): ExpL<TResult>;
        flatMap(): ExpL<string>;
    }
    interface ExpL<T> {
        flatMap<TResult>(iteratee: ListIterator<T, Many<TResult>> | PropertyName): ExpL<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        flatMap(): ExpL<T>;
    }
    interface ExpO<T> {
        flatMap<TResult>(iteratee: ObjectIterator<T, Many<TResult>> | PropertyName): ExpL<TResult>;
        flatMap(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        flatMap(): ExpL<T[keyof T]>;
    }
    interface Stat {
        flatMapDeep<T>( collection: Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined ): T[];
        flatMapDeep<T, TResult>( collection: List<T> | null | undefined, iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> ): TResult[];
        flatMapDeep<T extends object, TResult>( collection: T | null | undefined, iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> ): TResult[];
        flatMapDeep( collection: object | null | undefined, iteratee: string ): any[];
        flatMapDeep( collection: object | null | undefined, iteratee: object ): boolean[];
    }
    interface ImpU {
        flatMapDeep<T>(this: Imp<Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>): ImpL<T>;
        flatMapDeep( iteratee: object ): ImpL<boolean>;
        flatMapDeep( iteratee: string ): ImpL<any>;
        flatMapDeep(): ImpL<any>;
    }
    interface ImpS {
        flatMapDeep<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>): ImpL<TResult>;
        flatMapDeep(): ImpL<string>;
    }
    interface ImpL<T> {
        flatMapDeep<TResult>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): ImpL<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        flatMapDeep(): ImpL<T>;
    }
    interface ImpO<T> {
        flatMapDeep<TResult>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): ImpL<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        flatMapDeep(): ImpL<T[keyof T]>;
    }
    interface ExpU {
        flatMapDeep<T>(this: Exp<Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>): ExpL<T>;
        flatMapDeep( iteratee: object ): ExpL<boolean>;
        flatMapDeep( iteratee: string ): ExpL<any>;
        flatMapDeep(): ExpL<any>;
    }
    interface ExpS {
        flatMapDeep<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>): ExpL<TResult>;
        flatMapDeep(): ExpL<string>;
    }
    interface ExpL<T> {
        flatMapDeep<TResult>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): ExpL<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        flatMapDeep(): ExpL<T>;
    }
    interface ExpO<T> {
        flatMapDeep<TResult>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName): ExpL<TResult>;
        flatMapDeep(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        flatMapDeep(): ExpL<T[keyof T]>;
    }
    interface Stat {
        flatMapDepth<T>( collection: Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined ): T[];
        flatMapDepth<T, TResult>( collection: List<T> | null | undefined, iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number ): TResult[];
        flatMapDepth<T extends object, TResult>( collection: T | null | undefined, iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number ): TResult[];
        flatMapDepth( collection: object | null | undefined, iteratee: string, depth?: number ): any[];
        flatMapDepth( collection: object | null | undefined, iteratee: object, depth?: number ): boolean[];
    }
    interface ImpU {
        flatMapDepth<T>(this: Imp<Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>, depth?: number): ImpL<T>;
        flatMapDepth( iteratee: object , depth?: number): ImpL<boolean>;
        flatMapDepth( iteratee: string , depth?: number): ImpL<any>;
        flatMapDepth( depth?: number): ImpL<any>;
    }
    interface ImpS {
        flatMapDepth<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): ImpL<TResult>;
        flatMapDepth(depth?: number): ImpL<string>;
    }
    interface ImpL<T> {
        flatMapDepth<TResult>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): ImpL<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): ImpL<boolean>;
        flatMapDepth(depth?: number): ImpL<T>;
    }
    interface ImpO<T> {
        flatMapDepth<TResult>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): ImpL<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): ImpL<boolean>;
        flatMapDepth(depth?: number): ImpL<T[keyof T]>;
    }
    interface ExpU {
        flatMapDepth<T>(this: Exp<Dictionary<ListOfRecursiveArraysOrValues<T> | T> | NumericDictionary<ListOfRecursiveArraysOrValues<T> | T> | null | undefined>, depth?: number): ExpL<T>;
        flatMapDepth( iteratee: object , depth?: number): ExpL<boolean>;
        flatMapDepth( iteratee: string , depth?: number): ExpL<any>;
        flatMapDepth(depth?: number): ExpL<any>;
    }
    interface ExpS {
        flatMapDepth<TResult>(iteratee: StringIterator<ListOfRecursiveArraysOrValues<TResult> | TResult>, depth?: number): ExpL<TResult>;
        flatMapDepth(depth?: number): ExpL<string>;
    }
    interface ExpL<T> {
        flatMapDepth<TResult>(iteratee: ListIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): ExpL<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): ExpL<boolean>;
        flatMapDepth(depth?: number): ExpL<T>;
    }
    interface ExpO<T> {
        flatMapDepth<TResult>(iteratee: ObjectIterator<T, ListOfRecursiveArraysOrValues<TResult> | TResult> | PropertyName, depth?: number): ExpL<TResult>;
        flatMapDepth(iteratee: [PropertyName, any] | object, depth?: number): ExpL<boolean>;
        flatMapDepth(depth?: number): ExpL<T[keyof T]>;
    }
    interface Stat {
        forEach<T>( collection: T[], iteratee?: ArrayIterator<T, any> ): T[];
        forEach( collection: string, iteratee?: StringIterator<any> ): string;
        forEach<T>( collection: List<T>, iteratee?: ListIterator<T, any> ): List<T>;
        forEach<T extends object>( collection: T, iteratee?: ObjectIterator<T, any> ): T;
        forEach<T, TArray extends T[] | null | undefined>( collection: TArray & (T[] | null | undefined), iteratee?: ArrayIterator<T, any> ): TArray;
        forEach<TString extends string | null | undefined>( collection: TString, iteratee?: StringIterator<any> ): TString;
        forEach<T, TList extends List<T> | null | undefined>( collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any> ): TList;
        forEach<T extends object>( collection: T | null | undefined, iteratee?: ObjectIterator<T, any> ): T | null | undefined;
    }
    interface ImpS {
        forEach( iteratee?: StringIterator<any> ): ImpS;
    }
    interface ImpO<T> {
        forEach( iteratee?: ObjectIterator<T, any> ): ImpO<T>;
    }
    interface ImpL<T> {
        forEach( iteratee?: ListIterator<T, any> ): ImpL<T>;
    }
    interface ImpU {
        forEach( iteratee?: ObjectIterator<unknown, any> ): ImpU;
    }
    interface ExpS {
        forEach( iteratee?: StringIterator<any> ): ExpS;
    }
    interface ExpO<T> {
        forEach( iteratee?: ObjectIterator<T, any> ): ExpO<T>;
    }
    interface ExpL<T> {
        forEach( iteratee?: ListIterator<T, any> ): ExpL<T>;
    }
    interface ExpU {
        forEach( iteratee?: ObjectIterator<unknown, any> ): ExpU;
    }
    interface Stat {
        forEachRight<T>( collection: T[], iteratee?: ArrayIterator<T, any> ): T[];
        forEachRight( collection: string, iteratee?: StringIterator<any> ): string;
        forEachRight<T>( collection: List<T>, iteratee?: ListIterator<T, any> ): List<T>;
        forEachRight<T extends object>( collection: T, iteratee?: ObjectIterator<T, any> ): T;
        forEachRight<T, TArray extends T[] | null | undefined>( collection: TArray & (T[] | null | undefined), iteratee?: ArrayIterator<T, any> ): TArray;
        forEachRight<TString extends string | null | undefined>( collection: TString, iteratee?: StringIterator<any> ): TString;
        forEachRight<T, TList extends List<T> | null | undefined>( collection: TList & (List<T> | null | undefined), iteratee?: ListIterator<T, any> ): TList;
        forEachRight<T extends object>( collection: T | null | undefined, iteratee?: ObjectIterator<T, any> ): T | null | undefined;
    }
    interface ImpS {
        forEachRight( iteratee?: StringIterator<any> ): ImpS;
    }
    interface ImpO<T> {
        forEachRight( iteratee?: ObjectIterator<T, any> ): ImpO<T>;
    }
    interface ImpL<T> {
        forEachRight( iteratee?: ListIterator<T, any> ): ImpL<T>;
    }
    interface ImpU {
        forEachRight( iteratee?: ObjectIterator<unknown, any> ): ImpU;
    }
    interface ExpS {
        forEachRight( iteratee?: StringIterator<any> ): ExpS;
    }
    interface ExpO<T> {
        forEachRight( iteratee?: ObjectIterator<T, any> ): ExpO<T>;
    }
    interface ExpL<T> {
        forEachRight( iteratee?: ListIterator<T, any> ): ExpL<T>;
    }
    interface ExpU {
        forEachRight( iteratee?: ObjectIterator<unknown, any> ): ExpU;
    }
    interface Stat {
        groupBy<T>( collection: List<T> | null | undefined, iteratee?: ValueIteratee<T> ): Dictionary<T[]>;
        groupBy<T extends object>( collection: T | null | undefined, iteratee?: ValueIteratee<T[keyof T]> ): Dictionary<Array<T[keyof T]>>;
    }
    interface ImpS {
        groupBy( iteratee?: ValueIteratee<string> ): Imp<Dictionary<string[]>>;
    }
    interface ImpL<T> {
        groupBy( iteratee?: ValueIteratee<T> ): Imp<Dictionary<T[]>>;
    }
    interface ImpO<T> {
        groupBy( iteratee?: ValueIteratee<T[keyof T]> ): Imp<Dictionary<Array<T[keyof T]>>>;
    }
    interface ImpU {
        groupBy( iteratee?: ValueIteratee<unknown> ): Imp<Dictionary<unknown[]>>;
    }
    interface ExpS {
        groupBy( iteratee?: ValueIteratee<string> ): Exp<Dictionary<string[]>>;
    }
    interface ExpL<T> {
        groupBy( iteratee?: ValueIteratee<T> ): Exp<Dictionary<T[]>>;
    }
    interface ExpO<T> {
        groupBy( iteratee?: ValueIteratee<T[keyof T]> ): Exp<Dictionary<Array<T[keyof T]>>>;
    }
    interface ExpU {
        groupBy( iteratee?: ValueIteratee<unknown> ): Exp<Dictionary<unknown[]>>;
    }
    interface Stat {
        includes<T>( collection: Dictionary<T> | NumericDictionary<T> | null | undefined, target: T, fromIndex?: number ): boolean;
    }
    interface Imp<TValue> {
        includes( target: TValue, fromIndex?: number ): boolean;
    }
    interface Exp<TValue> {
        includes( target: TValue, fromIndex?: number ): Exp<boolean>;
    }
    interface Stat {
        invokeMap( collection: object | null | undefined, methodName: string, ...args: any[]): any[];
        invokeMap<TResult>( collection: object | null | undefined, method: (...args: any[]) => TResult, ...args: any[]): TResult[];
    }
    interface Imp<TValue> {
        invokeMap( methodName: string, ...args: any[]): ImpL<any>;
        invokeMap<TResult>( method: (...args: any[]) => TResult, ...args: any[]): ImpL<TResult>;
    }
    interface Exp<TValue> {
        invokeMap( methodName: string, ...args: any[]): ExpL<any>;
        invokeMap<TResult>( method: (...args: any[]) => TResult, ...args: any[]): ExpL<TResult>;
    }
    interface Stat {
        keyBy<T>( collection: List<T> | null | undefined, iteratee?: ValueIterateeCustom<T, PropertyName> ): Dictionary<T>;
        keyBy<T extends object>( collection: T | null | undefined, iteratee?: ValueIterateeCustom<T[keyof T], PropertyName> ): Dictionary<T[keyof T]>;
    }
    interface ImpS {
        keyBy( iteratee?: ValueIterateeCustom<string, PropertyName> ): Imp<Dictionary<string>>;
    }
    interface ImpL<T> {
        keyBy( iteratee?: ValueIterateeCustom<T, PropertyName> ): Imp<Dictionary<T>>;
    }
    interface ImpO<T> {
        keyBy( iteratee?: ValueIterateeCustom<T[keyof T], PropertyName> ): Imp<Dictionary<T[keyof T]>>;
    }
    interface ImpU {
        keyBy( iteratee?: ValueIterateeCustom<unknown, PropertyName> ): Imp<Dictionary<unknown>>;
    }
    interface ExpS {
        keyBy( iteratee?: ValueIterateeCustom<string, PropertyName> ): Exp<Dictionary<string>>;
    }
    interface ExpL<T> {
        keyBy( iteratee?: ValueIterateeCustom<T, PropertyName> ): Exp<Dictionary<T>>;
    }
    interface ExpO<T> {
        keyBy( iteratee?: ValueIterateeCustom<T[keyof T], PropertyName> ): Exp<Dictionary<T[keyof T]>>;
    }
    interface ExpU {
        keyBy( iteratee?: ValueIterateeCustom<unknown, PropertyName> ): Exp<Dictionary<unknown>>;
    }
    interface Stat {
        map<T, TResult>( collection: T[] | null | undefined, iteratee: ArrayIterator<T, TResult> ): TResult[];
        map<T, TResult>( collection: List<T> | null | undefined, iteratee: ListIterator<T, TResult> ): TResult[];
        map<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined): T[];
        map<T extends object, TResult>( collection: T | null | undefined, iteratee: ObjectIterator<T, TResult> ): TResult[];
        map<T, K extends keyof T>( collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: K ): Array<T[K]>;
        map<T>( collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: string ): any[];
        map<T>( collection: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee?: object ): boolean[];
    }

    // TODO: Remember to replace Imp<*[]> with ImpL<*>
    interface ImpS {
        map<TResult>(iteratee: StringIterator<TResult>): ImpL<TResult>;
        map(): ImpL<string>;
    }
    interface ImpL<T> {
        map<TResult>(iteratee: ListIterator<T, TResult> | PropertyName): ImpL<TResult>;
        map(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        map(): ImpL<T>;
    }
    interface ImpO<T> {
        map<TResult>(iteratee: ObjectIterator<T, TResult> | PropertyName): ImpL<TResult>;
        map(iteratee: [PropertyName, any] | object): ImpL<boolean>;
        map(): ImpL<T[keyof T]>;
    }
    interface ImpU {
        map( iteratee: ObjectIterator<unknown, PropertyName> ): ImpL<unknown>;
        map( iteratee?: string): ImpL<any>;
        map( iteratee?: object): ImpL<boolean>;
        map(): ImpL<unknown>;
    }
    interface ExpS {
        map<TResult>(iteratee: StringIterator<TResult>): ExpL<TResult>;
        map(): ExpL<string>;
    }
    interface ExpL<T> {
        map<TResult>(iteratee: ListIterator<T, TResult> | PropertyName): ExpL<TResult>;
        map(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        map(): ExpL<T>;
    }
    interface ExpO<T> {
        map<TResult>(iteratee: ObjectIterator<T, TResult> | PropertyName): ExpL<TResult>;
        map(iteratee: [PropertyName, any] | object): ExpL<boolean>;
        map(): ExpL<T[keyof T]>;
    }
    interface ExpU {
        map( iteratee: ObjectIterator<unknown, PropertyName> ): ExpL<unknown>;
        map( iteratee?: string): ExpL<any>;
        map( iteratee?: object): ExpL<boolean>;
        map(): ExpL<unknown>;
    }
    interface Stat {
        orderBy<T>( collection: List<T> | null | undefined, iteratees?: Many<ListIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc"> ): T[];
        orderBy<T>( collection: List<T> | null | undefined, iteratees?: Many<ListIteratee<T>>, orders?: Many<boolean|"asc"|"desc"> ): T[];
        orderBy<T extends object>( collection: T | null | undefined, iteratees?: Many<ObjectIterator<T, NotVoid>>, orders?: Many<boolean|"asc"|"desc"> ): Array<T[keyof T]>;
        orderBy<T extends object>( collection: T | null | undefined, iteratees?: Many<ObjectIteratee<T>>, orders?: Many<boolean|"asc"|"desc"> ): Array<T[keyof T]>;
    }
    interface ImpL<T> {
        orderBy( iteratees?: Many<ListIteratee<T>>, orders?: Many<boolean|"asc"|"desc"> ): ImpL<T>;
    }
    interface ImpO<T> {
        orderBy( iteratees?: Many<ObjectIteratee<T>>, orders?: Many<boolean|"asc"|"desc"> ): Imp<Array<T[keyof T]>>;
    }
    interface ExpL<T> {
        orderBy( iteratees?: Many<ListIteratee<T>>, orders?: Many<boolean|"asc"|"desc"> ): ExpL<T>;
    }
    interface ExpO<T> {
        orderBy( iteratees?: Many<ObjectIteratee<T>>, orders?: Many<boolean|"asc"|"desc"> ): Exp<Array<T[keyof T]>>;
    }
    interface Stat {
        partition<T>( collection: List<T> | null | undefined, callback: ValueIteratee<T> ): [T[], T[]];
        partition<T extends object>( collection: T | null | undefined, callback: ValueIteratee<T[keyof T]> ): [Array<T[keyof T]>, Array<T[keyof T]>];
    }
    interface ImpS {
        partition(callback: StringIterator<NotVoid> ): Imp<[string, string]>;
    }
    interface ImpL<T> {
        partition( callback: ValueIteratee<T> ): Imp<[T[], T[]]>;
    }
    interface ImpO<T> {
        partition( callback: ValueIteratee<T[keyof T]> ): Imp<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }
    interface ExpS {
        partition(callback: StringIterator<NotVoid> ): Exp<[string, string]>;
    }
    interface ExpL<T> {
        partition( callback: ValueIteratee<T> ): Exp<[T[], T[]]>;
    }
    interface ExpO<T> {
        partition( callback: ValueIteratee<T[keyof T]> ): Exp<[Array<T[keyof T]>, Array<T[keyof T]>]>;
    }
    interface Stat {
        reduce<T, TResult>( collection: T[] | null | undefined, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult ): TResult;
        reduce<T, TResult>( collection: List<T> | null | undefined, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult ): TResult;
        reduce<T extends object, TResult>( collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult ): TResult;
        reduce<T>( collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]> ): T | undefined;
        reduce<T>( collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>> ): T | undefined;
        reduce<T extends object>( collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], T[keyof T], T> ): T[keyof T] | undefined;
    }
    interface Imp<TValue> {
        reduce<T, TResult>( this: Imp<T[] | null | undefined>, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult ): TResult;
        reduce<T, TResult>( this: Imp<List<T> | null | undefined>, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult ): TResult;
        reduce<T extends object, TResult>( this: Imp<T | null | undefined>, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult ): TResult;
        reduce<T>( this: Imp<T[] | null | undefined>, callback: MemoListIterator<T, T, T[]> ): T | undefined;
        reduce<T>( this: Imp<List<T> | null | undefined>, callback: MemoListIterator<T, T, List<T>> ): T | undefined;
        reduce<T extends object>( this: Imp<T | null | undefined>, callback: MemoObjectIterator<T[keyof T], T[keyof T], T> ): T[keyof T] | undefined;
    }
    interface Exp<TValue> {
        reduce<T, TResult>( this: Exp<T[] | null | undefined>, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult ): Exp<TResult>;
        reduce<T, TResult>( this: Exp<List<T> | null | undefined>, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult ): Exp<TResult>;
        reduce<T extends object, TResult>( this: Exp<T | null | undefined>, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult ): Exp<TResult>;
        reduce<T>( this: Exp<T[] | null | undefined>, callback: MemoListIterator<T, T, T[]> ): Exp<T | undefined>;
        reduce<T>( this: Exp<List<T> | null | undefined>, callback: MemoListIterator<T, T, List<T>> ): Exp<T | undefined>;
        reduce<T extends object>( this: Exp<T | null | undefined>, callback: MemoObjectIterator<T[keyof T], T[keyof T], T> ): Exp<T[keyof T] | undefined>;
    }
    interface Stat {
        reduceRight<T, TResult>( collection: T[] | null | undefined, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult ): TResult;
        reduceRight<T, TResult>( collection: List<T> | null | undefined, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult ): TResult;
        reduceRight<T extends object, TResult>( collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult ): TResult;
        reduceRight<T>( collection: T[] | null | undefined, callback: MemoListIterator<T, T, T[]> ): T | undefined;
        reduceRight<T>( collection: List<T> | null | undefined, callback: MemoListIterator<T, T, List<T>> ): T | undefined;
        reduceRight<T extends object>( collection: T | null | undefined, callback: MemoObjectIterator<T[keyof T], T[keyof T], T> ): T[keyof T] | undefined;
    }
    interface Imp<TValue> {
        reduceRight<T, TResult>( this: Imp<T[] | null | undefined>, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult ): TResult;
        reduceRight<T, TResult>( this: Imp<List<T> | null | undefined>, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult ): TResult;
        reduceRight<T extends object, TResult>( this: Imp<T | null | undefined>, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult ): TResult;
        reduceRight<T>( this: Imp<T[] | null | undefined>, callback: MemoListIterator<T, T, T[]> ): T | undefined;
        reduceRight<T>( this: Imp<List<T> | null | undefined>, callback: MemoListIterator<T, T, List<T>> ): T | undefined;
        reduceRight<T extends object>( this: Imp<T | null | undefined>, callback: MemoObjectIterator<T[keyof T], T[keyof T], T> ): T[keyof T] | undefined;
    }
    interface Exp<TValue> {
        reduceRight<T, TResult>( this: Exp<T[] | null | undefined>, callback: MemoListIterator<T, TResult, T[]>, accumulator: TResult ): Exp<TResult>;
        reduceRight<T, TResult>( this: Exp<List<T> | null | undefined>, callback: MemoListIterator<T, TResult, List<T>>, accumulator: TResult ): Exp<TResult>;
        reduceRight<T extends object, TResult>( this: Exp<T | null | undefined>, callback: MemoObjectIterator<T[keyof T], TResult, T>, accumulator: TResult ): Exp<TResult>;
        reduceRight<T>( this: Exp<T[] | null | undefined>, callback: MemoListIterator<T, T, T[]> ): Exp<T | undefined>;
        reduceRight<T>( this: Exp<List<T> | null | undefined>, callback: MemoListIterator<T, T, List<T>> ): Exp<T | undefined>;
        reduceRight<T extends object>( this: Exp<T | null | undefined>, callback: MemoObjectIterator<T[keyof T], T[keyof T], T> ): Exp<T[keyof T] | undefined>;
    }
    interface Stat {
        reject( collection: string | null | undefined, predicate?: StringIterator<boolean> ): string[];
        reject<T>( collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean> ): T[];
        reject<T extends object>( collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean> ): Array<T[keyof T]>;
    }
    interface Imp<TValue> {
        reject( this: Imp<string | null | undefined>, predicate?: StringIterator<boolean> ): Imp<string[]>;
        reject<T>( this: Imp<List<T> | null | undefined>, predicate?: ListIterateeCustom<T, boolean> ): Imp<T[]>;
        reject<T extends object>( this: Imp<T | null | undefined>, predicate?: ObjectIterateeCustom<T, boolean> ): Imp<Array<T[keyof T]>>;
    }
    interface Exp<TValue> {
        reject( this: Exp<string | null | undefined>, predicate?: StringIterator<boolean> ): Exp<string[]>;
        reject<T>( this: Exp<List<T> | null | undefined>, predicate?: ListIterateeCustom<T, boolean> ): Exp<T[]>;
        reject<T extends object>( this: Exp<T | null | undefined>, predicate?: ObjectIterateeCustom<T, boolean> ): Exp<Array<T[keyof T]>>;
    }
    interface Stat {
        sample<T>( collection: Dictionary<T> | NumericDictionary<T> | null | undefined ): T | undefined;
        sample<T extends object>( collection: T | null | undefined ): T[keyof T] | undefined;
    }
    interface Imp<TValue> {
        sample<T>( this: Imp<Dictionary<T> | NumericDictionary<T> | null | undefined> ): T | undefined;
        sample<T extends object>( this: Imp<T | null | undefined> ): T[keyof T] | undefined;
    }
    interface Exp<TValue> {
        sample<T>( this: Exp<Dictionary<T> | NumericDictionary<T> | null | undefined> ): Exp<T | undefined>;
        sample<T extends object>( this: Exp<T | null | undefined> ): Exp<T[keyof T] | undefined>;
    }
    interface Stat {
        sampleSize<T>( collection: Dictionary<T> | NumericDictionary<T> | null | undefined, n?: number ): T[];
        sampleSize<T extends object>( collection: T | null | undefined, n?: number ): Array<T[keyof T]>;
    }
    interface Imp<TValue> {
        sampleSize<T>( this: Imp<Dictionary<T> | NumericDictionary<T> | null | undefined>, n?: number ): Imp<T[]>;
        sampleSize<T extends object>( this: Imp<T | null | undefined>, n?: number ): Imp<Array<T[keyof T]>>;
    }
    interface Exp<TValue> {
        sampleSize<T>(this: Exp<Dictionary<T> | NumericDictionary<T> | null | undefined>, n?: number): Exp<T[]>;
        sampleSize<T extends object>(this: Exp<T | null | undefined>, n?: number): Exp<Array<T[keyof T]>>;
    }
    interface Stat {
        shuffle<T>(collection: List<T> | null | undefined): T[];
        shuffle<T extends object>(collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface Imp<TValue> {
        shuffle<T>(this: Imp<List<T> | null | undefined>): Imp<T[]>;
        shuffle<T extends object>(this: Imp<T | null | undefined>): Imp<Array<T[keyof T]>>;
    }
    interface Exp<TValue> {
        shuffle<T>(this: Exp<List<T> | null | undefined>): Exp<T[]>;
        shuffle<T extends object>(this: Exp<T | null | undefined>): Exp<Array<T[keyof T]>>;
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
        some<T>( collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean> ): boolean;
        some<T extends object>( collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean> ): boolean;
    }
    interface Imp<TValue> {
        some<T>( this: Imp<List<T> | null | undefined>, predicate?: ListIterateeCustom<T, boolean> ): boolean;
        some<T extends object>( this: Imp<T | null | undefined>, predicate?: ObjectIterateeCustom<T, boolean> ): boolean;
    }
    interface Exp<TValue> {
        some<T>( this: Exp<List<T> | null | undefined>, predicate?: ListIterateeCustom<T, boolean> ): Exp<boolean>;
        some<T extends object>( this: Exp<T | null | undefined>, predicate?: ObjectIterateeCustom<T, boolean> ): Exp<boolean>;
    }
    interface Stat {
        sortBy<T>( collection: List<T> | null | undefined, ...iteratees: Array<Many<ListIteratee<T>>> ): T[];
        sortBy<T extends object>( collection: T | null | undefined, ...iteratees: Array<Many<ObjectIteratee<T>>> ): Array<T[keyof T]>;
    }
    interface Imp<TValue> {
        sortBy<T>( this: Imp<List<T> | null | undefined>, ...iteratees: Array<Many<ListIteratee<T>>> ): Imp<T[]>;
        sortBy<T extends object>( this: Imp<T | null | undefined>, ...iteratees: Array<Many<ObjectIteratee<T>>> ): Imp<Array<T[keyof T]>>;
    }
    interface Exp<TValue> {
        sortBy<T>(this: Exp<List<T> | null | undefined>, ...iteratees: Array<Many<ListIteratee<T>>>): Exp<T[]>;
        sortBy<T extends object>(this: Exp<T | null | undefined>, ...iteratees: Array<Many<ObjectIteratee<T>>>): Exp<Array<T[keyof T]>>;
    }
}

import _ = require("../index");
declare module "../index" {
    interface Stat {
        assign<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        assign<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        assign<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        assign<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        assign<TObject>(object: TObject): TObject;
        assign(object: any, ...otherArgs: any[]): any;
    }
    interface Imp<TValue> {
        assign<TSource>(source: TSource): Imp<TValue & TSource>;
        assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): Imp<TValue & TSource1 & TSource2>;
        assign<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Imp<TValue & TSource1 & TSource2 & TSource3>;
        assign<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assign(): Imp<TValue>;
        assign(...otherArgs: any[]): Imp<any>;
    }
    interface Exp<TValue> {
        assign<TSource>(source: TSource): Exp<TValue & TSource>;
        assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): Exp<TValue & TSource1 & TSource2>;
        assign<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Exp<TValue & TSource1 & TSource2 & TSource3>;
        assign<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assign(): Exp<TValue>;
        assign(...otherArgs: any[]): Exp<any>;
    }
    interface Stat {
        assignIn<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        assignIn<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        assignIn<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        assignIn<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        assignIn<TObject>(object: TObject): TObject;
        assignIn<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Imp<TValue> {
        assignIn<TSource>(source: TSource): Imp<TValue & TSource>;
        assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): Imp<TValue & TSource1 & TSource2>;
        assignIn<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Imp<TValue & TSource1 & TSource2 & TSource3>;
        assignIn<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignIn(): Imp<TValue>;
        assignIn<TResult>(...otherArgs: any[]): Imp<TResult>;
    }
    interface Exp<TValue> {
        assignIn<TSource>(source: TSource): Exp<TValue & TSource>;
        assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): Exp<TValue & TSource1 & TSource2>;
        assignIn<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Exp<TValue & TSource1 & TSource2 & TSource3>;
        assignIn<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignIn(): Exp<TValue>;
        assignIn(...otherArgs: any[]): Exp<any>;
    }
    type AssignCustomizer = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;
    interface Stat {
        assignInWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        assignInWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        assignInWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        assignInWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        assignInWith<TObject>(object: TObject): TObject;
        assignInWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Imp<TValue> {
        assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): Imp<TValue & TSource>;
        assignInWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Imp<TValue & TSource1 & TSource2>;
        assignInWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Imp<TValue & TSource1 & TSource2 & TSource3>;
        assignInWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignInWith(): Imp<TValue>;
        assignInWith<TResult>(...otherArgs: any[]): Imp<TResult>;
    }
    interface Exp<TValue> {
        assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): Exp<TValue & TSource>;
        assignInWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Exp<TValue & TSource1 & TSource2>;
        assignInWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Exp<TValue & TSource1 & TSource2 & TSource3>;
        assignInWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignInWith(): Exp<TValue>;
        assignInWith(...otherArgs: any[]): Exp<any>;
    }
    interface Stat {
        assignWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        assignWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        assignWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        assignWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        assignWith<TObject>(object: TObject): TObject;
        assignWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Imp<TValue> {
        assignWith<TSource>(source: TSource, customizer: AssignCustomizer): Imp<TValue & TSource>;
        assignWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Imp<TValue & TSource1 & TSource2>;
        assignWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Imp<TValue & TSource1 & TSource2 & TSource3>;
        assignWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignWith(): Imp<TValue>;
        assignWith<TResult>(...otherArgs: any[]): Imp<TResult>;
    }
    interface Exp<TValue> {
        assignWith<TSource>(source: TSource, customizer: AssignCustomizer): Exp<TValue & TSource>;
        assignWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Exp<TValue & TSource1 & TSource2>;
        assignWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Exp<TValue & TSource1 & TSource2 & TSource3>;
        assignWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        assignWith(): Exp<TValue>;
        assignWith(...otherArgs: any[]): Exp<any>;
    }
    interface Stat {
        at<T>(object:  Dictionary<T> | NumericDictionary<T> | null | undefined, ...props: PropertyPath[]): T[];
        at<T extends object>(object: T | null | undefined, ...props: Array<Many<keyof T>>): Array<T[keyof T]>;
    }
    interface ImpO<T> {
        at(...props: Array<Many<keyof T>>): ImpL<T[keyof T]>;
    }
    interface ImpL<T> {
        at(...props: PropertyPath[]): ImpL<T>;
    }
    interface ExpO<T> {
        at(...props: Array<Many<keyof T>>): ExpL<T[keyof T]>;
    }
    interface ExpL<T> {
        at(...props: PropertyPath[]): ExpL<T>;
    }
    interface Stat {
        create<T extends object, U extends object>(prototype: T, properties?: U): T & U;
    }
    interface Imp<TValue> {
        create<U extends object>(properties?: U): Imp<TValue & U>;
    }
    interface Exp<TValue> {
        create<U extends object>(properties?: U): Exp<TValue & U>;
    }
    interface Stat {
        defaults<TObject, TSource>(object: TObject, source: TSource): TSource & TObject;
        defaults<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TSource2 & TSource1 & TObject;
        defaults<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TSource3 & TSource2 & TSource1 & TObject;
        defaults<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TSource4 & TSource3 & TSource2 & TSource1 & TObject;
        defaults<TObject>(object: TObject): TObject;
        defaults(object: any, ...sources: any[]): any;
    }
    interface Imp<TValue> {
        defaults<TSource>(source: TSource): Imp<TSource & TValue>;
        defaults<TSource1, TSource2>(source1: TSource1, source2: TSource2): Imp<TSource2 & TSource1 & TValue>;
        defaults<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Imp<TSource3 & TSource2 & TSource1 & TValue>;
        defaults<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Imp<TSource4 & TSource3 & TSource2 & TSource1 & TValue>;
        defaults(): Imp<TValue>;
        defaults(...sources: any[]): Imp<any>;
    }
    interface Exp<TValue> {
        defaults<TSource>(source: TSource): Exp<TSource & TValue>;
        defaults<TSource1, TSource2>(source1: TSource1, source2: TSource2): Exp<TSource2 & TSource1 & TValue>;
        defaults<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Exp<TSource3 & TSource2 & TSource1 & TValue>;
        defaults<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Exp<TSource4 & TSource3 & TSource2 & TSource1 & TValue>;
        defaults(): Exp<TValue>;
        defaults(...sources: any[]): Exp<any>;
    }
    interface Stat {
        defaultsDeep(object: any, ...sources: any[]): any;
    }
    interface Imp<TValue> {
        defaultsDeep(...sources: any[]): Imp<any>;
    }
    interface Exp<TValue> {
        defaultsDeep(...sources: any[]): Exp<any>;
    }
    interface Stat {
        entries<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        entries(object?: object): Array<[string, any]>;
    }
    interface Imp<TValue> {
        entries<T>(this: Imp<Dictionary<T> | NumericDictionary<T>>): Imp<Array<[string, T]>>;
        entries(): Imp<Array<[string, any]>>;
    }
    interface Exp<TValue> {
        entries<T>(this: Exp<Dictionary<T> | NumericDictionary<T>>): Exp<Array<[string, T]>>;
        entries(): Exp<Array<[string, any]>>;
    }
    interface Stat {
        entriesIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        entriesIn(object?: object): Array<[string, any]>;
    }
    interface Imp<TValue> {
        entriesIn<T>(this: Imp<Dictionary<T> | NumericDictionary<T>>): Imp<Array<[string, T]>>;
        entriesIn(): Imp<Array<[string, any]>>;
    }
    interface Exp<TValue> {
        entriesIn<T>(this: Exp<Dictionary<T> | NumericDictionary<T>>): Exp<Array<[string, T]>>;
        entriesIn(): Exp<Array<[string, any]>>;
    }
    interface Stat {
        extend<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        extend<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        extend<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        extend<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        extend<TObject>(object: TObject): TObject;
        extend<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Imp<TValue> {
        extend<TSource>(source: TSource): Imp<TValue & TSource>;
        extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): Imp<TValue & TSource1 & TSource2>;
        extend<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Imp<TValue & TSource1 & TSource2 & TSource3>;
        extend<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        extend(): Imp<TValue>;
        extend(...otherArgs: any[]): Imp<any>;
    }
    interface Exp<TValue> {
        extend<TSource>(source: TSource): Exp<TValue & TSource>;
        extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): Exp<TValue & TSource1 & TSource2>;
        extend<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Exp<TValue & TSource1 & TSource2 & TSource3>;
        extend<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        extend(): Exp<TValue>;
        extend(...otherArgs: any[]): Exp<any>;
    }
    interface Stat {
        extendWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        extendWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        extendWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        extendWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        extendWith<TObject>(object: TObject): TObject;
        extendWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Imp<TValue> {
        extendWith<TSource>(source: TSource, customizer: AssignCustomizer): Imp<TValue & TSource>;
        extendWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Imp<TValue & TSource1 & TSource2>;
        extendWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Imp<TValue & TSource1 & TSource2 & TSource3>;
        extendWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        extendWith(): Imp<TValue>;
        extendWith(...otherArgs: any[]): Imp<any>;
    }
    interface Exp<TValue> {
        extendWith<TSource>(source: TSource, customizer: AssignCustomizer): Exp<TValue & TSource>;
        extendWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Exp<TValue & TSource1 & TSource2>;
        extendWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Exp<TValue & TSource1 & TSource2 & TSource3>;
        extendWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        extendWith(): Exp<TValue>;
        extendWith(...otherArgs: any[]): Exp<any>;
    }
    interface Stat {
        findKey<T>(object: T | null | undefined, predicate?: ObjectIteratee<T>): string | undefined;
    }
    interface Imp<TValue> {
        findKey( predicate?: ObjectIteratee<TValue>): string | undefined;
    }
    interface Exp<TValue> {
        findKey( predicate?: ObjectIteratee<TValue>): Exp<string | undefined>;
    }
    interface Stat {
        findLastKey<T>(object: T | null | undefined, predicate?: ObjectIteratee<T>): string | undefined;
    }
    interface Imp<TValue> {
        findLastKey( predicate?: ObjectIteratee<TValue>): string | undefined;
    }
    interface Exp<TValue> {
        findLastKey( predicate?: ObjectIteratee<TValue>): Exp<string | undefined>;
    }
    interface Stat {
        forIn<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        forIn<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface Imp<TValue> {
        forIn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface Exp<TValue> {
        forIn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface Stat {
        forInRight<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        forInRight<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface Imp<TValue> {
        forInRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface Exp<TValue> {
        forInRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface Stat {
        forOwn<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        forOwn<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface Imp<TValue> {
        forOwn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface Exp<TValue> {
        forOwn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface Stat {
        forOwnRight<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        forOwnRight<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface Imp<TValue> {
        forOwnRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface Exp<TValue> {
        forOwnRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface Stat {
        functions(object: any): string[];
    }
    interface Imp<TValue> {
        functions(): Imp<string[]>;
    }
    interface Exp<TValue> {
        functions(): Exp<string[]>;
    }
    interface Stat {
        functionsIn<T extends {}>(object: any): string[];
    }
    interface Imp<TValue> {
        functionsIn(): Imp<string[]>;
    }
    interface Exp<TValue> {
        functionsIn(): Exp<string[]>;
    }
    interface Stat {
        get<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey];
        get<TObject extends object, TKey extends keyof TObject>(object: TObject | null | undefined, path: TKey | [TKey]): TObject[TKey] | undefined;
        get<TObject extends object, TKey extends keyof TObject, TDefault>(object: TObject | null | undefined, path: TKey | [TKey], defaultValue: TDefault): Exclude<TObject[TKey], undefined> | TDefault;
        get<T>(object: NumericDictionary<T>, path: number): T;
        get<T>(object: NumericDictionary<T> | null | undefined, path: number): T | undefined;
        get<T, TDefault>(object: NumericDictionary<T> | null | undefined, path: number, defaultValue: TDefault): T | TDefault;
        get<TDefault>(object: null | undefined, path: PropertyPath, defaultValue: TDefault): TDefault;
        get(object: null | undefined, path: PropertyPath): undefined;
        get(object: any, path: PropertyPath, defaultValue?: any): any;
    }
    interface Imp<TValue> {
        get<TKey extends keyof TValue>(path: TKey | [TKey]): TValue[TKey];
        get<TObject extends object, TKey extends keyof TObject>(this: Imp<TObject | null | undefined>, path: TKey | [TKey], ): TObject[TKey] | undefined;
        get<TObject extends object, TKey extends keyof TObject, TDefault>(this: Imp<TObject | null | undefined>, path: TKey | [TKey], defaultValue: TDefault): Exclude<TObject[TKey], undefined> | TDefault;
        get<T>(this: Imp<NumericDictionary<T>>, path: number): T;
        get<T>(this: Imp<NumericDictionary<T> | null | undefined>, path: number): T | undefined;
        get<T, TDefault>(this: Imp<NumericDictionary<T> | null | undefined>, path: number, defaultValue: TDefault): T | TDefault;
        get<TDefault>(this: Imp<null | undefined>, path: PropertyPath, defaultValue: TDefault): TDefault;
        get(this: Imp<null | undefined>, path: PropertyPath): undefined;
        get<TResult>(path: PropertyPath, defaultValue?: any): any;
    }
    interface Exp<TValue> {
        get<TKey extends keyof TValue>(path: TKey | [TKey]): Exp<TValue[TKey]>;
        get<TObject extends object, TKey extends keyof TObject>(this: Exp<TObject | null | undefined>, path: TKey | [TKey], ): Exp<TObject[TKey] | undefined>;
        get<TObject extends object, TKey extends keyof TObject, TDefault>(this: Exp<TObject | null | undefined>, path: TKey | [TKey], defaultValue: TDefault): Exp<Exclude<TObject[TKey], undefined> | TDefault>;
        get<T>(this: Exp<NumericDictionary<T>>, path: number): Exp<T>;
        get<T>(this: Exp<NumericDictionary<T> | null | undefined>, path: number): Exp<T | undefined>;
        get<T, TDefault>(this: Exp<NumericDictionary<T> | null | undefined>, path: number, defaultValue: TDefault): Exp<T | undefined>;
        get<TDefault>(this: Exp<null | undefined>, path: PropertyPath, defaultValue: TDefault): Exp<TDefault>;
        get(this: Exp<null | undefined>, path: PropertyPath): Exp<undefined>;
        get(path: PropertyPath, defaultValue?: any): Exp<any>;
    }
    interface Stat {
        has<T>(object: T, path: PropertyPath): boolean;
    }
    interface Imp<TValue> {
        has(path: PropertyPath): boolean;
    }
    interface Exp<TValue> {
        has(path: PropertyPath): Exp<boolean>;
    }
    interface Stat {
        hasIn<T>(object: T, path: PropertyPath): boolean;
    }
    interface Imp<TValue> {
        hasIn(path: PropertyPath): boolean;
    }
    interface Exp<TValue> {
        hasIn(path: PropertyPath): Exp<boolean>;
    }
    interface Stat {
        invert(object: object): Dictionary<string>;
    }
    interface Imp<TValue> {
        invert(): Imp<Dictionary<string>>;
    }
    interface Exp<TValue> {
        invert(): Exp<Dictionary<string>>;
    }
    interface Stat {
        invertBy<T>(object:  Dictionary<T> | NumericDictionary<T> | null | undefined, interatee?: ValueIteratee<T>): Dictionary<string[]>;
        invertBy<T extends object>(object: T | null | undefined, interatee?: ValueIteratee<T[keyof T]>): Dictionary<string[]>;
    }
    interface ImpS {
        invertBy(iteratee?: ValueIteratee<string>): Imp<Dictionary<string[]>>;
    }
    interface ImpL<T> {
        invertBy(iteratee?: ValueIteratee<T>): Imp<Dictionary<string[]>>;
    }
    interface ImpO<T> {
        invertBy(iteratee?: ValueIteratee<T[keyof T]>): Imp<Dictionary<string[]>>;
    }
    interface ExpS {
        invertBy(iteratee?: ValueIteratee<string>): Exp<Dictionary<string[]>>;
    }
    interface ExpL<T> {
        invertBy(iteratee?: ValueIteratee<T>): Exp<Dictionary<string[]>>;
    }
    interface ExpO<T> {
        invertBy(iteratee?: ValueIteratee<T[keyof T]>): Exp<Dictionary<string[]>>;
    }
    interface Stat {
        invoke(object: any, path: PropertyPath, ...args: any[]): any;
    }
    interface Imp<TValue> {
        invoke(path: PropertyPath, ...args: any[]): any;
    }
    interface Exp<TValue> {
        invoke(path: PropertyPath, ...args: any[]): Exp<any>;
    }
    interface Stat {
        keys(object?: any): string[];
    }
    interface Imp<TValue> {
        keys(): Imp<string[]>;
    }
    interface Exp<TValue> {
        keys(): Exp<string[]>;
    }
    interface Stat {
        keysIn(object?: any): string[];
    }
    interface Imp<TValue> {
        keysIn(): Imp<string[]>;
    }
    interface Exp<TValue> {
        keysIn(): Exp<string[]>;
    }
    interface Stat {
        mapKeys<T>(object: List<T> | null | undefined, iteratee?: ListIteratee<T>): Dictionary<T>;
        mapKeys<T extends object>(object: T | null | undefined, iteratee?: ObjectIteratee<T>): Dictionary<T[keyof T]>;
    }
    interface ImpL<T> {
        mapKeys<T>(iteratee?: ListIteratee<T>): Imp<Dictionary<T>>;
    }
    interface ImpO<T> {
        mapKeys(iteratee?: ObjectIteratee<T>): Imp<Dictionary<T[keyof T]>>;
    }
    interface ExpL<T> {
        mapKeys<T>(iteratee?: ListIteratee<T>): Exp<Dictionary<T>>;
    }
    interface ExpO<T> {
        mapKeys(iteratee?: ObjectIteratee<T>): Imp<Dictionary<T[keyof T]>>;
    }
    interface Stat {
        mapValues<TResult>(obj: string | null | undefined, callback: StringIterator<TResult>): NumericDictionary<TResult>;
        mapValues<T, TResult>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, callback: DictionaryIterator<T, TResult>): Dictionary<TResult>;
        mapValues<T extends object, TResult>(obj: T | null | undefined, callback: ObjectIterator<T, TResult>): { [P in keyof T]: TResult };
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: object): Dictionary<boolean>;
        mapValues<T extends object>(obj: T | null | undefined, iteratee: object): { [P in keyof T]: boolean };
        mapValues<T, TKey extends keyof T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: TKey): Dictionary<T[TKey]>;
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: string): Dictionary<any>;
        mapValues<T extends object>(obj: T | null | undefined, iteratee: string): { [P in keyof T]: any };
        mapValues(obj: string | null | undefined): NumericDictionary<string>;
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined): Dictionary<T>;
        mapValues<T extends object>(obj: T): T;
        mapValues<T extends object>(obj: T | null | undefined): PartialObject<T>;
    }
    interface ImpS {
        mapValues<TResult>(callback: StringIterator<TResult>): Imp<NumericDictionary<TResult>>;
        mapValues(): Imp<NumericDictionary<string>>;
    }
    interface ImpL<T> {
        mapValues<TResult>( callback: DictionaryIterator<T, TResult>): Imp<Dictionary<TResult>>;
        mapValues<TKey extends keyof T>(iteratee: TKey): Imp<Dictionary<T[TKey]>>;
        mapValues( iteratee: object): Imp<Dictionary<boolean>>;
        mapValues(iteratee: string): Imp<Dictionary<any>>;
        mapValues(): Imp<Dictionary<T>>;
    }
    interface ImpO<T> {
        mapValues<TResult>(callback: ObjectIterator<T, TResult>): Imp<{ [P in keyof T]: TResult }>;
        mapValues(iteratee: object): Imp<{ [P in keyof T]: boolean }>;
        mapValues(iteratee: string): Imp<{ [P in keyof T]: any }>;
        mapValues(): ImpO<T>;
    }
    interface ExpS {
        mapValues<TResult>(callback: StringIterator<TResult>): Exp<NumericDictionary<TResult>>;
        mapValues(): Exp<NumericDictionary<string>>;
    }
    interface ExpL<T> {
        mapValues<TResult>( callback: DictionaryIterator<T, TResult>): Exp<Dictionary<TResult>>;
        mapValues<TKey extends keyof T>(iteratee: TKey): Exp<Dictionary<T[TKey]>>;
        mapValues( iteratee: object): Exp<Dictionary<boolean>>;
        mapValues(iteratee: string): Exp<Dictionary<any>>;
        mapValues(): Exp<Dictionary<T>>;
    }
    interface ExpO<T> {
        mapValues<TResult>(callback: ObjectIterator<T, TResult>): Exp<{ [P in keyof T]: TResult }>;
        mapValues(iteratee: object): Exp<{ [P in keyof T]: boolean }>;
        mapValues(iteratee: string): Exp<{ [P in keyof T]: any }>;
        mapValues(): ImpO<T>;
    }
    interface Stat {
        merge<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        merge<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        merge<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        merge<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        merge(object: any, ...otherArgs: any[]): any;
    }
    interface Imp<TValue> {
        merge<TSource>(source: TSource): Imp<TValue & TSource>;
        merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): Imp<TValue & TSource1 & TSource2>;
        merge<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Imp<TValue & TSource1 & TSource2 & TSource3>;
        merge<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        merge(...otherArgs: any[]): Imp<any>;
    }
    interface Exp<TValue> {
        merge<TSource>(source: TSource): Exp<TValue & TSource>;
        merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): Exp<TValue & TSource1 & TSource2>;
        merge<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Exp<TValue & TSource1 & TSource2 & TSource3>;
        merge<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        merge(...otherArgs: any[]): Exp<any>;
    }
    type MergeWithCustomizer = { bivariantHack(value: any, srcValue: any, key: string, object: any, source: any): any; }["bivariantHack"];
    interface Stat {
        mergeWith<TObject, TSource>(object: TObject, source: TSource, customizer: MergeWithCustomizer): TObject & TSource;
        mergeWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2;
        mergeWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2 & TSource3;
        mergeWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        mergeWith(object: any, ...otherArgs: any[]): any;
    }
    interface Imp<TValue> {
        mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): Imp<TValue & TSource>;
        mergeWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): Imp<TValue & TSource1 & TSource2>;
        mergeWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): Imp<TValue & TSource1 & TSource2 & TSource3>;
        mergeWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): Imp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        mergeWith(...otherArgs: any[]): Imp<any>;
    }
    interface Exp<TValue> {
        mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): Exp<TValue & TSource>;
        mergeWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): Exp<TValue & TSource1 & TSource2>;
        mergeWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): Exp<TValue & TSource1 & TSource2 & TSource3>;
        mergeWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): Exp<TValue & TSource1 & TSource2 & TSource3 & TSource4>;
        mergeWith(...otherArgs: any[]): Exp<any>;
    }
    interface Stat {
        omit<T extends AnyKindOfDictionary>(object: T | null | undefined, ...paths: Array<Many<PropertyName>>): T;
        omit<T extends object, K extends keyof T>(object: T | null | undefined, ...paths: Array<Many<K>>): Omit<T, K>;
        omit<T extends object>(object: T | null | undefined, ...paths: Array<Many<PropertyName>>): PartialObject<T>;
    }
    interface ImpL<T> {
        omit( ...paths: Array<Many<PropertyName>>): ImpL<T>;
    }
    interface ImpO<T> {
        omit<K extends keyof T>(...paths: Array<Many<K>>): Imp<Omit<T, K>>;
        omit(...paths: Array<Many<PropertyName>>): Imp<PartialObject<T>>;
    }
    interface ExpL<T> {
        omit( ...paths: Array<Many<PropertyName>>): ExpL<T>;
    }
    interface ExpO<T> {
        omit<K extends keyof T>(...paths: Array<Many<K>>): Exp<Omit<T, K>>;
        omit(...paths: Array<Many<PropertyName>>): Exp<PartialObject<T>>;
    }
    interface Stat {
        omitBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
        omitBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
        omitBy<T extends object>(object: T | null | undefined, predicate: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;
    }
    interface ImpL<T> {
        omitBy(this: Imp<Dictionary<T> | null | undefined>, predicate?: ValueKeyIteratee<T>): Imp<Dictionary<T>>;
    }
    interface ImpO<T> {
        omitBy(predicate: ValueKeyIteratee<T[keyof T]>): ImpO<PartialObject<T>>;
    }
    interface ExpL<T> {
        omitBy(this: Exp<Dictionary<T> | null | undefined>, predicate?: ValueKeyIteratee<T>): Exp<Dictionary<T>>;
    }
    interface ExpO<T> {
        omitBy(predicate: ValueKeyIteratee<T[keyof T]>): ExpO<PartialObject<T>>;
    }
    interface Stat {
        pick<T extends object, U extends keyof T>(object: T, ...props: Array<Many<U>>): Pick<T, U>;
        pick<T>(object: T | null | undefined, ...props: PropertyPath[]): PartialDeep<T>;
    }
    interface ImpO<T> {
        pick<U extends keyof T>(...props: Array<Many<U>>): ImpO<Pick<T, U>>;
        pick( ...props: PropertyPath[]): ImpO<PartialObject<T>>;
    }
    interface ExpO<T> {
        pick<U extends keyof T>(...props: Array<Many<U>>): ExpO<Pick<T, U>>;
        pick( ...props: PropertyPath[]): ExpO<PartialObject<T>>;
    }
    interface Stat {
        pickBy<T, S extends T>(object: Dictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): Dictionary<S>;
        pickBy<T, S extends T>(object: NumericDictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): NumericDictionary<S>;
        pickBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
        pickBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
        pickBy<T extends object>(object: T | null | undefined, predicate?: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;
    }
    interface ImpL<T> {
        pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): Imp<Dictionary<S>>;
        pickBy(predicate?: ValueKeyIteratee<T>): Imp<Dictionary<T>>;
    }
    interface ImpO<T> {
        pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): ImpO<PartialObject<T>>;
    }
    interface ExpL<T> {
        pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): Exp<Dictionary<S>>;
        pickBy(predicate?: ValueKeyIteratee<T>): Exp<Dictionary<T>>;
    }
    interface ExpO<T> {
        pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): ExpO<PartialObject<T>>;
    }
    interface Stat {
        result<TResult>(object: any, path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): TResult;
    }
    interface Imp<TValue> {
        result<TResult>(path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): TResult;
    }
    interface Exp<TValue> {
        result<TResult>(path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): Exp<TResult>;
    }
    interface Stat {
        set<T extends object>(object: T, path: PropertyPath, value: any): T;
        set<TResult>(object: object, path: PropertyPath, value: any): TResult;
    }
    interface Imp<TValue> {
        set(path: PropertyPath, value: any): this;
        set<TResult>(path: PropertyPath, value: any): Imp<TResult>;
    }
    interface Exp<TValue> {
        set(path: PropertyPath, value: any): this;
        set<TResult>(path: PropertyPath, value: any): Exp<TResult>;
    }
    type SetWithCustomizer<T> = (nsValue: any, key: string, nsObject: T) => any;
    interface Stat {
        setWith<T extends object>(object: T, path: PropertyPath, value: any, customizer?: SetWithCustomizer<T>): T;
        setWith<T extends object, TResult>(object: T, path: PropertyPath, value: any, customizer?: SetWithCustomizer<T>): TResult;
    }
    // interface Imp<TValue> {
    //     setWith(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): this;
    //     setWith<TResult>(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): Imp<TResult>;
    // }
    // interface Exp<TValue> {
    //     setWith(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): this;
    //     setWith<TResult>(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): Exp<TResult>;
    // }
    interface Stat {
        toPairs<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        toPairs(object?: object): Array<[string, any]>;
    }
    interface Imp<TValue> {
        toPairs<T>(this: Imp<Dictionary<T> | NumericDictionary<T>>): Imp<Array<[string, T]>>;
        toPairs(): Imp<Array<[string, any]>>;
    }
    interface Exp<TValue> {
        toPairs<T>(this: Exp<Dictionary<T> | NumericDictionary<T>>): Exp<Array<[string, T]>>;
        toPairs(): Exp<Array<[string, any]>>;
    }
    interface Stat {
        toPairsIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        toPairsIn(object?: object): Array<[string, any]>;
    }
    interface Imp<TValue> {
        toPairsIn<T>(this: Imp<Dictionary<T> | NumericDictionary<T>>): Imp<Array<[string, T]>>;
        toPairsIn(): Imp<Array<[string, any]>>;
    }
    interface Exp<TValue> {
        toPairsIn<T>(this: Exp<Dictionary<T> | NumericDictionary<T>>): Exp<Array<[string, T]>>;
        toPairsIn(): Exp<Array<[string, any]>>;
    }
    interface Stat {
        transform<T, TResult>(object: T[], iteratee: MemoVoidArrayIterator<T, TResult[]>, accumulator?: TResult[]): TResult[];
        transform<T, TResult>(object: T[], iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>, accumulator: Dictionary<TResult>): Dictionary<TResult>;
        transform<T, TResult>(object: Dictionary<T>, iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>): Dictionary<TResult>;
        transform<T, TResult>(object: Dictionary<T>, iteratee: MemoVoidDictionaryIterator<T, TResult[]>, accumulator: TResult[]): TResult[];
        transform(object: any[], ): any[];
        transform(object: object, ): Dictionary<any>;
    }
    interface Imp<TValue> {
        transform<T, TResult>(this: Imp<T[]>, iteratee: MemoVoidArrayIterator<T, TResult[]>, accumulator?: TResult[]): Imp<TResult[]>;
        transform<T, TResult>(this: Imp<T[]>, iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>, accumulator: Dictionary<TResult>): Imp<Dictionary<TResult>>;
        transform<T, TResult>(this: Imp<Dictionary<T>>, iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>): Imp<Dictionary<TResult>>;
        transform<T, TResult>(this: Imp<Dictionary<T>>, iteratee: MemoVoidDictionaryIterator<T, TResult[]>, accumulator: TResult[]): Imp<TResult[]>;
        transform(this: Imp<any[]>, ): Imp<any[]>;
        transform(): Imp<Dictionary<any>>;
    }
    interface Exp<TValue> {
        transform<T, TResult>(this: Exp<T[]>, iteratee: MemoVoidArrayIterator<T, TResult[]>, accumulator?: TResult[]): Exp<TResult[]>;
        transform<T, TResult>(this: Exp<T[]>, iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>): Exp<Dictionary<TResult>>;
        transform<T, TResult>(this: Exp<Dictionary<T>>, iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>): Exp<Dictionary<TResult>>;
        transform<T, TResult>(this: Exp<Dictionary<T>>, iteratee: MemoVoidDictionaryIterator<T, TResult[]>, accumulator?: TResult[]): Exp<TResult[]>;
        transform(this: Exp<any[]>, ): Exp<any[]>;
        transform(): Exp<Dictionary<any>>;
    }
    interface Stat {
        unset(object: any, path: PropertyPath): boolean;
    }
    interface Imp<TValue> {
        unset(path: PropertyPath): Imp<boolean>;
    }
    interface Exp<TValue> {
        unset(path: PropertyPath): Exp<boolean>;
    }
    interface Stat {
        update(object: object, path: PropertyPath, updater: (value: any) => any): any;
    }
    interface Imp<TValue> {
        update(path: PropertyPath, updater: (value: any) => any): Imp<any>;
    }
    interface Exp<TValue> {
        update(path: PropertyPath, updater: (value: any) => any): Exp<any>;
    }
    interface Stat {
        updateWith<T extends object>(object: T, path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): T;
        updateWith<T extends object, TResult>(object: T, path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): TResult;
    }
    // interface Imp<TValue> {
    //     updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<TValue>): this;
    //     updateWith<TResult>(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<TValue>): Imp<TResult>;
    // }
    // interface Exp<TValue> {
    //     updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<TValue>): this;
    //     updateWith<TResult>(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<TValue>): Exp<TResult>;
    // }
    interface Stat {
        values<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[];
        values<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
        values(object: any): any[];
    }
    interface Imp<TValue> {
        values<T>(this: Imp<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): Imp<T[]>;
        values<T extends object>(this: Imp<T | null | undefined>): Imp<Array<T[keyof T]>>;
        values(): Imp<any[]>;
    }
    interface Exp<TValue> {
        values<T>(this: Exp<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): Exp<T[]>;
        values<T extends object>(this: Exp<T | null | undefined>): Exp<Array<T[keyof T]>>;
        values(): Exp<any[]>;
    }
    interface Stat {
        valuesIn<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[];
        valuesIn<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
    }
    interface Imp<TValue> {
        valuesIn<T>(this: Imp<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): Imp<T[]>;
        valuesIn<T extends object>(this: Imp<T | null | undefined>): Imp<Array<T[keyof T]>>;
    }
    interface Exp<TValue> {
        valuesIn<T>(this: Exp<Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined>): Exp<T[]>;
        valuesIn<T extends object>(this: Exp<T | null | undefined>): Exp<Array<T[keyof T]>>;
    }
}

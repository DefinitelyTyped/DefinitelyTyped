import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        assign<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        assign<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        assign<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        assign<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        assign<TObject>(object: TObject): TObject;
        assign(object: any, ...otherArgs: any[]): any;
    }
    interface Object<T> {
        assign<TSource>(source: TSource): Object<T & TSource>;
        assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        assign<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        assign<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assign(): Object<T>;
        assign(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        assign<TSource>(source: TSource): ObjectChain<T & TSource>;
        assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        assign<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        assign<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assign(): ObjectChain<T>;
        assign(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        assignIn<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        assignIn<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        assignIn<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        assignIn<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        assignIn<TObject>(object: TObject): TObject;
        assignIn<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        assignIn<TSource>(source: TSource): Object<T & TSource>;
        assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        assignIn<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        assignIn<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignIn(): Object<T>;
        assignIn<TResult>(...otherArgs: any[]): Object<TResult>;
    }
    interface ObjectChain<T> {
        assignIn<TSource>(source: TSource): ObjectChain<T & TSource>;
        assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        assignIn<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        assignIn<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignIn(): ObjectChain<T>;
        assignIn(...otherArgs: any[]): ObjectChain<any>;
    }
    type AssignCustomizer = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;
    interface LoDashStatic {
        assignInWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        assignInWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        assignInWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        assignInWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        assignInWith<TObject>(object: TObject): TObject;
        assignInWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>;
        assignInWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Object<T & TSource1 & TSource2>;
        assignInWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        assignInWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignInWith(): Object<T>;
        assignInWith<TResult>(...otherArgs: any[]): Object<TResult>;
    }
    interface ObjectChain<T> {
        assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>;
        assignInWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2>;
        assignInWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        assignInWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignInWith(): ObjectChain<T>;
        assignInWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        assignWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        assignWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        assignWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        assignWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        assignWith<TObject>(object: TObject): TObject;
        assignWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        assignWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>;
        assignWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Object<T & TSource1 & TSource2>;
        assignWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        assignWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignWith(): Object<T>;
        assignWith<TResult>(...otherArgs: any[]): Object<TResult>;
    }
    interface ObjectChain<T> {
        assignWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>;
        assignWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2>;
        assignWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        assignWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignWith(): ObjectChain<T>;
        assignWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        at<T>(object:  Dictionary<T> | NumericDictionary<T> | null | undefined, ...props: PropertyPath[]): T[];
        at<T extends object>(object: T | null | undefined, ...props: Array<Many<keyof T>>): Array<T[keyof T]>;
    }
    interface Object<T> {
        at(...props: Array<Many<keyof T>>): Collection<T[keyof T]>;
    }
    interface Collection<T> {
        at(...props: PropertyPath[]): Collection<T>;
    }
    interface ObjectChain<T> {
        at(...props: Array<Many<keyof T>>): CollectionChain<T[keyof T]>;
    }
    interface CollectionChain<T> {
        at(...props: PropertyPath[]): CollectionChain<T>;
    }
    interface LoDashStatic {
        create<T extends object, U extends object>(prototype: T, properties?: U): T & U;
    }
    interface Object<T> {
        create<U extends object>(properties?: U): Object<T & U>;
    }
    interface ObjectChain<T> {
        create<U extends object>(properties?: U): ObjectChain<T & U>;
    }
    interface LoDashStatic {
        defaults<TObject, TSource>(object: TObject, source: TSource): TSource & TObject;
        defaults<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TSource2 & TSource1 & TObject;
        defaults<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TSource3 & TSource2 & TSource1 & TObject;
        defaults<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TSource4 & TSource3 & TSource2 & TSource1 & TObject;
        defaults<TObject>(object: TObject): TObject;
        defaults(object: any, ...sources: any[]): any;
    }
    interface Object<T> {
        defaults<TSource>(source: TSource): Object<TSource & T>;
        defaults<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<TSource2 & TSource1 & T>;
        defaults<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<TSource3 & TSource2 & TSource1 & T>;
        defaults<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<TSource4 & TSource3 & TSource2 & TSource1 & T>;
        defaults(): Object<T>;
        defaults(...sources: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        defaults<TSource>(source: TSource): ObjectChain<TSource & T>;
        defaults<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<TSource2 & TSource1 & T>;
        defaults<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<TSource3 & TSource2 & TSource1 & T>;
        defaults<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<TSource4 & TSource3 & TSource2 & TSource1 & T>;
        defaults(): ObjectChain<T>;
        defaults(...sources: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        defaultsDeep(object: any, ...sources: any[]): any;
    }
    interface Object<T> {
        defaultsDeep(...sources: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        defaultsDeep(...sources: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        entries<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        entries(object?: object): Array<[string, any]>;
    }
    interface Object<T> {
        entries(): Collection<[string, T[keyof T]]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        entries(): Collection<[string, any]>;
    }
    interface ObjectChain<T> {
        entries(): CollectionChain<[string, T[keyof T]]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        entries(): CollectionChain<[string, any]>;
    }
    interface LoDashStatic {
        entriesIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        entriesIn(object?: object): Array<[string, any]>;
    }
    interface Object<T> {
        entriesIn(): Collection<[string, T[keyof T]]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        entriesIn(): Collection<[string, any]>;
    }
    interface ObjectChain<T> {
        entriesIn(): CollectionChain<[string, T[keyof T]]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        entriesIn(): CollectionChain<[string, any]>;
    }
    interface LoDashStatic {
        extend<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        extend<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        extend<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        extend<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        extend<TObject>(object: TObject): TObject;
        extend<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        extend<TSource>(source: TSource): Object<T & TSource>;
        extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        extend<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        extend<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        extend(): Object<T>;
        extend(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        extend<TSource>(source: TSource): ObjectChain<T & TSource>;
        extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        extend<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        extend<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        extend(): ObjectChain<T>;
        extend(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        extendWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        extendWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        extendWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        extendWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        extendWith<TObject>(object: TObject): TObject;
        extendWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        extendWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>;
        extendWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Object<T & TSource1 & TSource2>;
        extendWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        extendWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        extendWith(): Object<T>;
        extendWith(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        extendWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>;
        extendWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2>;
        extendWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        extendWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        extendWith(): ObjectChain<T>;
        extendWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        findKey<T>(object: T | null | undefined, predicate?: ObjectIteratee<T>): string | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        findKey(predicate?: ObjectIteratee<TValue>): string | undefined;
    }
    interface LoDashExplicitWrapper<TValue> {
        findKey(predicate?: ObjectIteratee<TValue>): LoDashExplicitWrapper<string | undefined>;
    }
    interface LoDashStatic {
        findLastKey<T>(object: T | null | undefined, predicate?: ObjectIteratee<T>): string | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        findLastKey(predicate?: ObjectIteratee<TValue>): string | undefined;
    }
    interface LoDashExplicitWrapper<TValue> {
        findLastKey(predicate?: ObjectIteratee<TValue>): LoDashExplicitWrapper<string | undefined>;
    }
    interface LoDashStatic {
        forIn<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        forIn<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        forIn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        forIn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        forInRight<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        forInRight<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        forInRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        forInRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        forOwn<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        forOwn<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        forOwn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        forOwn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        forOwnRight<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        forOwnRight<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        forOwnRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        forOwnRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        functions(object: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        functions(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        functions(): CollectionChain<string>;
    }
    interface LoDashStatic {
        functionsIn<T extends {}>(object: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        functionsIn(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        functionsIn(): CollectionChain<string>;
    }
    interface LoDashStatic {
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
    interface String {
        get(path: number | number[]): string;
        get(path: number | number[], defaultValue: string): string;
    }
    interface Object<T> {
        get<TKey extends keyof T>(path: TKey | [TKey]): T[TKey];
        get<TKey extends keyof T, TDefault>(path: TKey | [TKey], defaultValue: TDefault): Exclude<T[TKey], undefined> | TDefault;
        get(path: PropertyPath, defaultValue?: any): any;
    }
    interface Collection<T> {
        get(path: number): T;
        get<TDefault>(path: number, defaultValue: TDefault): T | TDefault;
    }
    interface StringChain {
        get(path: number | number[]): StringChain;
        get(path: number | number[], defaultValue: string): StringChain;
    }
    interface ObjectChain<T> {
        get<TKey extends keyof T>(path: TKey | [TKey]): ExpChain<T[TKey]>;
        get<TKey extends keyof T, TDefault>(path: TKey | [TKey], defaultValue: TDefault): ExpChain<Exclude<T[TKey], undefined> | TDefault>;
        get(path: PropertyPath, defaultValue?: any): LoDashExplicitWrapper<any>;
    }
    interface CollectionChain<T> {
        get(path: number): ExpChain<T>;
        get<TDefault>(path: number, defaultValue: TDefault): ExpChain<T | TDefault>;
    }
    interface LoDashStatic {
        has<T>(object: T, path: PropertyPath): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        has(path: PropertyPath): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        has(path: PropertyPath): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        hasIn<T>(object: T, path: PropertyPath): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        hasIn(path: PropertyPath): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        hasIn(path: PropertyPath): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        invert(object: object): Dictionary<string>;
    }
    interface LoDashImplicitWrapper<TValue> {
        invert(): Object<Dictionary<string>>;
    }
    interface LoDashExplicitWrapper<TValue> {
        invert(): ObjectChain<Dictionary<string>>;
    }
    interface LoDashStatic {
        invertBy<T>(object:  Dictionary<T> | NumericDictionary<T> | null | undefined, interatee?: ValueIteratee<T>): Dictionary<string[]>;
        invertBy<T extends object>(object: T | null | undefined, interatee?: ValueIteratee<T[keyof T]>): Dictionary<string[]>;
    }
    interface String {
        invertBy(iteratee?: ValueIteratee<string>): Object<Dictionary<string[]>>;
    }
    interface Collection<T> {
        invertBy(iteratee?: ValueIteratee<T>): Object<Dictionary<string[]>>;
    }
    interface Object<T> {
        invertBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<string[]>>;
    }
    interface StringChain {
        invertBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string[]>>;
    }
    interface CollectionChain<T> {
        invertBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<string[]>>;
    }
    interface ObjectChain<T> {
        invertBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<string[]>>;
    }
    interface LoDashStatic {
        invoke(object: any, path: PropertyPath, ...args: any[]): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        invoke(path: PropertyPath, ...args: any[]): any;
    }
    interface LoDashExplicitWrapper<TValue> {
        invoke(path: PropertyPath, ...args: any[]): LoDashExplicitWrapper<any>;
    }
    interface LoDashStatic {
        keys(object?: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        keys(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        keys(): CollectionChain<string>;
    }
    interface LoDashStatic {
        keysIn(object?: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        keysIn(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        keysIn(): CollectionChain<string>;
    }
    interface LoDashStatic {
        mapKeys<T>(object: List<T> | null | undefined, iteratee?: ListIteratee<T>): Dictionary<T>;
        mapKeys<T extends object>(object: T | null | undefined, iteratee?: ObjectIteratee<T>): Dictionary<T[keyof T]>;
    }
    interface Collection<T> {
        mapKeys(iteratee?: ListIteratee<T>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        mapKeys(iteratee?: ObjectIteratee<T>): Object<Dictionary<T[keyof T]>>;
    }
    interface CollectionChain<T> {
        mapKeys(iteratee?: ListIteratee<T>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        mapKeys(iteratee?: ObjectIteratee<T>): ObjectChain<Dictionary<T[keyof T]>>;
    }
    interface LoDashStatic {
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
    interface String {
        mapValues<TResult>(callback: StringIterator<TResult>): Object<NumericDictionary<TResult>>;
        mapValues(): Object<NumericDictionary<string>>;
    }
    interface Collection<T> {
        mapValues<TResult>(callback: DictionaryIterator<T, TResult>): Object<Dictionary<TResult>>;
        mapValues<TKey extends keyof T>(iteratee: TKey): Object<Dictionary<T[TKey]>>;
        mapValues(iteratee: object): Object<Dictionary<boolean>>;
        mapValues(iteratee: string): Object<Dictionary<any>>;
        mapValues(): Object<Dictionary<T>>;
    }
    interface Object<T> {
        mapValues<TResult>(callback: ObjectIterator<T, TResult>): Object<{ [P in keyof T]: TResult }>;
        mapValues<TResult>(callback: DictionaryIterator<T[keyof T], TResult>): Object<Dictionary<TResult>>;
        mapValues(iteratee: object): Object<{ [P in keyof T]: boolean }>;
        mapValues<TKey extends keyof T[keyof T]>(iteratee: TKey): Object<Dictionary<T[keyof T][TKey]>>;
        mapValues(iteratee: string): Object<{ [P in keyof T]: any }>;
        mapValues(): Object<T>;
    }
    interface StringChain {
        mapValues<TResult>(callback: StringIterator<TResult>): ObjectChain<NumericDictionary<TResult>>;
        mapValues(): ObjectChain<NumericDictionary<string>>;
    }
    interface CollectionChain<T> {
        mapValues<TResult>(callback: DictionaryIterator<T, TResult>): ObjectChain<Dictionary<TResult>>;
        mapValues<TKey extends keyof T>(iteratee: TKey): ObjectChain<Dictionary<T[TKey]>>;
        mapValues(iteratee: object): ObjectChain<Dictionary<boolean>>;
        mapValues(iteratee: string): ObjectChain<Dictionary<any>>;
        mapValues(): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        mapValues<TResult>(callback: ObjectIterator<T, TResult>): ObjectChain<{ [P in keyof T]: TResult }>;
        mapValues<TResult>(callback: DictionaryIterator<T[keyof T], TResult>): ObjectChain<Dictionary<TResult>>;
        mapValues(iteratee: object): ObjectChain<{ [P in keyof T]: boolean }>;
        mapValues<TKey extends keyof T[keyof T]>(iteratee: TKey): ObjectChain<Dictionary<T[keyof T][TKey]>>;
        mapValues(iteratee: string): ObjectChain<{ [P in keyof T]: any }>;
        mapValues(): ObjectChain<T>;
    }
    interface LoDashStatic {
        merge<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        merge<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        merge<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        merge<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        merge(object: any, ...otherArgs: any[]): any;
    }
    interface Object<T> {
        merge<TSource>(source: TSource): Object<T & TSource>;
        merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        merge<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        merge<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        merge(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        merge<TSource>(source: TSource): ObjectChain<T & TSource>;
        merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        merge<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        merge<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        merge(...otherArgs: any[]): ObjectChain<any>;
    }
    type MergeWithCustomizer = { bivariantHack(value: any, srcValue: any, key: string, object: any, source: any): any; }["bivariantHack"];
    // TODO: Probably should just put all these methods on Object and forget about it.
    // oh, except for Collection<any> I GUESS
    interface LoDashStatic {
        mergeWith<TObject, TSource>(object: TObject, source: TSource, customizer: MergeWithCustomizer): TObject & TSource;
        mergeWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2;
        mergeWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2 & TSource3;
        mergeWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        mergeWith(object: any, ...otherArgs: any[]): any;
    }
    interface Object<T> {
        mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): Object<T & TSource>;
        mergeWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): Object<T & TSource1 & TSource2>;
        mergeWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        mergeWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        mergeWith(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): ObjectChain<T & TSource>;
        mergeWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): ObjectChain<T & TSource1 & TSource2>;
        mergeWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        mergeWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        mergeWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        omit<T extends object, K extends keyof T>(object: T | null | undefined, ...paths: Array<Many<K>>): Omit<T, K>;
        omit<T extends object>(object: T | null | undefined, ...paths: Array<Many<PropertyName>>): PartialObject<T>;
    }
    interface Collection<T> {
        omit(...paths: Array<Many<PropertyName>>): Collection<T>;
    }
    interface Object<T> {
        omit<K extends keyof T>(...paths: Array<Many<K>>): Object<Omit<T, K>>;
        omit(...paths: Array<Many<PropertyName | IterateeShorthand<T>>>): Object<PartialObject<T>>;
    }
    interface CollectionChain<T> {
        omit(...paths: Array<Many<PropertyName>>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        omit<K extends keyof T>(...paths: Array<Many<K>>): ObjectChain<Omit<T, K>>;
        omit(...paths: Array<Many<PropertyName>>): ObjectChain<PartialObject<T>>;
    }
    interface LoDashStatic {
        omitBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
        omitBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
        omitBy<T extends object>(object: T | null | undefined, predicate: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;
    }
    interface Collection<T> {
        omitBy(predicate?: ValueKeyIteratee<T>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        omitBy(predicate: ValueKeyIteratee<T[keyof T]>): Object<PartialObject<T>>;
    }
    interface CollectionChain<T> {
        omitBy(predicate?: ValueKeyIteratee<T>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        omitBy(predicate: ValueKeyIteratee<T[keyof T]>): ObjectChain<PartialObject<T>>;
    }
    interface LoDashStatic {
        pick<T extends object, U extends keyof T>(object: T, ...props: Array<Many<U>>): Pick<T, U>;
        pick<T>(object: T | null | undefined, ...props: PropertyPath[]): PartialDeep<T>;
    }
    interface Object<T> {
        pick<U extends keyof T>(...props: Array<Many<U>>): Object<Pick<T, U>>;
        pick(...props: PropertyPath[]): Object<PartialObject<T>>;
    }
    interface ObjectChain<T> {
        pick<U extends keyof T>(...props: Array<Many<U>>): ObjectChain<Pick<T, U>>;
        pick(...props: PropertyPath[]): ObjectChain<PartialObject<T>>;
    }
    interface LoDashStatic {
        pickBy<T, S extends T>(object: Dictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): Dictionary<S>;
        pickBy<T, S extends T>(object: NumericDictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): NumericDictionary<S>;
        pickBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
        pickBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
        pickBy<T extends object>(object: T | null | undefined, predicate?: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;
    }
    interface Collection<T> {
        pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): Object<Dictionary<S>>;
        pickBy(predicate?: ValueKeyIteratee<T>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        pickBy<S extends T[keyof T]>(predicate: ValueKeyIterateeTypeGuard<T[keyof T], S>): Object<NumericDictionary<unknown> extends T ? NumericDictionary<S> : Dictionary<S>>;
        pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): Object<PartialObject<T>>;
    }
    interface CollectionChain<T> {
        pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): ObjectChain<Dictionary<S>>;
        pickBy(predicate?: ValueKeyIteratee<T>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        pickBy<S extends T[keyof T]>(predicate: ValueKeyIterateeTypeGuard<T[keyof T], S>): ObjectChain<NumericDictionary<unknown> extends T ? NumericDictionary<S> : Dictionary<S>>;
        pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): ObjectChain<PartialObject<T>>;
    }
    interface LoDashStatic {
        result<TResult>(object: any, path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        result<TResult>(path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): TResult;
    }
    interface LoDashExplicitWrapper<TValue> {
        result<TResult>(path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): ExpChain<TResult>;
    }
    interface LoDashStatic {
        set<T extends object>(object: T, path: PropertyPath, value: any): T;
        set<TResult>(object: object, path: PropertyPath, value: any): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        set(path: PropertyPath, value: any): this;
        set<TResult>(path: PropertyPath, value: any): ImpChain<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        set(path: PropertyPath, value: any): this;
        set<TResult>(path: PropertyPath, value: any): ExpChain<TResult>;
    }
    type SetWithCustomizer<T> = (nsValue: any, key: string, nsObject: T) => any;
    interface LoDashStatic {
        setWith<T extends object>(object: T, path: PropertyPath, value: any, customizer?: SetWithCustomizer<T>): T;
        setWith<T extends object, TResult>(object: T, path: PropertyPath, value: any, customizer?: SetWithCustomizer<T>): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        setWith(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): this;
        setWith<TResult>(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): ImpChain<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        setWith(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): this;
        setWith<TResult>(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): ExpChain<TResult>;
    }
    interface LoDashStatic {
        toPairs<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        toPairs(object?: object): Array<[string, any]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        toPairs(): Collection<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        toPairs(): CollectionChain<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashStatic {
        toPairsIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        toPairsIn(object?: object): Array<[string, any]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        toPairsIn(): Collection<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        toPairsIn(): CollectionChain<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashStatic {
        transform<T, TResult>(object: T[], iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): TResult;
        transform<T, TResult>(object: Dictionary<T>, iteratee: MemoVoidDictionaryIterator<T, TResult>, accumulator?: TResult): TResult;
        transform(object: any[]): any[];
        transform(object: object): Dictionary<any>;
    }
    interface Collection<T> {
        transform<TResult>(iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): ImpChain<TResult>;
        transform(): Collection<any>;
    }
    interface Object<T> {
        transform<TResult>(iteratee: MemoVoidDictionaryIterator<T[keyof T], TResult>, accumulator?: TResult): ImpChain<TResult>;
        transform(): ImpChain<T extends Dictionary<unknown> ? Dictionary<any> : T>;
    }
    interface CollectionChain<T> {
        transform<TResult>(iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): ExpChain<TResult>;
        transform(): CollectionChain<any>;
    }
    interface ObjectChain<T> {
        transform<TResult>(iteratee: MemoVoidDictionaryIterator<T[keyof T], TResult>, accumulator?: TResult): ExpChain<TResult>;
        transform(): ExpChain<T extends Dictionary<unknown> ? Dictionary<any> : T>;
    }
    interface LoDashStatic {
        unset(object: any, path: PropertyPath): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        unset(path: PropertyPath): Primitive<boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        unset(path: PropertyPath): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        update(object: object, path: PropertyPath, updater: (value: any) => any): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        update(path: PropertyPath, updater: (value: any) => any): Object<any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        update(path: PropertyPath, updater: (value: any) => any): ObjectChain<any>;
    }
    interface LoDashStatic {
        updateWith<T extends object>(object: T, path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): T;
        updateWith<T extends object, TResult>(object: T, path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): TResult;
    }
    interface Object<T> {
        updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): this;
        updateWith<TResult>(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): Object<TResult>;
    }
    interface ObjectChain<T> {
        updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): this;
        updateWith<TResult>(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): ObjectChain<TResult>;
    }
    interface LoDashStatic {
        values<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[];
        values<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
        values(object: any): any[];
    }
    interface String {
        values(): Collection<string>;
    }
    interface Object<T> {
        values(): Collection<T[keyof T]>;
    }
    interface ObjectChain<T> {
        values(): CollectionChain<T[keyof T]>;
    }
    interface StringChain {
        values(): CollectionChain<string>;
    }
    interface LoDashStatic {
        valuesIn<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[];
        valuesIn<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
    }
    interface String {
        valuesIn(): Collection<string>;
    }
    interface Object<T> {
        valuesIn(): Collection<T[keyof T]>;
    }
    interface StringChain {
        valuesIn(): CollectionChain<string>;
    }
    interface ObjectChain<T> {
        valuesIn(): CollectionChain<T[keyof T]>;
    }
}

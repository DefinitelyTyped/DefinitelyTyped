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
    interface ImpO<T> {
        assign<TSource>(source: TSource): ImpO<T & TSource>;
        assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): ImpO<T & TSource1 & TSource2>;
        assign<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ImpO<T & TSource1 & TSource2 & TSource3>;
        assign<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ImpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assign(): ImpO<T>;
        assign(...otherArgs: any[]): ImpO<any>;
    }
    interface ExpO<T> {
        assign<TSource>(source: TSource): ExpO<T & TSource>;
        assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): ExpO<T & TSource1 & TSource2>;
        assign<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ExpO<T & TSource1 & TSource2 & TSource3>;
        assign<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ExpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assign(): ExpO<T>;
        assign(...otherArgs: any[]): ExpO<any>;
    }
    interface LoDashStatic {
        assignIn<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        assignIn<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        assignIn<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        assignIn<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        assignIn<TObject>(object: TObject): TObject;
        assignIn<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface ImpO<T> {
        assignIn<TSource>(source: TSource): ImpO<T & TSource>;
        assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): ImpO<T & TSource1 & TSource2>;
        assignIn<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ImpO<T & TSource1 & TSource2 & TSource3>;
        assignIn<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ImpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignIn(): ImpO<T>;
        assignIn<TResult>(...otherArgs: any[]): ImpO<TResult>;
    }
    interface ExpO<T> {
        assignIn<TSource>(source: TSource): ExpO<T & TSource>;
        assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): ExpO<T & TSource1 & TSource2>;
        assignIn<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ExpO<T & TSource1 & TSource2 & TSource3>;
        assignIn<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ExpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignIn(): ExpO<T>;
        assignIn(...otherArgs: any[]): ExpO<any>;
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
    interface ImpO<T> {
        assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): ImpO<T & TSource>;
        assignInWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ImpO<T & TSource1 & TSource2>;
        assignInWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ImpO<T & TSource1 & TSource2 & TSource3>;
        assignInWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ImpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignInWith(): ImpO<T>;
        assignInWith<TResult>(...otherArgs: any[]): ImpO<TResult>;
    }
    interface ExpO<T> {
        assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): ExpO<T & TSource>;
        assignInWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ExpO<T & TSource1 & TSource2>;
        assignInWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ExpO<T & TSource1 & TSource2 & TSource3>;
        assignInWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ExpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignInWith(): ExpO<T>;
        assignInWith(...otherArgs: any[]): ExpO<any>;
    }
    interface LoDashStatic {
        assignWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        assignWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        assignWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        assignWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        assignWith<TObject>(object: TObject): TObject;
        assignWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface ImpO<T> {
        assignWith<TSource>(source: TSource, customizer: AssignCustomizer): ImpO<T & TSource>;
        assignWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ImpO<T & TSource1 & TSource2>;
        assignWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ImpO<T & TSource1 & TSource2 & TSource3>;
        assignWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ImpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignWith(): ImpO<T>;
        assignWith<TResult>(...otherArgs: any[]): ImpO<TResult>;
    }
    interface ExpO<T> {
        assignWith<TSource>(source: TSource, customizer: AssignCustomizer): ExpO<T & TSource>;
        assignWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ExpO<T & TSource1 & TSource2>;
        assignWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ExpO<T & TSource1 & TSource2 & TSource3>;
        assignWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ExpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        assignWith(): ExpO<T>;
        assignWith(...otherArgs: any[]): ExpO<any>;
    }
    interface LoDashStatic {
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
    interface LoDashStatic {
        create<T extends object, U extends object>(prototype: T, properties?: U): T & U;
    }
    interface ImpO<T> {
        create<U extends object>(properties?: U): ImpO<T & U>;
    }
    interface ExpO<T> {
        create<U extends object>(properties?: U): ExpO<T & U>;
    }
    interface LoDashStatic {
        defaults<TObject, TSource>(object: TObject, source: TSource): TSource & TObject;
        defaults<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TSource2 & TSource1 & TObject;
        defaults<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TSource3 & TSource2 & TSource1 & TObject;
        defaults<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TSource4 & TSource3 & TSource2 & TSource1 & TObject;
        defaults<TObject>(object: TObject): TObject;
        defaults(object: any, ...sources: any[]): any;
    }
    interface ImpO<T> {
        defaults<TSource>(source: TSource): ImpO<TSource & T>;
        defaults<TSource1, TSource2>(source1: TSource1, source2: TSource2): ImpO<TSource2 & TSource1 & T>;
        defaults<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ImpO<TSource3 & TSource2 & TSource1 & T>;
        defaults<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ImpO<TSource4 & TSource3 & TSource2 & TSource1 & T>;
        defaults(): ImpO<T>;
        defaults(...sources: any[]): ImpO<any>;
    }
    interface ExpO<T> {
        defaults<TSource>(source: TSource): ExpO<TSource & T>;
        defaults<TSource1, TSource2>(source1: TSource1, source2: TSource2): ExpO<TSource2 & TSource1 & T>;
        defaults<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ExpO<TSource3 & TSource2 & TSource1 & T>;
        defaults<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ExpO<TSource4 & TSource3 & TSource2 & TSource1 & T>;
        defaults(): ExpO<T>;
        defaults(...sources: any[]): ExpO<any>;
    }
    interface LoDashStatic {
        defaultsDeep(object: any, ...sources: any[]): any;
    }
    interface ImpO<T> {
        defaultsDeep(...sources: any[]): ImpO<any>;
    }
    interface ExpO<T> {
        defaultsDeep(...sources: any[]): ExpO<any>;
    }
    interface LoDashStatic {
        entries<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        entries(object?: object): Array<[string, any]>;
    }
    interface ImpO<T> {
        entries(): ImpL<[string, T[keyof T]]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        entries(): ImpL<[string, any]>;
    }
    interface ExpO<T> {
        entries(): ExpL<[string, T[keyof T]]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        entries(): ExpL<[string, any]>;
    }
    interface LoDashStatic {
        entriesIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        entriesIn(object?: object): Array<[string, any]>;
    }
    interface ImpO<T> {
        entriesIn(): ImpL<[string, T[keyof T]]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        entriesIn(): ImpL<[string, any]>;
    }
    interface ExpO<T> {
        entriesIn(): ExpL<[string, T[keyof T]]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        entriesIn(): ExpL<[string, any]>;
    }
    interface LoDashStatic {
        extend<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        extend<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        extend<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        extend<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        extend<TObject>(object: TObject): TObject;
        extend<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface ImpO<T> {
        extend<TSource>(source: TSource): ImpO<T & TSource>;
        extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): ImpO<T & TSource1 & TSource2>;
        extend<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ImpO<T & TSource1 & TSource2 & TSource3>;
        extend<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ImpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        extend(): ImpO<T>;
        extend(...otherArgs: any[]): ImpO<any>;
    }
    interface ExpO<T> {
        extend<TSource>(source: TSource): ExpO<T & TSource>;
        extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): ExpO<T & TSource1 & TSource2>;
        extend<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ExpO<T & TSource1 & TSource2 & TSource3>;
        extend<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ExpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        extend(): ExpO<T>;
        extend(...otherArgs: any[]): ExpO<any>;
    }
    interface LoDashStatic {
        extendWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        extendWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        extendWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        extendWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        extendWith<TObject>(object: TObject): TObject;
        extendWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface ImpO<T> {
        extendWith<TSource>(source: TSource, customizer: AssignCustomizer): ImpO<T & TSource>;
        extendWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ImpO<T & TSource1 & TSource2>;
        extendWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ImpO<T & TSource1 & TSource2 & TSource3>;
        extendWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ImpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        extendWith(): ImpO<T>;
        extendWith(...otherArgs: any[]): ImpO<any>;
    }
    interface ExpO<T> {
        extendWith<TSource>(source: TSource, customizer: AssignCustomizer): ExpO<T & TSource>;
        extendWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ExpO<T & TSource1 & TSource2>;
        extendWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ExpO<T & TSource1 & TSource2 & TSource3>;
        extendWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ExpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        extendWith(): ExpO<T>;
        extendWith(...otherArgs: any[]): ExpO<any>;
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
        functions(): ImpL<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        functions(): ExpL<string>;
    }
    interface LoDashStatic {
        functionsIn<T extends {}>(object: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        functionsIn(): ImpL<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        functionsIn(): ExpL<string>;
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
    interface ImpS {
        get(path: number | number[]): string;
        get(path: number | number[], defaultValue: string): string;
    }
    interface ImpO<T> {
        get<TKey extends keyof T>(path: TKey | [TKey]): T[TKey];
        get<TKey extends keyof T, TDefault>(path: TKey | [TKey], defaultValue: TDefault): Exclude<T[TKey], undefined> | TDefault;
        get(path: PropertyPath, defaultValue?: any): any;
    }
    interface ImpL<T> {
        get(path: number): T;
        get<TDefault>(path: number, defaultValue: TDefault): T | TDefault;
    }
    interface ExpS {
        get(path: number | number[]): ExpS;
        get(path: number | number[], defaultValue: string): ExpS;
    }
    interface ExpO<T> {
        get<TKey extends keyof T>(path: TKey | [TKey]): ExpChain<T[TKey]>;
        get<TKey extends keyof T, TDefault>(path: TKey | [TKey], defaultValue: TDefault): ExpChain<Exclude<T[TKey], undefined> | TDefault>;
        get(path: PropertyPath, defaultValue?: any): LoDashExplicitWrapper<any>;
    }
    interface ExpL<T> {
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
        has(path: PropertyPath): ExpU<boolean>;
    }
    interface LoDashStatic {
        hasIn<T>(object: T, path: PropertyPath): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        hasIn(path: PropertyPath): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        hasIn(path: PropertyPath): ExpU<boolean>;
    }
    interface LoDashStatic {
        invert(object: object): Dictionary<string>;
    }
    interface LoDashImplicitWrapper<TValue> {
        invert(): ImpO<Dictionary<string>>;
    }
    interface LoDashExplicitWrapper<TValue> {
        invert(): ExpO<Dictionary<string>>;
    }
    interface LoDashStatic {
        invertBy<T>(object:  Dictionary<T> | NumericDictionary<T> | null | undefined, interatee?: ValueIteratee<T>): Dictionary<string[]>;
        invertBy<T extends object>(object: T | null | undefined, interatee?: ValueIteratee<T[keyof T]>): Dictionary<string[]>;
    }
    interface ImpS {
        invertBy(iteratee?: ValueIteratee<string>): ImpO<Dictionary<string[]>>;
    }
    interface ImpL<T> {
        invertBy(iteratee?: ValueIteratee<T>): ImpO<Dictionary<string[]>>;
    }
    interface ImpO<T> {
        invertBy(iteratee?: ValueIteratee<T[keyof T]>): ImpO<Dictionary<string[]>>;
    }
    interface ExpS {
        invertBy(iteratee?: ValueIteratee<string>): ExpO<Dictionary<string[]>>;
    }
    interface ExpL<T> {
        invertBy(iteratee?: ValueIteratee<T>): ExpO<Dictionary<string[]>>;
    }
    interface ExpO<T> {
        invertBy(iteratee?: ValueIteratee<T[keyof T]>): ExpO<Dictionary<string[]>>;
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
        keys(): ImpL<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        keys(): ExpL<string>;
    }
    interface LoDashStatic {
        keysIn(object?: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        keysIn(): ImpL<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        keysIn(): ExpL<string>;
    }
    interface LoDashStatic {
        mapKeys<T>(object: List<T> | null | undefined, iteratee?: ListIteratee<T>): Dictionary<T>;
        mapKeys<T extends object>(object: T | null | undefined, iteratee?: ObjectIteratee<T>): Dictionary<T[keyof T]>;
    }
    interface ImpL<T> {
        mapKeys(iteratee?: ListIteratee<T>): ImpO<Dictionary<T>>;
    }
    interface ImpO<T> {
        mapKeys(iteratee?: ObjectIteratee<T>): ImpO<Dictionary<T[keyof T]>>;
    }
    interface ExpL<T> {
        mapKeys(iteratee?: ListIteratee<T>): ExpO<Dictionary<T>>;
    }
    interface ExpO<T> {
        mapKeys(iteratee?: ObjectIteratee<T>): ExpO<Dictionary<T[keyof T]>>;
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
    interface ImpS {
        mapValues<TResult>(callback: StringIterator<TResult>): ImpO<NumericDictionary<TResult>>;
        mapValues(): ImpO<NumericDictionary<string>>;
    }
    interface ImpL<T> {
        mapValues<TResult>(callback: DictionaryIterator<T, TResult>): ImpO<Dictionary<TResult>>;
        mapValues<TKey extends keyof T>(iteratee: TKey): ImpO<Dictionary<T[TKey]>>;
        mapValues(iteratee: object): ImpO<Dictionary<boolean>>;
        mapValues(iteratee: string): ImpO<Dictionary<any>>;
        mapValues(): ImpO<Dictionary<T>>;
    }
    interface ImpO<T> {
        mapValues<TResult>(callback: ObjectIterator<T, TResult>): ImpO<{ [P in keyof T]: TResult }>;
        mapValues<TResult>(callback: DictionaryIterator<T[keyof T], TResult>): ImpO<Dictionary<TResult>>;
        mapValues(iteratee: object): ImpO<{ [P in keyof T]: boolean }>;
        mapValues<TKey extends keyof T[keyof T]>(iteratee: TKey): ImpO<Dictionary<T[keyof T][TKey]>>;
        mapValues(iteratee: string): ImpO<{ [P in keyof T]: any }>;
        mapValues(): ImpO<T>;
    }
    interface ExpS {
        mapValues<TResult>(callback: StringIterator<TResult>): ExpO<NumericDictionary<TResult>>;
        mapValues(): ExpO<NumericDictionary<string>>;
    }
    interface ExpL<T> {
        mapValues<TResult>(callback: DictionaryIterator<T, TResult>): ExpO<Dictionary<TResult>>;
        mapValues<TKey extends keyof T>(iteratee: TKey): ExpO<Dictionary<T[TKey]>>;
        mapValues(iteratee: object): ExpO<Dictionary<boolean>>;
        mapValues(iteratee: string): ExpO<Dictionary<any>>;
        mapValues(): ExpO<Dictionary<T>>;
    }
    interface ExpO<T> {
        mapValues<TResult>(callback: ObjectIterator<T, TResult>): ExpO<{ [P in keyof T]: TResult }>;
        mapValues<TResult>(callback: DictionaryIterator<T[keyof T], TResult>): ExpO<Dictionary<TResult>>;
        mapValues(iteratee: object): ExpO<{ [P in keyof T]: boolean }>;
        mapValues<TKey extends keyof T[keyof T]>(iteratee: TKey): ExpO<Dictionary<T[keyof T][TKey]>>;
        mapValues(iteratee: string): ExpO<{ [P in keyof T]: any }>;
        mapValues(): ExpO<T>;
    }
    interface LoDashStatic {
        merge<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        merge<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        merge<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        merge<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        merge(object: any, ...otherArgs: any[]): any;
    }
    interface ImpO<T> {
        merge<TSource>(source: TSource): ImpO<T & TSource>;
        merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): ImpO<T & TSource1 & TSource2>;
        merge<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ImpO<T & TSource1 & TSource2 & TSource3>;
        merge<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ImpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        merge(...otherArgs: any[]): ImpO<any>;
    }
    interface ExpO<T> {
        merge<TSource>(source: TSource): ExpO<T & TSource>;
        merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): ExpO<T & TSource1 & TSource2>;
        merge<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ExpO<T & TSource1 & TSource2 & TSource3>;
        merge<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ExpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        merge(...otherArgs: any[]): ExpO<any>;
    }
    type MergeWithCustomizer = { bivariantHack(value: any, srcValue: any, key: string, object: any, source: any): any; }["bivariantHack"];
    // TODO: Probably should just put all these methods on ImpO and forget about it.
    // oh, except for ImpL<any> I GUESS
    interface LoDashStatic {
        mergeWith<TObject, TSource>(object: TObject, source: TSource, customizer: MergeWithCustomizer): TObject & TSource;
        mergeWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2;
        mergeWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2 & TSource3;
        mergeWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        mergeWith(object: any, ...otherArgs: any[]): any;
    }
    interface ImpO<T> {
        mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): ImpO<T & TSource>;
        mergeWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): ImpO<T & TSource1 & TSource2>;
        mergeWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): ImpO<T & TSource1 & TSource2 & TSource3>;
        mergeWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): ImpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        mergeWith(...otherArgs: any[]): ImpO<any>;
    }
    interface ExpO<T> {
        mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): ExpO<T & TSource>;
        mergeWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): ExpO<T & TSource1 & TSource2>;
        mergeWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): ExpO<T & TSource1 & TSource2 & TSource3>;
        mergeWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): ExpO<T & TSource1 & TSource2 & TSource3 & TSource4>;
        mergeWith(...otherArgs: any[]): ExpO<any>;
    }
    interface LoDashStatic {
        omit<T extends object, K extends keyof T>(object: T | null | undefined, ...paths: Array<Many<K>>): Omit<T, K>;
        omit<T extends object>(object: T | null | undefined, ...paths: Array<Many<PropertyName>>): PartialObject<T>;
    }
    interface ImpL<T> {
        omit(...paths: Array<Many<PropertyName>>): ImpL<T>;
    }
    interface ImpO<T> {
        omit<K extends keyof T>(...paths: Array<Many<K>>): ImpO<Omit<T, K>>;
        omit(...paths: Array<Many<PropertyName | IterateeShorthand<T>>>): ImpO<PartialObject<T>>;
    }
    interface ExpL<T> {
        omit(...paths: Array<Many<PropertyName>>): ExpL<T>;
    }
    interface ExpO<T> {
        omit<K extends keyof T>(...paths: Array<Many<K>>): ExpO<Omit<T, K>>;
        omit(...paths: Array<Many<PropertyName>>): ExpO<PartialObject<T>>;
    }
    interface LoDashStatic {
        omitBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
        omitBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
        omitBy<T extends object>(object: T | null | undefined, predicate: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;
    }
    interface ImpL<T> {
        omitBy(predicate?: ValueKeyIteratee<T>): ImpO<Dictionary<T>>;
    }
    interface ImpO<T> {
        omitBy(predicate: ValueKeyIteratee<T[keyof T]>): ImpO<PartialObject<T>>;
    }
    interface ExpL<T> {
        omitBy(predicate?: ValueKeyIteratee<T>): ExpO<Dictionary<T>>;
    }
    interface ExpO<T> {
        omitBy(predicate: ValueKeyIteratee<T[keyof T]>): ExpO<PartialObject<T>>;
    }
    interface LoDashStatic {
        pick<T extends object, U extends keyof T>(object: T, ...props: Array<Many<U>>): Pick<T, U>;
        pick<T>(object: T | null | undefined, ...props: PropertyPath[]): PartialDeep<T>;
    }
    interface ImpO<T> {
        pick<U extends keyof T>(...props: Array<Many<U>>): ImpO<Pick<T, U>>;
        pick(...props: PropertyPath[]): ImpO<PartialObject<T>>;
    }
    interface ExpO<T> {
        pick<U extends keyof T>(...props: Array<Many<U>>): ExpO<Pick<T, U>>;
        pick(...props: PropertyPath[]): ExpO<PartialObject<T>>;
    }
    interface LoDashStatic {
        pickBy<T, S extends T>(object: Dictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): Dictionary<S>;
        pickBy<T, S extends T>(object: NumericDictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): NumericDictionary<S>;
        pickBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
        pickBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
        pickBy<T extends object>(object: T | null | undefined, predicate?: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;
    }
    interface ImpL<T> {
        pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): ImpO<Dictionary<S>>;
        pickBy(predicate?: ValueKeyIteratee<T>): ImpO<Dictionary<T>>;
    }
    interface ImpO<T> {
        pickBy<S extends T[keyof T]>(predicate: ValueKeyIterateeTypeGuard<T[keyof T], S>): ImpO<NumericDictionary<unknown> extends T ? NumericDictionary<S> : Dictionary<S>>;
        pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): ImpO<PartialObject<T>>;
    }
    interface ExpL<T> {
        pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): ExpO<Dictionary<S>>;
        pickBy(predicate?: ValueKeyIteratee<T>): ExpO<Dictionary<T>>;
    }
    interface ExpO<T> {
        pickBy<S extends T[keyof T]>(predicate: ValueKeyIterateeTypeGuard<T[keyof T], S>): ExpO<NumericDictionary<unknown> extends T ? NumericDictionary<S> : Dictionary<S>>;
        pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): ExpO<PartialObject<T>>;
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
        toPairs(): ImpL<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        toPairs(): ExpL<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashStatic {
        toPairsIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        toPairsIn(object?: object): Array<[string, any]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        toPairsIn(): ImpL<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        toPairsIn(): ExpL<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashStatic {
        transform<T, TResult>(object: T[], iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): TResult;
        transform<T, TResult>(object: Dictionary<T>, iteratee: MemoVoidDictionaryIterator<T, TResult>, accumulator?: TResult): TResult;
        transform(object: any[]): any[];
        transform(object: object): Dictionary<any>;
    }
    interface ImpL<T> {
        transform<TResult>(iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): ImpChain<TResult>;
        transform(): ImpL<any>;
    }
    interface ImpO<T> {
        transform<TResult>(iteratee: MemoVoidDictionaryIterator<T[keyof T], TResult>, accumulator?: TResult): ImpChain<TResult>;
        transform(): ImpChain<T extends Dictionary<unknown> ? Dictionary<any> : T>;
    }
    interface ExpL<T> {
        transform<TResult>(iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): ExpChain<TResult>;
        transform(): ExpL<any>;
    }
    interface ExpO<T> {
        transform<TResult>(iteratee: MemoVoidDictionaryIterator<T[keyof T], TResult>, accumulator?: TResult): ExpChain<TResult>;
        transform(): ExpChain<T extends Dictionary<unknown> ? Dictionary<any> : T>;
    }
    interface LoDashStatic {
        unset(object: any, path: PropertyPath): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        unset(path: PropertyPath): ImpU<boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        unset(path: PropertyPath): ExpU<boolean>;
    }
    interface LoDashStatic {
        update(object: object, path: PropertyPath, updater: (value: any) => any): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        update(path: PropertyPath, updater: (value: any) => any): ImpO<any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        update(path: PropertyPath, updater: (value: any) => any): ExpO<any>;
    }
    interface LoDashStatic {
        updateWith<T extends object>(object: T, path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): T;
        updateWith<T extends object, TResult>(object: T, path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): TResult;
    }
    interface ImpO<T> {
        updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): this;
        updateWith<TResult>(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): ImpO<TResult>;
    }
    interface ExpO<T> {
        updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): this;
        updateWith<TResult>(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): ExpO<TResult>;
    }
    interface LoDashStatic {
        values<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[];
        values<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
        values(object: any): any[];
    }
    interface ImpS {
        values(): ImpL<string>;
    }
    interface ImpO<T> {
        values(): ImpL<T[keyof T]>;
    }
    interface ExpO<T> {
        values(): ExpL<T[keyof T]>;
    }
    interface ExpS {
        values(): ExpL<string>;
    }
    interface LoDashStatic {
        valuesIn<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[];
        valuesIn<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
    }
    interface ImpS {
        valuesIn(): ImpL<string>;
    }
    interface ImpO<T> {
        valuesIn(): ImpL<T[keyof T]>;
    }
    interface ExpS {
        valuesIn(): ExpL<string>;
    }
    interface ExpO<T> {
        valuesIn(): ExpL<T[keyof T]>;
    }
}

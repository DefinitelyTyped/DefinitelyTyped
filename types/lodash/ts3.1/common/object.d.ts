import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * @see _.assign
         */
        assign<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        /**
         * @see _.assign
         */
        assign<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        /**
         * @see _.assign
         */
        assign<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.assign
         */
        assign<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.assign
         */
        assign<TObject>(object: TObject): TObject;
        /**
         * @see _.assign
         */
        assign(object: any, ...otherArgs: any[]): any;
    }
    interface Object<T> {
        /**
         * @see _.assign
         */
        assign<TSource>(source: TSource): Object<T & TSource>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assign
         */
        assign(): Object<T>;
        /**
         * @see _.assign
         */
        assign(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.assign
         */
        assign<TSource>(source: TSource): ObjectChain<T & TSource>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assign
         */
        assign<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assign
         */
        assign(): ObjectChain<T>;
        /**
         * @see _.assign
         */
        assign(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.assignIn
         */
        assignIn<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        /**
         * @see _.assignIn
         */
        assignIn<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        /**
         * @see _.assignIn
         */
        assignIn<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.assignIn
         */
        assignIn<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.assignIn
         */
        assignIn<TObject>(object: TObject): TObject;
        /**
         * @see _.assignIn
         */
        assignIn<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource>(source: TSource): Object<T & TSource>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignIn
         */
        assignIn(): Object<T>;
        /**
         * @see _.assignIn
         */
        assignIn<TResult>(...otherArgs: any[]): Object<TResult>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.assignIn
         */
        assignIn<TSource>(source: TSource): ObjectChain<T & TSource>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignIn
         */
        assignIn<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignIn
         */
        assignIn(): ObjectChain<T>;
        /**
         * @see _.assignIn
         */
        assignIn(...otherArgs: any[]): ObjectChain<any>;
    }
    type AssignCustomizer = (objectValue: any, sourceValue: any, key?: string, object?: {}, source?: {}) => any;
    interface LoDashStatic {
        /**
         * @see _.assignInWith
         */
        assignInWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        /**
         * @see _.assignInWith
         */
        assignInWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        /**
         * @see _.assignInWith
         */
        assignInWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.assignInWith
         */
        assignInWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.assignInWith
         */
        assignInWith<TObject>(object: TObject): TObject;
        /**
         * @see _.assignInWith
         */
        assignInWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Object<T & TSource1 & TSource2>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignInWith
         */
        assignInWith(): Object<T>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TResult>(...otherArgs: any[]): Object<TResult>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignInWith
         */
        assignInWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignInWith
         */
        assignInWith(): ObjectChain<T>;
        /**
         * @see _.assignInWith
         */
        assignInWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.assignWith
         */
        assignWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        /**
         * @see _.assignWith
         */
        assignWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        /**
         * @see _.assignWith
         */
        assignWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.assignWith
         */
        assignWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.assignWith
         */
        assignWith<TObject>(object: TObject): TObject;
        /**
         * @see _.assignWith
         */
        assignWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Object<T & TSource1 & TSource2>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignWith
         */
        assignWith(): Object<T>;
        /**
         * @see _.assignWith
         */
        assignWith<TResult>(...otherArgs: any[]): Object<TResult>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.assignWith
         */
        assignWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.assignWith
         */
        assignWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.assignWith
         */
        assignWith(): ObjectChain<T>;
        /**
         * @see _.assignWith
         */
        assignWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.at
         */
        at<T>(object:  Dictionary<T> | NumericDictionary<T> | null | undefined, ...props: PropertyPath[]): T[];
        /**
         * @see _.at
         */
        at<T extends object>(object: T | null | undefined, ...props: Array<Many<keyof T>>): Array<T[keyof T]>;
    }
    interface Object<T> {
        /**
         * @see _.at
         */
        at(...props: Array<Many<keyof T>>): Collection<T[keyof T]>;
    }
    interface Collection<T> {
        /**
         * @see _.at
         */
        at(...props: PropertyPath[]): Collection<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.at
         */
        at(...props: Array<Many<keyof T>>): CollectionChain<T[keyof T]>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.at
         */
        at(...props: PropertyPath[]): CollectionChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.create
         */
        create<T extends object, U extends object>(prototype: T, properties?: U): T & U;
    }
    interface Object<T> {
        /**
         * @see _.create
         */
        create<U extends object>(properties?: U): Object<T & U>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.create
         */
        create<U extends object>(properties?: U): ObjectChain<T & U>;
    }
    interface LoDashStatic {
        /**
         * @see _.defaults
         */
        defaults<TObject, TSource>(object: TObject, source: TSource): TSource & TObject;
        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TSource2 & TSource1 & TObject;
        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TSource3 & TSource2 & TSource1 & TObject;
        /**
         * @see _.defaults
         */
        defaults<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TSource4 & TSource3 & TSource2 & TSource1 & TObject;
        /**
         * @see _.defaults
         */
        defaults<TObject>(object: TObject): TObject;
        /**
         * @see _.defaults
         */
        defaults(object: any, ...sources: any[]): any;
    }
    interface Object<T> {
        /**
         * @see _.defaults
         */
        defaults<TSource>(source: TSource): Object<TSource & T>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<TSource2 & TSource1 & T>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<TSource3 & TSource2 & TSource1 & T>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<TSource4 & TSource3 & TSource2 & TSource1 & T>;
        /**
         * @see _.defaults
         */
        defaults(): Object<T>;
        /**
         * @see _.defaults
         */
        defaults(...sources: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.defaults
         */
        defaults<TSource>(source: TSource): ObjectChain<TSource & T>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<TSource2 & TSource1 & T>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<TSource3 & TSource2 & TSource1 & T>;
        /**
         * @see _.defaults
         */
        defaults<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<TSource4 & TSource3 & TSource2 & TSource1 & T>;
        /**
         * @see _.defaults
         */
        defaults(): ObjectChain<T>;
        /**
         * @see _.defaults
         */
        defaults(...sources: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.defaultsDeep
         */
        defaultsDeep(object: any, ...sources: any[]): any;
    }
    interface Object<T> {
        /**
         * @see _.defaultsDeep
         */
        defaultsDeep(...sources: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.defaultsDeep
         */
        defaultsDeep(...sources: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.entries
         */
        entries<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        /**
         * @see _.entries
         */
        entries(object?: object): Array<[string, any]>;
    }
    interface Object<T> {
        /**
         * @see _.entries
         */
        entries(): Collection<[string, T[keyof T]]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.entries
         */
        entries(): Collection<[string, any]>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.entries
         */
        entries(): CollectionChain<[string, T[keyof T]]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.entries
         */
        entries(): CollectionChain<[string, any]>;
    }
    interface LoDashStatic {
        /**
         * @see _.entriesIn
         */
        entriesIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        /**
         * @see _.entriesIn
         */
        entriesIn(object?: object): Array<[string, any]>;
    }
    interface Object<T> {
        /**
         * @see _.entriesIn
         */
        entriesIn(): Collection<[string, T[keyof T]]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.entriesIn
         */
        entriesIn(): Collection<[string, any]>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.entriesIn
         */
        entriesIn(): CollectionChain<[string, T[keyof T]]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.entriesIn
         */
        entriesIn(): CollectionChain<[string, any]>;
    }
    interface LoDashStatic {
        /**
         * @see _.extend
         */
        extend<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        /**
         * @see _.extend
         */
        extend<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        /**
         * @see _.extend
         */
        extend<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.extend
         */
        extend<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.extend
         */
        extend<TObject>(object: TObject): TObject;
        /**
         * @see _.extend
         */
        extend<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        /**
         * @see _.extend
         */
        extend<TSource>(source: TSource): Object<T & TSource>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.extend
         */
        extend(): Object<T>;
        /**
         * @see _.extend
         */
        extend(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.extend
         */
        extend<TSource>(source: TSource): ObjectChain<T & TSource>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.extend
         */
        extend<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.extend
         */
        extend(): ObjectChain<T>;
        /**
         * @see _.extend
         */
        extend(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource>(object: TObject, source: TSource, customizer: AssignCustomizer): TObject & TSource;
        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer): TObject & TSource1 & TSource2;
        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.extendWith
         */
        extendWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.extendWith
         */
        extendWith<TObject>(object: TObject): TObject;
        /**
         * @see _.extendWith
         */
        extendWith<TResult>(object: any, ...otherArgs: any[]): TResult;
    }
    interface Object<T> {
        /**
         * @see _.extendWith
         */
        extendWith<TSource>(source: TSource, customizer: AssignCustomizer): Object<T & TSource>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): Object<T & TSource1 & TSource2>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.extendWith
         */
        extendWith(): Object<T>;
        /**
         * @see _.extendWith
         */
        extendWith(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.extendWith
         */
        extendWith<TSource>(source: TSource, customizer: AssignCustomizer): ObjectChain<T & TSource>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.extendWith
         */
        extendWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.extendWith
         */
        extendWith(): ObjectChain<T>;
        /**
         * @see _.extendWith
         */
        extendWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.findKey
         */
        findKey<T>(object: T | null | undefined, predicate?: ObjectIteratee<T>): string | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findKey
         */
        findKey(predicate?: ObjectIteratee<TValue>): string | undefined;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findKey
         */
        findKey(predicate?: ObjectIteratee<TValue>): LoDashExplicitWrapper<string | undefined>;
    }
    interface LoDashStatic {
        /**
         * @see _.findLastKey
         */
        findLastKey<T>(object: T | null | undefined, predicate?: ObjectIteratee<T>): string | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.findLastKey
         */
        findLastKey(predicate?: ObjectIteratee<TValue>): string | undefined;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.findLastKey
         */
        findLastKey(predicate?: ObjectIteratee<TValue>): LoDashExplicitWrapper<string | undefined>;
    }
    interface LoDashStatic {
        /**
         * @see _.forIn
         */
        forIn<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forIn
         */
        forIn<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.forIn
         */
        forIn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.forIn
         */
        forIn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        /**
         * @see _.forInRight
         */
        forInRight<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forInRight
         */
        forInRight<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.forInRight
         */
        forInRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.forInRight
         */
        forInRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        /**
         * @see _.forOwn
         */
        forOwn<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forOwn
         */
        forOwn<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.forOwn
         */
        forOwn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.forOwn
         */
        forOwn(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        /**
         * @see _.forOwnRight
         */
        forOwnRight<T>(object: T, iteratee?: ObjectIterator<T, any>): T;
        /**
         * @see _.forOwnRight
         */
        forOwnRight<T>(object: T | null | undefined, iteratee?: ObjectIterator<T, any>): T | null | undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.forOwnRight
         */
        forOwnRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.forOwnRight
         */
        forOwnRight(iteratee?: ObjectIterator<TValue, any>): this;
    }
    interface LoDashStatic {
        /**
         * @see _.functions
         */
        functions(object: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.functions
         */
        functions(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.functions
         */
        functions(): CollectionChain<string>;
    }
    interface LoDashStatic {
        /**
         * @see _.functionsIn
         */
        functionsIn<T extends {}>(object: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.functionsIn
         */
        functionsIn(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.functionsIn
         */
        functionsIn(): CollectionChain<string>;
    }
    interface LoDashStatic {
        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(object: TObject, path: TKey | [TKey]): TObject[TKey];
        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject>(object: TObject | null | undefined, path: TKey | [TKey]): TObject[TKey] | undefined;
        /**
         * @see _.get
         */
        get<TObject extends object, TKey extends keyof TObject, TDefault>(object: TObject | null | undefined, path: TKey | [TKey], defaultValue: TDefault): Exclude<TObject[TKey], undefined> | TDefault;
        /**
         * @see _.get
         */
        get<T>(object: NumericDictionary<T>, path: number): T;
        /**
         * @see _.get
         */
        get<T>(object: NumericDictionary<T> | null | undefined, path: number): T | undefined;
        /**
         * @see _.get
         */
        get<T, TDefault>(object: NumericDictionary<T> | null | undefined, path: number, defaultValue: TDefault): T | TDefault;
        /**
         * @see _.get
         */
        get<TDefault>(object: null | undefined, path: PropertyPath, defaultValue: TDefault): TDefault;
        /**
         * @see _.get
         */
        get(object: null | undefined, path: PropertyPath): undefined;
        /**
         * @see _.get
         */
        get(object: any, path: PropertyPath, defaultValue?: any): any;
    }
    interface String {
        /**
         * @see _.get
         */
        get(path: number | number[]): string;
        /**
         * @see _.get
         */
        get(path: number | number[], defaultValue: string): string;
    }
    interface Object<T> {
        /**
         * @see _.get
         */
        get<TKey extends keyof T>(path: TKey | [TKey]): T[TKey];
        /**
         * @see _.get
         */
        get<TKey extends keyof T, TDefault>(path: TKey | [TKey], defaultValue: TDefault): Exclude<T[TKey], undefined> | TDefault;
        /**
         * @see _.get
         */
        get(path: PropertyPath, defaultValue?: any): any;
    }
    interface Collection<T> {
        /**
         * @see _.get
         */
        get(path: number): T;
        /**
         * @see _.get
         */
        get<TDefault>(path: number, defaultValue: TDefault): T | TDefault;
    }
    interface StringChain {
        /**
         * @see _.get
         */
        get(path: number | number[]): StringChain;
        /**
         * @see _.get
         */
        get(path: number | number[], defaultValue: string): StringChain;
    }
    interface ObjectChain<T> {
        /**
         * @see _.get
         */
        get<TKey extends keyof T>(path: TKey | [TKey]): ExpChain<T[TKey]>;
        /**
         * @see _.get
         */
        get<TKey extends keyof T, TDefault>(path: TKey | [TKey], defaultValue: TDefault): ExpChain<Exclude<T[TKey], undefined> | TDefault>;
        /**
         * @see _.get
         */
        get(path: PropertyPath, defaultValue?: any): LoDashExplicitWrapper<any>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.get
         */
        get(path: number): ExpChain<T>;
        /**
         * @see _.get
         */
        get<TDefault>(path: number, defaultValue: TDefault): ExpChain<T | TDefault>;
    }
    interface LoDashStatic {
        /**
         * @see _.has
         */
        has<T>(object: T, path: PropertyPath): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.has
         */
        has(path: PropertyPath): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.has
         */
        has(path: PropertyPath): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
         * @see _.hasIn
         */
        hasIn<T>(object: T, path: PropertyPath): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.hasIn
         */
        hasIn(path: PropertyPath): boolean;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.hasIn
         */
        hasIn(path: PropertyPath): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
         * @see _.invert
         */
        invert(object: object): Dictionary<string>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.invert
         */
        invert(): Object<Dictionary<string>>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.invert
         */
        invert(): ObjectChain<Dictionary<string>>;
    }
    interface LoDashStatic {
        /**
         * @see _.invertBy
         */
        invertBy<T>(object:  Dictionary<T> | NumericDictionary<T> | null | undefined, interatee?: ValueIteratee<T>): Dictionary<string[]>;
        /**
         * @see _.invertBy
         */
        invertBy<T extends object>(object: T | null | undefined, interatee?: ValueIteratee<T[keyof T]>): Dictionary<string[]>;
    }
    interface String {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<string>): Object<Dictionary<string[]>>;
    }
    interface Collection<T> {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<T>): Object<Dictionary<string[]>>;
    }
    interface Object<T> {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<T[keyof T]>): Object<Dictionary<string[]>>;
    }
    interface StringChain {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<string>): ObjectChain<Dictionary<string[]>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<T>): ObjectChain<Dictionary<string[]>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.invertBy
         */
        invertBy(iteratee?: ValueIteratee<T[keyof T]>): ObjectChain<Dictionary<string[]>>;
    }
    interface LoDashStatic {
        /**
         * @see _.invoke
         */
        invoke(object: any, path: PropertyPath, ...args: any[]): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.invoke
         */
        invoke(path: PropertyPath, ...args: any[]): any;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.invoke
         */
        invoke(path: PropertyPath, ...args: any[]): LoDashExplicitWrapper<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.keys
         */
        keys(object?: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.keys
         */
        keys(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.keys
         */
        keys(): CollectionChain<string>;
    }
    interface LoDashStatic {
        /**
         * @see _.keysIn
         */
        keysIn(object?: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.keysIn
         */
        keysIn(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.keysIn
         */
        keysIn(): CollectionChain<string>;
    }
    interface LoDashStatic {
        /**
         * @see _.mapKeys
         */
        mapKeys<T>(object: List<T> | null | undefined, iteratee?: ListIteratee<T>): Dictionary<T>;
        /**
         * @see _.mapKeys
         */
        mapKeys<T extends object>(object: T | null | undefined, iteratee?: ObjectIteratee<T>): Dictionary<T[keyof T]>;
    }
    interface Collection<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys(iteratee?: ListIteratee<T>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys(iteratee?: ObjectIteratee<T>): Object<Dictionary<T[keyof T]>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys(iteratee?: ListIteratee<T>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.mapKeys
         */
        mapKeys(iteratee?: ObjectIteratee<T>): ObjectChain<Dictionary<T[keyof T]>>;
    }
    interface LoDashStatic {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(obj: string | null | undefined, callback: StringIterator<TResult>): NumericDictionary<TResult>;
        /**
         * @see _.mapValues
         */
        mapValues<T, TResult>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, callback: DictionaryIterator<T, TResult>): Dictionary<TResult>;
        /**
         * @see _.mapValues
         */
        mapValues<T extends object, TResult>(obj: T | null | undefined, callback: ObjectIterator<T, TResult>): { [P in keyof T]: TResult };
        /**
         * @see _.mapValues
         */
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: object): Dictionary<boolean>;
        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T | null | undefined, iteratee: object): { [P in keyof T]: boolean };
        /**
         * @see _.mapValues
         */
        mapValues<T, TKey extends keyof T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: TKey): Dictionary<T[TKey]>;
        /**
         * @see _.mapValues
         */
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined, iteratee: string): Dictionary<any>;
        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T | null | undefined, iteratee: string): { [P in keyof T]: any };
        /**
         * @see _.mapValues
         */
        mapValues(obj: string | null | undefined): NumericDictionary<string>;
        /**
         * @see _.mapValues
         */
        mapValues<T>(obj: Dictionary<T> | NumericDictionary<T> | null | undefined): Dictionary<T>;
        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T): T;
        /**
         * @see _.mapValues
         */
        mapValues<T extends object>(obj: T | null | undefined): PartialObject<T>;
    }
    interface String {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: StringIterator<TResult>): Object<NumericDictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues(): Object<NumericDictionary<string>>;
    }
    interface Collection<T> {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: DictionaryIterator<T, TResult>): Object<Dictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues<TKey extends keyof T>(iteratee: TKey): Object<Dictionary<T[TKey]>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: object): Object<Dictionary<boolean>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: string): Object<Dictionary<any>>;
        /**
         * @see _.mapValues
         */
        mapValues(): Object<Dictionary<T>>;
    }
    interface Object<T> {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: ObjectIterator<T, TResult>): Object<{ [P in keyof T]: TResult }>;
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: DictionaryIterator<T[keyof T], TResult>): Object<Dictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: object): Object<{ [P in keyof T]: boolean }>;
        /**
         * @see _.mapValues
         */
        mapValues<TKey extends keyof T[keyof T]>(iteratee: TKey): Object<Dictionary<T[keyof T][TKey]>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: string): Object<{ [P in keyof T]: any }>;
        /**
         * @see _.mapValues
         */
        mapValues(): Object<T>;
    }
    interface StringChain {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: StringIterator<TResult>): ObjectChain<NumericDictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues(): ObjectChain<NumericDictionary<string>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: DictionaryIterator<T, TResult>): ObjectChain<Dictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues<TKey extends keyof T>(iteratee: TKey): ObjectChain<Dictionary<T[TKey]>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: object): ObjectChain<Dictionary<boolean>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: string): ObjectChain<Dictionary<any>>;
        /**
         * @see _.mapValues
         */
        mapValues(): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: ObjectIterator<T, TResult>): ObjectChain<{ [P in keyof T]: TResult }>;
        /**
         * @see _.mapValues
         */
        mapValues<TResult>(callback: DictionaryIterator<T[keyof T], TResult>): ObjectChain<Dictionary<TResult>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: object): ObjectChain<{ [P in keyof T]: boolean }>;
        /**
         * @see _.mapValues
         */
        mapValues<TKey extends keyof T[keyof T]>(iteratee: TKey): ObjectChain<Dictionary<T[keyof T][TKey]>>;
        /**
         * @see _.mapValues
         */
        mapValues(iteratee: string): ObjectChain<{ [P in keyof T]: any }>;
        /**
         * @see _.mapValues
         */
        mapValues(): ObjectChain<T>;
    }
    interface LoDashStatic {
        /**
         * @see _.merge
         */
        merge<TObject, TSource>(object: TObject, source: TSource): TObject & TSource;
        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2): TObject & TSource1 & TSource2;
        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.merge
         */
        merge<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.merge
         */
        merge(object: any, ...otherArgs: any[]): any;
    }
    interface Object<T> {
        /**
         * @see _.merge
         */
        merge<TSource>(source: TSource): Object<T & TSource>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): Object<T & TSource1 & TSource2>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.merge
         */
        merge(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.merge
         */
        merge<TSource>(source: TSource): ObjectChain<T & TSource>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.merge
         */
        merge<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.merge
         */
        merge(...otherArgs: any[]): ObjectChain<any>;
    }
    type MergeWithCustomizer = { bivariantHack(value: any, srcValue: any, key: string, object: any, source: any): any; }["bivariantHack"];
    // TODO: Probably should just put all these methods on Object and forget about it.
    // oh, except for Collection<any> I GUESS
    interface LoDashStatic {
        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource>(object: TObject, source: TSource, customizer: MergeWithCustomizer): TObject & TSource;
        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2>(object: TObject, source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2;
        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2, TSource3>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2 & TSource3;
        /**
         * @see _.mergeWith
         */
        mergeWith<TObject, TSource1, TSource2, TSource3, TSource4>(object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): TObject & TSource1 & TSource2 & TSource3 & TSource4;
        /**
         * @see _.mergeWith
         */
        mergeWith(object: any, ...otherArgs: any[]): any;
    }
    interface Object<T> {
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): Object<T & TSource>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): Object<T & TSource1 & TSource2>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): Object<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): Object<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.mergeWith
         */
        mergeWith(...otherArgs: any[]): Object<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource>(source: TSource, customizer: MergeWithCustomizer): ObjectChain<T & TSource>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2>(source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer): ObjectChain<T & TSource1 & TSource2>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3>;
        /**
         * @see _.mergeWith
         */
        mergeWith<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer): ObjectChain<T & TSource1 & TSource2 & TSource3 & TSource4>;
        /**
         * @see _.mergeWith
         */
        mergeWith(...otherArgs: any[]): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.omit
         */
        omit<T extends object, K extends keyof T>(object: T | null | undefined, ...paths: Array<Many<K>>): Omit<T, K>;
        /**
         * @see _.omit
         */
        omit<T extends object>(object: T | null | undefined, ...paths: Array<Many<PropertyName>>): PartialObject<T>;
    }
    interface Collection<T> {
        /**
         * @see _.omit
         */
        omit(...paths: Array<Many<PropertyName>>): Collection<T>;
    }
    interface Object<T> {
        /**
         * @see _.omit
         */
        omit<K extends keyof T>(...paths: Array<Many<K>>): Object<Omit<T, K>>;
        /**
         * @see _.omit
         */
        omit(...paths: Array<Many<PropertyName | IterateeShorthand<T>>>): Object<PartialObject<T>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.omit
         */
        omit(...paths: Array<Many<PropertyName>>): CollectionChain<T>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.omit
         */
        omit<K extends keyof T>(...paths: Array<Many<K>>): ObjectChain<Omit<T, K>>;
        /**
         * @see _.omit
         */
        omit(...paths: Array<Many<PropertyName>>): ObjectChain<PartialObject<T>>;
    }
    interface LoDashStatic {
        /**
         * @see _.omitBy
         */
        omitBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
        /**
         * @see _.omitBy
         */
        omitBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
        /**
         * @see _.omitBy
         */
        omitBy<T extends object>(object: T | null | undefined, predicate: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;
    }
    interface Collection<T> {
        /**
         * @see _.omitBy
         */
        omitBy(predicate?: ValueKeyIteratee<T>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        /**
         * @see _.omitBy
         */
        omitBy(predicate: ValueKeyIteratee<T[keyof T]>): Object<PartialObject<T>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.omitBy
         */
        omitBy(predicate?: ValueKeyIteratee<T>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.omitBy
         */
        omitBy(predicate: ValueKeyIteratee<T[keyof T]>): ObjectChain<PartialObject<T>>;
    }
    interface LoDashStatic {
        /**
         * @see _.pick
         */
        pick<T extends object, U extends keyof T>(object: T, ...props: Array<Many<U>>): Pick<T, U>;
        /**
         * @see _.pick
         */
        pick<T>(object: T | null | undefined, ...props: PropertyPath[]): PartialDeep<T>;
    }
    interface Object<T> {
        /**
         * @see _.pick
         */
        pick<U extends keyof T>(...props: Array<Many<U>>): Object<Pick<T, U>>;
        /**
         * @see _.pick
         */
        pick(...props: PropertyPath[]): Object<PartialObject<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.pick
         */
        pick<U extends keyof T>(...props: Array<Many<U>>): ObjectChain<Pick<T, U>>;
        /**
         * @see _.pick
         */
        pick(...props: PropertyPath[]): ObjectChain<PartialObject<T>>;
    }
    interface LoDashStatic {
        /**
         * @see _.pickBy
         */
        pickBy<T, S extends T>(object: Dictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): Dictionary<S>;
        /**
         * @see _.pickBy
         */
        pickBy<T, S extends T>(object: NumericDictionary<T> | null | undefined, predicate: ValueKeyIterateeTypeGuard<T, S>): NumericDictionary<S>;
        /**
         * @see _.pickBy
         */
        pickBy<T>(object: Dictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): Dictionary<T>;
        /**
         * @see _.pickBy
         */
        pickBy<T>(object: NumericDictionary<T> | null | undefined, predicate?: ValueKeyIteratee<T>): NumericDictionary<T>;
        /**
         * @see _.pickBy
         */
        pickBy<T extends object>(object: T | null | undefined, predicate?: ValueKeyIteratee<T[keyof T]>): PartialObject<T>;
    }
    interface Collection<T> {
        /**
         * @see _.pickBy
         */
        pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): Object<Dictionary<S>>;
        /**
         * @see _.pickBy
         */
        pickBy(predicate?: ValueKeyIteratee<T>): Object<Dictionary<T>>;
    }
    interface Object<T> {
        /**
         * @see _.pickBy
         */
        pickBy<S extends T[keyof T]>(predicate: ValueKeyIterateeTypeGuard<T[keyof T], S>): Object<NumericDictionary<unknown> extends T ? NumericDictionary<S> : Dictionary<S>>;
        /**
         * @see _.pickBy
         */
        pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): Object<PartialObject<T>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.pickBy
         */
        pickBy<S extends T>(predicate: ValueKeyIterateeTypeGuard<T, S>): ObjectChain<Dictionary<S>>;
        /**
         * @see _.pickBy
         */
        pickBy(predicate?: ValueKeyIteratee<T>): ObjectChain<Dictionary<T>>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.pickBy
         */
        pickBy<S extends T[keyof T]>(predicate: ValueKeyIterateeTypeGuard<T[keyof T], S>): ObjectChain<NumericDictionary<unknown> extends T ? NumericDictionary<S> : Dictionary<S>>;
        /**
         * @see _.pickBy
         */
        pickBy(predicate?: ValueKeyIteratee<T[keyof T]>): ObjectChain<PartialObject<T>>;
    }
    interface LoDashStatic {
        /**
         * @see _.result
         */
        result<TResult>(object: any, path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.result
         */
        result<TResult>(path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): TResult;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.result
         */
        result<TResult>(path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): ExpChain<TResult>;
    }
    interface LoDashStatic {
        /**
         * @see _.set
         */
        set<T extends object>(object: T, path: PropertyPath, value: any): T;
        /**
         * @see _.set
         */
        set<TResult>(object: object, path: PropertyPath, value: any): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.set
         */
        set(path: PropertyPath, value: any): this;
        /**
         * @see _.set
         */
        set<TResult>(path: PropertyPath, value: any): ImpChain<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.set
         */
        set(path: PropertyPath, value: any): this;
        /**
         * @see _.set
         */
        set<TResult>(path: PropertyPath, value: any): ExpChain<TResult>;
    }
    type SetWithCustomizer<T> = (nsValue: any, key: string, nsObject: T) => any;
    interface LoDashStatic {
        /**
         * @see _.setWith
         */
        setWith<T extends object>(object: T, path: PropertyPath, value: any, customizer?: SetWithCustomizer<T>): T;
        /**
         * @see _.setWith
         */
        setWith<T extends object, TResult>(object: T, path: PropertyPath, value: any, customizer?: SetWithCustomizer<T>): TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.setWith
         */
        setWith(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): this;
        /**
         * @see _.setWith
         */
        setWith<TResult>(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): ImpChain<TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.setWith
         */
        setWith(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): this;
        /**
         * @see _.setWith
         */
        setWith<TResult>(path: PropertyPath, value: any, customizer?: SetWithCustomizer<TValue>): ExpChain<TResult>;
    }
    interface LoDashStatic {
        /**
         * @see _.toPairs
         */
        toPairs<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        /**
         * @see _.toPairs
         */
        toPairs(object?: object): Array<[string, any]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        toPairs(): Collection<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPairs
         */
        toPairs(): CollectionChain<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashStatic {
        /**
         * @see _.toPairsIn
         */
        toPairsIn<T>(object?: Dictionary<T> | NumericDictionary<T>): Array<[string, T]>;
        /**
         * @see _.toPairsIn
         */
        toPairsIn(object?: object): Array<[string, any]>;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPairsIn
         */
        toPairsIn(): Collection<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPairsIn
         */
        toPairsIn(): CollectionChain<[string, TValue extends Dictionary<infer U> ? U : TValue extends NumericDictionary<infer V> ? V : any]>;
    }
    interface LoDashStatic {
        /**
         * @see _.transform
         */
        transform<T, TResult>(object: T[], iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): TResult;
        /**
         * @see _.transform
         */
        transform<T, TResult>(object: Dictionary<T>, iteratee: MemoVoidDictionaryIterator<T, TResult>, accumulator?: TResult): TResult;
        /**
         * @see _.transform
         */
        transform(object: any[]): any[];
        /**
         * @see _.transform
         */
        transform(object: object): Dictionary<any>;
    }
    interface Collection<T> {
        /**
         * @see _.transform
         */
        transform<TResult>(iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): ImpChain<TResult>;
        /**
         * @see _.transform
         */
        transform(): Collection<any>;
    }
    interface Object<T> {
        /**
         * @see _.transform
         */
        transform<TResult>(iteratee: MemoVoidDictionaryIterator<T[keyof T], TResult>, accumulator?: TResult): ImpChain<TResult>;
        /**
         * @see _.transform
         */
        transform(): ImpChain<T extends Dictionary<unknown> ? Dictionary<any> : T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.transform
         */
        transform<TResult>(iteratee: MemoVoidArrayIterator<T, TResult>, accumulator?: TResult): ExpChain<TResult>;
        /**
         * @see _.transform
         */
        transform(): CollectionChain<any>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.transform
         */
        transform<TResult>(iteratee: MemoVoidDictionaryIterator<T[keyof T], TResult>, accumulator?: TResult): ExpChain<TResult>;
        /**
         * @see _.transform
         */
        transform(): ExpChain<T extends Dictionary<unknown> ? Dictionary<any> : T>;
    }
    interface LoDashStatic {
        /**
         * @see _.unset
         */
        unset(object: any, path: PropertyPath): boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unset
         */
        unset(path: PropertyPath): Primitive<boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unset
         */
        unset(path: PropertyPath): PrimitiveChain<boolean>;
    }
    interface LoDashStatic {
        /**
         * @see _.update
         */
        update(object: object, path: PropertyPath, updater: (value: any) => any): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.update
         */
        update(path: PropertyPath, updater: (value: any) => any): Object<any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.update
         */
        update(path: PropertyPath, updater: (value: any) => any): ObjectChain<any>;
    }
    interface LoDashStatic {
        /**
         * @see _.updateWith
         */
        updateWith<T extends object>(object: T, path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): T;
        /**
         * @see _.updateWith
         */
        updateWith<T extends object, TResult>(object: T, path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): TResult;
    }
    interface Object<T> {
        /**
         * @see _.updateWith
         */
        updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): this;
        /**
         * @see _.updateWith
         */
        updateWith<TResult>(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): Object<TResult>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.updateWith
         */
        updateWith(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): this;
        /**
         * @see _.updateWith
         */
        updateWith<TResult>(path: PropertyPath, updater: (oldValue: any) => any, customizer?: SetWithCustomizer<T>): ObjectChain<TResult>;
    }
    interface LoDashStatic {
        /**
         * @see _.values
         */
        values<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[];
        /**
         * @see _.values
         */
        values<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
        /**
         * @see _.values
         */
        values(object: any): any[];
    }
    interface String {
        /**
         * @see _.values
         */
        values(): Collection<string>;
    }
    interface Object<T> {
        /**
         * @see _.values
         */
        values(): Collection<T[keyof T]>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.values
         */
        values(): CollectionChain<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.values
         */
        values(): CollectionChain<string>;
    }
    interface LoDashStatic {
        /**
         * @see _.valuesIn
         */
        valuesIn<T>(object: Dictionary<T> | NumericDictionary<T> | List<T> | null | undefined): T[];
        /**
         * @see _.valuesIn
         */
        valuesIn<T extends object>(object: T | null | undefined): Array<T[keyof T]>;
    }
    interface String {
        /**
         * @see _.valuesIn
         */
        valuesIn(): Collection<string>;
    }
    interface Object<T> {
        /**
         * @see _.valuesIn
         */
        valuesIn(): Collection<T[keyof T]>;
    }
    interface StringChain {
        /**
         * @see _.valuesIn
         */
        valuesIn(): CollectionChain<string>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.valuesIn
         */
        valuesIn(): CollectionChain<T[keyof T]>;
    }
}

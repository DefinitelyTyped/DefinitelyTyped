// Type definitions for Seamless-immutable 7.1
// Project: https://github.com/rtfeldman/seamless-immutable
// Definitions by: alex3165 <https://github.com/alex3165>
//                 Stepan Burguchev <https://github.com/xsburg>
//                 Geir Sagberg <https://github.com/geirsagberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export = SeamlessImmutable;

declare namespace SeamlessImmutable {
    type DeepPartial<T> = {
        [P in keyof T]?: DeepPartial<T[P]>;
    };

    interface MergeConfig {
        deep?: boolean;
        merger?(a: any, b: any, config: any): any;
    }

    interface Options {
        prototype?: any;
    }

    interface AsMutableOptions {
        deep: boolean;
    }

    interface ImmutableObjectMixin<T> {
        set<K extends keyof T>(property: K, value: T[K]): ImmutableObject<T>;
        set<TValue>(property: string, value: TValue): ImmutableObject<T>;

        setIn<K extends keyof T>(propertyPath: [ K ], value: T[K]): ImmutableObject<T>;
        setIn<K extends keyof T, L extends keyof T[K]>(propertyPath: [ K, L ], value: T[K][L]): ImmutableObject<T>;
        setIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(propertyPath: [ K, L, M ], value: T[K][L][M]): ImmutableObject<T>;
        setIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(
            propertyPath: [ K, L, M, N ], value: T[K][L][M][N]): ImmutableObject<T>;
        setIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(
            propertyPath: [ K, L, M, N, O ], value: T[K][L][M][N][O]): ImmutableObject<T>;
        setIn<TValue>(propertyPath: string[], value: TValue): ImmutableObject<T>;

        getIn<K extends keyof T>(propertyPath: [ K ]): Immutable<T[K]>;
        getIn<K extends keyof T>(propertyPath: [ K ], defaultValue: T[K]): Immutable<T[K]>;
        getIn<K extends keyof T, L extends keyof T[K]>(propertyPath: [ K, L ]): Immutable<T[K][L]>;
        getIn<K extends keyof T, L extends keyof T[K]>(propertyPath: [ K, L ], defaultValue: T[K][L]): Immutable<T[K][L]>;
        getIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(propertyPath: [ K, L, M ]): Immutable<T[K][L][M]>;
        getIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(propertyPath: [ K, L, M, N ]): Immutable<T[K][L][M][N]>;
        getIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(propertyPath: [ K, L, M, N ], defaultValue: T[K][L][M][N]): Immutable<T[K][L][M][N]>;
        getIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(
            propertyPath: [ K, L, M, N, O ]): Immutable<T[K][L][M][N][O]>;
        getIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(
            propertyPath: [ K, L, M, N, O ], defaultValue: T[K][L][M][N][O]): Immutable<T[K][L][M][N][O]>;
        getIn(propertyPath: string[]): Immutable<any>;
        getIn<TValue>(propertyPath: string[], defaultValue: TValue): Immutable<TValue>;

        asMutable(opts?: AsMutableOptions): T;

        merge(part: DeepPartial<T>, config?: MergeConfig): ImmutableObject<T>;

        update<K extends keyof T>(property: K, updaterFunction: (value: T[K], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        update<TValue>(property: string, updaterFunction: (value: TValue, ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;

        updateIn<K extends keyof T>(
            propertyPath: [ K ], updaterFunction: (value: T[K], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        updateIn<K extends keyof T, L extends keyof T[K]>(
            propertyPath: [ K, L ], updaterFunction: (value: T[K][L], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        updateIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(
            propertyPath: [ K, L, M ], updaterFunction: (value: T[K][L][M], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        updateIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(
            propertyPath: [ K, L, M, N ], updaterFunction: (value: T[K][L][M][N], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        updateIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(
            propertyPath: [ K, L, M, N, O ], updaterFunction: (value: T[K][L][M][N][O], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;
        updateIn<TValue>(propertyPath: string[], updaterFunction: (value: TValue, ...additionalParameters: any[]) => any, ...additionalArguments: any[]): ImmutableObject<T>;

        without<K extends keyof T>(property: K): ImmutableObject<T>;
        without<K extends keyof T>(...properties: K[]): ImmutableObject<T>;
        without<K extends keyof T>(filter: (value: T[K], key: K) => boolean): ImmutableObject<T>;
    }

    interface ImmutableArrayMixin<T> {
        asMutable(opts?: AsMutableOptions): T[];
        asObject(toKeyValue: (item: T) => [string, any]): ImmutableObject<any>;
        flatMap<TTarget>(mapFunction: (item: T) => TTarget[]): ImmutableArray<TTarget>;
    }

    type ImmutableObject<T> = T & ImmutableObjectMixin<T>;
    type ImmutableArray<T> = T[] & ImmutableArrayMixin<T>;
    type Immutable<T> = ImmutableObject<T> | ImmutableArray<T>;

    function from<T>(obj: T[], options?: Options): ImmutableArray<T>;
    function from<T>(obj: T, options?: Options): ImmutableObject<T>;

    function isImmutable(target: any): boolean;
    function ImmutableError(message: string): Error;
}

declare function SeamlessImmutable<T>(obj: T[], options?: SeamlessImmutable.Options): SeamlessImmutable.ImmutableArray<T>;
declare function SeamlessImmutable<T>(obj: T, options?: SeamlessImmutable.Options): SeamlessImmutable.ImmutableObject<T>;

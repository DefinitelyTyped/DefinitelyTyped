// Type definitions for Seamless-immutable 7.1
// Project: https://github.com/rtfeldman/seamless-immutable
// Definitions by: alex3165 <https://github.com/alex3165>
//                 Stepan Burguchev <https://github.com/xsburg>
//                 Geir Sagberg <https://github.com/geirsagberg>
//                 Richard Honor <https://github.com/RMHonor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = SeamlessImmutable;

declare namespace SeamlessImmutable {
    type DeepPartial<T> = {
        [P in keyof T]?: DeepPartial<T[P]>;
    };

    interface MergeConfig {
        deep?: boolean;
        merger?(a: any, b: any, config: any): any;
    }

    interface ReplaceConfig {
        deep: boolean;
    }

    interface Options {
        prototype?: any;
    }

    interface AsMutableOptions {
        deep: boolean;
    }

    interface ImmutableObjectMixin<T> {
        set<K extends keyof T>(property: K, value: T[K]): Immutable<T>;
        set<TValue>(property: string, value: TValue): Immutable<T>;

        setIn<K extends keyof T>(propertyPath: [ K ], value: T[K]): Immutable<T>;
        setIn<K extends keyof T, L extends keyof T[K]>(propertyPath: [ K, L ], value: T[K][L]): Immutable<T>;
        setIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(propertyPath: [ K, L, M ], value: T[K][L][M]): Immutable<T>;
        setIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(
            propertyPath: [ K, L, M, N ], value: T[K][L][M][N]): Immutable<T>;
        setIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(
            propertyPath: [ K, L, M, N, O ], value: T[K][L][M][N][O]): Immutable<T>;
        setIn<TValue>(propertyPath: string[], value: TValue): Immutable<T>;

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

        merge(part: DeepPartial<T>, config?: MergeConfig): Immutable<T>;

        update<K extends keyof T>(property: K, updaterFunction: (value: T[K], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): Immutable<T>;
        update<TValue>(property: string, updaterFunction: (value: TValue, ...additionalParameters: any[]) => any, ...additionalArguments: any[]): Immutable<T>;

        updateIn<K extends keyof T>(
            propertyPath: [ K ], updaterFunction: (value: T[K], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): Immutable<T>;
        updateIn<K extends keyof T, L extends keyof T[K]>(
            propertyPath: [ K, L ], updaterFunction: (value: T[K][L], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): Immutable<T>;
        updateIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(
            propertyPath: [ K, L, M ], updaterFunction: (value: T[K][L][M], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): Immutable<T>;
        updateIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(
            propertyPath: [ K, L, M, N ], updaterFunction: (value: T[K][L][M][N], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): Immutable<T>;
        updateIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M], O extends keyof T[K][L][M][N]>(
            propertyPath: [ K, L, M, N, O ], updaterFunction: (value: T[K][L][M][N][O], ...additionalParameters: any[]) => any, ...additionalArguments: any[]): Immutable<T>;
        updateIn<TValue>(propertyPath: string[], updaterFunction: (value: TValue, ...additionalParameters: any[]) => any, ...additionalArguments: any[]): Immutable<T>;

        without<K extends keyof T>(property: K): Immutable<T>;
        without<K extends keyof T>(...properties: K[]): Immutable<T>;
        without<K extends keyof T>(filter: (value: T[K], key: K) => boolean): Immutable<T>;

        replace<S>(valueObj: S, options?: ReplaceConfig): Immutable<S>;
    }

    interface ImmutableArrayMixin<T extends Array<T[0]>> {
        asMutable(opts?: AsMutableOptions): T;
        asObject(toKeyValue: (item: T[0]) => [string, any]): Immutable<object>;
        flatMap<TTarget>(mapFunction: (item: T[0]) => TTarget): Immutable<TTarget extends any[] ? TTarget : TTarget[]>;
    }

    type BaseImmutable<T> = (T extends any[] ? ImmutableArrayMixin<T> : ImmutableObjectMixin<T>) & T;

    type Immutable<T> = {
        readonly [P in keyof T]: T[P] extends object ? Immutable<T[P]> : T[P]
    } & BaseImmutable<T>;

    function from<T>(obj: T, options?: Options): Immutable<T>;

    function isImmutable(target: any): boolean;
    function ImmutableError(message: string): Error;

    function replace<T, S>(obj: Immutable<T>, valueObj: S, options?: ReplaceConfig): Immutable<S>;
}

declare function SeamlessImmutable<T>(obj: T, options?: SeamlessImmutable.Options): SeamlessImmutable.Immutable<T>;

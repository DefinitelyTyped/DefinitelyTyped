export = SeamlessImmutable;

declare namespace SeamlessImmutable {
    /** From type T, take all properties except those specified by K. */
    type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

    type DeepPartial<T> = {
        [P in keyof T]?: DeepPartial<T[P]>;
    };

    interface MergeConfig {
        deep?: boolean | undefined;
        mode?: "replace" | "merge" | undefined;
        merger?(a: any, b: any, config: any): any;
    }

    interface ReplaceConfig {
        deep: boolean;
    }

    interface Options {
        prototype?: any;
    }

    interface AsMutableOptions<TDeep extends boolean = boolean> {
        deep: TDeep;
    }

    interface ImmutableObjectMixin<T> {
        set<K extends keyof T>(property: K, value: T[K]): Immutable<T>;
        set<TValue>(property: string, value: TValue): Immutable<T>;

        setIn<K extends keyof T>(propertyPath: [K], value: T[K]): Immutable<T>;
        setIn<K extends keyof T, L extends keyof T[K]>(propertyPath: [K, L], value: T[K][L]): Immutable<T>;
        setIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(
            propertyPath: [K, L, M],
            value: T[K][L][M],
        ): Immutable<T>;
        setIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(
            propertyPath: [K, L, M, N],
            value: T[K][L][M][N],
        ): Immutable<T>;
        setIn<
            K extends keyof T,
            L extends keyof T[K],
            M extends keyof T[K][L],
            N extends keyof T[K][L][M],
            O extends keyof T[K][L][M][N],
        >(
            propertyPath: [K, L, M, N, O],
            value: T[K][L][M][N][O],
        ): Immutable<T>;
        setIn<TValue>(propertyPath: string[], value: TValue): Immutable<T>;

        getIn<K extends keyof T>(propertyPath: [K]): Immutable<T[K]>;
        getIn<K extends keyof T>(propertyPath: [K], defaultValue: T[K]): Immutable<T[K]>;
        getIn<K extends keyof T, L extends keyof T[K]>(propertyPath: [K, L]): Immutable<T[K][L]>;
        getIn<K extends keyof T, L extends keyof T[K]>(propertyPath: [K, L], defaultValue: T[K][L]): Immutable<T[K][L]>;
        getIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(
            propertyPath: [K, L, M],
        ): Immutable<T[K][L][M]>;
        getIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(
            propertyPath: [K, L, M, N],
        ): Immutable<T[K][L][M][N]>;
        getIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(
            propertyPath: [K, L, M, N],
            defaultValue: T[K][L][M][N],
        ): Immutable<T[K][L][M][N]>;
        getIn<
            K extends keyof T,
            L extends keyof T[K],
            M extends keyof T[K][L],
            N extends keyof T[K][L][M],
            O extends keyof T[K][L][M][N],
        >(
            propertyPath: [K, L, M, N, O],
        ): Immutable<T[K][L][M][N][O]>;
        getIn<
            K extends keyof T,
            L extends keyof T[K],
            M extends keyof T[K][L],
            N extends keyof T[K][L][M],
            O extends keyof T[K][L][M][N],
        >(
            propertyPath: [K, L, M, N, O],
            defaultValue: T[K][L][M][N][O],
        ): Immutable<T[K][L][M][N][O]>;
        getIn(propertyPath: string[]): Immutable<any>;
        getIn<TValue>(propertyPath: string[], defaultValue: TValue): Immutable<TValue>;

        asMutable(opts?: AsMutableOptions<false>): { [K in keyof T]: Immutable<T[K]> };
        asMutable(opts: AsMutableOptions<true>): T;
        asMutable(opts: AsMutableOptions): T | { [K in keyof T]: Immutable<T[K]> };

        merge(part: DeepPartial<T | Immutable<T>>, config?: MergeConfig): Immutable<T>;

        update<K extends keyof T>(
            property: K,
            updaterFunction: (value: Immutable<T[K]>, ...additionalParameters: any[]) => any,
            ...additionalArguments: any[]
        ): Immutable<T>;
        update<TValue>(
            property: string,
            updaterFunction: (value: Immutable<TValue>, ...additionalParameters: any[]) => any,
            ...additionalArguments: any[]
        ): Immutable<T>;

        updateIn<K extends keyof T>(
            propertyPath: [K],
            updaterFunction: (value: Immutable<T[K]>, ...additionalParameters: any[]) => any,
            ...additionalArguments: any[]
        ): Immutable<T>;
        updateIn<K extends keyof T, L extends keyof T[K]>(
            propertyPath: [K, L],
            updaterFunction: (value: Immutable<T[K][L]>, ...additionalParameters: any[]) => any,
            ...additionalArguments: any[]
        ): Immutable<T>;
        updateIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L]>(
            propertyPath: [K, L, M],
            updaterFunction: (value: Immutable<T[K][L][M]>, ...additionalParameters: any[]) => any,
            ...additionalArguments: any[]
        ): Immutable<T>;
        updateIn<K extends keyof T, L extends keyof T[K], M extends keyof T[K][L], N extends keyof T[K][L][M]>(
            propertyPath: [K, L, M, N],
            updaterFunction: (value: Immutable<T[K][L][M][N]>, ...additionalParameters: any[]) => any,
            ...additionalArguments: any[]
        ): Immutable<T>;
        updateIn<
            K extends keyof T,
            L extends keyof T[K],
            M extends keyof T[K][L],
            N extends keyof T[K][L][M],
            O extends keyof T[K][L][M][N],
        >(
            propertyPath: [K, L, M, N, O],
            updaterFunction: (value: Immutable<T[K][L][M][N][O]>, ...additionalParameters: any[]) => any,
            ...additionalArguments: any[]
        ): Immutable<T>;
        updateIn<TValue = any>(
            propertyPath: string[],
            updaterFunction: (value: TValue, ...additionalParameters: any[]) => any,
            ...additionalArguments: any[]
        ): Immutable<T>;

        without<K extends keyof T>(property: K): Immutable<T>;
        without<K extends keyof T>(...properties: K[]): Immutable<T>;
        without<K extends keyof T>(filter: (value: T[K], key: K) => boolean): Immutable<T>;

        replace<S>(valueObj: S, options?: ReplaceConfig): Immutable<S>;
    }
    type ImmutableObject<T> = ImmutableObjectMixin<T> & { readonly [P in keyof T]: Immutable<T[P]> };

    /** An ImmutableArray provides read-only access to the array elements, and provides functions (such as `map()`) that return immutable data structures. */
    type ImmutableArray<T> =
        & Readonly<ImmutableArray.Remaining<T>>
        & ImmutableArray.Additions<T>
        & ImmutableArray.Overrides<T>
        & ImmutableArray.ReadOnlyIndexer<T>;
    namespace ImmutableArray {
        /** New methods added by seamless-immutable. */
        interface Additions<T> {
            asMutable(opts?: AsMutableOptions<false>): Array<Immutable<T>>;
            asMutable(opts: AsMutableOptions<true>): T[];
            asMutable(opts: AsMutableOptions): T[] | Array<Immutable<T>>;

            asObject<U extends object = {}, K extends keyof U = keyof U>(
                toKeyValue: (item: T) => [K, U[K]],
            ): Immutable<U>;
            flatMap<TTarget>(mapFunction: (item: T) => TTarget): Immutable<TTarget extends any[] ? TTarget : TTarget[]>;
        }

        /** Custom implementation of the array functions, which return Immutable. */
        interface Overrides<T> {
            forEach(
                callbackfn: (value: Immutable<T>, index: number, array: Immutable<T[]>) => void,
                thisArg?: any,
            ): void;
            map<TTarget>(
                mapFuction: (item: Immutable<T>, index: number, array: Immutable<T[]>) => TTarget,
            ): Immutable<TTarget[]>;
            filter(filterFunction: (item: Immutable<T>, index: number) => boolean): Immutable<T[]>;
            slice(start?: number, end?: number): Immutable<T[]>;
            concat(...arr: Array<T | T[] | Immutable<T> | Array<Immutable<T>> | Immutable<T[]>>): Immutable<T[]>;
            reduce(
                callbackfn: (
                    previousValue: Immutable<T>,
                    currentValue: Immutable<T>,
                    currentIndex: number,
                    array: Immutable<T[]>,
                ) => T,
            ): Immutable<T>;
            reduce<TTarget>(
                callbackfn: (
                    previousValue: TTarget,
                    currentValue: Immutable<T>,
                    currentIndex: number,
                    array: Immutable<T[]>,
                ) => TTarget,
                initialValue?: TTarget,
            ): Immutable<TTarget>;
            reduceRight(
                callbackfn: (
                    previousValue: Immutable<T>,
                    currentValue: Immutable<T>,
                    currentIndex: number,
                    array: Immutable<T[]>,
                ) => T,
            ): Immutable<T>;
            reduceRight<TTarget>(
                callbackfn: (
                    previousValue: TTarget,
                    currentValue: Immutable<T>,
                    currentIndex: number,
                    array: Immutable<T[]>,
                ) => TTarget,
                initialValue?: TTarget,
            ): Immutable<TTarget>;
        }

        /** Merging this into Overrides breaks stuff, so this is split out */
        interface ReadOnlyIndexer<T> {
            readonly [key: number]: Immutable<T>;
        }

        /** These methods are banned by seamless-immutable. */
        type MutatingArrayMethods = Extract<
            keyof any[],
            "push" | "pop" | "sort" | "splice" | "shift" | "unshift" | "reverse" | number
        >;

        /** NOTE: These methods mutate data, but seamless-immutable does not ban them. We will ban them in our type definitions. */
        type AdditionalMutatingArrayMethods = Extract<keyof any[], "copyWithin" | "fill">;

        /** The remaining properties on Array<T>, after we remove the mutating functions and the wrapped non-mutating functions. */
        type Remaining<T> = Omit<T[], MutatingArrayMethods | AdditionalMutatingArrayMethods | keyof Overrides<any>>;
    }

    /** An ImmutableDate disables the use of mutating functions like `setDate` and `setFullYear`. */
    type ImmutableDate = ImmutableDate.Remaining & ImmutableDate.Additions;
    namespace ImmutableDate {
        /** New functions added by seamless-immutable. */
        interface Additions {
            asMutable(): Date;
        }

        // These methods are banned by seamless-immutable
        type MutatingDateMethods = Extract<
            keyof Date,
            | "setDate"
            | "setFullYear"
            | "setHours"
            | "setMilliseconds"
            | "setMinutes"
            | "setMonth"
            | "setSeconds"
            | "setTime"
            | "setUTCDate"
            | "setUTCFullYear"
            | "setUTCHours"
            | "setUTCMilliseconds"
            | "setUTCMinutes"
            | "setUTCMonth"
            | "setUTCSeconds"
            | "setYear"
        >;

        /** Only allows Date methods, which are the getters. */
        type Remaining = Omit<Date, MutatingDateMethods>;
    }

    type Immutable<T, O extends object = {}> = T extends Promise<infer U> ? Promise<Immutable.MakeImmutable<U, O>>
        : Immutable.MakeImmutable<T, O>;
    namespace Immutable {
        type AnyFunction = (...args: any[]) => any;

        type AlreadyImmutable<O extends object = {}> = ImmutableObject<O> | ImmutableArray<any> | ImmutableDate;

        type Primitive = boolean | number | string | symbol | AnyFunction | undefined | null;

        type CannotMakeImmutable<O extends object = {}> = AlreadyImmutable<O> | Primitive;

        type MakeImmutable<T, O extends object = {}> = T extends CannotMakeImmutable<O> ? T
            : T extends Array<infer Element> ? ImmutableArray<Element>
            : T extends Date ? ImmutableDate
            : ImmutableObject<T>;
    }

    function from<T>(obj: T, options?: Options): Immutable<T>;

    function isImmutable<T>(target: T | Immutable<T>): target is Immutable<T>;
    function ImmutableError(message: string): Error;

    function replace<T, S>(obj: Immutable<T>, valueObj: S, options?: ReplaceConfig): Immutable<S>;

    function asMutable<T>(obj: T[] | ImmutableArray<T>, opts?: AsMutableOptions<false>): T[];
    function asMutable<T>(obj: T[] | ImmutableArray<T>, opts: AsMutableOptions<true>): T[];
    function asMutable<T>(obj: T[] | ImmutableArray<T>, opts: AsMutableOptions): T[] | Array<Immutable<T>>;

    function asMutable<T>(
        obj: T | ImmutableObject<T>,
        opts?: AsMutableOptions<false>,
    ): { [K in keyof T]: Immutable<T[K]> };
    function asMutable<T>(obj: T | ImmutableObject<T>, opts: AsMutableOptions<true>): T;
    function asMutable<T>(obj: T | ImmutableObject<T>, opts: AsMutableOptions): T | { [K in keyof T]: Immutable<T[K]> };
}

declare function SeamlessImmutable<T>(obj: T, options?: SeamlessImmutable.Options): SeamlessImmutable.Immutable<T>;

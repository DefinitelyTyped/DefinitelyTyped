import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * @see _.attempt
         */
        attempt<TResult>(func: (...args: any[]) => TResult, ...args: any[]): TResult | Error;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.attempt
         */
        attempt<TResult>(...args: any[]): TResult | Error;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.attempt
         */
        attempt<TResult>(...args: any[]): ExpChain<TResult | Error>;
    }

    interface LoDashStatic {
        /**
         * @see _.bindAll
         */
        bindAll<T>(object: T, ...methodNames: Array<Many<string>>): T;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.bindAll
         */
        bindAll(...methodNames: Array<Many<string>>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.bindAll
         */
        bindAll(...methodNames: Array<Many<string>>): this;
    }

    interface LoDashStatic {
        /**
         * @see _.cond
         */
        cond<T, R>(pairs: Array<CondPair<T, R>>): (Target: T) => R;
    }

    type ConformsPredicateObject<T> = {
        [P in keyof T]: T[P] extends (arg: infer A) => any ? A : any
    };
    interface LoDashStatic {
        /**
         * @see _.conforms
         */
        conforms<T>(source: ConformsPredicateObject<T>): (value: T) => boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.conforms
         */
        conforms(): Function<(value: ConformsPredicateObject<TValue>) => boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.conforms
         */
        conforms(): FunctionChain<(value: ConformsPredicateObject<TValue>) => boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.constant
         */
        constant<T>(value: T): () => T;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.constant
         */
        constant(): Function<() => TValue>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.constant
         */
        constant(): FunctionChain<() => TValue>;
    }

    interface LoDashStatic {
        /**
         * @see _.defaultTo
         */
        defaultTo<T>(value: T | null | undefined, defaultValue: T): T;
        /**
         * @see _.defaultTo
         */
        defaultTo<T, TDefault>(value: T | null | undefined, defaultValue: TDefault): T | TDefault;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defaultTo
         */
        defaultTo(defaultValue: TValue): TValue;
        /**
         * @see _.defaultTo
         */
        defaultTo<TDefault>(defaultValue: TDefault): TValue extends null | undefined ? TDefault : TValue | TDefault;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.defaultTo
         */
        defaultTo(defaultValue: TValue): ExpChain<TValue>;
        /**
         * @see _.defaultTo
         */
        defaultTo<TDefault>(defaultValue: TDefault): ExpChain<TValue extends null | undefined ? TDefault : TValue | TDefault>;
    }

    interface LoDashStatic {
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2, R3, R4, R5, R6, R7>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (...args: A) => R7;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2, R3, R4, R5, R6, R7>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...func: Array<Many<(a: any) => any>>): (...args: A) => any;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2, R3, R4, R5, R6>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (...args: A) => R6;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2, R3, R4, R5>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (...args: A) => R5;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2, R3, R4>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (...args: A) => R4;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2, R3>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (...args: A) => R3;
        /**
         * @see _.flow
         */
        flow<A extends any[], R1, R2>(f1: (...args: A) => R1, f2: (a: R1) => R2): (...args: A) => R2;
        /**
         * @see _.flow
         */
        flow(...func: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
    interface Function<T extends (...arg: any) => any> {
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Function<(...args: Parameters<T>) => R7>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...func: Array<Many<(a: any) => any>>): Function<(...args: Parameters<T>) => any>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Function<(...args: Parameters<T>) => R6>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Function<(...args: Parameters<T>) => R5>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Function<(...args: Parameters<T>) => R4>;
        /**
         * @see _.flow
         */
        flow<R2, R3>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3): Function<(...args: Parameters<T>) => R3>;
        /**
         * @see _.flow
         */
        flow<R2>(f2: (a: ReturnType<T>) => R2): Function<(...args: Parameters<T>) => R2>;
        /**
         * @see _.flow
         */
        flow(...func: Array<Many<(...args: any[]) => any>>): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): FunctionChain<(...args: Parameters<T>) => R7>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...func: Array<Many<(a: any) => any>>): FunctionChain<(...args: Parameters<T>) => any>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5, R6>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): FunctionChain<(...args: Parameters<T>) => R6>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4, R5>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): FunctionChain<(...args: Parameters<T>) => R5>;
        /**
         * @see _.flow
         */
        flow<R2, R3, R4>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): FunctionChain<(...args: Parameters<T>) => R4>;
        /**
         * @see _.flow
         */
        flow<R2, R3>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3): FunctionChain<(...args: Parameters<T>) => R3>;
        /**
         * @see _.flow
         */
        flow<R2>(f2: (a: ReturnType<T>) => R2): FunctionChain<(...args: Parameters<T>) => R2>;
        /**
         * @see _.flow
         */
        flow(...func: Array<Many<(...args: any[]) => any>>): FunctionChain<(...args: any[]) => any>;
    }

    interface LoDashStatic {
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4, R5, R6, R7>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R7;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4, R5, R6>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R6;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4, R5>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R5;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R4;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R3;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2>(f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R2;
        /**
         * @see _.flowRight
         */
        flowRight(...func: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
    interface Function<T> {
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4, R5>(f6: (a: R5) => Parameters<T>["0"], f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4>(f5: (a: R4) => Parameters<T>["0"], f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3>(f4: (a: R3) => Parameters<T>["0"], f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2>(f3: (a: R2) => Parameters<T>["0"], f2: (a: R1) => R2, f1: (...args: A) => R1): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1>(f2: (a: R1) => Parameters<T>["0"], f1: (...args: A) => R1): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[]>(f1: (...args: A) => Parameters<T>["0"]): Function<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight(...func: Array<Many<(...args: any[]) => any>>): Function<(...args: any[]) => any>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4, R5>(f6: (a: R5) => Parameters<T>["0"], f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3, R4>(f5: (a: R4) => Parameters<T>["0"], f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2, R3>(f4: (a: R3) => Parameters<T>["0"], f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1, R2>(f3: (a: R2) => Parameters<T>["0"], f2: (a: R1) => R2, f1: (...args: A) => R1): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[], R1>(f2: (a: R1) => Parameters<T>["0"], f1: (...args: A) => R1): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight<A extends any[]>(f1: (...args: A) => Parameters<T>["0"]): FunctionChain<(...args: A) => ReturnType<T>>;
        /**
         * @see _.flowRight
         */
        flowRight(...func: Array<Many<(...args: any[]) => any>>): FunctionChain<(...args: any[]) => any>;
    }

    interface LoDashStatic {
        /**
         * @see _.identity
         */
        identity<T>(value: T): T;
        /**
         * @see _.identity
         */
        identity(): undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.identity
         */
        identity(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.identity
         */
        identity(): this;
    }

    interface LoDashStatic {
        /**
         * @see _.iteratee
         */
        iteratee<TFunction extends (...args: any[]) => any>(func: TFunction): TFunction;
        /**
         * @see _.iteratee
         */
        iteratee(func: string | object): (...args: any[]) => any;
    }
    interface Function<T extends (...args: any) => any> {
        /**
         * @see _.iteratee
         */
        iteratee(): Function<T>;
    }
    interface Collection<T> {
        /**
         * @see _.iteratee
         */
        iteratee(): Function<(o: object) => boolean>;
    }
    interface Object<T> {
        /**
         * @see _.iteratee
         */
        iteratee(): Function<(o: T) => boolean>;
    }
    interface String {
        /**
         * @see _.iteratee
         */
        iteratee(): Function<(o: object) => boolean>;
    }
    interface FunctionChain<T extends (...args: any) => any> {
        /**
         * @see _.iteratee
         */
        iteratee(): FunctionChain<T>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.iteratee
         */
        iteratee(): FunctionChain<(o: object) => boolean>;
    }
    interface ObjectChain<T> {
        /**
         * @see _.iteratee
         */
        iteratee(): FunctionChain<(o: T) => boolean>;
    }
    interface StringChain {
        /**
         * @see _.iteratee
         */
        iteratee(): FunctionChain<(o: object) => boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.matches
         */
        matches<T>(source: T): (value: any) => boolean;
        /**
         * @see _.matches
         */
        matches<T, V>(source: T): (value: V) => boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.matches
         */
        matches<V>(): Function<(value: V) => boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.matches
         */
        matches<V>(): FunctionChain<(value: V) => boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<T>(path: PropertyPath, srcValue: T): (value: any) => boolean;
        /**
         * @see _.matchesProperty
         */
        matchesProperty<T, V>(path: PropertyPath, srcValue: T): (value: V) => boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue>(srcValue: SrcValue): Function<(value: any) => boolean>;
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue, Value>(srcValue: SrcValue): Function<(value: Value) => boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue>(srcValue: SrcValue): FunctionChain<(value: any) => boolean>;
        /**
         * @see _.matchesProperty
         */
        matchesProperty<SrcValue, Value>(srcValue: SrcValue): FunctionChain<(value: Value) => boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.method
         */
        method(path: PropertyPath, ...args: any[]): (object: any) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.method
         */
        method(...args: any[]): Function<(object: any) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.method
         */
        method(...args: any[]): FunctionChain<(object: any) => any>;
    }

    interface LoDashStatic {
        /**
         * @see _.methodOf
         */
        methodOf(object: object, ...args: any[]): (path: PropertyPath) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.methodOf
         */
        methodOf(...args: any[]): LoDashImplicitWrapper<(path: PropertyPath) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.methodOf
         */
        methodOf(...args: any[]): LoDashExplicitWrapper<(path: PropertyPath) => any>;
    }

    interface MixinOptions {
        /**
         * @see _.chain
         */
        chain?: boolean;
    }
    interface LoDashStatic {
        /**
         * @see _.mixin
         */
        mixin<TObject>(object: TObject, source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): TObject;
        /**
         * @see _.mixin
         */
        mixin<TResult>(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): LoDashStatic;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mixin
         */
        mixin(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): this;
        /**
         * @see _.mixin
         */
        mixin(options?: MixinOptions): LoDashImplicitWrapper<LoDashStatic>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.mixin
         */
        mixin(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): this;
        /**
         * @see _.mixin
         */
        mixin(options?: MixinOptions): LoDashExplicitWrapper<LoDashStatic>;
    }

    interface LoDashStatic {
        /**
         * @see _.noConflict
         */
        noConflict(): typeof _;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.noConflict
         */
        noConflict(): typeof _;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.noConflict
         */
        noConflict(): LoDashExplicitWrapper<typeof _>;
    }

    interface LoDashStatic {
        /**
         * @see _.noop
         */
        noop(...args: any[]): void;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.noop
         */
        noop(...args: any[]): void;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.noop
         */
        noop(...args: any[]): PrimitiveChain<undefined>;
    }

    interface LoDashStatic {
        /**
         * @see _.nthArg
         */
        nthArg(n?: number): (...args: any[]) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.nthArg
         */
        nthArg(): Function<(...args: any[]) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.nthArg
         */
        nthArg(): FunctionChain<(...args: any[]) => any>;
    }

    interface LoDashStatic {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): (...args: any[]) => TResult[];
    }
    interface Collection<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): Function<(...args: any[]) => TResult[]>;
    }
    interface Function<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): Function<(...args: any[]) => Array<ReturnType<T> | TResult>>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): FunctionChain<(...args: any[]) => TResult[]>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.over
         */
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): FunctionChain<(...args: any[]) => Array<ReturnType<T> | TResult>>;
    }

    interface LoDashStatic {
        /**
         * @see _.overEvery
         */
        overEvery<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
    interface Collection<T> {
        /**
         * @see _.overEvery
         */
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): Function<(...args: TArgs[]) => boolean>;
    }
    interface Function<T> {
        /**
         * @see _.overEvery
         */
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): Function<(...args: Parameters<T> | TArgs[]) => boolean>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.overEvery
         */
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): FunctionChain<(...args:  TArgs[]) => boolean>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.overEvery
         */
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): FunctionChain<(...args: Parameters<T> | TArgs[]) => boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.overSome
         */
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
    interface Collection<T> {
        /**
         * @see _.overSome
         */
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): Function<(...args: TArgs[]) => boolean>;
    }
    interface Function<T> {
        /**
         * @see _.overSome
         */
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): Function<(...args: Parameters<T> | TArgs[]) => boolean>;
    }
    interface CollectionChain<T> {
        /**
         * @see _.overSome
         */
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): FunctionChain<(...args: TArgs[]) => boolean>;
    }
    interface FunctionChain<T> {
        /**
         * @see _.overSome
         */
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): FunctionChain<(...args: Parameters<T> | TArgs[]) => boolean>;
    }

    interface LoDashStatic {
        /**
         * @see _.property
         */
        property<TObj, TResult>(path: PropertyPath): (obj: TObj) => TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): Function<(obj: TObj) => TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.property
         */
        property<TObj, TResult>(): FunctionChain<(obj: TObj) => TResult>;
    }

    interface LoDashStatic {
        /**
         * @see _.propertyOf
         */
        propertyOf<T extends {}>(object: T): (path: PropertyPath) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.propertyOf
         */
        propertyOf(): LoDashImplicitWrapper<(path: PropertyPath) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.propertyOf
         */
        propertyOf(): LoDashExplicitWrapper<(path: PropertyPath) => any>;
    }

    interface LoDashStatic {
        /**
         * @see _.range
         */
        range(start: number, end?: number, step?: number): number[];
        /**
         * @see _.range
         */
        range(end: number, index: string | number, guard: object): number[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.range
         */
        range(end?: number, step?: number): Collection<number>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.range
         */
        range(end?: number, step?: number): CollectionChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.rangeRight
         */
        rangeRight(start: number, end?: number, step?: number): number[];
        /**
         * @see _.rangeRight
         */
        rangeRight(end: number, index: string | number, guard: object): number[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.rangeRight
         */
        rangeRight(end?: number, step?: number): Collection<number>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.rangeRight
         */
        rangeRight(end?: number, step?: number): CollectionChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.runInContext
         */
        runInContext(context?: object): LoDashStatic;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.runInContext
         */
        runInContext(): LoDashStatic;
    }

    interface LoDashStatic {
        /**
         * @see _.stubArray
         */
        stubArray(): any[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubArray
         */
        stubArray(): any[];
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubArray
         */
        stubArray(): CollectionChain<any>;
    }

    interface LoDashStatic {
        /**
         * @see _.stubFalse
         */
        stubFalse(): false;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubFalse
         */
        stubFalse(): false;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubFalse
         */
        stubFalse(): PrimitiveChain<false>;
    }

    interface LoDashStatic {
        /**
         * @see _.stubObject
         */
        stubObject(): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubObject
         */
        stubObject(): any;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubObject
         */
        stubObject(): LoDashExplicitWrapper<any>;
    }

    interface LoDashStatic {
        /**
         * @see _.stubString
         */
        stubString(): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubString
         */
        stubString(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubString
         */
        stubString(): StringChain;
    }

    interface LoDashStatic {
        /**
         * @see _.stubTrue
         */
        stubTrue(): true;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.stubTrue
         */
        stubTrue(): true;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.stubTrue
         */
        stubTrue(): PrimitiveChain<true>;
    }

    interface LoDashStatic {
        /**
         * @see _.times
         */
        times<TResult>(n: number, iteratee: (num: number) => TResult): TResult[];
        /**
         * @see _.times
         */
        times(n: number): number[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.times
         */
        times<TResult>(iteratee: (num: number) => TResult): TResult[];
        /**
         * @see _.times
         */
        times(): number[];
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.times
         */
        times<TResult>(iteratee: (num: number) => TResult): CollectionChain<TResult>;
        /**
         * @see _.times
         */
        times(): CollectionChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.toPath
         */
        toPath(value: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toPath
         */
        toPath(): Collection<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toPath
         */
        toPath(): CollectionChain<string>;
    }

    interface LoDashStatic {
        /**
         * @see _.uniqueId
         */
        uniqueId(prefix?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.uniqueId
         */
        uniqueId(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.uniqueId
         */
        uniqueId(): StringChain;
    }
}

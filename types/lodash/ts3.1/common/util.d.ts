import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        attempt<TResult>(func: (...args: any[]) => TResult, ...args: any[]): TResult | Error;
    }
    interface LoDashImplicitWrapper<TValue> {
        attempt<TResult>(...args: any[]): TResult | Error;
    }
    interface LoDashExplicitWrapper<TValue> {
        attempt<TResult>(...args: any[]): ExpChain<TResult | Error>;
    }

    interface LoDashStatic {
        bindAll<T>(object: T, ...methodNames: Array<Many<string>>): T;
    }
    interface LoDashImplicitWrapper<TValue> {
        bindAll(...methodNames: Array<Many<string>>): this;
    }
    interface LoDashExplicitWrapper<TValue> {
        bindAll(...methodNames: Array<Many<string>>): this;
    }

    interface LoDashStatic {
        cond<T, R>(pairs: Array<CondPair<T, R>>): (Target: T) => R;
    }

    type ConformsPredicateObject<T> = {
        [P in keyof T]: T[P] extends (arg: infer A) => any ? A : any
    };
    interface LoDashStatic {
        conforms<T>(source: ConformsPredicateObject<T>): (value: T) => boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        conforms(): ImpF<(value: ConformsPredicateObject<TValue>) => boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        conforms(): ExpF<(value: ConformsPredicateObject<TValue>) => boolean>;
    }

    interface LoDashStatic {
        constant<T>(value: T): () => T;
    }
    interface LoDashImplicitWrapper<TValue> {
        constant(): ImpF<() => TValue>;
    }
    interface LoDashExplicitWrapper<TValue> {
        constant(): ExpF<() => TValue>;
    }

    interface LoDashStatic {
        defaultTo<T>(value: T | null | undefined, defaultValue: T): T;
        defaultTo<T, TDefault>(value: T | null | undefined, defaultValue: TDefault): T | TDefault;
    }
    interface LoDashImplicitWrapper<TValue> {
        defaultTo(defaultValue: TValue): TValue;
        defaultTo<TDefault>(defaultValue: TDefault): TValue extends null | undefined ? TDefault : TValue | TDefault;
    }
    interface LoDashExplicitWrapper<TValue> {
        defaultTo(defaultValue: TValue): ExpChain<TValue>;
        defaultTo<TDefault>(defaultValue: TDefault): ExpChain<TValue extends null | undefined ? TDefault : TValue | TDefault>;
    }

    interface LoDashStatic {
        flow<A extends any[], R1, R2, R3, R4, R5, R6, R7>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (...args: A) => R7;
        flow<A extends any[], R1, R2, R3, R4, R5, R6, R7>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...func: Array<Many<(a: any) => any>>): (...args: A) => any;
        flow<A extends any[], R1, R2, R3, R4, R5, R6>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (...args: A) => R6;
        flow<A extends any[], R1, R2, R3, R4, R5>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (...args: A) => R5;
        flow<A extends any[], R1, R2, R3, R4>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (...args: A) => R4;
        flow<A extends any[], R1, R2, R3>(f1: (...args: A) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (...args: A) => R3;
        flow<A extends any[], R1, R2>(f1: (...args: A) => R1, f2: (a: R1) => R2): (...args: A) => R2;
        flow(...func: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
    interface ImpF<T extends (...arg: any) => any> {
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): ImpF<(...args: Parameters<T>) => R7>;
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...func: Array<Many<(a: any) => any>>): ImpF<(...args: Parameters<T>) => any>;
        flow<R2, R3, R4, R5, R6>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): ImpF<(...args: Parameters<T>) => R6>;
        flow<R2, R3, R4, R5>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): ImpF<(...args: Parameters<T>) => R5>;
        flow<R2, R3, R4>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): ImpF<(...args: Parameters<T>) => R4>;
        flow<R2, R3>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3): ImpF<(...args: Parameters<T>) => R3>;
        flow<R2>(f2: (a: ReturnType<T>) => R2): ImpF<(...args: Parameters<T>) => R2>;
        flow(...func: Array<Many<(...args: any[]) => any>>): ImpF<(...args: any[]) => any>;
    }
    interface ExpF<T> {
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): ExpF<(...args: Parameters<T>) => R7>;
        flow<R2, R3, R4, R5, R6, R7>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...func: Array<Many<(a: any) => any>>): ExpF<(...args: Parameters<T>) => any>;
        flow<R2, R3, R4, R5, R6>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): ExpF<(...args: Parameters<T>) => R6>;
        flow<R2, R3, R4, R5>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): ExpF<(...args: Parameters<T>) => R5>;
        flow<R2, R3, R4>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): ExpF<(...args: Parameters<T>) => R4>;
        flow<R2, R3>(f2: (a: ReturnType<T>) => R2, f3: (a: R2) => R3): ExpF<(...args: Parameters<T>) => R3>;
        flow<R2>(f2: (a: ReturnType<T>) => R2): ExpF<(...args: Parameters<T>) => R2>;
        flow(...func: Array<Many<(...args: any[]) => any>>): ExpF<(...args: any[]) => any>;
    }

    interface LoDashStatic {
        flowRight<A extends any[], R1, R2, R3, R4, R5, R6, R7>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R7;
        flowRight<A extends any[], R1, R2, R3, R4, R5, R6>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R6;
        flowRight<A extends any[], R1, R2, R3, R4, R5>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R5;
        flowRight<A extends any[], R1, R2, R3, R4>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R4;
        flowRight<A extends any[], R1, R2, R3>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R3;
        flowRight<A extends any[], R1, R2>(f2: (a: R1) => R2, f1: (...args: A) => R1): (...args: A) => R2;
        flowRight(...func: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
    interface ImpF<T> {
        flowRight<A extends any[], R1, R2, R3, R4, R5>(f6: (a: R5) => Parameters<T>["0"], f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): ImpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1, R2, R3, R4>(f5: (a: R4) => Parameters<T>["0"], f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): ImpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1, R2, R3>(f4: (a: R3) => Parameters<T>["0"], f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): ImpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1, R2>(f3: (a: R2) => Parameters<T>["0"], f2: (a: R1) => R2, f1: (...args: A) => R1): ImpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1>(f2: (a: R1) => Parameters<T>["0"], f1: (...args: A) => R1): ImpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[]>(f1: (...args: A) => Parameters<T>["0"]): ImpF<(...args: A) => ReturnType<T>>;
        flowRight(...func: Array<Many<(...args: any[]) => any>>): ImpF<(...args: any[]) => any>;
    }
    interface ExpF<T> {
        flowRight<A extends any[], R1, R2, R3, R4, R5>(f6: (a: R5) => Parameters<T>["0"], f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): ExpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1, R2, R3, R4>(f5: (a: R4) => Parameters<T>["0"], f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): ExpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1, R2, R3>(f4: (a: R3) => Parameters<T>["0"], f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): ExpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1, R2>(f3: (a: R2) => Parameters<T>["0"], f2: (a: R1) => R2, f1: (...args: A) => R1): ExpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1>(f2: (a: R1) => Parameters<T>["0"], f1: (...args: A) => R1): ExpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[]>(f1: (...args: A) => Parameters<T>["0"]): ExpF<(...args: A) => ReturnType<T>>;
        flowRight(...func: Array<Many<(...args: any[]) => any>>): ExpF<(...args: any[]) => any>;
    }

    interface LoDashStatic {
        identity<T>(value: T): T;
        identity(): undefined;
    }
    interface LoDashImplicitWrapper<TValue> {
        identity(): TValue;
    }
    interface LoDashExplicitWrapper<TValue> {
        identity(): this;
    }

    interface LoDashStatic {
        iteratee<TFunction extends (...args: any[]) => any>(func: TFunction): TFunction;
        iteratee(func: string | object): (...args: any[]) => any;
    }
    interface ImpF<T extends (...args: any) => any> {
        iteratee(): ImpF<T>;
    }
    interface ImpL<T> {
        iteratee(): ImpF<(o: object) => boolean>;
    }
    interface ImpO<T> {
        iteratee(): ImpF<(o: T) => boolean>;
    }
    interface ImpS {
        iteratee(): ImpF<(o: object) => boolean>;
    }
    interface ExpF<T extends (...args: any) => any> {
        iteratee(): ExpF<T>;
    }
    interface ExpL<T> {
        iteratee(): ExpF<(o: object) => boolean>;
    }
    interface ExpO<T> {
        iteratee(): ExpF<(o: T) => boolean>;
    }
    interface ExpS {
        iteratee(): ExpF<(o: object) => boolean>;
    }

    interface LoDashStatic {
        matches<T>(source: T): (value: any) => boolean;
        matches<T, V>(source: T): (value: V) => boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        matches<V>(): ImpF<(value: V) => boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        matches<V>(): ExpF<(value: V) => boolean>;
    }

    interface LoDashStatic {
        matchesProperty<T>(path: PropertyPath, srcValue: T): (value: any) => boolean;
        matchesProperty<T, V>(path: PropertyPath, srcValue: T): (value: V) => boolean;
    }
    interface LoDashImplicitWrapper<TValue> {
        matchesProperty<SrcValue>(srcValue: SrcValue): ImpF<(value: any) => boolean>;
        matchesProperty<SrcValue, Value>(srcValue: SrcValue): ImpF<(value: Value) => boolean>;
    }
    interface LoDashExplicitWrapper<TValue> {
        matchesProperty<SrcValue>(srcValue: SrcValue): ExpF<(value: any) => boolean>;
        matchesProperty<SrcValue, Value>(srcValue: SrcValue): ExpF<(value: Value) => boolean>;
    }

    interface LoDashStatic {
        method(path: PropertyPath, ...args: any[]): (object: any) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        method(...args: any[]): ImpF<(object: any) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        method(...args: any[]): ExpF<(object: any) => any>;
    }

    interface LoDashStatic {
        methodOf(object: object, ...args: any[]): (path: PropertyPath) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        methodOf(...args: any[]): LoDashImplicitWrapper<(path: PropertyPath) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        methodOf(...args: any[]): LoDashExplicitWrapper<(path: PropertyPath) => any>;
    }

    interface MixinOptions {
        chain?: boolean;
    }
    interface LoDashStatic {
        mixin<TObject>(object: TObject, source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): TObject;
        mixin<TResult>(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): LoDashStatic;
    }
    interface LoDashImplicitWrapper<TValue> {
        mixin(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): this;
        mixin(options?: MixinOptions): LoDashImplicitWrapper<LoDashStatic>;
    }
    interface LoDashExplicitWrapper<TValue> {
        mixin(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): this;
        mixin(options?: MixinOptions): LoDashExplicitWrapper<LoDashStatic>;
    }

    interface LoDashStatic {
        noConflict(): typeof _;
    }
    interface LoDashImplicitWrapper<TValue> {
        noConflict(): typeof _;
    }
    interface LoDashExplicitWrapper<TValue> {
        noConflict(): LoDashExplicitWrapper<typeof _>;
    }

    interface LoDashStatic {
        noop(...args: any[]): void;
    }
    interface LoDashImplicitWrapper<TValue> {
        noop(...args: any[]): void;
    }
    interface LoDashExplicitWrapper<TValue> {
        noop(...args: any[]): ExpU<undefined>;
    }

    interface LoDashStatic {
        nthArg(n?: number): (...args: any[]) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        nthArg(): ImpF<(...args: any[]) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        nthArg(): ExpF<(...args: any[]) => any>;
    }

    interface LoDashStatic {
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): (...args: any[]) => TResult[];
    }
    interface ImpL<T> {
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): ImpF<(...args: any[]) => TResult[]>;
    }
    interface ImpF<T> {
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): ImpF<(...args: any[]) => Array<ReturnType<T> | TResult>>;
    }
    interface ExpL<T> {
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): ExpF<(...args: any[]) => TResult[]>;
    }
    interface ExpF<T> {
        over<TResult>(...iteratees: Array<Many<(...args: any[]) => TResult>>): ExpF<(...args: any[]) => Array<ReturnType<T> | TResult>>;
    }

    interface LoDashStatic {
        overEvery<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
    interface ImpL<T> {
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ImpF<(...args: TArgs[]) => boolean>;
    }
    interface ImpF<T> {
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ImpF<(...args: Parameters<T> | TArgs[]) => boolean>;
    }
    interface ExpL<T> {
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ExpF<(...args:  TArgs[]) => boolean>;
    }
    interface ExpF<T> {
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ExpF<(...args: Parameters<T> | TArgs[]) => boolean>;
    }

    interface LoDashStatic {
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
    interface ImpL<T> {
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ImpF<(...args: TArgs[]) => boolean>;
    }
    interface ImpF<T> {
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ImpF<(...args: Parameters<T> | TArgs[]) => boolean>;
    }
    interface ExpL<T> {
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ExpF<(...args: TArgs[]) => boolean>;
    }
    interface ExpF<T> {
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ExpF<(...args: Parameters<T> | TArgs[]) => boolean>;
    }

    interface LoDashStatic {
        property<TObj, TResult>(path: PropertyPath): (obj: TObj) => TResult;
    }
    interface LoDashImplicitWrapper<TValue> {
        property<TObj, TResult>(): ImpF<(obj: TObj) => TResult>;
    }
    interface LoDashExplicitWrapper<TValue> {
        property<TObj, TResult>(): ExpF<(obj: TObj) => TResult>;
    }

    interface LoDashStatic {
        propertyOf<T extends {}>(object: T): (path: PropertyPath) => any;
    }
    interface LoDashImplicitWrapper<TValue> {
        propertyOf(): LoDashImplicitWrapper<(path: PropertyPath) => any>;
    }
    interface LoDashExplicitWrapper<TValue> {
        propertyOf(): LoDashExplicitWrapper<(path: PropertyPath) => any>;
    }

    interface LoDashStatic {
        range(start: number, end?: number, step?: number): number[];
        range(end: number, index: string | number, guard: object): number[];
    }
    interface LoDashImplicitWrapper<TValue> {
        range(end?: number, step?: number): ImpL<number>;
    }
    interface LoDashExplicitWrapper<TValue> {
        range(end?: number, step?: number): ExpL<number>;
    }

    interface LoDashStatic {
        rangeRight(start: number, end?: number, step?: number): number[];
        rangeRight(end: number, index: string | number, guard: object): number[];
    }
    interface LoDashImplicitWrapper<TValue> {
        rangeRight(end?: number, step?: number): ImpL<number>;
    }
    interface LoDashExplicitWrapper<TValue> {
        rangeRight(end?: number, step?: number): ExpL<number>;
    }

    interface LoDashStatic {
        runInContext(context?: object): LoDashStatic;
    }
    interface LoDashImplicitWrapper<TValue> {
        runInContext(): LoDashStatic;
    }

    interface LoDashStatic {
        stubArray(): any[];
    }
    interface LoDashImplicitWrapper<TValue> {
        stubArray(): any[];
    }
    interface LoDashExplicitWrapper<TValue> {
        stubArray(): ExpL<any>;
    }

    interface LoDashStatic {
        stubFalse(): false;
    }
    interface LoDashImplicitWrapper<TValue> {
        stubFalse(): false;
    }
    interface LoDashExplicitWrapper<TValue> {
        stubFalse(): ExpU<false>;
    }

    interface LoDashStatic {
        stubObject(): any;
    }
    interface LoDashImplicitWrapper<TValue> {
        stubObject(): any;
    }
    interface LoDashExplicitWrapper<TValue> {
        stubObject(): LoDashExplicitWrapper<any>;
    }

    interface LoDashStatic {
        stubString(): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        stubString(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        stubString(): ExpS;
    }

    interface LoDashStatic {
        stubTrue(): true;
    }
    interface LoDashImplicitWrapper<TValue> {
        stubTrue(): true;
    }
    interface LoDashExplicitWrapper<TValue> {
        stubTrue(): ExpU<true>;
    }

    interface LoDashStatic {
        times<TResult>(n: number, iteratee: (num: number) => TResult): TResult[];
        times(n: number): number[];
    }
    interface LoDashImplicitWrapper<TValue> {
        times<TResult>(iteratee: (num: number) => TResult): TResult[];
        times(): number[];
    }
    interface LoDashExplicitWrapper<TValue> {
        times<TResult>(iteratee: (num: number) => TResult): ExpL<TResult>;
        times(): ExpL<number>;
    }

    interface LoDashStatic {
        toPath(value: any): string[];
    }
    interface LoDashImplicitWrapper<TValue> {
        toPath(): ImpL<string>;
    }
    interface LoDashExplicitWrapper<TValue> {
        toPath(): ExpL<string>;
    }

    interface LoDashStatic {
        uniqueId(prefix?: string): string;
    }
    interface LoDashImplicitWrapper<TValue> {
        uniqueId(): string;
    }
    interface LoDashExplicitWrapper<TValue> {
        uniqueId(): ExpS;
    }
}

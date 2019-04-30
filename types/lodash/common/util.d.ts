import _ = require("../index");
declare module "../index" {
    interface Stat {
        attempt<TResult>(func: (...args: any[]) => TResult, ...args: any[]): TResult | Error;
    }
    interface Imp<TValue> {
        attempt<TResult>(...args: any[]): TResult | Error;
    }
    interface Exp<TValue> {
        attempt<TResult>(...args: any[]): Exp<TResult | Error>;
    }

    interface Stat {
        bindAll<T>(object: T, ...methodNames: Array<Many<string>>): T;
    }
    interface Imp<TValue> {
        bindAll(...methodNames: Array<Many<string>>): this;
    }
    interface Exp<TValue> {
        bindAll(...methodNames: Array<Many<string>>): this;
    }

    interface Stat {
        cond<T, R>(pairs: Array<CondPair<T, R>>): (Target: T) => R;
    }

    type ConformsPredicateObject<T> = {
        [P in keyof T]?: (val: T[P]) => boolean;
    };
    interface Stat {
        conforms<T>(source: ConformsPredicateObject<T>): (value: T) => boolean;
    }
    interface Imp<TValue> {
        conforms<T>(this: Imp<ConformsPredicateObject<T>>): Imp<(value: T) => boolean>;
    }
    interface Exp<TValue> {
        conforms<T>(this: Exp<ConformsPredicateObject<T>>): Exp<(value: T) => boolean>;
    }

    interface Stat {
        constant<T>(value: T): () => T;
    }
    interface Imp<TValue> {
        constant(): Imp<() => TValue>;
    }
    interface Exp<TValue> {
        constant(): Exp<() => TValue>;
    }

    interface Stat {
        defaultTo<T>(value: T | null | undefined, defaultValue: T): T;
        defaultTo<T, TDefault>(value: T | null | undefined, defaultValue: TDefault): T | TDefault;
    }
    interface Imp<TValue> {
        defaultTo(defaultValue: TValue): TValue;
        defaultTo<TDefault>(defaultValue: TDefault): TValue | TDefault;
    }
    interface Exp<TValue> {
        defaultTo(defaultValue: TValue): Exp<TValue>;
        defaultTo<TDefault>(defaultValue: TDefault): Exp<TValue | TDefault>;
    }

    interface Stat {
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

    interface Stat {
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
        flowRight<A extends any[], R1>(f1: (...args: A) => Parameters<T>["0"]): ImpF<(...args: A) => ReturnType<T>>;
        flowRight(...func: Array<Many<(...args: any[]) => any>>): ImpF<(...args: any[]) => any>;
    }
    interface ExpF<T> {
        flowRight<A extends any[], R1, R2, R3, R4, R5>(f6: (a: R5) => Parameters<T>["0"], f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): ExpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1, R2, R3, R4>(f5: (a: R4) => Parameters<T>["0"], f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): ExpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1, R2, R3>(f4: (a: R3) => Parameters<T>["0"], f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: A) => R1): ExpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1, R2>(f3: (a: R2) => Parameters<T>["0"], f2: (a: R1) => R2, f1: (...args: A) => R1): ExpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1>(f2: (a: R1) => Parameters<T>["0"], f1: (...args: A) => R1): ExpF<(...args: A) => ReturnType<T>>;
        flowRight<A extends any[], R1>(f1: (...args: A) => Parameters<T>["0"]): ExpF<(...args: A) => ReturnType<T>>;
        flowRight(...func: Array<Many<(...args: any[]) => any>>): ExpF<(...args: any[]) => any>;
    }

    interface Stat {
        identity<T>(value: T): T;
        identity(): undefined;
    }
    interface Imp<TValue> {
        identity(): TValue;
    }
    interface Exp<TValue> {
        identity(): this;
    }

    interface Stat {
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

    interface Stat {
        matches<T>(source: T): (value: any) => boolean;
        matches<T, V>(source: T): (value: V) => boolean;
    }
    interface Imp<TValue> {
        matches<V>(): Imp<(value: V) => boolean>;
    }
    interface Exp<TValue> {
        matches<V>(): Exp<(value: V) => boolean>;
    }

    interface Stat {
        matchesProperty<T>(path: PropertyPath, srcValue: T): (value: any) => boolean;
        matchesProperty<T, V>(path: PropertyPath, srcValue: T): (value: V) => boolean;
    }
    interface Imp<TValue> {
        matchesProperty<SrcValue>(srcValue: SrcValue): Imp<(value: any) => boolean>;
        matchesProperty<SrcValue, Value>(srcValue: SrcValue): Imp<(value: Value) => boolean>;
    }
    interface Exp<TValue> {
        matchesProperty<SrcValue>(srcValue: SrcValue): Exp<(value: any) => boolean>;
        matchesProperty<SrcValue, Value>(srcValue: SrcValue): Exp<(value: Value) => boolean>;
    }

    interface Stat {
        method(path: PropertyPath, ...args: any[]): (object: any) => any;
    }
    interface Imp<TValue> {
        method(...args: any[]): Imp<(object: any) => any>;
    }
    interface Exp<TValue> {
        method(...args: any[]): Exp<(object: any) => any>;
    }

    interface Stat {
        methodOf(object: object, ...args: any[]): (path: PropertyPath) => any;
    }
    interface Imp<TValue> {
        methodOf(...args: any[]): Imp<(path: PropertyPath) => any>;
    }
    interface Exp<TValue> {
        methodOf(...args: any[]): Exp<(path: PropertyPath) => any>;
    }

    interface MixinOptions {
        chain?: boolean;
    }
    interface Stat {
        mixin<TObject>(object: TObject, source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): TObject;
        mixin<TResult>(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): Stat;
    }
    interface Imp<TValue> {
        mixin(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): this;
        mixin(options?: MixinOptions): Imp<Stat>;
    }
    interface Exp<TValue> {
        mixin(source: Dictionary<(...args: any[]) => any>, options?: MixinOptions): this;
        mixin(options?: MixinOptions): Exp<Stat>;
    }

    interface Stat {
        noConflict(): typeof _;
    }
    interface Imp<TValue> {
        noConflict(): typeof _;
    }
    interface Exp<TValue> {
        noConflict(): Exp<typeof _>;
    }

    interface Stat {
        noop(...args: any[]): void;
    }
    interface Imp<TValue> {
        noop(...args: any[]): void;
    }
    interface Exp<TValue> {
        noop(...args: any[]): Exp<undefined>;
    }

    interface Stat {
        nthArg(n?: number): (...args: any[]) => any;
    }
    interface Imp<TValue> {
        nthArg(): Imp<(...args: any[]) => any>;
    }
    interface Exp<TValue> {
        nthArg(): Exp<(...args: any[]) => any>;
    }

    interface Stat {
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

    interface Stat {
        overEvery<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
    interface ImpL<T> {
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ImpF<(...args: TArgs[]) => boolean[]>;
    }
    interface ImpF<T> {
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ImpF<(...args: Parameters<T> | TArgs[]) => boolean[]>;
    }
    interface ExpL<T> {
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ExpF<(...args:  TArgs[]) => boolean[]>;
    }
    interface ExpF<T> {
        overEvery<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ExpF<(...args: Parameters<T> | TArgs[]) => boolean[]>;
    }

    interface Stat {
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
    interface ImpL<T> {
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ImpF<(...args: TArgs[]) => boolean[]>;
    }
    interface ImpF<T> {
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ImpF<(...args: Parameters<T> | TArgs[]) => boolean[]>;
    }
    interface ExpL<T> {
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ExpF<(...args: TArgs[]) => boolean[]>;
    }
    interface ExpF<T> {
        overSome<TArgs>(...iteratees: Array<Many<(...args: TArgs[]) => boolean>>): ExpF<(...args: Parameters<T> | TArgs[]) => boolean[]>;
    }

    interface Stat {
        property<TObj, TResult>(path: PropertyPath): (obj: TObj) => TResult;
    }
    interface Imp<TValue> {
        property<TObj, TResult>(): Imp<(obj: TObj) => TResult>;
    }
    interface Exp<TValue> {
        property<TObj, TResult>(): Exp<(obj: TObj) => TResult>;
    }

    interface Stat {
        propertyOf<T extends {}>(object: T): (path: PropertyPath) => any;
    }
    interface Imp<TValue> {
        propertyOf(): Imp<(path: PropertyPath) => any>;
    }
    interface Exp<TValue> {
        propertyOf(): Exp<(path: PropertyPath) => any>;
    }

    interface Stat {
        range(start: number, end?: number, step?: number): number[];
        range(end: number, index: string | number, guard: object): number[];
    }
    interface Imp<TValue> {
        range(end?: number, step?: number): Imp<number[]>;
    }
    interface Exp<TValue> {
        range(end?: number, step?: number): Exp<number[]>;
    }

    interface Stat {
        rangeRight(start: number, end?: number, step?: number): number[];
        rangeRight(end: number, index: string | number, guard: object): number[];
    }
    interface Imp<TValue> {
        rangeRight(end?: number, step?: number): Imp<number[]>;
    }
    interface Exp<TValue> {
        rangeRight(end?: number, step?: number): Exp<number[]>;
    }

    interface Stat {
        runInContext(context?: object): Stat;
    }
    interface Imp<TValue> {
        runInContext(): Stat;
    }

    interface Stat {
        stubArray(): any[];
    }
    interface Imp<TValue> {
        stubArray(): any[];
    }
    interface Exp<TValue> {
        stubArray(): Exp<any[]>;
    }

    interface Stat {
        stubFalse(): false;
    }
    interface Imp<TValue> {
        stubFalse(): false;
    }
    interface Exp<TValue> {
        stubFalse(): Exp<false>;
    }

    interface Stat {
        stubObject(): any;
    }
    interface Imp<TValue> {
        stubObject(): any;
    }
    interface Exp<TValue> {
        stubObject(): Exp<any>;
    }

    interface Stat {
        stubString(): string;
    }
    interface Imp<TValue> {
        stubString(): string;
    }
    interface Exp<TValue> {
        stubString(): Exp<string>;
    }

    interface Stat {
        stubTrue(): true;
    }
    interface Imp<TValue> {
        stubTrue(): true;
    }
    interface Exp<TValue> {
        stubTrue(): Exp<true>;
    }

    interface Stat {
        times<TResult>(n: number, iteratee: (num: number) => TResult): TResult[];
        times(n: number): number[];
    }
    interface Imp<TValue> {
        times<TResult>(iteratee: (num: number) => TResult): TResult[];
        times(): number[];
    }
    interface Exp<TValue> {
        times<TResult>(iteratee: (num: number) => TResult): Exp<TResult[]>;
        times(): Exp<number[]>;
    }

    interface Stat {
        toPath(value: any): string[];
    }
    interface Imp<TValue> {
        toPath(): Imp<string[]>;
    }
    interface Exp<TValue> {
        toPath(): Exp<string[]>;
    }

    interface Stat {
        uniqueId(prefix?: string): string;
    }
    interface Imp<TValue> {
        uniqueId(): string;
    }
    interface Exp<TValue> {
        uniqueId(): Exp<string>;
    }
}

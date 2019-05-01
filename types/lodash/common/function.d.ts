import _ = require("../index");
declare module "../index" {
    interface Stat {
        after<TFunc extends (...args: any[]) => any>(n: number, func: TFunc): TFunc;
    }
    interface Imp<TValue> {
        after<TFunc extends (...args: any[]) => any>(func: TFunc): Imp<TFunc>;
    }
    interface Exp<TValue> {
        after<TFunc extends (...args: any[]) => any>(func: TFunc): Exp<TFunc>;
    }
    interface Stat {
        ary(func: (...args: any[]) => any, n?: number): (...args: any[]) => any;
    }
    interface Imp<TValue> {
        ary(n?: number): Imp<(...args: any[]) => any>;
    }
    interface Exp<TValue> {
        ary(n?: number): Exp<(...args: any[]) => any>;
    }
    interface Stat {
        before<TFunc extends (...args: any[]) => any>(n: number, func: TFunc): TFunc;
    }
    interface Imp<TValue> {
        before<TFunc extends (...args: any[]) => any>(func: TFunc): Imp<TFunc>;
    }
    interface Exp<TValue> {
        before<TFunc extends (...args: any[]) => any>(func: TFunc): Exp<TFunc>;
    }
    interface FunctionBind {
        placeholder: __;
        (func: (...args: any[]) => any, thisArg: any, ...partials: any[]): (...args: any[]) => any;
    }
    interface Stat {
        bind: FunctionBind;
    }
    interface Imp<TValue> {
        bind(thisArg: any, ...partials: any[]): Imp<(...args: any[]) => any>;
    }
    interface Exp<TValue> {
        bind(thisArg: any, ...partials: any[]): Exp<(...args: any[]) => any>;
    }
    interface FunctionBindKey {
        placeholder: __;
        (object: object, key: string, ...partials: any[]): (...args: any[]) => any;
    }
    interface Stat {
        bindKey: FunctionBindKey;
    }
    interface Imp<TValue> {
        bindKey(key: string, ...partials: any[]): Imp<(...args: any[]) => any>;
    }
    interface Exp<TValue> {
        bindKey(key: string, ...partials: any[]): Exp<(...args: any[]) => any>;
    }
    interface Curry {
        <T1, R>(func: (t1: T1) => R, arity?: number): CurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number): CurriedFunction2<T1, T2, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number): CurriedFunction3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number): CurriedFunction4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (func: (...args: any[]) => any, arity?: number): (...args: any[]) => any;
        placeholder: __;
    }
    interface Stat {
        curry: Curry;
    }
    interface CurriedFunction1<T1, R> {
        (): CurriedFunction1<T1, R>;
        (t1: T1): R;
    }
    interface CurriedFunction2<T1, T2, R> {
        (): CurriedFunction2<T1, T2, R>;
        (t1: T1): CurriedFunction1<T2, R>;
        (t1: __, t2: T2): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2): R;
    }
    interface CurriedFunction3<T1, T2, T3, R> {
        (): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1): CurriedFunction2<T2, T3, R>;
        (t1: __, t2: T2): CurriedFunction2<T1, T3, R>;
        (t1: T1, t2: T2): CurriedFunction1<T3, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction2<T1, T2, R>;
        (t1: T1, t2: __, t3: T3): CurriedFunction1<T2, R>;
        (t1: __, t2: T2, t3: T3): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }
    interface CurriedFunction4<T1, T2, T3, T4, R> {
        (): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1): CurriedFunction3<T2, T3, T4, R>;
        (t1: __, t2: T2): CurriedFunction3<T1, T3, T4, R>;
        (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction3<T1, T2, T4, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction2<T2, T4, R>;
        (t1: __, t2: T2, t3: T3): CurriedFunction2<T1, T4, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>;
        (t1: __, t2: __, t3: __, t4: T4): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1, t2: __, t3: __, t4: T4): CurriedFunction2<T2, T3, R>;
        (t1: __, t2: T2, t3: __, t4: T4): CurriedFunction2<T1, T3, R>;
        (t1: __, t2: __, t3: T3, t4: T4): CurriedFunction2<T1, T2, R>;
        (t1: T1, t2: T2, t3: __, t4: T4): CurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4): CurriedFunction1<T2, R>;
        (t1: __, t2: T2, t3: T3, t4: T4): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }
    interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): CurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
        (t1: __, t2: T2): CurriedFunction4<T1, T3, T4, T5, R>;
        (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
        (t1: __, t2: __, t3: T3): CurriedFunction4<T1, T2, T4, T5, R>;
        (t1: T1, t2: __, t3: T3): CurriedFunction3<T2, T4, T5, R>;
        (t1: __, t2: T2, t3: T3): CurriedFunction3<T1, T4, T5, R>;
        (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
        (t1: __, t2: __, t3: __, t4: T4): CurriedFunction4<T1, T2, T3, T5, R>;
        (t1: T1, t2: __, t3: __, t4: T4): CurriedFunction3<T2, T3, T5, R>;
        (t1: __, t2: T2, t3: __, t4: T4): CurriedFunction3<T1, T3, T5, R>;
        (t1: __, t2: __, t3: T3, t4: T4): CurriedFunction3<T1, T2, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: T4): CurriedFunction2<T3, T5, R>;
        (t1: T1, t2: __, t3: T3, t4: T4): CurriedFunction2<T2, T5, R>;
        (t1: __, t2: T2, t3: T3, t4: T4): CurriedFunction2<T1, T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>;
        (t1: __, t2: __, t3: __, t4: __, t5: T5): CurriedFunction4<T1, T2, T3, T4, R>;
        (t1: T1, t2: __, t3: __, t4: __, t5: T5): CurriedFunction3<T2, T3, T4, R>;
        (t1: __, t2: T2, t3: __, t4: __, t5: T5): CurriedFunction3<T1, T3, T4, R>;
        (t1: __, t2: __, t3: T3, t4: __, t5: T5): CurriedFunction3<T1, T2, T4, R>;
        (t1: __, t2: __, t3: __, t4: T4, t5: T5): CurriedFunction3<T1, T2, T3, R>;
        (t1: T1, t2: T2, t3: __, t4: __, t5: T5): CurriedFunction2<T3, T4, R>;
        (t1: T1, t2: __, t3: T3, t4: __, t5: T5): CurriedFunction2<T2, T4, R>;
        (t1: T1, t2: __, t3: __, t4: T4, t5: T5): CurriedFunction2<T2, T3, R>;
        (t1: __, t2: T2, t3: T3, t4: __, t5: T5): CurriedFunction2<T1, T4, R>;
        (t1: __, t2: T2, t3: __, t4: T4, t5: T5): CurriedFunction2<T1, T3, R>;
        (t1: __, t2: __, t3: T3, t4: T4, t5: T5): CurriedFunction2<T1, T2, R>;
        (t1: T1, t2: T2, t3: T3, t4: __, t5: T5): CurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: __, t4: T4, t5: T5): CurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4, t5: T5): CurriedFunction1<T2, R>;
        (t1: __, t2: T2, t3: T3, t4: T4, t5: T5): CurriedFunction1<T1, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }
    interface RightCurriedFunction1<T1, R> {
        (): RightCurriedFunction1<T1, R>;
        (t1: T1): R;
    }
    interface RightCurriedFunction2<T1, T2, R> {
        (): RightCurriedFunction2<T1, T2, R>;
        (t2: T2): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2): R;
    }
    interface RightCurriedFunction3<T1, T2, T3, R> {
        (): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: __): RightCurriedFunction2<T1, T3, R>;
        (t2: T2, t3: T3): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __, t3: __): RightCurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2, t3: __): RightCurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2, t3: T3): R;
    }
    interface RightCurriedFunction4<T1, T2, T3, T4, R> {
        (): RightCurriedFunction4<T1, T2, T3, T4, R>;
        (t4: T4): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3, t4: __): RightCurriedFunction3<T1, T2, T4, R>;
        (t3: T3, t4: T4): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: __, t4: __): RightCurriedFunction3<T1, T3, T4, R>;
        (t2: T2, t3: T3, t4: __): RightCurriedFunction2<T1, T4, R>;
        (t2: T2, t3: __, t4: T4): RightCurriedFunction2<T1, T3, R>;
        (t2: T2, t3: T3, t4: T4): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __, t3: __, t4: __): RightCurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2, t3: __, t4: __): RightCurriedFunction2<T3, T4, R>;
        (t1: T1, t2: __, t3: T3, t4: __): RightCurriedFunction2<T2, T4, R>;
        (t1: T1, t2: __, t3: __, t4: T4): RightCurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2, t3: T3, t4: __): RightCurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: __, t4: T4): RightCurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4): R;
    }
    interface RightCurriedFunction5<T1, T2, T3, T4, T5, R> {
        (): RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
        (t5: T5): RightCurriedFunction4<T1, T2, T3, T4, R>;
        (t4: T4, t5: __): RightCurriedFunction4<T1, T2, T3, T5, R>;
        (t4: T4, t5: T5): RightCurriedFunction3<T1, T2, T3, R>;
        (t3: T3, t4: __, t5: __): RightCurriedFunction4<T1, T2, T4, T5, R>;
        (t3: T3, t4: T4, t5: __): RightCurriedFunction3<T1, T2, T5, R>;
        (t3: T3, t4: __, t5: T5): RightCurriedFunction3<T1, T2, T4, R>;
        (t3: T3, t4: T4, t5: T5): RightCurriedFunction2<T1, T2, R>;
        (t2: T2, t3: __, t4: __, t5: __): RightCurriedFunction4<T1, T3, T4, T5, R>;
        (t2: T2, t3: T3, t4: __, t5: __): RightCurriedFunction3<T1, T4, T5, R>;
        (t2: T2, t3: __, t4: T4, t5: __): RightCurriedFunction3<T1, T3, T5, R>;
        (t2: T2, t3: __, t4: __, t5: T5): RightCurriedFunction3<T1, T3, T4, R>;
        (t2: T2, t3: T3, t4: T4, t5: __): RightCurriedFunction2<T1, T5, R>;
        (t2: T2, t3: T3, t4: __, t5: T5): RightCurriedFunction2<T1, T4, R>;
        (t2: T2, t3: __, t4: T4, t5: T5): RightCurriedFunction2<T1, T3, R>;
        (t2: T2, t3: T3, t4: T4, t5: T5): RightCurriedFunction1<T1, R>;
        (t1: T1, t2: __, t3: __, t4: __, t5: __): RightCurriedFunction4<T2, T3, T4, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: __, t5: __): RightCurriedFunction3<T3, T4, T5, R>;
        (t1: T1, t2: __, t3: T3, t4: __, t5: __): RightCurriedFunction3<T2, T4, T5, R>;
        (t1: T1, t2: __, t3: __, t4: T4, t5: __): RightCurriedFunction3<T2, T3, T5, R>;
        (t1: T1, t2: __, t3: __, t4: __, t5: T5): RightCurriedFunction3<T2, T3, T4, R>;
        (t1: T1, t2: T2, t3: T3, t4: __, t5: __): RightCurriedFunction2<T4, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: T4, t5: __): RightCurriedFunction2<T3, T5, R>;
        (t1: T1, t2: T2, t3: __, t4: __, t5: T5): RightCurriedFunction2<T3, T4, R>;
        (t1: T1, t2: __, t3: T3, t4: T4, t5: __): RightCurriedFunction2<T2, T5, R>;
        (t1: T1, t2: __, t3: T3, t4: __, t5: T5): RightCurriedFunction2<T2, T4, R>;
        (t1: T1, t2: __, t3: __, t4: T4, t5: T5): RightCurriedFunction2<T2, T3, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: __): RightCurriedFunction1<T5, R>;
        (t1: T1, t2: T2, t3: T3, t4: __, t5: T5): RightCurriedFunction1<T4, R>;
        (t1: T1, t2: T2, t3: __, t4: T4, t5: T5): RightCurriedFunction1<T3, R>;
        (t1: T1, t2: __, t3: T3, t4: T4, t5: T5): RightCurriedFunction1<T2, R>;
        (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
    }
    interface ImpF<T> {
        curry(arity?: number):
            T extends (arg1: infer T1) => infer R ? ImpF<CurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? ImpF<CurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? ImpF<CurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? ImpF<CurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? ImpF<CurriedFunction5<T1, T2, T3, T4, T5, R>> :
            ImpF<(...args: any[]) => any>;
    }
    interface ExpF<T> {
        curry(arity?: number):
            T extends (arg1: infer T1) => infer R ? ExpF<CurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? ExpF<CurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? ExpF<CurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? ExpF<CurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? ExpF<CurriedFunction5<T1, T2, T3, T4, T5, R>> :
            ExpF<(...args: any[]) => any>;
    }
    interface CurryRight {
        <T1, R>(func: (t1: T1) => R, arity?: number): RightCurriedFunction1<T1, R>;
        <T1, T2, R>(func: (t1: T1, t2: T2) => R, arity?: number): RightCurriedFunction2<T1, T2, R>;
        <T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3) => R, arity?: number): RightCurriedFunction3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4) => R, arity?: number): RightCurriedFunction4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, T5, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R, arity?: number): RightCurriedFunction5<T1, T2, T3, T4, T5, R>;
        (func: (...args: any[]) => any, arity?: number): (...args: any[]) => any;
        placeholder: __;
    }
    interface Stat {
        curryRight: CurryRight;
    }
    interface ImpF<T> {
        curryRight(arity?: number):
            T extends (arg1: infer T1) => infer R ? ImpF<RightCurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? ImpF<RightCurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? ImpF<RightCurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? ImpF<RightCurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? ImpF<RightCurriedFunction5<T1, T2, T3, T4, T5, R>> :
            ImpF<(...args: any[]) => any>;
    }
    interface ExpF<T> {
        curryRight(arity?: number):
            T extends (arg1: infer T1) => infer R ? ExpF<RightCurriedFunction1<T1, R>> :
            T extends (arg1: infer T1, arg2: infer T2) => infer R ? ExpF<RightCurriedFunction2<T1, T2, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3) => infer R ? ExpF<RightCurriedFunction3<T1, T2, T3, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4) => infer R ? ExpF<RightCurriedFunction4<T1, T2, T3, T4, R>> :
            T extends (arg1: infer T1, arg2: infer T2, arg3: infer T3, arg4: infer T4, arg5: infer T5) => infer R ? ExpF<RightCurriedFunction5<T1, T2, T3, T4, T5, R>> :
            ExpF<(...args: any[]) => any>;
    }
    interface DebounceSettings {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    }
    interface Stat {
        debounce<T extends (...args: any) => any>(func: T, wait?: number, options?: DebounceSettings): T & Cancelable;
    }
    interface ImpF<T extends (...args: any) => any> {
        debounce(wait?: number, options?: DebounceSettings): ImpF<T & Cancelable>;
    }
    interface ExpF<T extends (...args: any) => any> {
        debounce(wait?: number, options?: DebounceSettings): ExpF<T & Cancelable>;
    }
    interface Stat {
        defer(func: (...args: any[]) => any, ...args: any[]): number;
    }
    interface Imp<TValue> {
        defer(...args: any[]): Imp<number>;
    }
    interface Exp<TValue> {
        defer(...args: any[]): Exp<number>;
    }
    interface Stat {
        delay(func: (...args: any[]) => any, wait: number, ...args: any[]): number;
    }
    interface Imp<TValue> {
        delay(wait: number, ...args: any[]): Imp<number>;
    }
    interface Exp<TValue> {
        delay(wait: number, ...args: any[]): Exp<number>;
    }
    interface Stat {
        flip<T extends (...args: any) => any>(func: T): T;
    }
    interface ImpF<T extends (...args: any) => any> {
        flip(): this;
    }
    interface ExpF<T extends (...args: any) => any> {
        flip(): this;
    }
    interface MemoizedFunction {
        cache: MapCache;
    }
    interface Stat {
        memoize: {
            <T extends (...args: any) => any>(func: T, resolver?: (...args: any[]) => any): T & MemoizedFunction;
            Cache: MapCacheConstructor;
        };
    }
    interface ImpF<T extends (...args: any) => any> {
        memoize(resolver?: (...args: any[]) => any): Imp<T & MemoizedFunction>;
    }
    interface ExpF<T extends (...args: any) => any> {
        memoize(resolver?: (...args: any[]) => any): Exp<T & MemoizedFunction>;
    }
    interface Stat {
        negate<T extends any[]>(predicate: (...args: T) => any): (...args: T) => boolean;
    }
    interface ImpF<T extends (...args: any) => any> {
        negate(): ImpF<(...args: Parameters<T>) => boolean>;
    }
    interface ExpF<T extends (...args: any) => any> {
        negate(): ExpF<(...args: Parameters<T>) => boolean>;
    }
    interface Stat {
        once<T extends (...args: any) => any>(func: T): T;
    }
    interface ImpF<T extends (...args: any) => any> {
        once(): ImpF<T>;
    }
    interface ExpF<T extends (...args: any) => any> {
        once(): ExpF<T>;
    }
    interface Stat {
        overArgs(func: (...args: any[]) => any, ...transforms: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
    interface Imp<TValue> {
        overArgs(...transforms: Array<Many<(...args: any[]) => any>>): Imp<(...args: any[]) => any>;
    }
    interface Exp<TValue> {
        overArgs(...transforms: Array<Many<(...args: any[]) => any>>): Exp<(...args: any[]) => any>;
    }
    interface Stat {
        partial: Partial;
    }
    type __ = Stat;
    type Function0<R> = () => R;
    type Function1<T1, R> = (t1: T1) => R;
    type Function2<T1, T2, R> = (t1: T1, t2: T2) => R;
    type Function3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
    type Function4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
    interface Partial {
        <T1, T2, R>(func: Function2<T1, T2, R>, plc1: __, arg2: T2): Function1<T1, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, arg2: T2): Function2<T1, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, plc2: __, arg3: T3): Function2<T1, T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, arg3: T3): Function1<T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, arg2: T2, arg3: T3): Function1<T1, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2): Function3<T1, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, arg3: T3): Function3<T1, T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3): Function2<T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, arg3: T3): Function2<T1, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3): Function1<T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, plc3: __, arg4: T4): Function3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, arg4: T4): Function2<T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, plc3: __, arg4: T4): Function2<T1, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Function1<T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, plc2: __, arg3: T3, arg4: T4): Function2<T1, T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Function1<T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2, arg3: T3, arg4: T4): Function1<T1, R>;
        <TS extends any[], R>(func: (...ts: TS) => R): (...ts: TS) => R;
        <TS extends any[], T1, R>(func: (t1: T1, ...ts: TS) => R, arg1: T1): (...ts: TS) => R;
        <TS extends any[], T1, T2, R>(func: (t1: T1, t2: T2, ...ts: TS) => R, t1: T1, t2: T2): (...ts: TS) => R;
        <TS extends any[], T1, T2, T3, R>(func: (t1: T1, t2: T2, t3: T3, ...ts: TS) => R, t1: T1, t2: T2, t3: T3): (...ts: TS) => R;
        <TS extends any[], T1, T2, T3, T4, R>(func: (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: TS) => R, t1: T1, t2: T2, t3: T3, t4: T4): (...ts: TS) => R;
        placeholder: __;
    }
    interface ImpF<T> {
        partial<T2>(plc1: __, arg2: T2): ImpF<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> :
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        partial<T3>(plc1: __, plc2: __, arg3: T3): ImpF<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        partial<T1, T3>(arg1: T1, plc2: __, arg3: T3): ImpF<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            T extends Function4<T1, infer T2, T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        partial<T2, T3>(plc1: __, arg2: T2, arg3: T3): ImpF<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        partial<T3>(plc1: __, plc2: __, arg3: T3): ImpF<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        partial<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): ImpF<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        partial<T2, T4>(plc1: __, arg2: T2, plc3: __, arg4: T4): ImpF<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        partial<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): ImpF<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        partial<T3, T4>(plc1: __, plc2: __, arg3: T3, arg4: T4): ImpF<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        partial<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): ImpF<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        partial<T2, T3, T4>(plc1: __, arg2: T2, arg3: T3, arg4: T4): ImpF<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        partial<T1, T2, T3, T4>(arg1: T1, arg2: T2, arg3: T3, arg4: T4): ImpF<
            T extends (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        partial<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): ImpF<
            T extends (t1: T1, t2: T2, t3: T3, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        partial<T1, T2>(arg1: T1, arg2: T2): ImpF<
            T extends (t1: T1, t2: T2, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        partial<T1>(arg1: T1): ImpF<
            T extends (t1: T1, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        partial(): ImpF<T extends (...ts: any[]) => any ? T : any>;
    }
    interface ExpF<T> {
        partial<T2>(plc1: __, arg2: T2): ExpF<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> :
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        partial<T3>(plc1: __, plc2: __, arg3: T3): ExpF<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        partial<T1, T3>(arg1: T1, plc2: __, arg3: T3): ExpF<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            T extends Function4<T1, infer T2, T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        partial<T2, T3>(plc1: __, arg2: T2, arg3: T3): ExpF<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        partial<T3>(plc1: __, plc2: __, arg3: T3): ExpF<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        partial<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): ExpF<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        partial<T2, T4>(plc1: __, arg2: T2, plc3: __, arg4: T4): ExpF<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        partial<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): ExpF<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        partial<T3, T4>(plc1: __, plc2: __, arg3: T3, arg4: T4): ExpF<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        partial<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): ExpF<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        partial<T2, T3, T4>(plc1: __, arg2: T2, arg3: T3, arg4: T4): ExpF<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        partial<T1, T2, T3, T4>(arg1: T1, arg2: T2, arg3: T3, arg4: T4): ExpF<
            T extends (t1: T1, t2: T2, t3: T3, t4: T4, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        partial<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): ExpF<
            T extends (t1: T1, t2: T2, t3: T3, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        partial<T1, T2>(arg1: T1, arg2: T2): ExpF<
            T extends (t1: T1, t2: T2, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        partial<T1>(arg1: T1): ExpF<
            T extends (t1: T1, ...ts: infer TS) => infer R ? (...ts: TS) => R :
            any
            >;
        partial(): ExpF<T extends (...ts: any[]) => any ? T : any>;
    }
    interface Stat {
        partialRight: PartialRight;
    }
    interface PartialRight {
        <R>(func: Function0<R>): Function0<R>;
        <T1, R>(func: Function1<T1, R>): Function1<T1, R>;
        <T1, R>(func: Function1<T1, R>, arg1: T1): Function0<R>;
        <T1, T2, R>(func: Function2<T1, T2, R>): Function2<T1, T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, plc2: __): Function1<T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg2: T2): Function1<T1, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, arg2: T2): Function0<R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>): Function3<T1, T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, plc3: __): Function2<T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg2: T2, plc3: __): Function2<T1, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, plc3: __): Function1<T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg3: T3): Function2<T1, T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, arg3: T3): Function1<T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg2: T2, arg3: T3): Function1<T1, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3): Function0<R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>): Function4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, plc4: __): Function3<T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, plc3: __, plc4: __): Function3<T1, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, plc4: __): Function2<T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg3: T3, plc4: __): Function3<T1, T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, plc4: __): Function2<T2, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, arg3: T3, plc4: __): Function2<T1, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, plc4: __): Function1<T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg4: T4): Function3<T1, T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, plc3: __, arg4: T4): Function2<T2, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, plc3: __, arg4: T4): Function2<T1, T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Function1<T3, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg3: T3, arg4: T4): Function2<T1, T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Function1<T2, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg2: T2, arg3: T3, arg4: T4): Function1<T1, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Function0<R>;
        (func: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;
        placeholder: __;
    }
    interface ImplicitPartialRight {
        (...args: any[]): Imp<(...args: any[]) => any>;
    }
    interface ImpF<T> {
        partialRight<T1>(arg1: T1, plc2: __): ImpF<
            T extends Function2<T1, infer T2, infer R> ? Function1<T2, R> :
            any
        >;
        partialRight<T2>(arg2: T2): ImpF<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> : any
            >;
        partialRight<T1>(arg1: T1, plc2: __, plc3: __): ImpF<
            T extends Function3<T1, infer T2, infer T3, infer R> ? Function2<T2, T3, R> :
            any
        >;
        partialRight<T2>(arg2: T2, plc3: __): ImpF<
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            any
        >;
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __): ImpF<
            T extends Function3<T1, T2, infer T3, infer R> ? Function1<T3, R> :
            any
        >;
        partialRight<T3>(arg3: T3): ImpF<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            any
        >;
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3): ImpF<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            any
        >;
        partialRight<T2, T3>(arg2: T2, arg3: T3): ImpF<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            any
        >;
        partialRight<T1>(arg1: T1, plc2: __, plc3: __, plc4: __): ImpF<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function3<T2, T3, T4, R> :
            any
        >;
        partialRight<T2>(arg2: T2, plc3: __, plc4: __): ImpF<
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __, plc4: __): ImpF<
            T extends Function4<T1, T2, infer T3, infer T4, infer R> ? Function2<T3, T4, R> :
            any
        >;
        partialRight<T3>(arg3: T3, plc4: __): ImpF<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3, plc4: __): ImpF<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        partialRight<T2, T3>(arg2: T2, arg3: T3, plc4: __): ImpF<
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        partialRight<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3, plc4: __): ImpF<
            T extends Function4<T1, T2, T3, infer T4, infer R> ? Function1<T4, R> :
            any
        >;
        partialRight<T4>(arg4: T4): ImpF<
            T extends Function4<infer T1, infer T2, infer T3, T4, infer R> ? Function3<T1, T2, T3, R> :
            any
        >;
        partialRight<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): ImpF<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        partialRight<T2, T4>(arg2: T2, plc3: __, arg4: T4): ImpF<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        partialRight<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): ImpF<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        partialRight<T3, T4>(arg3: T3, arg4: T4): ImpF<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        partialRight<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): ImpF<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        partialRight<T2, T3, T4>(arg2: T2, arg3: T3, arg4: T4): ImpF<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        partialRight<TS extends any[]>(...ts: TS): ImpF<T extends (...args: TS) => infer R ? () => R : any>;
        partialRight(): ImpF<T extends (...ts: any[]) => any ? T : any>;
    }
    interface ExpF<T> {
        partialRight<T1>(arg1: T1, plc2: __): ExpF<
            T extends Function2<T1, infer T2, infer R> ? Function1<T2, R> :
            any
        >;
        partialRight<T2>(arg2: T2): ExpF<
            T extends Function2<infer T1, T2, infer R> ? Function1<T1, R> : any
            >;
        partialRight<T1>(arg1: T1, plc2: __, plc3: __): ExpF<
            T extends Function3<T1, infer T2, infer T3, infer R> ? Function2<T2, T3, R> :
            any
        >;
        partialRight<T2>(arg2: T2, plc3: __): ExpF<
            T extends Function3<infer T1, T2, infer T3, infer R> ? Function2<T1, T3, R> :
            any
        >;
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __): ExpF<
            T extends Function3<T1, T2, infer T3, infer R> ? Function1<T3, R> :
            any
        >;
        partialRight<T3>(arg3: T3): ExpF<
            T extends Function3<infer T1, infer T2, T3, infer R> ? Function2<T1, T2, R> :
            any
        >;
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3): ExpF<
            T extends Function3<T1, infer T2, T3, infer R> ? Function1<T2, R> :
            any
        >;
        partialRight<T2, T3>(arg2: T2, arg3: T3): ExpF<
            T extends Function3<infer T1, T2, T3, infer R> ? Function1<T1, R> :
            any
        >;
        partialRight<T1>(arg1: T1, plc2: __, plc3: __, plc4: __): ExpF<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function3<T2, T3, T4, R> :
            any
        >;
        partialRight<T2>(arg2: T2, plc3: __, plc4: __): ExpF<
            T extends Function4<infer T1, T2, infer T3, infer T4, infer R> ? Function3<T1, T3, T4, R> :
            any
        >;
        partialRight<T1, T2>(arg1: T1, arg2: T2, plc3: __, plc4: __): ExpF<
            T extends Function4<T1, T2, infer T3, infer T4, infer R> ? Function2<T3, T4, R> :
            any
        >;
        partialRight<T3>(arg3: T3, plc4: __): ExpF<
            T extends Function4<infer T1, infer T2, T3, infer T4, infer R> ? Function3<T1, T2, T4, R> :
            any
        >;
        partialRight<T1, T3>(arg1: T1, plc2: __, arg3: T3, plc4: __): ExpF<
            T extends Function4<T1, infer T2, infer T3, infer T4, infer R> ? Function2<T2, T4, R> :
            any
        >;
        partialRight<T2, T3>(arg2: T2, arg3: T3, plc4: __): ExpF<
            T extends Function4<infer T1, T2, T3, infer T4, infer R> ? Function2<T1, T4, R> :
            any
        >;
        partialRight<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3, plc4: __): ExpF<
            T extends Function4<T1, T2, T3, infer T4, infer R> ? Function1<T4, R> :
            any
        >;
        partialRight<T4>(arg4: T4): ExpF<
            T extends Function4<infer T1, infer T2, infer T3, T4, infer R> ? Function3<T1, T2, T3, R> :
            any
        >;
        partialRight<T1, T4>(arg1: T1, plc2: __, plc3: __, arg4: T4): ExpF<
            T extends Function4<T1, infer T2, infer T3, T4, infer R> ? Function2<T2, T3, R> :
            any
        >;
        partialRight<T2, T4>(arg2: T2, plc3: __, arg4: T4): ExpF<
            T extends Function4<infer T1, T2, infer T3, T4, infer R> ? Function2<T1, T3, R> :
            any
        >;
        partialRight<T1, T2, T4>(arg1: T1, arg2: T2, plc3: __, arg4: T4): ExpF<
            T extends Function4<T1, T2, infer T3, T4, infer R> ? Function1<T3, R> :
            any
        >;
        partialRight<T3, T4>(arg3: T3, arg4: T4): ExpF<
            T extends Function4<infer T1, infer T2, T3, T4, infer R> ? Function2<T1, T2, R> :
            any
        >;
        partialRight<T1, T3, T4>(arg1: T1, plc2: __, arg3: T3, arg4: T4): ExpF<
            T extends Function4<T1, infer T2, T3, T4, infer R> ? Function1<T2, R> :
            any
        >;
        partialRight<T2, T3, T4>(arg2: T2, arg3: T3, arg4: T4): ExpF<
            T extends Function4<infer T1, T2, T3, T4, infer R> ? Function1<T1, R> :
            any
        >;
        partialRight<TS extends any[]>(...ts: TS): ExpF<T extends (...args: TS) => infer R ? () => R : any>;
        partialRight(): ExpF<T extends (...ts: any[]) => any ? T : any>;
    }
    interface Stat {
        rearg(func: (...args: any[]) => any, ...indexes: Array<Many<number>>): (...args: any[]) => any;
    }
    interface Imp<TValue> {
        rearg(...indexes: Array<Many<number>>): Imp<(...args: any[]) => any>;
    }
    interface Exp<TValue> {
        rearg(...indexes: Array<Many<number>>): Exp<(...args: any[]) => any>;
    }
    interface Stat {
        rest(func: (...args: any[]) => any, start?: number): (...args: any[]) => any;
    }
    interface ImpF<T extends (...args: any) => any> {
        rest(start?: number): ImpF<(...args: any[]) => any>;
    }
    interface ExpF<T extends (...args: any) => any> {
        rest(start?: number): ExpF<(...args: any[]) => any>;
    }
    interface Stat {
        spread<TResult>(func: (...args: any[]) => TResult, start?: number): (...args: any[]) => TResult;
    }
    interface ImpF<T> {
        spread(start?: number): ImpF<(...args: any[]) => ReturnType<T>>;
    }
    interface ExpF<T> {
        spread(start?: number): ExpF<(...args: any[]) => ReturnType<T>>;
    }
    interface ThrottleSettings {
        leading?: boolean;
        trailing?: boolean;
    }
    interface Stat {
        throttle<T extends (...args: any) => any>(func: T, wait?: number, options?: ThrottleSettings): T & Cancelable;
    }
    interface ImpF<T extends (...args: any) => any> {
        throttle(wait?: number, options?: ThrottleSettings): ImpF<T & Cancelable>;
    }
    interface ExpF<T extends (...args: any) => any> {
        throttle(wait?: number, options?: ThrottleSettings): ExpF<T & Cancelable>;
    }
    interface Stat {
        unary<T, TResult>(func: (arg1: T, ...args: any[]) => TResult): (arg1: T) => TResult;
    }
    interface ImpF<T> {
        unary(): ImpF<(arg1: Parameters<T>['0']) => ReturnType<T>>;
    }
    interface ExpF<T> {
        unary(): ExpF<(arg1: Parameters<T>['0']) => ReturnType<T>>;
    }
    interface Stat {
        wrap<T, TArgs, TResult>(value: T, wrapper: (value: T, ...args: TArgs[]) => TResult): (...args: TArgs[]) => TResult;
    }
    interface Imp<TValue> {
        wrap<TArgs, TResult>(wrapper: (value: TValue, ...args: TArgs[]) => TResult): ImpF<(...args: TArgs[]) => TResult>;
    }
    interface Exp<TValue> {
        wrap<TArgs, TResult>(wrapper: (value: TValue, ...args: TArgs[]) => TResult): ExpF<(...args: TArgs[]) => TResult>;
    }
}

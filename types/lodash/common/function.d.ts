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
    interface Imp<TValue> {
        curry<T1, R>(this: Imp<(t1: T1) => R>, arity?: number): Imp<CurriedFunction1<T1, R>>;
        curry<T1, T2, R>(this: Imp<(t1: T1, t2: T2) => R>, arity?: number): Imp<CurriedFunction2<T1, T2, R>>;
        curry<T1, T2, T3, R>(this: Imp<(t1: T1, t2: T2, t3: T3) => R>, arity?: number): Imp<CurriedFunction3<T1, T2, T3, R>>;
        curry<T1, T2, T3, T4, R>(this: Imp<(t1: T1, t2: T2, t3: T3, t4: T4) => R>, arity?: number): Imp<CurriedFunction4<T1, T2, T3, T4, R>>;
        curry<T1, T2, T3, T4, T5, R>(this: Imp<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>, arity?: number): Imp<CurriedFunction5<T1, T2, T3, T4, T5, R>>;
        curry(arity?: number): Imp<(...args: any[]) => any>;
    }
    interface Exp<TValue> {
        curry<T1, R>(this: Exp<(t1: T1) => R>): Exp<CurriedFunction1<T1, R>>;
        curry<T1, T2, R>(this: Exp<(t1: T1, t2: T2) => R>): Exp<CurriedFunction2<T1, T2, R>>;
        curry<T1, T2, T3, R>(this: Exp<(t1: T1, t2: T2, t3: T3) => R>): Exp<CurriedFunction3<T1, T2, T3, R>>;
        curry<T1, T2, T3, T4, R>(this: Exp<(t1: T1, t2: T2, t3: T3, t4: T4) => R>): Exp<CurriedFunction4<T1, T2, T3, T4, R>>;
        curry<T1, T2, T3, T4, T5, R>(this: Exp<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>): Exp<CurriedFunction5<T1, T2, T3, T4, T5, R>>;
        curry(arity?: number): Exp<(...args: any[]) => any>;
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
    interface Imp<TValue> {
        curryRight<T1, R>(this: Imp<(t1: T1) => R>, arity?: number): Imp<RightCurriedFunction1<T1, R>>;
        curryRight<T1, T2, R>(this: Imp<(t1: T1, t2: T2) => R>, arity?: number): Imp<RightCurriedFunction2<T1, T2, R>>;
        curryRight<T1, T2, T3, R>(this: Imp<(t1: T1, t2: T2, t3: T3) => R>, arity?: number): Imp<RightCurriedFunction3<T1, T2, T3, R>>;
        curryRight<T1, T2, T3, T4, R>(this: Imp<(t1: T1, t2: T2, t3: T3, t4: T4) => R>, arity?: number): Imp<RightCurriedFunction4<T1, T2, T3, T4, R>>;
        curryRight<T1, T2, T3, T4, T5, R>(this: Imp<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>, arity?: number): Imp<RightCurriedFunction5<T1, T2, T3, T4, T5, R>>;
        curryRight(arity?: number): Imp<(...args: any[]) => any>;
    }
    interface Exp<TValue> {
        curryRight<T1, R>(this: Exp<(t1: T1) => R>, arity?: number): Exp<RightCurriedFunction1<T1, R>>;
        curryRight<T1, T2, R>(this: Exp<(t1: T1, t2: T2) => R>, arity?: number): Exp<RightCurriedFunction2<T1, T2, R>>;
        curryRight<T1, T2, T3, R>(this: Exp<(t1: T1, t2: T2, t3: T3) => R>, arity?: number): Exp<RightCurriedFunction3<T1, T2, T3, R>>;
        curryRight<T1, T2, T3, T4, R>(this: Exp<(t1: T1, t2: T2, t3: T3, t4: T4) => R>, arity?: number): Exp<RightCurriedFunction4<T1, T2, T3, T4, R>>;
        curryRight<T1, T2, T3, T4, T5, R>(this: Exp<(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>, arity?: number): Exp<RightCurriedFunction5<T1, T2, T3, T4, T5, R>>;
        curryRight(arity?: number): Exp<(...args: any[]) => any>;
    }
    interface DebounceSettings {
        leading?: boolean;
        maxWait?: number;
        trailing?: boolean;
    }
    interface Stat {
        debounce<T extends (...args: any[]) => any>(func: T, wait?: number, options?: DebounceSettings): T & Cancelable;
    }
    interface Imp<TValue> {
        debounce(wait?: number, options?: DebounceSettings): Imp<TValue & Cancelable>;
    }
    interface Exp<TValue> {
        debounce(wait?: number, options?: DebounceSettings): Exp<TValue & Cancelable>;
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
        flip<T extends (...args: any[]) => any>(func: T): T;
    }
    interface LoDashWrapper<TValue> {
        flip(): this;
    }
    interface MemoizedFunction {
        cache: MapCache;
    }
    interface Stat {
        memoize: {
            <T extends (...args: any[]) => any>(func: T, resolver?: (...args: any[]) => any): T & MemoizedFunction;
            Cache: MapCacheConstructor;
        };
    }
    interface Imp<TValue> {
        memoize(resolver?: (...args: any[]) => any): Imp<TValue & MemoizedFunction>;
    }
    interface Exp<TValue> {
        memoize(resolver?: (...args: any[]) => any): Exp<TValue & MemoizedFunction>;
    }
    interface Stat {
        negate(predicate: () => boolean): () => boolean;
        negate<A1>(predicate: (a1: A1) => boolean): (a1: A1) => boolean;
        negate<A1, A2>(predicate: (a1: A1, a2: A2) => boolean): (a1: A1, a2: A2) => boolean;
        negate(predicate: (...args: any[]) => any): (...args: any[]) => boolean;
    }
    interface Imp<TValue> {
        negate(this: Imp<() => boolean>): Imp<() => boolean>;
        negate<A1>(this: Imp<(a1: A1) => boolean>): Imp<(a1: A1) => boolean>;
        negate<A1, A2>(this: Imp<(a1: A1, a2: A2) => boolean>): Imp<(a1: A1, a2: A2) => boolean>;
        negate(this: Imp<(...args: any[]) => any>): Imp<(...args: any[]) => boolean>;
    }
    interface Exp<TValue> {
        negate(this: Exp<() => boolean>): Exp<() => boolean>;
        negate<A1>(this: Exp<(a1: A1) => boolean>): Exp<(a1: A1) => boolean>;
        negate<A1, A2>(this: Exp<(a1: A1, a2: A2) => boolean>): Exp<(a1: A1, a2: A2) => boolean>;
        negate(this: Exp<(...args: any[]) => any>): Exp<(...args: any[]) => boolean>;
    }
    interface Stat {
        once<T extends (...args: any[]) => any>(func: T): T;
    }
    interface LoDashWrapper<TValue> {
        once(): this;
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
    interface Imp<TValue> {
        partial: ImplicitPartial;
    }
    interface Exp<TValue> {
        partial: ExplicitPartial;
    }
    type __ = Stat;
    type Function0<R> = () => R;
    type Function1<T1, R> = (t1: T1) => R;
    type Function2<T1, T2, R> = (t1: T1, t2: T2) => R;
    type Function3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
    type Function4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
    interface Partial {
        <R>(func: Function0<R>): Function0<R>;
        <T1, R>(func: Function1<T1, R>): Function1<T1, R>;
        <T1, R>(func: Function1<T1, R>, arg1: T1): Function0<R>;
        <T1, T2, R>(func: Function2<T1, T2, R>): Function2<T1, T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1): Function1<T2, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, plc1: __, arg2: T2): Function1<T1, R>;
        <T1, T2, R>(func: Function2<T1, T2, R>, arg1: T1, arg2: T2): Function0<R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>): Function3<T1, T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1): Function2<T2, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, arg2: T2): Function2<T1, T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2): Function1<T3, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, plc2: __, arg3: T3): Function2<T1, T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: __, arg3: T3): Function1<T2, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, plc1: __, arg2: T2, arg3: T3): Function1<T1, R>;
        <T1, T2, T3, R>(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3): Function0<R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>): Function4<T1, T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1): Function3<T2, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, plc1: __, arg2: T2): Function3<T1, T3, T4, R>;
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2): Function2<T3, T4, R>;
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
        <T1, T2, T3, T4, R>(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Function0<R>;
        (func: (...args: any[]) => any, ...args: any[]): (...args: any[]) => any;
        placeholder: __;
    }
    interface ImplicitPartial {
        <R>(this: Imp<Function0<R>>): Imp<Function0<R>>;
        <T1, R>(this: Imp<Function1<T1, R>>): Imp<Function1<T1, R>>;
        <T1, R>(this: Imp<Function1<T1, R>>, arg1: T1): Imp<Function0<R>>;
        <T1, T2, R>(this: Imp<Function2<T1, T2, R>>): Imp<Function2<T1, T2, R>>;
        <T1, T2, R>(this: Imp<Function2<T1, T2, R>>, arg1: T1): Imp<Function1<T2, R>>;
        <T1, T2, R>(this: Imp<Function2<T1, T2, R>>, plc1: __, arg2: T2): Imp<Function1<T1, R>>;
        <T1, T2, R>(this: Imp<Function2<T1, T2, R>>, arg1: T1, arg2: T2): Imp<Function0<R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>): Imp<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, arg1: T1): Imp<Function2<T2, T3, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, plc1: __, arg2: T2): Imp<Function2<T1, T3, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2): Imp<Function1<T3, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, plc1: __, plc2: __, arg3: T3): Imp<Function2<T1, T2, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, arg1: T1, plc2: __, arg3: T3): Imp<Function1<T2, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, plc1: __, arg2: T2, arg3: T3): Imp<Function1<T1, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3): Imp<Function0<R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>): Imp<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1): Imp<Function3<T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, plc1: __, arg2: T2): Imp<Function3<T1, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2): Imp<Function2<T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, plc1: __, plc2: __, arg3: T3): Imp<Function3<T1, T2, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, arg3: T3): Imp<Function2<T2, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, plc1: __, arg2: T2, arg3: T3): Imp<Function2<T1, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3): Imp<Function1<T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, plc1: __, plc2: __, plc3: __, arg4: T4): Imp<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, plc3: __, arg4: T4): Imp<Function2<T2, T3, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, plc1: __, arg2: T2, plc3: __, arg4: T4): Imp<Function2<T1, T3, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Imp<Function1<T3, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, plc1: __, plc2: __, arg3: T3, arg4: T4): Imp<Function2<T1, T2, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Imp<Function1<T2, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, plc1: __, arg2: T2, arg3: T3, arg4: T4): Imp<Function1<T1, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Imp<Function0<R>>;
        (...args: any[]): Imp<(...args: any[]) => any>;
    }
    interface ExplicitPartial {
        <R>(this: Exp<Function0<R>>): Exp<Function0<R>>;
        <T1, R>(this: Exp<Function1<T1, R>>): Exp<Function1<T1, R>>;
        <T1, R>(this: Exp<Function1<T1, R>>, arg1: T1): Exp<Function0<R>>;
        <T1, T2, R>(this: Exp<Function2<T1, T2, R>>): Exp<Function2<T1, T2, R>>;
        <T1, T2, R>(this: Exp<Function2<T1, T2, R>>, arg1: T1): Exp<Function1<T2, R>>;
        <T1, T2, R>(this: Exp<Function2<T1, T2, R>>, plc1: __, arg2: T2): Exp<Function1<T1, R>>;
        <T1, T2, R>(this: Exp<Function2<T1, T2, R>>, arg1: T1, arg2: T2): Exp<Function0<R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>): Exp<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, arg1: T1): Exp<Function2<T2, T3, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, plc1: __, arg2: T2): Exp<Function2<T1, T3, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2): Exp<Function1<T3, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, plc1: __, plc2: __, arg3: T3): Exp<Function2<T1, T2, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, arg1: T1, plc2: __, arg3: T3): Exp<Function1<T2, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, plc1: __, arg2: T2, arg3: T3): Exp<Function1<T1, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3): Exp<Function0<R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>): Exp<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1): Exp<Function3<T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, plc1: __, arg2: T2): Exp<Function3<T1, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2): Exp<Function2<T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, plc1: __, plc2: __, arg3: T3): Exp<Function3<T1, T2, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, arg3: T3): Exp<Function2<T2, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, plc1: __, arg2: T2, arg3: T3): Exp<Function2<T1, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3): Exp<Function1<T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, plc1: __, plc2: __, plc3: __, arg4: T4): Exp<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, plc3: __, arg4: T4): Exp<Function2<T2, T3, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, plc1: __, arg2: T2, plc3: __, arg4: T4): Exp<Function2<T1, T3, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Exp<Function1<T3, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, plc1: __, plc2: __, arg3: T3, arg4: T4): Exp<Function2<T1, T2, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Exp<Function1<T2, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, plc1: __, arg2: T2, arg3: T3, arg4: T4): Exp<Function1<T1, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Exp<Function0<R>>;
        (...args: any[]): Exp<(...args: any[]) => any>;
    }
    interface Stat {
        partialRight: PartialRight;
    }
    interface Imp<TValue> {
        partialRight: ImplicitPartialRight;
    }
    interface Exp<TValue> {
        partialRight: ExplicitPartialRight;
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
        <R>(this: Imp<Function0<R>>): Imp<Function0<R>>;
        <T1, R>(this: Imp<Function1<T1, R>>): Imp<Function1<T1, R>>;
        <T1, R>(this: Imp<Function1<T1, R>>, arg1: T1): Imp<Function0<R>>;
        <T1, T2, R>(this: Imp<Function2<T1, T2, R>>): Imp<Function2<T1, T2, R>>;
        <T1, T2, R>(this: Imp<Function2<T1, T2, R>>, arg1: T1, plc2: __): Imp<Function1<T2, R>>;
        <T1, T2, R>(this: Imp<Function2<T1, T2, R>>, arg2: T2): Imp<Function1<T1, R>>;
        <T1, T2, R>(this: Imp<Function2<T1, T2, R>>, arg1: T1, arg2: T2): Imp<Function0<R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>): Imp<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, arg1: T1, plc2: __, plc3: __): Imp<Function2<T2, T3, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, arg2: T2, plc3: __): Imp<Function2<T1, T3, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, plc3: __): Imp<Function1<T3, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, arg3: T3): Imp<Function2<T1, T2, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, arg1: T1, plc2: __, arg3: T3): Imp<Function1<T2, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, arg2: T2, arg3: T3): Imp<Function1<T1, R>>;
        <T1, T2, T3, R>(this: Imp<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3): Imp<Function0<R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>): Imp<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, plc3: __, plc4: __): Imp<Function3<T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg2: T2, plc3: __, plc4: __): Imp<Function3<T1, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: __, plc4: __): Imp<Function2<T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg3: T3, plc4: __): Imp<Function3<T1, T2, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, arg3: T3, plc4: __): Imp<Function2<T2, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg2: T2, arg3: T3, plc4: __): Imp<Function2<T1, T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, plc4: __): Imp<Function1<T4, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg4: T4): Imp<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, plc3: __, arg4: T4): Imp<Function2<T2, T3, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg2: T2, plc3: __, arg4: T4): Imp<Function2<T1, T3, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Imp<Function1<T3, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg3: T3, arg4: T4): Imp<Function2<T1, T2, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Imp<Function1<T2, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg2: T2, arg3: T3, arg4: T4): Imp<Function1<T1, R>>;
        <T1, T2, T3, T4, R>(this: Imp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Imp<Function0<R>>;
        (...args: any[]): Imp<(...args: any[]) => any>;
    }
    interface ExplicitPartialRight {
        <R>(this: Exp<Function0<R>>): Exp<Function0<R>>;
        <T1, R>(this: Exp<Function1<T1, R>>): Exp<Function1<T1, R>>;
        <T1, R>(this: Exp<Function1<T1, R>>, arg1: T1): Exp<Function0<R>>;
        <T1, T2, R>(this: Exp<Function2<T1, T2, R>>): Exp<Function2<T1, T2, R>>;
        <T1, T2, R>(this: Exp<Function2<T1, T2, R>>, arg1: T1, plc2: __): Exp<Function1<T2, R>>;
        <T1, T2, R>(this: Exp<Function2<T1, T2, R>>, arg2: T2): Exp<Function1<T1, R>>;
        <T1, T2, R>(this: Exp<Function2<T1, T2, R>>, arg1: T1, arg2: T2): Exp<Function0<R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>): Exp<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, arg1: T1, plc2: __, plc3: __): Exp<Function2<T2, T3, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, arg2: T2, plc3: __): Exp<Function2<T1, T3, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, plc3: __): Exp<Function1<T3, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, arg3: T3): Exp<Function2<T1, T2, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, arg1: T1, plc2: __, arg3: T3): Exp<Function1<T2, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, arg2: T2, arg3: T3): Exp<Function1<T1, R>>;
        <T1, T2, T3, R>(this: Exp<Function3<T1, T2, T3, R>>, arg1: T1, arg2: T2, arg3: T3): Exp<Function0<R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>): Exp<Function4<T1, T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, plc3: __, plc4: __): Exp<Function3<T2, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg2: T2, plc3: __, plc4: __): Exp<Function3<T1, T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: __, plc4: __): Exp<Function2<T3, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg3: T3, plc4: __): Exp<Function3<T1, T2, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, arg3: T3, plc4: __): Exp<Function2<T2, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg2: T2, arg3: T3, plc4: __): Exp<Function2<T1, T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, plc4: __): Exp<Function1<T4, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg4: T4): Exp<Function3<T1, T2, T3, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, plc3: __, arg4: T4): Exp<Function2<T2, T3, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg2: T2, plc3: __, arg4: T4): Exp<Function2<T1, T3, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, plc3: __, arg4: T4): Exp<Function1<T3, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg3: T3, arg4: T4): Exp<Function2<T1, T2, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, plc2: __, arg3: T3, arg4: T4): Exp<Function1<T2, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg2: T2, arg3: T3, arg4: T4): Exp<Function1<T1, R>>;
        <T1, T2, T3, T4, R>(this: Exp<Function4<T1, T2, T3, T4, R>>, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Exp<Function0<R>>;
        (...args: any[]): Exp<(...args: any[]) => any>;
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
    interface Imp<TValue> {
        rest(start?: number): Imp<(...args: any[]) => any>;
    }
    interface Exp<TValue> {
        rest(start?: number): Exp<(...args: any[]) => any>;
    }
    interface Stat {
        spread<TResult>(func: (...args: any[]) => TResult): (...args: any[]) => TResult;
        spread<TResult>(func: (...args: any[]) => TResult, start: number): (...args: any[]) => TResult;
    }
    interface Imp<TValue> {
        spread<TResult>(this: Imp<(...args: any[]) => TResult>): Imp<(...args: any[]) => TResult>;
        spread<TResult>(this: Imp<(...args: any[]) => TResult>, start: number): Imp<(...args: any[]) => TResult>;
    }
    interface Exp<TValue> {
        spread<TResult>(this: Exp<(...args: any[]) => TResult>): Exp<(...args: any[]) => TResult>;
        spread<TResult>(this: Exp<(...args: any[]) => TResult>, start: number): Exp<(...args: any[]) => TResult>;
    }
    interface ThrottleSettings {
        leading?: boolean;
        trailing?: boolean;
    }
    interface Stat {
        throttle<T extends (...args: any[]) => any>(func: T, wait?: number, options?: ThrottleSettings): T & Cancelable;
    }
    interface Imp<TValue> {
        throttle(wait?: number, options?: ThrottleSettings): Imp<TValue & Cancelable>;
    }
    interface Exp<TValue> {
        throttle(wait?: number, options?: ThrottleSettings): Exp<TValue & Cancelable>;
    }
    interface Stat {
        unary<T, TResult>(func: (arg1: T, ...args: any[]) => TResult): (arg1: T) => TResult;
    }
    interface Imp<TValue> {
        unary<T, TResult>(this: Imp<(arg1: T, ...args: any[]) => TResult>): Imp<(arg1: T) => TResult>;
    }
    interface Exp<TValue> {
        unary<T, TResult>(this: Exp<(arg1: T, ...args: any[]) => TResult>): Exp<(arg1: T) => TResult>;
    }
    interface Stat {
        wrap<T, TArgs, TResult>(value: T, wrapper: (value: T, ...args: TArgs[]) => TResult): (...args: TArgs[]) => TResult;
        wrap<T, TResult>(value: T, wrapper: (value: T, ...args: any[]) => TResult): (...args: any[]) => TResult;
    }
    interface Imp<TValue> {
        wrap<TArgs, TResult>(wrapper: (value: TValue, ...args: TArgs[]) => TResult): Imp<(...args: TArgs[]) => TResult>;
        wrap<TResult>(wrapper: (value: TValue, ...args: any[]) => TResult): Imp<(...args: any[]) => TResult>;
    }
    interface Exp<TValue> {
        wrap<TArgs, TResult>(wrapper: (value: TValue, ...args: TArgs[]) => TResult): Exp<(...args: TArgs[]) => TResult>;
        wrap<TResult>(wrapper: (value: TValue, ...args: any[]) => TResult): Exp<(...args: any[]) => TResult>;
    }
}

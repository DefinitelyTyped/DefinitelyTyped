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
        defaultTo<TDefault>( defaultValue: TDefault): TValue | TDefault;
    }
    interface Exp<TValue> {
        defaultTo( defaultValue: TValue): Exp<TValue>;
        defaultTo<TDefault>( defaultValue: TDefault): Exp<TValue | TDefault>;
    }

    interface Stat {
        flow: any;
        // flow<R1, R2>(f1: () => R1, f2: (a: R1) => R2): () => R2;
        // flow<R1, R2, R3>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): () => R3;
        // flow<R1, R2, R3, R4>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): () => R4;
        // flow<R1, R2, R3, R4, R5>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): () => R5;
        // flow<R1, R2, R3, R4, R5, R6>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): () => R6;
        // flow<R1, R2, R3, R4, R5, R6, R7>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): () => R7;
        // flow<R1, R2, R3, R4, R5, R6, R7>(f1: () => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): () => any;
        // flow<A1, R1, R2>(f1: (a1: A1) => R1, f2: (a: R1) => R2): (a1: A1) => R2;
        // flow<A1, R1, R2, R3>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1) => R3;
        // flow<A1, R1, R2, R3, R4>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1) => R4;
        // flow<A1, R1, R2, R3, R4, R5>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1) => R5;
        // flow<A1, R1, R2, R3, R4, R5, R6>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1) => R6;
        // flow<A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1) => R7;
        // flow<A1, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1) => any;
        // flow<A1, A2, R1, R2>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2) => R2;
        // flow<A1, A2, R1, R2, R3>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2) => R3;
        // flow<A1, A2, R1, R2, R3, R4>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2) => R4;
        // flow<A1, A2, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2) => R5;
        // flow<A1, A2, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2) => R6;
        // flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2) => R7;
        // flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2) => any;
        // flow<A1, A2, A3, R1, R2>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3) => R2;
        // flow<A1, A2, A3, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3) => R3;
        // flow<A1, A2, A3, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3) => R4;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3) => R5;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3) => R6;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3) => R7;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3) => any;
        // flow<A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
        // flow<A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3, a4: A4) => any;
        // flow<A1, A2, A3, A4, R1, R2>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2;
        // flow<A1, A2, A3, A4, R1, R2, R3>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(f1: (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): (a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any;
        // flow(funcs: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
    interface Imp<TValue> {
        flow: any;
        // flow<R1, R2>(this: Imp<() => R1>, f2: (a: R1) => R2): Imp<() => R2>;
        // flow<R1, R2, R3>(this: Imp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Imp<() => R3>;
        // flow<R1, R2, R3, R4>(this: Imp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Imp<() => R4>;
        // flow<R1, R2, R3, R4, R5>(this: Imp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Imp<() => R5>;
        // flow<R1, R2, R3, R4, R5, R6>(this: Imp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Imp<() => R6>;
        // flow<R1, R2, R3, R4, R5, R6, R7>(this: Imp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Imp<() => R7>;
        // flow<R1, R2, R3, R4, R5, R6, R7>(this: Imp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Imp<() => any>;
        // flow<A1, R1, R2>(this: Imp<(a1: A1) => R1>, f2: (a: R1) => R2): Imp<(a1: A1) => R2>;
        // flow<A1, R1, R2, R3>(this: Imp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Imp<(a1: A1) => R3>;
        // flow<A1, R1, R2, R3, R4>(this: Imp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Imp<(a1: A1) => R4>;
        // flow<A1, R1, R2, R3, R4, R5>(this: Imp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Imp<(a1: A1) => R5>;
        // flow<A1, R1, R2, R3, R4, R5, R6>(this: Imp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Imp<(a1: A1) => R6>;
        // flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: Imp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Imp<(a1: A1) => R7>;
        // flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: Imp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Imp<(a1: A1) => any>;
        // flow<A1, A2, R1, R2>(this: Imp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2): Imp<(a1: A1, a2: A2) => R2>;
        // flow<A1, A2, R1, R2, R3>(this: Imp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Imp<(a1: A1, a2: A2) => R3>;
        // flow<A1, A2, R1, R2, R3, R4>(this: Imp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Imp<(a1: A1, a2: A2) => R4>;
        // flow<A1, A2, R1, R2, R3, R4, R5>(this: Imp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Imp<(a1: A1, a2: A2) => R5>;
        // flow<A1, A2, R1, R2, R3, R4, R5, R6>(this: Imp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Imp<(a1: A1, a2: A2) => R6>;
        // flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: Imp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Imp<(a1: A1, a2: A2) => R7>;
        // flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: Imp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Imp<(a1: A1, a2: A2) => any>;
        // flow<A1, A2, A3, R1, R2>(this: Imp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2): Imp<(a1: A1, a2: A2, a3: A3) => R2>;
        // flow<A1, A2, A3, R1, R2, R3>(this: Imp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Imp<(a1: A1, a2: A2, a3: A3) => R3>;
        // flow<A1, A2, A3, R1, R2, R3, R4>(this: Imp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Imp<(a1: A1, a2: A2, a3: A3) => R4>;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5>(this: Imp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Imp<(a1: A1, a2: A2, a3: A3) => R5>;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(this: Imp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Imp<(a1: A1, a2: A2, a3: A3) => R6>;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: Imp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Imp<(a1: A1, a2: A2, a3: A3) => R7>;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: Imp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Imp<(a1: A1, a2: A2, a3: A3) => any>;
        // flow<A1, A2, A3, A4, R1, R2>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        // flow<A1, A2, A3, A4, R1, R2, R3>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => any>;
        // flow<A1, A2, A3, A4, R1, R2>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2): Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2>;
        // flow<A1, A2, A3, A4, R1, R2, R3>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Imp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any>;
        // flow(this: Imp<(...args: any[]) => any>, funcs: Array<Many<(a: any) => any>>): Imp<(...args: any[]) => any>;
    }
    interface Exp<TValue> {
        flow: any;
        // flow<R1, R2>(this: Exp<() => R1>, f2: (a: R1) => R2): Exp<() => R2>;
        // flow<R1, R2, R3>(this: Exp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Exp<() => R3>;
        // flow<R1, R2, R3, R4>(this: Exp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Exp<() => R4>;
        // flow<R1, R2, R3, R4, R5>(this: Exp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Exp<() => R5>;
        // flow<R1, R2, R3, R4, R5, R6>(this: Exp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Exp<() => R6>;
        // flow<R1, R2, R3, R4, R5, R6, R7>(this: Exp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Exp<() => R7>;
        // flow<R1, R2, R3, R4, R5, R6, R7>(this: Exp<() => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Exp<() => any>;
        // flow<A1, R1, R2>(this: Exp<(a1: A1) => R1>, f2: (a: R1) => R2): Exp<(a1: A1) => R2>;
        // flow<A1, R1, R2, R3>(this: Exp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Exp<(a1: A1) => R3>;
        // flow<A1, R1, R2, R3, R4>(this: Exp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Exp<(a1: A1) => R4>;
        // flow<A1, R1, R2, R3, R4, R5>(this: Exp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Exp<(a1: A1) => R5>;
        // flow<A1, R1, R2, R3, R4, R5, R6>(this: Exp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Exp<(a1: A1) => R6>;
        // flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: Exp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Exp<(a1: A1) => R7>;
        // flow<A1, R1, R2, R3, R4, R5, R6, R7>(this: Exp<(a1: A1) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Exp<(a1: A1) => any>;
        // flow<A1, A2, R1, R2>(this: Exp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2): Exp<(a1: A1, a2: A2) => R2>;
        // flow<A1, A2, R1, R2, R3>(this: Exp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Exp<(a1: A1, a2: A2) => R3>;
        // flow<A1, A2, R1, R2, R3, R4>(this: Exp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Exp<(a1: A1, a2: A2) => R4>;
        // flow<A1, A2, R1, R2, R3, R4, R5>(this: Exp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Exp<(a1: A1, a2: A2) => R5>;
        // flow<A1, A2, R1, R2, R3, R4, R5, R6>(this: Exp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Exp<(a1: A1, a2: A2) => R6>;
        // flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: Exp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Exp<(a1: A1, a2: A2) => R7>;
        // flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(this: Exp<(a1: A1, a2: A2) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Exp<(a1: A1, a2: A2) => any>;
        // flow<A1, A2, A3, R1, R2>(this: Exp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2): Exp<(a1: A1, a2: A2, a3: A3) => R2>;
        // flow<A1, A2, A3, R1, R2, R3>(this: Exp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Exp<(a1: A1, a2: A2, a3: A3) => R3>;
        // flow<A1, A2, A3, R1, R2, R3, R4>(this: Exp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Exp<(a1: A1, a2: A2, a3: A3) => R4>;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5>(this: Exp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Exp<(a1: A1, a2: A2, a3: A3) => R5>;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(this: Exp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Exp<(a1: A1, a2: A2, a3: A3) => R6>;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: Exp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Exp<(a1: A1, a2: A2, a3: A3) => R7>;
        // flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(this: Exp<(a1: A1, a2: A2, a3: A3) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Exp<(a1: A1, a2: A2, a3: A3) => any>;
        // flow<A1, A2, A3, A4, R1, R2>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        // flow<A1, A2, A3, A4, R1, R2, R3>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => any>;
        // flow<A1, A2, A3, A4, R1, R2>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2): Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R2>;
        // flow<A1, A2, A3, A4, R1, R2, R3>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3): Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R3>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R4>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R5>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R6>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R7>;
        // flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(this: Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => R1>, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, ...funcs: Array<Many<(a: any) => any>>): Exp<(a1: A1, a2: A2, a3: A3, a4: A4, ...args: any[]) => any>;
        // flow(this: Exp<(...args: any[]) => any>, funcs: Array<Many<(a: any) => any>>): Exp<(...args: any[]) => any>;
    }

    interface Stat {
        flowRight: any;
        // flowRight<R2, R1>(f2: (a: R1) => R2, f1: () => R1): () => R2;
        // flowRight<R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R3;
        // flowRight<R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R4;
        // flowRight<R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R5;
        // flowRight<R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R6;
        // flowRight<R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): () => R7;
        // flowRight<A1, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R2;
        // flowRight<A1, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R3;
        // flowRight<A1, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R4;
        // flowRight<A1, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R5;
        // flowRight<A1, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R6;
        // flowRight<A1, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): (a1: A1) => R7;
        // flowRight<A1, A2, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R2;
        // flowRight<A1, A2, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R3;
        // flowRight<A1, A2, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R4;
        // flowRight<A1, A2, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R5;
        // flowRight<A1, A2, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R6;
        // flowRight<A1, A2, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): (a1: A1, a2: A2) => R7;
        // flowRight<A1, A2, A3, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R2;
        // flowRight<A1, A2, A3, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R3;
        // flowRight<A1, A2, A3, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R4;
        // flowRight<A1, A2, A3, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R5;
        // flowRight<A1, A2, A3, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R6;
        // flowRight<A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): (a1: A1, a2: A2, a3: A3) => R7;
        // flowRight<A1, A2, A3, A4, R2, R1>(f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R2;
        // flowRight<A1, A2, A3, A4, R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R3;
        // flowRight<A1, A2, A3, A4, R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R4;
        // flowRight<A1, A2, A3, A4, R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R5;
        // flowRight<A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R6;
        // flowRight<A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): (a1: A1, a2: A2, a3: A3, a4: A4) => R7;
        // flowRight<R2, R1>(f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R2;
        // flowRight<R3, R2, R1>(f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R3;
        // flowRight<R4, R3, R2, R1>(f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R4;
        // flowRight<R5, R4, R3, R2, R1>(f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R5;
        // flowRight<R6, R5, R4, R3, R2, R1>(f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R6;
        // flowRight<R7, R6, R5, R4, R3, R2, R1>(f7: (a: R6) => R7, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): (...args: any[]) => R7;
        // flowRight(f7: (a: any) => any, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
        // flowRight(funcs: Array<Many<(...args: any[]) => any>>): (...args: any[]) => any;
    }
    interface Imp<TValue> {
        flowRight: any;
        // flowRight<R2, R1>(this: Imp<(a: R1) => R2>, f1: () => R1): Imp<() => R2>;
        // flowRight<R3, R2, R1>(this: Imp<(a: R2) => R3>, f2: (a: R1) => R2, f1: () => R1): Imp<() => R3>;
        // flowRight<R4, R3, R2, R1>(this: Imp<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): Imp<() => R4>;
        // flowRight<R5, R4, R3, R2, R1>(this: Imp<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): Imp<() => R5>;
        // flowRight<R6, R5, R4, R3, R2, R1>(this: Imp<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): Imp<() => R6>;
        // flowRight<R7, R6, R5, R4, R3, R2, R1>(this: Imp<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): Imp<() => R7>;
        // flowRight<A1, R2, R1>(this: Imp<(a: R1) => R2>, f1: (a1: A1) => R1): Imp<(a1: A1) => R2>;
        // flowRight<A1, R3, R2, R1>(this: Imp<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1) => R1): Imp<(a1: A1) => R3>;
        // flowRight<A1, R4, R3, R2, R1>(this: Imp<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): Imp<(a1: A1) => R4>;
        // flowRight<A1, R5, R4, R3, R2, R1>(this: Imp<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): Imp<(a1: A1) => R5>;
        // flowRight<A1, R6, R5, R4, R3, R2, R1>(this: Imp<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): Imp<(a1: A1) => R6>;
        // flowRight<A1, R7, R6, R5, R4, R3, R2, R1>(this: Imp<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): Imp<(a1: A1) => R7>;
        // flowRight<A1, A2, R2, R1>(this: Imp<(a: R1) => R2>, f1: (a1: A1, a2: A2) => R1): Imp<(a1: A1, a2: A2) => R2>;
        // flowRight<A1, A2, R3, R2, R1>(this: Imp<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): Imp<(a1: A1, a2: A2) => R3>;
        // flowRight<A1, A2, R4, R3, R2, R1>(this: Imp<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): Imp<(a1: A1, a2: A2) => R4>;
        // flowRight<A1, A2, R5, R4, R3, R2, R1>(this: Imp<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): Imp<(a1: A1, a2: A2) => R5>;
        // flowRight<A1, A2, R6, R5, R4, R3, R2, R1>(this: Imp<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): Imp<(a1: A1, a2: A2) => R6>;
        // flowRight<A1, A2, R7, R6, R5, R4, R3, R2, R1>(this: Imp<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): Imp<(a1: A1, a2: A2) => R7>;
        // flowRight<A1, A2, A3, R2, R1>(this: Imp<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3) => R1): Imp<(a1: A1, a2: A2, a3: A3) => R2>;
        // flowRight<A1, A2, A3, R3, R2, R1>(this: Imp<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): Imp<(a1: A1, a2: A2, a3: A3) => R3>;
        // flowRight<A1, A2, A3, R4, R3, R2, R1>(this: Imp<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): Imp<(a1: A1, a2: A2, a3: A3) => R4>;
        // flowRight<A1, A2, A3, R5, R4, R3, R2, R1>(this: Imp<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): Imp<(a1: A1, a2: A2, a3: A3) => R5>;
        // flowRight<A1, A2, A3, R6, R5, R4, R3, R2, R1>(this: Imp<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): Imp<(a1: A1, a2: A2, a3: A3) => R6>;
        // flowRight<A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(this: Imp<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): Imp<(a1: A1, a2: A2, a3: A3) => R7>;
        // flowRight<A1, A2, A3, A4, R2, R1>(this: Imp<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        // flowRight<A1, A2, A3, A4, R3, R2, R1>(this: Imp<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        // flowRight<A1, A2, A3, A4, R4, R3, R2, R1>(this: Imp<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        // flowRight<A1, A2, A3, A4, R5, R4, R3, R2, R1>(this: Imp<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        // flowRight<A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(this: Imp<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        // flowRight<A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(this: Imp<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Imp<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        // flowRight<R2, R1>(this: Imp<(a: R1) => R2>, f1: (...args: any[]) => R1): Imp<(...args: any[]) => R2>;
        // flowRight<R3, R2, R1>(this: Imp<(a: R1) => R2>, f2: (a: R1) => R2, f1: (...args: any[]) => R1): Imp<(...args: any[]) => R3>;
        // flowRight<R4, R3, R2, R1>(this: Imp<(a: R1) => R2>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): Imp<(...args: any[]) => R4>;
        // flowRight<R5, R4, R3, R2, R1>(this: Imp<(a: R1) => R2>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): Imp<(...args: any[]) => R5>;
        // flowRight<R6, R5, R4, R3, R2, R1>(this: Imp<(a: R1) => R2>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): Imp<(...args: any[]) => R6>;
        // flowRight<R7, R6, R5, R4, R3, R2, R1>(this: Imp<(a: R1) => R2>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): Imp<(...args: any[]) => R7>;
        // flowRight(this: Imp<(a: any) => any>, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<Many<(...args: any[]) => any>>): Imp<(...args: any[]) => any>;
        // flowRight(this: Imp<(a: any) => any>, funcs: Array<Many<(...args: any[]) => any>>): Imp<(...args: any[]) => any>;
    }
    interface Exp<TValue> {
        flowRight: any;
        // flowRight<R2, R1>(this: Exp<(a: R1) => R2>, f1: () => R1): Exp<() => R2>;
        // flowRight<R3, R2, R1>(this: Exp<(a: R2) => R3>, f2: (a: R1) => R2, f1: () => R1): Exp<() => R3>;
        // flowRight<R4, R3, R2, R1>(this: Exp<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): Exp<() => R4>;
        // flowRight<R5, R4, R3, R2, R1>(this: Exp<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): Exp<() => R5>;
        // flowRight<R6, R5, R4, R3, R2, R1>(this: Exp<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): Exp<() => R6>;
        // flowRight<R7, R6, R5, R4, R3, R2, R1>(this: Exp<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: () => R1): Exp<() => R7>;
        // flowRight<A1, R2, R1>(this: Exp<(a: R1) => R2>, f1: (a1: A1) => R1): Exp<(a1: A1) => R2>;
        // flowRight<A1, R3, R2, R1>(this: Exp<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1) => R1): Exp<(a1: A1) => R3>;
        // flowRight<A1, R4, R3, R2, R1>(this: Exp<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): Exp<(a1: A1) => R4>;
        // flowRight<A1, R5, R4, R3, R2, R1>(this: Exp<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): Exp<(a1: A1) => R5>;
        // flowRight<A1, R6, R5, R4, R3, R2, R1>(this: Exp<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): Exp<(a1: A1) => R6>;
        // flowRight<A1, R7, R6, R5, R4, R3, R2, R1>(this: Exp<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1) => R1): Exp<(a1: A1) => R7>;
        // flowRight<A1, A2, R2, R1>(this: Exp<(a: R1) => R2>, f1: (a1: A1, a2: A2) => R1): Exp<(a1: A1, a2: A2) => R2>;
        // flowRight<A1, A2, R3, R2, R1>(this: Exp<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): Exp<(a1: A1, a2: A2) => R3>;
        // flowRight<A1, A2, R4, R3, R2, R1>(this: Exp<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): Exp<(a1: A1, a2: A2) => R4>;
        // flowRight<A1, A2, R5, R4, R3, R2, R1>(this: Exp<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): Exp<(a1: A1, a2: A2) => R5>;
        // flowRight<A1, A2, R6, R5, R4, R3, R2, R1>(this: Exp<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): Exp<(a1: A1, a2: A2) => R6>;
        // flowRight<A1, A2, R7, R6, R5, R4, R3, R2, R1>(this: Exp<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2) => R1): Exp<(a1: A1, a2: A2) => R7>;
        // flowRight<A1, A2, A3, R2, R1>(this: Exp<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3) => R1): Exp<(a1: A1, a2: A2, a3: A3) => R2>;
        // flowRight<A1, A2, A3, R3, R2, R1>(this: Exp<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): Exp<(a1: A1, a2: A2, a3: A3) => R3>;
        // flowRight<A1, A2, A3, R4, R3, R2, R1>(this: Exp<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): Exp<(a1: A1, a2: A2, a3: A3) => R4>;
        // flowRight<A1, A2, A3, R5, R4, R3, R2, R1>(this: Exp<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): Exp<(a1: A1, a2: A2, a3: A3) => R5>;
        // flowRight<A1, A2, A3, R6, R5, R4, R3, R2, R1>(this: Exp<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): Exp<(a1: A1, a2: A2, a3: A3) => R6>;
        // flowRight<A1, A2, A3, R7, R6, R5, R4, R3, R2, R1>(this: Exp<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3) => R1): Exp<(a1: A1, a2: A2, a3: A3) => R7>;
        // flowRight<A1, A2, A3, A4, R2, R1>(this: Exp<(a: R1) => R2>, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R2>;
        // flowRight<A1, A2, A3, A4, R3, R2, R1>(this: Exp<(a: R2) => R3>, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R3>;
        // flowRight<A1, A2, A3, A4, R4, R3, R2, R1>(this: Exp<(a: R3) => R4>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R4>;
        // flowRight<A1, A2, A3, A4, R5, R4, R3, R2, R1>(this: Exp<(a: R4) => R5>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R5>;
        // flowRight<A1, A2, A3, A4, R6, R5, R4, R3, R2, R1>(this: Exp<(a: R5) => R6>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R6>;
        // flowRight<A1, A2, A3, A4, R7, R6, R5, R4, R3, R2, R1>(this: Exp<(a: R6) => R7>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1): Exp<(a1: A1, a2: A2, a3: A3, a4: A4) => R7>;
        // flowRight<R2, R1>(this: Exp<(a: R1) => R2>, f1: (...args: any[]) => R1): Exp<(...args: any[]) => R2>;
        // flowRight<R3, R2, R1>(this: Exp<(a: R1) => R2>, f2: (a: R1) => R2, f1: (...args: any[]) => R1): Exp<(...args: any[]) => R3>;
        // flowRight<R4, R3, R2, R1>(this: Exp<(a: R1) => R2>, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): Exp<(...args: any[]) => R4>;
        // flowRight<R5, R4, R3, R2, R1>(this: Exp<(a: R1) => R2>, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): Exp<(...args: any[]) => R5>;
        // flowRight<R6, R5, R4, R3, R2, R1>(this: Exp<(a: R1) => R2>, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): Exp<(...args: any[]) => R6>;
        // flowRight<R7, R6, R5, R4, R3, R2, R1>(this: Exp<(a: R1) => R2>, f6: (a: R5) => R6, f5: (a: R4) => R5, f4: (a: R3) => R4, f3: (a: R2) => R3, f2: (a: R1) => R2, f1: (...args: any[]) => R1): Exp<(...args: any[]) => R7>;
        // flowRight(this: Exp<(a: any) => any>, f6: (a: any) => any, f5: (a: any) => any, f4: (a: any) => any, f3: (a: any) => any, f2: (a: any) => any, f1: () => any, ...funcs: Array<Many<(...args: any[]) => any>>): Exp<(...args: any[]) => any>;
        // flowRight(this: Exp<(a: any) => any>, funcs: Array<Many<(...args: any[]) => any>>): Exp<(...args: any[]) => any>;
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
    interface ImpF<T> {
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
    interface ExpF<T> {
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
    interface Imp<TValue> {
        over<TResult>(this: Imp<Many<(...args: any[]) => TResult>>, ...iteratees: Array<Many<(...args: any[]) => TResult>>): Imp<(...args: any[]) => TResult[]>;
    }
    interface Exp<TValue> {
        over<TResult>(this: Exp<Many<(...args: any[]) => TResult>>, ...iteratees: Array<Many<(...args: any[]) => TResult>>): Exp<(...args: any[]) => TResult[]>;
    }

    interface Stat {
        overEvery<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
    interface Imp<TValue> {
        overEvery<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): Imp<(...args: T[]) => boolean>;
    }
    interface Exp<TValue> {
        overEvery<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): Exp<(...args: T[]) => boolean>;
    }

    interface Stat {
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
    interface Imp<TValue> {
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): Imp<(...args: T[]) => boolean>;
    }
    interface Exp<TValue> {
        overSome<T>(...predicates: Array<Many<(...args: T[]) => boolean>>): Exp<(...args: T[]) => boolean>;
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

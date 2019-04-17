import _ = require("../index");
declare module "../index" {
    interface Stat {
        add(augend: number, addend: number): number;
    }
    interface Imp<TValue> {
        add(addend: number): number;
    }
    interface Exp<TValue> {
        add(addend: number): Exp<number>;
    }

    interface Stat {
        ceil(n: number, precision?: number): number;
    }
    interface Imp<TValue> {
        ceil(precision?: number): number;
    }
    interface Exp<TValue> {
        ceil(precision?: number): Exp<number>;
    }

    interface Stat {
        divide(dividend: number, divisor: number): number;
    }
    interface Imp<TValue> {
        divide(divisor: number): number;
    }
    interface Exp<TValue> {
        divide(divisor: number): Exp<number>;
    }

    interface Stat {
        floor(n: number, precision?: number): number;
    }
    interface Imp<TValue> {
        floor(precision?: number): number;
    }
    interface Exp<TValue> {
        floor(precision?: number): Exp<number>;
    }

    interface Stat {
        max<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface Imp<TValue> {
        max<T>(this: Imp<List<T> | null | undefined>): T | undefined;
    }
    interface Exp<TValue> {
        max<T>(this: Exp<List<T> | null | undefined>): Exp<T | undefined>;
    }

    interface Stat {
        maxBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface Imp<TValue> {
        maxBy<T>(this: Imp<List<T> | null | undefined>, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface Exp<TValue> {
        maxBy<T>(this: Exp<List<T> | null | undefined>, iteratee?: ValueIteratee<T>): Exp<T | undefined>;
    }

    interface Stat {
        mean(collection: List<any> | null | undefined): number;
    }
    interface Imp<TValue> {
        mean(): number;
    }
    interface Exp<TValue> {
        mean(): Exp<number>;
    }

    interface Stat {
        meanBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): number;
    }
    interface Imp<TValue> {
        meanBy<T>(this: Imp<List<T> | null | undefined>, iteratee?: ValueIteratee<T>): number;
    }
    interface Exp<TValue> {
        meanBy<T>(this: Exp<List<T> | null | undefined>, iteratee?: ValueIteratee<T>): Exp<number>;
    }

    interface Stat {
        min<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface Imp<TValue> {
        min<T>(this: Imp<List<T> | null | undefined>): T | undefined;
    }
    interface Exp<TValue> {
        min<T>(this: Exp<List<T> | null | undefined>): Exp<T | undefined>;
    }

    interface Stat {
        minBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface Imp<TValue> {
        minBy<T>(this: Imp<List<T> | null | undefined>, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface Exp<TValue> {
        minBy<T>(this: Exp<List<T> | null | undefined>, iteratee?: ValueIteratee<T>): Exp<T | undefined>;
    }

    interface Stat {
        multiply(multiplier: number, multiplicand: number): number;
    }
    interface Imp<TValue> {
        multiply(multiplicand: number): number;
    }
    interface Exp<TValue> {
        multiply(multiplicand: number): Exp<number>;
    }

    interface Stat {
        round(n: number, precision?: number): number;
    }
    interface Imp<TValue> {
        round(precision?: number): number;
    }
    interface Exp<TValue> {
        round(precision?: number): Exp<number>;
    }

    interface Stat {
        subtract(minuend: number, subtrahend: number): number;
    }
    interface Imp<TValue> {
        subtract(subtrahend: number): number;
    }
    interface Exp<TValue> {
        subtract(subtrahend: number): Exp<number>;
    }

    interface Stat {
        sum(collection: List<any> | null | undefined): number;
    }
    interface Imp<TValue> {
        sum(): number;
    }
    interface Exp<TValue> {
        sum(): Exp<number>;
    }

    interface Stat {
        sumBy<T>(collection: List<T> | null | undefined, iteratee?: ((value: T) => number) | string): number;
    }
    interface Imp<TValue> {
        sumBy<T>(this: Imp<List<T> | null | undefined>, iteratee?: ((value: T) => number) | string): number;
    }
    interface Exp<TValue> {
        sumBy<T>(this: Exp<List<T> | null | undefined>, iteratee?: ((value: T) => number) | string): Exp<number>;
    }
}

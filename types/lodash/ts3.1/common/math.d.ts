import _ = require("../index");
declare module "../index" {
    interface Stat {
        add(augend: number, addend: number): number;
    }
    interface Imp<TValue> {
        add(addend: number): number;
    }
    interface Exp<TValue> {
        add(addend: number): ExpU<number>;
    }

    interface Stat {
        ceil(n: number, precision?: number): number;
    }
    interface Imp<TValue> {
        ceil(precision?: number): number;
    }
    interface Exp<TValue> {
        ceil(precision?: number): ExpU<number>;
    }

    interface Stat {
        divide(dividend: number, divisor: number): number;
    }
    interface Imp<TValue> {
        divide(divisor: number): number;
    }
    interface Exp<TValue> {
        divide(divisor: number): ExpU<number>;
    }

    interface Stat {
        floor(n: number, precision?: number): number;
    }
    interface Imp<TValue> {
        floor(precision?: number): number;
    }
    interface Exp<TValue> {
        floor(precision?: number): ExpU<number>;
    }

    interface Stat {
        max<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface ImpL<T> {
        max(): T | undefined;
    }
    interface ExpL<T> {
        max(): Exp<T | undefined>;
    }

    interface Stat {
        maxBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface ImpL<T> {
        maxBy(iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface ExpL<T> {
        maxBy(iteratee?: ValueIteratee<T>): Exp<T | undefined>;
    }

    interface Stat {
        mean(collection: List<any> | null | undefined): number;
    }
    interface Imp<TValue> {
        mean(): number;
    }
    interface Exp<TValue> {
        mean(): ExpU<number>;
    }

    interface Stat {
        meanBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): number;
    }
    interface ImpL<T> {
        meanBy(iteratee?: ValueIteratee<T>): number;
    }
    interface ExpL<T> {
        meanBy(iteratee?: ValueIteratee<T>): ExpU<number>;
    }

    interface Stat {
        min<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface ImpL<T> {
        min(): T | undefined;
    }
    interface ExpL<T> {
        min(): Exp<T | undefined>;
    }

    interface Stat {
        minBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface ImpL<T> {
        minBy(iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface ExpL<T> {
        minBy(iteratee?: ValueIteratee<T>): Exp<T | undefined>;
    }

    interface Stat {
        multiply(multiplier: number, multiplicand: number): number;
    }
    interface Imp<TValue> {
        multiply(multiplicand: number): number;
    }
    interface Exp<TValue> {
        multiply(multiplicand: number): ExpU<number>;
    }

    interface Stat {
        round(n: number, precision?: number): number;
    }
    interface Imp<TValue> {
        round(precision?: number): number;
    }
    interface Exp<TValue> {
        round(precision?: number): ExpU<number>;
    }

    interface Stat {
        subtract(minuend: number, subtrahend: number): number;
    }
    interface Imp<TValue> {
        subtract(subtrahend: number): number;
    }
    interface Exp<TValue> {
        subtract(subtrahend: number): ExpU<number>;
    }

    interface Stat {
        sum(collection: List<any> | null | undefined): number;
    }
    interface Imp<TValue> {
        sum(): number;
    }
    interface Exp<TValue> {
        sum(): ExpU<number>;
    }

    interface Stat {
        sumBy<T>(collection: List<T> | null | undefined, iteratee?: ((value: T) => number) | string): number;
    }
    interface ImpL<T> {
        sumBy(iteratee?: ((value: T) => number) | string): number;
    }
    interface ExpL<T> {
        sumBy(iteratee?: ((value: T) => number) | string): ExpU<number>;
    }
}

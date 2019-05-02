import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        add(augend: number, addend: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        add(addend: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        add(addend: number): ExpU<number>;
    }

    interface LoDashStatic {
        ceil(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        ceil(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        ceil(precision?: number): ExpU<number>;
    }

    interface LoDashStatic {
        divide(dividend: number, divisor: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        divide(divisor: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        divide(divisor: number): ExpU<number>;
    }

    interface LoDashStatic {
        floor(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        floor(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        floor(precision?: number): ExpU<number>;
    }

    interface LoDashStatic {
        max<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface ImpL<T> {
        max(): T | undefined;
    }
    interface ExpL<T> {
        max(): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        maxBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface ImpL<T> {
        maxBy(iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface ExpL<T> {
        maxBy(iteratee?: ValueIteratee<T>): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        mean(collection: List<any> | null | undefined): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        mean(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        mean(): ExpU<number>;
    }

    interface LoDashStatic {
        meanBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): number;
    }
    interface ImpL<T> {
        meanBy(iteratee?: ValueIteratee<T>): number;
    }
    interface ExpL<T> {
        meanBy(iteratee?: ValueIteratee<T>): ExpU<number>;
    }

    interface LoDashStatic {
        min<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface ImpL<T> {
        min(): T | undefined;
    }
    interface ExpL<T> {
        min(): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        minBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface ImpL<T> {
        minBy(iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface ExpL<T> {
        minBy(iteratee?: ValueIteratee<T>): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        multiply(multiplier: number, multiplicand: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        multiply(multiplicand: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        multiply(multiplicand: number): ExpU<number>;
    }

    interface LoDashStatic {
        round(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        round(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        round(precision?: number): ExpU<number>;
    }

    interface LoDashStatic {
        subtract(minuend: number, subtrahend: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        subtract(subtrahend: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        subtract(subtrahend: number): ExpU<number>;
    }

    interface LoDashStatic {
        sum(collection: List<any> | null | undefined): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        sum(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        sum(): ExpU<number>;
    }

    interface LoDashStatic {
        sumBy<T>(collection: List<T> | null | undefined, iteratee?: ((value: T) => number) | string): number;
    }
    interface ImpL<T> {
        sumBy(iteratee?: ((value: T) => number) | string): number;
    }
    interface ExpL<T> {
        sumBy(iteratee?: ((value: T) => number) | string): ExpU<number>;
    }
}

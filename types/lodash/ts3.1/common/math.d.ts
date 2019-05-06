import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        add(augend: number, addend: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        add(addend: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        add(addend: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        ceil(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        ceil(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        ceil(precision?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        divide(dividend: number, divisor: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        divide(divisor: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        divide(divisor: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        floor(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        floor(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        floor(precision?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        max<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface Collection<T> {
        max(): T | undefined;
    }
    interface CollectionChain<T> {
        max(): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        maxBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface Collection<T> {
        maxBy(iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface CollectionChain<T> {
        maxBy(iteratee?: ValueIteratee<T>): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        mean(collection: List<any> | null | undefined): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        mean(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        mean(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        meanBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): number;
    }
    interface Collection<T> {
        meanBy(iteratee?: ValueIteratee<T>): number;
    }
    interface CollectionChain<T> {
        meanBy(iteratee?: ValueIteratee<T>): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        min<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface Collection<T> {
        min(): T | undefined;
    }
    interface CollectionChain<T> {
        min(): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        minBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface Collection<T> {
        minBy(iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface CollectionChain<T> {
        minBy(iteratee?: ValueIteratee<T>): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        multiply(multiplier: number, multiplicand: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        multiply(multiplicand: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        multiply(multiplicand: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        round(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        round(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        round(precision?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        subtract(minuend: number, subtrahend: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        subtract(subtrahend: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        subtract(subtrahend: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        sum(collection: List<any> | null | undefined): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        sum(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        sum(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        sumBy<T>(collection: List<T> | null | undefined, iteratee?: ((value: T) => number) | string): number;
    }
    interface Collection<T> {
        sumBy(iteratee?: ((value: T) => number) | string): number;
    }
    interface CollectionChain<T> {
        sumBy(iteratee?: ((value: T) => number) | string): PrimitiveChain<number>;
    }
}

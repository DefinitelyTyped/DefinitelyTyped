import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * @see _.add
         */
        add(augend: number, addend: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.add
         */
        add(addend: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.add
         */
        add(addend: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.ceil
         */
        ceil(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.divide
         */
        divide(dividend: number, divisor: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.divide
         */
        divide(divisor: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.divide
         */
        divide(divisor: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.floor
         */
        floor(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.floor
         */
        floor(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.floor
         */
        floor(precision?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.max
         */
        max<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.max
         */
        max(): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.max
         */
        max(): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        /**
         * @see _.maxBy
         */
        maxBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.maxBy
         */
        maxBy(iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.maxBy
         */
        maxBy(iteratee?: ValueIteratee<T>): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        /**
         * @see _.mean
         */
        mean(collection: List<any> | null | undefined): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.mean
         */
        mean(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.mean
         */
        mean(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.meanBy
         */
        meanBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): number;
    }
    interface Collection<T> {
        /**
         * @see _.meanBy
         */
        meanBy(iteratee?: ValueIteratee<T>): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.meanBy
         */
        meanBy(iteratee?: ValueIteratee<T>): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.min
         */
        min<T>(collection: List<T> | null | undefined): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.min
         */
        min(): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.min
         */
        min(): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        /**
         * @see _.minBy
         */
        minBy<T>(collection: List<T> | null | undefined, iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface Collection<T> {
        /**
         * @see _.minBy
         */
        minBy(iteratee?: ValueIteratee<T>): T | undefined;
    }
    interface CollectionChain<T> {
        /**
         * @see _.minBy
         */
        minBy(iteratee?: ValueIteratee<T>): LoDashExplicitWrapper<T | undefined>;
    }

    interface LoDashStatic {
        /**
         * @see _.multiply
         */
        multiply(multiplier: number, multiplicand: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.multiply
         */
        multiply(multiplicand: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.multiply
         */
        multiply(multiplicand: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.round
         */
        round(n: number, precision?: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.round
         */
        round(precision?: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.round
         */
        round(precision?: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.subtract
         */
        subtract(minuend: number, subtrahend: number): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.subtract
         */
        subtract(subtrahend: number): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.subtract
         */
        subtract(subtrahend: number): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.sum
         */
        sum(collection: List<any> | null | undefined): number;
    }
    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sum
         */
        sum(): number;
    }
    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sum
         */
        sum(): PrimitiveChain<number>;
    }

    interface LoDashStatic {
        /**
         * @see _.sumBy
         */
        sumBy<T>(collection: List<T> | null | undefined, iteratee?: ((value: T) => number) | string): number;
    }
    interface Collection<T> {
        /**
         * @see _.sumBy
         */
        sumBy(iteratee?: ((value: T) => number) | string): number;
    }
    interface CollectionChain<T> {
        /**
         * @see _.sumBy
         */
        sumBy(iteratee?: ((value: T) => number) | string): PrimitiveChain<number>;
    }
}

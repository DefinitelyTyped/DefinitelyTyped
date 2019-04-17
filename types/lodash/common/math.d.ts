import _ = require("../index");
declare module "../index" {
    // add

    interface Stat {
        /**
         * Adds two numbers.
         *
         * @param augend The first number to add.
         * @param addend The second number to add.
         * @return Returns the sum.
         */
        add(
            augend: number,
            addend: number
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.add
         */
        add(addend: number): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.add
         */
        add(addend: number): Exp<number>;
    }

    // ceil

    interface Stat {
        /**
         * Calculates n rounded up to precision.
         *
         * @param n The number to round up.
         * @param precision The precision to round up to.
         * @return Returns the rounded up number.
         */
        ceil(
            n: number,
            precision?: number
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): Exp<number>;
    }

    // divide

    interface Stat {
       /**
        * Divide two numbers.
        *
        * @param dividend The first number in a division.
        * @param divisor The second number in a division.
        * @returns Returns the quotient.
        */
        divide(
            dividend: number,
            divisor: number
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.divide
         */
        divide(divisor: number): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.divide
         */
        divide(divisor: number): Exp<number>;
    }

    // floor

    interface Stat {
        /**
         * Calculates n rounded down to precision.
         *
         * @param n The number to round down.
         * @param precision The precision to round down to.
         * @return Returns the rounded down number.
         */
        floor(
            n: number,
            precision?: number
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.floor
         */
        floor(precision?: number): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.floor
         */
        floor(precision?: number): Exp<number>;
    }

    // max

    interface Stat {
         /**
          * Computes the maximum value of `array`. If `array` is empty or falsey
          * `undefined` is returned.
          *
          * @category Math
          * @param array The array to iterate over.
          * @returns Returns the maximum value.
          */
        max<T>(
            collection: List<T> | null | undefined
        ): T | undefined;
    }

    interface Imp<TValue> {
        /**
         * @see _.max
         */
        max<T>(this: Imp<List<T> | null | undefined>): T | undefined;
    }

    interface Exp<TValue> {
        /**
         * @see _.max
         */
        max<T>(this: Exp<List<T> | null | undefined>): Exp<T | undefined>;
    }

    // maxBy

    interface Stat {
        /**
         * This method is like `_.max` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @category Math
         * @param array The array to iterate over.
         * @param iteratee The iteratee invoked per element.
         * @returns Returns the maximum value.
         * @example
         *
         * var objects = [{ 'n': 1 }, { 'n': 2 }];
         *
         * _.maxBy(objects, function(o) { return o.a; });
         * // => { 'n': 2 }
         *
         * // using the `_.property` iteratee shorthand
         * _.maxBy(objects, 'n');
         * // => { 'n': 2 }
         */
        maxBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T | undefined;
    }

    interface Imp<TValue> {
        /**
         * @see _.maxBy
         */
        maxBy<T>(
            this: Imp<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): T | undefined;
    }

    interface Exp<TValue> {
        /**
         * @see _.maxBy
         */
        maxBy<T>(
            this: Exp<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): Exp<T | undefined>;
    }

    // mean

    interface Stat {
        /**
         * Computes the mean of the values in `array`.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the mean.
         * @example
         *
         * _.mean([4, 2, 8, 6]);
         * // => 5
         */
        mean(
            collection: List<any> | null | undefined
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.mean
         */
        mean(): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.mean
         */
        mean(): Exp<number>;
    }

    // meanBy

    interface Stat {
      /**
       * Computes the mean of the provided propties of the objects in the `array`
       *
       * @category Math
       * @param array The array to iterate over.
       * @param iteratee The iteratee invoked per element.
       * @returns Returns the mean.
       * @example
       *
       * _.mean([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n');
       * // => 5
       */
        meanBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.meanBy
         */
        meanBy<T>(
            this: Imp<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.meanBy
         */
        meanBy<T>(
            this: Exp<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): Exp<number>;
    }

    // min

    interface Stat {
        /**
         * Computes the minimum value of `array`. If `array` is empty or falsey
         * `undefined` is returned.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the minimum value.
         */
        min<T>(
            collection: List<T> | null | undefined
        ): T | undefined;
    }

    interface Imp<TValue> {
        /**
         * @see _.min
         */
        min<T>(this: Imp<List<T> | null | undefined>): T | undefined;
    }

    interface Exp<TValue> {
        /**
         * @see _.min
         */
        min<T>(this: Exp<List<T> | null | undefined>): Exp<T | undefined>;
    }

    // minBy

    interface Stat {
        /**
         * This method is like `_.min` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @category Math
         * @param array The array to iterate over.
         * @param iteratee The iteratee invoked per element.
         * @returns Returns the minimum value.
         * @example
         *
         * var objects = [{ 'n': 1 }, { 'n': 2 }];
         *
         * _.minBy(objects, function(o) { return o.a; });
         * // => { 'n': 1 }
         *
         * // using the `_.property` iteratee shorthand
         * _.minBy(objects, 'n');
         * // => { 'n': 1 }
         */
        minBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ValueIteratee<T>
        ): T | undefined;
    }

    interface Imp<TValue> {
        /**
         * @see _.minBy
         */
        minBy<T>(
            this: Imp<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): T | undefined;
    }

    interface Exp<TValue> {
        /**
         * @see _.minBy
         */
        minBy<T>(
            this: Exp<List<T> | null | undefined>,
            iteratee?: ValueIteratee<T>
        ): Exp<T | undefined>;
    }

    // multiply

    interface Stat {
        /**
         * Multiply two numbers.
         * @param multiplier The first number in a multiplication.
         * @param multiplicand The second number in a multiplication.
         * @returns Returns the product.
         */
        multiply(
            multiplier: number,
            multiplicand: number
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.multiply
         */
        multiply(multiplicand: number): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.multiply
         */
        multiply(multiplicand: number): Exp<number>;
    }

    // round

    interface Stat {
        /**
         * Calculates n rounded to precision.
         *
         * @param n The number to round.
         * @param precision The precision to round to.
         * @return Returns the rounded number.
         */
        round(
            n: number,
            precision?: number
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.round
         */
        round(precision?: number): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.round
         */
        round(precision?: number): Exp<number>;
    }

    // subtract

    interface Stat {
        /**
         * Subtract two numbers.
         *
         * @category Math
         * @param minuend The first number in a subtraction.
         * @param subtrahend The second number in a subtraction.
         * @returns Returns the difference.
         * @example
         *
         * _.subtract(6, 4);
         * // => 2
         */
        subtract(
            minuend: number,
            subtrahend: number
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.subtract
         */
        subtract(
            subtrahend: number
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.subtract
         */
        subtract(
            subtrahend: number
        ): Exp<number>;
    }

    // sum

    interface Stat {
        /**
         * Computes the sum of the values in `array`.
         *
         * @category Math
         * @param array The array to iterate over.
         * @returns Returns the sum.
         * @example
         *
         * _.sum([4, 2, 8, 6]);
         * // => 20
         */
        sum(collection: List<any> | null | undefined): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.sum
         */
        sum(): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.sum
         */
        sum(): Exp<number>;
    }

    // sumBy

    interface Stat {
        /**
         * This method is like `_.sum` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the value to be summed.
         * The iteratee is invoked with one argument: (value).
         *
         * @category Math
         * @param array The array to iterate over.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the sum.
         * @example
         *
         * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
         *
         * _.sumBy(objects, function(o) { return o.n; });
         * // => 20
         *
         * // using the `_.property` iteratee shorthand
         * _.sumBy(objects, 'n');
         * // => 20
         */
        sumBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ((value: T) => number) | string
        ): number;
    }

    interface Imp<TValue> {
        /**
         * @see _.sumBy
         */
        sumBy<T>(
            this: Imp<List<T> | null | undefined>,
            iteratee?: ((value: T) => number) | string
        ): number;
    }

    interface Exp<TValue> {
        /**
         * @see _.sumBy
         */
        sumBy<T>(
            this: Exp<List<T> | null | undefined>,
            iteratee?: ((value: T) => number) | string
        ): Exp<number>;
    }
}

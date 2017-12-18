// Type definitions for bignumber.js 4.0
// Project: https://github.com/MikeMcl/bignumber.js/
// Definitions by: Viktor Smirnov <https://github.com/LaserUnicorns>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare var BigNumber: BigNumber.BigNumberStatic;

export as namespace BigNumber;
export = BigNumber;

declare namespace BigNumber {
    interface FormatConfig {
        /**
         * The decimal separator.
         */
        decimalSeparator: string;

        /**
         * The grouping separator of the integer part.
         */
        groupSeparator: string;

        /**
         * The primary grouping size of the integer part.
         */
        groupSize: number;

        /**
         * The secondary grouping size of the integer part.
         */
        secondaryGroupSize: number;

        /**
         * The grouping separator of the fraction part.
         */
        fractionGroupSeparator: string;

        /**
         * The grouping size of the fraction part.
         */
        fractionGroupSize: number;
    }

    interface BigNumberConfig {
        /**
         * The maximum number of decimal places of the results of operations involving division,
         * i.e. division, square root and base conversion operations, and power operations with negative exponents.
         */
        DECIMAL_PLACES: number;

        /**
         * The rounding mode used in the above operations and the default rounding mode of round, `toExponential`, `toFixed`, `toFormat` and `toPrecision`.
         */
        ROUNDING_MODE: RoundingMode;

        /**
         * The exponent value(s) at which `toString` returns exponential notation.
         *
         * If a single number is assigned, the value is the exponent magnitude.
         *
         * If an array of two numbers is assigned then the first number is the negative exponent value at and beneath which exponential notation is used,
         * and the second number is the positive exponent value at and above which the same.
         */
        EXPONENTIAL_AT: number | number[];

        /**
         * The exponent value(s) beyond which overflow to `Infinity` and underflow to zero occurs.
         *
         * If a single number is assigned, it is the maximum exponent magnitude:
         * values wth a positive exponent of greater magnitude become `Infinity`
         * and those with a negative exponent of greater magnitude become zero.
         *
         * If an array of two numbers is assigned then the first number is the negative exponent limit and the second number is the positive exponent limit.
         */
        RANGE: number | number[];

        /**
         * The value that determines whether BigNumber Errors are thrown.
         *
         * If `ERRORS` is false, no errors will be thrown.
         */
        ERRORS: boolean | 0 | 1;

        /**
         * The value that determines whether cryptographically-secure pseudo-random number generation is used.
         *
         * If `CRYPTO` is set to `true` then the `random` method will generate random digits using `crypto.getRandomValues` in browsers that support it,
         * or `crypto.randomBytes` if using a version of Node.js that supports it.
         *
         * If neither function is supported by the host environment then attempting to set `CRYPTO` to `true` will fail, and if `ERRORS` is `true` an exception will be thrown.
         *
         * If `CRYPTO` is `false` then the source of randomness used will be `Math.random` (which is assumed to generate at least `30` bits of randomness).
         */
        CRYPTO: boolean | 0 | 1;

        /**
         * The modulo mode used when calculating the modulus: `a mod n`.
         *
         * The quotient, `q = a / n`, is calculated according to the `ROUNDING_MODE` that corresponds to the chosen `MODULO_MODE`.
         *
         * The remainder, `r`, is calculated as: `r = a - n * q`.
         */
        MODULO_MODE: ModuloMode;

        /**
         * The maximum number of significant digits of the result of the power operation (unless a modulus is specified).
         *
         * If set to `0`, the number of signifcant digits will not be limited.
         */
        POW_PRECISION: number;

        /**
         * The `FORMAT` object configures the format of the string returned by the toFormat method.
         */
        FORMAT: Partial<FormatConfig>;
    }

    type NumberLike = number | string | BigNumber;
    type RoundingMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    type ModuloMode = RoundingMode | 9;

    interface BigNumberStatic {
        /**
         * Returns a new instance of a BigNumber object.
         */
        (value: NumberLike, base?: number): BigNumber;

        /**
         * Returns a new instance of a BigNumber object.
         */
        new (value: NumberLike, base?: number): BigNumber;

        /**
         * Returns a new independent BigNumber constructor with configuration as described by obj, or with the default configuration if obj is null or undefined.
         */
        another(obj?: Partial<BigNumberConfig>): BigNumberStatic;

        /**
         * Configures the settings for this particular BigNumber constructor.
         *
         */
        config(obj?: Partial<BigNumberConfig>): BigNumberConfig;

        /**
         * Configures the settings for this particular BigNumber constructor.
         */
        config(
            DECIMAL_PLACES?: number,
            ROUNDING_MODE?: RoundingMode,
            EXPONENTIAL_AT?: number | number[],
            RANGE?: number | number[],
            ERRORS?: boolean | 0 | 1,
            CRYPTO?: boolean | 0 | 1,
            MODULO_MODE?: ModuloMode,
            POW_PRECISION?: number
        ): BigNumberConfig;

        /**
         * Configures the settings for this particular BigNumber constructor.
         */
        set(obj?: Partial<BigNumberConfig>): BigNumberConfig;

        /**
         * Configures the settings for this particular BigNumber constructor.
         */
        set(
            DECIMAL_PLACES?: number,
            ROUNDING_MODE?: RoundingMode,
            EXPONENTIAL_AT?: number | number[],
            RANGE?: number | number[],
            ERRORS?: boolean | 0 | 1,
            CRYPTO?: boolean | 0 | 1,
            MODULO_MODE?: ModuloMode,
            POW_PRECISION?: number
        ): BigNumberConfig;

        /**
         * Returns a BigNumber whose value is the maximum of `args`.
         */
        max(...args: NumberLike[]): BigNumber;

        /**
         * Returns a BigNumber whose value is the maximum of `args`.
         */
        max(args: NumberLike[]): BigNumber;

        /**
         * Returns a BigNumber whose value is the minimum of `args`.
         */
        min(...args: NumberLike[]): BigNumber;

        /**
         * Returns a BigNumber whose value is the minimum of `args`.
         */
        min(args: NumberLike[]): BigNumber;

        /**
         * Returns a new BigNumber with a pseudo-random value equal to or greater than `0` and less than `1`.
         *
         * The return value will have `dp` decimal places (or less if trailing zeros are produced).
         * If `dp` is omitted then the number of decimal places will default to the current `DECIMAL_PLACES` setting.
         *
         * Depending on the value of this BigNumber constructor's `CRYPTO` setting and the support for the `crypto` object in the host environment,
         * the random digits of the return value are generated by either
         * `Math.random` (fastest),
         * `crypto.getRandomValues` (Web Cryptography API in recent browsers)
         * or `crypto.randomBytes` (Node.js).
         *
         * If `CRYPTO` is `true`, i.e. one of the `crypto` methods is to be used,
         * the value of a returned BigNumber should be cryptographically-secure and statistically indistinguishable from a random value.
         */
        random(dp?: number): BigNumber;

        /**
         * Rounds away from zero
         */
        ROUND_UP: 0;

        /**
         * Rounds towards zero
         */
        ROUND_DOWN: 1;

        /**
         * Rounds towards `Infinity`
         */
        ROUND_CEIL: 2;

        /**
         * Rounds towards `-Infinity`
         */
        ROUND_FLOOR: 3;

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds away from zero.
         */
        ROUND_HALF_UP: 4;

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards zero.
         */
        ROUND_HALF_DOWN: 5;

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards even neighbour.
         */
        ROUND_HALF_EVEN: 6;

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards `Infinity`.
         */
        ROUND_HALF_CEIL: 7;

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards `-Infinity`.
         */
        ROUND_HALF_FLOOR: 8;

        /**
         * The remainder is always positive.
         *
         * Euclidian division: `q = sign(n) * floor(a / abs(n))`
         */
        EUCLID: 9;
    }

    interface BigNumber {
        /**
         * Returns a BigNumber whose value is the absolute value, i.e. the magnitude, of the value of this BigNumber.
         */
        absoluteValue(): BigNumber;

        /**
         * Returns a BigNumber whose value is the absolute value, i.e. the magnitude, of the value of this BigNumber.
         */
        abs(): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber rounded to a whole number in the direction of positive Infinity.
         */
        ceil(): BigNumber;

        /**
         * Returns
         *
         *  `1` if the value of this BigNumber is greater than the value of `n`
         *
         * `-1` if the value of this BigNumber is less than the value of `n`
         *
         * `0` if this BigNumber and `n` have the same value
         *
         * `null` if the value of either this BigNumber or `n` is `NaN`
         */
        comparedTo(n: NumberLike, base?: number): 1 | -1 | 0 | null;

        /**
         * Returns
         *
         *  `1` if the value of this BigNumber is greater than the value of `n`
         *
         * `-1` if the value of this BigNumber is less than the value of `n`
         *
         * `0` if this BigNumber and `n` have the same value
         *
         * `null` if the value of either this BigNumber or `n` is `NaN`
         */
        cmp(n: NumberLike, base?: number): 1 | -1 | 0 | null;

        /**
         * Return the number of decimal places of the value of this BigNumber, or `null` if the value of this BigNumber is `±Infinity` or `NaN`.
         */
        decimalPlaces(): number;

        /**
         * Return the number of decimal places of the value of this BigNumber, or `null` if the value of this BigNumber is `±Infinity` or `NaN`.
         */
        dp(): number;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber divided by `n`, rounded according to the current `DECIMAL_PLACES` and `ROUNDING_MODE` configuration.
         */
        dividedBy(n: NumberLike, base?: number): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber divided by `n`, rounded according to the current `DECIMAL_PLACES` and `ROUNDING_MODE` configuration.
         */
        div(n: NumberLike, base?: number): BigNumber;

        /**
         * Return a BigNumber whose value is the integer part of dividing the value of this BigNumber by `n`.
         */
        dividedToIntegerBy(n: NumberLike, base?: number): BigNumber;

        /**
         * Return a BigNumber whose value is the integer part of dividing the value of this BigNumber by `n`.
         */
        divToInt(n: NumberLike, base?: number): BigNumber;

        /**
         * Returns `true` if the value of this BigNumber equals the value of `n`, otherwise returns `false`.
         *
         * As with JavaScript, `NaN` does not equal `NaN`.
         */
        equals(n: NumberLike, base?: number): boolean;

        /**
         * Returns `true` if the value of this BigNumber equals the value of `n`, otherwise returns `false`.
         *
         * As with JavaScript, `NaN` does not equal `NaN`.
         */
        eq(n: NumberLike, base?: number): boolean;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber rounded to a whole number in the direction of negative `Infinity`.
         */
        floor(): BigNumber;

        /**
         * Returns `true` if the value of this BigNumber is greater than the value of `n`, otherwise returns `false`.
         */
        greaterThan(n: NumberLike, base?: number): boolean;

        /**
         * Returns `true` if the value of this BigNumber is greater than the value of `n`, otherwise returns `false`.
         */
        gt(n: NumberLike, base?: number): boolean;

        /**
         * Returns `true` if the value of this BigNumber is greater than or equal to the value of `n`, otherwise returns `false`.
         */
        greaterThanOrEqualTo(n: NumberLike, base?: number): boolean;

        /**
         * Returns `true` if the value of this BigNumber is greater than or equal to the value of `n`, otherwise returns `false`.
         */
        gte(n: NumberLike, base?: number): boolean;

        /**
         * Returns `true` if the value of this BigNumber is a finite number, otherwise returns `false`.
         *
         * The only possible non-finite values of a BigNumber are `NaN`, `Infinity` and `-Infinity`.
         */
        isFinite(): boolean;

        /**
         * Returns `true` if the value of this BigNumber is a whole number, otherwise returns `false`.
         */
        isInteger(): boolean;

        /**
         * Returns `true` if the value of this BigNumber is a whole number, otherwise returns `false`.
         */
        isInt(): boolean;

        /**
         * Returns `true` if the value of this BigNumber is NaN, otherwise returns `false`.
         */
        isNaN(): boolean;

        /**
         * Returns `true` if the value of this BigNumber is negative, otherwise returns `false`.
         */
        isNegative(): boolean;

        /**
         * Returns `true` if the value of this BigNumber is negative, otherwise returns `false`.
         */
        isNeg(): boolean;

        /**
         * Returns `true` if the value of this BigNumber is zero or minus zero, otherwise returns `false`.
         */
        isZero(): boolean;

        /**
         * Returns `true` if the value of this BigNumber is less than the value of `n`, otherwise returns `false`.
         */
        lessThan(n: NumberLike, base?: number): boolean;

        /**
         * Returns `true` if the value of this BigNumber is less than the value of `n`, otherwise returns `false`.
         */
        lt(n: NumberLike, base?: number): boolean;

        /**
         * Returns `true` if the value of this BigNumber is less than or equal to the value of `n`, otherwise returns
         */
        lessThanOrEqualTo(n: NumberLike, base?: number): boolean;

        /**
         * Returns `true` if the value of this BigNumber is less than or equal to the value of `n`, otherwise returns
         */
        lte(n: NumberLike, base?: number): boolean;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber minus `n`.
         */
        minus(n: NumberLike, base?: number): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber minus `n`.
         */
        sub(n: NumberLike, base?: number): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber modulo `n`, i.e. the integer remainder of dividing this BigNumber by `n`.
         *
         * The value returned, and in particular its sign, is dependent on the value of the `MODULO_MODE` setting of this BigNumber constructor.
         * If it is `1` (default value), the result will have the same sign as this BigNumber,
         * and it will match that of Javascript's `%` operator (within the limits of double precision) and BigDecimal's `remainder` method.
         */
        modulo(n: NumberLike, base?: number): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber modulo `n`, i.e. the integer remainder of dividing this BigNumber by `n`.
         *
         * The value returned, and in particular its sign, is dependent on the value of the `MODULO_MODE` setting of this BigNumber constructor.
         * If it is `1` (default value), the result will have the same sign as this BigNumber,
         * and it will match that of Javascript's `%` operator (within the limits of double precision) and BigDecimal's `remainder` method.
         */
        mod(n: NumberLike, base?: number): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber negated, i.e. multiplied by `-1`.
         */
        negated(): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber negated, i.e. multiplied by `-1`.
         */
        neg(): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber plus `n`.
         */
        plus(n: NumberLike, base?: number): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber plus `n`.
         */
        add(n: NumberLike, base?: number): BigNumber;

        /**
         * Returns the number of significant digits of the value of this BigNumber.
         *
         * If `z` is `true` or `1` then any trailing zeros of the integer part of a number are counted as significant digits, otherwise they are not.
         */
        precision(z?: boolean | 0 | 1): number;

        /**
         * Returns the number of significant digits of the value of this BigNumber.
         *
         * If `z` is `true` or `1` then any trailing zeros of the integer part of a number are counted as significant digits, otherwise they are not.
         */
        sd(z?: boolean | 0 | 1): number;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber rounded by rounding mode `rm` to a maximum of `dp` decimal places.
         *
         * If `dp` is omitted, or is `null` or `undefined`, the return value is `n` rounded to a whole number.
         *
         * If `rm` is omitted, or is `null` or `undefined`, `ROUNDING_MODE` is used.
         */
        round(dp?: number, rm?: RoundingMode): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber shifted `n` places.
         *
         * The shift is of the decimal point, i.e. of powers of ten, and is to the left if `n` is negative or to the right if `n` is positive.
         */
        shift(n: number): BigNumber;

        /**
         * Returns a BigNumber whose value is the square root of the value of this BigNumber, rounded according to the current `DECIMAL_PLACES` and `ROUNDING_MODE` configuration.
         *
         * The return value will be correctly rounded, i.e. rounded as if the result was first calculated to an infinite number of correct digits before rounding.
         */
        squareRoot(): BigNumber;

        /**
         * Returns a BigNumber whose value is the square root of the value of this BigNumber, rounded according to the current `DECIMAL_PLACES` and `ROUNDING_MODE` configuration.
         *
         * The return value will be correctly rounded, i.e. rounded as if the result was first calculated to an infinite number of correct digits before rounding.
         */
        sqrt(): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber times `n`.
         */
        times(n: NumberLike, base?: number): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber times `n`.
         */
        mul(n: NumberLike, base?: number): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber rounded to `sd` significant digits using rounding mode `rm`.
         *
         * If `sd` is omitted or is `null` or `undefined`, the return value will not be rounded.
         *
         * If `rm` is omitted or is `null` or `undefined`, ROUNDING_MODE will be used.
         */
        toDigits(sd?: number, rm?: RoundingMode): BigNumber;

        /**
         * Returns a string representing the value of this BigNumber in exponential notation rounded using rounding mode `rm` to `dp` decimal places,
         * i.e with one digit before the decimal point and `dp` digits after it.
         *
         * If the value of this BigNumber in exponential notation has fewer than `dp` fraction digits, the return value will be appended with zeros accordingly.
         *
         * If `dp` is omitted, or is `null` or `undefined`, the number of digits after the decimal point defaults to the minimum number of digits necessary to represent the value exactly.
         *
         * If `rm` is omitted or is `null` or `undefined`, `ROUNDING_MODE` is used.
         */
        toExponential(dp?: number, rm?: RoundingMode): string;

        /**
         * Returns a string representing the value of this BigNumber in normal (fixed-point) notation rounded to `dp` decimal places using rounding mode `rm`.
         *
         * If the value of this BigNumber in normal notation has fewer than `dp` fraction digits, the return value will be appended with zeros accordingly.
         *
         * Unlike `Number.prototype.toFixed`, which returns exponential notation if a number is greater or equal to `10e21`, this method will always return normal notation.
         *
         * If `dp` is omitted or is `null` or `undefined`, the return value will be unrounded and in normal notation.
         * This is also unlike `Number.prototype.toFixed`, which returns the value to zero decimal places.
         * It is useful when fixed-point notation is required and the current `EXPONENTIAL_AT` setting causes `toString` to return exponential notation.
         *
         * If `rm` is omitted or is `null` or `undefined`, `ROUNDING_MODE` is used.
         */
        toFixed(dp?: number, rm?: RoundingMode): string;

        /**
         * Returns a string representing the value of this BigNumber in normal (fixed-point) notation rounded to `dp` decimal places using rounding mode `rm`,
         *  and formatted according to the properties of the `FORMAT` object.
         *
         * If `dp` is omitted or is `null` or `undefined`, then the return value is not rounded to a fixed number of decimal places.
         *
         * If `rm` is omitted or is `null` or `undefined`, `ROUNDING_MODE` is used.
         */
        toFormat(dp?: number, rm?: RoundingMode): string;

        /**
         * Returns a string array representing the value of this BigNumber as a simple fraction with an integer numerator and an integer denominator.
         * The denominator will be a positive non-zero value less than or equal to `max`.
         *
         * If a maximum denominator, `max`, is not specified, or is `null` or `undefined`, the denominator will be the lowest value necessary to represent the number exactly.
         */
        toFraction(max?: NumberLike): [string, string];

        /**
         * As `valueOf`.
         */
        toJSON(): string;

        /**
         * Returns the value of this BigNumber as a JavaScript number primitive.
         *
         * Type coercion with, for example, the unary plus operator will also work, except that a BigNumber with the value minus zero will be converted to positive zero.
         */
        toNumber(): number;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber raised to the power `n`, and optionally modulo a modulus `m`.
         *
         * If `n` is negative the result is rounded according to the current `DECIMAL_PLACES` and `ROUNDING_MODE` configuration.
         */
        toPower(n: number, m?: NumberLike): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber raised to the power `n`, and optionally modulo a modulus `m`.
         *
         * If `n` is negative the result is rounded according to the current `DECIMAL_PLACES` and `ROUNDING_MODE` configuration.
         */
        pow(n: number, m?: NumberLike): BigNumber;

        /**
         * Returns a string representing the value of this BigNumber rounded to `sd` significant digits using rounding mode `rm`.
         *
         * If `sd` is less than the number of digits necessary to represent the integer part of the value in normal (fixed-point) notation, then exponential notation is used.
         *
         * If `sd` is omitted, or is `null` or `undefined`, then the return value is the same as `n.toString()`.
         *
         * If `rm` is omitted or is `null` or `undefined`, `ROUNDING_MODE` is used.
         */
        toPrecision(sd?: number, rm?: RoundingMode): string;

        /**
         * Returns a string representing the value of this BigNumber in the specified base, or base `10` if `base` is omitted or is `null` or `undefined`.
         */
        toString(base?: number): string;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber truncated to a whole number.
         */
        truncated(): BigNumber;

        /**
         * Returns a BigNumber whose value is the value of this BigNumber truncated to a whole number.
         */
        trunc(): BigNumber;

        /**
         * As `toString`, but does not accept a base argument and includes the minus sign for negative zero.
         */
        valueOf(): string;

        /**
         * coefficient
         * @description Array of base 1e14 numbers
         */
        c: number[] | null;

        /**
         * exponent
         * @description Integer, -1000000000 to 1000000000 inclusive
         */
        e: number | null;

        /**
         * sign
         */
        s: -1 | 1 | null;

        /**
         * type identifier
         */
        isBigNumber: true;
    }
}

// Type definitions for decimal.js
// Project: http://mikemcl.github.io/decimal.js
// Definitions by: Joseph Rossi <https://github.com/musicist288>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var Decimal: decimal.IDecimalStatic;

// Support AMD require
declare module 'decimal.js' {
    export = Decimal;
}

declare namespace decimal {

    enum RoundingMode {
        /**
         * Rounds away from zero
         */
        ROUND_UP = 0,

        /**
         * Rounds towards zero
         */
        ROUND_DOWN = 1,

        /**
         * Rounds towards Infinity
         */
        ROUND_CEIL = 2,

        /**
         * Rounds towards -Infinity
         */
        ROUND_FLOOR = 3,

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds away from zero
         */
        ROUND_HALF_UP = 4,

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards zero
         */
        ROUND_HALF_DOWN = 5,

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards even neighbour
         */
        ROUND_HALF_EVEN = 6,

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards Infinity
         */
        ROUND_HALF_CEIL = 7,

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards -Infinity
         */
        ROUND_HALF_FLOOR = 8,

        /**
         * Not a rounding mode, see modulo
         */
        EUCLID = 9,
    }

    interface IFormatConfig {
        decimalSeparator?: string;
        groupSeparator?: string;
        groupSize?: number;
        secondaryGroupSize?: number;
        fractionGroupSeparator?: string;
        fractionGroupSize?: number;
    }

    interface IDecimalConfig {
        /**
         * number: integer, 1 to 1e+9 inclusive
         * Default value: 20
         *
         * The maximum number of significant digits of the result of a calculation or base conversion.
         *
         * All methods which return a Decimal will round the return value to precision significant digits except absoluteValue, ceil, floor, negated, round, toDecimalPlaces, toNearest and truncated.
         *
         * A Decimal constructor will also not round to precision unless a base is specified.
         */
        precision?: number;

        /**
         * number: integer, 0 to 8 inclusive
         * Default value: 4 (ROUND_HALF_UP)
         *
         * The default rounding mode used when rounding the result of a calculation or base conversion to precision significant digits, and when rounding the return value of the round, toDecimalPlaces, toExponential, toFixed, toFormat, toNearest, toPrecision and toSignificantDigits methods.
         *
         * The rounding modes are available as enumerated properties of the constructor.
         */
        rounding?: RoundingMode;

        /**
         * number: integer, -9e15 to 0 inclusive
         * Default value: -7
         *
         * The negative exponent value at and below which toString returns exponential notation.
         * @type {[type]}
         */
        toExpNeg?: number;

        /**
         * number: integer, 0 to 9e15 inclusive
         * Default value: 20
         *
         * The positive exponent value at and above which toString returns exponential notation.
         */
        toExpPos?: number;

        /**
         * number: integer, -9e15 to 0 inclusive
         * Default value: -9e15
         *
         * The negative exponent limit, i.e. the exponent value below which underflow to zero occurs.
         *
         * If the Decimal to be returned by a calculation would have an exponent lower than minE then its value becomes zero.
         *
         * JavaScript numbers underflow to zero for exponents below -324.
         */
        minE?: number;

        /**
         * number: integer, 0 to 9e15 inclusive
         * Default value: 9e15
         *
         * The positive exponent limit, i.e. the exponent value above which overflow to Infinity occurs.
         *
         * If the Decimal to be returned by a calculation would have an exponent higher than maxE then its value becomes Infinity.
         *
         * JavaScript numbers overflow to Infinity for exponents above 308.
         */
        maxE?: number;

        /**
         * boolean/number: true, false, 1 or 0
         * Default value: true
         *
         * The value that determines whether Decimal Errors are thrown. If errors is false, this library will not throw errors.
         */
        errors?: boolean | number;

        /**
         * boolean/number: true, false, 1 or 0
         * Default value: false
         *
         * The value that determines whether cryptographically-secure pseudo-random number generation is used.
         *
         * If crypto is truthy then the random method will generate random digits using crypto.getRandomValues in browsers that support it, or crypto.randomBytes if using a version of Node.js that supports it.
         *
         * If neither function is supported by the host environment or if crypto is falsey then the source of randomness will be Math.random. If the crypto property is set directly (i.e. without using config) to true, then at the time the random method is called, if errors is true, an error will be thrown if the crypto methods are unavailable.
         */
        crypto?: boolean | number;

        /**
         * number: integer, 0 to 9 inclusive
         * Default value: 1 (ROUND_DOWN)
         *
         * The modulo mode used when calculating the modulus: a mod n.
         *
         * The quotient, q = a / n, is calculated according to the rounding mode that corresponds to the chosen modulo mode.
         *
         * The remainder, r, is calculated as: r = a - n * q.
         *
         * The modes that are most commonly used for the modulus/remainder operation are ROUND_UP, ROUND_DOWN, ROUND_FLOOR, ROUND_HALF_EVEN, and EUCLID. Although the other rounding modes can be used, they may not give useful results.
         */
        modulo?: RoundingMode;

        /**
         * The format object configures the format of the string returned by the toFormat method.
         *
         * The example below shows the properties of the format object that are recognised, and their default values.
         *
         * Unlike setting other properties using config, the values of the properties of the format object will not be checked for validity. The existing format object will simply be replaced by the object that is passed in. Only the toFormat method ever references a Decimal constructor's format object property.
         *
         * See toFormat for examples of usage, and of setting format properties individually and directly without using config.
         */
        format?: IFormatConfig;
    }

    interface IDecimalStatic extends IDecimalConfig {
        default: IDecimalStatic;

        (value: number | string | Decimal, base?: number): Decimal;

        new(value: number | string | Decimal, base?: number): Decimal;

        /**
         * Configures the 'global' settings for this particular Decimal constructor.
         *
         * Returns this Decimal constructor.
         */
        config(object: IDecimalConfig): IDecimalStatic;

        /**
         * Returns a new independent Decimal constructor with configuration settings as described by object
         */
        constructor(object: IDecimalConfig): IDecimalStatic;

        /**
         * Returns a new Decimal whose value is the base e (Euler's number, the base of the natural logarithm) exponential of the value of this Decimal, rounded to precision significant digits using rounding mode rounding.
         */
        exp(n: number | string | Decimal): Decimal;

        /**
         * Returns a new Decimal whose value is the natural logarithm of the value of this Decimal, rounded to precision significant digits using rounding mode rounding.
         *
         * The natual logarithm is the inverse of the exponential function.
         */
        ln(n: number | string | Decimal): Decimal;

        /**
         * Returns a new Decimal whose value is the base n logarithm of the value of this Decimal, rounded to precision significant digits using rounding mode rounding.
         *
         * If n is null or undefined, then the base 10 logarithm of the value of this Decimal will be returned.
         */
        log(n: number | string | Decimal, base?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the maximum of arg1, arg2,... .
         */
        max(...args: any[]): Decimal;

        /**
         * Returns a new Decimal whose value is the minimum of arg1, arg2,... .
         */
        min(...args: any[]): Decimal;

        /**
         * Reverts the Decimal variable to the value it had before this library was loaded and returns a reference to the original Decimal constructor so it can be assigned to a variable with a different name.
         */
        noConflict(): IDecimalStatic;

        /**
         * Returns a new Decimal whose value is the value of this Decimal raised to the power n, rounded to precision significant digits using rounding mode rounding.
         *
         * The performance of this method degrades exponentially with increasing digits. For non-integer exponents in particular, the performance of this method may not be adequate.
         */
        pow(base: number | string | Decimal, exponent: number | string | Decimal): Decimal;

        /**
         * Returns a new Decimal with a pseudo-random value equal to or greater than 0 and less than 1. The return value will have dp decimal places (or less if trailing zeros are produced). If dp is omitted then the number of decimal places will default to the current precision setting.
         *
         * Depending on the value of a Decimal constructor's crypto property and the support for the crypto object in the host environment, the random digits of the return value are generated by either Math.random (fastest), crypto.getRandomValues (Web Cryptography API in recent browsers) or crypto.randomBytes (Node.js).
         *
         * If crypto is true, i.e. one of the crypto methods is to be used, the value of a returned Decimal should be cryptographically-secure and statistically indistinguishable from a random value.
         */
        random(dp?: number): Decimal;

        /**
         * The return value will be correctly rounded, i.e. rounded as if the result was first calculated to an infinite number of correct digits before rounding.
         *
         * This method is much faster than using the toPower method with an exponent of 0.5.
         */
        sqrt(arg: number | string | Decimal): Decimal;

        /**
         * A Decimal instance with value one.
         */
        ONE: number;

         /**
         * Rounds away from zero
         */
        ROUND_UP: number;

        /**
         * Rounds towards zero
         */
        ROUND_DOWN: number;

        /**
         * Rounds towards Infinity
         */
        ROUND_CEIL: number;

        /**
         * Rounds towards -Infinity
         */
        ROUND_FLOOR: number;

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds away from zero
         */
        ROUND_HALF_UP: number;

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards zero
         */
        ROUND_HALF_DOWN: number;

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards even neighbour
         */
        ROUND_HALF_EVEN: number;

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards Infinity
         */
        ROUND_HALF_CEIL: number;

        /**
         * Rounds towards nearest neighbour.
         * If equidistant, rounds towards -Infinity
         */
        ROUND_HALF_FLOOR: number;

        /**
         * Not a rounding mode, see modulo
         */
        EUCLID: number;
    }

    interface Decimal {

        /**
         * Returns a new Decimal whose value is the absolute value, i.e. the magnitude, of the value of this Decimal.
         *
         * The return value is not rounded.
         */
        absoluteValue(): Decimal;

        /**
         * Returns a new Decimal whose value is the absolute value, i.e. the magnitude, of the value of this Decimal.
         *
         * The return value is not rounded.
         */
        abs(): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to a whole number in the direction of positive Infinity.
         *
         * The return value is not rounded to precision.
         */
        ceil(): Decimal;

        /**
         * @return 1, -1, 0, or null
         *         1   If the value of this Decimal is greater than the
         *             value of n
         *        -1   If the value of this Decimal is less than the value
         *             of n
         *         0   If this Decimal and n have the same value
         *      null   If the value of either this Decimal or n is NaN
         */
        comparedTo(n: number | string | Decimal, base?: number): number;

        /**
         * Returns 1, -1, 0, or null
         *         1   If the value of this Decimal is greater than the value
         *             of n
         *        -1   If the value of this Decimal is less than the value
         *             of n
         *         0   If this Decimal and n have the same value
         *      null   If the value of either this Decimal or n is NaN
         */
        cmp(n: number | string | Decimal, base?: number): number;

        /**
         * Returns the number of decimal places, i.e. the number of digits after the decimal point, of the value of this Decimal.
         */
        decimalPlaces(): number;

        /**
         * Returns the number of decimal places, i.e. the number of digits after the decimal point, of the value of this Decimal.
         */
        dp(): number;

        /**
         * Returns a new Decimal whose value is the value of this Decimal divided by n, rounded to precision significant digits using rounding mode rounding.
         */
        dividedBy(n: number | string | Decimal, base?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal divided by n, rounded to precision significant digits using rounding mode rounding.
         */
        div(n: number | string | Decimal, base?: number): Decimal;

        /**
         * Return a new Decimal whose value is the integer part of dividing this Decimal by n, rounded to precision significant digits using rounding mode rounding.
         */
        dividedToIntegerBy(n: number | string| Decimal, base?: number): Decimal;

        /**
         * Return a new Decimal whose value is the integer part of dividing this Decimal by n, rounded to precision significant digits using rounding mode rounding.
         */
        divToInt(n: number | string| Decimal, base?: number): Decimal;

        /**
         * Returns true if the value of this Decimal equals the value of n, otherwise returns false.
         *
         * As with JavaScript, NaN does not equal NaN.
         *
         * Note: This method uses the cmp method internally.
         */
        equals(n: number | string | Decimal, base?: number): boolean;

        /**
         * Returns true if the value of this Decimal equals the value of n, otherwise returns false.
         *
         * As with JavaScript, NaN does not equal NaN.
         *
         * Note: This method uses the cmp method internally.
         */
        eq(n: number | string | Decimal, base?: number): boolean;

        /**
         * Returns a new Decimal whose value is the base e (Euler's number, the base of the natural logarithm) exponential of the value of this Decimal, rounded to precision significant digits using rounding mode rounding.
         */
        exponential(): Decimal;

        /**
         * Returns a new Decimal whose value is the base e (Euler's number, the base of the natural logarithm) exponential of the value of this Decimal, rounded to precision significant digits using rounding mode rounding.
         */
        exp(): Decimal;

        /**
         * The return value is not rounded to precision.
         */
        floor(): Decimal;


        /**
         * Note: This method uses cmp method internally.
         */
        greaterThan(n: number | string | Decimal, base?: number): boolean;

        /**
         * Note: This method uses cmp method internally.
         */
        gt(n: number | string | Decimal, base?: number): boolean;

        /**
         * Note: This method uses cmp method internally.
         */
        greaterThanOrEqualTo(n: number | string | Decimal, base?: number): boolean;

        /**
         * Note: This method uses cmp method internally.
         */
        gte(n: number | string | Decimal, base?: number): boolean;

        /**
         * The only possible non-finite values of a Decimal are NaN, Infinity and -Infinity.
         */
        isFinite(): boolean;

        isInteger(): boolean;

        isInt(): boolean;

        isNaN(): boolean;

        isNegative(): boolean;

        isNeg(): boolean;

        isZero(): boolean;

        /**
         * Note: This method uses cmp method internally.
         */
        lessThan(n: number | string | Decimal, base?: number): boolean;

        /**
         * Note: This method uses cmp method internally.
         */
        lt(n: number | string | Decimal, base?: number): boolean;

        /**
         * Note: This method uses cmp method internally.
         */
        lessThanOrEqualTo(n: number | string | Decimal, base?: number): boolean;

        /**
         * Note: This method uses cmp method internally.
         */
        lte(n: number | string | Decimal, base?: number): boolean;

        /**
         * Returns a new Decimal whose value is the base n logarithm of the value of this Decimal, rounded to precision significant digits using rounding mode rounding.
         *
         * If n is null or undefined, then the base 10 logarithm of the value of this Decimal will be returned.
         */
        logarithm(n?: number | string | Decimal, base?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the base n logarithm of the value of this Decimal, rounded to precision significant digits using rounding mode rounding.
         *
         * If n is null or undefined, then the base 10 logarithm of the value of this Decimal will be returned.
         */
        log(n?: number | string | Decimal, base?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal minus n, rounded to precision significant digits using rounding mode rounding.
         */
        minus(n: number | string | Decimal, base?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal modulo n, rounded to precision significant digits using rounding mode rounding.
         *
         * The value returned, and in particular its sign, is dependent on the value of the modulo property of this Decimal's constructor. If it is 1 (default value), the result will have the same sign as this Decimal, and it will match that of Javascript's % operator (within the limits of double precision) and BigDecimal's remainder method.
         */
        modulo(n: number | string | Decimal, base?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal modulo n, rounded to precision significant digits using rounding mode rounding.
         *
         * The value returned, and in particular its sign, is dependent on the value of the modulo property of this Decimal's constructor. If it is 1 (default value), the result will have the same sign as this Decimal, and it will match that of Javascript's % operator (within the limits of double precision) and BigDecimal's remainder method.
         */
        mod(n: number | string | Decimal, base?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the natural logarithm of the value of this Decimal, rounded to precision significant digits using rounding mode rounding.
         *
         * The natual logarithm is the inverse of the exponential function.
         */
        naturalLogarithm(): Decimal;

        /**
         * Returns a new Decimal whose value is the natural logarithm of the value of this Decimal, rounded to precision significant digits using rounding mode rounding.
         *
         * The natual logarithm is the inverse of the exponential function.
         */
        ln(): Decimal;

        /**
         * The return value is not rounded.
         */
        negated(): Decimal;

        /**
         * The return value is not rounded.
         */
        neg(): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal plus n, rounded to precision significant digits using rounding mode rounding.
         */
        plus(n: number | string | Decimal, base?: number): Decimal;

        /**
         * If include_zeros is true or 1 then any trailing zeros of the integer part of a number are counted as significant digits, otherwise they are not.
         */
        precision(include_leading_zeros?: boolean | number): number;

        /**
         * If include_zeros is true or 1 then any trailing zeros of the integer part of a number are counted as significant digits, otherwise they are not.
         */
        sd(include_leading_zeros?: boolean | number): number;

        round(): Decimal;

        /**
         * The return value will be correctly rounded, i.e. rounded as if the result was first calculated to an infinite number of correct digits before rounding.
         *
         * This method is much faster than using the toPower method with an exponent of 0.5.
         */
        squareRoot(): Decimal;

        /**
         * The return value will be correctly rounded, i.e. rounded as if the result was first calculated to an infinite number of correct digits before rounding.
         *
         * This method is much faster than using the toPower method with an exponent of 0.5.
         */
        sqrt(): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal times n, rounded to precision significant digits using rounding mode rounding.
         */
        times(n: number | string | Decimal, base?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to dp decimal places using rounding mode rm.
         *
         * If dp is omitted or is null or undefined, the return value will have the same value as this Decimal.
         *
         * If rm is omitted or is null or undefined, rounding mode rounding is used.
         */
        toDecimalPlaces(dp?: number, rm?: RoundingMode): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to dp decimal places using rounding mode rm.
         *
         * If dp is omitted or is null or undefined, the return value will have the same value as this Decimal.
         *
         * If rm is omitted or is null or undefined, rounding mode rounding is used.
         */
        toDP(dp?: number, rm?: RoundingMode): Decimal;

        /**
         * Returns a string representing the value of this Decimal in exponential notation rounded using rounding mode rm to dp decimal places, i.e with one digit before the decimal point and dp digits after it.
         *
         * If the value of this Decimal in exponential notation has fewer than dp fraction digits, the return value will be appended with zeros accordingly.
         *
         * If dp is omitted, or is null or undefined, the number of digits after the decimal point defaults to the minimum number of digits necessary to represent the value exactly.
         *
         * If rm is omitted or is null or undefined, rounding mode rounding is used.
         */
        toExponential(dp?: number, rm?: RoundingMode): string;

        /**
         * Returns a string representing the value of this Decimal in normal (fixed-point) notation rounded to dp decimal places using rounding mode rm.
         *
         * If the value of this Decimal in normal notation has fewer than dp fraction digits , the return value will be appended with zeros accordingly.
         *
         * Unlike Number.prototype.toFixed, which returns exponential notation if a number is greater or equal to 1021, this method will always return normal notation.
         *
         * If dp is omitted or is null or undefined, then the return value will be unrounded and in normal notation. This is unlike Number.prototype.toFixed, which returns the value to zero decimal places, but is useful when because of the current toExpNeg or toExpNeg values, toString returns exponential notation
         *
         * if rm is omitted or is null or undefined, rounding mode rounding is used.
         */
        toFixed(dp?: number, rm?: RoundingMode): string;

        /**
         * Returns a string representing the value of this Decimal in fixed-point notation rounded to dp decimal places using rounding mode rm (as toFixed), and formatted according to the properties of this Decimal's constructor's format object property.
         *
         * See the examples below for the properties of the format object, their types and their usage.
         *
         * If dp is omitted or is null or undefined, then the return value is not rounded to a fixed number of decimal places.
         *
         * if rm is omitted or is null or undefined, rounding mode rounding is used.
         */
        toFormat(dp?: number, rm?: RoundingMode): string;

        /**
         * Returns a string array representing the value of this Decimal as a simple fraction with an integer numerator and an integer denominator. The denominator will be a positive non-zero value less than or equal to max_denominator.
         *
         * If a maximum denominator is not specified, or is null or undefined, the denominator will be the lowest value necessary to represent the number exactly.
         */
        toFraction(max_denominator?: number | string | Decimal): Decimal[];

        toJSON(): string;

        /**
         * Returns a new Decimal whose value is the nearest multiple of n to the value of this Decimal.
         *
         * If the value of this Decimal is equidistant from two multiples of n, the rounding mode rm, or rounding if rm is omitted or is null or undefined, determines the direction of the nearest.
         *
         * In this context, rounding mode ROUND_HALF_UP is interpreted the same as rounding mode ROUND_UP, and so on. I.e. the rounding is either up, own, to ceil, to floor or to even.
         *
         * The return value will always have the same sign as this Decimal, unless either this Decimal or n is NaN, in which case the return value will be also be NaN.
         *
         * The return value is not rounded to precision.
         */
        toNearest(n: number | string | Decimal, rm?: RoundingMode): Decimal;

        /**
         * Returns the value of this Decimal converted to a number primitive.
         *
         * Type coercion with, for example, JavaScript's unary plus operator will also work, except that a Decimal with the value minus zero will convert to positive zero.
         */
        toNumber(): number;

        /**
         * Returns a new Decimal whose value is the value of this Decimal raised to the power n, rounded to precision significant digits using rounding mode rounding.
         *
         * The performance of this method degrades exponentially with increasing digits. For non-integer exponents in particular, the performance of this method may not be adequate.
         */
        toPower(n: number | string | Decimal, base?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal raised to the power n, rounded to precision significant digits using rounding mode rounding.
         *
         * The performance of this method degrades exponentially with increasing digits. For non-integer exponents in particular, the performance of this method may not be adequate.
         */
        pow(n: number | string | Decimal, base?: number): Decimal;

        /**
         * Returns a string representing the value of this Decimal rounded to sd significant digits using rounding mode rm.
         *
         * If sd is less than the number of digits necessary to represent the integer part of the value in normal (fixed-point) notation, then exponential notation is used.
         *
         * If sd is omitted or is null or undefined, then the return value is the same as toString.
         *
         * if rm is omitted or is null or undefined, rounding mode rounding is used.
         */
        toPrecision(sd?: number, rm?: RoundingMode): string;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to sd significant digits using rounding mode rm.
         *
         * If sd is omitted or is null or undefined, the return value will be rounded to precision significant digits.
         *
         * if rm is omitted or is null or undefined, rounding mode rounding will be used.
         */
        toSignificantDigits(sd?: number, rm?: RoundingMode): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to sd significant digits using rounding mode rm.
         *
         * If sd is omitted or is null or undefined, the return value will be rounded to precision significant digits.
         *
         * if rm is omitted or is null or undefined, rounding mode rounding will be used.
         */
        toSD(sd?: number, rm?: RoundingMode): Decimal;

        /**
         * base: number: integer, 2 to 64 inclusive
         *
         * Returns a string representing the value of this Decimal in the specified base, or base 10 if base is omitted or is null or undefined.
         *
         * For bases above 10, values from 10 to 35 are represented by a-z (as with Number.prototype.toString), 36 to 61 by A-Z, and 62 and 63 by $ and _ respectively.
         *
         * If a base is specified the value is rounded to precision significant digits using rounding mode rounding.
         *
         * If a base is not specified and this Decimal has a positive exponent that is equal to or greater than toExpPos, or a negative exponent equal to or less than toExpNeg, then exponential notation is returned.
         *
         * If base is null or undefined it is ignored.
         */
        toString(base?: number): string;

        /**
         * Returns a new Decimal whose value is the value of this Decimal truncated to a whole number.
         *
         * The return value is not rounded to precision.
         */
        truncated(): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal truncated to a whole number.
         *
         * The return value is not rounded to precision.
         */
        trunc(): Decimal;

        /**
         * As toString, but does not accept a base argument.
         */
        valueOf(): string;

        /**
         * coefficient
         *
         * Array of integers, each 0 - 1e7
         */
        c: number[];

        /**
         * exponent
         *
         * Integer, -9e15 to 9e15 inclusive
         */
        e: number;

        /**
         * sign
         *
         * -1 or 1
         */
        s: number;
    }
}

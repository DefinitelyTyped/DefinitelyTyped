declare namespace adone.math {
    namespace I.Decimal {
        type Constructor = typeof Decimal;
        type Instance = Decimal;
        type Rounding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
        type Modulo = Rounding | 9;
        type Value = string | number | Decimal;

        interface Config {
            /**
             * The maximum number of significant digits of the result of an operation.
             *
             * @default 20
             */
            precision?: number;

            /**
             * The default rounding mode used when rounding the result of an operation to precision significant digits, and when rounding
             * the return value of the round, toBinary, toDecimalPlaces, toExponential, toFixed, toHexadecimal, toNearest, toOctal,
             * toPrecision and toSignificantDigits methods.
             *
             * @default 4 (ROUND_HALF_UP)
             */
            rounding?: Rounding;

            /**
             * The negative exponent value at and below which toString returns exponential notation.
             *
             * JavaScript numbers use exponential notation for negative exponents of -7 and below.
             *
             * @default -7
             */
            toExpNeg?: number;

            /**
             * The positive exponent value at and above which toString returns exponential notation.
             *
             * JavaScript numbers use exponential notation for positive exponents of 20 and above.
             *
             * @default 20
             */
            toExpPos?: number;

            /**
             * The negative exponent limit, i.e. the exponent value below which underflow to zero occurs.
             *
             * If the Decimal to be returned by a calculation would have an exponent lower than minE then the value of that Decimal becomes zero.
             *
             * JavaScript numbers underflow to zero for exponents below -324.
             *
             * @default -9e15
             */
            minE?: number;

            /**
             * The positive exponent limit, i.e. the exponent value above which overflow to Infinity occurs.
             *
             * If the Decimal to be returned by a calculation would have an exponent higher than maxE then the value of that Decimal becomes Infinity.
             *
             * JavaScript numbers overflow to Infinity for exponents above 308.
             *
             * @default 9e15
             */
            maxE?: number;

            /**
             * The value that determines whether cryptographically-secure pseudo-random number generation is used.
             */
            crypto?: boolean;

            /**
             * The modulo mode used when calculating the modulus: a mod n.
             *
             * The quotient, q = a / n, is calculated according to the rounding mode that corresponds to the chosen modulo mode.
             *
             * The remainder, r, is calculated as: r = a - n * q.
             *
             * @default 1 (ROUND_DOWN)
             */
            modulo?: Modulo;

            defaults?: boolean;
        }
    }

    /**
     * An arbitrary precision decimal number
     */
    class Decimal {
        /**
         * digits
         */
        readonly d: number[];

        /**
         * exponent
         */
        readonly e: number;

        /**
         * sign
         */
        readonly s: number;

        private readonly name: string;

        constructor(x: I.Decimal.Value);

        /**
         * Returns a new Decimal whose value is the absolute value, i.e. the magnitude, of the value of this Decimal.
         *
         * @alias abs
         */
        absoluteValue(): Decimal;

        /**
         * Returns a new Decimal whose value is the absolute value, i.e. the magnitude, of the value of this Decimal.
         *
         * @alias absoluteValue
         */
        abs(): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to a whole number in the direction of positive Infinity.
         *
         * The return value is not affected by the value of the precision setting.
         */
        ceil(): Decimal;

        /**
         * 1    if the value of this Decimal is greater than the value of x
         *
         * -1    if the value of this Decimal is less than the value of x
         *
         * 0    if this Decimal and x have the same value
         *
         * NaN    if the value of either this Decimal or x is NaN
         *
         * @alias cmp
         */
        comparedTo(x: I.Decimal.Value): number;

        /**
         * 1    if the value of this Decimal is greater than the value of x
         *
         * -1    if the value of this Decimal is less than the value of x
         *
         * 0    if this Decimal and x have the same value
         *
         * NaN    if the value of either this Decimal or x is NaN
         *
         * @alias comparedTo
         */
        cmp(x: I.Decimal.Value): number;

        /**
         * Returns a new Decimal whose value is the cosine of the value in radians of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias cos
         */
        cosine(): Decimal;

        /**
         * Returns a new Decimal whose value is the cosine of the value in radians of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias cosine
         */
        cos(): Decimal;

        /**
         * Returns a new Decimal whose value is the cube root of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * The return value will be correctly rounded,
         * i.e. rounded as if the result was first calculated to an infinite number of correct digits before rounding.
         *
         * @alias cbrt
         */
        cubeRoot(): Decimal;

        /**
         * Returns a new Decimal whose value is the cube root of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * The return value will be correctly rounded,
         * i.e. rounded as if the result was first calculated to an infinite number of correct digits before rounding.
         *
         * @alias cubeRoot
         */
        cbrt(): Decimal;

        /**
         * Returns the number of decimal places, i.e. the number of digits after the decimal point, of the value of this Decimal.
         *
         * @alias dp
         */
        decimalPlaces(): number;

        /**
         * Returns the number of decimal places, i.e. the number of digits after the decimal point, of the value of this Decimal.
         *
         * @alias decimalPlaces
         */
        dp(): number;

        /**
         * Returns a new Decimal whose value is the value of this Decimal divided by x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias div
         */
        dividedBy(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal divided by x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias dividedBy
         */
        div(x: I.Decimal.Value): Decimal;

        /**
         * Return a new Decimal whose value is the integer part of dividing this Decimal by x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias divToInt
         */
        dividedToIntegerBy(x: I.Decimal.Value): Decimal;

        /**
         * Return a new Decimal whose value is the integer part of dividing this Decimal by x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias dividedToIntegerBy
         */
        divToInt(x: I.Decimal.Value): Decimal;

        /**
         * Returns true if the value of this Decimal equals the value of x, otherwise returns false.
         * As with JavaScript, NaN does not equal NaN.
         *
         * @alias eq
         */
        equals(x: I.Decimal.Value): boolean;

        /**
         * Returns true if the value of this Decimal equals the value of x, otherwise returns false.
         * As with JavaScript, NaN does not equal NaN.
         *
         * @alias equals
         */
        eq(x: I.Decimal.Value): boolean;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to a whole number in the direction of negative Infinity.
         *
         * The return value is not affected by the value of the precision setting.
         */
        floor(): Decimal;

        /**
         * Returns true if the value of this Decimal is greater than the value of x, otherwise returns false.
         *
         * @alias gt
         */
        greaterThan(x: I.Decimal.Value): boolean;

        /**
         * Returns true if the value of this Decimal is greater than the value of x, otherwise returns false.
         *
         * @alias greaterThan
         */
        gt(x: I.Decimal.Value): boolean;

        /**
         * Returns true if the value of this Decimal is greater than or equal to the value of x, otherwise returns false.
         *
         * @alias gte
         */
        greaterThanOrEqualTo(x: I.Decimal.Value): boolean;

        /**
         * Returns true if the value of this Decimal is greater than or equal to the value of x, otherwise returns false.
         *
         * @alias greaterThanOrEqualTo
         */
        gte(x: I.Decimal.Value): boolean;

        /**
         * Returns a new Decimal whose value is the hyperbolic cosine of the value in radians of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias cosh
         */
        hyperbolicCosine(): Decimal;

        /**
         * Returns a new Decimal whose value is the hyperbolic cosine of the value in radians of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias hyperbolicCosine
         */
        cosh(): Decimal;

        /**
         * Returns a new Decimal whose value is the hyperbolic sine of the value in radians of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias sinh
         */
        hyperbolicSine(): Decimal;

        /**
         * Returns a new Decimal whose value is the hyperbolic sine of the value in radians of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias hyperbolicSine
         */
        sinh(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse hyperbolic tangent in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias tanh
         */
        hyperbolicTangent(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse hyperbolic tangent in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias hyperbolicTangent
         */
        tanh(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse cosine in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias acos
         */
        inverseCosine(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse cosine in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias inverseCosine
         */
        acos(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse hyperbolic cosine in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias acosh
         */
        inverseHyperbolicCosine(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse hyperbolic cosine in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias inverseHyperbolicCosine
         */
        acosh(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse hyperbolic sine in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias asinh
         */
        inverseHyperbolicSine(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse hyperbolic sine in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias inverseHyperbolicSine
         */
        asinh(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse hyperbolic tangent in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias atanh
         */
        inverseHyperbolicTangent(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse hyperbolic tangent in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias inverseHyperbolicTangent
         */
        atanh(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse sine in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias asin
         */
        inverseSine(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse sine in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias inverseSine
         */
        asin(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse tangent in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias atan
         */
        inverseTangent(): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse tangent in radians of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias inverseTangent
         */
        atan(): Decimal;

        /**
         * Returns true if the value of this Decimal is a finite number, otherwise returns false.
         * The only possible non-finite values of a Decimal are NaN, Infinity and -Infinity.
         */
        isFinite(): boolean;

        /**
         * Returns true if the value of this Decimal is a whole number, otherwise returns false.
         *
         * @alias isInt
         */
        isInteger(): boolean;

        /**
         * Returns true if the value of this Decimal is a whole number, otherwise returns false.
         *
         * @alias isInteger
         */
        isInt(): boolean;

        /**
         * Returns true if the value of this Decimal is NaN, otherwise returns false.
         */
        isNaN(): boolean;

        /**
         * Returns true if the value of this Decimal is negative, otherwise returns false.
         *
         * @alias isNeg
         */
        isNegative(): boolean;

        /**
         * Returns true if the value of this Decimal is negative, otherwise returns false.
         *
         * @alias isNegative
         */
        isNeg(): boolean;

        /**
         * Returns true if the value of this Decimal is positive, otherwise returns false.
         *
         * @alias isPos
         */
        isPositive(): boolean;

        /**
         * Returns true if the value of this Decimal is positive, otherwise returns false.
         *
         * @alias isPositive
         */
        isPos(): boolean;

        /**
         * Returns true if the value of this Decimal is zero or minus zero, otherwise returns false.
         */
        isZero(): boolean;

        /**
         * Returns true if the value of this Decimal is less than the value of x, otherwise returns false.
         *
         * @alias lt
         */
        lessThan(x: I.Decimal.Value): boolean;

        /**
         * Returns true if the value of this Decimal is less than the value of x, otherwise returns false.
         *
         * @alias lessThan
         */
        lt(x: I.Decimal.Value): boolean;

        /**
         * Returns true if the value of this Decimal is less than or equal to the value of x, otherwise returns false.
         *
         * @alias lte
         */
        lessThanOrEqualTo(x: I.Decimal.Value): boolean;

        /**
         * Returns true if the value of this Decimal is less than or equal to the value of x, otherwise returns false.
         *
         * @alias lessThanOrEqualTo
         */
        lte(x: I.Decimal.Value): boolean;

        /**
         * Returns a new Decimal whose value is the base x logarithm of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias log
         */
        logarithm(n?: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the base x logarithm of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias logarithm
         */
        log(n?: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal minus x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias sub
         */
        minus(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal minus x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias minus
         */
        sub(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal modulo x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * The value returned, and in particular its sign, is dependent on the value of the modulo property of this Decimal's constructor.
         * If it is 1 (default value), the result will have the same sign as this Decimal,
         * and it will match that of Javascript's % operator (within the limits of double precision) and BigDecimal's remainder method.
         *
         * @alias mod
         */
        modulo(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal modulo x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * The value returned, and in particular its sign, is dependent on the value of the modulo property of this Decimal's constructor.
         * If it is 1 (default value), the result will have the same sign as this Decimal,
         * and it will match that of Javascript's % operator (within the limits of double precision) and BigDecimal's remainder method.
         *
         * @alias modulo
         */
        mod(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the base e (Euler's number, the base of the natural logarithm) exponential of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias exp
         */
        naturalExponential(): Decimal;

        /**
         * Returns a new Decimal whose value is the base e (Euler's number, the base of the natural logarithm) exponential of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias naturalExponential
         */
        exp(): Decimal;

        /**
         * Returns a new Decimal whose value is the natural logarithm of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias ln
         */
        naturalLogarithm(): Decimal;

        /**
         * Returns a new Decimal whose value is the natural logarithm of the value of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias naturalLogarithm
         */
        ln(): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal negated, i.e. multiplied by -1.
         *
         * @alias neg
         */
        negated(): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal negated, i.e. multiplied by -1.
         *
         * @alias negated
         */
        neg(): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal plus x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias add
         */
        plus(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal plus x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias plus
         */
        add(x: I.Decimal.Value): Decimal;

        /**
         * Returns the number of significant digits of the value of this Decimal.
         *
         * @param includeZeros If it is true or 1 then any trailing zeros of the integer part of a number are counted as significant digits,
         *                     otherwise they are not.
         * @alias sd
         */
        precision(includeZeros?: boolean): number;

        /**
         * Returns the number of significant digits of the value of this Decimal.
         *
         * @param includeZeros If it is true or 1 then any trailing zeros of the integer part of a number are counted as significant digits,
         *                     otherwise they are not.
         * @alias precision
         */
        sd(includeZeros?: boolean): number;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to a whole number using rounding mode rounding.
         */
        round(): Decimal;

        /**
         * Returns a new Decimal whose value is the sine of the value in radians of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias sin
         */
        sine(): Decimal;

        /**
         * Returns a new Decimal whose value is the sine of the value in radians of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias sine
         */
        sin(): Decimal;

        /**
         * Returns a new Decimal whose value is the square root of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * The return value will be correctly rounded,
         * i.e. rounded as if the result was first calculated to an infinite number of correct digits before rounding.
         *
         * @alias sqrt
         */
        squareRoot(): Decimal;

        /**
         * Returns a new Decimal whose value is the square root of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * The return value will be correctly rounded,
         * i.e. rounded as if the result was first calculated to an infinite number of correct digits before rounding.
         *
         * @alias squareRoot
         */
        sqrt(): Decimal;

        /**
         * Returns a new Decimal whose value is the tangent of the value in radians of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias tan
         */
        tangent(): Decimal;

        /**
         * Returns a new Decimal whose value is the tangent of the value in radians of this Decimal,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias tangent
         */
        tan(): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal times x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias mul
         */
        times(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal times x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * @alias times
         */
        mul(x: I.Decimal.Value): Decimal;

        /**
         * Returns a string representing the value of this Decimal in binary, rounded to sd significant digits using rounding mode rm.
         */
        toBinary(significantDigits?: number): string;

        /**
         * Returns a string representing the value of this Decimal in binary, rounded to sd significant digits using rounding mode rm.
         */
        toBinary(significantDigits: number, rounding: I.Decimal.Rounding): string;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to dp decimal places using rounding mode rm.
         *
         * @alias toDP
         */
        toDecimalPlaces(decimalPlaces?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to dp decimal places using rounding mode rm.
         *
         * @alias toDP
         */
        toDecimalPlaces(decimalPlaces: number, rounding: I.Decimal.Rounding): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to dp decimal places using rounding mode rm.
         *
         * @alias toDecimalPlaces
         */
        toDP(decimalPlaces?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to dp decimal places using rounding mode rm.
         *
         * @alias toDecimalPlaces
         */
        toDP(decimalPlaces: number, rounding: I.Decimal.Rounding): Decimal;

        /**
         * Returns a string representing the value of this Decimal in exponential notation rounded using rounding mode rm to dp decimal places,
         * i.e with one digit before the decimal point and dp digits after it.
         *
         * If the value of this Decimal in exponential notation has fewer than dp fraction digits,
         * the return value will be appended with zeros accordingly.
         */
        toExponential(decimalPlaces?: number): string;

        /**
         * Returns a string representing the value of this Decimal in exponential notation rounded using rounding mode rm to dp decimal places,
         * i.e with one digit before the decimal point and dp digits after it.
         *
         * If the value of this Decimal in exponential notation has fewer than dp fraction digits,
         * the return value will be appended with zeros accordingly.
         */
        toExponential(decimalPlaces: number, rounding: I.Decimal.Rounding): string;

        /**
         * Returns a string representing the value of this Decimal in normal (fixed-point) notation rounded to dp decimal places using rounding mode rm.
         *
         * If the value of this Decimal in normal notation has fewer than dp fraction digits, the return value will be appended with zeros accordingly.
         *
         * Unlike Number.prototype.toFixed, which returns exponential notation if a number is greater or equal to 1021, this method will always return normal notation.
         */
        toFixed(decimalPlaces?: number): string;

        /**
         * Returns a string representing the value of this Decimal in normal (fixed-point) notation rounded to dp decimal places using rounding mode rm.
         *
         * If the value of this Decimal in normal notation has fewer than dp fraction digits, the return value will be appended with zeros accordingly.
         *
         * Unlike Number.prototype.toFixed, which returns exponential notation if a number is greater or equal to 1021, this method will always return normal notation.
         */
        toFixed(decimalPlaces: number, rounding: I.Decimal.Rounding): string;

        /**
         * Returns an array of two Decimals representing the value of this Decimal as a simple fraction with an integer numerator and an integer denominator.
         * The denominator will be a positive non-zero value less than or equal to maxDenominator.
         *
         * If a maximum denominator is omitted, the denominator will be the lowest value necessary to represent the number exactly.
         */
        toFraction(maxDenominator?: I.Decimal.Value): Decimal[];

        /**
         * Returns a string representing the value of this Decimal in hexadecimal, rounded to sd significant digits using rounding mode rm.
         *
         * @alias toHex
         */
        toHexadecimal(significantDigits?: number): string;

        /**
         * Returns a string representing the value of this Decimal in hexadecimal, rounded to sd significant digits using rounding mode rm.
         *
         * @alias toHex
         */
        toHexadecimal(significantDigits: number, rounding: I.Decimal.Rounding): string;

        /**
         * Returns a string representing the value of this Decimal in hexadecimal, rounded to sd significant digits using rounding mode rm.
         *
         * @alias toHexadecimal
         */
        toHex(significantDigits?: number): string;

        /**
         * Returns a string representing the value of this Decimal in hexadecimal, rounded to sd significant digits using rounding mode rm.
         *
         * @alias toHexadecimal
         */
        toHex(significantDigits: number, rounding?: I.Decimal.Rounding): string;

        /**
         * Same as valueOf
         */
        toJSON(): string;

        /**
         * Returns a new Decimal whose value is the nearest multiple of x in the direction of rounding mode rm, or rounding if rm is omitted,
         * to the value of this Decimal.
         *
         * The return value will always have the same sign as this Decimal, unless either this Decimal or x is NaN,
         * in which case the return value will be also be NaN.
         */
        toNearest(x?: I.Decimal.Value, rounding?: I.Decimal.Rounding): Decimal;

        /**
         * Returns the value of this Decimal converted to a primitive number.
         *
         * Type coercion with, for example, JavaScript's unary plus operator will also work,
         * except that a Decimal with the value minus zero will convert to positive zero.
         */
        toNumber(): number;

        /**
         * Returns a string representing the value of this Decimal in octal, rounded to sd significant digits using rounding mode rm.
         */
        toOctal(significantDigits?: number): string;

        /**
         * Returns a string representing the value of this Decimal in octal, rounded to sd significant digits using rounding mode rm.
         */
        toOctal(significantDigits: number, rounding: I.Decimal.Rounding): string;

        /**
         * Returns a new Decimal whose value is the value of this Decimal raised to the power x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * The return value will almost always be correctly rounded,
         * i.e. rounded as if the result was first calculated to an infinite number of correct digits before rounding.
         * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in the last place).
         *
         * @alias pow
         */
        toPower(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal raised to the power x,
         * rounded to precision significant digits using rounding mode rounding.
         *
         * The return value will almost always be correctly rounded,
         * i.e. rounded as if the result was first calculated to an infinite number of correct digits before rounding.
         * If a result is incorrectly rounded the maximum error will be 1 ulp (unit in the last place).
         *
         * @alias toPower
         */
        pow(x: I.Decimal.Value): Decimal;

        /**
         * Returns a string representing the value of this Decimal rounded to sd significant digits using rounding mode rm.
         */
        toPrecision(significantDigits?: number): string;

        /**
         * Returns a string representing the value of this Decimal rounded to sd significant digits using rounding mode rm.
         */
        toPrecision(significantDigits: number, rounding: I.Decimal.Rounding): string;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to sd significant digits using rounding mode rm.
         *
         * @alias toSD
         */
        toSignificantDigits(significantDigits?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to sd significant digits using rounding mode rm.
         *
         * @alias toSD
         */
        toSignificantDigits(significantDigits: number, rounding: I.Decimal.Rounding): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to sd significant digits using rounding mode rm.
         *
         * @alias toSignificantDigits
         */
        toSD(significantDigits?: number): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal rounded to sd significant digits using rounding mode rm.
         *
         * @alias toSignificantDigits
         */
        toSD(significantDigits: number, rounding: I.Decimal.Rounding): Decimal;

        /**
         * Returns a string representing the value of this Decimal.
         *
         * If this Decimal has a positive exponent that is equal to or greater than toExpPos,
         * or a negative exponent equal to or less than toExpNeg, then exponential notation will be returned.
         */
        toString(): string;

        /**
         * Returns a new Decimal whose value is the value of this Decimal truncated to a whole number.
         *
         * @alias trunc
         */
        truncated(): Decimal;

        /**
         * Returns a new Decimal whose value is the value of this Decimal truncated to a whole number.
         *
         * @alias truncated
         */
        trunc(): Decimal;

        /**
         * As toString, but zero is signed.
         */
        valueOf(): string;

        /**
         * Returns a new Decimal whose value is the absolute value of x
         */
        static abs(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse cosine in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static acos(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse cosine in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static acosh(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of x + y, rounded to precision significant digits using rounding mode rounding.
         */
        static add(x: I.Decimal.Value, y: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse sine in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static asin(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse hyperbolic sine in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static asinh(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse tangent in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static atan(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse hyperbolic tangent in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static atanh(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse tangent in radians of the quotient of y and x, rounded to precision significant digits using rounding mode rounding.
         *
         * The signs of y and x are used to determine the quadrant of the result.
         */
        static atan2(y: I.Decimal.Value, x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the cube root of x, rounded to precision significant digits using rounding mode rounding.
         */
        static cbrt(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of x rounded to a whole number in the direction of positive Infinity.
         */
        static ceil(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new independent Decimal constructor with configuration settings as described by object, or with the same settings as this Decimal constructor if object is omitted.
         *
         * @alias config
         */
        static clone(object?: I.Decimal.Config): I.Decimal.Constructor;

        /**
         * Configures the 'global' settings for this particular Decimal constructor, i.e. the settings which apply to operations performed on the Decimal instances created by it.
         *
         * @alias set
         */
        static config(object: I.Decimal.Config): I.Decimal.Constructor;

        /**
         * Configures the 'global' settings for this particular Decimal constructor, i.e. the settings which apply to operations performed on the Decimal instances created by it.
         *
         * @alias config
         */
        static set(object: I.Decimal.Config): I.Decimal.Constructor;

        /**
         * Returns a new Decimal whose value is the cosine of the value in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static cos(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the inverse hyperbolic cosine in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static cosh(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of x divided by x, rounded to precision significant digits using rounding mode rounding.
         */
        static div(x: I.Decimal.Value, y: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the base e (Euler's number, the base of the natural logarithm) exponential of x, rounded to precision significant digits using rounding mode rounding.
         */
        static exp(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the value of x rounded to a whole number in the direction of negative Infinity.
         */
        static floor(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the square root of the sum of the squares of the arguments, rounded to precision significant digits using rounding mode rounding.
         */
        static hypot(...x: I.Decimal.Value[]): Decimal;

        /**
         * Returns true if object is a Decimal instance (where Decimal is any Decimal constructor), or false if it is not.
         */
        static isDecimal(object: any): boolean;

        /**
         * Returns a new Decimal whose value is the natural logarithm of x, rounded to precision significant digits using rounding mode rounding.
         */
        static ln(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the base x logarithm of x, rounded to precision significant digits using rounding mode rounding.
         *
         * @param base logarithm base, default is 10
         */
        static log(x: I.Decimal.Value, base?: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the base 2 logarithm of x, rounded to precision significant digits using rounding mode rounding.
         */
        static log2(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the base 10 logarithm of x, rounded to precision significant digits using rounding mode rounding.
         */
        static log10(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the maximum of the arguments.
         */
        static max(...x: I.Decimal.Value[]): Decimal;

        /**
         * Returns a new Decimal whose value is the minimum of the arguments.
         */
        static min(...x: I.Decimal.Value[]): Decimal;

        /**
         * Returns a new Decimal whose value is x modulo y, rounded to precision significant digits using rounding mode rounding.
         */
        static mod(x: I.Decimal.Value, y: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is x times y, rounded to precision significant digits using rounding mode rounding.
         */
        static mul(x: I.Decimal.Value, y: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is base raised to the power exponent, rounded to precision significant digits using rounding mode rounding.
         */
        static pow(base: I.Decimal.Value, exponent: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal with a pseudo-random value equal to or greater than 0 and less than 1.
         *
         * The return value will have dp decimal places (or less if trailing zeros are produced). If dp is omitted then the number of decimal places will default to the current precision setting.
         */
        static random(significantDigits?: number): Decimal;

        /**
         * Returns a new Decimal whose value is x rounded to a whole number using rounding mode rounding.
         */
        static round(x: I.Decimal.Value): Decimal;

        /**
         * 1    if the value of x is non-zero and its sign is positive
         *
         * -1    if the value of x is non-zero and its sign is negative
         *
         * 0    if the value of x is positive zero
         *
         * -0    if the value of x is negative zero
         *
         * NaN    if the value of x is NaN
         */
        static sign(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the sine of the value in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static sin(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the hyperbolic sine of the value in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static sinh(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the square root of x, rounded to precision significant digits using rounding mode rounding.
         */
        static sqrt(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is x minus y, rounded to precision significant digits using rounding mode rounding.
         */
        static sub(x: I.Decimal.Value, y: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the tangent of the value in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static tan(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is the hyperbolic tangent of the value in radians of x, rounded to precision significant digits using rounding mode rounding.
         */
        static tanh(x: I.Decimal.Value): Decimal;

        /**
         * Returns a new Decimal whose value is x truncated to a whole number.
         */
        static trunc(x: I.Decimal.Value): Decimal;

        static readonly default?: I.Decimal.Constructor;
        static readonly Decimal?: I.Decimal.Constructor;

        /**
         * The maximum number of significant digits of the result of an operation.
         */
        static readonly precision: number;

        /**
         * The default rounding mode used when rounding the result of an operation to precision significant digits, and when rounding
         * the return value of the round, toBinary, toDecimalPlaces, toExponential, toFixed, toHexadecimal, toNearest, toOctal,
         * toPrecision and toSignificantDigits methods.
         */
        static readonly rounding: I.Decimal.Rounding;

        /**
         * The negative exponent value at and below which toString returns exponential notation.
         *
         * JavaScript numbers use exponential notation for negative exponents of -7 and below.
         */
        static readonly toExpNeg: number;

        /**
         * The positive exponent value at and above which toString returns exponential notation.
         *
         * JavaScript numbers use exponential notation for positive exponents of 20 and above.
         */
        static readonly toExpPos: number;

        static readonly minE: number;

        static readonly maxE: number;

        static readonly crypto: boolean;

        /**
         * The modulo mode used when calculating the modulus: a mod n.
         *
         * The quotient, q = a / n, is calculated according to the rounding mode that corresponds to the chosen modulo mode.
         *
         * The remainder, r, is calculated as: r = a - n * q.
         */
        static readonly modulo: I.Decimal.Modulo;

        /**
         * Rounds away from zero
         */
        static readonly ROUND_UP: 0;

        /**
         * Rounds towards zero
         */
        static readonly ROUND_DOWN: 1;

        /**
         * Rounds towards Infinity
         */
        static readonly ROUND_CEIL: 2;

        /**
         * Rounds towards -Infinity
         */
        static readonly ROUND_FLOOR: 3;

        /**
         * Rounds towards nearest neighbour.
         *
         * If equidistant, rounds away from zero
         */
        static readonly ROUND_HALF_UP: 4;

        /**
         * Rounds towards nearest neighbour.
         *
         * If equidistant, rounds towards zero
         */
        static readonly ROUND_HALF_DOWN: 5;

        /**
         * Rounds towards nearest neighbour.
         *
         * If equidistant, rounds towards even neighbour
         */
        static readonly ROUND_HALF_EVEN: 6;

        /**
         * Rounds towards nearest neighbour.
         *
         * If equidistant, rounds towards Infinity
         */
        static readonly ROUND_HALF_CEIL: 7;

        /**
         * Rounds towards nearest neighbour.
         *
         * If equidistant, rounds towards -Infinity
         */
        static readonly ROUND_HALF_FLOOR: 8;

        /**
         * Not a rounding mode
         */
        static readonly EUCLID: 9;
      }
}

// Type definitions for big.js 6.1
// Project: https://github.com/MikeMcl/big.js/
// Definitions by: Steve Ognibene <https://github.com/nycdotnet>
//                 Roman Nuritdinov (Ky6uk) <https://github.com/Ky6uk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type BigSource = number | string | Big;

export const enum Comparison {
    GT = 1,
    EQ = 0,
    LT = -1,
}

export const enum RoundingMode {
    /**
     * Rounds towards zero.
     * I.e. truncate, no rounding.
     */
    RoundDown = 0,
    /**
     * Rounds towards nearest neighbour.
     * If equidistant, rounds away from zero.
     */
    RoundHalfUp = 1,
    /**
     * Rounds towards nearest neighbour.
     * If equidistant, rounds towards even neighbour.
     */
    RoundHalfEven = 2,
    /**
     * Rounds away from zero.
     */
    RoundUp = 3,
}

export interface BigConstructor {
    /**
     * Returns a new instance of a Big number object
     *
     * String values may be in exponential, as well as normal (non-exponential) notation.
     * There is no limit to the number of digits of a string value (other than that of Javascript's maximum array size), but the largest recommended exponent magnitude is 1e+6.
     * Infinity, NaN and hexadecimal literal strings, e.g. '0xff', are not valid.
     * String values in octal literal form will be interpreted as decimals, e.g. '011' is 11, not 9.
     *
     * @throws `NaN` on an invalid value.
     */
    new (value: BigSource): Big;

    /**
     * Returns a new instance of a Big number object
     *
     * String values may be in exponential, as well as normal (non-exponential) notation.
     * There is no limit to the number of digits of a string value (other than that of Javascript's maximum array size), but the largest recommended exponent magnitude is 1e+6.
     * Infinity, NaN and hexadecimal literal strings, e.g. '0xff', are not valid.
     * String values in octal literal form will be interpreted as decimals, e.g. '011' is 11, not 9.
     *
     * @throws `NaN` on an invalid value.
     */
    (value: BigSource): Big;

    /**
     * Create an additional Big number constructor
     *
     * Values created with the returned constructor will have a separate set of configuration values.
     * This can be used to create Big objects with different DP and RM values.
     * Big numbers created by different constructors can be used together in operations, and it is the DP and RM setting of the Big number that an operation is called upon that will apply.
     * In the interest of memory efficiency, all Big number constructors share the same prototype object,
     * so while the DP and RM (and any other own properties) of a constructor are isolated and untouchable by another, its prototype methods are not.
     */
    (): BigConstructor;

    /**
     * The maximum number of decimal places of the results of operations involving division.
     * It is relevant only to the div and sqrt methods, and the pow method when the exponent is negative.
     *
     * 0 to 1e+6 inclusive
     * Default value: 20
     */
    DP: number;
    /**
     * The rounding mode used in the above operations and by round, toExponential, toFixed and toPrecision.
     * Default value: 1
     */
    RM: number;
    /**
     * The negative exponent value at and below which toString returns exponential notation.
     *
     * -1e+6 to 0 inclusive
     * Default value: -7
     */
    NE: number;
    /**
     * The positive exponent value at and above which toString returns exponential notation.
     *
     * 0 to 1e+6 inclusive
     * Default value: 21
     */
    PE: number;

    /** Readonly rounding modes */

    /**
     * Rounds towards zero.
     * I.e. truncate, no rounding.
     */
    readonly roundDown: RoundingMode.RoundDown;
    /**
     * Rounds towards nearest neighbour.
     * If equidistant, rounds away from zero.
     */
    readonly roundHalfUp: RoundingMode.RoundHalfUp;
    /**
     * Rounds towards nearest neighbour.
     * If equidistant, rounds towards even neighbour.
     */
    readonly roundHalfEven: RoundingMode.RoundHalfEven;
    /**
     * Rounds away from zero.
     */
    readonly roundUp: RoundingMode.RoundUp;
}

export interface Big {
    /** Returns a Big number whose value is the absolute value, i.e. the magnitude, of this Big number. */
    abs(): Big;
    /**
     * Returns a Big number whose value is the value of this Big number plus n - alias for .plus().
     *
     * @throws `NaN` if n is invalid.
     */
    add(n: BigSource): Big;
    /**
     * Compare the values.
     *
     * @throws `NaN` if n is invalid.
     */
    cmp(n: BigSource): Comparison;
    /**
     * Returns a Big number whose value is the value of this Big number divided by n.
     *
     * If the result has more fraction digits than is specified by Big.DP, it will be rounded to Big.DP decimal places using rounding mode Big.RM.
     *
     * @throws `NaN` if n is invalid.
     * @throws `±Infinity` on division by zero.
     * @throws `NaN` on division of zero by zero.
     */
    div(n: BigSource): Big;
    /**
     * Returns true if the value of this Big equals the value of n, otherwise returns false.
     *
     * @throws `NaN` if n is invalid.
     */
    eq(n: BigSource): boolean;
    /**
     * Returns true if the value of this Big is greater than the value of n, otherwise returns false.
     *
     * @throws `NaN` if n is invalid.
     */
    gt(n: BigSource): boolean;
    /**
     * Returns true if the value of this Big is greater than or equal to the value of n, otherwise returns false.
     *
     * @throws `NaN` if n is invalid.
     */
    gte(n: BigSource): boolean;
    /**
     * Returns true if the value of this Big is less than the value of n, otherwise returns false.
     *
     * @throws `NaN` if n is invalid.
     */
    lt(n: BigSource): boolean;
    /**
     * Returns true if the value of this Big is less than or equal to the value of n, otherwise returns false.
     *
     * @throws `NaN` if n is invalid.
     */
    lte(n: BigSource): boolean;
    /**
     * Returns a Big number whose value is the value of this Big number minus n.
     *
     * @throws `NaN` if n is invalid.
     */
    minus(n: BigSource): Big;
    /**
     * Returns a Big number whose value is the value of this Big number modulo n, i.e. the integer remainder of dividing this Big number by n.
     *
     * The result will have the same sign as this Big number, and it will match that of Javascript's % operator (within the limits of its precision) and BigDecimal's remainder method.
     *
     * @throws `NaN` if n is negative or otherwise invalid.
     */
    mod(n: BigSource): Big;
    /**
     * Returns a Big number whose value is the value of this Big number times n - alias for .times().
     *
     * @throws `NaN` if n is invalid.
     */
    mul(n: BigSource): Big;
    /**
     * Returns a Big number whose value is the value of this Big number plus n.
     *
     * @throws `NaN` if n is invalid.
     */
    plus(n: BigSource): Big;
    /**
     * Returns a Big number whose value is the value of this Big number raised to the power exp.
     *
     * If exp is negative and the result has more fraction digits than is specified by Big.DP, it will be rounded to Big.DP decimal places using rounding mode Big.RM.
     *
     * @param exp The power to raise the number to, -1e+6 to 1e+6 inclusive
     * @throws `!pow!` if exp is invalid.
     *
     * Note: High value exponents may cause this method to be slow to return.
     */
    pow(exp: number): Big;
    /**
     * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
     * significant digits using rounding mode rm, or Big.RM if rm is not specified.
     *
     * @param sd Significant digits: integer, 1 to MAX_DP inclusive.
     * @param [rm] The rounding mode, one of the RoundingMode enumeration values
     * @throws `!prec!` if sd is invalid.
     * @throws `!Big.RM!` if rm is invalid.
     */
    prec(sd: number, rm?: RoundingMode): Big;
    /**
     * Returns a Big number whose value is the value of this Big number rounded using rounding mode rm to a maximum of dp decimal places.
     *
     * @param dp Decimal places, 0 to 1e+6 inclusive
     * @param rm The rounding mode, one of the RoundingMode enumeration values
     * @throws `!round!` if dp is invalid.
     * @throws `!Big.RM!` if rm is invalid.
     */
    round(dp?: number, rm?: RoundingMode): Big;
    /**
     * Returns a Big number whose value is the square root of this Big number.
     *
     * If the result has more fraction digits than is specified by Big.DP, it will be rounded to Big.DP decimal places using rounding mode Big.RM.
     *
     * @throws `NaN` if this Big number is negative.
     */
    sqrt(): Big;
    /**
     * Returns a Big number whose value is the value of this Big number minus n - alias for .minus().
     *
     * @throws `NaN` if n is invalid.
     */
    sub(n: BigSource): Big;
    /**
     * Returns a Big number whose value is the value of this Big number times n.
     *
     * @throws `NaN` if n is invalid.
     */
    times(n: BigSource): Big;
    /**
     * Returns a string representing the value of this Big number in exponential notation to a fixed number of decimal places dp.
     *
     * If the value of this Big number in exponential notation has more digits to the right of the decimal point than is specified by dp,
     * the return value will be rounded to dp decimal places using rounding mode Big.RM.
     *
     * If the value of this Big number in exponential notation has fewer digits to the right of the decimal point than is specified by dp, the return value will be appended with zeros accordingly.
     *
     * If dp is omitted, or is null or undefined, the number of digits after the decimal point defaults to the minimum number of digits necessary to represent the value exactly.
     *
     * @param dp Decimal places, 0 to 1e+6 inclusive
     * @param rm Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
     * @throws `!toFix!` if dp is invalid.
     */
    toExponential(dp?: number, rm?: RoundingMode): string;
    /**
     * Returns a string representing the value of this Big number in normal notation to a fixed number of decimal places dp.
     *
     * If the value of this Big number in normal notation has more digits to the right of the decimal point than is specified by dp,
     * the return value will be rounded to dp decimal places using rounding mode Big.RM.
     *
     * If the value of this Big number in normal notation has fewer fraction digits then is specified by dp, the return value will be appended with zeros accordingly.
     *
     * Unlike Number.prototype.toFixed, which returns exponential notation if a number is greater or equal to 1021, this method will always return normal notation.
     *
     * If dp is omitted, or is null or undefined, then the return value is simply the value in normal notation.
     * This is also unlike Number.prototype.toFixed, which returns the value to zero decimal places.
     *
     * @param dp Decimal places, 0 to 1e+6 inclusive
     * @param rm Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
     * @throws `!toFix!` if dp is invalid.
     */
    toFixed(dp?: number, rm?: RoundingMode): string;
    /**
     * Returns a string representing the value of this Big number to the specified number of significant digits sd.
     *
     * If the value of this Big number has more digits than is specified by sd, the return value will be rounded to sd significant digits using rounding mode Big.RM.
     *
     * If the value of this Big number has fewer digits than is specified by sd, the return value will be appended with zeros accordingly.
     *
     * If sd is less than the number of digits necessary to represent the integer part of the value in normal notation, then exponential notation is used.
     *
     * If sd is omitted, or is null or undefined, then the return value is the same as .toString().
     *
     * @param sd Significant digits, 1 to 1e+6 inclusive
     * @param rm Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
     * @throws `!toPre!` if sd is invalid.
     */
    toPrecision(sd?: number, rm?: RoundingMode): string;
    /**
     * Returns a string representing the value of this Big number.
     *
     * If this Big number has a positive exponent that is equal to or greater than 21, or a negative exponent equal to or less than -7, then exponential notation is returned.
     *
     * The point at which toString returns exponential rather than normal notation can be adjusted by changing
     * the value of Big.E_POS and Big.E_NEG. By default, Big numbers correspond to Javascript's number type in this regard.
     */
    toString(): string;
    /**
     * Returns a primitive number representing the value of this Big number.
     *
     * If Big.strict is true an error will be thrown if toNumber is called on a Big number which cannot be converted to a primitive number without a loss of precision.
     *
     * @since 6.0
     */
    toNumber(): number;
    /**
     * Returns a string representing the value of this Big number.
     *
     * If this Big number has a positive exponent that is equal to or greater than 21, or a negative exponent equal to or less than -7, then exponential notation is returned.
     *
     * The point at which toString returns exponential rather than normal notation can be adjusted by changing
     * the value of Big.E_POS and Big.E_NEG. By default, Big numbers correspond to Javascript's number type in this regard.
     */
    valueOf(): string;
    /**
     * Returns a string representing the value of this Big number.
     *
     * If this Big number has a positive exponent that is equal to or greater than 21, or a negative exponent equal to or less than -7, then exponential notation is returned.
     *
     * The point at which toString returns exponential rather than normal notation can be adjusted by changing
     * the value of Big.E_POS and Big.E_NEG. By default, Big numbers correspond to Javascript's number type in this regard.
     */
    toJSON(): string;
    /**
     * Returns an array of single digits
     */
    c: number[];
    /**
     * Returns the exponent, Integer, -1e+6 to 1e+6 inclusive
     */
    e: number;
    /**
     * Returns the sign, -1 or 1
     */
    s: number;
}

// We want the exported symbol 'Big' to represent two things:
// - The Big interface, when used in a type context.
// - The BigConstructor instance, when used in a value context.
export const Big: BigConstructor;

// The default export is the same as type/value combo symbol 'Big'.
export default Big;

// If you pull in big.js via a <script> tag, the global symbol 'Big' is automatically defined.
// To let TypeScript know that, add this to your project's global types file, e.g. "types.d.ts":
//
// import BigJs from 'big.js';
// declare global {
//     const Big = BigJs;
//     type Big = BigJs;
// }
//
// There is a way to have TypeScript know to do this automatically (using "export as namespace"),
// but I couldn't get it working correctly.

// Type definitions for big.js
// Project: https://github.com/MikeMcl/big.js/
// Definitions by: Steve Ognibene <https://github.com/nycdotnet/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace BigJsLibrary {

    export const enum RoundingMode {
        RoundTowardsZero = 0,
        RoundTowardsNearestAwayFromZero = 1,
        RoundTowardsNearestTowardsEven = 2,
        RoundAwayFromZero = 3
    }

    interface BigJS extends BigJS_Constructors {
        /** The maximum number of decimal places of the results of operations involving division.
            It is relevant only to the div and sqrt methods, and the pow method when the exponent is negative.
            @default 40 */
        DP: number;

        /** The rounding mode used in the above operations and by round, toExponential, toFixed and toPrecision.
            Default is RoundTowardsNearestAwayFromZero
            @default 1 */
        RM: RoundingMode;
    }

    type BigNumberInputType = number | string | BigJS;

    interface BigJS_Constructors {
        new (value: BigNumberInputType): BigJS;
        (value: BigNumberInputType): BigJS;

		/** A decimal value.  */
        (): BigJS;
    }

    /** BigJS instance methods */
    interface BigJS extends BigJS_Constructors {
        /** Returns a Big number whose value is the absolute value, i.e. the magnitude, of this Big number.     */
        abs(): BigJS;

        /** Compare
            @returns {Number}
             1 = If the value of this Big number is greater than the value of n
            -1 = If the value of this Big number is less than the value of n
             0 = If this Big number and n have the same value */
        cmp(n: BigNumberInputType): number;

        /** Returns a Big number whose value is the value of this Big number divided by n.  */
        div(n: BigNumberInputType): BigJS;

        /** Returns true if the value of this Big equals the value of n, otherwise returns false.  */
        eq(n: BigNumberInputType): boolean;

        /** Returns true if the value of this Big is greater than the value of n, otherwise returns false.  */
        gt(n: BigNumberInputType): boolean;

        /** Returns true if the value of this Big is greater than or equal to the value of n, otherwise returns false.  */
        gte(n: BigNumberInputType): boolean;

        /** Returns true if the value of this Big is less than the value of n, otherwise returns false.  */
        lt(n: BigNumberInputType): boolean;

        /** Returns true if the value of this Big is less than or equal to the value of n, otherwise returns false.  */
        lte(n: BigNumberInputType): boolean;

        /** Returns a Big number whose value is the value of this Big number minus n.  */
        minus(n: BigNumberInputType): BigJS;

        /** Returns a Big number whose value is the value of this Big number modulo n, i.e. the integer remainder of dividing this Big number by n.
         The result will have the same sign as this Big number, and it will match that of Javascript's % operator (within the limits of its precision) and BigDecimal's remainder method. */
        mod(n: BigNumberInputType): BigJS;

        /** Returns a Big number whose value is the value of this Big number plus n.  */
        plus(n: BigNumberInputType): BigJS;

        /** Returns a Big number whose value is the value of this Big number raised to the power exp.
            If exp is negative and the result has more fraction digits than is specified by Big.DP, it will be rounded to Big.DP decimal places using rounding mode Big.RM.
            @param exp integer, -1e+6 to 1e+6 inclusive */
        pow(exp: number): BigJS;

        /** Returns a Big number whose value is the value of this Big number rounded to a whole number.     */
        round(): BigJS;
        /** Returns a Big number whose value is the value of this Big number rounded using rounding mode rm to a maximum of dp decimal places.
            @param dp Number of decimal places (0 to 1e+6 inclusive).  If dp is omitted or is null or undefined, the return value is n rounded to a whole number.    */
        round(dp: number): BigJS;
        /** Returns a Big number whose value is the value of this Big number rounded using rounding mode rm to a maximum of dp decimal places.
            @param dp Number of decimal places (0 to 1e+6 inclusive).  If dp is omitted or is null or undefined, the return value is n rounded to a whole number.
            @param rm Rounding mode.  If rm is omitted or is null or undefined, the current Big.RM setting is used.     */
        round(dp: number, rm: RoundingMode): BigJS;

        /** Returns a Big number whose value is the square root of this Big number.  */
        sqrt(): BigJS;

        /** Returns a Big number whose value is the value of this Big number times n.  */
        times(n: BigNumberInputType): BigJS;

        /** Returns a string representing the value of this Big number in exponential notation to a fixed number of decimal places dp.    */
        toExponential(): string;
        /** Returns a string representing the value of this Big number in exponential notation to a fixed number of decimal places dp.
            @param dp Number of decimal places (0 to 1e+6 inclusive).  If dp is omitted, or is null or undefined, the number of digits after the decimal point defaults to the minimum number of digits necessary to represent the value exactly.    */
        toExponential(dp: number): string;

        /** Returns a string representing the value of this Big number in normal notation to a fixed number of decimal places dp.  */
        toFixed(): string;
        /** Returns a string representing the value of this Big number in normal notation to a fixed number of decimal places dp.
            @param dp Number of decimal places (0 to 1e+6 inclusive). If dp is omitted, or is null or undefined, then the return value is simply the value in normal notation. This is also unlike Number.prototype.toFixed, which returns the value to zero decimal places.     */
        toFixed(dp: number): string;

        /** Returns a string representing the value of this Big number to the specified number of significant digits sd.  */
        toPrecision(): string;
        /** Returns a string representing the value of this Big number to the specified number of significant digits sd.
            @param sd significant digits.  If sd is omitted, or is null or undefined, then the return value is the same as .toString().     */
        toPrecision(sd: number /** number of significant digits (0 to 1e+6 inclusive) */): string;

        /** Returns a string representing the value of this Big number. */
        toString(): string;

        /** As toString.  */
        valueOf(): string;

        /** As toString.  */
        toJSON(): string;

        /** coefficient (significand) */
        c: number[];

        /** exponent (Integer, -1e+6 to 1e+6 inclusive) */
        e: number;

        /** sign (-1 or 1) */
        s: number;
    }
}

declare module "big.js" {
    var bigjs : BigJsLibrary.BigJS;
    export = bigjs;
}

declare var Big: BigJsLibrary.BigJS;

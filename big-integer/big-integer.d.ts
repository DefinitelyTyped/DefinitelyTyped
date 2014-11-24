// Type definitions for BigInteger.js
// Project: https://github.com/peterolson/BigInteger.js
// Definitions by: Ingo Bürk <https://github.com/Airblader>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface BigInteger {
    /** Returns the absolute value of a bigInt. */
    abs(): BigInteger;

    /** Performs addition */
    add( number: number ): BigInteger;
    /** Performs addition */
    add( number: BigInteger ): BigInteger;
    /** Performs addition */
    add( number: string ): BigInteger;

    /** Alias for the add method. */
    plus( number: number ): BigInteger;
    /** Alias for the add method. */
    plus( number: BigInteger ): BigInteger;
    /** Alias for the add method. */
    plus( number: string ): BigInteger;

    /** Alias for the subtract method. */
    minus( number: number ): BigInteger;
    /** Alias for the subtract method. */
    minus( number: BigInteger ): BigInteger;
    /** Alias for the subtract method. */
    minus( number: string ): BigInteger;

    /** Performs subtraction. */
    subtract( number: number ): BigInteger;
    /** Performs subtraction. */
    subtract( number: BigInteger ): BigInteger;
    /** Performs subtraction. */
    subtract( number: string ): BigInteger;

    /** Performs multiplication. */
    multiply( number: number ): BigInteger;
    /** Performs multiplication. */
    multiply( number: BigInteger ): BigInteger;
    /** Performs multiplication. */
    multiply( number: string ): BigInteger;

    /** Alias for the multiply method. */
    times( number: number ): BigInteger;
    /** Alias for the multiply method. */
    times( number: BigInteger ): BigInteger;
    /** Alias for the multiply method. */
    times( number: string ): BigInteger;

    /** Performs integer division, disregarding the remainder. */
    divide( number: number ): BigInteger;
    /** Performs integer division, disregarding the remainder. */
    divide( number: BigInteger ): BigInteger;
    /** Performs integer division, disregarding the remainder. */
    divide( number: string ): BigInteger;

    /** Alias for the divide method. */
    over( number: number ): BigInteger;
    /** Alias for the divide method. */
    over( number: BigInteger ): BigInteger;
    /** Alias for the divide method. */
    over( number: string ): BigInteger;

    /** Performs exponentiation. If the exponent is less than 0, pow returns 0. bigInt.zero.pow(0) returns 1. */
    pow( number: number ): BigInteger;
    /** Performs exponentiation. If the exponent is less than 0, pow returns 0. bigInt.zero.pow(0) returns 1. */
    pow( number: BigInteger ): BigInteger;
    /** Performs exponentiation. If the exponent is less than 0, pow returns 0. bigInt.zero.pow(0) returns 1. */
    pow( number: string ): BigInteger;

    /** Adds one to the number. */
    next(): BigInteger;

    /** Subtracts one from the number. */
    prev(): BigInteger;

    /** Performs division and returns the remainder, disregarding the quotient. The sign of the remainder will match the sign of the dividend. */
    mod( number: number ): BigInteger;
    /** Performs division and returns the remainder, disregarding the quotient. The sign of the remainder will match the sign of the dividend. */
    mod( number: BigInteger ): BigInteger;
    /** Performs division and returns the remainder, disregarding the quotient. The sign of the remainder will match the sign of the dividend. */
    mod( number: string ): BigInteger;

    /** Performs division and returns an object with two properties: quotient and remainder. The sign of the remainder will match the sign of the dividend. */
    divmod( number: number ): { quotient: BigInteger; remainder: BigInteger };
    /** Performs division and returns an object with two properties: quotient and remainder. The sign of the remainder will match the sign of the dividend. */
    divmod( number: BigInteger ): { quotient: BigInteger; remainder: BigInteger };
    /** Performs division and returns an object with two properties: quotient and remainder. The sign of the remainder will match the sign of the dividend. */
    divmod( number: string ): { quotient: BigInteger; remainder: BigInteger };

    /** Checks if the first number is greater than the second. */
    greater( number: number ): boolean;
    /** Checks if the first number is greater than the second. */
    greater( number: BigInteger ): boolean;
    /** Checks if the first number is greater than the second. */
    greater( number: string ): boolean;

    /** Checks if the first number is greater than or equal to the second. */
    greaterOrEquals( number: number ): boolean;
    /** Checks if the first number is greater than or equal to the second. */
    greaterOrEquals( number: BigInteger ): boolean;
    /** Checks if the first number is greater than or equal to the second. */
    greaterOrEquals( number: string ): boolean;

    /** Checks if the first number is lesser than the second. */
    lesser( number: number ): boolean;
    /** Checks if the first number is lesser than the second. */
    lesser( number: BigInteger ): boolean;
    /** Checks if the first number is lesser than the second. */
    lesser( number: string ): boolean;

    /** Checks if the first number is less than or equal to the second. */
    lesserOrEquals( number: number ): boolean;
    /** Checks if the first number is less than or equal to the second. */
    lesserOrEquals( number: BigInteger ): boolean;
    /** Checks if the first number is less than or equal to the second. */
    lesserOrEquals( number: string ): boolean;

    /** Returns true if the number is even, false otherwise. */
    isEven(): boolean;

    /** Returns true if the number is odd, false otherwise. */
    isOdd(): boolean;

    /** Return true if the number is positive, false otherwise. Returns true for 0 and false for -0. */
    isPositive(): boolean;

    /** Returns true if the number is negative, false otherwise. Returns false for 0 and true for -0. */
    isNegative(): boolean;

    /**
     * Performs a comparison between two numbers. If the numbers are equal, it returns 0.
     * If the first number is greater, it returns 1. If the first number is lesser, it returns -1.
     */
    compare( number: number ): BigInteger;
    /**
     * Performs a comparison between two numbers. If the numbers are equal, it returns 0.
     * If the first number is greater, it returns 1. If the first number is lesser, it returns -1.
     */
    compare( number: BigInteger ): BigInteger;
    /**
     * Performs a comparison between two numbers. If the numbers are equal, it returns 0.
     * If the first number is greater, it returns 1. If the first number is lesser, it returns -1.
     */
    compare( number: string ): BigInteger;

    /** Performs a comparison between the absolute value of two numbers. */
    compareAbs( number: number ): BigInteger;
    /** Performs a comparison between the absolute value of two numbers. */
    compareAbs( number: BigInteger ): BigInteger;
    /** Performs a comparison between the absolute value of two numbers. */
    compareAbs( number: string ): BigInteger;

    /** Checks if two numbers are equal. */
    equals( number: number ): boolean;
    /** Checks if two numbers are equal. */
    equals( number: BigInteger ): boolean;
    /** Checks if two numbers are equal. */
    equals( number: string ): boolean;

    /** Checks if two numbers are not equal. */
    notEquals( number: number ): boolean;
    /** Checks if two numbers are not equal. */
    notEquals( number: BigInteger ): boolean;
    /** Checks if two numbers are not equal. */
    notEquals( number: string ): boolean;

    /** Converts a bigInt into a native Javascript number. Loses precision for numbers outside the range. */
    toJSNumber(): number;

    /** Converts a bigInt to a string. */
    toString(): string;

    /** Converts a bigInt to a native Javascript number. This override allows you to use native arithmetic operators without explicit conversion. */
    valueOf(): number;
}

interface BigIntegerStatic {
    /** Equivalent to bigInt(1) */
    one: BigInteger;
    /** Equivalent to bigInt(0) */
    zero: BigInteger;
    /** Equivalent to bigInt(-1) */
    minusOne: BigInteger;

    /** Equivalent to bigInt(0) */
    (): BigInteger;
    /** Parse a Javascript number into a bigInt */
    ( number: number ): BigInteger;
    /** Parse a string into a bigInt */
    ( string: string ): BigInteger;
    /** no-op */
    ( bigInt: BigInteger ): BigInteger;
}

declare var bigInt: BigIntegerStatic;

declare module "big-integer" {
    export = bigInt;
}
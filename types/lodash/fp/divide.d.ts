import _ = require("../index");

declare namespace Lodash {
    interface Divide {
        /**
        * Divide two numbers.
        *
        * @param dividend The first number in a division.
        * @param divisor The second number in a division.
        * @returns Returns the quotient.
        */
        (): Divide;
        /**
        * Divide two numbers.
        *
        * @param dividend The first number in a division.
        * @param divisor The second number in a division.
        * @returns Returns the quotient.
        */
        (divisor: number): Divide1x1;
        /**
        * Divide two numbers.
        *
        * @param dividend The first number in a division.
        * @param divisor The second number in a division.
        * @returns Returns the quotient.
        */
        (divisor: number, dividend: number): number;
    }
    interface Divide1x1 {
        /**
        * Divide two numbers.
        *
        * @param dividend The first number in a division.
        * @param divisor The second number in a division.
        * @returns Returns the quotient.
        */
        (): Divide1x1;
        /**
        * Divide two numbers.
        *
        * @param dividend The first number in a division.
        * @param divisor The second number in a division.
        * @returns Returns the quotient.
        */
        (dividend: number): number;
    }
}

declare const divide: Lodash.Divide;
export = divide;

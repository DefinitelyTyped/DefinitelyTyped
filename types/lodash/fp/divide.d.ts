// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

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
    (dividend: number): Divide1x1;
    /**
    * Divide two numbers.
    *
    * @param dividend The first number in a division.
    * @param divisor The second number in a division.
    * @returns Returns the quotient.
    */
    (dividend: number, divisor: number): number;
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
    (divisor: number): number;
}

declare const divide: Divide;
declare namespace divide {}
export = divide;

import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
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
        divide(divisor: number): LoDashExplicitWrapper<number>;
    }
}
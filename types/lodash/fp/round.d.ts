import _ = require("../index");

declare namespace Lodash {
    interface Round {
        /**
         * Calculates n rounded to precision.
         *
         * @param n The number to round.
         * @param precision The precision to round to.
         * @return Returns the rounded number.
         */
        (): Round;
        /**
         * Calculates n rounded to precision.
         *
         * @param n The number to round.
         * @param precision The precision to round to.
         * @return Returns the rounded number.
         */
        (n: number): number;
    }
}

declare const round: Lodash.Round;
export = round;

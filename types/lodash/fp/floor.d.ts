import _ = require("../index");

declare namespace Lodash {
    interface Floor {
        /**
         * Calculates n rounded down to precision.
         *
         * @param n The number to round down.
         * @param precision The precision to round down to.
         * @return Returns the rounded down number.
         */
        (): Floor;
        /**
         * Calculates n rounded down to precision.
         *
         * @param n The number to round down.
         * @param precision The precision to round down to.
         * @return Returns the rounded down number.
         */
        (n: number): number;
    }
}

declare const floor: Lodash.Floor;
export = floor;

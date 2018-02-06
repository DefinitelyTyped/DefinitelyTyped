import _ = require("../index");

declare namespace Lodash {
    interface Ceil {
        /**
         * Calculates n rounded up to precision.
         *
         * @param n The number to round up.
         * @param precision The precision to round up to.
         * @return Returns the rounded up number.
         */
        (): Ceil;
        /**
         * Calculates n rounded up to precision.
         *
         * @param n The number to round up.
         * @param precision The precision to round up to.
         * @return Returns the rounded up number.
         */
        (n: number): number;
    }
}

declare const ceil: Lodash.Ceil;
export = ceil;

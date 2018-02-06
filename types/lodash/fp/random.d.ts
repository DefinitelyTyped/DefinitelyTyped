import _ = require("../index");

declare namespace Lodash {
    interface Random {
        /**
         * Produces a random number between min and max (inclusive). If only one argument is provided a number between
         * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @param min The minimum possible value.
         * @param max The maximum possible value.
         * @param floating Specify returning a floating-point number.
         * @return Returns the random number.
         */
        (): Random;
        /**
         * Produces a random number between min and max (inclusive). If only one argument is provided a number between
         * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @param min The minimum possible value.
         * @param max The maximum possible value.
         * @param floating Specify returning a floating-point number.
         * @return Returns the random number.
         */
        (floating: boolean): Random1x1;
        /**
         * Produces a random number between min and max (inclusive). If only one argument is provided a number between
         * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @param min The minimum possible value.
         * @param max The maximum possible value.
         * @param floating Specify returning a floating-point number.
         * @return Returns the random number.
         */
        (floating: boolean, max: number): number;
    }
    interface Random1x1 {
        /**
         * Produces a random number between min and max (inclusive). If only one argument is provided a number between
         * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @param min The minimum possible value.
         * @param max The maximum possible value.
         * @param floating Specify returning a floating-point number.
         * @return Returns the random number.
         */
        (): Random1x1;
        /**
         * Produces a random number between min and max (inclusive). If only one argument is provided a number between
         * 0 and the given number is returned. If floating is true, or either min or max are floats, a floating-point
         * number is returned instead of an integer.
         *
         * @param min The minimum possible value.
         * @param max The maximum possible value.
         * @param floating Specify returning a floating-point number.
         * @return Returns the random number.
         */
        (max: number): number;
    }
}

declare const random: Lodash.Random;
export = random;

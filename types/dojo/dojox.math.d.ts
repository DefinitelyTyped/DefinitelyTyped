// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/math.html
     *
     * Deprecated.  Should require dojox/math modules directly rather than trying to access them through
     * this module.
     *
     */
    interface math {
    }
    namespace math {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/math/BigInteger.html
         *
         *
         * @param a
         * @param b
         * @param c
         */
        interface BigInteger{(a: any, b: any, c: any): void}
        namespace BigInteger {
            /**
             *
             * @param i
             * @param x
             * @param w
             * @param j
             * @param c
             * @param n
             */
            interface am{(i: any, x: any, w: any, j: any, c: any, n: any): number}
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/math/BigInteger-ext.html
         *
         *
         * @param a
         * @param b
         * @param c
         */
        interface BigInteger_ext{(a: any, b: any, c: any): void}
        namespace BigInteger_ext {
            /**
             *
             * @param i
             * @param x
             * @param w
             * @param j
             * @param c
             * @param n
             */
            interface am{(i: any, x: any, w: any, j: any, c: any, n: any): number}
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/math/round.html
         *
         *
         * @param v
         * @param p
         * @param m
         */
        interface round{(v: any, p: any, m: any): void}
        module _base {
        }

        namespace curves {
        }

        namespace matrix {
        }

        namespace random {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/math/random/prng4.html
             *
             *
             */
            interface prng4{(): void}
            namespace prng4 {
                /**
                 *
                 */
                var size: number
            }

            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/math/random/Secure.html
             *
             * Super simple implementation of a random number generator,
             * which relies on Math.random().
             *
             * @param prng function that returns an instance of PRNG (pseudo random number generator)with two methods: init(array) and next(). It should have a property "size"to indicate the required pool size.
             * @param noEvents       Optionalif false or absent, onclick and onkeypress event will be used to add"randomness", otherwise events will not be used.
             */
            class Secure {
                constructor(prng: Function, noEvents?: boolean);
                /**
                 * Disconnects events, if any, preparing the object for GC.
                 *
                 */
                destroy(): void;
                /**
                 * Fills in an array of bytes with random numbers
                 *
                 * @param byteArray array to be filled in with random numbers, only existingelements will be filled.
                 */
                nextBytes(byteArray: any[]): void;
                /**
                 * Mix in the current time (w/milliseconds) into the pool
                 *
                 */
                seedTime(): void;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/math/random/Simple.html
             *
             * Super simple implementation of a random number generator,
             * which relies on Math.random().
             *
             */
            class Simple {
                constructor();
                /**
                 * Prepares the object for GC. (empty in this case)
                 *
                 */
                destroy(): void;
                /**
                 * Fills in an array of bytes with random numbers
                 *
                 * @param byteArray array to be filled in with random numbers, only existingelements will be filled.
                 */
                nextBytes(byteArray: any[]): void;
            }
        }

        namespace stats {
        }

    }

}

declare module "dojox/math" {
    var exp: dojox.math
    export=exp;
}
declare module "dojox/math/BigInteger" {
    var exp: dojox.math.BigInteger
    export=exp;
}
declare module "dojox/math/BigInteger-ext" {
    var exp: dojox.math.BigInteger_ext
    export=exp;
}
declare module "dojox/math/round" {
    var exp: dojox.math.round
    export=exp;
}
declare module "dojox/math/random/prng4" {
    var exp: dojox.math.random.prng4
    export=exp;
}
declare module "dojox/math/random/Simple" {
    var exp: dojox.math.random.Simple
    export=exp;
}
declare module "dojox/math/random/Secure" {
    var exp: dojox.math.random.Secure
    export=exp;
}

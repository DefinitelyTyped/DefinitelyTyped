// Development repository: https://github.com/Evgenus/bigint-typescript-definitions
// For answers, fixes and cutting edge version please see development repository.

declare namespace BigInt {
    export interface BigInt extends Array<number> {
    }

    export interface IRandom {
        (): number;
    }

    /**
     * Sets a random number generator.
     *
     * @param {IRandom} random function that returns random number.
     */
    export function setRandom(random: IRandom): void;

    /**
     * return (x+y) for bigInts x and y.
     *
     * @param {BigInt} x The BigInt augend.
     * @param {BigInt} y The BigInt addend.
     *
     * @return {BigInt} A sum as BigInt.
     */
    export function add(x: BigInt, y: BigInt): BigInt;

    /**
     * return (x+n) where x is a bigInt and n is an integer.
     *
     * @param {BigInt} x The BigInt augend.
     * @param {number} n The number addend.
     *
     * @return {BigInt} A sum as BigInt.
     */
    export function addInt(x: BigInt, n: number): BigInt;

    /**
     * return a string form of bigInt x in a given base, with 2 <= base <= 95.
     *
     * @param {BigInt} x    The BigInt to stringify.
     * @param {number} base The base as radix number.
     *
     * @return {string} A string representation of given BigInt.
     */
    export function bigInt2str(x: BigInt, base: number): string;

    /**
     * return a string form of bigInt x in a given base, with 2 <= base <= 95.
     *
     * @param {BigInt} x    The BigInt to stringify.
     * @param {string} base The base as vocabulary of characters.
     *
     * @return {string} A string representation of given BigInt.
     */
    export function bigInt2str(x: BigInt, base: string): string;

    /**
     * return how many bits long the bigInt x is, not counting leading zeros.
     *
     * @param {BigInt} x The BigInt to process.
     *
     * @return {number} A size in BigInt as number.
     */
    export function bitSize(x: BigInt): number;

    /**
     * return a copy of bigInt x.
     *
     * @param {BigInt} x Source BigInt to be copied.
     *
     * @return {BigInt} A copy of this object.
     */
    export function dup(x: BigInt): BigInt;

    /**
     * is the bigInt x equal to the bigint y?
     *
     * @param {BigInt} x BigInt to be compared.
     * @param {BigInt} y BigInt to be compared.
     *
     * @return {boolean} true if the objects are considered equal, false if they are not.
     */
    export function equals(x: BigInt, y: BigInt): boolean;

    /**
     * is bigint x equal to integer y?
     *
     * @param {BigInt} x BigInt to be compared.
     * @param {BigInt} y BigInt to be compared.
     *
     * @return {boolean} true if the objects are considered equal, false if not.
     */
    export function equalsInt(x: BigInt, y: number): boolean;

    /**
     * return a copy of x with at least n elements, adding leading zeros if needed.
     *
     * @param {BigInt} value The source object to copy.
     * @param {number} n     The minimal number of elements.
     *
     * @return {BigInt} A copy of given BigInt.
     */
    export function expand(value: BigInt, n: number): BigInt;

    /**
     * return array of all primes less than integer n.
     *
     * @param {number} n Upper limit of search.
     *
     * @return {Array} The found primes as Array.
     */
    export function findPrimes(n: number): number[];

    /**
     * return greatest common divisor of bigInts x and y (each with same number of elements).
     *
     * @param {BigInt} x The BigInt to process.
     * @param {BigInt} y The BigInt to process.
     *
     * @return {BigInt} A greatest common divisor as BigInt.
     */
    export function GCD(x: BigInt, y: BigInt): BigInt;

    /**
     * is x>y?  (x and y are nonnegative bigInts)
     *
     * @param {BigInt} x BigInt to be compared.
     * @param {BigInt} y BigInt to be compared.
     *
     * @return {boolean} true if x is greater, false if it's not.
     */
    export function greater(x: BigInt, y: BigInt): boolean;

    /**
     * is (x <<(shift*bpe)) > y?
     *
     * @param {BigInt} x     BigInt to be compared.
     * @param {BigInt} y     BigInt to be compared.
     * @param {number} shift The shift amount in bits.
     *
     * @return {boolean} true if x is greater, false if it's not.
     */
    export function greaterShift(x: BigInt, y: BigInt, shift: number): boolean;

    /**
     * return a bigInt equal to integer t, with at least n bits and m array elements.
     *
     * @param {number} t  The number to process.
     * @param {number=} n (Optional) the number to process.
     * @param {number=} m (Optional) the number to process.
     *
     * @return {BigInt} A BigInt equivalent of given number.
     */
    export function int2bigInt(t: number, n?: number, m?: number): BigInt;

    /**
     * return (x**(-1) mod n) for bigInts x and n. If no inverse exists, it returns null.
     *
     * @param {BigInt} x The BigInt base.
     * @param {BigInt} n The BigInt divisor.
     *
     * @return {BigInt} A BigInt remainder.
     */
    export function inverseMod(x: BigInt, n: BigInt): BigInt;

    /**
     * return x**(-1) mod n, for integers x and n.
     * Return 0 if there is no inverse.
     *
     * @param {number} x The BigInt base.
     * @param {number} n The BigInt divisor.
     *
     * @return {BigInt} A BigInt remainder.
     */
    export function inverseModInt(x: number, n: number): BigInt;

    /**
     * is the bigInt x equal to zero?
     *
     * @param {BigInt} x BigInt to be compared.
     *
     * @return {boolean} true if zero, false if not.
     */
    export function isZero(x: BigInt): boolean;

    /**
     * does one round of Miller-Rabin base integer b say that bigInt x is possibly prime?
     *
     * @param {BigInt} x The BigInt to process.
     * @param {BigInt} b The BigInt to process. (b is bigInt, 1<b<x)
     *
     * @return {boolean} true if it is prime, false if it is not.
     */
    export function millerRabin(x: BigInt, b: BigInt): boolean;

    /**
     * does one round of Miller-Rabin base integer b say that bigInt x is possibly prime?
     *
     * @param {number} x The number to process.
     * @param {number} b The number to process. (b is int, 1<b<x)
     *
     * @return {boolean} true if it is prime, false if it is not.
     */
    export function millerRabinInt(x: number, b: number): boolean;

    /**
     * return a new bigInt equal to (x mod n) for bigInts x and n.
     *
     * @param {BigInt} x The dividend.
     * @param {BigInt} n The divisor.
     *
     * @return {BigInt} A remainder as BigInt.
     */
    export function mod(x: BigInt, n: BigInt): BigInt;

    /**
     * return x mod n for bigInt x and integer n.
     *
     * @param {BigInt} x The dividend.
     * @param {number} n The divisor.
     *
     * @return {number} A remainder as number.
     */
    export function modInt(x: BigInt, n: number): number;

    /**
     * return x*y for bigInts x and y. This is faster when y<x.
     *
     * @param {BigInt} x The multiplicand.
     * @param {BigInt} y The multiplier.
     *
     * @return {BigInt} A product as BigInt.
     */
    export function mult(x: BigInt, y: BigInt): BigInt;

    /**
     * return (x*y mod n) for bigInts x,y,n. For greater speed, let y<x.
     *
     * @param {BigInt} x The multiplicand.
     * @param {BigInt} y The multiplier.
     * @param {BigInt} n The divisor.
     *
     * @return {BigInt} A remainder as BigInt.
     */
    export function multMod(x: BigInt, y: BigInt, n: BigInt): BigInt;

    /**
     * is bigInt x negative?
     *
     * @param {BigInt} x BigInt to be compared.
     *
     * @return {boolean} true if x is negative, false if x is positive.
     */
    export function negative(x: BigInt): boolean;

    /**
     * return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.
     *  0**0=1. Faster for odd n.
     *
     * @param {BigInt} x The BigInt base.
     * @param {BigInt} y The BigInt exponent.
     * @param {BigInt} n The BigInt divisor.
     *
     * @return {BigInt} A remainder as BigInt.
     */
    export function powMod(x: BigInt, y: BigInt, n: BigInt): BigInt;

    /**
     * return an n-bit random BigInt (n>=1).
     *  If s=1, then the most significant of those n bits is set to 1.
     *
     * @param {number} n The number of bits (n>=1).
     * @param {number} s The sign bit.
     *
     * @return {BigInt} A new random BigInt.
     */
    export function randBigInt(n: number, s: number): BigInt;

    /**
     * return a new, random, k-bit, true prime bigInt using Maurer's algorithm.
     *
     * @param {number} k The number of bits.
     *
     * @return {BigInt} A new random BigInt.
     */
    export function randTruePrime(k: number): BigInt;

    /**
     * return a new, random, k-bit, probable prime bigInt.
     *  Probability it's composite less than 2^- 80.
     *
     * @param {number} k The number of bits.
     *
     * @return {BigInt} A new probably random BigInt.
     */
    export function randProbPrime(k: number): BigInt;

    /**
     * return a bigInt for number represented in string s in base b with at least n bits and m array
     * elements.
     *
     * @param {string} s  The string representation of number.
     * @param {number} b  The base as radix number.
     * @param {number=} n (Optional) minimal bit length as number.
     * @param {number=} m (Optional) the number of array elements as number.
     *
     * @return {BigInt} A parsed BigInt.
     */
    export function str2bigInt(s: string, b: number, n?: number, m?: number): BigInt;

    /**
     * return a bigInt for number represented in string s in base b with at least n bits and m array
     * elements.
     *
     * @param {string} s  The string representation of number.
     * @param {string} b  The base as string vocabulary of characters.
     * @param {number=} n (Optional) minimal bit length as number.
     * @param {number=} m (Optional) the number of array elements as number.
     *
     * @return {BigInt} A parsed BigInt.
     */
    export function str2bigInt(s: string, b: string, n?: number, m?: number): BigInt;

    /**
     * return (x-y) for bigInts x and y.
     *  Negative answers will be 2s complement.
     *
     * @param {BigInt} x The minuend as BigInt.
     * @param {BigInt} y The subtrahend as BigInt.
     *
     * @return {BigInt} A difference BigInt.
     */
    export function sub(x: BigInt, y: BigInt): BigInt;

    /**
     * return a copy of x with exactly k leading zero elements.
     *
     * @param {BigInt} x The BigInt to be copied.
     * @param {number} k The number of zeroes.
     *
     * @return {BigInt} A copy BigInt.
     */
    export function trim(x: BigInt, k: number): BigInt;

    /**
     * do x=x+n where x is a bigInt and n is an integer.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt accumulator.
     * @param {number} n The number addend.
     */
    export function addInt_(x: BigInt, n: number): void;

    /**
     * do x=x+y for bigInts x and y.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt accumulator.
     * @param {BigInt} y The BigInt addend.
     */
    export function add_(x: BigInt, y: BigInt): void;

    /**
     * do x=y on bigInts x and y.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt destination.
     * @param {BigInt} y The BigInt source.
     */
    export function copy_(x: BigInt, y: BigInt): void;

    /**
     * do x=n on bigInt x and integer n.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt destination.
     * @param {number} n The number source.
     */
    export function copyInt_(x: BigInt, n: number): void;

    /**
     * set x to the greatest common divisor of bigInts x and y, (y is destroyed).
     *  This never overflows its array.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt first dividend.
     * @param {BigInt} y The BigInt second dividend.
     */
    export function GCD_(x: BigInt, y: BigInt): void;

    /**
     * do x=x**(-1) mod n, for bigInts x and n. Returns 1 (0) if inverse does (doesn't) exist.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt base and the remainder result.
     * @param {BigInt} n The BigInt divisor.
     *
     * @return {boolean} true if inverse does exist, false if doesn't.
     */
    export function inverseMod_(x: BigInt, n: BigInt): boolean;

    /**
     * do x=x mod n for bigInts x and n. (This never overflows its array).
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt dividend and the remainder result.
     * @param {BigInt} n The BigInt divisor.
     */
    export function mod_(x: BigInt, n: BigInt): void;

    /**
     * do x=x*y for bigInts x and y.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt multiplicand and the product result.
     * @param {BigInt} y The BigInt multiplier.
     */
    export function mult_(x: BigInt, y: BigInt): void;

    /**
     * do x=x*y mod n for bigInts x,y,n.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt multiplicand and the remainder result.
     * @param {BigInt} y The BigInt multiplier.
     * @param {BigInt} n The BigInt divisor.
     */
    export function multMod_(x: BigInt, y: BigInt, n: BigInt): void;

    /**
     * do x=x**y mod n, where x,y,n are bigInts (n is odd) and ** is exponentiation.
     *  0**0=1.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt base and the remainder result.
     * @param {BigInt} y The BigInt exponent.
     * @param {BigInt} n The BigInt divisor.
     */
    export function powMod_(x: BigInt, y: BigInt, n: BigInt): void;

    /**
     * do b = an n-bit random BigInt.
     *  if s=1, then nth bit (most significant bit) is set to 1. n>=1.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} b The BigInt destination.
     * @param {number} n The number of bits.
     * @param {number} s The sign bit number.
     */
    export function randBigInt_(b: BigInt, n: number, s: number): void;

    /**
     * do ans = a random k-bit true random prime (not just probable prime) with 1 in the msb.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} ans The destination.
     * @param {number} k   The number of bits.
     */
    export function randTruePrime_(ans: BigInt, k: number): void;

    /**
     * do x=x-y for bigInts x and y. Negative answers will be 2s complement.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt minuend and the result difference.
     * @param {BigInt} y The BigInt subtrahend .
     */
    export function sub_(x: BigInt, y: BigInt): void;

    /**
     * do x=x+(y<<(ys*bpe))
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x  The BigInt accumulator.
     * @param {BigInt} y  The BigInt addend to be shifted.
     * @param {number} ys The number of shift amount.
     */
    export function addShift_(x: BigInt, y: BigInt, ys: number): void;

    /**
     * do carries and borrows so each element of the bigInt x fits in bpe bits.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt to process.
     */
    export function carry_(x: BigInt): void;

    /**
     * divide x by y giving quotient q and remainder r.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt dividend.
     * @param {BigInt} y The BigInt divisor.
     * @param {BigInt} q The BigInt quotient.
     * @param {BigInt} r The BigInt remainder.
     */
    export function divide_(x: BigInt, y: BigInt, q: BigInt, r: BigInt): void;

    /**
     * do x=floor(x/n) for bigInt x and integer n, and return the remainder.
     *  This never overflows its array.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt dividend and the quotient result.
     * @param {number} n The number divisor.
     *
     * @return {number} A number remainder.
     */
    export function divInt_(x: BigInt, n: number): number;

    /**
     * sets a,b,d to positive bigInts such that d = GCD_(x,y) = a*x-b*y.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt to process.
     * @param {BigInt} y The BigInt to process.
     * @param {BigInt} d The BigInt to process.
     * @param {BigInt} a The BigInt to process.
     * @param {BigInt} b The BigInt to process.
     */
    export function eGCD_(x: BigInt, y: BigInt, d: BigInt, a: BigInt, b: BigInt): void;

    /**
     * do x=floor(|x|/2)*sgn(x) for bigInt x in 2's complement.
     *  This never overflows its array.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt to process.
     */
    export function halve_(x: BigInt): void;

    /**
     * left shift bigInt x by n bits.  n<bpe.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt to process.
     * @param {number} n The number of bits.
     */
    export function leftShift_(x: BigInt, n: number): void;

    /**
     * do x=a*x+b*y for bigInts x and y and integers a and b.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt first multiplicand.
     * @param {BigInt} y The BigInt second multiplicand.
     * @param {number} a The number first multiplier.
     * @param {number} b The number second multiplier.
     */
    export function linComb_(x: BigInt, y: BigInt, a: number, b: number): void;

    /**
     * do x=x+b*(y<<(ys*bpe)) for bigInts x and y, and integers b and ys.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x  The BigInt to process.
     * @param {BigInt} y  The BigInt to process.
     * @param {number} b  The number to process.
     * @param {number} ys The number shift.
     */
    export function linCombShift_(x: BigInt, y: BigInt, b: number, ys: number): void;

    /**
     * Montgomery multiplication (see comments where the function is defined)
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x  The BigInt to process.
     * @param {BigInt} y  The BigInt to process.
     * @param {BigInt} n  The BigInt to process.
     * @param {number} np The np.
     */
    export function mont_(x: BigInt, y: BigInt, n: BigInt, np: number): void;

    /**
     * do x=x*n where x is a bigInt and n is an integer.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt multiplicand and the result product.
     * @param {number} n The number multiplier.
     */
    export function multInt_(x: BigInt, n: number): void;

    /**
     * right shift bigInt x by n bits.  0 <= n < bpe.
     *  This never overflows its array.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt to process.
     * @param {number} n The number to process.
     */
    export function rightShift_(x: BigInt, n: number): void;

    /**
     * do x=x*x mod n for bigInts x,n.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x The BigInt base and the result remainder.
     * @param {BigInt} n The BigInt divisor.
     */
    export function squareMod_(x: BigInt, n: BigInt): void;

    /**
     * do x=x-(y<<(ys*bpe)). Negative answers will be 2s complement.
     *
     * @note Intended to be internal function.
     *
     * @param {BigInt} x  The BigInt minuend and the result difference.
     * @param {BigInt} y  The BigInt shifted subtrahend .
     * @param {number} ys The number shift amount.
     */
    export function subShift_(x: BigInt, y: BigInt, ys: number): void;
}

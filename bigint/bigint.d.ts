// Type definitions for BigInt v5.5.1
// Project: https://github.com/Evgenus/BigInt
// Definitions by: Eugene Chernyshov <https://github.com/Evgenus>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module BigInt {
    export interface BigInt extends Array<number> {
    }

    export interface IRandom {
        (): number;
    }

    export function setRandom(random: IRandom): void;

    /**
     * bigInt  add(x,y)
     * return (x+y) for bigInts x and y.
     */
    export function add(x: BigInt, y: BigInt): BigInt;

    /**
     * bigInt  addInt(x,n)
     * return (x+n) where x is a bigInt and n is an integer.
     */
    export function addInt(x: BigInt, n: number): BigInt;

    interface bigInt2str_T<T> {
        /**
         * string  bigInt2str(x,base)
         * return a string form of bigInt x in a given base, with 2 <= base <= 95
         */
        (x: BigInt, base: T): string;        
    }

    interface bigInt2strSignature extends bigInt2str_T<string>, bigInt2str_T<number>{
    }

    export var bigInt2str: bigInt2strSignature;

    /**
     * int     bitSize(x)
     * return how many bits long the bigInt x is, not counting leading zeros
     */
    export function bitSize(x: BigInt): number;

    /**
     * bigInt  dup(x) 
     * return a copy of bigInt x
     */
    export function dup(x: BigInt): BigInt;

    /**
     * boolean equals(x,y)
     * is the bigInt x equal to the bigint y?
     */
    export function equals(x: BigInt, y: BigInt): boolean;

    /**
     * boolean equalsInt(x,y)
     * is bigint x equal to integer y?
     */
    export function equalsInt(x: BigInt, y: number): boolean;

    /**
     * bigInt  expand(x,n)
     * return a copy of x with at least n elements, adding leading zeros if needed
     */
    export function expand(value: BigInt, n: number): BigInt;

    /**
     * Array   findPrimes(n)
     * return array of all primes less than integer n
     */
    export function findPrimes(n: number): number[];

    /**
     * bigInt  GCD(x,y)
     * return greatest common divisor of bigInts x and y (each with same number of elements).
     */
    export function GCD(x: BigInt, y: BigInt): BigInt;

    /**
     * boolean greater(x,y)
     * is x>y?  (x and y are nonnegative bigInts)
     */
    export function greater(x: BigInt, y: BigInt): boolean;

    /**
     * boolean greaterShift(x,y,shift)
     * is (x <<(shift*bpe)) > y?
     */
    export function greaterShift(x: BigInt, y: BigInt, shift: number): boolean;

    /**
     * bigInt  int2bigInt(t,n,m)
     * return a bigInt equal to integer t, with at least n bits and m array elements
     */
    export function int2bigInt(t: number, n?: number, m?: number): BigInt;

    /**
     * bigInt  inverseMod(x,n)
     * return (x**(-1) mod n) for bigInts x and n.  If no inverse exists, it returns null
     */
    export function inverseMod(x: BigInt, n: BigInt): BigInt;

    /**
     * int     inverseModInt(x,n)
     * return x**(-1) mod n, for integers x and n.  Return 0 if there is no inverse
     */
    export function inverseModInt(x: number, n: number): BigInt;

    /**
     * boolean isZero(x)
     * is the bigInt x equal to zero?
     */
    export function isZero(x: BigInt): boolean;

    /**
     * boolean millerRabin(x,b)
     * does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is bigInt, 1<b<x)
     */
    export function millerRabin(x: BigInt, b: BigInt): boolean;

    /**
     * boolean millerRabinInt(x,b)
     * does one round of Miller-Rabin base integer b say that bigInt x is possibly prime? (b is int,    1<b<x)
     */
    export function millerRabinInt(x: number, b: number): boolean;

    /**
     * bigInt  mod(x,n)
     * return a new bigInt equal to (x mod n) for bigInts x and n.
     */
    export function mod(x: BigInt, n: BigInt): BigInt;

    /**
     * int     modInt(x,n)
     * return x mod n for bigInt x and integer n.
     */
    export function modInt(x: BigInt, n: number): number;

    /**
     * bigInt  mult(x,y)
     * return x*y for bigInts x and y. This is faster when y<x.
     */
    export function mult(x: BigInt, y: BigInt): BigInt;

    /**
     * bigInt  multMod(x,y,n)
     * return (x*y mod n) for bigInts x,y,n.  For greater speed, let y<x.
     */
    export function multMod(x: BigInt, y: BigInt, n: BigInt): BigInt;

    /**
     * boolean negative(x)
     * is bigInt x negative?
     */
    export function negative(x: BigInt): boolean;

    /**
     * bigInt  powMod(x,y,n)
     * return (x**y mod n) where x,y,n are bigInts and ** is exponentiation.  0**0=1. Faster for odd n.
     */
    export function powMod(x: BigInt, y: BigInt, n: BigInt): BigInt;

    /**
     * bigInt  randBigInt(n,s)
     * return an n-bit random BigInt (n>=1).  If s=1, then the most significant of those n bits is set to 1.
     */
    export function randBigInt(n: number, s: number): BigInt;

    /**
     * bigInt  randTruePrime(k)
     * return a new, random, k-bit, true prime bigInt using Maurer's algorithm.
     */
    export function randTruePrime(k: number): BigInt;

    /**
     * bigInt  randProbPrime(k)
     * return a new, random, k-bit, probable prime bigInt (probability it's composite less than 2^-80).
     */
    export function randProbPrime(k: number): BigInt;

    interface str2bigInt_T<T> {
        /**
         * bigInt  str2bigInt(s,b,n,m)
         * return a bigInt for number represented in string s in base b with at least n bits and m array elements
         */
        (s: string, b: T, n?: number, m?: number): BigInt;
    }

    interface str2bigIntSignature extends str2bigInt_T<number>, str2bigInt_T<string> {
    }

    export var str2bigInt: str2bigIntSignature;

    /**
     * bigInt  sub(x,y)
     * return (x-y) for bigInts x and y.  Negative answers will be 2s complement
     */
    export function sub(x: BigInt, y: BigInt): BigInt;

    /**
     * bigInt  trim(x,k)
     * return a copy of x with exactly k leading zero elements
     */
    export function trim(x: BigInt, k: number): BigInt;

    /**
     * void    addInt_(x,n) 
     * do x=x+n where x is a bigInt and n is an integer
     */
    export function addInt_(x: BigInt, n: number): void;

    /**
     * void    add_(x,y)
     * do x=x+y for bigInts x and y
     */
    export function add_(x: BigInt, y: BigInt): void;

    /**
     * void    copy_(x,y)
     * do x=y on bigInts x and y
     */
    export function copy_(x: BigInt, y: BigInt): void;

    /**
     * void    copyInt_(x,n)
     * do x=n on bigInt x and integer n
     */
    export function copyInt_(x: BigInt, n: number): number;

    /**
     * void    GCD_(x,y)
     * set x to the greatest common divisor of bigInts x and y, (y is destroyed).  (This never overflows its array).
     */
    export function GCD_(x: BigInt, y: BigInt): void;

    /**
     * boolean inverseMod_(x,n)
     * do x=x**(-1) mod n, for bigInts x and n. Returns 1 (0) if inverse does (doesn't) exist
     */
    export function inverseMod_(x: BigInt, n: BigInt): boolean;

    /**
     * void    mod_(x,n)
     * do x=x mod n for bigInts x and n. (This never overflows its array).
     */
    export function mod_(x: BigInt, n: BigInt): void;

    /**
     * void    mult_(x,y)
     * do x=x*y for bigInts x and y.
     */
    export function mult_(x: BigInt, y: BigInt): void;

    /**
     * void    multMod_(x,y,n)
     * do x=x*y  mod n for bigInts x,y,n.
     */
    export function multMod_(x: BigInt, y: BigInt, n: BigInt): void;

    /**
     * void    powMod_(x,y,n) 
     * do x=x**y mod n, where x,y,n are bigInts (n is odd) and ** is exponentiation.  0**0=1.
     */
    export function powMod_(x: BigInt, y: BigInt, n: BigInt): void;

    /**
     * void    randBigInt_(b,n,s)
     * do b = an n-bit random BigInt. if s=1, then nth bit (most significant bit) is set to 1. n>=1.
     */
    export function randBigInt_(b: BigInt, n: number, s: number): void;

    /**
     * void    randTruePrime_(ans,k)
     * do ans = a random k-bit true random prime (not just probable prime) with 1 in the msb.
     */
    export function randTruePrime_(ans: BigInt, k: number): void;

    /**
     * void    sub_(x,y)
     * do x=x-y for bigInts x and y. Negative answers will be 2s complement.
     */
    export function sub_(x: BigInt, y: BigInt): void;

    /**
     * void addShift_(x,y,ys)
     * do x=x+(y<<(ys*bpe))
     */
    export function addShift_(x: BigInt, y: BigInt, ys: number): void;

    /**
     * void carry_(x)
     * do carries and borrows so each element of the bigInt x fits in bpe bits.
     */
    export function carry_(x: BigInt): void;

    /**
     * void divide_(x,y,q,r)
     * divide x by y giving quotient q and remainder r
     */
    export function divide_(x: BigInt, y: BigInt, q: BigInt, r: BigInt): void;

    /**
     * int  divInt_(x,n)
     * do x=floor(x/n) for bigInt x and integer n, and return the remainder. (This never overflows its array).
     */
    export function divInt_(x: BigInt, n: number): number;

    /**
     * void eGCD_(x,y,d,a,b)
     * sets a,b,d to positive bigInts such that d = GCD_(x,y) = a*x-b*y
     */
    export function eGCD_(x: BigInt, y: BigInt, d: BigInt, a: BigInt, b: BigInt): void;

    /**
     * void halve_(x)
     * do x=floor(|x|/2)*sgn(x) for bigInt x in 2's complement.  (This never overflows its array).
     */
    export function halve_(x: BigInt): void;

    /**
     * void leftShift_(x,n)
     * left shift bigInt x by n bits.  n<bpe.
     */
    export function leftShift_(x: BigInt, n: number): void;

    /**
     * void linComb_(x,y,a,b)
     * do x=a*x+b*y for bigInts x and y and integers a and b
     */
    export function linComb_(x: BigInt, y: BigInt, a: number, b: number): void;

    /**    
     * void linCombShift_(x,y,b,ys)
     * do x=x+b*(y<<(ys*bpe)) for bigInts x and y, and integers b and ys
     */
    export function linCombShift_(x: BigInt, y: BigInt, b: number, ys: number): void;

    /**
     * void mont_(x,y,n,np)
     * Montgomery multiplication (see comments where the function is defined)
     */
    export function mont_(x: BigInt, y: BigInt, n: BigInt, np: number): void;

    /**
     * void multInt_(x,n)
     * do x=x*n where x is a bigInt and n is an integer.
     */
    export function multInt_(x: BigInt, n: number): void;

    /**
     * void rightShift_(x,n)
     * right shift bigInt x by n bits.  0 <= n < bpe. (This never overflows its array).
     */
    export function rightShift_(x: BigInt, n: number): void;

    /**
     * void squareMod_(x,n)
     * do x=x*x  mod n for bigInts x,n
     */
    export function squareMod_(x: BigInt, n: BigInt): void;

    /**
     * void subShift_(x,y,ys)
     * do x=x-(y<<(ys*bpe)). Negative answers will be 2s complement.
     */
    export function subShift_(x: BigInt, y: BigInt, ys: number): void;
}

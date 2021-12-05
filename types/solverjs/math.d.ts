/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/math/math.js
 */

/**
 * getGcd return the gcd of two numbers.
 */
export function getGcd(arg1: number, arg2: number): number;

/**
 * getFib return the n'th fibonacci number.
 */
export function getFib(arg_n: number): number;

/**
 * printFib return the fibonacci series string up to n.
 */
export function printFib(n: number): string;

/**
 * sumAllDigit return the addition of all the digits in a given number.
 */
export function sumAllDigit(n: number): number;

/**
 * reverseNumber return the reversed value of the given number.
 */
export function reverseNumber(n: number | string): string;

/**
 * isArmstrong return the boolean in respenct of the are armstorng or not.
 */
export function isArmstrong(n: number | string): boolean;

/**
 * sumOfN return the sum of n natural numbers.
 */
export function sumOfN(n: number): number;

/**
 * the `fac` method return the n'th factorial of given number.
 */
export function fac(n: number): BigInt;

/**
 * the pow function return the calculation of x^y.
 */
export function pow(x: number, y: number): number;

/**
 * the len function return the length of number or string.
 */
export function len(x: number | string): number;

/**
 * the isPrime return boolean in respect of the given number prime or not.
 */
export function isPrime(x: number): boolean;

/**
 * isCoPrime function return the boolean in respect of the given number is co-prime or not.
 */
export function isCoPrime(x: number, y: number): boolean;

/**
 * krishnamurthy number is a number the sum of the all fectorial of the all dights is equal to the number itself.
 */
export function isKishnamurthyNumber(n: number): boolean;

/**
 * Average is a terms is define summetion of all the given point and divide by thers numbers of count.
 */
export function avg(arr: number[]): number;

/**
 * mod is define as the absulute value, without the signe.
 */
export function mod(n: number): number;

/**
 * A leap year is a calendar year that contains an additional day check the given year leap year or not.
 */
export function isLeap(year: number): boolean;

/**
 * LCM - Least Comman multiple, find least common multiple of integers a and b
 */
export function lcm(a: number, b: number): number;

/**
 * HCF - Highest Common Factor of the given numbers.
 */
export function hcf(a: number, b: number): number;

/**
 * ASCII Code of the character.
 */
export function ascii(ch: string): number;

/**
 * Number To ASCII code.
 */
export function numToAscii(num: number): string;

/**
 * Reverse the given string.
 */
export function reverse(str: string): string;

/**
 * Palindrome - A palindrome is a word, number, phrase, or other sequence of
 * characters which reads the same backward as forward check string or numebr is
 * palindrome or not.
 */
export function isPalindrome(str: string): boolean;

/**
 * Count the number of work with the help of separetor.
 */
export function wordCount(str: string, separetor: string): number;

/**
 * permutation - get all the permutation of a given string.
 */
export function permutation(str: string): string[];

/**
 * alternative string arrangement.
 */
export function alternativeStringArrange(st1: string, st2: string): string[];

/**
 * indian phone number Validator.
 */
export function phoneValidator(str: string): boolean;

/**
 * Indian phone number extractor.
 */
export function phoneExtractor(str: string): RegExpMatchArray;

/**
 * Use for check the given string are alphanumeric or not.
 */
export function isAlNum(str: string): boolean;

/**
 * Use for check the given stirn is alpha or not.
 */
export function isAlpha(str: string): boolean;

/**
 * This function check the givent string is all decimal characters or not.
 */
export function isDecimal(str: string): boolean;

/**
 * This method check the given string in lower case or not.
 */
export function isLower(str: string): boolean;

/**
 * This method check the given string in upper case or not.
 */
export function isUpper(str: string): boolean;

/**
 * This method is used for the given string is only contain spaces.
 */
export function isSpace(str: string): boolean;

/**
 * This method is used for check the given string is in title form or not.
 */
export function isTitle(str: string): boolean;

/**
 * Fenerate a unique token, every time you run without any arguments.
 */
export function token(): string;

/**
 * randomint function takes two argument as a range and generates a random integer between the given range.
 */
export function randomInt(min: number, max: number): number;

/**
 * Use to find the remainder or modulo division.
 */
export function remainder(divident: number, devisor: number): number;

/**
 * [TODO] Undocumented
 */
export function isPerfectSquare(x: number): boolean;

/**
 * Check fibonacci number : Returns true if n is a Fibinacci Number, else false
 */
export function isFibonacci(num: number): boolean;

/**
 * The max method returns the maximum value from the given array.
 */
export function max(arr: number[]): number;

/**
 * The min method returns the minimum value from the given array.
 */
export function min(arr: number[]): number;

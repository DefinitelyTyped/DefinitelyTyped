/**
 * Docs: https://github.com/suryapratapsinghsuryavanshi/solverjs/blob/main/src/math/math.js
 */
declare namespace SolverJS {
    interface Static {
        /**
         * getGcd return the gcd of two numbers.
         */
        getGcd(arg1: number, arg2: number): number;

        /**
         * getFib return the n'th fibonacci number.
         */
        getFib(arg_n: number): number;

        /**
         * printFib return the fibonacci series string up to n.
         */
        printFib(n: number): string;

        /**
         * sumAllDigit return the addition of all the digits in a given number.
         */
        sumAllDigit(n: number): number;

        /**
         * reverseNumber return the reversed value of the given number.
         */
        reverseNumber(n: number | string): string;

        /**
         * isArmstrong return the boolean in respenct of the are armstorng or not.
         */
        isArmstrong(n: number | string): boolean;

        /**
         * sumOfN return the sum of n natural numbers.
         */
        sumOfN(n: number): number;

        /**
         * the `fac` method return the n'th factorial of given number.
         */
        fac(n: number): BigInt;

        /**
         * the pow function return the calculation of x^y.
         */
        pow(x: number, y: number): number;

        /**
         * the len function return the length of number or string.
         */
        len(x: number | string): number;

        /**
         * the isPrime return boolean in respect of the given number prime or not.
         */
        isPrime(x: number): boolean;

        /**
         * isCoPrime function return the boolean in respect of the given number is co-prime or not.
         */
        isCoPrime(x: number, y: number): boolean;

        /**
         * krishnamurthy number is a number the sum of the all fectorial of the all dights is equal to the number itself.
         */
        isKishnamurthyNumber(n: number): boolean;

        /**
         * Average is a terms is define summetion of all the given point and divide by thers numbers of count.
         */
        avg(arr: number[]): number;

        /**
         * mod is define as the absulute value, without the signe.
         */
        mod(n: number): number;

        /**
         * A leap year is a calendar year that contains an additional day check the given year leap year or not.
         */
        isLeap(year: number): boolean;

        /**
         * LCM - Least Comman multiple, find least common multiple of integers a and b
         */
        lcm(a: number, b: number): number;

        /**
         * HCF - Highest Common Factor of the given numbers.
         */
        hcf(a: number, b: number): number;

        /**
         * ASCII Code of the character.
         */
        ascii(ch: string): number;

        /**
         * Number To ASCII code.
         */
        numToAscii(num: number): string;

        /**
         * Reverse the given string.
         */
        reverse(str: string): string;

        /**
         * Palindrome - A palindrome is a word, number, phrase, or other sequence of
         * characters which reads the same backward as forward check string or numebr is
         * palindrome or not.
         */
        isPalindrome(str: string): boolean;

        /**
         * Count the number of work with the help of separetor.
         */
        wordCount(str: string, separetor: string): number;

        /**
         * permutation - get all the permutation of a given string.
         */
        permutation(str: string): string[];

        /**
         * alternative string arrangement.
         */
        alternativeStringArrange(st1: string, st2: string): string[];

        /**
         * indian phone number Validator.
         */
        phoneValidator(str: string): boolean;

        /**
         * Indian phone number extractor.
         */
        phoneExtractor(str: string): RegExpMatchArray;

        /**
         * Use for check the given string are alphanumeric or not.
         */
        isAlNum(str: string): boolean;

        /**
         * Use for check the given stirn is alpha or not.
         */
        isAlpha(str: string): boolean;

        /**
         * This function check the givent string is all decimal characters or not.
         */
        isDecimal(str: string): boolean;

        /**
         * This method check the given string in lower case or not.
         */
        isLower(str: string): boolean;

        /**
         * This method check the given string in upper case or not.
         */
        isUpper(str: string): boolean;

        /**
         * This method is used for the given string is only contain spaces.
         */
        isSpace(str: string): boolean;

        /**
         * This method is used for check the given string is in title form or not.
         */
        isTitle(str: string): boolean;

        /**
         * Fenerate a unique token, every time you run without any arguments.
         */
        token(): string;

        /**
         * randomint function takes two argument as a range and generates a random integer between the given range.
         */
        randomInt(min: number, max: number): number;

        /**
         * Use to find the remainder or modulo division.
         */
        remainder(divident: number, devisor: number): number;

        /**
         * [TODO] Undocumented
         */
        isPerfectSquare(x: number): boolean;

        /**
         * Check fibonacci number : Returns true if n is a Fibinacci Number, else false
         */
        isFibonacci(num: number): boolean;

        /**
         * The max method returns the maximum value from the given array.
         */
        max(arr: number[]): number;

        /**
         * The min method returns the minimum value from the given array.
         */
        min(arr: number[]): number;
    }
}

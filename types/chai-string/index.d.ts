/// <reference types="chai" />

declare global {
    namespace Chai {
        interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
            startsWith(expected: string, message?: string): Assertion;
            startWith(expected: string, message?: string): Assertion;
            endsWith(expected: string, message?: string): Assertion;
            endWith(expected: string, message?: string): Assertion;
            equalIgnoreCase(expected: string, message?: string): Assertion;
            equalIgnoreSpaces(expected: string, message?: string): Assertion;
            containIgnoreCase(expected: string, msg?: string): Assertion;
            containIgnoreSpaces(expected: string, msg?: string): Assertion;
            singleLine(message?: string): Assertion;
            reverseOf(message?: string): Assertion;
            palindrome(message?: string): Assertion;
            entriesCount(substr: string, expected: number, message?: string): Assertion;
            indexOf(str: string, substr: string, index: number, msg?: string): Assertion;
        }

        interface Assert {
            startsWith(val: string, exp: string, msg?: string): void;
            notStartsWith(val: string, exp: string, msg?: string): void;
            endsWith(val: string, exp: string, msg?: string): void;
            notEndsWith(val: string, exp: string, msg?: string): void;
            equalIgnoreCase(val: string, exp: string, msg?: string): void;
            notEqualIgnoreCase(val: string, exp: string, msg?: string): void;
            equalIgnoreSpaces(val: string, exp: string, msg?: string): void;
            notEqualIgnoreSpaces(val: string, exp: string, msg?: string): void;
            containIgnoreCase(val: string, exp: string, msg?: string): void;
            notContainIgnoreCase(val: string, exp: string, msg?: string): void;
            containIgnoreSpaces(val: string, exp: string, msg?: string): void;
            notContainIgnoreSpaces(val: string, exp: string, msg?: string): void;
            singleLine(val: string, msg?: string): void;
            notSingleLine(val: string, msg?: string): void;
            reverseOf(val: string, exp: string, msg?: string): void;
            notReverseOf(val: string, exp: string, msg?: string): void;
            palindrome(val: string, msg?: string): void;
            notPalindrome(val: string, msg?: string): void;
            entriesCount(str: string, substr: string, count: number, msg?: string): void;
            indexOf(str: string, substr: string, index: number, msg?: string): void;
        }
    }
}

declare const chaiString: Chai.ChaiPlugin;
declare namespace chaiString {}
export = chaiString;

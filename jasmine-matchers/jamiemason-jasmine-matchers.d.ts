// Type definitions for jasmine-matchers 2.0.0-beta2
// Project: https://github.com/JamieMason/Jasmine-Matchers
// Definitions by: UserPixel <https://github.com/UserPixel>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
Typings 2015 UserPixel

TypeScript tests auto-extracted from jasmine-matchers unit test.

Original jasmine-matchers license applies:

Copyright (C) 2013, uxebu Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/// <reference path="../jasmine/jasmine.d.ts" />

declare module jasmine {
    interface Matchers {
        // These functions are written in the order defined in the src directory of jasmine-matchers
        // The type system is used smartly whenever it can provide value (by looking at the code of every matcher)
        toBeAfter(otherDate: Date, actualDate: Date): boolean; //
        toBeArray(actualArray: any[]): boolean; //
        toBeArrayOfBooleans(actualArray: any[]): boolean; //
        toBeArrayOfNumbers(actualArray: any[]): boolean;
        toBeArrayOfObjects(actualArray: any[]): boolean;
        toBeArrayOfSize(size: number, actualArray: any[]): boolean;
        toBeArrayOfStrings(actualArray: any[]): boolean;
        toBeBefore(otherDate: Date, actualDate: Date): boolean; //
        toBeBoolean(actual: boolean): boolean;
        toBeCalculable(actual: number): boolean;
        toBeDate(actual: Date): boolean;
        toBeEmptyArray(actualArray: any[]): boolean;
        toBeEmptyObject(actual: {}): boolean;
        toBeEmptyString(actual: string): boolean;
        toBeEvenNumber(actual: number): boolean;
        toBeFalse(actual: boolean): boolean;
        toBeFunction(actual: any): boolean;
        toBeHtmlString(actual: string): boolean;
        toBeIso8601(actual: string): boolean;
        toBeJsonString(actual: string): boolean;
        toBeLongerThan(actual: string): boolean;
        toBeNonEmptyArray(actualArray: any[]): boolean;
        toBeNonEmptyObject(actual: {}): boolean;
        toBeNonEmptyString(actual: string): boolean;
        toBeNumber(actual: number): boolean;
        toBeObject(actual: {}): boolean;
        toBeOddNumber(actual: number): boolean;
        toBeSameLengthAs(other: string, actual: string): boolean;
        toBeShorterThan(other: string, actual: string): boolean;
        toBeString(actual: string): boolean;
        toBeTrue(actual: boolean): boolean;
        toBeWhitespace(actual: string): boolean;
        toBeWholeNumber(actual: number): boolean;
        toBeWithinRange(floor: number, ceiling: number, actual: number): boolean;

        toEndWith(subString: string, actual: string): boolean;

        toHaveArray(key: string, actual: {}): boolean;
        toHaveArrayOfBooleans(key: string, actual: {}): boolean;
        toHaveArrayOfNumbers(key: string, actual: {}): boolean;
        toHaveArrayOfObjects(key: string, actual: {}): boolean;
        toHaveArrayOfSize(key: string, size: number, actual: {}): boolean;
        toHaveArrayOfStrings(key: string, actual: {}): boolean;
        toHaveBoolean(key: string, actual: {}): boolean;
        toHaveCalculable(key: string, actual: {}): boolean;
        toHaveDate(key: string, actual: {}): boolean;
        toHaveDateAfter(key: string, actual: {}): boolean;
        toHaveDateBefore(key: string, actual: {}): boolean;
        toHaveEmptyArray(key: string, actual: {}): boolean;
        toHaveEmptyObject(key: string, actual: {}): boolean;
        toHaveEmptyString(key: string, actual: {}): boolean;
        toHaveEvenNumber(key: string, actual: {}): boolean;
        toHaveFalse(key: string, actual: {}): boolean;
        toHaveHtmlString(key: string, actual: {}): boolean;
        toHaveIso8601(key: string, actual: {}): boolean;
        toHaveJsonString(key: string, actual: {}): boolean;
        toHaveMember(key: string, actual: {}): boolean;
        toHaveMethod(key: string, actual: {}): boolean;
        toHaveNonEmptyArray(key: string, actual: {}): boolean;
        toHaveNonEmptyObject(key: string, actual: {}): boolean;
        toHaveNonEmptyString(key: string, actual: {}): boolean;
        toHaveNumber(key: string, actual: {}): boolean;
        toHaveNumberWithinRange(key: string, actual: {}): boolean;
        toHaveObject(key: string, actual: {}): boolean;
        toHaveOddNumber(key: string, actual: {}): boolean;
        toHaveString(key: string, actual: {}): boolean;
        toHaveStringLongerThan(key: string, actual: {}): boolean;
        toHaveStringSameLengthAs(key: string, actual: {}): boolean;
        toHaveStringShorterThan(key: string, actual: {}): boolean;
        toHaveTrue(key: string, actual: {}): boolean;
        toHaveWhitespaceString(key: string, actual: {}): boolean;
        toHaveWholeNumber(key: string, actual: {}): boolean;

        toImplement(api: {}, actual: {}): boolean;

        toStartWith(subString: string, actual: string): boolean;

        toThrowAnyError(throwerFn: () => any): boolean;
        toThrowErrorOfType(type: string, throwerFn: () => any): boolean;
    }
}

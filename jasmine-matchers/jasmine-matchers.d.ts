// Type definitions for jasmine-matchers v0.2.1
// Project: https://github.com/uxebu/jasmine-matchers
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
Typings 2013 Bart van der Schoor

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

        // Arrays
        toBeArray(): boolean;
        toBeArrayOfBooleans(): boolean;
        toBeArrayOfNumbers(): boolean;
        toBeArrayOfObjects(): boolean;
        toBeArrayOfSize(size: any): boolean;
        toBeArrayOfStrings(): boolean;
        toBeEmptyArray(): boolean;
        toBeNonEmptyArray(): boolean;
        toHaveArray(memberName: string): boolean;
        toHaveArrayOfBooleans(memberName: string): boolean;
        toHaveArrayOfNumbers(memberName: string): boolean;
        toHaveArrayOfObjects(memberName: string): boolean;
        toHaveArrayOfSize(memberName: string, size: number): boolean;
        toHaveArrayOfStrings(memberName: string): boolean;
        toHaveEmptyArray(memberName: string): boolean;
        toHaveNonEmptyArray(memberName: string): boolean;

        // Booleans
        toBeBoolean(): boolean;
        toBeFalse(): boolean;
        toBeTrue(): boolean;
        toHaveBoolean(memberName: string): boolean;
        toHaveFalse(memberName: string): boolean;
        toHaveTrue(memberName: string): boolean;

        // Dates
        toBeAfter(date: Date): boolean;
        toBeBefore(date: Date): boolean;
        toBeDate(): boolean;
        toBeIso8601(): boolean;
        toHaveDate(memberName: string): boolean;
        toHaveDateAfter(memberName: string, date: Date): boolean;
        toHaveDateBefore(memberName: string, date: Date): boolean;
        toHaveIso8601(memberName: string): boolean;

        // Functions and Errors
        toBeFunction(): boolean;
        toThrowError(): boolean;
        toThrowErrorOfType(type: any): boolean;
        toThrowAnyError(): boolean;

        // Numbers
        toBeCalculable(): boolean;
        toBeEvenNumber(): boolean;
        toBeNumber(): boolean;
        toBeOddNumber(): boolean;
        toBeWholeNumber(): boolean;
        toBeWithinRange(floor: number, ceiling: number): boolean;
        toHaveCalculable(memberName: string): boolean;
        toHaveEvenNumber(memberName: string): boolean;
        toHaveMethod(memberName: string): boolean;
        toHaveNumber(memberName: string): boolean;
        toHaveNumberWithinRange(memberName: string, floor: number, ceiling: number): boolean;
        toHaveOddNumber(memberName: string): boolean;
        toHaveWholeNumber(memberName: string): boolean;

        // Objects
        toBeEmptyObject(): boolean;
        toBeNonEmptyObject(): boolean;
        toBeObject(): boolean;
        toHaveEmptyObject(memberName: string): boolean;
        toHaveMember(memberName: string): boolean;
        toHaveNonEmptyObject(memberName: string): boolean;
        toHaveObject(memberName: string): boolean;
        toImplement(other: any): boolean;

        // Strings
        toBeEmptyString(): boolean;
        toBeHtmlString(): boolean;
        toBeJsonString(): boolean;
        toBeLongerThan(other: string): boolean;
        toBeNonEmptyString(): boolean;
        toBeSameLengthAs(other: string): boolean;
        toBeShorterThan(other: string): boolean;
        toBeString(): boolean;
        toBeWhitespace(): boolean;
        toEndWith(expected: string): boolean;
        toStartWith(expected: string): boolean;
        toHaveEmptyString(memberName: string): boolean;
        toHaveHtmlString(memberName: string): boolean;
        toHaveJsonString(memberName: string): boolean;
        toHaveNonEmptyString(memberName: string): boolean;
        toHaveString(memberName: string): boolean;
        toHaveStringLongerThan(memberName: string, other: string): boolean;
        toHaveStringSameLengthAs(memberName: string, other: string): boolean;
        toHaveStringShorterThan(memberName: string, other: string): boolean;
        toHaveWhitespaceString(memberName: string): boolean;
    }
}


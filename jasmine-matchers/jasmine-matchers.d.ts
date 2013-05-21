// Type definitions for jasmine-matchers v0.2.1 API
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

        //toBe
        toBeArray(): bool;
        toBeCloseToOneOf(values: any[], isCloseToFunction: (actual: number, expected: number) => bool): bool;
        toBeInstanceOf(Constructor: Function): bool;
        toBeInRange(min: number, max: number): bool;
        toBeNan(): bool;
        toBeNumber(): bool;
        toBeOfType(type: string): bool;
        toBeOneOf(values: any[]): bool;

        //toContain
        toContainOnce(value: any): bool;

        //toHave
        toHaveBeenCalledXTimes(count:number): bool;
        toHaveLength(length:number): bool;
        toHaveOwnProperties(...names:string[]): bool;
        toHaveOwnPropertiesWithValues(obj:Object): bool;
        toHaveProperties(...names:string[]): bool;
        toHavePropertiesWithValues(obj:Object): bool;
        toExactlyHaveProperties(...names:string[]): bool;

        //toStartEndWith
        toStartWith(value:any): bool;
        toStartWith(value:any[]): bool;

        toEndWith(value:any): bool;
        toEndWith(values:any[]): bool;

        toEachStartWith(searchString:string): bool;
        toSomeStartWith(searchString:string): bool;

        toEachEndWith(searchString:string): bool;
        toSomeEndWith(searchString:string): bool;

        toStartWithEither(...searchString:any[]): bool;

        //toThrow
        toThrowInstanceOf(klass:Function): bool;
        toThrowStartsWith(text:string): bool;
    }
}

